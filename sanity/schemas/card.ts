import { defineArrayMember, defineField, defineType } from 'sanity';

export const card = defineType({
  name: 'card',
  title: 'Card',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'price',
      title: 'Price',
      description: 'Price in USD (Monthly)',
      type: 'number',
    }),
    defineField({
      name: 'featuresIncluded',
      title: 'Included Features',
      type: 'array',
      of: [defineArrayMember({ type: 'string' })],
      options: {
        list: [
          { title: 'Unlimited Landing Pages', value: 'landing-pages' },
          { title: 'Unlimited Team Members', value: 'team-members' },
          { title: 'Unlimited Leads', value: 'leads' },
          { title: 'Unlimited Page Views', value: 'page-views' },
          { title: 'Export in HTML/CSS', value: 'export' },
        ],
      },
    }),
  ],
});
