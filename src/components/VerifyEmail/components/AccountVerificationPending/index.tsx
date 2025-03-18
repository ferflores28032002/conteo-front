import React from "react";

import { Loader2 } from "lucide-react";

interface AccountVerificationPendingProps {
  pendingMessage?: string;
  pendingDescription?: string;
}

const AccountVerificationPending: React.FC<AccountVerificationPendingProps> = ({
  pendingMessage = "Verificando tu correo electrónico...",
  pendingDescription = "Por favor, espera un momento.",
}) => {
  return (
    <div className="flex flex-col items-center gap-2 mb-12">
      <Loader2 className="animate-spin h-8 w-8 text-zinc-300" />
      <h3 className="font-semibold text-xl text-center">{pendingMessage}</h3>
      <p className="text-muted-foreground text-sm">{pendingDescription}</p>
    </div>
  );
};

export default AccountVerificationPending;
