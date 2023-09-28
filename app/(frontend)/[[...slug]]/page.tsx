import { ContentBlocks } from '@/components/ContentBlocks';
import { getPageContent } from '@/model/getPageContent';
import { getAllPagesSlugs } from '@/model/getAllPagesSlugs';
import { notFound } from 'next/navigation';
import { draftMode } from 'next/headers';
import { Hero } from '@focusreactive/cms-kit';

export async function generateStaticParams() {
  const slugs = await getAllPagesSlugs();

  return slugs.map((slug: string) => ({ slug: slug ? slug.split('/') : ['/'] }));
}

export default async function Page({ params }: { params: { slug?: string[] } }) {
  const { slug } = params;
  const { isEnabled } = draftMode();

  const page = await getPageContent({ slug: slug ? slug.join('/') : '/', isDraftMode: isEnabled });

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
        decor={{ src: 'https://i.ibb.co/d4yj9wx/image.png', hasParallax: true }}
        isHomePage
        bgColor="blue400"
      />
      <ContentBlocks blocks={page.content} />
    </main>
  );
}
