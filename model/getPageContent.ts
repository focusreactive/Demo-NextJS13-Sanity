import { sanityFetch } from '@/model/sanityFetch';
import { SanityDocument } from 'sanity';
import { PAGE_CONTENT_QUERY } from '@/model/queries';

export const getPageContent = async ({ slug }: { slug: string }) => {
  return await sanityFetch<SanityDocument>({
    query: PAGE_CONTENT_QUERY,
    params: {
      slug,
    },
  });
};
