import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type CustomSectionProps = {
  children: ReactNode;
  centered?: boolean;
};

export const CustomSection = ({ children, centered }: CustomSectionProps) => {
  return (
    <section
      className={cn(
        "container px-5 lg:px-20 xl:px-40",
        centered && "flex flex-col items-center",
      )}
    >
      {children}
    </section>
  );
};
