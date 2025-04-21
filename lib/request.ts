import axios from "axios";

const instance = axios.create({
  // 本地开发端口，若部署可用 .env 配置
  baseURL: "https://www.snaplite.xyz/",
  timeout: 20000,
});

// 通用请求方法封装
export const request = async <T = any>(
  config: Parameters<typeof instance.request>[0]
) => {
  try {
    const response = await instance.request<T>(config);
    return response;
  } catch (error: any) {
    // 这里可根据实际情况做全局错误处理
    throw error;
  }
};

export default instance;
