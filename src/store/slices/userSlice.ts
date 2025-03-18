import { StateCreator } from "zustand";
import { UserLoginModel, UserSlice } from "../interfaces/login-user.interface";

/**
 * A slice of the Redux store that manages user authentication state.
 * 
 * @param set - A function to update the state.
 * 
 * @returns An object containing the initial state and functions to update the state.
 * 
 * @property {string | null} token - The authentication token of the user.
 * @property {UserLoginModel | null} user - The user information.
 * @property {function} setUser - A function to set the user information and token.
 * @property {function} logout - A function to clear the user information and token.
 */
export const userSlice: StateCreator<UserSlice> = (set) => ({
  token: null,
  user: null,
  setUser: (token: string, user: UserLoginModel) => set({ token, user }),
  logout: () => set({ token: null, user: null }),
});
