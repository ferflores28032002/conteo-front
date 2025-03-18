import { useMutation, UseMutationResult } from "@tanstack/react-query";

import {
  UserVerificationService,
  VerifyEmailPayload,
} from "@/services/auth/UserVerificationService";

interface VerifyEmailResponse {
  message: string;
}

type UseVerifyEmail = () => UseMutationResult<
  VerifyEmailResponse,
  Error,
  VerifyEmailPayload
>;

export const useVerifyEmail: UseVerifyEmail = () => {
  return useMutation<VerifyEmailResponse, Error, VerifyEmailPayload>({
    mutationFn: UserVerificationService,
  });
};
