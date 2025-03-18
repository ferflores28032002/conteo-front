import Swal from "sweetalert2";

import { useMutation, UseMutationResult } from "@tanstack/react-query";

import { useRouter } from "next/navigation";

import {
  ChangePasswordService,
  ChangePasswordPayload,
} from "@/services/auth/ChangePassworService";

type UseLogin = () => UseMutationResult<string, Error, ChangePasswordPayload>;

export const usePasswordChange: UseLogin = () => {
  const router = useRouter();

  return useMutation<string, Error, ChangePasswordPayload>({
    mutationFn: ChangePasswordService,
    onSuccess: (data: string) => {
      Swal.fire({
        icon: "success",
        title: "Contraseña cambiada",
        text: "Tu contraseña ha sido cambiada exitosamente",
        confirmButtonText: "Aceptar",
        confirmButtonColor: "#3085d6",
      });

      router.push("/login");
    },
    onError: (error: Error) => {
      Swal.fire({
        icon: "error",
        title: "Ups...",
        text: "Ha ocurrido un error al cambiar la contraseña",
        confirmButtonText: "Aceptar",
        confirmButtonColor: "#3085d6",
      });
    },
  });
};
