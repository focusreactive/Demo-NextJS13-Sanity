import { ContentBlocks } from '@/components/ContentBlocks';
import { PreviewContentBlocks } from '@/components/PreviewContentBlocks';
import { PreviewProvider } from '@/components/PreviewProvider';
import { SanityDocument } from 'sanity';

export const PageDynamicContent = ({
  page,
  pageSlug,
  isDraftMode,
  token,
}: {
  page: SanityDocument;
  pageSlug: string;
  isDraftMode: boolean;
  token: string;
}) => {
  if (isDraftMode && token) {
    return (
      <PreviewProvider token={token}>
        <PreviewContentBlocks page={page} params={{ slug: pageSlug }} />
      </PreviewProvider>
    );
  }

  // @ts-ignore
  return <ContentBlocks blocks={page.content} />;
};
