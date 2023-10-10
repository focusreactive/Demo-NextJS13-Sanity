import { ReactNode } from 'react';

export enum SupportedCms {
  sanity = 'sanity',
}

export type TitleWithOptions = {
  title: ReactNode;
  titleIcon: {
    src: string;
  };
};

export type ImageWithAlt = { src: string; alt: string };

export type ButtonOrLink = { text: string; link: string };
