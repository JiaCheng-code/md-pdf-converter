import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Markdown 转 PDF 在线工具 | 一键转换高质量 PDF | MD2PDF",
  description: "免费、开源、支持多种纸张和样式的 Markdown 转 PDF 工具。无需注册，上传 Markdown 项目包即可一键生成高质量 PDF，适配 A4/A5/Letter/B5 等纸张，支持图片、代码高亮、实时预览。",
  keywords: [
    "Markdown 转 PDF",
    "md2pdf",
    "Markdown to PDF",
    "PDF 在线转换",
    "Markdown 导出 PDF",
    "PDF 生成工具",
    "开源 Markdown 工具",
    "批量 Markdown 转换",
    "PDF 样式模板",
    "PDF 纸张大小"
  ],
  openGraph: {
    title: "Markdown 转 PDF 在线工具 | 一键转换高质量 PDF | MD2PDF",
    description: "免费、开源、支持多种纸张和样式的 Markdown 转 PDF 工具。无需注册，上传 Markdown 项目包即可一键生成高质量 PDF，适配 A4/A5/Letter/B5 等纸张，支持图片、代码高亮、实时预览。",
    url: "https://your-domain.com/",
    siteName: "MD2PDF Markdown 转 PDF 工具",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Markdown 转 PDF 在线工具预览图"
      }
    ],
    locale: "zh_CN",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Markdown 转 PDF 在线工具 | 一键转换高质量 PDF | MD2PDF",
    description: "免费、开源、支持多种纸张和样式的 Markdown 转 PDF 工具。无需注册，上传 Markdown 项目包即可一键生成高质量 PDF，适配 A4/A5/Letter/B5 等纸张，支持图片、代码高亮、实时预览。",
    images: ["/opengraph-image.png"]
  },
  robots: {
    index: true,
    follow: true
  }
};

export default metadata;
