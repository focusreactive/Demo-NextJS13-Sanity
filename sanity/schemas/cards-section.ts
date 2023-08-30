import { defineType } from 'sanity';
import { card } from './card';

export const cardsSection = defineType({
  name: 'cardsSection',
  title: 'Cards Section',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'cards',
      title: 'Cards',
      type: 'array',
      of: [
        {
          type: card.name,
        },
      ],
    },
  ],
});
