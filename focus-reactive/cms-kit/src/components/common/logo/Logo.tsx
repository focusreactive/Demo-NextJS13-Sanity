import React from 'react';

import { styled } from '@linaria/react';
import { appTheme } from '../../../theme';
// fill: ${tm(({ colors }) => colors.white)()};
const LogoContainer = styled.div`
  width: 100%;
  height: auto;
  fill: ${appTheme.colors.white};
  font-size: 24px;
`;

const COLORS = {
  default: {
    c1: 'white',
    c2: '#4D62D6',
    c3: '#80CDB6',
    c4: '#FFC766',
    c5: 'transparent',
  },
  white: {
    c1: 'black',
    c2: '#4D62D6',
    c3: '#80CDB6',
    c4: '#FFC766',
    c5: 'transparent',
  },
  gray100: {
    c1: 'black',
    c2: '#4D62D6',
    c3: '#80CDB6',
    c4: '#FFC766',
    c5: 'transparent',
  },
  violet400: {
    c1: 'white',
    c2: 'transparent',
    c3: 'transparent',
    c4: 'white',
    c5: 'white',
  },
  blue100: {
    c1: 'white',
    c2: '#4D62D6',
    c3: '#80CDB6',
    c4: '#FFC766',
    c5: 'transparent',
  },
  blue400: {
    c1: 'white',
    c2: '#97A7FF',
    c3: '#80CDB6',
    c4: '#FFC766',
    c5: 'transparent',
  },
  green400: {
    c1: 'white',
    c2: 'transparent',
    c3: 'transparent',
    c4: 'white',
    c5: 'white',
  },
  yellow400: {
    c1: 'white',
    c2: 'transparent',
    c3: 'transparent',
    c4: 'white',
    c5: 'white',
  },
};

const Logo = ({ bgColor }: { bgColor: keyof typeof COLORS }) => {
  const { c1 } = COLORS[bgColor] || COLORS.default;
  return (
    <LogoContainer style={{ color: c1 }}>
      <span>terrific</span>
      <b>yard</b>
      <span>💸</span>
    </LogoContainer>
  );
};

export default Logo;
