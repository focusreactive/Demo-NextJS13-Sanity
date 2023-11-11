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
          {
            key: 'TEAM_GITHUB_REPO_ID',
            value: '684968839',
            target: ['production', 'preview', 'development'],
            type: 'encrypted',
          },
          {
            key: 'TEAM_GITHUB_REPO_PRODUCTION_BRANCH',
            value: 'auto-roll-out',
            target: ['production', 'preview', 'development'],
            type: 'encrypted',
          },
          {
            key: 'REPO_TYPE',
            value: 'github',
            target: ['production', 'preview', 'development'],
            type: 'encrypted',
          },
          {
            key: 'VERCEL_PERSONAL_AUTH_TOKEN',
            value: process.env.VERCEL_PERSONAL_AUTH_TOKEN,
            target: ['production', 'preview', 'development'],
            type: 'encrypted',
          },
          {
            key: 'VERCEL_FR_TEAM_ID',
            value: process.env.VERCEL_FR_TEAM_ID,
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

    return {
      projectId: projectData.id,
      projectName: projectData.name,
      deploymentUrl: `https://${projectData.name}.vercel.app`,
    };
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
  console.log('creating deployment, token:');

  console.log({
    Authorization: `Bearer ${process.env.VERCEL_PERSONAL_AUTH_TOKEN}`,
  });
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
          repoId: process.env.TEAM_GITHUB_REPO_ID,
          ref: process.env.TEAM_GITHUB_REPO_PRODUCTION_BRANCH,
          type: process.env.REPO_TYPE,
        },
        target: 'production',
      }),
    });
    console.log('deployment result is ready 🔥');

    const data = await result.json();
    console.log(!data?.alias && data);

    return data;
  } catch {
    console.log('error creating deployment');
  }
};

export const addVercelProjectEnvs = async ({ projectName, projectId }: { projectId: string; projectName: string }) => {
  try {
    console.log('start adding envs to vercel🏎');

    await Promise.all([
      fetch(
        `https://api.vercel.com/v10/projects/${projectId}/env?teamId=${process.env.VERCEL_FR_TEAM_ID}&upsert=true`,
        {
          headers: {
            Authorization: `Bearer ${process.env.VERCEL_PERSONAL_AUTH_TOKEN}`,
            'Content-type': 'application/json',
          },
          method: 'POST',
          body: JSON.stringify({
            key: 'VERCEL_PROJECT_ID',
            value: projectId,
            target: ['production', 'preview', 'development'],
            type: 'encrypted',
          }),
        },
      ),
      fetch(
        `https://api.vercel.com/v10/projects/${projectId}/env?teamId=${process.env.VERCEL_FR_TEAM_ID}&upsert=true`,
        {
          headers: {
            Authorization: `Bearer ${process.env.VERCEL_PERSONAL_AUTH_TOKEN}`,
            'Content-type': 'application/json',
          },
          method: 'POST',
          body: JSON.stringify({
            key: 'VERCEL_PROJECT_NAME',
            value: projectName,
            target: ['production', 'preview', 'development'],
            type: 'encrypted',
          }),
        },
      ),
    ]);

    console.log('finish adding envs to vercel ✅✅✅✅✅');
  } catch (e) {
    console.log(e);
  }
};
