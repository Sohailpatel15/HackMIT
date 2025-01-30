import Image from "next/image";
import React from "react";
import { GridPatternHero } from "./_components/GridPatternHero";
import Count from "./_components/Counter";
import Squares from "./_components/Squares";
import AnimatedContent from "./_components/AnimatedContent";
import AnimatedCard from "./_components/AnimatedCard";
import { ButtonWtIcon } from "../home1/_components/Buttons";
import { ArrowRight } from "lucide-react";
import { Title } from "../home1/_components/CustomText";

const Home = () => {
  return (
    <section className="relative flex items-center justify-center px-4">
      <Squares
        speed={0.5}
        squareSize={32} /* Smaller for mobile */
        direction="diagonal"
        borderColor="#ffffff"
        hoverFillColor="#FFD335"
      />
      <div className="flex flex-col items-center justify-center min-h-screen w-full">
        <AnimatedContent
          distance={150} /* Slightly reduced for better mobile effect */
          direction="vertical"
          reverse={true}
          config={{ tension: 80, friction: 20 }}
          initialOpacity={0.1}
          animateOpacity
          scale={1.1}
          threshold={0.2}
        >
          <div className="z-10 flex justify-center items-center flex-col space-y-4 font-bold">
            <div className="w-full flex justify-center items-center">
              <Image
                src={"/logo/HackLogo.svg"}
                height={500}
                width={500}
                alt="HackMIT Logo"
                className="max-w-[80%] md:max-w-[90%] h-auto"
              />
            </div>
            <ButtonWtIcon icon={<ArrowRight />} iconPosition="right">
              Register Now
            </ButtonWtIcon>
          </div>
        </AnimatedContent>
        <AnimatedCard height={200}>
          <div className="z-10 text-center">
            <Count number={1000} duration={200} />
          </div>
        </AnimatedCard>
      </div>
    </section>
  );
};

export default Home;
