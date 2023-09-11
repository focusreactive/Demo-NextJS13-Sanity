import React, { ReactNode } from 'react';
import { styled } from '@linaria/react';

interface SectionProps {
  children: ReactNode;
  isLight?: boolean;
  className?: string;
  radius?: string;
  neighborBg?: string;
}

const StyledSection = styled.section<{ neighborBg?: string; isDark?: boolean; radius?: string }>`
  padding: clamp(80px, 15vw, 160px) 0;
  position: relative;
  overflow: hidden;
  z-index: 2;
  background: ${({ isDark }) => (isDark ? '#32408b' : '#fff')};
  color: ${({ isDark }) => (isDark ? '#fff' : '#333')};

  &:after,
  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: ${({ radius }) => (radius === 'top-left' ? 0 : 'auto')};
    bottom: ${({ radius }) => (radius === 'bottom-left' ? 0 : 'auto')};
    width: clamp(60px, 10vw, 160px);
    height: clamp(60px, 10vw, 160px);
    pointer-events: none;
  }

  &:before {
    z-index: 1;
    background: ${({ neighborBg }) => (neighborBg ? neighborBg : '#fff')};
  }

  &:after {
    z-index: 2;
    border-top-left-radius: ${({ radius }) => (radius === 'top-left' ? 'clamp(60px, 10vw, 160px)' : 'auto')};
    border-bottom-left-radius: ${({ radius }) => (radius === 'bottom-left' ? 'clamp(60px, 10vw, 160px)' : 'auto')};
    background: inherit;
  }

  & > div {
    display: flex;
    flex-direction: column;
    gap: clamp(80px, 10vw, 160px) 0;
  }
`;

export const Section = ({ children, isLight, radius, neighborBg }: SectionProps) => {
  return (
    <>
      <StyledSection neighborBg={neighborBg} isDark={!isLight} radius={radius}>
        <div style={{ margin: '0 auto', maxWidth: '1080px', padding: '0 20px', background: '' }}>{children}</div>
      </StyledSection>
    </>
  );
};
