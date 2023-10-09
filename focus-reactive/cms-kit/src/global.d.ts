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
