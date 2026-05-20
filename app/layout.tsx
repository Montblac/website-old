import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Sam Leyva | Software Engineer',
  description: 'Sam Leyva is a software engineer based in Los Angeles, CA who builds reliable, thoughtful software.',
  keywords: ['software engineer', 'fullstack', 'web developer', 'Los Angeles'],
  openGraph: {
    title: 'Sam Leyva | Software Engineer',
    description: 'Software engineer based in Los Angeles, CA.',
    url: 'https://samleyva.com',
    siteName: 'Sam Leyva',
    locale: 'en_US',
    type: 'website',
  },
  robots: { index: true, follow: true },
  icons: { icon: '/favicon.ico' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-nord-0 text-nord-5 font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
