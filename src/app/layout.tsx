import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";

export const metadata: Metadata = {
  title: "Think Talk Ventures",
  description:
    "O seu parceiro de conversa inteligente para a geração inovadora de ideias de startups, combinando criatividade e tecnologia.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={GeistSans.className}>{children}</body>
    </html>
  );
}
