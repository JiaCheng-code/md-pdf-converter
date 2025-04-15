import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
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
  )
}
