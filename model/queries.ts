import { groq } from 'next-sanity';

export const ALL_PAGES_SLUGS_QUERY = groq`
    * [_type == 'dynamicPage' && !(_id in path('drafts.**'))] {
      "slug": slug.current
    }[].slug
  `;

export const PAGE_CONTENT_QUERY = groq`
    * [_type == 'dynamicPage' && !(_id in path('drafts.**')) && slug.current == $slug] {
      content[]
    }[0]
  `;
