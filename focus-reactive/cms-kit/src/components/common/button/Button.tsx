import React from 'react';

import { styled } from '@linaria/react';
import SmartLink from '../smart-link/SmartLink';
import { appTheme } from '../../../theme';

const ArrowMoreWrap = styled.svg`
  margin-left: 10px;

  ${appTheme.media.md} {
    margin-left: 18px;
  }

  ${appTheme.media.lg} {
    margin-left: 26px;
  }
`;

const Waves = styled.div`
  position: absolute;
  left: -6px;
  top: -4px;
  right: -6px;
  bottom: -4px;
  border-radius: 45px;
  overflow: hidden;
  pointer-events: none;
  will-change: all;

  &:after {
    content: '';
    width: 0;
    height: 0;
    position: absolute;
    background: rgba(0, 0, 0, 0.05);
    left: 50%;
    top: 50%;
    border-radius: 50%;
    transform: translate(-50%, -50%);
    z-index: 3;
    opacity: 1;
  }
`;

const LinkContainer = styled(SmartLink)`
  position: relative;
  z-index: 2;
  box-sizing: border-box;
  display: flex;
  min-height: 45px;
  border-radius: 45px;
  font-family: 'DM Sans', sans-serif;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-stretch: normal;
  font-style: normal;
  line-height: 0.95;
  letter-spacing: normal;
  cursor: pointer;
  padding: 0 10px;
  transition: all ease 0.1s;
  text-align: center;
  max-width: 100%;
  text-decoration: none;
  background: transparent;
  border: 2px solid transparent;
  font-weight: var(--btnFontWeight, 700);
  --textColor: ${appTheme.colors.black};
  --backgroundColor: ${appTheme.colors.white};
  --borderColor: ${appTheme.colors.transparent};
  --shadowColor: var(--backgroundColor);
  color: var(--textColor);

  ${appTheme.media.sm} {
    min-width: 122px;
    padding: 0 20px;
  }

  ${appTheme.media.md} {
    min-width: 138px;
  }

  &:before {
    content: '';
    position: absolute;
    z-index: 0;
    left: -2px;
    top: -2px;
    right: -2px;
    bottom: -2px;
    border: 2px solid transparent;
    background: var(--backgroundColor);
    border-color: var(--borderColor);
    z-index: -1;
    border-radius: 23px;
    box-shadow:
      0 0 0 0 var(--shadowColor),
      0 0 0 0 var(--shadowColor);
    transition: all cubic-bezier(0.31, 2.05, 0.66, 0.12) 0.4s;
    will-change: transform;
  }

  &:hover,
  &:focus {
    outline: none;
    z-index: 3;
    &:before {
      transform: scale(1.1);
    }

    ${Waves} {
      &:after {
        animation: wave linear 0.4s forwards alternate;

        @keyframes wave {
          0% {
            width: 0;
            height: 0;
            opacity: 1;
          }
          100% {
            width: 150px;
            height: 150px;
            opacity: 0;
          }
        }
      }
    }

    ${ArrowMoreWrap} {
      animation: pulse ease 0.3s infinite alternate;

      @keyframes pulse {
        0% {
          transform: translateX(0);
        }
        100% {
          transform: translateX(3px);
        }
      }
    }
  }

  &[data-size='small'] {
    min-height: 40px;
    font-size: 14px;
    padding: 0 17px;
    min-width: 86px;
  }

  &[data-size='tiny'] {
    min-height: 35px;
    font-size: 14px;
    padding: 0 13px;
    min-width: 86px;
  }

  &[data-variant='white'] {
    --textColor: ${appTheme.colors.blue400};
    --backgroundColor: ${appTheme.colors.white};
    --borderColor: ${appTheme.colors.transparent};
  }

  &[data-variant='blue'] {
    --textColor: ${appTheme.colors.white};
    --backgroundColor: ${appTheme.colors.blue400};
    --borderColor: ${appTheme.colors.transparent};
  }

  &[data-variant='green'] {
    --textColor: ${appTheme.colors.white};
    --backgroundColor: ${appTheme.colors.green400};
    --borderColor: ${appTheme.colors.transparent};
  }

  &[data-variant='red'] {
    --textColor: ${appTheme.colors.white};
    --backgroundColor: ${appTheme.colors.red400};
    --borderColor: ${appTheme.colors.transparent};
  }

  &[data-variant='violet'] {
    --textColor: ${appTheme.colors.white};
    --backgroundColor: ${appTheme.colors.violet400};
    --borderColor: ${appTheme.colors.transparent};
  }

  &[data-variant='yellow'] {
    --textColor: ${appTheme.colors.white};
    --backgroundColor: ${appTheme.colors.yellow400};
    --borderColor: ${appTheme.colors.transparent};
  }

  &[data-variant='bordered'] {
    --textColor: ${appTheme.colors.white};
    --backgroundColor: ${appTheme.colors.transparent};
    --borderColor: ${appTheme.colors.currentColor};
    --shadowColor: ${appTheme.colors.white};
  }

  &[data-variant='transparent'] {
    --textColor: ${appTheme.colors.blue400};
    --backgroundColor: transparent;
    --borderColor: ${appTheme.colors.transparent};
    min-width: 0;
    padding: 0;

    &:hover,
    &:focus {
      &:before {
        border-color: transparent;
      }

      ${Waves} {
        display: none;
      }
    }
  }

  &[data-is-active='false'] {
    --textColor: ${appTheme.colors.violet400};
    --backgroundColor: transparent;
    opacity: 0.5;

    &:hover {
      opacity: 1;
    }

    &:before {
      display: none;
    }
  }

  &[data-is-active='true'] {
    --textColor: ${appTheme.colors.violet400};
    --backgroundColor: ${appTheme.colors.transparent};
    border-color: ${appTheme.colors.currentColor};

    &:before {
      display: none;
    }
  }
`;

const IconMore = () => {
  return (
    <ArrowMoreWrap xmlns="http://www.w3.org/2000/svg" width="8" height="12" viewBox="0 0 8 12">
      <path fill="currentColor" d="M8 6L2 0 0 2l4 4-4 4 2 2 6-6z" />
    </ArrowMoreWrap>
  );
};

const ButtonContainer = styled(LinkContainer)``;

const Button = ({
  className,
  link,
  text,
  value,
  weight,
  variant,
  size,
  color,
  hasIcon,
  background,
  borderColor,
  handleClick,
  noWaves,
  isActive,
  ...rest
}: any) => {
  return (
    <>
      {link ? (
        <LinkContainer
          link={link}
          className={className}
          data-variant={variant}
          data-size={size}
          textColor={color}
          bgColor={background}
          borderColor={borderColor}
          data-is-active={isActive}
          noWaves={noWaves}
          style={{
            '--btnFontWeight': weight,
          }}
          {...rest}
        >
          {text}
          {hasIcon ? <IconMore /> : null}
          {!noWaves ? <Waves /> : null}
        </LinkContainer>
      ) : (
        <ButtonContainer
          className={className}
          data-variant={variant}
          data-size={size}
          textColor={color}
          bgColor={background}
          borderColor={borderColor}
          as="button"
          type="button"
          onClick={() => handleClick(value)}
          style={{
            '--btnFontWeight': weight,
          }}
          {...rest}
        >
          {text}
          {hasIcon ? <IconMore /> : null}
          {!noWaves ? <Waves /> : null}
        </ButtonContainer>
      )}
    </>
  );
};

export default Button;
