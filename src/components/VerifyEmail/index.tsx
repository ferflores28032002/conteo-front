"use client";

import { useEffect } from "react";


import AccountVerificationError from "./components/AccountVerificationError";
import AccountVerificationPending from "./components/AccountVerificationPending";
import AccountVerificationSuccess from "./components/AccountVerificationSuccess";

import { useVerifyEmail } from "@/hooks/auth/useVerifyEmail";

interface VerifyEmailProps {
  token: string;
}

const VerifyEmail = ({ token }: VerifyEmailProps) => {
  const { mutate, isError, isPending, isSuccess } = useVerifyEmail();

  useEffect(() => {
    mutate({ token });
  }, [token]);

  if (isError) {
    return <AccountVerificationError />;
  }

  if (isSuccess) {
    return <AccountVerificationSuccess />;
  }

  if (isPending) {
    return <AccountVerificationPending />;
  }
};

export default VerifyEmail;
