import { defineField, defineType } from 'sanity';
import { BiImage } from 'react-icons/bi';
import { documentTitleField } from '../common/title';
import { sectionConfigFields, sectionGroup } from '../common/section';

const logo = defineType({
  name: 'logo',
  title: 'Logo',
  type: 'object',
  preview: {
    select: {
      title: 'title',
      alt: 'alt',
      media: 'image',
    },
    prepare: ({ title, alt, media }) => ({ title: title || alt, media }),
  },
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'string',
    }),
    defineField({
      name: 'alt',
      title: 'Alternative Image Text',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
    }),
    defineField({
      name: 'link',
      title: 'Link',
      type: 'url',
    }),
  ],
});

export const logos = defineType({
  name: 'logos',
  title: 'Logos',
  type: 'object',
  icon: BiImage,
  preview: {
    select: {
      title: 'documentTitle',
      subtitle: '_type',
    },
  },
  groups: [sectionGroup],
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
    ...sectionConfigFields,
  ],
});

export default [logo, logos];
