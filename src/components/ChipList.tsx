import { Chip } from "@/components";
import { fahkwang } from "@/fonts";
import { cn } from "@/lib/utils";

type CardListProps = {
  title: string;
  chips: string[];
};

export const ChipList = ({ chips, title }: CardListProps) => {
  return (
    <>
      <h4
        className={cn(
          "mb-1 mt-4 text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl",
          fahkwang.className,
        )}
      >
        {title}
      </h4>
      <div className="flex flex-wrap gap-[2px] md:max-w-[60%]">
        {chips.map((chip) => (
          <Chip key={chip}>{chip}</Chip>
        ))}
      </div>
    </>
  );
};
