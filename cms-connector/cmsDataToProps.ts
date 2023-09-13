import { converters } from '@/cms-connector/converters';

export const cmsDataToProps = (block: any, schema: Record<string, any>) => {
  const result = { ...block };

  // TODO: implement recursive replacement
  Object.keys(schema).forEach((key) => {
    const value = block[key];

    if (value) {
      result[key] = schema[key](value);
    }
  });

  delete result._type;
  delete result._key;

  return result;
};

export const about = (block: any) => {
  return {
    title: converters.title(block.title),
    description: converters.richText(block.description),
    image: converters.imageWithAlt(block.imageWithAlt),
    imagePosition: converters.plainText(block.imagePosition),
  };
};

export const logos = (block: any) => {
  return {
    logos: block.logos.map((logo: any) => converters.imageWithAlt(logo.imageWithAlt)),
    button: converters.button(block.button),
  };
};

export const capabilities = (block: any) => {
  return {
    title: converters.title(block.title),
    list: block.list.map((item: any) => ({
      title: converters.title(item.title),
      description: converters.richText(item.description),
      button: converters.button(item.button),
      bgColor: converters.plainText(item.bgColor),
    })),
  };
};

export const spotlight = (block: any) => {
  return {
    title: converters.title(block.title),
    button: converters.button(block.button),
    items: block.spotlight.map((item: any) => ({
      title: converters.title(item.title),
      description: converters.richText(item.description),
      photo: converters.imageWithAlt(item.photo),
      logo: converters.imageWithAlt(item.logo),
      logoInText: converters.imageWithAlt(item.logoInText),
      author: converters.title(item.author),
    })),
  };
};
