import { PAGE_METADATA_QUERY } from '@/model/queries';
import { client } from '@/sanity/client';

export const getPageMetadata = async ({ slug }: { slug: string }) => {
  return await client.fetch(
    PAGE_METADATA_QUERY,
    {
      slug,
    },
    { cache: 'no-cache' },
  );
};
