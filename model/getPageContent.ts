import groq from 'groq';
import { client } from '@/utils/client';

export const getPageContent = async ({ slug }: { slug: string }) => {
  const query = groq`
      * [path.current == $slug && _type == 'dynamicPage' && !(_id in path('drafts.**'))] {
        content[]
      }[0]
  `;

  // TODO: return cache
  return await client.fetch(query, { slug }, { cache: 'no-store' });
};
