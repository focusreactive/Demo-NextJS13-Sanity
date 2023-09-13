import { ContentBlocks } from '@/components/ContentBlocks';
import { getPageContent } from '@/model/getPageContent';
import { getAllPagesSlugs } from '@/model/getAllPagesSlugs';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const slugs = await getAllPagesSlugs();

  return slugs.map((slug: string) => ({ params: { slug } }));
}

export default async function Home({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const page = await getPageContent({ slug: slug || '/' });

  if (!page) return notFound();

  return (
    <main>
      <ContentBlocks blocks={page.content} />
    </main>
  );
}
