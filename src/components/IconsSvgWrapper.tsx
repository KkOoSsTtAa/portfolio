import { ComponentProps } from "react";

import { cn } from "@/lib/utils";

type Props = ComponentProps<"svg"> & {
  href: string;
};

export const IconsSvgWrapper = ({ className, href, ...props }: Props) => {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <svg
        className={cn(
          "h-[60px] w-[60px] fill-myBlack transition-all duration-300 ease-in-out hover:scale-105 hover:fill-black",
          className,
        )}
        {...props}
      />
    </a>
  );
};
