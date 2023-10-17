import { styled } from '@linaria/react';

export default function RollOutPage() {
  const triggerDeploy = async () => {
    'use server';
    console.log('deploying the apps');
  };

  return (
    <Container>
      <h2>Get access to your own demo app in minutes</h2>
      <form action={triggerDeploy}>
        <button type="submit">Deploy to FocusReactive 😌</button>
      </form>
    </Container>
  );
}

const Container = styled.div`
  background: rgb(141, 136, 228);
  background: linear-gradient(90deg, rgba(141, 136, 228, 1) 0%, rgba(0, 212, 255, 1) 100%);
  width: 100%;
  padding: 50px;
  min-height: 100vh;

  h2 {
    text-align: center;
    font-weight: 700;
    margin-bottom: 100px;
  }

  button {
    padding: 10px 15px
    background: white;
    margin: 0 auto;
    border-radius: 5px;
    font-size: 18px;
    display: block;
    cursor: pointer;
  }
`;
