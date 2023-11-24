'use client';
import { styled } from '@linaria/react';
import { useState } from 'react';

export default function RollOutPage() {
  const [email, setEmail] = useState('');
  const [requestStatus, setRequestStatus] = useState<null | 'loading' | 'error' | 'success'>();

  const triggerDeploy = async (event: any) => {
    event.preventDefault();

    setRequestStatus('loading');

    const response = await fetch('/api/roll-out', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    });
    if (response.ok) {
      setRequestStatus('success');
    } else {
      setRequestStatus('error');
    }
  };

  const isLoading = requestStatus === 'loading';

  const renderStatusBlock = () => {
    if (requestStatus === 'error') {
      return <StatusMessage>Something went wrong, try later!</StatusMessage>;
    }

    if (requestStatus === 'success') {
      return <StatusMessage>Success! Check your email</StatusMessage>;
    }

    if (requestStatus === 'loading') {
      return <StatusMessage>Loading...</StatusMessage>;
    }

    return null;
  };

  return (
    <Container>
      {!requestStatus ? (
        <Form onSubmit={triggerDeploy}>
          <Label htmlFor="email">Provide your email:</Label>
          <Input
            value={email}
            disabled={isLoading}
            type="email"
            required
            name="email"
            placeholder="corban.dalas@gitnation.org"
            onChange={(e) => setEmail(e.target.value)}
          />
          <ButtonsContainer>
            <SubmitButton disabled={isLoading} type="submit">
              Create project
            </SubmitButton>
            <ClearButton disabled={isLoading} onClick={() => setEmail('')}>
              Clear
            </ClearButton>
          </ButtonsContainer>
        </Form>
      ) : (
        renderStatusBlock()
      )}
    </Container>
  );
}

const StatusMessage = styled.div`
  color: #fff;
  font-size: 24px;
  text-align: center;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 4px;
  color: #fff;
  font-size: 16px;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px 12px;
  border-radius: 4px;
  font-size: 16px;
  display: block;
  margin: 0 auto;
  width: 100%;
  margin-bottom: 16px;
  color: #fff;
  background: #2c2c2c;

  &:disabled {
    cursor: not-allowed;
    opacity: 50%;
  }
`;

const SubmitButton = styled.button`
  padding: 8px 12px
  background: #2c2c2c;
  color: #fff;
  border-radius: 4px;
  font-size: 16px;
  display: block;
  cursor: pointer;
  width: 70%;

  &:disabled {
    cursor: not-allowed;
    opacity: 50%;
  }
`;

const ClearButton = styled.button`
  width: 30%;
  padding: 8px 12px
  background: #d3d3d3;
  color: #2c2c2c;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;

  &:disabled {
    cursor: not-allowed;
    opacity: 50%;
  }
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
  width: 100%;
`;

const Container = styled.div`
  background: #363636;
  height: 100vh;
  padding: 100px 16px 16px;
`;

const Form = styled.form`
  margin: 0 auto;
  max-width: 322px;
  width: 100%;
`;
