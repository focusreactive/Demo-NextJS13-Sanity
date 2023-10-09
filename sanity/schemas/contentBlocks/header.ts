import { defineField } from 'sanity';

import { imageWithAlt } from '../common/imageWithAlt';
import { documentTitleField, titleField } from '../common/title';
import { descriptionField } from '../common/description';
import { innerLink, externalLink, anchorLink, button } from '../common/links';

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
    anchorLink,
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
      of: [{ type: 'headerLink' }],
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

export default [header, headerLink, headerMenuLinksGroup, headerInfoCard];
