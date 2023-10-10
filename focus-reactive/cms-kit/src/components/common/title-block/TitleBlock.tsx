import { styled } from '@linaria/react';
import React from 'react';
import { appTheme } from '../../../theme';

const TitleBlockWrap = styled.div`
  position: relative;
  width: 100%;
  --titleColor: ${appTheme.colors.black};
`;

const Tip = styled.p`
  position: absolute;
  left: 0;
  bottom: 100%;
  font-size: 12px;
  color: var(--titleColor);
  opacity: 0.5;
  font-weight: 400;
  margin: 0 0 4px;

  ${appTheme.media.lg} {
    margin: 0 0 10px;
    font-size: 14px;
  }
`;

const TitleIcon = styled.div`
  position: relative;
  padding: 0;
  list-style: none;
  display: flex;
  height: auto;
  width: 15px;
  height: 15px;
  margin-bottom: 15px;

  img {
    position: absolute;
    width: 100%;
    height: auto;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
  }

  ${appTheme.media.md} {
    width: 40px;
    height: 40px;
    margin-bottom: 42px;
  }

  /* &[data-variant='small'] {
    width: 15px;
    margin-bottom: 15px;

    ${appTheme.media.lg} {
      width: 30px;
      margin-bottom: 25px;
    }
  } */

  &[data-variant='large'] {
    width: 35px;
    height: 35px;
    margin-bottom: 25px;

    ${appTheme.media.lg} {
      width: 50px;
      height: 50px;
      margin-bottom: 42px;
    }
  }
`;

const TitleWrap = styled.h2`
  font-weight: 400;
  color: var(--titleColor);
  margin-bottom: 20px;
  font-size: 25px;
  line-height: 1.32;

  ${appTheme.media.lg} {
    font-size: 34px;
    line-height: 1.2;
    margin-bottom: 30px;
  }

  &[data-variant='small'] {
    font-size: 22px;
    line-height: 1.32;

    ${appTheme.media.lg} {
      font-size: 26px;
      line-height: 1.32;
      margin-bottom: 30px;
    }
  }

  &[data-variant='large'] {
    font-size: 34px;
    line-height: 1.2;

    ${appTheme.media.md} {
      font-size: 42px;
    }

    ${appTheme.media.lg} {
      font-size: 52px;
      line-height: 1.18;
      margin-bottom: 40px;
    }
  }
`;

const TitleBlock = ({ text, icon, tip, variant, color, className }: any) => {
  return (
    <TitleBlockWrap className={className} color={color}>
      {icon ? (
        <TitleIcon className="icon" data-variant={variant}>
          <img loading="lazy" src={icon} alt="" />
        </TitleIcon>
      ) : null}
      {tip ? <Tip>{tip}</Tip> : null}
      {text ? (
        <TitleWrap className="title" data-variant={variant}>
          {text}
        </TitleWrap>
      ) : null}
    </TitleBlockWrap>
  );
};

export default TitleBlock;
