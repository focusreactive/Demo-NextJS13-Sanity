'use client';

import type { SanityDocument } from '@sanity/client';
import { QueryParams } from '@sanity/client';
import { useLiveQuery } from '@sanity/preview-kit';
import { PAGE_CONTENT_QUERY } from '@/model/queries';
import { ContentBlocks } from '@/components/ContentBlocks';

export const PreviewContentBlocks = ({ page, params }: { page: SanityDocument; params: QueryParams }) => {
  const [data] = useLiveQuery(page, PAGE_CONTENT_QUERY, params);

  return <ContentBlocks blocks={data?.content} />;
};
