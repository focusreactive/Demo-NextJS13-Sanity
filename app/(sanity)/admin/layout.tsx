import type { ReactNode } from 'react';
import { css } from '@linaria/core';

export const metadata = {
  robots: 'noindex',
};

const studioGlobalStyles = css`
  height: 100vh;
  max-height: 100dvh;
  overscroll-behavior: none;
  -webkit-font-smoothing: antialiased;
  overflow: auto;
  margin: 0;
`;

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={studioGlobalStyles}>{children}</body>
    </html>
  );
}
