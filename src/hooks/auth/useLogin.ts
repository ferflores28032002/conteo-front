import { useMutation, UseMutationResult } from "@tanstack/react-query";

import { useAuthStore } from "@/store";

import { useRouter } from "next/navigation";

import Swal from "sweetalert2";
import {
  ApiError,
  LoginPayload,
  LoginResponse,
  LoginService,
} from "../../services/auth/LoginService";

type UseLogin = () => UseMutationResult<LoginResponse, ApiError, LoginPayload>;

export const useLogin: UseLogin = () => {
  const router = useRouter();
  
  const { setUser } = useAuthStore((state) => ({
    setUser: state.setUser,
  }));

  return useMutation<LoginResponse, ApiError, LoginPayload>({
    mutationFn: LoginService,
    onSuccess: (data: LoginResponse) => {
      localStorage.setItem("authToken", data.token);
    
      setUser(data.token, {
        email: data.user.email,
        id: data.user.id,
        name: data.user.name,
      });
      router.push("/products");
    },
    onError: (error: ApiError) => {
      Swal.fire({
        icon: "error",
        title: "Ups...",
        text: error.response.data.message,
        confirmButtonText: "Aceptar",
        confirmButtonColor: "#3085d6",
      });
    },
  });
};
