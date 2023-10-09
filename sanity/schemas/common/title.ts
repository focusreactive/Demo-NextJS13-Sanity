import { colorOptions, sizeOptions } from '@/sanity/constants';
import { defineField, defineType } from 'sanity';

export const documentTitleField = defineField({
  name: 'documentTitle',
  title: 'Document Title',
  description: 'Visible only in CMS',
  type: 'string',
});

export const titleField = defineField({
  name: 'title',
  title: 'Title',
  type: 'customTitleRichText',
});

export const titleColorField = defineField({
  name: 'titleColor',
  title: 'Title Text Color',
  type: 'string',
  options: {
    list: colorOptions,
  },
});

export const titleIconField = defineField({
  name: 'titleIcon',
  title: 'Title Icon',
  type: 'image',
});

export const titleVariantField = defineField({
  name: 'titleVariant',
  title: 'Title Variant',
  type: 'string',
  options: {
    list: sizeOptions,
  },
});

export const titleTipField = defineField({
  name: 'titleTip',
  title: 'Title Tip',
  type: 'string',
});

export const titleWithOptions = defineType({
  name: 'titleWithOptions',
  title: 'Title',
  type: 'object',
  fields: [titleField, titleIconField],
});

export const titleWithOptionsField = defineType({
  name: 'titleWithOptions',
  title: 'Title',
  type: titleWithOptions.name,
});
