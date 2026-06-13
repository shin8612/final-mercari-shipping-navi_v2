import "./globals.css";
import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "メルカリ発送ナビ｜送料と最安配送方法を診断",
  description:
    "サイズと重さを入力するだけで、使える配送方法と送料の目安を確認できます。",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <head>
        <Script
          async
          strategy="afterInteractive"
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5052878282270246"
          crossOrigin="anonymous"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}