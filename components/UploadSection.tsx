"use client";

import { Upload, Eye, PenSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import React, { useRef, useState } from "react";
import { uploadZipAndGetPdf } from "@/api/upload";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

// 常见纸张类型选项
const paperTypeOptions = [
  { value: "A4", label: "A4" },
  { value: "A5", label: "A5" },
  { value: "Letter", label: "Letter" },
  { value: "Legal", label: "Legal" },
  { value: "B5", label: "B5" },
];

const UploadSection = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [paperType, setPaperType] = useState("A4");
  const [pdfFiles, setPdfFiles] = useState<{ name: string; url: string }[]>([]);
  // 新增：保存用户选择的 md 文件
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  // 触发文件选择
  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  // 选择（或拖拽）文件时，仅保存到 state，不上传
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (!file.name.endsWith(".zip")) {
      setError("请上传 .zip 格式的 Markdown 项目包");
      setSelectedFile(null);
      setSuccess(null);
      return;
    }
    setError(null);
    setSuccess(null);
    setSelectedFile(file);
  };

  // 新增：移除已选文件
  const handleRemoveFile = () => {
    setSelectedFile(null);
    setError(null);
    setSuccess(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  // 点击“转换为 PDF”时才上传和转换
  const handleConvertClick = async () => {
    if (!selectedFile) {
      setError("请先选择 Markdown 项目包");
      setSuccess(null);
      return;
    }
    setError(null);
    setSuccess(null);
    setUploading(true);
    try {
      const res = await uploadZipAndGetPdf(selectedFile, paperType);
      const blob = res.data;
      const pdfName = selectedFile.name.replace(/\.zip$/, ".pdf");
      const url = window.URL.createObjectURL(blob);
      setPdfFiles((prev) => [{ name: pdfName, url }, ...prev]);
      setSuccess(`转换成功：${pdfName}`);
      setSelectedFile(null); // 转换后清除选择
      if (fileInputRef.current) fileInputRef.current.value = "";
    } catch (err) {
      setError("网络错误或服务器异常");
      setSuccess(null);
    } finally {
      setUploading(false);
    }
  };

  return (
    <section id="upload-section" className="py-16 min-h-screen animate-fade-in">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold mb-3 text-gray-900 tracking-tight">
            Markdown 转 PDF 工具
          </h2>
          <p className="text-base text-gray-500">
            上传 Markdown 项目 zip 包，选择纸张大小，一键生成 PDF
          </p>
        </div>
        <div className="max-w-2xl mx-auto">
          {/* 上传+参数+操作一体卡片 */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-14 flex flex-col gap-8 border border-gray-200">
            {/* 上传区 */}
            <div className="flex flex-col items-center justify-center text-center transition-all duration-200 group">
              <div className="bg-gray-100 p-4 rounded-full mb-3 shadow-sm">
                <Upload className="h-10 w-10 text-indigo-500 group-hover:scale-110 transition-transform duration-200" />
              </div>
              <input
                ref={fileInputRef}
                type="file"
                accept=".zip"
                style={{ display: "none" }}
                onChange={handleFileChange}
                disabled={uploading}
              />
              <Button
                className="bg-indigo-600 hover:bg-indigo-700 text-base px-7 py-2 rounded-lg font-semibold shadow-sm mt-2"
                onClick={handleButtonClick}
                disabled={uploading}
              >
                选择 zip 文件
              </Button>
              <p className="text-xs text-gray-400 mt-2">
                仅支持 .zip 格式，内容为 Markdown 及资源
              </p>
              {selectedFile && (
                <div className="mt-3 flex items-center gap-2 text-indigo-700 font-medium animate-fade-in text-base">
                  <svg
                    className="w-5 h-5 text-indigo-400"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1="16" y1="13" x2="8" y2="13" />
                    <line x1="16" y1="17" x2="8" y2="17" />
                    <polyline points="10 9 9 9 8 9" />
                  </svg>
                  <span className="truncate max-w-[180px]">
                    {selectedFile.name}
                  </span>
                  <span className="text-xs text-gray-400">
                    ({(selectedFile.size / 1024).toFixed(1)} KB)
                  </span>
                  <button
                    type="button"
                    aria-label="移除文件"
                    onClick={handleRemoveFile}
                    className="ml-1 p-1 rounded hover:bg-gray-200 transition-colors text-gray-400 hover:text-red-500 focus:outline-none"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <line x1="18" y1="6" x2="6" y2="18" />
                      <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                  </button>
                </div>
              )}
            </div>
            {/* 参数与操作区 */}
            <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8 justify-between w-full">
              <div className="flex items-center gap-3">
                <PenSquare className="h-5 w-5 text-gray-400" />
                <span className="text-base text-gray-700">纸张大小</span>
                <Select value={paperType} onValueChange={setPaperType}>
                  <SelectTrigger className="w-32 border-gray-200 bg-white">
                    <SelectValue placeholder="选择纸张" />
                  </SelectTrigger>
                  <SelectContent>
                    {paperTypeOptions.map((opt) => (
                      <SelectItem value={opt.value} key={opt.value}>
                        {opt.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="flex gap-4 mt-2 md:mt-0">
                <Button
                  variant="outline"
                  className="flex items-center gap-2 border-gray-200 text-gray-600 hover:bg-gray-50"
                >
                  <Eye className="h-4 w-4" />
                  预览
                </Button>
                <Button
                  className={`bg-indigo-600 hover:bg-indigo-700 px-8 py-2 rounded-lg text-white font-semibold shadow text-base transition-all duration-200 ${
                    uploading ? "opacity-60 cursor-not-allowed" : ""
                  }`}
                  onClick={handleConvertClick}
                  disabled={uploading || !selectedFile}
                >
                  {uploading ? (
                    <span className="flex items-center gap-2">
                      <span className="loader-circle animate-spin border-2 border-white border-t-indigo-600 rounded-full w-4 h-4"></span>
                      转换中...
                    </span>
                  ) : (
                    <span>转换为 PDF</span>
                  )}
                </Button>
              </div>
            </div>
            {/* 动画提示 */}
            {error && (
              <div className="mt-4 w-full text-center">
                <p className="inline-block text-red-500 bg-red-50 rounded px-4 py-2 animate-fade-in-down shadow-sm">
                  {error}
                </p>
              </div>
            )}
            {success && (
              <div className="mt-4 w-full text-center">
                <p className="inline-block text-green-600 bg-green-50 rounded px-4 py-2 animate-fade-in-down shadow-sm">
                  {success}
                </p>
              </div>
            )}
          </div>
          {/* PDF 文件列表区块 */}
          <div className="mt-10">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2 text-gray-700">
              <span className="inline-block w-2 h-2 bg-indigo-300 rounded-full animate-pulse"></span>
              已生成 PDF 文件
            </h3>
            {pdfFiles.length === 0 ? (
              <div className="text-gray-400 text-center py-8 animate-fade-in">
                <span className="text-5xl">📄</span>
                <div className="mt-2">暂无已生成文件</div>
              </div>
            ) : (
              <ul className="grid md:grid-cols-2 gap-4 animate-fade-in">
                {pdfFiles.map((file, idx) => (
                  <li
                    key={file.url}
                    className="group bg-white rounded-lg shadow hover:shadow-md transition-all duration-200 flex items-center justify-between px-5 py-4 border border-gray-100 hover:border-indigo-200"
                    style={{ animationDelay: `${idx * 60}ms` }}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-indigo-400">
                        <svg
                          width="22"
                          height="22"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-file-text"
                        >
                          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                          <polyline points="14 2 14 8 20 8" />
                          <line x1="16" y1="13" x2="8" y2="13" />
                          <line x1="16" y1="17" x2="8" y2="17" />
                          <polyline points="10 9 9 9 8 9" />
                        </svg>
                      </span>
                      <span className="font-medium text-gray-700 truncate max-w-[130px] group-hover:text-indigo-700 transition-colors">
                        {file.name}
                      </span>
                    </div>
                    <div className="flex flex-row items-center bg-gray-50 rounded-lg overflow-hidden border border-indigo-100 shadow-sm">
                      <button
                        type="button"
                        onClick={() => window.open(file.url, "_blank")}
                        className="flex items-center gap-1 px-3 py-1.5 text-indigo-600 text-sm font-medium border-r border-indigo-100 hover:bg-indigo-50 hover:text-indigo-700 transition-colors duration-150 focus:outline-none"
                        style={{
                          borderTopLeftRadius: "0.5rem",
                          borderBottomLeftRadius: "0.5rem",
                        }}
                      >
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                        >
                          <circle cx="12" cy="12" r="10" />
                          <circle cx="12" cy="12" r="3" />
                          <path d="M2.05 12a9.94 9.94 0 0 1 19.9 0" />
                        </svg>
                        预览
                      </button>
                      <a
                        href={file.url}
                        download={file.name}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 px-3 py-1.5 text-indigo-600 text-sm font-medium hover:bg-indigo-50 hover:text-indigo-700 transition-colors duration-150 focus:outline-none"
                        style={{
                          borderTopRightRadius: "0.5rem",
                          borderBottomRightRadius: "0.5rem",
                        }}
                      >
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 5v14M19 12l-7 7-7-7" />
                        </svg>
                        下载
                      </a>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
      {/* 动效样式 */}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.7s cubic-bezier(0.4, 0, 0.2, 1) both;
        }
        @keyframes fade-in-down {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-down {
          animation: fade-in-down 0.5s both;
        }
        @keyframes bounce-slow {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        .animate-bounce-slow {
          animation: bounce-slow 2.2s infinite;
        }
        .loader-circle {
          border-right-color: transparent !important;
        }
      `}</style>
    </section>
  );
};

export default UploadSection;
