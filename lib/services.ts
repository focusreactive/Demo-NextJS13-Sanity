export async function createSanityProject(email: string) {
  try {
    console.log('Start creating sanity💲 project...⏳');

    const response = await fetch('https://api.sanity.io/v2021-06-07/projects', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.SANITY_PERSONAL_AUTH_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        displayName: `${email}-${process.env.PROJECT_NAME}`,
        organizationId: process.env.SANITY_ORGANIZATION_ID,
      }),
    });

    if (response.status === 401) {
      throw new Error('Invalid sanity token');
    }

    console.log('Sanity💲 project created...✅');

    return (await response.json()).id as string;
  } catch (error) {
    console.warn(error);
  }
}

export async function createVercelProject({
  sanityProjectId,
  sanityDatasetName,
  projectNamePrifix,
}: {
  sanityProjectId: string;
  sanityDatasetName: string;
  projectNamePrifix: string;
}) {
  try {
    console.log('Start creating vercel🔺 project...⏳');

    const projectName = `${projectNamePrifix}-${process.env.PROJECT_NAME}`;
    const response = await fetch(`https://api.vercel.com/v9/projects?teamId=${process.env.VERCEL_FR_TEAM_ID}`, {
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
          },
          {
            key: 'NEXT_PUBLIC_SANITY_DATASET',
            value: sanityDatasetName,
          },
          {
            key: 'TEAM_GITHUB_REPO_ID',
            value: process.env.TEAM_GITHUB_REPO_ID,
          },
          {
            key: 'TEAM_GITHUB_REPO_PRODUCTION_BRANCH',
            value: process.env.TEAM_GITHUB_REPO_PRODUCTION_BRANCH,
          },
          {
            key: 'REPO_TYPE',
            value: process.env.REPO_TYPE,
          },
          {
            key: 'VERCEL_PERSONAL_AUTH_TOKEN',
            value: process.env.VERCEL_PERSONAL_AUTH_TOKEN,
          },
          {
            key: 'VERCEL_FR_TEAM_ID',
            value: process.env.VERCEL_FR_TEAM_ID,
          },
        ].map((v) => ({ ...v, target: ['production', 'preview', 'development'], type: 'encrypted' })),
        framework: 'nextjs',
        gitRepository: {
          repo: 'focusreactive/mvp-nextjs-sanity',
          type: 'github',
        },
        publicSource: false,
      }),
    });

    if (response.status === 401) {
      throw new Error('Invalid vercel token');
    }

    console.log('Vercel🔺 project created...✅');
    const projectData = await response.json();

    return {
      projectId: projectData.id as string,
      projectName: projectData.name as string,
      deploymentUrl: `https://${projectData.name}.vercel.app`,
    };
  } catch (error) {
    console.warn(error);
  }
}

// Github workflow executes commands in following order:
// 1. Add envs to vercel project
// 2. Add sanity CORS entry
// 3. Invite user to sanity project
// 4. Create a new sanity dataset
// 5. Fill the dataset with data from db/prod-copy.tar.gz
// 6. Add deploy hook(/api/roll-out/deploy) to sanity project
// 7. Create a new vercel deployment
export async function triggerGithubWorkflow({
  sanityProjectId,
  sanityDatasetName,
  vercelProjectId,
  vercelProjectName,
  vercelDeploymentUrl,
  email,
}: {
  sanityProjectId: string;
  sanityDatasetName: string;
  vercelProjectId: string;
  vercelProjectName: string;
  vercelDeploymentUrl: string;
  email: string;
}) {
  try {
    console.log('Triggering github workflow...⏳');

    const response = await fetch(
      `https://api.github.com/repos/focusreactive/Demo-NextJS13-Sanity/actions/workflows/75419986/dispatches`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${process.env.GITHUB_PERSONAL_ACCESS_TOKEN}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ref: process.env.TEAM_GITHUB_REPO_PRODUCTION_BRANCH,
          inputs: {
            email: email,
            'sanity-project-id': sanityProjectId,
            'sanity-dataset-name': sanityDatasetName,
            'vercel-project-id': vercelProjectId,
            'vercel-project-name': vercelProjectName,
            'vercel-deployment-url': vercelDeploymentUrl,
          },
        }),
      },
    );

    if (response.status === 401) {
      throw new Error('Invalid github token');
    }

    console.log('Github workflow triggered...✅');
  } catch (e) {
    console.log(e);
  }
}
