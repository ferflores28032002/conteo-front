import { useQuery, UseQueryResult } from "@tanstack/react-query";

import { ListProductService, Product } from "@/services/products/ListProductService";

export const useListProducts = (): UseQueryResult<Product[], Error> => {
  return useQuery<Product[], Error>({
    queryKey: ["products"],
    queryFn: ListProductService,
    staleTime: 60000,
    refetchOnWindowFocus: false,
  });
};
