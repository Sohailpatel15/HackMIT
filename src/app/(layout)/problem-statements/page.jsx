import React from "react";
import { Card } from "@/components/Card";
import { cardData } from "@/lib/data/cardData";
import { TextAnimate } from "@/components/ui/text-animate";

const Page = () => {
  return (
    <div className="bg-blue-700">
      <div className="w-full flex items-center justify-center p-20">
        <h1 className="text-balance text-5xl font-semibold leading-none tracking-tighter sm:text-2xl md:text-4xl lg:text-7xl capitalize text-white">
          <TextAnimate animation="blurInUp" by="character" className={"font-mono"}>
            Problem Statements
          </TextAnimate>
        </h1>
      </div>
      <div className="min-h-screen bg-indigo-800 p-10 rounded-t-3xl">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 mx-auto max-w-7xl">
          {cardData.map((card) => (
            <div key={card.id} className="flex justify-center">
              <Card
                title={card.title}
                description={card.description}
                src={card.src}
                index={card.id}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
