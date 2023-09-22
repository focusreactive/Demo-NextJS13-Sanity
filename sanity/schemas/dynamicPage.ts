import { defineArrayMember, defineField, defineType } from 'sanity';
import { logos } from './contentBlocks/logos';
import { capabilities } from './contentBlocks/capabilities';
import { about } from './contentBlocks/about';
import { customerSpotlight } from './contentBlocks/customerSpotlight';
import { documentTitleField } from './common/title';
import { CgCollage } from 'react-icons/cg';

export const dynamicPage = defineType({
  name: 'dynamicPage',
  title: 'Dynamic Page',
  type: 'document',
  icon: CgCollage,
  fields: [
    documentTitleField,
    defineField({
      name: 'slug',
      title: 'Page Slug',
      type: 'slug',
      options: {
        source: 'title',
      },
    }),
    defineField({
      name: 'content',
      title: 'Content Blocks',
      type: 'array',
      of: [logos, capabilities, about, customerSpotlight].map((block) => defineArrayMember({ type: block.name })),
    }),
  ],
});
