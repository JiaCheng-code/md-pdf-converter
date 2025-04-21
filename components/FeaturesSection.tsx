import { FileText, Palette, Eye } from "lucide-react";

export default function FeaturesSection() {
  return (
    <section className="py-16 bg-slate-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">核心功能特点</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <div className="bg-indigo-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <FileText className="w-6 h-6 text-indigo-500" />
            </div>
            <h3 className="text-xl font-semibold mb-2">一键转换</h3>
            <p className="text-gray-600">支持 Markdown 文件一键转换为高质量 PDF，操作简单，效率极高。</p>
          </div>
          {/* Feature 2 */}
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <div className="bg-indigo-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <Palette className="w-6 h-6 text-indigo-500" />
            </div>
            <h3 className="text-xl font-semibold mb-2">多样样式</h3>
            <p className="text-gray-600">内置多种 PDF 样式模板，满足不同文档排版需求。</p>
          </div>
          {/* Feature 3 */}
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <div className="bg-indigo-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <Eye className="w-6 h-6 text-indigo-500" />
            </div>
            <h3 className="text-xl font-semibold mb-2">实时预览</h3>
            <p className="text-gray-600">转换前可实时预览 PDF 效果，确保内容和格式无误。</p>
          </div>
        </div>
      </div>
    </section>
  )
}
