import { ReactNode } from "react";

import { cn } from "@/lib/utils";

interface MaxWidthWrapperProps {
  className?: string;
  children: ReactNode;
}

const MaxWidthWrapper = (Props: MaxWidthWrapperProps) => {
  const { children, className } = Props;

  return (
    <div className={cn("mx-auto w-full max-w-screen-xl px-2.5 md:px-20", className)}>
      {children}
    </div>
  );
};

export default MaxWidthWrapper;
