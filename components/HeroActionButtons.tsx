"use client";
import { Button } from "@/components/ui/button";

export default function HeroActionButtons() {
  return (
    <div className="flex flex-wrap gap-4">
      <Button
        size="lg"
        className="bg-indigo-600 hover:bg-indigo-700 transition-transform duration-150 active:scale-95"
        onClick={e => {
          e.preventDefault();
          const el = document.getElementById('upload-section');
          if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }}
        aria-label="立即开始使用"
      >
        立即开始使用
      </Button>
      <Button
        size="lg"
        variant="outline"
        className="transition-transform duration-150 active:scale-95"
        onClick={() => {
          window.location.href = '/docs';
        }}
        aria-label="查看使用文档"
      >
        查看使用文档
      </Button>
    </div>
  );
}
