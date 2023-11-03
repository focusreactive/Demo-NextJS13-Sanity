import { vercelStegaCombine } from '@vercel/stega';

type GenericObject = { [key: string]: any };

export function patchStringFields(
  obj: GenericObject,
  patchCb: (value: string, path: string) => string,
  path: string = '',
  isRichText = false,
): void {
  for (const key in obj) {
    if (!obj.hasOwnProperty(key)) continue;

    const currentPath = path ? (isRichText ? path : `${path}.${key}`) : key;
    const value = obj[key];

    if (typeof value === 'string') {
      if (key[0] === '_' || (isRichText && key === 'style')) continue;
      obj[key] = patchCb(value, currentPath);
    } else if (Array.isArray(value)) {
      value.forEach((item, index) => {
        const hidePath = item?._type === 'block' || isRichText;
        if (typeof item === 'object' && item !== null) {
          patchStringFields(item, patchCb, hidePath ? currentPath : `${currentPath}[${index}]`, hidePath);
        }
      });
    } else if (typeof value === 'object' && value !== null) {
      patchStringFields(value, patchCb, currentPath, isRichText);
    }
  }
}

export function patchDataWithStega(data: GenericObject, documentId: string) {
  const openInSanityUrl = `/admin/intent/edit/id=${documentId}`;

  patchStringFields(data, (value, path) =>
    vercelStegaCombine(value, { origin: 'sanity.io', href: `${openInSanityUrl};path=${path}` }),
  );

  return data;
}
