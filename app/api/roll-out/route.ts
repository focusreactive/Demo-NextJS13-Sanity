import { headers } from 'next/headers';

import {
  createSanityProject,
  createVercelProject,
  triggerGithubWorkflow,
  getVercelProjects,
  createSanityReadToken,
} from '@/lib/services';
import { isValidEmail } from '@/lib/email';

// todo: refactor status codes. because all 400 errors are not actual 400 errors
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
    const projectName = `${process.env.PROJECT_NAME}-${username}`;

    const existingProjects = await getVercelProjects();

    const allowToCreateProject =
      existingProjects && existingProjects.length < parseInt(process.env.MAX_NUMBER_OF_PROJECTS || '2');
    const existingProject = existingProjects?.find((project) => project.name === projectName);

    if (allowToCreateProject && !existingProject) {
      const sanityProjectId = await createSanityProject(projectName);
      const sanityDatasetName = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';

      if (sanityProjectId) {
        const sanityReadToken = await createSanityReadToken(sanityProjectId);

        const projectData = await createVercelProject({
          sanityReadToken: sanityReadToken || '',
          projectName: projectName,
          sanityProjectId: sanityProjectId,
          sanityDatasetName,
        });

        if (projectData) {
          const result = await triggerGithubWorkflow({
            sanityProjectId,
            sanityDatasetName,
            vercelProjectId: projectData.projectId,
            vercelProjectName: projectData.projectName,
            vercelDeploymentUrl: projectData.deploymentUrl,
            email,
          });

          if (result === true) {
            return new Response('All steps were successful 🎉', { status: 200 });
          }
        }
      }

      return new Response('One of the steps was not successful😿', { status: 503 });
    }

    return new Response('Limit of the projects reached or project with this email is already exists', { status: 400 });
  }

  return new Response('Email is not valid', { status: 400 });
}
