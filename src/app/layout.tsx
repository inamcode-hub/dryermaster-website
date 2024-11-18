import type { Metadata } from 'next';
import '@/app/styles/globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { headers } from 'next/headers';
export const metadata: Metadata = {
  title: 'Dryer Master',
  description:
    'Your trusted partner in optimizing drying processes with advanced monitoring, real-time adjustments, and detailed analytics.',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headersList = await headers();
  const currentPath = headersList.get('x-invoke-path') || '/';
  return (
    <html lang="en">
      {/* <html lang="en" data-theme="dark"> */}
      <body>
        <Navbar initialPath={currentPath} />
        <main className="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
