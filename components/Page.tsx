import { Footer, Header } from '@focusreactive/cms-kit';
import { ContentBlocks } from '@/components/ContentBlocks';
import { SanityDocument } from 'sanity';

const addEditableAttrs = (page: SanityDocument): SanityDocument => {
  if (Array.isArray(page.content)) {
    page.content.forEach((block, i) => {
      block.studioUrl = `/admin/intent/edit/id=${page._id};type=${page._type};view=preview;path=content[${i}]`;
    });
  }

  return page;
};

export const Page = ({ page }: { page: SanityDocument }) => {
  const editablePage = addEditableAttrs(page);

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
