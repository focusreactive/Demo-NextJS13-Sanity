import { defineField, defineType } from 'sanity';
import { BiImage } from 'react-icons/bi';
import { documentTitleField } from '../common/title';
import { sectionConfigField } from '../common/section';
import { imageWithAltField } from '../common/imageWithAlt';
import { getContentBlockDefaultOptions } from '../utils/getContentBlockDefaultOptions';

const logo = defineType({
  name: 'logo',
  title: 'Logo',
  type: 'object',
  preview: {
    select: {
      title: 'title',
      alt: 'imageWithAlt.alt',
      media: 'imageWithAlt.image',
    },
    prepare: ({ title, alt, media }) => ({ title: title || alt, media }),
  },
  fields: [
    imageWithAltField,
  ],
});

export const logos = defineType({
  name: 'logos',
  title: 'Logos',
  type: 'object',
  icon: BiImage,
  ...getContentBlockDefaultOptions({ title: documentTitleField.name }),
  fields: [
    documentTitleField,
    defineField({
      name: 'logos',
      title: 'Logos',
      type: 'array',
      of: [{ type: logo.name }],
    }),
    defineField({
      name: 'button',
      title: 'Button',
      type: 'button',
    }),
    sectionConfigField,
  ],
});

export default [logo, logos];
