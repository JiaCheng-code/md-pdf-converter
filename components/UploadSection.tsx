import { Upload, Eye, PenSquare } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function UploadSection() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">开始转换您的文档</h2>
          <p className="text-gray-600">支持拖拽上传 Markdown 文件，快速预览和转换</p>
        </div>
        <div className="max-w-3xl mx-auto">
          {/* Upload Area */}
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-12 mb-6">
            <div className="flex flex-col items-center justify-center text-center">
              <div className="bg-gray-100 p-3 rounded-full mb-4">
                <Upload className="h-8 w-8 text-gray-500" />
              </div>
              <p className="text-gray-600 mb-4">拖拽 Markdown 文件到此处，或点击上传</p>
              <Button className="bg-indigo-600 hover:bg-indigo-700">选择文件</Button>
              <p className="text-sm text-gray-500 mt-2">支持 .md 格式文件</p>
            </div>
          </div>
          {/* Controls */}
          <div className="flex justify-between items-center mb-8">
            <div className="flex gap-2">
              <Button variant="outline" className="flex items-center gap-2">
                <Eye className="h-4 w-4" />
                预览
              </Button>
              <Button variant="outline" className="flex items-center gap-2">
                <PenSquare className="h-4 w-4" />
                选择样式
              </Button>
            </div>
            <Button className="bg-indigo-600 hover:bg-indigo-700">转换为 PDF</Button>
          </div>
        </div>
      </div>
    </section>
  )
}
