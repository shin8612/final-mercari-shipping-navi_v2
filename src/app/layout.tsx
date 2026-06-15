import "./globals.css";
import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "メルカリ発送ナビ（非公式）｜送料と最安配送方法を診断",
  description:
    "メルカリ発送時の送料や配送方法を調べられる非公式の個人開発ツールです。",
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
          id="adsense-script"
          strategy="beforeInteractive"
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5052878282270246"
          crossOrigin="anonymous"
        />
      </head>

      <body>{children}</body>
    </html>
  );
}