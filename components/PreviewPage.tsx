'use client';

import type { SanityDocument } from '@sanity/client';
import { QueryParams } from '@sanity/client';
import { useLiveQuery } from '@sanity/preview-kit';
import { PAGE_CONTENT_QUERY } from '@/model/queries';
import { Page } from '@/components/Page';

export const PreviewPage = ({ initialPage, params }: { initialPage: SanityDocument; params: QueryParams }) => {
  const [page] = useLiveQuery(initialPage, PAGE_CONTENT_QUERY, params);

  return <Page page={page} />;
};
