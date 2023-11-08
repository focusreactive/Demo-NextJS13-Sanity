import { Footer, Header } from '@focusreactive/cms-kit';
import { ContentBlocks } from '@/components/ContentBlocks';
import { SanityDocument } from 'sanity';

export const Page = ({ page }: { page: SanityDocument }) => {
  return (
    <>
      <Header
        {...(page?.header as any)}
        isFixed={false}
        buttonsColor=""
        linksColor="white"
        heroBackgroundColor="default"
      />

      <main>
        <ContentBlocks blocks={page?.content as any} />;
      </main>

      <Footer {...(page?.footer as any)} />
    </>
  );
};
