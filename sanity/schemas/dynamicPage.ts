import { defineArrayMember, defineField, defineType } from 'sanity';
import { logos } from './contentBlocks/logos';
import { capabilities } from './contentBlocks/capabilities';
import { about } from './contentBlocks/about';
import { customerSpotlight } from './contentBlocks/customerSpotlight';
import { documentTitleField } from './common/title';
import { CgCollage } from 'react-icons/cg';
import { header } from './contentBlocks/header';

export const dynamicPage = defineType({
  name: 'dynamicPage',
  title: 'Dynamic Page',
  type: 'document',
  icon: CgCollage,
  groups: [
    {
      name: 'seoGroup',
      title: 'SEO',
    },
  ],
  fieldsets: [
    {
      name: 'seo',
      title: 'SEO',
      options: {
        collapsible: true,
        collapsed: true,
      },
    },
  ],
  fields: [
    documentTitleField,
    defineField({
      name: 'seo',
      title: 'SEO & Metatags',
      type: 'seo',
      group: 'seoGroup',
      fieldset: 'seo',
    }),
    defineField({
      name: 'slug',
      title: 'Page Slug',
      type: 'slug',
      options: {
        source: 'title',
      },
    }),
    {
      name: 'header',
      title: 'Header',
      type: 'reference',
      to: [{ type: header.name }],
    },
    defineField({
      name: 'content',
      title: 'Content Blocks',
      type: 'array',
      of: [logos, capabilities, about, customerSpotlight].map((block) => defineArrayMember({ type: block.name })),
    }),
  ],
});
