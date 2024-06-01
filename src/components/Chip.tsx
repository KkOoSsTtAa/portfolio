import { ReactNode } from "react";

import { fahkwang } from "@/fonts";
import { cn } from "@/lib/utils";

type ChipProps = {
  children: ReactNode;
};

export const Chip = ({ children }: ChipProps) => {
  return (
    <span
      className={cn(
        "line-clamp-1 w-fit min-w-fit flex-1 rounded-[25px] bg-myBlack px-3 py-1 text-center text-xs tracking-wide text-white md:text-sm",
        fahkwang.className,
      )}
    >
      {children}
    </span>
  );
};
