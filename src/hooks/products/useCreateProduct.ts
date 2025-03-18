import { useMutation, UseMutationResult, useQueryClient } from "@tanstack/react-query";

import { CreateProductService, ProductPayload, ProductResponse } from "@/services/products/CreateProductService";

/**
 * React Query hook to create a product.
 */
export const useCreateProduct = (): UseMutationResult<ProductResponse, Error, ProductPayload> => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: CreateProductService,
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