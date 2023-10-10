import { commonSocialsList } from '@/sanity/constants';

export const footer = {
  name: 'footer',
  title: 'Footer',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title (visible only in CMS)',
      type: 'string',
    },
    {
      name: 'menus',
      title: 'Link Sections',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Title',
              type: 'string',
            },
            {
              name: 'list',
              title: 'Links',
              type: 'array',
              of: [{ type: 'button' }],
            },
          ],
        },
      ],
    },
    {
      name: 'contacts',
      title: 'Contacts',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'icon',
              title: 'Icon',
              type: 'image',
            },
            {
              name: 'title',
              title: 'Title',
              type: 'string',
            },
          ],
        },
      ],
    },
    {
      name: 'nav',
      title: 'Navigation Links',
      type: 'array',
      of: [{ type: 'button' }],
    },
    {
      name: 'buttons',
      title: 'Buttons',
      type: 'array',
      of: [
        {
          type: 'button',
        },
      ],
    },
    {
      name: 'socials',
      title: 'Socials',
      type: 'array',
      of: [{ type: 'string', options: { list: commonSocialsList } }],
    },
    {
      name: 'copyright',
      title: 'Copyright Text',
      type: 'string',
    },
  ],
};

export default [footer];
