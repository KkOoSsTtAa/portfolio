import React from "react";
import Card from "./Card";
import { fahkwang } from "@/fonts";

type CardListProps = {
  title: string;
  cards: string[];
};

const CardList = (props: CardListProps) => {
  return (
    <>
      <h4
        style={{ fontFamily: `${fahkwang.style.fontFamily}` }}
        className="mb-1 mt-4 text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl"
      >
        {props.title}
      </h4>
      <div className="flex flex-wrap gap-[2px] md:max-w-[60%]">
        {props.cards.map((card) => (
          <Card key={card}>{card}</Card>
        ))}
      </div>
    </>
  );
};

export default CardList;
