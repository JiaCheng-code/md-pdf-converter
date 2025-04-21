import React from "react";

export default function AboutPage() {
  return (
    <div className="max-w-2xl mx-auto py-16 px-4">
      {/* 个人信息与联系方式卡片 */}
      <section className="mb-10 bg-white rounded-2xl shadow-lg border border-indigo-100 p-8 flex flex-col md:flex-row items-center gap-10">
        <div className="flex-shrink-0 mb-6 md:mb-0">
          <img
            src="/wx.JPG"
            alt="微信二维码"
            className="w-40 h-40 object-contain rounded-xl border-2 border-indigo-100 shadow bg-white"
            style={{width: '160px', height: '160px', objectFit: 'contain', display: 'block', margin: '0 auto'}}
          />
          <div className="mt-3 text-center text-xs text-gray-500">微信扫码添加咨询/合作（备注“PDF工具”）</div>
        </div>
        <div className="flex-1 flex flex-col items-start">
          <h1 className="text-3xl font-extrabold text-indigo-700 mb-2">coder-zjc</h1>
          <div className="text-gray-700 text-base mb-2">独立开发者 · 前端 & 全栈工程师</div>
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full text-xs font-medium">React</span>
            <span className="bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full text-xs font-medium">TypeScript</span>
            <span className="bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full text-xs font-medium">Go</span>
            <span className="bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full text-xs font-medium">Node.js</span>
            <span className="bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full text-xs font-medium">SaaS</span>
            <span className="bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full text-xs font-medium">知识管理</span>
          </div>
          <div className="text-gray-800 text-sm mb-3 leading-relaxed">
            你好，我是 <b>coder-zjc</b>，一名热爱技术与开源的独立开发者。<br />
            具备多年一线互联网公司前端与全栈开发经验，主攻 React、TypeScript、Node.js、Go 等方向，擅长从 0 到 1 设计和实现高效的开发者工具、知识管理与内容创作类产品。
            <br />
            我始终相信技术的价值在于服务创造者和提升生产力，因此热衷于打造简单易用、极致体验的工具型产品。平时喜欢钻研新技术、参与开源项目，也乐于与开发者社区交流分享。
            <br />
            代表项目包括 Markdown PDF Converter、团队知识库、自动化效率工具等，欢迎志同道合的朋友一起交流、共建、成长！
          </div>
          <div className="w-full flex flex-col gap-1 text-sm text-gray-700 mt-1">
            <div><span className="font-semibold text-indigo-700">微信：</span>coder-zjc</div>
            <div><span className="font-semibold text-indigo-700">邮箱：</span><a href="mailto:z675232630@163.com" className="text-indigo-600 underline">z675232630@163.com</a></div>
            <div><span className="font-semibold text-indigo-700">GitHub：</span><a href="https://github.com/JiaCheng-code" className="text-indigo-600 underline" target="_blank" rel="noopener noreferrer">JiaCheng-code</a></div>
          </div>
        </div>
      </section>





      {/* FAQ区块 */}
      <section className="mb-8">
        <h2 className="text-xl font-bold text-indigo-700 mb-2">常见问题 FAQ</h2>
        <div className="space-y-3 text-gray-700 text-sm">
          <div>
            <b>Q: 支持哪些格式的 Markdown？</b><br />
            A: 支持标准 Markdown 语法，兼容大部分主流编辑器导出的 .md 文件。
          </div>
          <div>
            <b>Q: 是否支持批量导出？</b><br />
            A: 支持一键批量导出多个 Markdown 文件为 PDF。
          </div>
          <div>
            <b>Q: 有哪些平台支持？</b><br />
            A: 支持主流桌面浏览器，移动端体验持续优化中。
          </div>
          <div>
            <b>Q: 如何联系开发者反馈问题？</b><br />
            A: 可通过微信、邮箱或 GitHub issue 联系开发者。
          </div>
        </div>
      </section>

      {/* 社交与合作邀请区块 */}
      <section>
        <h2 className="text-xl font-bold text-indigo-700 mb-2">社交 & 合作</h2>
        <div className="flex flex-wrap gap-4 text-base text-gray-700 items-center">
          <a href="mailto:z675232630@163.com" className="bg-indigo-50 hover:bg-indigo-100 text-indigo-700 px-4 py-2 rounded-lg shadow-sm transition">📧 邮箱联系</a>
          <a href="https://github.com/JiaCheng-code" className="bg-indigo-50 hover:bg-indigo-100 text-indigo-700 px-4 py-2 rounded-lg shadow-sm transition" target="_blank" rel="noopener noreferrer">🌏 GitHub</a>
          <span className="bg-indigo-100 text-indigo-700 px-4 py-2 rounded-lg">微信：coder-zjc</span>
        </div>
        <div className="text-xs text-gray-500 mt-2">欢迎合作、交流、共建更好的开发者工具！</div>
      </section>
    </div>
  );
}
