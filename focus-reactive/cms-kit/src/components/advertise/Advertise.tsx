import React, { ReactNode } from 'react';
import SectionHead from '../section/head/SectionHead';
import { styled } from '@linaria/react';
import { converters } from '../../cms-connector/converters';

const StyledAdvertise = styled.div<{ imageLeft?: boolean }>`
  display: flex;
  align-items: flex-end;
  gap: 50px 30px;

  p {
    font-size: clamp(16px, 2vw, 18px);
    line-height: 1.5;
    &:not(:last-child) {
      margin-bottom: 25px;
    }
  }

  & > div:first-child {
    flex: 1;
  }

  & > div:nth-child(2) {
    flex: none;
    margin-bottom: calc(clamp(80px, 15vw, 160px) * -1);
    max-width: 45%;

    img {
      width: 100%;
      max-width: 450px;
      display: block;
    }
  }

  @media screen and (min-width: 601px) {
    flex-direction: ${({ imageLeft }) => (imageLeft ? 'row-reverse' : 'row')};
  }

  @media screen and (max-width: 600px) {
    flex-direction: column;

    & > div:nth-child(2) {
      margin-left: auto;
      max-width: 80%;
      margin-right: -40px;
    }
  }
`;

type AdvertiseProps = {
  title: ReactNode;
  description: ReactNode;
  image: {
    src: string;
    alt: string;
  };
  imagePosition?: string;
};

export const Advertise = (props: AdvertiseProps) => {
  return (
    <StyledAdvertise imageLeft={props.imagePosition === 'left'}>
      <div>
        <SectionHead title={props.title} icon="https://i.ibb.co/fCKR73f/Group-407.png" />

        {props.description}
      </div>

      <div>
        <img src={props.image?.src} alt={props.image?.alt} loading="lazy" />
      </div>
    </StyledAdvertise>
  );
};

export const AdvertisePropsConverter = {
  sanity: (block: any) => {
    return {
      title: converters.title(block.title),
      description: converters.richText(block.description),
      image: converters.imageWithAlt(block.imageWithAlt),
      imagePosition: converters.plainText(block.imagePosition),
    };
  },
};
