"use client";

import { ReactNode } from "react";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

type Props = {
  children: ReactNode;
};

/**
 * Creates a new instance of QueryClient with default options.
 * 
 * @constant
 * @type {QueryClient}
 * @defaultOptions
 * @property {object} queries - Configuration for query behaviors.
 * @property {number} queries.retry - Number of retry attempts for failed queries.
 * @property {boolean} queries.refetchOnWindowFocus - Determines if queries should refetch on window focus.
 */
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 2,
      refetchOnWindowFocus: false,
    },
  },
});

export const CustomQueryClientProvider = ({ children }: Props) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
