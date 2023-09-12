import { defineField, defineType } from 'sanity';
import { titleField } from '../common/title';
import { descriptionField } from '../common/description';
import { BiInfoCircle } from 'react-icons/bi';

export const about = defineType({
  name: 'about',
  title: 'About',
  type: 'object',
  icon: BiInfoCircle,
  preview: {
    select: {
      title: 'title',
      subtitle: '_type',
    },
  },
  fields: [
    titleField,
    descriptionField,
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
    }),
  ],
});

export default [about];
