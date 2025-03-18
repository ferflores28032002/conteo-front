import { useEffect, useState } from "react";

import { useRouter } from "next/navigation";

import { useAuthStore } from "@/store";

/**
 * Custom hook that redirects the user to the home page if they are not authenticated.
 *
 * This hook checks the authentication status of the user by verifying the presence of a token and user object.
 * If either is missing, it redirects the user to the home page ("/").
 * 
 * @returns {boolean} - A boolean indicating whether the authentication status is still being checked.
 *
 * @example
 * ```tsx
 * const isCheckingAuth = useRedirectIfUnauthenticated();
 * 
 * if (isCheckingAuth) {
 *   return <LoadingSpinner />;
 * }
 * 
 * return <AuthenticatedApp />;
 * ```
 */
export function useRedirectIfUnauthenticated() {
  const { token, user } = useAuthStore();
  const router = useRouter();

  const [isCheckingAuth, setIsCheckingAuth] = useState<boolean>(true);

  useEffect(() => {
    if (!token || !user) {
      router.replace("/");
    } else {
      setIsCheckingAuth(false);
    }
  }, [token, user, router]);

  return isCheckingAuth;
}
