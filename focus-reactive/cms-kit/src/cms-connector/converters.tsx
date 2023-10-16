import { getDefaultImageUrl } from '@/sanity/utils/getDefaultImageUrl';
import { RichText } from '@/components/RichText';

const image = (image: any) => {
  if (!image) return null;
  return { src: getDefaultImageUrl(image.asset._ref), alt: image.alt };
};

const imageWithAlt = (data: any) => {
  const assetRef = data?.image?.asset?._ref;
  if (!assetRef) return null;
  return { src: getDefaultImageUrl(assetRef), alt: data.alt };
};

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
