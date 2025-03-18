"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button, buttonVariants } from "@/components/ui/button";
import { useLogin } from "@/hooks/auth/useLogin";
import { Icons } from "@/icons";

import EmailInput from "@/components/EmailInputField";
import PasswordInput from "@/components/PasswordInput";
import { requiredPasswordValidationRules } from "@/helpers/validators/passwordValidator";

interface LoginFormInputs {
  email: string;
  password: string;
}

const Page = () => {
  
  const mutation = useLogin();
  /**
   * Uses the `useLogin` custom hook to perform a login mutation.
   * 
   * The `useLogin` hook is likely a wrapper around a React Query mutation
   * that handles the login process. By calling `mutate`, you can trigger
   * the login mutation, which will send a request to the server to log in
   * the user with the provided credentials.
   * 
   * React Query's `mutate` function is used to perform side effects such as
   * making API calls. It provides features like automatic retries, caching,
   * and synchronization with the server state.
   * ```
   */
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>();

  const onSubmit: SubmitHandler<LoginFormInputs> = async (data) => {
    await mutation.mutate(data);
  };

  return (
    <div className="container relative flex pt-20 flex-col items-center justify-center lg:px-0">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <div className="flex flex-col items-center space-y-2 text-center">
          <Icons.logo className="h-20 w-20" />
          <h1 className="text-2xl font-semibold tracking-tight">
            Iniciar sesión en tu cuenta
          </h1>
          <Link
            className={buttonVariants({ variant: "link", className: "gap-1.5"})}
            href="/register"
          >
            Crear una cuenta
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid gap-6">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid gap-2">
              <EmailInput
                register={register}
                error={errors.email?.message}
                name="email"
              />
              <PasswordInput
                name="password"
                register={register}
                validationRules={requiredPasswordValidationRules}
                error={errors.password?.message}
              />
              <Button
                type="submit"
                isLoading={mutation.isPending}
                className="w-full"
              >
                {mutation.isPending ? "Iniciando sesión..." : "Iniciar sesión"}
              </Button>
            </div>
          </form>
          <div className="flex justify-center mt-2">
            <Link
              href="/password-recovery"
              className="text-sm text-blue-500 hover:underline"
            >
              ¿Olvidaste tu contraseña?
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
