import { colorOptions } from '../../constants';
import { descriptionField } from '../common/description';
import { titleField } from '../common/title';
import { defineArrayMember, defineField, defineType } from 'sanity';
import { GiStrong } from 'react-icons/gi';
import { button } from '../common/links';
import { sectionConfigField } from '../common/section';
import { BiMedal } from 'react-icons/bi';
import { getContentBlockDefaultOptions } from '../utils/getContentBlockDefaultOptions';

const capability = {
  name: 'capability',
  type: 'object',
  icon: BiMedal,
  preview: {
    select: {
      title: 'title',
    },
  },
  fields: [
    titleField,
    descriptionField,
    defineField({
      name: 'button',
      title: 'Button',
      type: button.name,
    }),
    defineField({
      name: 'bgColor',
      title: 'Background Color',
      type: 'string',
      options: {
        list: colorOptions,
      },
    }),
  ],
};

export const capabilities = defineType({
  name: 'capabilities',
  title: 'Capabilities',
  type: 'object',
  icon: GiStrong,
  ...getContentBlockDefaultOptions(),
  fields: [
    titleField,
    defineField({
      name: 'list',
      title: 'Capabilities',
      type: 'array',
      of: [defineArrayMember({ type: capability.name })],
    }),
    sectionConfigField,
  ],
});

export default [capability, capabilities];
