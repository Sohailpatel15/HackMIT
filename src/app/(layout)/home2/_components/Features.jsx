"use client";

import { useRef, useState } from "react";
import { TiLocationArrow } from "react-icons/ti";

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

    const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(0.98, 0.98, 0.98)`;

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
      <div className="relative z-10 flex size-full flex-col justify-between p-5 text-blue-50">
        <div>
          <h1 className="bento-title special-font">{title}</h1>
          {description && (
            <p className=" mt-3 max-w-64 text-xs md:text-base">{description}</p>
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
            Dive into HACKMIT-WPU, where creativity meets technology. Build, innovate, and push the boundaries of problem-solving.
          </p>
        </div>
        <BentoTilt className="border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]">
          <BentoCard
            src="videos/hackVideo1.mp4"
            title={
              <>
                Inn<b>o</b>vate
              </>
            }
            description="Transform your ideas into reality at HACKMIT-WPU, where developers, designers, and visionaries collaborate to create groundbreaking projects."
          />
        </BentoTilt>
        <div className="grid h-[135vh] grid-cols-2 grid-rows-3 gap-7">
          <BentoTilt className="bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2">
            <BentoCard
              src="videos/hackVideo2.mp4"
              title={
                <>
                  Coll<b>a</b>borate
                </>
              }
              description="Team up with like-minded individuals, brainstorm solutions, and build something extraordinary in just 36 hours."
            />
          </BentoTilt>
          <BentoTilt className="bento-tilt_1 row-span-1 ms-32 md:col-span-1 md:ms-0">
            <BentoCard
              src="videos/hackVideo3.mov"
              title={
                <>
                  Cod<b>e</b>
                </>
              }
              description="Write, debug, and deploy your ideas with the latest tools and technologies, competing for the top spot at HACKMIT-WPU."
            />
          </BentoTilt>
          <BentoTilt className="bento-tilt_1 me-14 md:col-span-1 md:me-0">
            <BentoCard
              src="videos/hackVideo4.mp4"
              title={
                <>
                  S<b>h</b>owcase
                </>
              }
              description="Present your project to industry experts and gain recognition for your innovative solutions at the grand finale."
            />
          </BentoTilt>

          <div className="bento-tilt_2">
            <div className="flex size-full flex-col justify-between bg-hack-500 p-5">
              <h1 className="bento-title special-font max-w-64 text-black">
                M<b>o</b>re Surprises Await!
              </h1>

              <TiLocationArrow className="m-5 scale-[5] self-end" />
            </div>
          </div>

          <div className="bento-tilt_2">
            <video
              src="videos/hackVideo5.mp4"
              loop
              muted
              autoPlay
              className="size-full object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
