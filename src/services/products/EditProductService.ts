import api from "../axiosInstance";

import { ProductResponse } from "./CreateProductService";

export type ProductPayload = Partial<{
  code: number;
  name: string;
  description: string;
  quantity: number;
  image: File | null
}>;

const isValidValue = (value: unknown): value is string | File => 
  value !== undefined && value !== null;

/**
 * Constructs a FormData object from a given payload.
 * @param payload - The product data to be sent.
 * @returns A FormData instance containing the valid fields.
 */
const createFormData = (payload: ProductPayload): FormData => {
  const formData = new FormData();

  Object.entries(payload).forEach(([key, value]) => {
    if (isValidValue(value)) {
      formData.append(key, value instanceof File ? value : String(value));
    }
  });

  return formData;
};

/**
 * Sends a PUT request to update a product with the provided payload.
 * @param id - The ID of the product to update.
 * @param payload - The data fields to update.
 * @returns A promise resolving to the updated product response.
 */
export const EditProductService = async (id: number, payload: ProductPayload): Promise<ProductResponse> => {
  const formData = createFormData(payload);

  const response = await api.put<ProductResponse>(`/products/${id}`, formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });

  return response.data;
};
