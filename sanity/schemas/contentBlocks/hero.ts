import { defineField } from 'sanity';
import { BiDockTop } from 'react-icons/bi';

import { titleField, titleColorField, titleIconField, titleVariantField, titleTipField } from '../common/title';
import { descriptionField, descriptionColorField, descriptionVariantField } from '../common/description';

const decor = {
  name: 'decor',
  title: 'Aside Image',
  type: 'object',
  fields: [
    defineField({
      name: 'src',
      title: 'Image',
      type: 'image',
    }),
    defineField({
      name: 'secondSrc',
      title: 'Second Layer Image',
      description:
        'Use this field if you want to animate the figures in hero. There must be the same sizes of images with different shapes',
      type: 'image',
    }),
    defineField({
      name: 'parralaxSpeed',
      title: 'Animation Speed',
      description: '5 by default. Applies only to the image of the second layer',
      type: 'number',
    }),
    {
      name: 'variant',
      title: 'Variant',
      type: 'string',
      options: {
        list: [
          { value: 'figure', title: 'Figure' },
          { value: 'image', title: 'Image' },
        ],
      },
    },
    defineField({
      name: 'alt',
      title: 'Image Name',
      description: 'Will be used for the "alt" html tag',
      type: 'string',
    }),
    defineField({
      name: 'hasParallax',
      title: 'Enable image parallax',
      type: 'boolean',
      initialValue: false,
    }),
  ],
};

const partnerNetworkDropDowns = {
  name: 'partnerNetworkDropDowns',
  type: 'object',
  fields: [
    defineField({
      name: 'categoryLabel',
      title: 'Category Label',
      type: 'string',
    }),
    defineField({
      name: 'regionLabel',
      title: 'Region Label',
      type: 'string',
    }),
  ],
};

export const hero = defineField({
  name: 'hero',
  title: 'Hero',
  type: 'object',
  fields: [
    titleField,
    titleColorField,
    titleIconField,
    titleVariantField,
    titleTipField,
    descriptionField,
    descriptionColorField,
    descriptionVariantField,
    defineField({
      name: 'decor',
      title: 'Side Image',
      type: 'decor',
    }),
    defineField({
      name: 'buttons',
      title: 'Buttons',
      type: 'array',
      of: [{ type: 'button' }],
    }),
    defineField({
      name: 'additionalElement',
      title: 'Additional Elements',
      type: 'array',
      of: [{ type: 'partnerNetworkDropDowns' }],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'titleIcon',
    },
  },
  icon: BiDockTop,
});

export default [hero, decor, partnerNetworkDropDowns];
