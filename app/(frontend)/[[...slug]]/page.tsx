import { getAllPagesSlugs } from '@/model/getAllPagesSlugs';
import { notFound } from 'next/navigation';
import { draftMode } from 'next/headers';
import { Hero } from '@focusreactive/cms-kit';
import { token } from '@/model/sanityFetch';
import { PageDynamicContent } from '@/components/PageDynamicContent';
import { getPageContent } from '@/model/getPageContent';

export async function generateStaticParams() {
  const slugs = await getAllPagesSlugs();

  return slugs.map((slug: string) => ({ slug: slug ? slug.split('/') : ['/'] }));
}

export default async function Page({ params }: { params: { slug?: string[] } }) {
  const { slug } = params;
  const isDraftMode = draftMode().isEnabled;
  const pageSlug = slug ? slug.join('/') : '/';

  const page = await getPageContent({ slug: pageSlug });

  if (!page) return notFound();

  return (
    <main>
      <Hero
        title="Clarity beyond measure."
        description="By verifying advertising engagement and protecting budgets, we help businesses get the clarity they need to unlock the best advertising results."
        buttons={[
          { link: 'https://www.trafficguard.ai/', text: 'Start now' },
          { link: 'https://www.trafficguard.ai/', text: 'Contact sales' },
        ]}
        decor={{
          src: 'https://i.ibb.co/d4yj9wx/image.png',
          hasParallax: true,
          // secondSrc: 'https://i.ibb.co/d4yj9wx/image.png',
        }}
        isHomePage
        bgColor="blue400"
      />
      <PageDynamicContent page={page} pageSlug={pageSlug} token={token} isDraftMode={isDraftMode} />
    </main>
  );
}
