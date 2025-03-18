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

export type ProductPayload = {
  code: number;
  name: string;
  description: string;
  quantity: number;
  image: File | null;
};

export type ProductResponse = {
  message: string;
  product?: Product;
};

/**
 * Service to create a new product.
 * 
 * This function sends a POST request to the "/product" endpoint with the provided payload
 * to create a new product. It is designed to be used within a React Query hook.
 * 
 * @param payload - The data required to create a new product.
 * @returns A promise that resolves to the response data containing the created product details.
 */
export const CreateProductService = async (payload: ProductPayload): Promise<ProductResponse> => {
  const formData = new FormData();
  formData.append("code", payload.code.toString());
  formData.append("name", payload.name);
  formData.append("description", payload.description);
  formData.append("quantity", payload.quantity.toString());

  if(!payload.image) {
    throw new Error("Image is required");
  }
  formData.append("image", payload.image);

  const response = await api.post<ProductResponse>("/products", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return response.data;
};

