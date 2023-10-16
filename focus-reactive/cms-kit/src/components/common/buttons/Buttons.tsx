import React from 'react';

import { styled } from '@linaria/react';
import Button from '../button/Button';
import FloatUp from '../float-up/FloatUp';

const ButtonsBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0;

  & > * {
    margin-top: 5px;
    margin-right: 10px;
  }

  & > *:only-child {
    margin-right: 0;
  }
`;

const Buttons = ({ buttons, className, initialAnimationDelay = 100, animationStep = 100 }: any) => {
  return (
    <ButtonsBox className={className}>
      {(buttons || []).map((btn: any, key: any) => {
        if (btn.isAnimationDisabled) {
          return <Button {...btn} key={key} link={btn.link} />;
        }

        return (
          <FloatUp delay={initialAnimationDelay + animationStep * key} key={key}>
            <Button {...btn} key={key} link={btn.link} />
          </FloatUp>
        );
      })}
    </ButtonsBox>
  );
};

export default Buttons;
