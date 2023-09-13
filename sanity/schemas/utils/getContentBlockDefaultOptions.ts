import { sectionGroup } from '../common/section';

export const getContentBlockDefaultOptions = ({ title }: { title: string } = { title: 'title' }) => ({
  preview: {
    select: {
      title,
      subtitle: '_type',
    },
  },
  groups: [sectionGroup],
});
