"use client";
import { Button } from "@/components/ui/button";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function StartButton() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  const handleClick = (e: React.MouseEvent) => {
    if (isHome) {
      e.preventDefault();
      const el = document.getElementById("upload-section");
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
    // 非首页不阻止跳转，Link 默认行为
  };

  return (
    <Link href="/#upload-section" scroll={true} passHref legacyBehavior>
      <Button
        className="bg-indigo-600 hover:bg-indigo-700 transition-transform duration-150 active:scale-95"
        asChild
        onClick={handleClick}
      >
        <span>开始使用</span>
      </Button>
    </Link>
  );
}
