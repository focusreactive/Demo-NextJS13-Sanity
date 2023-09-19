import imageUrlBuilder from '@sanity/image-url';

import { client } from '../client';

const builder = imageUrlBuilder(client);

export const getDefaultImageUrl = (url: string) => {
  return builder.image(url).url();
};
