import type React from "react";
import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export { metadata } from "./metadata";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN">
      <head>
        <script type="application/ld+json" suppressHydrationWarning>{`
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "MD2PDF Markdown 转 PDF 工具",
            "url": "https://your-domain.com/",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://your-domain.com/?q={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          }
        `}</script>
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

import "./globals.css";
