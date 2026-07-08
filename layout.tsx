import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Praveen | C++ Real-time Systems Engineer',
  description: 'High-performance financial systems specialist. Real-time market data processing with sub-10ms latency. Billions of messages daily.',
  keywords: 'C++, Real-time Systems, Financial Technology, High Performance, LSEG',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  );
}
