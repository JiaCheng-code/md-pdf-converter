import React from "react";
import Link from "next/link";

export default function DocsPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4 max-w-2xl">
        <h1 className="text-3xl font-extrabold text-indigo-700 mb-6">
          使用文档
        </h1>
        <div className="bg-white rounded-2xl shadow-lg p-8 border border-indigo-100 mb-8">
          <h2 className="text-xl font-bold text-gray-800 mb-2">快速上手</h2>
          <ol className="list-decimal pl-6 text-gray-700 space-y-2 text-base">
            <li>
              准备你的 Markdown 项目（建议所有图片、附件放在同一目录下）。
            </li>
            <li>
              将整个项目文件夹压缩为{" "}
              <span className="font-mono bg-indigo-50 px-2 py-1 rounded">
                .zip
              </span>{" "}
              文件。
            </li>
            <li>点击首页“开始使用”或“上传”按钮，上传你的 zip 包。</li>
            <li>选择纸张类型，点击“转换为 PDF”。</li>
            <li>等待片刻，下载自动生成的 PDF 文件。</li>
          </ol>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 border border-indigo-100 mb-8">
          <h2 className="text-xl font-bold text-gray-800 mb-2">常见问题</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2 text-base">
            <li>
              支持哪些 Markdown 语法？—— 基本语法、图片、代码块、表格均支持。
            </li>
            <li>
              图片如何引用？—— 推荐使用相对路径，图片需与 md 文件在同一 zip
              包内。
            </li>
            <li>
              单个文件/压缩包有大小限制吗？—— 建议单个 zip 包不超过 20MB。
            </li>
            <li>转换失败怎么办？—— 检查文件格式、图片路径，或联系开发者。</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
