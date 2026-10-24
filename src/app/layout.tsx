import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Vardha Build Projects Private Limited - NOC & Modular Construction',
  description: 'Streamlining statutory compliance for National Highways, Fuel Stations, and Warehouses alongside high-speed manufacturing of insulated PUF Panel Kiosks.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased text-slate-900 bg-slate-50 font-sans selection:bg-cyan-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}