import Swal from "sweetalert2";

import { useMutation } from "@tanstack/react-query";

import { useRouter } from "next/navigation";

import {
  EmailPayload,
  ForgotPasswordService,
} from "@/services/auth/ForgotPasswordService";
import { ApiError } from "@/services/auth/LoginService";

export const useForgotPassword = () => {
  const router = useRouter();

  return useMutation<string, ApiError, EmailPayload>({
    mutationFn: ForgotPasswordService,
    onSuccess: () => {
      Swal.fire({
        icon: "success",
        title: "Correo enviado",
        text: "El correo se ha enviado exitosamente. Puede tardar unos minutos en llegar.",
        confirmButtonText: "Aceptar",
        confirmButtonColor: "#3085d6",
      }).then(() => {
        router.push("/login");
      });
    },
    onError: (error:ApiError) => {
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
