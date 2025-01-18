import React from "react";
import { Card } from "@/components/Card";
import { cardData } from "@/lib/data/cardData";

const Page = () => {
  return (
    <div className="min-h-screen bg-indigo-800 p-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
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
