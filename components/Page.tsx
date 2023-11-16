import { Footer, Header } from '@focusreactive/cms-kit';
import { ContentBlocks } from '@/components/ContentBlocks';
import { SanityDocument } from 'sanity';
import { enableVisualEditing } from '@focusreactive/sanity-overlay';

export const Page = ({ page }: { page: SanityDocument }) => {
  const start = performance.now();
  const editablePage = enableVisualEditing({
    data: page,
    excludedPaths: [/.*footer\.socials\[\d+\]\.icon.*/, /.*\.(bgColor|sectionConfig)/],
  });
  console.log('enableVisualEditing', performance.now() - start);

  return (
    <>
      <Header
        {...(editablePage?.header as any)}
        isFixed={false}
        buttonsColor=""
        linksColor="white"
        heroBackgroundColor="default"
      />

      <main>
        <ContentBlocks blocks={editablePage?.content as any} />;
      </main>

      <Footer {...(editablePage?.footer as any)} />
    </>
  );
};
