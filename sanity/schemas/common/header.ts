import { defineField } from 'sanity';

import { BiDockTop } from 'react-icons/bi';

import { imageWithAlt } from './imageWithAlt';
import { documentTitleField, titleField } from './title';
import { descriptionField } from './description';
import { innerLink, externalLink, button } from './links';

export const headerLink = {
  name: 'headerLink',
  type: 'object',
  fields: [
    documentTitleField,
    titleField,
    defineField({
      name: 'link',
      title: 'Link to...',
      type: 'array',
      of: [{ type: innerLink.name }, { type: externalLink.name }],
      validation: (Rule) => Rule.max(1),
    }),
    descriptionField,
    imageWithAlt,
  ],
  // preview: getCommonPreview({ select: { media: 'image.asset' } }),
};

export const headerMenuLinksGroup = {
  name: 'headerMenuLinksGroup',
  type: 'object',
  fields: [
    documentTitleField,
    defineField({
      name: 'group',
      title: 'Group',
      description: 'The name in the top desktop navigation and the first part of the mobile element title',
      type: 'string',
    }),
    defineField({
      name: 'groupIndicator',
      title: 'Group Indicator',
      description: '"by business type" or "by channel", etc.',
      type: 'string',
    }),
    defineField({
      name: 'links',
      title: 'Links',
      type: 'array',
      of: [{ type: headerLink.name }],
    }),
  ],
  // preview: getCommonPreview(),
};

export const headerInfoCard = {
  name: 'headerInfoCard',
  type: 'object',
  fields: [
    titleField,
    defineField({
      name: 'buttons',
      title: 'Buttons',
      type: 'array',
      of: [{ type: button.name }],
    }),
    imageWithAlt,
  ],
};

export const header = {
  name: 'header',
  title: 'Header',
  type: 'document',
  icon: BiDockTop,
  fields: [
    defineField({
      name: 'title',
      title: 'Title (visible only in CMS)',
      type: 'string',
    }),
    defineField({
      name: 'menu',
      title: 'Links Groups',
      type: 'array',
      of: [
        {
          type: headerMenuLinksGroup.name,
        },
      ],
    }),
    defineField({
      name: 'ctaCard',
      title: 'CTA Card',
      type: headerInfoCard.name,
    }),
    defineField({
      name: 'buttons',
      title: 'Buttons',
      type: 'array',
      of: [
        {
          type: button.name,
        },
      ],
    }),
  ],
};
