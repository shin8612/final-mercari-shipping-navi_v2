import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "メルカリ発送ナビ｜送料と最安配送方法を診断",
  description:
    "サイズと重さを入力するだけで、メルカリ発送時に使える配送方法と送料の目安を確認できます。非公式の個人開発ツールです。",
  verification: {
    google: "4mfPsiXloyMo4UvTZGjtp-OSfa9lTliLRGTUsZliMWQ",
  },
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