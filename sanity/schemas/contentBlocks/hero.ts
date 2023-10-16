import { defineField } from 'sanity';
import { RiLayoutRowFill } from 'react-icons/ri';

import { titleField } from '../common/title';
import { descriptionField } from '../common/description';
import { imageWithAlt } from '@/sanity/schemas/common/imageWithAlt';
import { getContentBlockDefaultOptions } from '@/sanity/schemas/utils/getContentBlockDefaultOptions';
import { button } from '@/sanity/schemas/common/links';
import { sectionConfigField } from '@/sanity/schemas/common/section';

export const hero = defineField({
  name: 'hero',
  title: 'Hero',
  type: 'object',
  icon: RiLayoutRowFill,
  ...getContentBlockDefaultOptions(),
  fields: [
    titleField,
    descriptionField,
    defineField({
      name: 'decor',
      title: 'Side Image',
      type: imageWithAlt.name,
    }),
    defineField({
      name: 'buttons',
      title: 'Buttons',
      type: 'array',
      of: [{ type: button.name }],
    }),
    sectionConfigField,
  ],
});

export default [hero];
