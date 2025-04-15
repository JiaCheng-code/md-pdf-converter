import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Header() {
  return (
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
  )
}
