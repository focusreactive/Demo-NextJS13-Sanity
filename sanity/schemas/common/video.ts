import { defineType } from 'sanity';

export const video = defineType({
  name: 'video',
  title: 'Video',
  type: 'object',
  fields: [
    {
      name: 'videoTitle',
      title: 'Video Title',
      type: 'string',
    },
    {
      name: 'videoUrl',
      title: 'Video URL',
      description:
        'The URL of the video source. Please upload the video to the Sanity image library and then paste the URL to it here.',
      type: 'url',
    },
    {
      name: 'videoPlaceholder',
      title: 'Video Placeholder',
      type: 'image',
    },
  ],
});
