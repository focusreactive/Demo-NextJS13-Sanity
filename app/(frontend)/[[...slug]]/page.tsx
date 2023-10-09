import { getAllPagesSlugs } from '@/model/getAllPagesSlugs';
import { notFound } from 'next/navigation';
import { draftMode } from 'next/headers';
import { Header } from '@focusreactive/cms-kit';
import { token } from '@/model/sanityFetch';
import { PageDynamicContent } from '@/components/PageDynamicContent';
import { getPageContent } from '@/model/getPageContent';
// import Head from 'next/head';
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
    alternates: {
      canonical: slug,
    },
    openGraph: {
      title: ogTags.title || metadata.title,
      description: ogTags.description || metadata.description,
      images: [ogTags.image],
      type: ogTags.type || 'website',
      url: slug,
      siteName: ogTags.siteName,
    },
    twitter: {
      card: ogTwitter.card || 'summary_large_image',
      title: ogTwitter.title,
      description: ogTwitter.description,
      images: [ogTwitter.image],
      site: ogTwitter.site,
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

  // const heroImage = 'https://i.ibb.co/d4yj9wx/image.png';
  return (
    <>
      <Header
        {...(page.header as any)}
        isFixed={false}
        buttonsColor=""
        linksColor="white"
        heroBackgroundColor="default"
      />
      <main>
        {/* hero image is set in the CMS */}
        {/* <Head>
          <link rel="preload" href={heroImage} as="image" fetchPriority="high" />
        </Head> */}
        <PageDynamicContent page={page} pageSlug={pageSlug} token={token} isDraftMode={isDraftMode} />
      </main>
    </>
  );
}
