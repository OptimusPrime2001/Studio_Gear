import type { Metadata } from 'next';
import './index.scss';
import { space_grotesk } from '@lib/fonts';
import { ThemeProvider } from '@components/provider/theme-provider';

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
      <ThemeProvider attribute='class' defaultTheme='light' enableSystem disableTransitionOnChange>
        <body className={space_grotesk.className}>{children}</body>
      </ThemeProvider>
    </html>
  );
}
