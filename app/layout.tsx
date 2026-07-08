import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Simple Email App',
  description: 'A starter Next.js app with auth, settings, and Resend email workflows.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
