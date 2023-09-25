import { StructureBuilder, StructureResolver } from 'sanity/desk';
import { PreviewIFrame } from '@/sanity/preview/Preview';

export const deskStructure: StructureResolver = (S) => {
  return S.defaults();
};

export const defaultDocumentNode = (S: StructureBuilder) =>
  S.document().views([S.view.form(), S.view.component(PreviewIFrame).title('Preview')]);
