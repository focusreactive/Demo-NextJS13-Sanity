'use client';
import React from 'react';
import NextImage from 'next/image';

import SlightParallax from '../common/slight-parallax/SlightParallax';

export const HeroImage = (props: any) => {
  const { disabled, src, alt, amplitude } = props;

  return (
    <SlightParallax disabled={disabled} amplitude={amplitude}>
      <NextImage
        priority
        src={src}
        alt={alt ?? 'hero image'}
        fill
        objectFit="contain"
        sizes="(max-width: 414px) 50vw, 400px"
      />
    </SlightParallax>
  );
};
