import { getAllPagesSlugs } from '@/model/getAllPagesSlugs';
import { notFound } from 'next/navigation';
import { draftMode } from 'next/headers';
import { sanityReadToken } from '@/environment';
import { DynamicPage } from '@/components/DynamicPage';
import { getPageContent } from '@/model/getPageContent';
import { Metadata } from 'next';
import { getPageMetadata } from '@/model/getPageMetadata';

type Props = { params: { slug?: string[] } };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = params.slug ? `/${params.slug.join('/')}` : '/';
  const metadata = await getPageMetadata({ slug });

  if (!metadata) return {};

  const { ogTags, ogTwitter } = metadata;

  return {
    title: metadata.title,
    description: metadata.description,
    keywords: metadata.keywords,
    metadataBase: new URL('https://mvp-nextjs-sanity.vercel.app/'),
    alternates: {
      canonical: slug,
    },
    openGraph: {
      title: ogTags?.title || metadata.title,
      description: ogTags?.description || metadata.description,
      images: ogTags.image ? [ogTags.image] : undefined,
      type: ogTags?.type || 'website',
      url: slug,
      siteName: ogTags?.siteName,
    },
    twitter: {
      card: ogTwitter?.card || 'summary_large_image',
      title: ogTwitter?.title,
      description: ogTwitter?.description,
      images: ogTwitter.image ? [ogTwitter.image] : undefined,
      site: ogTwitter?.site,
    },
  };
}

export async function generateStaticParams() {
  const slugs = await getAllPagesSlugs();

  return slugs.map((slug: string) => ({ slug: slug ? slug.split('/') : ['/'] }));
}

export default async function Page({ params }: Props) {
  const { slug } = params;
  const isDraftMode = draftMode().isEnabled;
  const pageSlug = slug ? slug.join('/') : '/';

  const page = await getPageContent({ slug: pageSlug });

  if (!page) return notFound();

  console.log({ page });

  return <DynamicPage page={page} pageSlug={pageSlug} token={sanityReadToken} isDraftMode={isDraftMode} />;
}
