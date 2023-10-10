import { PAGE_SITEMAP_DATA_QUERY } from '@/model/queries';
import { client } from '@/sanity/client';

export const getPageSitemapData = async (): Promise<{ slug: string; updatedAt: string }[]> => {
  return await client.fetch(PAGE_SITEMAP_DATA_QUERY, {}, { cache: 'no-cache' });
};
