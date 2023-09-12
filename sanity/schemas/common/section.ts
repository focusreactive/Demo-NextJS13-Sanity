import { defineField } from 'sanity';

export const sectionGroup = {
  name: 'sectionConfig',
  title: 'Section Config',
};

export const sectionConfigFields = [
  defineField({
    name: 'backgroundColor',
    title: 'Background Color',
    type: 'string',
    group: sectionGroup.name,
    options: {
      // TODO: move to brand colors
      list: [
        {
          title: 'Blue',
          value: 'blue',
        },
      ],
    },
  }),

  defineField({
    name: 'roundCorner',
    title: 'Round Corner',
    type: 'string',
    group: sectionGroup.name,
    options: {
      list: [
        { title: 'Top Left', value: 'top-left' },
        { title: 'Bottom Left', value: 'bottom-left' },
      ],
    },
  }),
];
