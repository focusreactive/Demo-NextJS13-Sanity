export const getPortableTextPreview = (
  blocks: { _type: string; children: { _type: string; text: string }[] }[] | string,
) => {
  if (typeof blocks === 'string') return blocks;
  const block = (blocks || []).find((b) => b._type === 'block');
  return block
    ? block.children
        .filter((child) => child._type === 'span')
        .map((span) => span.text)
        .join('')
    : '—';
};
