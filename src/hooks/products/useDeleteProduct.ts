import { useMutation, UseMutationResult, useQueryClient } from "@tanstack/react-query";

import { DeleteProductService } from "@/services/products/DeleteProductService";
/**
 * React Query hook to delete a product.
 */
export const useDeleteProduct = (): UseMutationResult<void, Error, number> => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: DeleteProductService,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
    onError: (error: Error) => {
      throw error;
    },
  });
};