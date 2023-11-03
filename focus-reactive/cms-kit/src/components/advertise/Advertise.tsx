import React, { ReactNode } from 'react';
import SectionHead from '../section/head/SectionHead';
import { styled } from '@linaria/react';
import { ImageWithAlt, converters } from '../../cms-connector/converters';
import { TitleWithOptions } from '../../global';
import Image from 'next/image';

const StyledAdvertise = styled.div<{ imageLeft?: boolean }>`
  display: flex;
  align-items: flex-end;
  gap: 50px 30px;
  margin-bottom: clamp(80px, 15vw, 160px); // TODO: change section padding instead

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

    img {
      width: 400px;
      max-width: 450px;
      display: block;
      height: 100%;
    }
  }

  @media screen and (min-width: 601px) {
    flex-direction: ${({ imageLeft }) => (imageLeft ? 'row-reverse' : 'row')};
  }

  @media screen and (max-width: 600px) {
    flex-direction: column;

    & > div:nth-child(2) {
      margin-left: auto;
    }
  }
`;

type AdvertiseProps = {
  description: ReactNode;
  image: ImageWithAlt;
  imagePosition?: string;
} & TitleWithOptions;

export const Advertise = (props: AdvertiseProps) => {
  const { image } = props;

  return (
    <StyledAdvertise imageLeft={props.imagePosition === 'left'}>
      <div>
        <SectionHead title={props.title} icon={props.titleIcon} />

        {props.description}
      </div>

      <div>
        <Image src={image?.src ?? ''} alt={image?.alt} width={image?.width} height={image?.height} />
      </div>
    </StyledAdvertise>
  );
};

export const AdvertisePropsConverter = {
  sanity: (block: any) => {
    return {
      title: converters.title(block.titleWithOptions?.title),
      titleIcon: converters.image(block.titleWithOptions?.titleIcon),
      description: converters.richText(block.description),
      image: converters.imageWithAlt(block.imageWithAlt),
      imagePosition: converters.plainText(block.imagePosition),
    };
  },
};
