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

const StyledSection = styled.section<{ siblingBg?: SectionProps['siblingBg']; bgColor?: string; radius?: string }>`
  padding: clamp(80px, 15vw, 160px) 0;
  position: relative;
  z-index: 2;
  overflow: hidden;
  margin-top: ${({ radius }) => (radius === 'top-left' ? '-1px' : 0)};
  background: ${({ bgColor }) => getSectionBgColor(bgColor)};
  color: ${({ bgColor }) => getSectionTextColor(bgColor)};

  &:after,
  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: ${({ radius }) => (radius === 'top-left' ? '-1px' : 'auto')};
    bottom: ${({ radius }) => (radius === 'bottom-left' ? '-1px' : 'auto')};
    pointer-events: none;
    outline: none;
  }

  &:before {
    z-index: 1;
    background: ${({ siblingBg, radius }) => getSiblingBg({ siblingBg, radius })};
    width: clamp(61px, 10vw, 161px);
    height: clamp(61px, 10vw, 161px);
  }

  &:after {
    z-index: 2;
    top: ${({ radius }) => (radius === 'top-left' ? 0 : 'auto')};
    bottom: ${({ radius }) => (radius === 'bottom-left' ? 0 : 'auto')};
    border-top-left-radius: ${({ radius }) => (radius === 'top-left' ? 'clamp(60px, 10vw, 160px)' : 'auto')};
    border-bottom-left-radius: ${({ radius }) => (radius === 'bottom-left' ? 'clamp(60px, 10vw, 160px)' : 'auto')};
    background: inherit;
    width: clamp(62px, 10vw, 162px);
    height: clamp(62px, 10vw, 162px);
  }

  & > div {
    display: flex;
    flex-direction: column;
    gap: clamp(80px, 10vw, 160px) 0;
  }
`; 

export const StyledContainer = styled.div`
  position: relative;
  padding: 10px;
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

export const Section = ({ children, bgColor, radius, siblingBg }: SectionProps) => {
  return (
    <StyledSection siblingBg={siblingBg} bgColor={bgColor} radius={radius}>
      <StyledContainer>{children}</StyledContainer>
    </StyledSection>
  );
};
