import React from "react";

import Image from "next/image";

import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";

interface AccountVerificationSuccessProps {
  successMessage?: string;
  successDescription?: string;
  loginRedirect?: string;
}

const AccountVerificationSuccess: React.FC<AccountVerificationSuccessProps> = ({
  successMessage = "Correo electrónico verificado",
  successDescription = "Gracias por verificar su correo electrónico.",
  loginRedirect = "/login",
}) => {
  return (
    <div className="flex flex-col items-center justify-center mb-12">
      <div className="relative mb-4 h-60 w-60 text-muted-foreground">
        <Image src="/hippo-email-sent.png" fill alt="the email was sent" />
      </div>

      <h3 className="font-semibold text-2xl text-center">{successMessage}</h3>
      <p className="text-muted-foreground text-center mt-1">
        {successDescription}
      </p>
      <Link
        className={buttonVariants({ className: "mt-4" })}
        href={loginRedirect}
      >
        Iniciar sesión
      </Link>
    </div>
  );
};

export default AccountVerificationSuccess;
