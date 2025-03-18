import { ApiError } from "@/services/auth/LoginService";
import {
  RegisterPayload,
  RegisterResponse,
  RegisterUserService,
} from "@/services/auth/RegisterUserService";
import { useMutation, UseMutationResult } from "@tanstack/react-query";

import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

type UseRegister = () => UseMutationResult<
  RegisterResponse,
  ApiError,
  RegisterPayload
>;

export const useRegisterUser: UseRegister = () => {
  const router = useRouter();

  return useMutation<RegisterResponse, ApiError, RegisterPayload>({
    mutationFn: RegisterUserService,
    onSuccess: (data: RegisterResponse) => {
      router.push("/user-verification");
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
