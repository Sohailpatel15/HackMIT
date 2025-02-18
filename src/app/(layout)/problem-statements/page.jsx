import React from "react";
import Card from "@/app/(layout)/home1/_components/Card";
import { cardData } from "@/lib/data/cardData";
import { TextAnimate } from "@/components/ui/text-animate";
import { GridPatternHero } from "../home/_components/GridPatternHero";
import { VantaBackground } from "../background/_components/VantaBackground";

const Page = () => {
  return (
    <VantaBackground
      color={0xbecbff}         
      color2={0xbecbff}      
      backgroundColor={0xffffff} 
      size={1.10}             
    >
      <div className="relative w-full min-h-screen">
        <section className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
          <div className="w-full flex items-center justify-center p-24">
            <h1 className="text-balance text-5xl font-semibold leading-none tracking-tighter sm:text-2xl md:text-4xl lg:text-7xl capitalize text-white">
              <TextAnimate
                animation="blurInUp"
                by="character"
                className="font-circular-web !text-7xl text-hack-100"
              >
                Problem Statements
              </TextAnimate>
            </h1>
          </div>
          <div className="p-10 rounded-t-3xl w-full">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 mx-auto max-w-7xl">
              {cardData.map((card, index) => (
                <div key={`${card.id}-${index}`} className="flex justify-center">
                  <Card
                    variant="primary"
                    title={card.title}
                    subtitle={""}
                    index={card.id}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </VantaBackground>
  );
};

export default Page;