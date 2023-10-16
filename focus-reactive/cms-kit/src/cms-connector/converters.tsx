import { getDefaultImageUrl } from '@/sanity/utils/getDefaultImageUrl';
import { RichText } from '@/components/RichText';
import { getImageDimensions } from '../utils/getImageDimensions';

const image = (image: any) => {
  if (!image) return null;

  const src = getDefaultImageUrl(image.asset._ref);
  const { width, height } = getImageDimensions(src);

  return { src, alt: image.alt ?? '', width, height };
};

const imageWithAlt = (data: any) => {
  const assetRef = data?.image?.asset?._ref;
  if (!assetRef) return null;

  const src = getDefaultImageUrl(assetRef);
  const { width, height } = getImageDimensions(src);

  return { src, alt: data.alt, width, height };
};

export type ImageWithAlt = ReturnType<typeof imageWithAlt>;

const plainText = (text: any) => {
  return text;
};

const title = (blocks: any) => {
  return <RichText value={blocks} plain={true} />;
};

const richText = (blocks: any) => {
  return <RichText value={blocks} />;
};

const button = (data: any) => {
  if (!data) return null;

  return {
    // to make links work, need to extend groq query (content[]) to include link ref
    text: data.title,
    link: data?.uri?.[0],
  };
};

export const converters = {
  image,
  imageWithAlt,
  title,
  richText,
  plainText,
  button,
};
