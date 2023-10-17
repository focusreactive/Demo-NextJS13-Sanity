import { styled } from '@linaria/react';
import React from 'react';
import { appTheme } from '../../../theme';
import Image from 'next/image';

const ImageWrap = styled.figure<{ maxWidth?: number; hoverEffect?: boolean }>`
  padding: 0;
  margin: 0;
  display: block;

  overflow: ${({ hoverEffect }) => (hoverEffect ? 'hidden' : 'initial')};

  img {
    width: 100%;
    height: auto;
    display: block;
    max-width: ${(props) => (props.maxWidth ? `${props.maxWidth}px` : 'none')};

    :hover {
      transform: scale(${({ hoverEffect }) => (hoverEffect ? 1.1 : 1)});
    }

    transition: transform 200ms;
  }

  &[data-variant='with-shadow'] {
    img {
      box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.2);
      border-radius: 8px;

      ${appTheme.media.md} {
        border-radius: 15px;
      }
    }
  }
`;

const ImageBlock = (props: any) => {
  const { className, variant, image, maxWidth, hoverEffect } = props;

  return (
    <ImageWrap className={className} data-variant={variant} maxWidth={maxWidth} hoverEffect={hoverEffect}>
      <Image src={image?.src ?? ''} alt={image?.alt} width={image?.width} height={image?.height} />
    </ImageWrap>
  );
};

export default ImageBlock;
