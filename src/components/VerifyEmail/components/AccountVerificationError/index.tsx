import React from "react";

import { XCircle } from "lucide-react";

interface AccountVerificationErrorProps {
  errorMessage?: string;
  errorDescription?: string;
}

const AccountVerificationError: React.FC<AccountVerificationErrorProps> = ({
  errorMessage = "Hubo un problema",
  errorDescription = "Este token no es válido o podría estar vencido. Inténtalo de nuevo.",
}) => {
  return (
    <div className="flex flex-col items-center gap-2 mb-12 justify-center">
      <XCircle className="h-8 w-8 text-red-600" />
      <h3 className="font-semibold text-xl tex-center">{errorMessage}</h3>
      <p className="text-muted-foreground text-sm text-center">
        {errorDescription}
      </p>
    </div>
  );
};

export default AccountVerificationError;
