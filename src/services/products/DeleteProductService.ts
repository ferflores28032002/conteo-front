import api from "../axiosInstance";

/**
 * Deletes a product by its ID.
 *
 * This service function sends a DELETE request to the API to remove a product
 * identified by the provided ID. It is designed to be used in a React Query hook.
 *
 * @param {number} id - The ID of the product to be deleted.
 * @returns {Promise<void>} A promise that resolves when the product is successfully deleted.
 * @throws {Error} If the product deletion fails (i.e., the response status code does not start with "2").
 */
export const DeleteProductService = async (id: number): Promise<void> => {
  const response = await api.delete(`/products/${id}`);
};