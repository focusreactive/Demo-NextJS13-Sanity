// todo: add logs
export const createSanityProject = async (userEmail: string) => {
  try {
    console.log('creating sanity project 🏎');
    const response = await fetch('https://api.sanity.io/v2021-06-07/projects', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.SANITY_PERSONAL_AUTH_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        displayName: `${userEmail}-${process.env.PROJECT_NAME}`,
        organizationId: process.env.SANITY_ORGANIZATION_ID,
      }),
    });
    console.log('creating sanity successfully created 🔥');

    const data = await response.json();

    const projectId = data.id;

    const datasetName = await createDataset(projectId, 'production');

    return {
      projectId,
      datasetName,
    };
  } catch (e) {
    console.log(e);
  }
};

const createDataset = async (projectId: string, datasetName: string) => {
  try {
    console.log('creating project dataset project 🏎');
    const response = await fetch(`https://api.sanity.io/v2021-06-07/projects/${projectId}/datasets/${datasetName}`, {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${process.env.SANITY_PERSONAL_AUTH_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        aclMode: 'private',
      }),
    });
    console.log('project dataset successfully created 🔥');

    const data = await response.json();

    return data.datasetName;
  } catch (e) {
    console.log(e);
  }
};
