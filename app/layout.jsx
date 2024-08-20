import { Inter } from 'next/font/google';
import '@/app/globals.css';
import Header from '@/app/components/header';
import Footer from '@/app/components/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: {
    template: `%s | AbeAkinori's_Portfolio`,
    default: `AbeAkinori's_Portfolio`,
  },
  description: `This is AbeAkinori's portfolio website`,
  metadataBase: new URL(
    'https://my-next-portfolio-akinori99s-projects.vercel.app'
  ),
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
