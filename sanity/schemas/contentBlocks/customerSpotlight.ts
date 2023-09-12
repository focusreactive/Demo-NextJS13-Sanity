import { descriptionField } from '../common/description';
import { getCommonPreview } from '../common/preview';
import { documentTitleField, titleField } from '../common/title';
import { defineArrayMember, defineField, defineType } from 'sanity';
import { RiFocus3Line } from 'react-icons/ri';
import { sectionConfigFields, sectionGroup } from '../common/section';

export const customerSpotlightArticle = defineType({
  name: 'customerSpotlightArticle',
  title: 'Customer Spotlight Article',
  type: 'object',
  preview: getCommonPreview({ select: { media: 'logo.asset' } }),
  fields: [
    documentTitleField,
    descriptionField,
    defineField({
      name: 'author',
      title: 'Author',
      type: 'customRichText',
    }),
    defineField({
      name: 'photo',
      title: 'Photo',
      type: 'object',
      fields: [
        defineField({
          name: 'asset',
          title: 'Asset',
          type: 'image',
        }),
        defineField({
          name: 'alt',
          title: 'Alternate Text',
          type: 'string',
        }),
      ],
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'object',
      fields: [
        defineField({
          name: 'asset',
          title: 'Asset',
          type: 'image',
        }),
        defineField({
          name: 'alt',
          title: 'Alternate Text',
          type: 'string',
        }),
      ],
    }),
    defineField({
      name: 'logoInText',
      title: 'Logo In Text',
      type: 'object',
      fields: [
        defineField({
          name: 'asset',
          title: 'Asset',
          type: 'image',
        }),
        defineField({
          name: 'alt',
          title: 'Alternate Text',
          type: 'string',
        }),
      ],
    }),
  ],
});

export const customerSpotlight = defineType({
  name: 'customerSpotlight',
  title: 'Customer Spotlight',
  type: 'object',
  icon: RiFocus3Line,
  preview: {
    select: {
      title: 'title',
      subtitle: '_type',
    },
  },
  groups: [sectionGroup],
  fields: [
    titleField,
    defineField({
      name: 'button',
      title: 'Button',
      type: 'button',
    }),
    defineField({
      name: 'spotlight',
      title: 'Articles',
      type: 'array',
      of: [defineArrayMember({ type: customerSpotlightArticle.name })],
    }),
    ...sectionConfigFields,
  ],
});

export default [customerSpotlightArticle, customerSpotlight];
