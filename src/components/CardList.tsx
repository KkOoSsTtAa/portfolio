import React from "react";

import { fahkwang } from "@/fonts";
import { Card } from "@/components";

type CardListProps = {
  title: string;
  cards: string[];
};

export const CardList = ({ cards, title }: CardListProps) => {
  return (
    <>
      <h4
        style={{ fontFamily: `${fahkwang.style.fontFamily}` }}
        className="mb-1 mt-4 text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl"
      >
        {title}
      </h4>
      <div className="flex flex-wrap gap-[2px] md:max-w-[60%]">
        {cards.map((card) => (
          <Card key={card}>{card}</Card>
        ))}
      </div>
    </>
  );
};
