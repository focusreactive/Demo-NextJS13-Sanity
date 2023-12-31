import { groq } from 'next-sanity';

import { headerAndFooter } from './fragments';

export const ALL_PAGES_SLUGS_QUERY = groq`
    * [_type == 'dynamicPage' && !(_id in path('drafts.**'))] {
      "slug": slug.current
    }[].slug
  `;

export const PAGE_CONTENT_QUERY = groq`
    * [_type == 'dynamicPage' && !(_id in path('drafts.**')) && slug.current == $slug] {
      ${headerAndFooter}
      content[]{
        ...,
        _type == 'capabilities' => {
          ...,
          list[]{
            ...,
            button{
              ...,
              uri[]{
                ...,
                'ref': reference->
              }
            }
          }
        },
        _type == 'logos' => {
          ...,
          button {
            ...,
            uri[]{
              'ref': reference->
            }
          }
        },
        _type == 'customerSpotlight' => {
          ...,
          button {
            ...,
            uri[]{
              'ref': reference->
            }
          }
        }
      }
    }[0]
  `;

export const PAGE_METADATA_QUERY = groq`
    * [_type == 'dynamicPage' && !(_id in path('drafts.**')) && slug.current == $slug] {
      seo
    }[0].seo
  `;

export const PAGE_SITEMAP_DATA_QUERY = groq`
    * [_type == 'dynamicPage' && !(_id in path('drafts.**'))] {
      "slug": slug.current,
      "updatedAt": _updatedAt
    }[]
  `;
