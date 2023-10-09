import { groq } from 'next-sanity';

import { basePageFields } from './fragments';

export const ALL_PAGES_SLUGS_QUERY = groq`
    * [_type == 'dynamicPage' && !(_id in path('drafts.**'))] {
      "slug": slug.current
    }[].slug
  `;

export const PAGE_CONTENT_QUERY = groq`
    * [_type == 'dynamicPage' && !(_id in path('drafts.**')) && slug.current == $slug] {
      ${basePageFields}
      content[]
    }[0]
  `;

export const PAGE_METADATA_QUERY = groq`
    * [_type == 'dynamicPage' && !(_id in path('drafts.**')) && slug.current == $slug] {
      seo
    }[0].seo
  `;
