import api from "../axiosInstance";

interface VerifyEmailResponse {
  message: string;
}
export interface VerifyEmailPayload {
  token: string;
}
/**
 * Service to verify user email.
 * 
 * This function sends a POST request to the API to verify the user's email using the provided token.
 * It is typically used within a React Query hook.
 * 
 * @param payload - The payload containing the verification token.
 * @returns A promise that resolves to the verification response.
 */
export const UserVerificationService = async (payload: VerifyEmailPayload): Promise<VerifyEmailResponse> => {
  const response = await api.post<VerifyEmailResponse>(`/users/verify/${payload.token}`
  );
  return response.data;
};
