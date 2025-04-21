import api from "@/lib/request";

/**
 * 上传 zip 文件，返回 PDF blob
 * @param file zip文件对象
 * @param options 额外 axios 配置
 */
export const uploadZipAndGetPdf = (file: File, paper: string = 'A4', options = {}) => {
  const formData = new FormData();
  formData.append('file', file);
  formData.append('paper', paper);
  return api.post('/api/upload', formData, { responseType: 'blob', ...options });
};
