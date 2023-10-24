'use client';

import React from 'react';
import NextImage from 'next/image';

export const HeroImage = (props: any) => {
  const { disabled, src, alt, amplitude } = props;

  return (
    // <SlightParallax disabled={disabled} amplitude={amplitude}>
    <NextImage
      priority
      src={src}
      alt={alt ?? 'hero image'}
      fill
      style={{ objectFit: 'contain' }}
      sizes="(max-width: 414px) 50vw, 400px"
    />
    // </SlightParallax>
  );
};
