import React, { ReactNode } from 'react';
import { styled } from '@linaria/react';
import { sectionBgColors, sectionTextColorsByBg } from '@focusreactive/cms-kit/src/components/section/colors';

interface SectionProps {
  children: ReactNode;
  bgColor?: string;
  className?: string;
  radius?: string;
  siblingBg?: {
    prev: string;
    next: string;
  };
  padding?: string;
}

const getSectionBgColor = (bgColor?: string) => {
  const fallbackColor = '#fff';
  if (!bgColor) return fallbackColor;
  return sectionBgColors[bgColor as keyof typeof sectionBgColors] || fallbackColor;
};

const getSectionTextColor = (bgColor?: string) => {
  const fallbackColor = '#32408b';
  if (!bgColor) return fallbackColor;
  return sectionTextColorsByBg[bgColor as keyof typeof sectionTextColorsByBg] || fallbackColor;
};

const getSiblingBg = ({ siblingBg, radius }: Pick<SectionProps, 'siblingBg' | 'radius'>) => {
  if (radius === 'top-left') {
    return siblingBg?.prev ? siblingBg.prev : '#fff';
  }
  if (radius === 'bottom-left') {
    return siblingBg?.next ? siblingBg.next : '#fff';
  }

  return 'none';
};

const StyledSection = styled.section<{
  siblingBg?: SectionProps['siblingBg'];
  bgColor?: string;
  radius?: string;
  padding?: string;
}>`
  padding: ${({ padding }) => (padding ? padding : 'clamp(80px, 15vw, 160px) 0')};
  position: relative;
  z-index: 2;
  overflow: hidden;
  background: ${({ siblingBg, radius }) => getSiblingBg({ siblingBg, radius })};
  color: ${({ bgColor }) => getSectionTextColor(bgColor)};

  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    border-top-left-radius: ${({ radius }) => (radius === 'top-left' ? 'clamp(60px, 10vw, 160px)' : 'auto')};
    border-bottom-left-radius: ${({ radius }) => (radius === 'bottom-left' ? 'clamp(60px, 10vw, 160px)' : 'auto')};
    pointer-events: none;
    outline: none;
    background: ${({ bgColor }) => getSectionBgColor(bgColor)};
  }

  & > div {
    display: flex;
    flex-direction: column;
    gap: clamp(80px, 10vw, 160px) 0;
  }
`;

export const StyledContainer = styled.div`
  position: relative;
  padding: 0 20px;
  margin: auto;
  box-sizing: border-box;

  @media screen and (min-width: 576px) {
    max-width: 556px;
  }

  @media screen and (min-width: 768px) {
    max-width: 748px;
  }

  @media screen and (min-width: 1140px) {
    max-width: 1080px;
  }
`;

export const Section = ({ children, bgColor, radius, siblingBg, padding }: SectionProps) => {
  return (
    <StyledSection siblingBg={siblingBg} bgColor={bgColor} radius={radius} padding={padding}>
      <StyledContainer>{children}</StyledContainer>
    </StyledSection>
  );
};
