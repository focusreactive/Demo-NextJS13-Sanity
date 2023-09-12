import React, { ReactNode } from 'react';
import { styled } from '@linaria/react';

interface SectionHeadProps {
  children: ReactNode;
}

const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 45px;
  padding: 0 20px;
  border-radius: 100px;
  background: #fff;
  border: 2px solid transparent;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  font-family: inherit;
  font-size: 16px;
  font-weight: 700;
  color: #4d62d6;
  transition: border-color 0.2s linear, color 0.2s linear, background 0.2s linear;
  &:hover {
    background: #4d62d6;
    border-color: #fff;
    color: #fff;
  }
`;

export const Button = ({ children }: SectionHeadProps) => {
  return <StyledButton>{children}</StyledButton>;
};
