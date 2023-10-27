import { styled } from '@linaria/react';

import { createSanityProject, createCorsEntry, addUserEmailToMembers } from './sanity-api';
import { createVercelProject } from './vercel-api';

export default function RollOutPage() {
  const triggerDeploy = async (data: FormData) => {
    'use server';
    const email = data.get('email') as string;
    const username = email.split('@')[0].toLowerCase();
    const cleanUsername = username.replace(/[^a-z0-9]/g, '').slice(0, 90);

    const sanityData = await createSanityProject(cleanUsername);

    if (sanityData) {
      const projectData = await createVercelProject({
        username: cleanUsername,
        sanityProjectId: sanityData.projectId,
        sanityDatasetName: sanityData.datasetName,
      });

      if (projectData?.deploymentUrl) {
        Promise.all([
          createCorsEntry({
            projectId: sanityData.projectId,
            deploymentUrl: projectData.deploymentUrl,
          }),
          addUserEmailToMembers({
            projectId: sanityData.projectId,
            email,
          }),
        ]);
      }

      // todo: create vercel deployment hook

      // todo: set vercel deploiyment hook to sanity

      // todo: send notification to slack chennel that project is created for user with email: real user email
    }
  };

  return (
    <Container>
      <h2>Get access to your own demo app in minutes</h2>
      <form action={triggerDeploy}>
        <input type="email" required name="email" />
        <button type="submit">Deploy to FocusReactive 😌</button>
      </form>
    </Container>
  );
}

const Container = styled.div`
  background: rgb(141, 136, 228);
  background: linear-gradient(90deg, rgba(141, 136, 228, 1) 0%, rgba(0, 212, 255, 1) 100%);
  width: 100%;
  padding: 100px;
  min-height: 100vh;

  h2 {
    text-align: center;
    font-weight: 700;
    margin-bottom: 50px;
  }

  input {
    max-width: 350px;
    padding: 10px 15px;
    border-radius: 5px;
    font-size: 18px;
    display: block;
    margin: 0 auto;
    width: 100%;
    margin-bottom: 20px;
  }

  button {
    padding: 10px 15px
    background: white;
    margin: 0 auto;
    border-radius: 5px;
    font-size: 18px;
    display: block;
    cursor: pointer;
    width: 100%;
    max-width: 350px;
  }
`;
