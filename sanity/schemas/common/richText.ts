import { defineArrayMember, defineType } from 'sanity';

export const customRichText = defineType({
  name: 'customRichText',
  title: 'Custom Rich Text',
  type: 'array',
  of: [defineArrayMember({ type: 'block' })],
});
