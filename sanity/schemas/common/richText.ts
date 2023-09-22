import { defineArrayMember, defineType } from 'sanity';

export const customRichText = defineType({
  name: 'customRichText',
  title: 'Custom Rich Text',
  type: 'array',
  of: [
    defineArrayMember({
      type: 'block',
      styles: [
        { title: 'Normal', value: 'normal' },
        { title: 'Quote', value: 'blockquote' },
      ],
    }),
  ],
});

export const customTitleRichText = defineType({
  name: 'customTitleRichText',
  title: 'Custom Title Rich Text',
  type: 'array',
  of: [
    defineArrayMember({
      type: 'block',
      lists: [],
      marks: {
        annotations: [],
        decorators: [
          { title: 'Strong', value: 'strong' },
          { title: 'Emphasis', value: 'em' },
          { title: 'Code', value: 'code' },
          { title: 'Underline', value: 'underline' },
          { title: 'Strike', value: 'strike-through' },
        ],
      },
      styles: [{ title: 'Normal', value: 'normal' }],
    }),
  ],
});
