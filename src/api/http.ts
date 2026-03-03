import axios, { type AxiosError, type InternalAxiosRequestConfig } from 'axios';
import { API_BASE_URL } from '@/config/constants';
import { useMobileDataStore } from '@/stores/mobileData';

interface RetryableRequestConfig extends InternalAxiosRequestConfig {
  _retry?: boolean;
}

export const httpClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 15000,
});

httpClient.interceptors.request.use((config) => {
  const mobileDataStore = useMobileDataStore();
  const nextConfig = config;

  if (mobileDataStore.jwt) {
    nextConfig.headers.Authorization = `Bearer ${mobileDataStore.jwt}`;
  }

  if (mobileDataStore.webConfig.taskId) {
    nextConfig.headers['x-task-id'] = mobileDataStore.webConfig.taskId;
  }

  return nextConfig;
});

httpClient.interceptors.response.use(
  (response) => response,
  async (error: AxiosError) => {
    const mobileDataStore = useMobileDataStore();
    const originalRequest = error.config as RetryableRequestConfig;

    if (error.response?.status === 401 && originalRequest && !originalRequest._retry) {
      originalRequest._retry = true;
      const nextJwt = await mobileDataStore.updateJwtFromMobile();
      originalRequest.headers.Authorization = `Bearer ${nextJwt}`;
      return httpClient(originalRequest);
    }

    return Promise.reject(error);
  },
);