'use client';
import React, { useState } from 'react';
import SectionHead from '../section/head/SectionHead';
import { styled } from '@linaria/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { appTheme } from '../../theme';
import ImageBlock from '../common/image-block/ImageBlock';
import DescriptionBlock from '../common/description-block/DescriptionBlock';
import Buttons from '../common/buttons/Buttons';
import { EffectFade, Thumbs } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { CustomerProps, CustomersWrapperProps } from '@focusreactive/cms-kit';

const StyledCustomersSection = styled.div`
  display: flex;
  align-items: flex-end;

  & > div:first-child {
    flex: 1;
  }

  & > div:nth-child(2) {
    flex: none;
    width: 34%;
    min-width: 190px;
    margin-top: 40px;
    position: relative;
    padding-bottom: calc((clamp(100px, 15vw, 147px) / 2.5));
    overflow: hidden;

    img {
      display: block;
      max-width: 100%;
    }

    &:after {
      content: '';
      position: absolute;
      bottom: calc((clamp(100px, 15vw, 147px) / 2) * -1);
      right: 0;
      width: clamp(100px, 15vw, 147px);
      height: clamp(100px, 15vw, 147px);
      border-radius: 50%;
      background: #f2efed;
    }
  }

  @media screen and (max-width: 767px) {
    display: block;

    & > div:nth-child(2) {
      display: none;
    }
  }
`;

const CustomButtons = styled(Buttons)`
  margin: 8px 0 0;

  ${appTheme.media.lg} {
    margin: 8px 0 0 30px;
  }

  ${appTheme.media.md} {
    margin: 8px 0 0 48px;
  }
`;

const SpotlightDescription = styled(DescriptionBlock)`
  font-size: 20px;
  line-height: 1.32;

  ${appTheme.media.md} {
    font-size: 24px;
    line-height: 1.28;
  }
`;

const SpotlightItemWrap = styled.div`
  box-sizing: border-box;
  position: relative;
  display: flex;
  flex-direction: column;

  ${appTheme.media.md} {
    flex-direction: row;
  }
`;

const CommentBlock = styled.div<{ bgColor: string }>`
  font-size: 20px;
  line-height: 1.32;
  margin: auto 0 0;
  padding: 120px 20px 30px;
  border-radius: 60px 60px 60px 0;
  background-color: ${({ bgColor }) => bgColor || '#fff'};
  color: ${appTheme.colors.white};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  box-sizing: border-box;

  ${appTheme.media.md} {
    padding: 36px 50px;
    flex: 0 0 66%;
    min-height: 350px;
  }
`;

const ImageWrap = styled.div`
  position: absolute;
  left: 20px;
  top: 20px;
  width: 80px;
  height: 80px;
  margin: auto 0 0;

  figure {
    position: relative;
    width: 100%;
    padding-bottom: 100%;

    img {
      position: absolute;
      object-fit: cover;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      display: block;
      border-radius: 50%;
    }
  }

  svg {
    display: block;
    width: 148px;
    margin: -6px 0 0 auto;
    display: none;

    ${appTheme.media.md} {
      display: block;
    }

    ${appTheme.media.lg} {
      margin: -22px 0 0 auto;
    }
  }

  ${appTheme.media.md} {
    position: relative;
    left: auto;
    top: auto;
    width: 100%;
    height: auto;
  }
`;

const ThumbsSlider = styled(Swiper)`
  width: auto;
  display: block;
  margin: 0 -20px 26px -20px;

  ${appTheme.media.md} {
    margin: 0 auto 10px 0;
    max-width: 66%;
  }

  .swiper-container {
    max-width: 66%;
  }

  .swiper-slide {
    height: 50px;
    padding: 0 20px;
    box-sizing: border-box;

    ${appTheme.media.md} {
      margin-right: 0 !important;
    }
  }

  .swiper-slide-thumb-active {
    img {
      filter: grayscale(0) opacity(100%);
    }
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: contain;
    filter: grayscale(1) opacity(30%);
    transition: all ease 0.2s;
    cursor: pointer;

    &:hover {
      filter: grayscale(0) opacity(100%);
    }
  }

  .swiper-wrapper {
    display: flex;
  }
`;

const DescriptionLogo = styled(ImageBlock)`
  position: relative;
  display: block;
  width: 100px;
  height: 36px;

  img {
    display: block;
    height: 100%;
    width: auto;
  }
`;

const SpotlightSlider = styled(Swiper)`
  display: block;
  margin: 0 -20px;

  ${appTheme.media.md} {
    margin: 0;
  }

  ${appTheme.media.lg} {
    margin: -10px 0 0;
  }

  .swiper-slide {
    height: auto;
    margin: 10px 0 0;
  }

  .swiper-slide-active {
    z-index: 1;
  }

  --swiper-navigation-color: transparent;
  --swiper-pagination-color: transparent;
`;

const ThumbsImage = styled(ImageBlock)`
  width: 100%;
  height: 100%;

  img {
    object-fit: contain;
  }
`;

const PhotoDecor = () => {
  return (
    <svg viewBox="0 0 147 74" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M-6.46929e-06 74C-5.61973e-06 64.2822 1.90112 54.6595 5.59484 45.6814C9.28857 36.7033 14.7025 28.5456 21.5277 21.6741C28.3528 14.8026 36.4553 9.35175 45.3728 5.63291C54.2902 1.91406 63.8478 -7.69417e-06 73.5 -6.42557e-06C83.1522 -5.15698e-06 92.7098 1.91406 101.627 5.63291C110.545 9.35176 118.647 14.8026 125.472 21.6741C132.297 28.5456 137.711 36.7033 141.405 45.6814C145.099 54.6595 147 64.2822 147 74L73.5 74L-6.46929e-06 74Z"
        fill="#F2EFED"
      />
    </svg>
  );
};

const SpotlightItem = (props: CustomerProps) => {
  const { bgColor, description, author, photo, logoInText } = props;

  return (
    <SpotlightItemWrap>
      <CommentBlock bgColor={bgColor?.hex ?? '#FF473D'}>
        <SpotlightDescription text={description} color={'#fff'} />

        <Customer text={author} color={'#fff'} />

        {logoInText ? <DescriptionLogo image={logoInText} /> : null}
      </CommentBlock>

      {photo && (
        <ImageWrap>
          <ImageBlock image={photo} />
          <PhotoDecor />
        </ImageWrap>
      )}
    </SpotlightItemWrap>
  );
};

const Customer = styled(DescriptionBlock)`
  font-weight: bold;
  margin: 24px 0 12px;
`;

const StyledWrapper = styled.div`
  margin-bottom: clamp(80px, 15vw, 160px); // TODO: change section padding instead
`;

export const Customers = ({ title, titleIcon, items, button }: CustomersWrapperProps) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  if (!items) return null;

  return (
    <StyledWrapper>
      <SectionHead title={title} icon={titleIcon} />
      <StyledCustomersSection>
        {items?.length !== 1 ? (
          <ThumbsSlider
            // @ts-ignore
            onSwiper={setThumbsSwiper}
            spaceBetween={20}
            slidesPerView={2.5}
            centeredSlides
            modules={[Thumbs, EffectFade]}
            breakpoints={{
              [appTheme.breakpoints.sm]: {
                spaceBetween: 50,
                slidesPerView: 3,
                centeredSlides: false,
              },
              [appTheme.breakpoints.lg]: {
                slidesPerView: 4,
                spaceBetween: 50,
                centeredSlides: false,
              },
            }}
          >
            {(items || []).map((slide: any, key: any) => (
              <SwiperSlide key={key}>
                <ThumbsImage image={slide.logo} />
              </SwiperSlide>
            ))}
          </ThumbsSlider>
        ) : null}
      </StyledCustomersSection>
      <SpotlightSlider
        spaceBetween={10}
        navigation={true}
        // @ts-ignore
        thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
        // @ts-ignore
        modules={[Thumbs]}
      >
        {(items || []).map((item: any, key: any) => (
          <SwiperSlide key={key}>
            <SpotlightItem {...item} />
          </SwiperSlide>
        ))}
      </SpotlightSlider>

      {button && (
        <CustomButtons
          buttons={[
            {
              link: button.link,
              text: button.text,
              hasIcon: true,
              variant: 'white',
            },
          ]}
        />
      )}
    </StyledWrapper>
  );
};
