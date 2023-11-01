import './globals.css';

import { DM_Sans } from 'next/font/google';
import { VisualEditingOverlay } from '@/components/VisualEditingOverlay';

const dmSans = DM_Sans({ subsets: ['latin'] });

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={dmSans.className}>{children}</body>
      <VisualEditingOverlay />
    </html>
  );
}
