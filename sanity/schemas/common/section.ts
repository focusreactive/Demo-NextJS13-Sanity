import { defineField, defineType } from 'sanity';

export const sectionGroup = {
  name: 'sectionConfigGroup',
  title: 'Section Config',
};

export const sectionConfig = defineType({
  name: 'sectionConfig',
  title: 'Section Config',
  type: 'object',
  fields: [
    defineField({
      name: 'backgroundColor',
      title: 'Background Color',
      type: 'string',
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
      options: {
        list: [
          { title: 'Top Left', value: 'top-left' },
          { title: 'Bottom Left', value: 'bottom-left' },
        ],
      },
    }),
  ],
});

export const sectionConfigField = defineField({
  name: 'sectionConfig',
  title: 'Section Config',
  type: sectionConfig.name,
  group: sectionGroup.name,
});
