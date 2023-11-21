import { headers } from 'next/headers';

export async function POST() {
  if (headers().get('authorization') !== `Bearer ${process.env.ROLL_OUT_API_TOKEN}`) {
    return new Response('Invalid roll-out token', { status: 401 });
  }

  try {
    const response = await fetch(`https://api.vercel.com/v13/deployments?teamId=${process.env.VERCEL_FR_TEAM_ID}`, {
      headers: {
        Authorization: `Bearer ${process.env.VERCEL_PERSONAL_AUTH_TOKEN}`,
      },
      method: 'POST',
      body: JSON.stringify({
        name: process.env.VERCEL_PROJECT_ID,
        project: process.env.VERCEL_PROJECT_NAME,
        gitSource: {
          repoId: process.env.REPO_ID,
          ref: process.env.REPO_PROD_BRANCH,
          type: process.env.REPO_TYPE,
        },
        target: 'production',
      }),
    });

    if (response.status === 401) {
      throw new Error('Invalid vercel token');
    }

    return new Response('Deployment triggered 📤', { status: 200 });
  } catch (error) {
    console.warn(error);
  }
  return new Response('Failed to trigger deployment 😿', { status: 503 });
}
