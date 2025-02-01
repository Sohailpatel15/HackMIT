"use client";
import { cn } from "@/lib/utils";
import gsap from "gsap";
import { useEffect, useRef } from "react";

export const BentoGrid = ({ className, children }) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  index,
}) => {
  const cardRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;

    // Set initial states
    gsap.set(card, {
      opacity: 0,
      scale: 0.8,
      rotation: index % 2 === 0 ? -10 : 10,
      y: 50,
    });

    // Create animation
    gsap.to(card, {
      opacity: 1,
      scale: 1,
      rotation: 0,
      y: 0,
      duration: 0.5,
      delay:  0.3, // Stagger the animations
      ease: "elastic.out(1, 0.7)",
      onComplete: () => {
        // Add a subtle hover animation
        gsap.to(card, {
          y: -5,
          rotation: index % 2 === 0 ? -2 : 2,
          duration: 1,
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut",
        });
      },
    });

    // Cleanup function
    return () => {
      gsap.killTweensOf(card);
    };
  }, [index]);

  return (
    <div
      ref={cardRef}
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-hack-100 border border-transparent justify-between flex flex-col space-y-4",
        className
      )}
    >
      {header}
      <div className="group-hover/bento:translate-x-2 transition duration-200">
        {icon}
        <div className="font-sans font-bold text-hack-500 dark:text-neutral-200 mb-2 mt-2">
          {title}
        </div>
        <div className="font-sans font-normal text-hack-400 text-xs dark:text-neutral-300">
          {description}
        </div>
      </div>
    </div>
  );
};
