// todo: add logs
export async function createSanityProject(userEmail: string) {
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
    // should be correct token to success request
    console.log('creating sanity response 🔥');

    const data = await response.json();
    console.log(data);

    const projectId = data.id;

    return projectId;
  } catch (e) {
    console.log(e);
  }
}

export async function createDataset(projectId: string, datasetName: string) {
  try {
    console.log('creating project dataset project 🏎');
    const response = await fetch(`https://api.sanity.io/v2021-06-07/projects/${projectId}/datasets/${datasetName}`, {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${process.env.SANITY_PERSONAL_AUTH_TOKEN}`,
      },
    });
    console.log('project dataset successfully created 🔥');

    const data = await response.json();

    return data.datasetName;
  } catch (e) {
    console.log(e);
  }
}

export async function createCorsEntry({ projectId, deploymentUrl }: { projectId: string; deploymentUrl: string }) {
  try {
    console.log('creating cors entry 🏎');

    const result = await fetch(`https://api.sanity.io/v2021-06-07/projects/${projectId}/cors`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.SANITY_PERSONAL_AUTH_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        origin: deploymentUrl,
        allowCredentials: true,
      }),
    });

    const data = await result.json();

    console.log('cors entry data:');
    // console.log(data);

    console.log('finish adding cors ✅✅✅✅✅');
  } catch (e) {
    console.log(e);
    console.log('error adding cors :(');
  }
}

export async function addUserEmailToMembers({ projectId, email }: { projectId: string; email: string }) {
  try {
    console.log('adding email to members 🏎');
    const result = await fetch(`https://api.sanity.io/v2021-06-07/invitations/project/${projectId}`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.SANITY_PERSONAL_AUTH_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, role: 'viewer' }),
    });

    const data = await result.json();

    // console.log('members data:');
    // console.log(data);

    console.log('finish adding member ✅✅✅✅✅');
  } catch (e) {
    console.log(e);
    console.log('error adding member :(');
  }
}
