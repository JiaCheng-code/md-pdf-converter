import React from 'react';

export default function ProductInfo() {
  return (
    <div className="max-w-2xl mx-auto py-16 px-4">
      <h1 className="text-3xl font-bold mb-6 text-indigo-700">产品信息</h1>
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">产品简介</h2>
        <p className="text-gray-700">
          <b>Markdown PDF Converter</b> 是一款支持将 Markdown 项目一键批量转换为高质量 PDF 文档的在线工具，适用于技术文档、电子书、知识库等场景。
        </p>
      </section>
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">主要功能</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-1">
          <li>支持上传包含多文件的 Markdown 项目 zip 包</li>
          <li>一键转换为 PDF，支持多种纸张格式</li>
          <li>转换结果可在线预览与下载</li>
          <li>界面简洁，操作便捷，支持多端访问</li>
        </ul>
      </section>
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">技术栈</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-1">
          <li>前端：React + TypeScript + Tailwind CSS</li>
          <li>后端：Go(Gin) + PDF 生成引擎</li>
        </ul>
      </section>
      <section>
        <h2 className="text-xl font-semibold mb-2">联系方式</h2>
        <p className="text-gray-700">如需定制、合作或有任何建议，欢迎联系：<a href="mailto:support@mdpdf.com" className="text-indigo-600 underline">support@mdpdf.com</a></p>
      </section>
    </div>
  );
}
