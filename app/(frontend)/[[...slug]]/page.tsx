import { getAllPagesSlugs } from '@/model/getAllPagesSlugs';
import { notFound } from 'next/navigation';
import { draftMode } from 'next/headers';
import { Hero } from '@focusreactive/cms-kit';
import { token } from '@/model/sanityFetch';
import { PageDynamicContent } from '@/components/PageDynamicContent';
import { getPageContent } from '@/model/getPageContent';
import Head from 'next/head';

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

  const heroImage = 'https://i.ibb.co/d4yj9wx/image.png';
  const description =
    'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.';

  return (
    <main>
      <Head>
        <link rel="preload" href={heroImage} as="image" fetchPriority="high" />
      </Head>
      <Hero
        title="Clarity beyond measure."
        description={description}
        buttons={[
          { link: 'https://www.trafficguard.ai/', text: 'Start now' },
          { link: 'https://www.trafficguard.ai/', text: 'Contact sales' },
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
  );
}
