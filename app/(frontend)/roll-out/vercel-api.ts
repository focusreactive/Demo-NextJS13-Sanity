type VercelProjectOptions = {
  sanityProjectId: string;
  sanityDatasetName: string;
  username: string;
};

export async function createVercelProject({ sanityProjectId, sanityDatasetName, username }: VercelProjectOptions) {
  console.log('creating vercel project 🏎');
  try {
    const result = await fetch(`https://api.vercel.com/v9/projects?teamId=${process.env.VERCEL_FR_TEAM_ID}`, {
      headers: {
        Authorization: `Bearer ${process.env.VERCEL_PERSONAL_AUTH_TOKEN}`,
      },
      method: 'POST',
      body: JSON.stringify({
        name: `${username}-${process.env.PROJECT_NAME}`,
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

    const data = await result.json();

    return data;
  } catch (e) {
    console.log(e);
  }
}
