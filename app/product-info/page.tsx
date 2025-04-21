import React from 'react';

export default function ProductInfoPage() {
  return (
    <div className="max-w-3xl mx-auto py-16 px-4">


      {/* 产品定位与目标用户 */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2 text-gray-900">产品定位</h2>
        <p className="text-gray-700 text-base mb-2">
          <b>Markdown PDF Converter</b> 致力于为开发者、写作者、团队和企业提供一站式 Markdown 文档批量转 PDF 能力，适用于技术文档、电子书、知识库、学术资料等多场景。
        </p>
        <div className="flex flex-wrap gap-2 mt-2">
          <span className="bg-indigo-50 text-indigo-700 rounded px-3 py-1 text-xs">技术团队</span>
          <span className="bg-indigo-50 text-indigo-700 rounded px-3 py-1 text-xs">内容创作者</span>
          <span className="bg-indigo-50 text-indigo-700 rounded px-3 py-1 text-xs">知识管理</span>
          <span className="bg-indigo-50 text-indigo-700 rounded px-3 py-1 text-xs">出版/教育行业</span>
        </div>
      </section>

      {/* 典型应用场景 */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2 text-gray-900">典型应用场景</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-1">
          <li>技术团队将项目文档、API 文档批量导出为 PDF 归档</li>
          <li>作者创作电子书，支持 Markdown 项目一键生成出版级 PDF</li>
          <li>企业知识库批量转 PDF，便于线下分发与备份</li>
          <li>教育培训资料统一转为 PDF，便于学员下载和打印</li>
        </ul>
      </section>

      {/* 产品功能与优势 */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2 text-gray-900">核心功能与亮点</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <ul className="list-disc pl-6 text-gray-700 space-y-1">
            <li>支持上传包含多 Markdown 文件及资源的 zip 项目包</li>
            <li>一键批量转换，自动合并、排版优化</li>
            <li>多种纸张格式可选（A4/A5/Letter）</li>
            <li>PDF 支持目录、页码、封面等高级特性</li>
          </ul>
          <ul className="list-disc pl-6 text-gray-700 space-y-1">
            <li>转换结果可在线预览、下载与分享</li>
            <li>界面简洁，交互友好，移动端适配</li>
            <li>支持自定义主题/样式（即将上线）</li>
            <li>高性能后端，支持大文件与高并发</li>
          </ul>
        </div>
      </section>

      {/* 技术架构与优势 */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2 text-gray-900">技术架构与优势</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-1">
          <li>前端：React + Next.js + TypeScript + Tailwind CSS，现代化开发体验</li>
          <li>后端：Go(Gin) 高性能服务，PDF 生成引擎自研，支持多格式资源处理</li>
          <li>安全可靠，支持文件隔离、自动清理，数据隐私有保障</li>
        </ul>
      </section>

      {/* FAQ 常见问题 */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2 text-gray-900">常见问题 FAQ</h2>
        <div className="space-y-3">
          <div>
            <span className="font-semibold text-indigo-700">Q: 支持哪些 Markdown 项目结构？</span>
            <p className="text-gray-700 ml-4">支持主流 Markdown 编辑器导出的项目包，需包含 .md 文件，可包含图片等资源。</p>
          </div>
          <div>
            <span className="font-semibold text-indigo-700">Q: 文件/转换有大小限制吗？</span>
            <p className="text-gray-700 ml-4">单个 zip 包建议不超过 50MB，单个 PDF 支持上百页，后续将支持更大文件。</p>
          </div>
          <div>
            <span className="font-semibold text-indigo-700">Q: 支持自定义 PDF 样式吗？</span>
            <p className="text-gray-700 ml-4">目前支持纸张大小选择，主题/样式自定义功能即将上线。</p>
          </div>
        </div>
      </section>

      {/* 发展规划与愿景 */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2 text-gray-900">发展规划与愿景</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-1">
          <li>支持更多 Markdown 扩展语法与导出格式（如 EPUB、HTML）</li>
          <li>团队协作、批量任务、自动化 API 等高级功能</li>
          <li>开放插件生态，支持自定义渲染与扩展</li>
        </ul>
      </section>
    </div>
  );
}
