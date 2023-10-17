import { commonSocialsList } from '../../constants';
import { defineField } from 'sanity';

import { BiDockBottom } from 'react-icons/bi';

import { externalLink } from './links';

export const footer = {
  name: 'footer',
  title: 'Footer',
  type: 'document',
  icon: BiDockBottom,
  fields: [
    defineField({
      name: 'title',
      title: 'Title (visible only in CMS)',
      type: 'string',
    }),
    defineField({
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
    }),
    defineField({
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
    }),
    defineField({
      name: 'nav',
      title: 'Navigation Links',
      type: 'array',
      of: [{ type: 'button' }],
    }),
    defineField({
      name: 'buttons',
      title: 'Buttons',
      type: 'array',
      of: [
        {
          type: 'button',
        },
      ],
    }),
    defineField({
      name: 'socials',
      title: 'Socials',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'icon',
              title: 'Icon',
              type: 'string',
              options: { list: commonSocialsList },
            }),
            externalLink,
          ],
        },
      ],
    }),
    defineField({
      name: 'copyright',
      title: 'Copyright Text',
      type: 'string',
    }),
  ],
};
