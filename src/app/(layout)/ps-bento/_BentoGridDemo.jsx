import React from "react";
import { BentoGrid, BentoGridItem } from "../../../components/ui/bento-grid";
import { cardData } from "@/lib/data/cardData";
import Image from "next/image";

export function BentoGridDemo() {
  return (
    <BentoGrid className="mx-auto">
      {cardData.map((item, i) => (
        <BentoGridItem
          key={i}
          index={i}
          title={item.title}
          description={item.description}
          header={item.header}
          icon={item.icon}
          className={i === 3 || i === 6 ? "md:col-span-2" : ""}
        />
      ))}
    </BentoGrid>
  );
}
export const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100">
    <Image src={"img/hackPS-1.jpg"}/>
    
  </div>
);
