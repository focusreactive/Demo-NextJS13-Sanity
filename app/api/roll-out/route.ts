import { headers } from 'next/headers';

import { createSanityProject, createVercelProject, triggerGithubWorkflow } from '@/lib/services';
import { isValidEmail } from '@/lib/email';

export async function POST(request: Request) {
  if (headers().get('authorization') !== `Bearer ${process.env.ROLL_OUT_API_TOKEN}`) {
    return new Response('Invalid roll-out token', { status: 401 });
  }

  const { email } = await request.json();

  if (email && isValidEmail(email)) {
    const username = email
      .split('@')[0]
      .toLowerCase()
      .replace(/[^a-z0-9]/g, '') // prevent forbidden symbols
      .slice(0, 90); // prevent project name from being too long

    const sanityProjectId = await createSanityProject(username);
    const sanityDatasetName = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';

    if (sanityProjectId) {
      const projectData = await createVercelProject({
        projectNamePrifix: username,
        sanityProjectId: sanityProjectId,
        sanityDatasetName,
      });

      if (projectData) {
        await triggerGithubWorkflow({
          sanityProjectId,
          sanityDatasetName,
          vercelProjectId: projectData.projectId,
          vercelProjectName: projectData.projectName,
          vercelDeploymentUrl: projectData.deploymentUrl,
          email,
        });

        return new Response('All steps were successful 🎉', { status: 200 });
      }
    }

    return new Response('One of the steps was not successful😿', { status: 503 });
  }

  return new Response('Email is not valid', { status: 400 });
}
