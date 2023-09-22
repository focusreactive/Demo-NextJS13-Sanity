import { styled } from '@linaria/react';
import React from 'react';
import Article from '../article/Article';
import { appTheme } from '../../../theme';

const DescrBlock = styled.div`
  font-size: 16px;
  line-height: 1.52;
  color: ${appTheme.colors.gray100};

  ${appTheme.media.md} {
    font-size: 18px;
    line-height: 1.48;
  }

  &[data-variant='large'] {
    font-size: 18px;

    ${appTheme.media.md} {
      font-size: 26px;
      line-height: 1.34;
    }
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: normal;
  }

  h2 {
    font-size: 34px;
    line-height: 1.2;
    margin-bottom: 20px;

    ${appTheme.media.md} {
      font-size: 42px;
    }

    ${appTheme.media.lg} {
      font-size: 52px;
      line-height: 1.18;
      margin-bottom: 52px;
    }
  }

  h3 {
    margin: 32px 0 24px;
    font-size: 25px;
    line-height: 1.32;

    ${appTheme.media.lg} {
      font-size: 34px;
      line-height: 1.2;
      margin: 32px 0 24px;
    }
  }

  h4 {
    margin: 26px 0 20px;
    font-size: 22px;
    line-height: 1.32;

    ${appTheme.media.lg} {
      font-size: 26px;
      line-height: 1.32;
      margin: 26px 0 20px;
    }
  }

  p {
    &:not(:first-child) {
      margin-top: 24px;
    }
  }

  figure {
    display: flex;
    margin: 40px auto;
    max-width: 800px;

    img {
      max-width: 100%;

      --margin-v: 35px;
      ${appTheme.media.md} {
        --margin-v: 80px;
      }

      margin: var(--margin-v) auto;
    }
  }

  a {
    color: ${appTheme.colors.green400};

    &:hover {
      text-decoration: underline;
    }
  }

  ul {
    margin: 30px 0 0;

    ${appTheme.media.lg} {
      margin: 34px 0 0;
    }

    li {
      position: relative;
      padding-left: 18px;
      list-style: none;

      ${appTheme.media.lg} {
        padding-left: 24px;
      }

      &:not(:first-child) {
        margin-top: 24px;

        ${appTheme.media.lg} {
          margin-top: 26px;
        }
      }

      &:after {
        content: '';
        position: absolute;
        left: 0;
        top: 9px;
        width: 7px;
        height: 7px;
        border-radius: 50%;
        background: ${appTheme.colors.blue400};

        ${appTheme.media.lg} {
          width: 10px;
          height: 10px;
          top: 7px;
        }
      }
    }
  }

  ol {
    margin: 34px 0 0;
    counter-reset: num;

    > li {
      position: relative;
      padding-left: 24px;
      list-style: none;

      &:not(:first-child) {
        margin-top: 26px;
      }

      &:before {
        counter-increment: num;
        content: counter(num) '.';
        position: absolute;
        left: 0;
        top: 0;
        font-weight: 600;
        color: ${appTheme.colors.blue100};
      }
    }
  }

  .check-list-item {
    position: relative;
    padding: 0 0 0 34px;
    margin: 28px 0;

    ${appTheme.media.md} {
      padding: 0 0 0 54px;
    }

    &:before {
      content: '';
      width: 24px;
      height: 24px;
      position: absolute;
      left: 0;
      top: 0;
      background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Ccircle cx='12' cy='12' r='12' fill='%2397a3d3'/%3E%3Cpath fill='%23fff' d='M15.6 10.7l-1.5-1.4-2.9 2.9-1.6-1.6L8.2 12l3 3.1z'/%3E%3C/svg%3E");
      background-size: 100%;

      ${appTheme.media.md} {
        width: 30px;
        height: 30px;
      }
    }
  }

  mark {
    color: ${appTheme.colors.black};
    display: block;
    padding: 15px 25px;
    margin: 15px 0 0;
    background: ${appTheme.colors.gray100};
    border-radius: 0 0 20px;
  }
`;

const DescriptionBlock = ({ className = '', text, variant, color, onClick }: any) => {
  return (
    <DescrBlock onClick={onClick} data-variant={variant} color={color} className={className}>
      <Article textRaw={text} />
    </DescrBlock>
  );
};

export default DescriptionBlock;
