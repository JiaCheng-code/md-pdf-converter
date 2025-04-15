import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Upload, Eye, PenSquare, Zap, Code } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <header className="border-b bg-white">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <Link href="/" className="text-indigo-600 font-bold text-2xl">
            logo
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#" className="text-gray-600 hover:text-gray-900">
              产品介绍
            </Link>
            <Link href="#" className="text-gray-600 hover:text-gray-900">
              使用文档
            </Link>
            <Link href="#" className="text-gray-600 hover:text-gray-900">
              GitHub
            </Link>
            <Button className="bg-indigo-600 hover:bg-indigo-700">开始使用</Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-slate-50 py-16 flex-grow">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold">Markdown 转 PDF 工具</h1>
              <p className="text-lg text-gray-600">简单高效的 Markdown 文档转换工具，一键生成精美 PDF 文件</p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700">
                  立即开始使用
                </Button>
                <Button size="lg" variant="outline">
                  查看使用文档
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <Image
                src="/placeholder.svg?height=400&width=500"
                alt="Markdown to PDF illustration"
                width={500}
                height={400}
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Conversion Section */}
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

      {/* Features Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">核心功能特点</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="bg-indigo-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Zap className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">快速转换</h3>
              <p className="text-gray-600">支持批量转换，秒级完成文档转换，效率更高。</p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="bg-indigo-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <PenSquare className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">样式主题</h3>
              <p className="text-gray-600">提供多种预设样式模板，支持自定义样式设置。</p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="bg-indigo-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Code className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">语法支持</h3>
              <p className="text-gray-600">完整支持 Markdown 语法，代码高亮显示。</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 border-t">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <p className="text-sm text-gray-600">© 2024 Markdown 转 PDF 工具 保留所有权利</p>
            <div className="flex gap-4">
              <Link href="#" aria-label="GitHub">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5 text-gray-600 hover:text-gray-900"
                >
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
              </Link>
              <Link href="#" aria-label="Twitter">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5 text-gray-600 hover:text-gray-900"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
