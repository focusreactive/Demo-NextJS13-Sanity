import { descriptionField } from '../common/description';
import { getCommonPreview } from '../common/preview';
import { documentTitleField, titleField } from '../common/title';
import { defineArrayMember, defineField, defineType } from 'sanity';
import { RiFocus3Line } from 'react-icons/ri';
import { sectionConfigField, sectionGroup } from '../common/section';
import { imageWithAlt } from '../common/imageWithAlt';

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
      type: imageWithAlt.name,
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: imageWithAlt.name,
    }),
    defineField({
      name: 'logoInText',
      title: 'Logo In Text',
      type: imageWithAlt.name,
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
    sectionConfigField,
  ],
});

export default [customerSpotlightArticle, customerSpotlight];
