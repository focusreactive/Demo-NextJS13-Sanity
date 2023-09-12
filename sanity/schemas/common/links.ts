import { defineField } from 'sanity';
import { AiOutlineGlobal } from 'react-icons/ai';
import { BiLink } from 'react-icons/bi';

export const innerLink = {
  name: 'innerLink',
  title: 'Internal Page',
  type: 'object',
  fields: [
    defineField({
      name: 'reference',
      title: 'Internal Page',
      type: 'reference',
      to: [{ type: 'dynamicPage' }],
    }),
  ],
  preview: {
    select: {
      pageTitle: 'reference.title',
      documentTitle: 'reference.documentTitle',
      pageType: 'reference._type',
    },
    prepare(props) {
      const { pageTitle, pageType, documentTitle } = props;

      return {
        title: typeof pageTitle === 'string' ? pageTitle : documentTitle,
        subtitle: pageType,
        media: BiLink,
      };
    },
  },
};

export const externalLink = {
  name: 'externalLink',
  title: 'External Link',
  type: 'object',
  fields: [
    defineField({
      name: 'link',
      title: 'Link',
      type: 'url',
    }),
  ],
  preview: {
    select: {
      link: 'link',
    },
    prepare({ link }) {
      const url = new URL(link);
      const origin = url.origin;
      return {
        title: origin,
        subtitle: link,
        media: AiOutlineGlobal,
      };
    },
  },
};

export const button = {
  name: 'button',
  title: 'Button',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'uri',
      title: 'Link to...',
      type: 'array',
      of: [{ type: innerLink.name }, { type: externalLink.name }],
      validation: (Rule) => Rule.max(1),
    }),
    defineField({
      name: 'anchorLink',
      title: 'Anchor',
      type: 'string',
    }),
  ],
};
