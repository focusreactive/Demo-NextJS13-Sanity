import { colorOptions, sizeOptions } from '../../../sanity/constants';
import { defineField } from 'sanity';

export const descriptionField = defineField({
  name: 'description',
  title: 'Description',
  type: 'customRichText',
});

export const descriptionColorField = defineField({
  name: 'descriptionColor',
  title: 'Description Text Color',
  type: 'string',
  options: {
    list: colorOptions,
  },
});

export const descriptionVariantField = defineField({
  name: 'descriptionVariant',
  title: 'Description Variant',
  type: 'string',
  options: {
    list: sizeOptions,
  },
});
