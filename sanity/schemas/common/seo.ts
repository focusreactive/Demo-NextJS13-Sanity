export const og = {
  name: 'og',
  title: 'Open Graph Tags',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      description: 'og:title (leave empty to use SEO title)',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
    },
    {
      name: 'description',
      title: 'Description',
      description: 'og:description (leave empty to use SEO description)',
      type: 'string',
    },
    {
      name: 'type',
      title: 'Type',
      description: 'og:type',
      type: 'string',
    },
    {
      name: 'url',
      title: 'Url',
      description: 'og:url',
      type: 'string',
    },
    {
      name: 'siteName',
      title: 'Site Name',
      description: 'og:site_name',
      type: 'string',
    },
  ],
};

export const ogTwitter = {
  name: 'ogTwitter',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Twitter Title',
      description: 'twitter:title (leave empty to use SEO title)',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Twitter Description',
      description: 'twitter:description (leave empty to use SEO description)',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Twitter Image',
      description: 'twitter:image',
      type: 'image',
    },
    {
      name: 'site',
      title: 'Twitter Site',
      description: 'twitter:site e.g. @FocusReactive',
      type: 'string',
    },
  ],
};

export const seo = {
  name: 'seo',
  title: 'SEO Settings',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'SEO Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'SEO Description',
      type: 'string',
    },
    {
      name: 'keywords',
      title: 'SEO Keywords',
      type: 'string',
    },
    {
      name: 'noIndex',
      title: 'SEO robots no index',
      type: 'boolean',
    },

    {
      name: 'ogTags',
      title: 'Open Graph Tags',
      type: og.name,
    },
    {
      name: ogTwitter.name,
      title: 'Twitter Tags',
      type: 'ogTwitter',
    },
  ],
};
