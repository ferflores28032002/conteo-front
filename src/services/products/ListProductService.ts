import api from "../axiosInstance";

export type Creator = {
  id: number;
  email: string;
  password: string;
  name: string;
  status: boolean;
  isVerified: boolean;
  createdAt: string;
  updatedAt: string;
};

export type Product = {
  id: number;
  code: number;
  name: string;
  description: string;
  quantity: number;
  image: string;
  createdBy: number;
  createdAt: string;
  updatedAt: string;
  creator: Creator;
};

/**
 * Fetches a list of products from the API.
 *
 * This service function makes an HTTP GET request to the "/product" endpoint
 * to retrieve an array of products. It is designed to be used in conjunction
 * with React Query hooks for efficient data fetching and caching in a React
 * application.
 *
 * @returns {Promise<Product[]>} A promise that resolves to an array of Product objects.
 */
export const ListProductService = async (): Promise<Product[]> => {
  const response = await api.get<Product[]>("/products");
  return response.data;
};