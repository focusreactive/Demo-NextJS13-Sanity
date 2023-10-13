import { ReactNode } from 'react';
import { ImageWithAlt } from './cms-connector/converters';

export enum SupportedCms {
  sanity = 'sanity',
}

export type TitleWithOptions = {
  title: ReactNode;
  titleIcon: ImageWithAlt;
};

export type ButtonOrLink = { text: string; link: string };
