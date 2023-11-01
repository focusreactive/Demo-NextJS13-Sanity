import { PropsWithChildren } from 'react';

export const Editable = ({ block, path, children }: PropsWithChildren<{ block: any; path?: string }>) => {
  if (!block?.studioUrl || !children) return null;

  const url = path ? `${block.studioUrl}.${path}` : block.studioUrl;

  return <div data-sanity-edit-info={JSON.stringify({ origin: 'sanity.io', href: url })}>{children}</div>;
};
