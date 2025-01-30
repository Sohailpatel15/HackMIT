"use client";
import { MagicCard } from "@/components/ui/magic-card";
import CardTilt from "./CardTilt";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export const Card = ({ title, src, index }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      cardRef.current,
      {
        opacity: 0,
        y: 50,
        scale: 0.8,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.6,
        ease: "back.out(1.7)",
        delay: index * 0.1,
      }
    );
  }, [index]);
  return (
    <div ref={cardRef}>
      <CardTilt className="w-full max-w-sm transform transition-all duration-300 hover:scale-105 rounded-lg shadow-2xl shadow-black">
        <MagicCard
          className="cursor-pointer flex-col items-center justify-center whitespace-nowrap shadow-2xl p-4"
          gradientColor="#D9D9D955"
        >
          <div className="aspect-square overflow-hidden rounded-2xl">
            <img src={src} alt={title} className="h-full w-full object-cover" />
          </div>
          <div className="pt-4 text-center">
            <h3 className="text-2xl font-bold text-indigo-800">{title}</h3>
          </div>
        </MagicCard>
      </CardTilt>
    </div>
  );
};
