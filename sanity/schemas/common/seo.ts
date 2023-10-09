import { defineField, defineType } from 'sanity';

export const og = defineType({
  name: 'og',
  title: 'Open Graph Tags',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      description: 'og:title (leave empty to use SEO title)',
      type: 'string',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      description: 'og:description (leave empty to use SEO description)',
      type: 'string',
    }),
    defineField({
      name: 'type',
      title: 'Type',
      description: 'og:type',
      type: 'string',
      initialValue: 'website',
      hidden: true,
    }),
    defineField({
      name: 'url',
      title: 'Url',
      description: 'og:url',
      type: 'string',
    }),
    defineField({
      name: 'siteName',
      title: 'Site Name',
      description: 'og:site_name',
      type: 'string',
    }),
  ],
});

export const ogTwitter = defineType({
  name: 'ogTwitter',
  type: 'object',
  fields: [
    defineField({
      name: 'card',
      title: 'Twitter Card',
      description: 'twitter:card',
      type: 'string',
      initialValue: 'summary_large_image',
      hidden: true,
    }),
    defineField({
      name: 'title',
      title: 'Twitter Title',
      description: 'twitter:title (leave empty to use SEO title)',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Twitter Description',
      description: 'twitter:description (leave empty to use SEO description)',
      type: 'string',
    }),
    defineField({
      name: 'image',
      title: 'Twitter Image',
      description: 'twitter:image',
      type: 'image',
    }),
    defineField({
      name: 'site',
      title: 'Twitter Site',
      description: 'twitter:site e.g. @FocusReactive',
      type: 'string',
    }),
  ],
});

export const seo = defineType({
  name: 'seo',
  title: 'SEO Settings',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'SEO Title',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'SEO Description',
      type: 'string',
    }),
    defineField({
      name: 'keywords',
      title: 'SEO Keywords',
      type: 'string',
    }),
    defineField({
      name: 'noIndex',
      title: 'SEO robots no index',
      type: 'boolean',
    }),

    defineField({
      name: 'ogTags',
      title: 'Open Graph Tags',
      type: og.name,
    }),
    defineField({
      name: ogTwitter.name,
      title: 'Twitter Tags',
      type: 'ogTwitter',
    }),
  ],
});
