import { defineField, defineType } from 'sanity';

export const imageWithAlt = defineType({
  name: 'imageWithAlt',
  title: 'Image with Alternative Text',
  type: 'object',
  fields: [
    defineField({
      name: 'image',
      title: 'Asset',
      type: 'image',
    }),
    defineField({
      name: 'alt',
      title: 'Alternative Image Text',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
  ],
});

export const imageWithAltField = defineField({
  name: 'imageWithAlt',
  title: 'Image',
  type: imageWithAlt.name,
});
