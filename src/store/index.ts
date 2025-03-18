import { create } from "zustand";

import { devtools, persist } from "zustand/middleware";

import { UserSlice } from "./interfaces/login-user.interface";
import { userSlice } from "./slices/userSlice";

type ShareState = UserSlice;

/**
 * Creates a Zustand store for authentication state management.
 * 
 * This store uses the `zustand` library along with `devtools` and `persist` middlewares.
 * 
 * - `zustand`: A small, fast, and scalable bearbones state-management solution.
 * - `devtools`: Middleware that enables Redux DevTools integration for easier state debugging.
 * - `persist`: Middleware that allows the state to be persisted in storage (e.g., localStorage).
 * 
 * The store is configured with:
 * - `ShareState`: The type of the state managed by the store.
 * - `userSlice`: A function that defines the initial state and actions for the user slice of the store.
 * - `auth-storage`: The key used to store the state in localStorage.
 * - `localStorage`: The storage mechanism used to persist the state.
 * 
 * @returns The Zustand store for authentication state.
 */
export const useAuthStore = create<ShareState>()(
  devtools(
    persist(
      (...a) => ({
        ...userSlice(...a),
      }),
      {
        name: "auth-storage",
        getStorage: () => localStorage,
      }
    )
  )
);
