export async function trigerWorkflowtoFillDataset({
  sanityProjectId,
  sanityProjectDataset,
  vercelProjectId,
  vercelProjectName,
  vercelDeploymentUrl,
  email,
}: {
  sanityProjectId: string;
  sanityProjectDataset: string;
  vercelProjectId: string;
  vercelProjectName: string;
  vercelDeploymentUrl: string;
  email: string;
}) {
  try {
    console.log('Triger github workflow ⏳⏳⏳');

    await fetch(
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
            'sanity-project-dataset': sanityProjectDataset,
            'vercel-project-id': vercelProjectId,
            'vercel-project-name': vercelProjectName,
            'vercel-deployment-url': vercelDeploymentUrl,
          },
        }),
      },
    );

    console.log('Github workflow triggered ✅✅✅');
  } catch (e) {
    console.log(e);
  }
}
