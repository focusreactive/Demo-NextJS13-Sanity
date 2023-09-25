import { DefaultDocumentNodeContext, StructureBuilder, StructureResolver } from 'sanity/desk';
import { PreviewIFrame } from '@/sanity/preview/Preview';
import { dynamicPage } from '@/sanity/schemas/dynamicPage';

export const deskStructure: StructureResolver = (S) => {
  return S.defaults();
};

export const defaultDocumentNode = (S: StructureBuilder, { schemaType }: DefaultDocumentNodeContext) => {
  const documentsWithPreview: string[] = [dynamicPage.name];

  if (documentsWithPreview.includes(schemaType)) {
    return S.document().views([S.view.form(), S.view.component(PreviewIFrame).title('Preview')]);
  }

  return S.document();
};
