import axios from "axios";

/**
 * Creates an Axios instance with a base URL set from the environment variable `NEXT_PUBLIC_BASE_URL`.
 * This instance is used to make HTTP requests in the application.
 * 
 * @remarks
 * This Axios instance is typically used in conjunction with React Query to perform data fetching.
 * By centralizing the base URL configuration, it ensures that all requests use the same base URL,
 * making it easier to manage and maintain the API endpoints.
 * 
 * @example
 * ```typescript
 * import { useQuery } from 'react-query';
 * import api from './services/axiosInstance';
 * 
 * const fetchData = async () => {
 *   const { data } = await api.get('/endpoint');
 *   return data;
 * };
 * 
 * const { data, error, isLoading } = useQuery('fetchData', fetchData);
 * ```
 */
const api = axios.create({ baseURL: process.env.NEXT_PUBLIC_BASE_URL });

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("authToken");
    if (token) config.headers.Authorization = `Bearer ${token}`;

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
