import type { SanityDocument } from 'sanity';

// TODO: move to .env
const previewSecret = 'secret';
const remoteUrl = `https://mvp-nextjs-sanity.vercel.app`;
const localUrl = `http://localhost:3000`;

function getSlug(slug: any) {
  if (!slug) return '/';
  if (slug.current) return slug.current;
  return '/';
}

export default function resolveProductionUrl(doc: Partial<SanityDocument>) {
  const baseUrl = window.location.hostname === 'localhost' ? localUrl : remoteUrl;
  const previewUrl = new URL(baseUrl);
  const publicPreviewUrl = new URL(baseUrl);
  const slug = doc.slug;
  const urlSlug = getSlug(slug);

  previewUrl.pathname = `/api/draft`;
  publicPreviewUrl.pathname = urlSlug.length > 1 ? `/${urlSlug}` : '/';

  previewUrl.searchParams.append(`secret`, previewSecret);

  previewUrl.searchParams.append(`slug`, urlSlug);

  const toString = (url: URL) => url.toString().replaceAll('%2F', '/');

  return {
    privateUrl: toString(previewUrl),
    publicUrl: toString(publicPreviewUrl),
  };
}
