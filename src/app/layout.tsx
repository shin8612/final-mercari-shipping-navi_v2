import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'メルカリ発送ナビ',
  description: 'サイズと重さを入力すると最適な発送方法が分かります',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}