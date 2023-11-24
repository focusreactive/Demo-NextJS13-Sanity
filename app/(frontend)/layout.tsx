import './globals.css';

import { DM_Sans } from 'next/font/google';
import { VisualEditingOverlay } from '@focusreactive/sanity-overlay';
import { draftMode } from 'next/headers';

const dmSans = DM_Sans({ subsets: ['latin'] });

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  // const isDraftMode = draftMode().isEnabled;
  const isDraftMode = true;

  return (
    <html lang="en">
      <body className={dmSans.className}>{children}</body>
      <VisualEditingOverlay isDraftMode={isDraftMode} />
    </html>
  );
}
