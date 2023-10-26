import { PropsWithChildren } from 'react';
import { styled } from '@linaria/react';
import Link from 'next/link';

const OutlineWrapper = styled.div`
  position: relative;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border: #ea5151 solid 2px;
    border-radius: 3px;
    z-index: 50;
  }
`;

const StudioLink = styled(Link)`
  display: block;
  position: absolute;
  top: -3px;
  right: 0;
  z-index: 100;
  appearance: none;
  border: none;
  padding: 4px 8px;
  background-color: #ea5151;
  color: #fff;
  text-decoration: none;
  outline: none;
  transform: translateY(-100%);
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', 'Liberation Sans', Helvetica,
    Arial, system-ui, sans-serif;
  font-weight: 500;
  border-radius: 3px;
  font-size: 12px;
  transition: all 0.2s;

  &:hover {
    background-color: #e22a2a;
  }
`;

export const Editable = ({ block, path, children }: PropsWithChildren<{ block: any; path?: string }>) => {
  if (!block?.studioUrl || !children) return null;

  const url = path ? `${block.studioUrl}.${path}` : block.studioUrl;

  return (
    <OutlineWrapper>
      {children}

      <StudioLink href={url} target={'_blank'}>
        Edit in Sanity Studio
      </StudioLink>
    </OutlineWrapper>
  );
};
