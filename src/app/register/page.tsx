"use client";

import { SubmitHandler, useForm } from "react-hook-form";

import Link from "next/link";

import { Button } from "@/components/ui/button";

import EmailInput from "@/components/EmailInputField";
import NameInput from "@/components/NameInput";
import PasswordInput from "@/components/PasswordInput";

import { useRegisterUser } from "@/hooks/auth/useRegisterUser";

import { Icons } from "@/icons";

interface RegisterFormInputs {
  name: string;
  email: string;
  password: string;
}

const Page = () => {
  const mutation = useRegisterUser();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormInputs>();

  const onSubmit: SubmitHandler<RegisterFormInputs> = async (data) => {
    await mutation.mutate(data);
  };

  return (
    <div className="container relative flex pt-20 flex-col items-center justify-center lg:px-0">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <div className="flex flex-col items-center space-y-2 text-center">
          <Icons.logo className="h-20 w-20" />
          <h1 className="text-2xl font-semibold tracking-tight">
            Crea una cuenta
          </h1>
        </div>

        <div className="grid gap-6">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid gap-2">
              <NameInput
                register={register}
                error={errors.name?.message}
                name="name"
              />
              <EmailInput
                register={register}
                error={errors.email?.message}
                name="email"
              />
              <PasswordInput
                name="password"
                register={register}
                error={errors.password?.message}
              />
              <Button
                type="submit"
                isLoading={mutation.isPending}
                className="w-full"
              >
                {mutation.isPending ? "Creando cuenta..." : "Crear cuenta"}
              </Button>
            </div>
          </form>

          <div className="flex justify-center mt-2">
            <Link
              href="/login"
              className="text-sm text-blue-500 hover:underline"
            >
              ¿Ya tienes una cuenta?
            </Link>
          </div>

          <div className="relative mb-36">
            <div
              aria-hidden="true"
              className="absolute inset-0 flex items-center "
            >
              <span className="w-full border-t" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
