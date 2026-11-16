import Link from 'next/link';
import './globals.css';
import { Inter, Noto_Sans, Playfair_Display } from 'next/font/google';
import { Metadata } from 'next';

// Inter, NotoSan, ...
const inter = Inter({ weight: ['400', '700'] });
// inter ==> { className, style, ... }
console.log(inter);
const notoSan = Noto_Sans();
const playfair = Playfair_Display();

export const metadata: Metadata = {
  title: {
    template: '%s | DevNest',
    default: 'Devnest'
  },
  description: 'This web is for learning Next.js'
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" className={`h-full antialiased ${notoSan.className}`}>
      <body className="min-h-full flex flex-col">
        <header className="flex gap-2">
          <Link href="/" className={playfair.className}>
            Home
          </Link>
          <Link href="/contact">Contact</Link>
          <Link href="/product">Product</Link>
        </header>
        {children}
      </body>
    </html>
  );
}
// useNavigate: react-router <=> useRouter: next.js
