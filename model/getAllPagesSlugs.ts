import { client } from '@/sanity/client';
import { ALL_PAGES_SLUGS_QUERY } from '@/model/queries';

export const getAllPagesSlugs = async (): Promise<string[]> => {
  return await client.fetch(ALL_PAGES_SLUGS_QUERY, {}, { cache: 'no-cache' });
};
