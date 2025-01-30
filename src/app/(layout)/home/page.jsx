import Image from "next/image";
import React from "react";
import { GridPatternHero } from "./_components/GridPatternHero";
import Count from "./_components/Counter";

const Home = () => {
  return (
    <section className="relative items-center justify-center">
      <GridPatternHero />
      <div className="flex flex-col items-center justify-center h-screen">
        <div>
          <Image
            src={"/logo/HackMitLogo.svg"}
            height={500}
            width={500}
            alt="HackMIT Logo"
          />
        </div>
        <Count bumber={1000} duration={200} />
      </div>
    </section>
  );
};

export default Home;
