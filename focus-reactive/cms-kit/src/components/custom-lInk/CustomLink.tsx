import React, { ReactNode } from 'react';
import { styled } from '@linaria/react';

interface CustomLinkProps {
  children: ReactNode;
}

const StyledLink = styled.a`
  color: #4d62d6;
  font-size: 16px;
  font-weight: 700;
  position: relative;
  white-space: nowrap;
  display: inline-block;
  vertical-align: middle;
  margin-top: 25px;
  margin-left: clamp(0px, 4vw, 50px);

  &:after {
    content: '';
    display: inline-block;
    vertical-align: middle;
    width: 6px;
    height: 6px;
    margin-left: 20px;
    border-left: 3px solid #4d62d6;
    border-bottom: 3px solid #4d62d6;
    transform: rotate(-135deg);
  }

  &:hover {
    text-decoration: underline;
  }

  @media screen and (max-width: 767px) {
    margin-left: clamp(0px, 1.5vw, 30px);
  }
`;

export const CustomLink = ({ children }: CustomLinkProps) => {
  return <StyledLink href="#">{children}</StyledLink>;
};
