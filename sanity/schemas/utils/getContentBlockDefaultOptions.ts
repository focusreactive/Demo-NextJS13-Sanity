import { sectionGroup } from '../common/section';
import { getPortableTextPreview } from '@/sanity/schemas/utils/getPortableTextPreview';

export const getContentBlockDefaultOptions = ({ title }: { title: string } = { title: 'title' }) => ({
  preview: {
    select: {
      title,
      titleWithOptions: 'titleWithOptions.title',
      subtitle: '_type',
    },
    // TODO: replace any
    prepare: ({ title, titleWithOptions, subtitle }: { title: any; titleWithOptions: any; subtitle: string }) => ({
      title: title ? getPortableTextPreview(title) : getPortableTextPreview(titleWithOptions),
      subtitle,
    }),
  },
  groups: [sectionGroup],
});
