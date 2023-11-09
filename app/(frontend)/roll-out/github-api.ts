export async function trigerWorkflowtoFillDataset(sanityProjectId: string, sanityProjectDataset: string) {
  try {
    console.log('triger github workflow');
    const response = await fetch(
      `https://api.github.com/repos/focusreactive/Demo-NextJS13-Sanity/actions/workflows/75419986/dispatches`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${process.env.GITHUB_PERSONAL_ACCESS_TOKEN}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ref: 'auto-roll-out', // switch to main when merged
          inputs: { 'sanity-project-id': sanityProjectId, 'sanity-project-dataset': sanityProjectDataset },
        }),
      },
    );

    const data = response.json();
    console.log('github workflow response: ', data);
  } catch (e) {
    console.log(e);
  }
  return null;
}
