"use client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

import { AnimatedTitle } from "./AnimatedTitle";
import { FontStyle, Title } from "./CustomText";
import { VantaBackground } from "../../background/_components/VantaBackground";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useGSAP(() => {
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip",
        start: "center center",
        end: "+=800 center",
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
      },
    });

    clipAnimation.to(".mask-clip-path", {
      width: "100vw",
      height: "100vh",
      borderRadius: 0,
    });
  });

  return (
    <VantaBackground
      color={0xbecbff}
      color2={0xbecbff}
      size={1.1}
      backgroundColor={0xffffff}
    >
      <div id="about" className="min-h-screen w-screen">
        <div className="relative mb-8 mt-36 flex flex-col items-center gap-5">
          <AnimatedTitle
            title="Discover the world's <br /> largest shared adventure"
            containerClass="mt-5 !text-black text-center text-hack-100"
            wordClass="text-hack-100"
          />

          <div className="about-subtext font-bold w-full max-w-[95%] sm:max-w-[85%] lg:max-w-[60%] mx-auto text-center">
            <p className="mt-8 sm:mt-12 lg:mt-16 text-base sm:text-lg lg:text-2xl">
              Welcome to HACKMIT-WPU - <b className="text-hack-100">Code</b>,{" "}
              <b className="text-yellow-500">Innovate</b>,{" "}
              <b className="text-hack-100">Dominate</b>!
            </p>
            <p className="text-gray-500 text-base md:text-lg lg:text-xl mt-4 md:mt-6">
              HACK MIT-WPU brings together the brightest minds to collaborate,
              solve real-world challenges, and redefine the future of technology
              through innovation and creativity.
            </p>
          </div>
        </div>

        <div className="h-dvh w-screen" id="clip">
          <div className="mask-clip-path about-image">
            <img
              src="img/hackImage-4.JPG"
              alt="Background"
              className="absolute left-0 top-0 size-full object-cover"
            />
          </div>
        </div>
      </div>
    </VantaBackground>
  );
};

export default About;
