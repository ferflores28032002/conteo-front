import api from "../axiosInstance";

export interface LoginPayload {
  email:    string;
  password: string;
}

export interface LoginResponse {
  token: string;
  user:  User;
}

export interface ApiError {
  response: {
    data: { message: string };
  };
  message: string;
}

export interface User {
  id:         number;
  email:      string;
  password:   string;
  name:       string;
  status:     boolean;
  isVerified: boolean;
  roleId:     number;
  createdAt:  Date;
  updatedAt:  Date;
}

/**
 * Authenticates a user with the provided credentials.
 * 
 * This service sends a POST request to the "/users/login" endpoint with the given credentials.
 * It is typically used within a React Query hook to handle user login.
 * 
 * @param {LoginPayload} credentials - The user's login credentials.
 * @returns {Promise<LoginResponse>} The response data containing authentication details.
 */
export const LoginService = async (credentials: LoginPayload) => {
  const response = await api.post<LoginResponse>("/users/login", credentials);
  return response.data;
};
