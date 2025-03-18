import { useMutation, UseMutationResult, useQueryClient } from "@tanstack/react-query";

import { ProductResponse } from "@/services/products/CreateProductService";
import { EditProductService, ProductPayload } from "@/services/products/EditProductService";

/**
 * React Query hook to edit a product.
 */
export const useEditProduct = (): UseMutationResult<ProductResponse, Error, { id: number; payload: ProductPayload }> => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, payload }) => EditProductService(id, payload),
    onSuccess: (data) => {
      if (data.product) {
        queryClient.invalidateQueries({ queryKey: ["products"] });
      }
    },
    onError: (error: Error) => {
      throw error;
    },
  });
};
