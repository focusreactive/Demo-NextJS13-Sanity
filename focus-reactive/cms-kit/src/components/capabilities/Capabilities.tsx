import React, { ReactNode } from 'react';
import SectionHead from '../section/head/SectionHead';
import Button from '../common/button/Button';

import { styled } from '@linaria/react';
import { brandColors } from './colors';
import { ImageWithAlt, converters } from '../../cms-connector/converters';
import { ButtonOrLink, TitleWithOptions } from '../../global';
import Image from 'next/image';

const StyledCapabilities = styled.div`
  display: flex;
  flex-direction: column;
  gap: clamp(20px, 6.6vw, 80px) 0;

  &:after {
    content: '';
    position: absolute;
    bottom: calc((clamp(140px, 27vw, 500px) / 2) * -1);
    right: calc(clamp(10px, 3vw, 40px) * -1);
    width: clamp(140px, 27vw, 500px);
    height: clamp(140px, 27vw, 500px);
    border-radius: 50%;
    background: #4d62d6;
  }
`;

const StyledCapability = styled.div<{ color?: string }>`
  display: flex;
  align-items: center;
  width: 100%;
  position: relative;
  z-index: 2;

  & > div {
    box-shadow: 0px 20px 40px 0px rgba(0, 0, 0, 0.2);
  }

  & > div:first-child {
    width: 58%;
    border-radius: 20px;
    background: ${({ color }) => (color ? color : '#4d62d6')};
    padding: 50px 200px 50px 50px;
    flex: none;

    img {
      display: inline-block;
      vertical-align: middle;
      max-width: 30px;
      margin-bottom: 20px;
    }

    h3 {
      font-size: 34px;
      font-weight: 400;
      line-height: 1.3;
      margin-bottom: 40px;
    }

    p {
      font-size: 18px;
      line-height: 1.45;

      &:not(:last-child) {
        margin-bottom: 25px;
      }
    }

    button,
    a {
      display: inline-flex;
      color: ${({ color }) => (color ? color : '#4d62d6')};
      margin-top: 20px;

      &:hover {
        background: ${({ color }) => (color ? color : '#4d62d6')};
      }
    }
  }

  & > div:nth-child(2) {
    position: relative;
    z-index: 1;
    flex: none;
    max-width: calc(43% + 160px);
    margin-left: -160px;
    display: flex;
    justify-content: flex-start;

    img {
      display: block;
      max-width: 100%;
      border-radius: 20px;
      height: 100%;
      width: 100%;
    }
  }
  @media screen and (max-width: 1140px) {
    & > div:first-child {
      padding: 30px 120px 30px 30px;
      img {
        max-width: 20px;
      }
      h3 {
        font-size: 25px;
        margin-bottom: 20px;
      }
      p {
        font-size: 16px;
      }
      button {
        margin-top: 10px;
      }
    }
    & > div:nth-child(2) {
      margin-left: -80px;
      max-width: calc(43% + 73px);
    }
  }

  @media screen and (min-width: 768px) {
    &:nth-child(even) {
      flex-direction: row-reverse;
      & > div:first-child {
        padding-right: clamp(20px, 5vw, 50px);
        padding-left: 120px;
      }
      & > div:nth-child(2) {
        margin-left: 0;
        margin-right: -80px;
      }
    }
  }

  @media screen and (min-width: 1141px) {
    &:nth-child(even) {
      flex-direction: row-reverse;
      & > div:first-child {
        padding-left: 200px;
      }
      & > div:nth-child(2) {
        margin-right: -160px;
      }
    }
  }

  @media screen and (max-width: 767px) {
    flex-direction: column;

    & > div:first-child {
      order: 1;
      width: 100%;
      border-top-left-radius: 0;
      border-top-right-radius: 0;
      margin-top: -25px;
      padding-top: 50px;
      padding: 50px 20px 20px;
    }
    & > div:nth-child(2) {
      max-width: none;
      width: 100%;
      margin: 0;
      img {
        width: 100%;
      }
    }
  }
`;

const StyledWrapper = styled.div`
  margin-bottom: clamp(80px, 15vw, 160px); // TODO: change section padding instead
`;

type CapabilityProps = {
  description: ReactNode;
  image: ImageWithAlt;
  button: ButtonOrLink;
  bgColor?: string;
} & TitleWithOptions;

const Capability = ({ title, titleIcon, description, image, button, bgColor }: CapabilityProps) => {
  return (
    <StyledCapability color={brandColors[bgColor as keyof typeof brandColors]}>
      <div>
        <Image src={titleIcon?.src ?? ''} alt={titleIcon?.alt} width={titleIcon?.width} height={titleIcon?.height} />

        <h3>{title}</h3>

        {description}

        {button && <Button link={button.link} text={button.text} />}
      </div>

      <div>{image && <Image src={image.src} alt={image.alt} width={image.width} height={image.height} />}</div>
    </StyledCapability>
  );
};

type CapabilitiesProps = {
  list: CapabilityProps[];
} & TitleWithOptions;

export const Capabilities = (props: CapabilitiesProps) => {
  return (
    <StyledWrapper>
      <SectionHead title={props.title} icon={props.titleIcon} />
      <StyledCapabilities>
        {props.list && props.list.map((item, index) => <Capability key={index} {...item} />)}
      </StyledCapabilities>
    </StyledWrapper>
  );
};

export const CapabilitiesPropsConverter = {
  sanity: (block: any) => {
    return {
      title: converters.title(block.titleWithOptions?.title),
      titleIcon: converters.image(block.titleWithOptions?.titleIcon),
      list: block.list?.map?.((item: any) => ({
        title: converters.title(item.titleWithOptions?.title),
        titleIcon: converters.image(item.titleWithOptions?.titleIcon),
        description: converters.richText(item.description),
        image: converters.imageWithAlt(item.imageWithAlt),
        button: converters.button(item.button),
        bgColor: converters.plainText(item.bgColor),
      })),
    };
  },
};
