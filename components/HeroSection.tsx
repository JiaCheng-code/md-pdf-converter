import Image from "next/image"
import { Button } from "@/components/ui/button"
import HeroActionButtons from "@/components/HeroActionButtons"

export default function HeroSection() {
  return (
    <section className="bg-slate-50 py-16 flex-grow">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold">Markdown 转 PDF 工具</h1>
            <p className="text-lg text-gray-600">简单高效的 Markdown 文档转换工具，一键生成精美 PDF 文件</p>
            {/* 使用 Client Component 实现按钮交互 */}
            <HeroActionButtons />
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
