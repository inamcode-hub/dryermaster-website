import type { Metadata } from 'next';
import '@/app/styles/globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export const metadata: Metadata = {
  title: 'Dryer Master',
  description:
    'Your trusted partner in optimizing drying processes with advanced monitoring, real-time adjustments, and detailed analytics.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* <html lang="en" data-theme="dark"> */}
      <body>
        <Navbar />
        <main className="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
