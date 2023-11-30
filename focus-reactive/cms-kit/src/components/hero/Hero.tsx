import React from 'react';
import TitleBlock from '../common/title-block/TitleBlock';
import { Section } from '../section/Section';
import { styled } from '@linaria/react';
import FloatUp from '../common/float-up/FloatUp';
import DescriptionBlock from '../common/description-block/DescriptionBlock';
import { appTheme } from '../../theme';
import Buttons from '../common/buttons/Buttons';
import SectionHead from '../section/head/SectionHead';
import { brandColors } from '../capabilities/colors';
import { HeroImage } from './HeroImage';

const HeroTitle = styled(TitleBlock)`
  .title {
    margin-bottom: 20px;

    ${appTheme.media.md} {
      margin-bottom: 24px;
    }

    ${appTheme.media.lg} {
      margin-bottom: 28px;
    }
  }
`;
// --display: ${(props) => props.display};
const HeroSection = styled(Section)`
  position: relative;
  overflow: visible !important;

  .container {
    --paddingTop: 20px;
    padding-bottom: 0;
  }

  ${appTheme.media.md} {
    overflow: hidden !important;
  }

  &[data-display='block'] {
    &:after {
      //   display: var(--display);
      position: absolute;
      bottom: -300px;
      left: 0;
      width: 100%;
      height: 300px;
      content: '';
      z-index: -1;
    }

    ${appTheme.media.md} {
      overflow: visible !important;
    }
  }

  &[data-disabledOverflow='true'] {
    overflow: visible !important;
  }
`;

const CustomButtons = styled(Buttons)`
  justify-content: space-between;

  ${appTheme.media.md} {
    justify-content: flex-start;
  }
`;

const HeroBox = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: stretch;

  ${appTheme.media.md} {
    flex-direction: row;
    margin-top: 40px;
    min-height: 400px;
    margin-bottom: 0;
  }

  ${appTheme.media.lg} {
    min-height: 466px;
  }
`;

const HeroLeft = styled.div`
  position: relative;
  min-height: 100%;
  flex: 1 1 auto;
  z-index: 1;

  ${CustomButtons} {
    margin-top: 36px;

    ${appTheme.media.md} {
      margin-bottom: 94px;

      & > * {
        margin-right: 22px;
      }
    }

    ${appTheme.media.lg} {
      & > * {
        margin-right: 54px;
      }
    }
  }
`;

const HeroDecor = styled.div`
  width: 100%;
  margin: 34px 0 0;
  position: relative;

  div {
    width: 100%;
    height: clamp(155px, 50vw, 440px);

    ${appTheme.media.md} {
      height: 100%;
    }
  }

  div:nth-child(2) {
    position: absolute;
    top: 0;
    left: 0;
  }

  ${appTheme.media.md} {
    height: auto;
    margin: 0 0 0 40px;
    flex: 1 0 calc(46% - 20px);
  }

  ${appTheme.media.lg} {
    margin: 0 0 0 40px;
    flex: 1 0 calc(54% - 20px);
  }

  img {
    max-width: 50%;
    display: block;
    margin-left: auto;

    ${appTheme.media.md} {
      max-height: none;
      position: absolute;
      max-width: none;
      height: 100%;
      width: auto;
      margin-right: 0;
    }
  }

  &[data-variant='image'] {
    min-height: 100%;
    margin: 44px 0 -25px;
    width: 100%;
    justify-content: flex-start;
    align-items: flex-start;

    ${appTheme.media.md} {
      flex: 1 0 46%;
      margin: 0 0 0 40px;
    }

    ${appTheme.media.lg} {
      margin-bottom: 0px;
      flex: 1 0 53%;
    }

    img {
      display: block;
      width: 100%;
      height: auto;
      max-width: none;
      max-height: none;
      border-radius: 10px;
      box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.2);

      ${appTheme.media.md} {
        border-radius: 15px;
      }
    }
  }
`;

export const Hero = (props: any) => {
  const {
    section,
    title,
    titleIcon,
    titleTip,
    titleVariant,
    description,
    descriptionVariant,
    descriptionColor,
    buttons = [],
    decor,
    titleColor,
    isHomePage = true,
    additionalElement,
  } = props;

  const { hasParallax, alt, src, variant, secondSrc } = decor || {};

  const updatedButtons = [
    {
      ...buttons[0],
      color: 'white',
      background: 'white',
      variant: 'white',
    },
    {
      ...buttons[1],
      color: 'white',
      borderColor: 'blue',
      background: null,
      variant: 'blue',
    },
  ];

  return (
    <HeroSection
      {...section}
      data-display={isHomePage ? 'block' : 'none'}
      data-disabledOverflow={Boolean(additionalElement)}
      bgColor="blue"
      neighborBg="red"
      padding="clamp(80px, 15vw, 160px) 0 0"
    >
      <HeroBox>
        <HeroLeft>
          {/* <FloatUp> */}
          <SectionHead title={title} isH1 />
          <HeroTitle tip={titleTip} icon={titleIcon} color="white" variant={titleVariant} />
          {/* </FloatUp> */}
          {/* <FloatUp> */}
          {description ? <DescriptionBlock color={brandColors.blue100} text={description} variant="large" /> : null}
          {/* </FloatUp> */}

          {/* {form ? <FormBlock form={form} /> : null} */}

          <CustomButtons buttons={updatedButtons} initialAnimationDelay={300} />
        </HeroLeft>
        {decor ? (
          <HeroDecor data-variant={variant}>
            <HeroImage disable={!hasParallax} src={src} alt={alt} />
            {/*{secondSrc || src ? (*/}
            {/*  <>*/}
            {/*    <HeroImage disable={!hasParallax} src={src} alt={alt} amplitude={0.2} />*/}
            {/*    <HeroImage disable={!hasParallax} src={secondSrc} alt={alt} amplitude={0.1} />*/}
            {/*  </>*/}
            {/*) : (*/}
            {/*  <HeroImage disable={!hasParallax} src={src} alt={alt} />*/}
            {/*)}*/}
          </HeroDecor>
        ) : null}
      </HeroBox>
    </HeroSection>
  );
};
