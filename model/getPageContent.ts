import { groq } from 'next-sanity';
import { client } from '@/sanity/client';

import { basePageFields } from './fragments';

export const getPageContent = async ({ slug, isDraftMode }: { slug: string; isDraftMode?: boolean }) => {
  const query = groq`
    * [_type == 'dynamicPage' && !(_id in path('drafts.**')) && slug.current == $slug] {
      ${basePageFields}
      content[]
    }[0]
  `;

  // TODO: return cache
  return await client.fetch(query, { slug }, { perspective: isDraftMode ? 'previewDrafts' : 'published' });
};
