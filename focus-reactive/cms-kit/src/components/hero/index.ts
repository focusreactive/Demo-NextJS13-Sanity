import { converters } from '../../cms-connector/converters';

export const HeroPropsConverter = {
  sanity: (block: any) => {
    const { title, titleIcon, description, buttons, decor, ...rest } = block;

    return {
      ...rest,
      title: converters.title(title),
      titleIcon: converters.image(titleIcon)?.src,
      description: converters.richText(description),
      buttons: buttons.map(converters.button),
      decor: {
        ...decor,
        src: converters.image(decor.src)?.src,
        secondSrc: converters.image(decor.secondSrc)?.src,
      },
    };
  },
};

export * from './Hero';
