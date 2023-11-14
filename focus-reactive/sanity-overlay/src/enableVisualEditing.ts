import { vercelStegaCombine } from '@vercel/stega';

type GenericObject = { [key: string]: any };

export function patchStringFields(
  obj: GenericObject,
  context: {
    patchCb: (value: string, { id, type, path }: { id: string; type: string; path: string }) => string;
    excludedPaths?: (string | RegExp)[];
    documentId?: string;
    documentType?: string;
    path?: string;
    isRichText?: boolean;
  },
): void {
  for (const key in obj) {
    if (!obj.hasOwnProperty(key)) continue;

    const { patchCb, isRichText } = context;
    const isAnotherDocument = '_id' in obj && '_type' in obj;
    const documentId = isAnotherDocument ? obj._id : context.documentId;
    const documentType = isAnotherDocument ? obj._type : context.documentType;
    const path = isAnotherDocument ? '' : context.path;
    const excludedPaths = context.excludedPaths || [];

    const currentPath = path ? (isRichText ? path : `${path}.${key}`) : key;
    const value = obj[key];

    if (typeof value === 'string') {
      if (key[0] === '_' || (isRichText && key === 'style') || /https?:\/\//.test(value)) continue;
      const isExcludedPath = excludedPaths.some((excludedPath) =>
        excludedPath instanceof RegExp ? excludedPath.test(currentPath) : excludedPath === currentPath,
      );
      if (isExcludedPath) continue;
      if (!documentId) throw new Error('missing `documentId` during patching');
      obj[key] = patchCb(value, { id: documentId, type: documentType, path: currentPath });
    } else if (Array.isArray(value)) {
      value.forEach((item, index) => {
        const hidePath = item?._type === 'block' || isRichText;

        if (typeof item !== 'object' || item === null || ['slug'].includes(item._type)) return;

        patchStringFields(item, {
          patchCb,
          excludedPaths,
          documentId,
          documentType,
          path: hidePath ? currentPath : `${currentPath}[${index}]`,
          isRichText: hidePath,
        });
      });
    } else if (typeof value === 'object' && value !== null) {
      if (['slug'].includes(value._type)) continue;

      patchStringFields(value, {
        patchCb,
        excludedPaths,
        documentId,
        documentType,
        path,
        isRichText,
      });
    }
  }
}

export function enableVisualEditing({
  data,
  excludedPaths,
}: {
  data: GenericObject;
  excludedPaths?: (string | RegExp)[];
}) {
  const sanityBaseUrl = '/admin/desk';

  if (!data._id || !data._type) throw Error('`data` must be a valid Sanity document with `_id` and `_type');

  const { _id: previewDocumentId, _type: previewDocumentType } = data;

  patchStringFields(data, {
    patchCb: (value, { id: editingDocumentId, type: editingDocumentType, path: editingDocumentPath }) => {
      return vercelStegaCombine(value, {
        origin: 'sanity.io',
        href: `${sanityBaseUrl}/${previewDocumentType};${previewDocumentId},view=preview;${editingDocumentId},type=${editingDocumentType},path=${editingDocumentPath}`,
      });
    },
    excludedPaths,
  });

  return data;
}
