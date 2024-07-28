import { ThemeProvider } from '@components/provider/theme-provider';
import { inter } from '@lib/fonts';
import type { Metadata } from 'next';
import './index.scss';

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
    <html lang='en' suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
