"use client";

import { useRef, useState } from "react";
import { TiLocationArrow } from "react-icons/ti";
import { BackgroundBeams } from "@/components/ui/background-beams";

const BentoTilt = ({ children, className = "" }) => {
  const [transformStyle, settransformStyle] = useState("");
  const itemRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!itemRef.current) return;

    const { left, top, width, height } =
      itemRef.current.getBoundingClientRect();

    const relativeX = (e.clientX - left) / width;
    const relativeY = (e.clientY - top) / height;

    const tiltX = (relativeY - 0.5) * 10;
    const tiltY = (relativeX - 0.5) * -10;

    const newTransform = ``;

    settransformStyle(newTransform);
  };

  const handleMouseLeave = () => {
    settransformStyle("");
  };
  return (
    <div
      className={className}
      ref={itemRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform: transformStyle }}
    >
      {children}
    </div>
  );
};

const BentoCard = ({ src, title, description }) => {
  return (
    <div className="relative size-full">
      <video
        src={src}
        loop
        muted
        autoPlay
        className="absolute left-0 top-0 size-full object-cover object-center"
      />
      <div className="relative z-10 flex size-full flex-col justify-between p-5">
        <div>
          <h1 className="bento-title text-yellow-400 drop-shadow-[0_0_10px_rgba(255,223,0,0.8)]">
            {title}
          </h1>
          {description && (
            <p className="mt-3 max-w-64 text-xs md:text-base text-yellow-300 drop-shadow-[0_0_5px_rgba(255,223,0,0.6)]">
              {description}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

const Features = () => {
  return (
    <section className="bg-hack-400 pb-52">
      <div className="container mx-auto px-3 md:px-10">
        <div className="px-5 py-32">
          <p className="font-circular-web text-lg text-hack-50 text-hack-100">
            The Ultimate Hackathon Experience
          </p>
          <p className="max-w-md font-circular-web text-lg text-hack-50 opacity-50 text-black">
            Dive into HACKMIT-WPU, where creativity meets technology. Build,
            innovate, and push the boundaries of problem-solving.
          </p>
        </div>
        
        <BentoTilt className="border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]">
          <BentoCard
            src="https://res.cloudinary.com/dapkhqyog/video/upload/v1740469742/x0xv5tqygfbkkvd49uwj.mov"
            title={
              <>
                Inn<b>o</b>vate
              </>
            }
            description="Transform your ideas into reality at HACKMIT-WPU."
          />
        </BentoTilt>
        

        <div className="flex flex-col gap-7 md:grid md:h-[135vh] md:grid-cols-2 md:grid-rows-3">
          <BentoTilt className="h-80 w-full overflow-hidden rounded-md md:h-full md:row-span-1 md:col-span-1">
            <BentoCard
              src="https://res.cloudinary.com/dapkhqyog/video/upload/v1740469742/qd6htwdblskggadb1iip.mov"
              title={
                <>
                  Coll<b>a</b>borate
                </>
              }
              description=""
            />
          </BentoTilt>
          
          <BentoTilt className="h-80 w-full overflow-hidden rounded-md md:h-full md:row-span-1 md:col-span-1">
            <BentoCard
              src="https://res.cloudinary.com/dapkhqyog/video/upload/v1740469742/ckocmtlsvohcsaqjui7n.mov"
              title={
                <>
                  Cod<b>e</b>
                </>
              }
              description=""
            />
          </BentoTilt>
          
          <BentoTilt className="h-80 w-full overflow-hidden rounded-md md:h-full md:col-span-1">
            <BentoCard
              src="https://res.cloudinary.com/dapkhqyog/video/upload/v1740469742/vboscmfswxafxbcg5v4v.mov"
              title={
                <>
                  S<b>h</b>owcase
                </>
              }
              description=""
            />
          </BentoTilt>

          <div className="h-80 w-full overflow-hidden rounded-md md:h-full md:col-span-1 bg-hack-500">
            <div className="flex size-full flex-col justify-between p-5">
              <h1 className="bento-title max-w-64 text-hack-100">
                M<b>o</b>re Surprises Await!
              </h1>
              <TiLocationArrow className="m-5 scale-[5] self-end" />
            </div>
          </div>

          <div className="h-80 w-full overflow-hidden rounded-md md:h-full md:col-span-1">
            <video
              src="https://res.cloudinary.com/dapkhqyog/video/upload/v1740470194/yagb2sznzqwsya66nqcj.mp4"
              loop
              muted
              autoPlay
              className="size-full object-cover object-center"
            />
          </div>
        </div>
      </div>
      <div className="absolute inset-0 z-0">
        <BackgroundBeams />
      </div>
    </section>
  );
};

export default Features;