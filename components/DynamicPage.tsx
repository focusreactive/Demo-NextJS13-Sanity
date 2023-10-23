import { PreviewPage } from '@/components/PreviewPage';
import { PreviewProvider } from '@/components/PreviewProvider';
import { SanityDocument } from 'sanity';
import { Page } from '@/components/Page';

export const DynamicPage = ({
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
        <PreviewPage initialPage={page} params={{ slug: pageSlug }} />
      </PreviewProvider>
    );
  }

  // @ts-ignore
  return <Page page={page} />;
};
