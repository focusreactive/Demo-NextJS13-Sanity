type VercelProjectOptions = {
  sanityProjectId: string;
  sanityDatasetName: string;
  username: string;
};

export async function createVercelProject({ sanityProjectId, sanityDatasetName, username }: VercelProjectOptions) {
  console.log('creating vercel project 🏎');
  try {
    const projectName = `${username}-${process.env.PROJECT_NAME}`;
    const result = await fetch(`https://api.vercel.com/v9/projects?teamId=${process.env.VERCEL_FR_TEAM_ID}`, {
      headers: {
        Authorization: `Bearer ${process.env.VERCEL_PERSONAL_AUTH_TOKEN}`,
      },
      method: 'POST',
      body: JSON.stringify({
        name: projectName,
        environmentVariables: [
          {
            key: 'NEXT_PUBLIC_SANITY_PROJECT_ID',
            value: sanityProjectId,
            target: ['production', 'preview', 'development'],
            type: 'encrypted',
          },
          {
            key: 'NEXT_PUBLIC_SANITY_DATASET',
            value: sanityDatasetName,
            target: ['production', 'preview', 'development'],
            type: 'encrypted',
          },
        ],
        framework: 'nextjs',
        gitRepository: {
          repo: 'focusreactive/mvp-nextjs-sanity',
          type: 'github',
        },
        publicSource: false,
      }),
    });
    console.log('vercel project successfully created 🔥');

    const projectData = await result.json();

    console.log('vercel project data');
    // console.log(projectData);

    const triggeredDeploymentData = await createVercelProjectDeployment({
      projectId: projectData.id,
      projectName: projectData.name,
    });

    // console.log('vercel triggered deployment data');
    // console.log(triggeredDeploymentData);

    return {
      projectId: projectData.id,
      projectName: projectData.name,
      repoId: projectData.link.repoId,
      productionBranch: projectData.link.productionBranch,
      type: projectData.link.type,
      deploymentUrl: `https://${triggeredDeploymentData.name}.vercel.app`,
    };
    // project data
    // ________________
    // {
    //   accountId: 'team_cL4aOUKlSIchRRY9zAbH7cMT',
    //   autoExposeSystemEnvs: true,
    //   autoAssignCustomDomains: true,
    //   autoAssignCustomDomainsUpdatedBy: 'system',
    //   buildCommand: null,
    //   createdAt: 1698246533025,
    //   devCommand: null,
    //   directoryListing: false,
    //   env: [
    //     {
    //       type: 'encrypted',
    //       key: 'NEXT_PUBLIC_SANITY_PROJECT_ID',
    //       value: 'hboFenNez1i09RA9xMyBsukQBLT247qjydf9GQHUwjs=',
    //       target: [Array],
    //       configurationId: null,
    //       createdAt: 1698246532986,
    //       updatedAt: 1698246532986,
    //       createdBy: '7gWxe4UZM4gkxfxVyL1rEIyQ',
    //       updatedBy: null,
    //       id: '1KsgUyiPOYKm1yBF'
    //     },
    //     {
    //       type: 'encrypted',
    //       key: 'NEXT_PUBLIC_SANITY_DATASET',
    //       value: '3BbRT9Fri1OBIoEje9VdotWJYEi55N8TyeAyDCCfE34=',
    //       target: [Array],
    //       configurationId: null,
    //       createdAt: 1698246532986,
    //       updatedAt: 1698246532986,
    //       createdBy: '7gWxe4UZM4gkxfxVyL1rEIyQ',
    //       updatedBy: null,
    //       id: 'iGITL3zfdGqlqiMz'
    //     }
    //   ],
    //   framework: 'nextjs',
    //   gitForkProtection: true,
    //   gitLFS: false,
    //   id: 'prj_C89ENgj1L71e4e3WzK6mXz4Poqfy',
    //   installCommand: null,
    //   lastRollbackTarget: null,
    //   lastAliasRequest: null,
    //   name: 'testroll1-mvp-next-sanity',
    //   nodeVersion: '18.x',
    //   outputDirectory: null,
    //   publicSource: null,
    //   rootDirectory: null,
    //   serverlessFunctionRegion: 'iad1',
    //   sourceFilesOutsideRootDirectory: true,
    //   updatedAt: 1698246533025,
    //   live: false,
    //   gitComments: { onCommit: false, onPullRequest: true },
    //   link: {
    //     type: 'github',
    //     repo: 'mvp-nextjs-sanity',
    //     repoId: 684968839,
    //     org: 'focusreactive',
    //     gitCredentialId: 'cred_513ed4e2f63007ff48ac984cf548487570dbc9a0',
    //     productionBranch: 'main',
    //     createdAt: 1698246532986,
    //     updatedAt: 1698246532986,
    //     deployHooks: []
    //   },
    //   latestDeployments: [],
    //   targets: {}
    // }

    // deploy data
    // _____________________________
    // {
    //   alias: [
    //     'rollout4-mvp-next-sanity-focusreactive.vercel.app',
    //     'rollout4-mvp-next-sanity-git-main-focusreactive.vercel.app'
    //   ],
    //   aliasAssigned: false,
    //   automaticAliases: [
    //     'rollout4-mvp-next-sanity-focusreactive.vercel.app',
    //     'rollout4-mvp-next-sanity-git-main-focusreactive.vercel.app'
    //   ],
    //   bootedAt: 1698247364349,
    //   buildingAt: 1698247364349,
    //   buildSkipped: false,
    //   createdAt: 1698247364349,
    //   creator: { uid: '7gWxe4UZM4gkxfxVyL1rEIyQ', username: 'dogfrogfog' },
    //   gitSource: {
    //     repoId: 684968839,
    //     ref: 'main',
    //     type: 'github',
    //     sha: 'be11235a08ea6a7fce14a2ed6458f807906bbe2b'
    //   },
    //   id: 'dpl_9KqXQnc7jsjDf1fUH7LpEBtEbz3W',
    //   isFirstBranchDeployment: true,
    //   lambdas: [
    //     {
    //       id: 'bld_oguwwbc2r',
    //       createdAt: 1698247364364,
    //       entrypoint: '.',
    //       readyState: 'READY',
    //       readyStateAt: 1698247364364,
    //       output: []
    //     }
    //   ],
    //   name: 'rollout4-mvp-next-sanity',
    //   meta: {
    //     githubCommitAuthorName: 'maksim hodasevich',
    //     githubCommitMessage: 'Update README.md',
    //     githubCommitOrg: 'focusreactive',
    //     githubCommitRef: 'main',
    //     githubCommitRepo: 'mvp-nextjs-sanity',
    //     githubCommitSha: 'be11235a08ea6a7fce14a2ed6458f807906bbe2b',
    //     githubDeployment: '1',
    //     githubOrg: 'focusreactive',
    //     githubRepo: 'mvp-nextjs-sanity',
    //     githubRepoOwnerType: 'Organization',
    //     githubCommitRepoId: '684968839',
    //     githubRepoId: '684968839',
    //     githubRepoVisibility: 'public',
    //     githubCommitAuthorLogin: 'dogfrogfog',
    //     branchAlias: 'rollout4-mvp-next-sanity-git-main-focusreactive.vercel.app'
    //   },
    //   public: false,
    //   readyState: 'QUEUED',
    //   regions: [ 'iad1' ],
    //   status: 'QUEUED',
    //   target: 'production',
    //   team: {
    //     id: 'team_cL4aOUKlSIchRRY9zAbH7cMT',
    //     name: 'Focusreactive',
    //     slug: 'focusreactive'
    //   },
    //   type: 'LAMBDAS',
    //   url: 'rollout4-mvp-next-sanity-c6zyshl61-focusreactive.vercel.app',
    //   version: 2,
    //   previewCommentsEnabled: true,
    //   aliasAssignedAt: null,
    //   build: {
    //     env: [
    //       'CI',
    //       'VERCEL',
    //       'VERCEL_ENV',
    //       'TURBO_REMOTE_ONLY',
    //       'TURBO_RUN_SUMMARY',
    //       'NX_DAEMON',
    //       'VERCEL_URL',
    //       'VERCEL_GIT_PROVIDER',
    //       'VERCEL_GIT_PREVIOUS_SHA',
    //       'VERCEL_GIT_REPO_SLUG',
    //       'VERCEL_GIT_REPO_OWNER',
    //       'VERCEL_GIT_REPO_ID',
    //       'VERCEL_GIT_COMMIT_REF',
    //       'VERCEL_GIT_COMMIT_SHA',
    //       'VERCEL_GIT_COMMIT_MESSAGE',
    //       'VERCEL_GIT_COMMIT_AUTHOR_LOGIN',
    //       'VERCEL_GIT_COMMIT_AUTHOR_NAME',
    //       'VERCEL_GIT_PULL_REQUEST_ID',
    //       'NEXT_PUBLIC_SANITY_PROJECT_ID',
    //       'NEXT_PUBLIC_SANITY_DATASET',
    //       'VERCEL_BRANCH_URL',
    //       'VERCEL_TLA_LAUNCHER',
    //       'VERCEL_DISCOVER_FOLDER_SIZES',
    //       'ENABLE_VC_BUILD',
    //       'VERCEL_BUILD_OUTPUTS_EDGE_FUNCTION',
    //       'VERCEL_EDGE_FUNCTIONS_REGIONAL_INVOCATION',
    //       'VERCEL_EDGE_FUNCTIONS_EMBEDDED_SOURCEMAPS',
    //       'VERCEL_EDGE_FUNCTIONS_STRICT_MODE',
    //       'USE_OUTPUT_FOR_EDGE_FUNCTIONS',
    //       'NEXT_PRIVATE_MULTI_PAYLOAD',
    //       'VERCEL_RICHER_DEPLOYMENT_OUTPUTS',
    //       'VERCEL_EDGE_SUSPENSE_CACHE',
    //       'VERCEL_SERVERLESS_SUSPENSE_CACHE',
    //       'VERCEL_BUILD_MONOREPO_SUPPORT',
    //       'VERCEL_USE_NODE_BRIDGE_PRIVATE_LATEST',
    //       'VERCEL_ENABLE_NODE_COMPATIBILITY',
    //       'VERCEL_DEPLOYMENT_SKEW_HANDLING',
    //       'VERCEL_ENCRYPT_DEPLOYMENT_BUILD_ENV',
    //       'VERCEL_N1_LAMBDA_INVOCATION'
    //     ]
    //   },
    //   builds: [],
    //   createdIn: 'sfo1',
    //   env: [
    //     'VERCEL',
    //     'VERCEL_ENV',
    //     'TURBO_REMOTE_ONLY',
    //     'TURBO_RUN_SUMMARY',
    //     'NX_DAEMON',
    //     'VERCEL_URL',
    //     'VERCEL_GIT_PROVIDER',
    //     'VERCEL_GIT_PREVIOUS_SHA',
    //     'VERCEL_GIT_REPO_SLUG',
    //     'VERCEL_GIT_REPO_OWNER',
    //     'VERCEL_GIT_REPO_ID',
    //     'VERCEL_GIT_COMMIT_REF',
    //     'VERCEL_GIT_COMMIT_SHA',
    //     'VERCEL_GIT_COMMIT_MESSAGE',
    //     'VERCEL_GIT_COMMIT_AUTHOR_LOGIN',
    //     'VERCEL_GIT_COMMIT_AUTHOR_NAME',
    //     'VERCEL_GIT_PULL_REQUEST_ID',
    //     'NEXT_PUBLIC_SANITY_PROJECT_ID',
    //     'NEXT_PUBLIC_SANITY_DATASET',
    //     'VERCEL_BRANCH_URL'
    //   ],
    //   functions: null,
    //   inspectorUrl: 'https://vercel.com/focusreactive/rollout4-mvp-next-sanity/9KqXQnc7jsjDf1fUH7LpEBtEbz3W',
    //   isInConcurrentBuildsQueue: false,
    //   ownerId: 'team_cL4aOUKlSIchRRY9zAbH7cMT',
    //   plan: 'pro',
    //   projectId: 'prj_ADrCAC5XAlAryAnzyLVHrFm26Uh4',
    //   projectSettings: {
    //     buildCommand: null,
    //     devCommand: null,
    //     framework: 'nextjs',
    //     commandForIgnoringBuildStep: null,
    //     installCommand: null,
    //     outputDirectory: null
    //   },
    //   routes: null
    // }
  } catch (e) {
    console.log(e);
  }
}

export const createVercelProjectDeployment = async ({
  projectName,
  projectId,
}: {
  projectId: string;
  projectName: string;
}) => {
  console.log('creating deployment');
  try {
    const result = await fetch(`https://api.vercel.com/v13/deployments?teamId=${process.env.VERCEL_FR_TEAM_ID}`, {
      headers: {
        Authorization: `Bearer ${process.env.VERCEL_PERSONAL_AUTH_TOKEN}`,
      },
      method: 'POST',
      body: JSON.stringify({
        name: projectName,
        project: projectId,
        gitSource: {
          repoId: process.env.GITHUB_REPO_ID,
          ref: process.env.GITHUB_REPO_PRODUCTION_BRANCH,
          type: process.env.REPO_TYPE,
        },
        target: 'production',
      }),
    });
    console.log('triggered deployment creation');

    const data = await result.json();

    return data;
  } catch {
    console.log('error creating deployment');
  }
};
