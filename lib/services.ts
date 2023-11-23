export async function createSanityProject(projectName: string) {
  try {
    console.log('Start creating sanity💲 project...⏳');

    const response = await fetch('https://api.sanity.io/v2021-06-07/projects', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.SANITY_PERSONAL_AUTH_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        displayName: projectName,
        organizationId: process.env.SANITY_ORGANIZATION_ID,
      }),
    });

    if (response.status === 401) {
      throw new Error('Invalid sanity token');
    }

    const data = await response.json();

    console.log('Sanity💲 project created...✅');

    return data.id as string;
  } catch (error) {
    console.warn(error);
  }
}

export async function createSanityReadToken(projectId: string) {
  try {
    console.log('Creating read token 🔑 for sanity project...⏳');

    const response = await fetch(`https://api.sanity.io/v2021-06-07/projects/${projectId}/tokens`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.SANITY_PERSONAL_AUTH_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        label: 'sanity preview read token',
        roleName: 'viewer',
      }),
    });

    if (response.status === 401) {
      throw new Error('Invalid sanity token');
    }

    const data = await response.json();

    console.log('Sanity read token 🔑 created...✅');

    return data.key as string;
  } catch (error) {
    console.warn(error);
  }
}

export async function createVercelProject({
  projectName,
  sanityProjectId,
  sanityDatasetName,
  sanityReadToken,
}: {
  projectName: string;
  sanityProjectId: string;
  sanityDatasetName: string;
  sanityReadToken: string;
}) {
  try {
    console.log('Start creating vercel🔺 project...⏳');

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
            key: 'SANITY_API_READ_TOKEN',
            value: sanityReadToken,
          },
          {
            key: 'REPO_ID',
            value: process.env.REPO_ID,
          },
          {
            key: 'REPO_PROD_BRANCH',
            value: process.env.REPO_PROD_BRANCH,
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
          {
            key: 'ROLL_OUT_API_TOKEN',
            value: process.env.ROLL_OUT_API_TOKEN,
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

    const data = await response.json();

    console.log(data);

    console.log('Vercel🔺 project created...✅');

    return {
      projectId: data.id as string,
      projectName: data.name as string,
      deploymentUrl: `https://${data.name}.vercel.app`,
    };
  } catch (error) {
    console.warn(error);
  }
}

export async function getVercelProjects() {
  try {
    console.log('Fetching vercel🔺 projects...⏳');

    const response = await fetch(
      `https://api.vercel.com/v9/projects?repoId=${process.env.REPO_ID}&teamId=${process.env.VERCEL_FR_TEAM_ID}&search=${process.env.PROJECT_NAME}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.VERCEL_PERSONAL_AUTH_TOKEN}`,
        },
      },
    );

    if (response.status === 401) {
      throw new Error('Invalid vercel token');
    }

    const data = await response.json();

    console.log('Vercel🔺 projects fetched...✅');

    return data.projects as any[];
  } catch (error) {
    console.warn(error);
  }
}

// Github workflow executes commands in following order:
// 1. Add envs to vercel project
// 2. Add sanity CORS entry
// 3. Invite user to sanity project
// 4. Create a new sanity dataset
// 5. Fill the dataset with data from prod-copy.tar.gz
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
      `https://api.github.com/repos/${process.env.REPO_NAME}/actions/workflows/${process.env.REPO_WORKFLOW_ID}/dispatches`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${process.env.GITHUB_PERSONAL_ACCESS_TOKEN}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ref: process.env.REPO_PROD_BRANCH,
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

    return true;
  } catch (e) {
    console.log(e);
  }
}
