import { Footer, Header } from '@focusreactive/cms-kit';
import { ContentBlocks } from '@/components/ContentBlocks';
import { SanityDocument } from 'sanity';
import { enableVisualEditing } from '@focusreactive/sanity-overlay';

export const Page = ({ page }: { page: SanityDocument }) => {
  const editablePage = enableVisualEditing({
    data: page,
    documentId: page._id,
    excludedPaths: [/.*footer\.socials\[\d+\]\.icon.*/, /.*\.(bgColor|sectionConfig)/],
  });

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
