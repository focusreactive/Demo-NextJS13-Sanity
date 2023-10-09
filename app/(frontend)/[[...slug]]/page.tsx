import { getAllPagesSlugs } from '@/model/getAllPagesSlugs';
import { notFound } from 'next/navigation';
import { draftMode } from 'next/headers';
import { Hero, Header } from '@focusreactive/cms-kit';
import { token } from '@/model/sanityFetch';
import { PageDynamicContent } from '@/components/PageDynamicContent';
import { getPageContent } from '@/model/getPageContent';
import Head from 'next/head';
import { Metadata } from 'next';

type Props = { params: { slug?: string[] } };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return {}
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

  const heroImage = 'https://i.ibb.co/d4yj9wx/image.png';
  const description =
    'By verifying advertising engagement and protecting budgets, we help businesses get the clarity they need to unlock the best advertising results.';
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
        <Head>
          <link rel="preload" href={heroImage} as="image" fetchPriority="high" />
        </Head>
        <Hero
          title="Clarity beyond measure."
          description={description}
          buttons={[
            { link: 'https://www.trafficguard.ai/', text: 'Start now' },
            { link: 'https://www.trafficguard.ai/', text: 'Contact sales', hasIcon: true },
          ]}
          decor={{
            src: heroImage,
            hasParallax: true,
            // secondSrc: 'https://i.ibb.co/d4yj9wx/image.png',
          }}
          isHomePage
          bgColor="blue400"
        />
        <PageDynamicContent page={page} pageSlug={pageSlug} token={token} isDraftMode={isDraftMode} />
      </main>
    </>
  );
}
