import { colorOptions } from '../../constants';
import { descriptionField } from '../common/description';
import { getCommonPreview } from '../common/preview';
import { documentTitleField, titleField } from '../common/title';
import { defineArrayMember, defineField, defineType } from 'sanity';
import { GiStrong } from 'react-icons/gi';
import { button } from '../common/links';

const capability = {
  name: 'capability',
  type: 'object',
  fields: [
    documentTitleField,
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
  preview: getCommonPreview({ select: { media: 'image.asset' } }),
};

export const capabilities = defineType({
  name: 'capabilities',
  title: 'Capabilities',
  type: 'object',
  icon: GiStrong,
  preview: {
    select: {
      title: 'title',
      subtitle: '_type',
    },
  },
  fields: [
    titleField,
    defineField({
      name: 'list',
      title: 'Capabilities',
      type: 'array',
      of: [defineArrayMember({ type: capability.name })],
    }),
  ],
});

export default [capability, capabilities];
