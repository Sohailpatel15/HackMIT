"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import clsx from "clsx";

export const HorizontalCard = ({ imgUri, title, role, index, textColor, imageSpec }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      cardRef.current,
      { opacity: 0, y: 50, scale: 0.8 },
      { opacity: 1, y: 0, scale: 1, duration: 0.6, ease: "back.out(1.7)", delay: index * 0.1 }
    );
  }, [index]);

  useEffect(() => {
    const card = cardRef.current;
    const handleMouseEnter = () => {
      gsap.to(card, { scale: 1.05, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)", duration: 0.3 });
    };
    const handleMouseLeave = () => {
      gsap.to(card, { scale: 1, boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", duration: 0.3 });
    };

    card.addEventListener("mouseenter", handleMouseEnter);
    card.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      card.removeEventListener("mouseenter", handleMouseEnter);
      card.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className="w-full bg-white md:w-5/6 h-[32rem] rounded-3xl shadow-md overflow-hidden border transition-transform duration-200 cursor-pointer hover:border-yellow-400 relative group"
    >
      <img src={imgUri} alt={title} className={`w-full h-full object-${imageSpec}`} />
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-hack-400 to-transparent p-6 transform transition-all duration-300">
        <h3
          className={clsx(
            "font-bold md:text-3xl text-2xl md:group-hover:text-[26px] transition-all duration-500 mb-2",
            textColor
          )}
        >
          {title}
        </h3>
        <p className="font-medium text-sm text-white">
          {role}
        </p>
      </div>
    </div>
  );
};
