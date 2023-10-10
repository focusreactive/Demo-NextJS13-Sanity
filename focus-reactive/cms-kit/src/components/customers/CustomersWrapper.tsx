import React, { ReactNode } from 'react';

import { converters } from '../../cms-connector/converters';
import { Customers } from './Customers';
import { ButtonOrLink, ImageWithAlt, TitleWithOptions } from '../../global';

type CustomerProps = {
  title: string;
  description: ReactNode;
  photo: ImageWithAlt;
  logo: ImageWithAlt;
  logoInText: ImageWithAlt;
  author: string;
};

type CustomersWrapperProps = {
  button: ButtonOrLink;
  items: CustomerProps[];
} & TitleWithOptions;

export const CustomersWrapper = (props: CustomersWrapperProps) => {
  return <Customers {...props} />;
};

export const CustomersPropsConverter = {
  sanity: (block: any) => {
    return {
      title: converters.title(block.titleWithOptions?.title),
      titleIcon: converters.image(block.titleWithOptions?.titleIcon),
      button: converters.button(block.button),
      items: block.spotlight?.map?.((item: any) => ({
        title: converters.title(item.title),
        description: converters.richText(item.description),
        photo: converters.imageWithAlt(item.photo),
        logo: converters.imageWithAlt(item.logo),
        logoInText: converters.imageWithAlt(item.logoInText),
        author: converters.title(item.author),
      })),
    };
  },
};
