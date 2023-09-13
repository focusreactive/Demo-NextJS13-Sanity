import { defineField, defineType } from 'sanity';
import { titleField } from '../common/title';
import { descriptionField } from '../common/description';
import { BiInfoCircle } from 'react-icons/bi';
import { sectionConfigField, sectionGroup } from '../common/section';
import { imageWithAltField } from '../common/imageWithAlt';

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
  groups: [sectionGroup],
  fields: [
    titleField,
    descriptionField,
    imageWithAltField,
    defineField({
      name: 'imagePosition',
      title: 'Image position',
      type: 'string',
      options: {
        list: [
          { title: 'Left', value: 'left' },
          { title: 'Right', value: 'right' },
        ],
      },
    }),
    sectionConfigField,
  ],
  initialValue: {
    imagePosition: 'right',
  },
});

export default [about];
