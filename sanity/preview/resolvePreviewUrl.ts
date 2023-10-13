import type { SanityDocument } from 'sanity';
import { getSecret } from '@/sanity/utils/getSecret';
import { previewSecretId } from '@/environment';
import { SanityClient } from '@sanity/client';

function getSlug(slug: any) {
  if (!slug) return '/';
  if (slug.current) return slug.current;
  return '/';
}

export async function resolvePreviewUrl(doc: Partial<SanityDocument>, client: SanityClient, baseUrl: string) {
  const previewUrl = new URL(baseUrl);
  const publicPreviewUrl = new URL(baseUrl);
  const slug = doc.slug;
  const urlSlug = getSlug(slug);
  const secret = await getSecret(client, previewSecretId, true);

  if (!secret) {
    throw new Error('No preview secret found');
  }

  previewUrl.pathname = `/api/draft`;
  publicPreviewUrl.pathname = urlSlug.length > 1 ? `/${urlSlug}` : '/';

  previewUrl.searchParams.append(`secret`, secret);

  previewUrl.searchParams.append(`slug`, urlSlug);

  const toString = (url: URL) => url.toString().replaceAll('%2F', '/');

  return {
    privateUrl: toString(previewUrl),
    publicUrl: toString(publicPreviewUrl),
  };
}
