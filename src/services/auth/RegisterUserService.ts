import api from "../axiosInstance";
import { User } from "./LoginService";

export interface RegisterPayload {
  name:     string;
  email:    string;
  password: string;
}

export interface RegisterResponse {
  token: string;
  user:  User;
}


/**
 * Registers a new user by sending a POST request to the "/users" endpoint.
 * This service is intended to be used with React Query for data fetching and state management.
 *
 * @param payload - The registration payload containing user details.
 * @returns The response data from the registration request.
 */
export const RegisterUserService = async (payload: RegisterPayload) => {
  const response = await api.post<RegisterResponse>("/users", payload);
  return response.data;
};