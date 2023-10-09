import { defineField, defineType } from 'sanity';
import { titleWithOptionsField } from '../common/title';
import { descriptionField } from '../common/description';
import { BiInfoCircle } from 'react-icons/bi';
import { sectionConfigField } from '../common/section';
import { imageWithAltField } from '../common/imageWithAlt';
import { getContentBlockDefaultOptions } from '../utils/getContentBlockDefaultOptions';

export const about = defineType({
  name: 'about',
  title: 'About',
  type: 'object',
  icon: BiInfoCircle,
  ...getContentBlockDefaultOptions(),
  fields: [
    titleWithOptionsField,
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
