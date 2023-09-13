import { descriptionField } from '../common/description';
import { documentTitleField, titleField } from '../common/title';
import { defineArrayMember, defineField, defineType } from 'sanity';
import { RiFocus3Line } from 'react-icons/ri';
import { sectionConfigField } from '../common/section';
import { imageWithAlt } from '../common/imageWithAlt';
import { getContentBlockDefaultOptions } from '../utils/getContentBlockDefaultOptions';

export const customerSpotlightArticle = defineType({
  name: 'customerSpotlightArticle',
  title: 'Customer Spotlight Article',
  type: 'object',
  preview: {
    select: {
      title: documentTitleField.name,
      media: 'logo.image',
    },
  },
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
  ...getContentBlockDefaultOptions(),
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
