import type { Metadata } from 'next';
import './index.scss';
import { space_grotesk } from '@lib/fonts';

export const metadata: Metadata = {
  title: 'Studio Gear',
  description: 'Provide many items setup studio'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={space_grotesk.className}>{children}</body>
    </html>
  );
}
