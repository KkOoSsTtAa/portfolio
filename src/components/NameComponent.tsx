import { NAME } from "@/data";
import { robotoMono500 } from "@/fonts";
import { cn } from "@/lib/utils";

type Props = {
  fullyVisible: boolean;
};

export const NameComponent = ({ fullyVisible }: Props) => {
  return (
    <div
      className={cn(
        "overflow-x-hidden transition-all duration-300 md:text-lg lg:text-xl xl:text-2xl",
        fullyVisible && "w-0",
        robotoMono500.className,
      )}
    >
      {NAME.toUpperCase()}
    </div>
  );
};
