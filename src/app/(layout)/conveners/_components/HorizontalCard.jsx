"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export const HorizontalCard = ({ imgUri, title, subtitle, index }) => {
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
    card.addEventListener("mouseenter", () => {
      gsap.to(card, { scale: 1.05, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)", duration: 0.3 });
    });
    card.addEventListener("mouseleave", () => {
      gsap.to(card, { scale: 1, boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", duration: 0.3 });
    });

    return () => {
      card.removeEventListener("mouseenter", () => {});
      card.removeEventListener("mouseleave", () => {});
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className="flex-1 flex flex-row items-center bg-gray-200 rounded-3xl shadow-md overflow-hidden border h-96 transition-transform duration-200 cursor-pointer  hover:border-yellow-400"
    >
      <div className="w-1/2 h-full">
        <img src={imgUri} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="w-1/2 p-6">
        <h3 className="text-2xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{subtitle}</p>
      </div>
    </div>
  );
};
