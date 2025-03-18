import api from "../axiosInstance";

export interface EmailPayload {
  email: string;
}

/**
 * Sends a forgot password request to the server.
 * 
 * This service function is used to send a POST request to the "/users/forgot-password" endpoint
 * with the provided email payload. It is typically called within a React Query hook.
 * 
 * @param {EmailPayload} email - The payload containing the user's email address.
 * @returns {Promise<string>} - A promise that resolves to the response data from the server.
 */
export const ForgotPasswordService = async (email: EmailPayload) => {
  const response = await api.post<string>("/users/forgot-password", email);
  return response.data;
};
