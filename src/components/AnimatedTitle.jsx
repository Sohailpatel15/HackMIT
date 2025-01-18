"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export const AnimatedTitle = ({ title, containerClass }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(".animated-title", {
        transform: "translate3d(0, 50px, 0) rotateY(30deg) rotateX(10deg)",
      });

      gsap.to(".animated-title", {
        transform: "translate3d(0, 0, 0) rotateY(0deg) rotateX(0deg)",
        stagger: 0.02,
        ease: "power2.inOut",
        duration: 1.5,
      });
    }, containerRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <div ref={containerRef} className={`animated-title ${containerClass}`}>
      {title.split("<br />").map((line, index) => (
        <div key={index} className="flex-center max-w-full flex-wrap gap-2 md:gap-3">
          {line.split(" ").map((word, i) => (
            <span key={i} className="animated-word" dangerouslySetInnerHTML={{ __html: word }} />
          ))}
        </div>
      ))}
    </div>
  );
};