import api from "../axiosInstance";

export interface ChangePasswordPayload {
  token: string;
  newPassword: string;
}

/**
 * Service to change the user's password.
 * 
 * This function sends a POST request to the "/users/update-password" endpoint
 * with the provided credentials to update the user's password.
 * 
 * @param credentials - The payload containing the necessary information to change the password.
 * @returns A promise that resolves to the response data, which is a string.
 * 
 * @example
 * ```typescript
 * const credentials = { oldPassword: 'oldPass123', newPassword: 'newPass456' };
 * const result = await ChangePasswordService(credentials);
 * console.log(result); // Output: Success message or other response data
 * ```
 */
export const ChangePasswordService = async (credentials: ChangePasswordPayload ) => {
  const response = await api.post<string>("/users/update-password", credentials);
  return response.data;
};
