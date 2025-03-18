"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";

import Image from "next/image";

import VerifyEmail from "@/components/VerifyEmail";
import { Loading } from "@/components";

const Page = () => {
  return (
    <div className="container relative flex pt-20 flex-col items-center justify-center lg:px-0">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <Suspense fallback={<Loading />}>
          <Content />
        </Suspense>
      </div>
    </div>
  );
};

const Content = () => {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  return token && typeof token === "string" ? (
    <div className="grid gap-6">
      <VerifyEmail token={token} />
    </div>
  ) : (
    <div className="flex h-full flex-col items-center justify-center space-y-1">
      <div className="relative mb-4 h-60 w-60 text-muted-foreground">
        <Image src="/hippo-email-sent.png" fill alt="hippo email sent image" />
      </div>

      <h3 className="font-semibold text-2xl">Verifica tu correo electrónico</h3>

      <p className="text-muted-foreground text-center">
        Hemos enviado un enlace de verificación a tu correo electrónico.
      </p>
    </div>
  );
};

export default Page;
