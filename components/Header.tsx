import Link from "next/link";
import { Button } from "@/components/ui/button";
import StartButton from "@/components/StartButton";

export default function Header() {
  return (
    <header className="border-b bg-white">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <img src="/logo.png" alt="logo" className="h-9 w-auto" />
          <span className="text-indigo-700 font-bold text-xl md:text-2xl tracking-tight group-hover:text-indigo-900 transition-colors select-none">MD2PDF</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link
            href="/product-info"
            className="text-gray-600 hover:text-gray-900"
          >
            产品信息
          </Link>
          <Link href="/about" className="text-gray-600 hover:text-gray-900">
            关于我们
          </Link>
          <Link href="/docs" className="text-gray-600 hover:text-gray-900">
            使用文档
          </Link>
          <Link href="https://github.com/JiaCheng-code" className="text-gray-600 hover:text-gray-900">
            GitHub
          </Link>
          {/* 使用 Client Component 实现带动画的“开始使用”按钮 */}
          <StartButton />
        </nav>
      </div>
    </header>
  );
}
