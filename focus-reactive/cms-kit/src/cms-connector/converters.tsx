import { getDefaultImageUrl } from '@/sanity/utils/getDefaultImageUrl';
import { RichText } from '@/components/RichText';

const image = (image: any) => {
  if (!image) return null;
  return { src: getDefaultImageUrl(image.asset._ref), alt: image.alt };
};

const imageWithAlt = (data: any) => {
  if (!data) return null;
  return { src: getDefaultImageUrl(data.image.asset._ref), alt: data.alt };
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

const button = (block: any) => {
  if (!block) return null;
  return {
    title: block.title,
    link: block.uri,
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
