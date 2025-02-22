"use client";
import CardTilt from "@/components/CardTilt";
import clsx from "clsx";
import gsap from "gsap";
import { ChevronUpIcon, ChevronDownIcon, LightbulbIcon } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";

const Card = ({ imgUri, title, subtitle, rotation, variant, index }) => {
  const [isOpen, setIsOpen] = useState(false);
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

  const variantClass = clsx(
    "flex flex-col p-6 rounded-b-3xl group-hover: absolute bottom-0 w-full",
    {
      "bg-hack-100 text-white": variant === "primary",
      "bg-accent-100 text-hack-100": variant === "secondary",
      "bg-hack-400 text-hack-100": variant === "soft",
      "bg-gray-200 text-hack-100": !variant,
    }
  );

  return (
    <CardTilt className="w-full max-w-sm transform transition-all duration-300 hover:scale-105 rounded-3xl cursor-pointer">
      <div
        ref={cardRef}
        className={`rounded-3xl relative h-fit aspect-[5/6] overflow-hidden rotate-${rotation} group border-2 border-x-hack-400 hover:border-yellow-400 transition-all duration-300`}
      >
        <img
          className="object-cover w-full"
          src={
            imgUri ||
            "https://images.pexels.com/photos/1051075/pexels-photo-1051075.jpeg"
          }
          alt=""
        />
        <div className={variantClass}>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="absolute top-2 right-2 md:opacity-50 md:group-hover:opacity-100 transition-opacity p-2 rounded-full bg-white/10 backdrop-blur-sm"
          >
            {isOpen ? (
              <ChevronDownIcon className="w-4 h-4 md:w-5 md:h-5 text-white" />
            ) : (
              <ChevronUpIcon className="w-4 h-4 md:w-5 md:h-5 text-white md:animate-bounce" />
            )}
          </button>
          
          <h3 className="font-semibold text-xl md:text-2xl mb-2 group-hover:text-[26px] group-hover:my-4 transition-all duration-500">
            {title || "Title goes here"}
          </h3>
          <p className="font-medium text-xs md:text-sm mb-4">
            {subtitle ||
              "Lorem ipsum, dolor sit amet consectetur adipisicing elit."}
          </p>
          <div 
            className={clsx(
              "flex space-x-2 md:space-x-4 transition-all duration-300",
              {
                "opacity-0 -translate-y-4": !isOpen,
                "opacity-100 translate-y-0": isOpen
              },
              "md:opacity-0 md:-translate-y-4 md:group-hover:opacity-100 md:group-hover:translate-y-0"
            )}
          >
            <button className="px-3 md:px-7 py-1.5 md:py-2.5 text-xs md:text-sm font-semibold text-accent-100 bg-white rounded-full border border-accent-100 hover:bg-accent-100 hover:text-white transition-colors duration-200">
              Register
            </button>
            <button className="px-3 md:px-6 py-1.5 md:py-2.5 text-xs md:text-sm font-semibold text-hack-300 bg-white rounded-full border border-hack-100 hover:bg-hack-300 hover:text-white transition-colors duration-200">
              Problem Statements
            </button>
          </div>
        </div>
      </div>
    </CardTilt>
  );
};

export const HorizontalCard = ({
  imgUri,
  title,
  subtitle,
  rotation,
  isGradient,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div
      className={`relative rounded-3xl aspect-[16/10] h-fit overflow-hidden bg-hack-100 rotate-${rotation} 
      ${isGradient ? "bg-gradient-to-r from-hack-100 to-hack-300 group" : ""}
      border-2 border-transparent hover:border-yellow-400 transition-all duration-300`}
    >
      <img
        className="rounded-full aspect-square object-cover w-28 h-28 absolute top-4 right-4 group-hover:w-28 group-hover:h-32 transition-all"
        src={
          imgUri ||
          "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }
        alt=""
      />

      <div className="flex flex-col p-4 absolute bottom-0 left-0">
        <div className="p-2 w-fit bg-accent-200/40 rounded-full aspect-square mb-2">
          <LightbulbIcon className="text-accent-100" />
        </div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="absolute top-2 right-2 md:opacity-50 md:group-hover:opacity-100 transition-opacity p-2 rounded-full bg-white/10 backdrop-blur-sm"
        >
          {isOpen ? (
            <ChevronDownIcon className="w-4 h-4 md:w-5 md:h-5 text-white" />
          ) : (
            <ChevronUpIcon className="w-4 h-4 md:w-5 md:h-5 text-white md:animate-bounce" />
          )}
        </button>
        <h3 className="font-bold text-xl md:text-2xl my-2 text-white">
          {title || "Title goes here"}
        </h3>
        <p className="font-medium text-xs md:text-sm text-white mb-4">
          {subtitle ||
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit."}
        </p>
        <div 
          className={clsx(
            "flex space-x-2 md:space-x-4 transition-all duration-300",
            {
              "opacity-0 -translate-y-4": !isOpen,
              "opacity-100 translate-y-0": isOpen
            },
            "md:opacity-0 md:-translate-y-4 md:group-hover:opacity-100 md:group-hover:translate-y-0"
          )}
        >
          <button className="px-3 md:px-6 py-1.5 md:py-2.5 text-xs md:text-sm font-semibold text-yellow-500 bg-white rounded-full border border-yellow-500 hover:bg-yellow-500 hover:text-white transition-colors duration-200">
            Register
          </button>
          <button className="px-3 md:px-6 py-1.5 md:py-2.5 text-xs md:text-sm font-semibold text-blue-600 bg-white rounded-full border border-blue-600 hover:bg-blue-600 hover:text-white transition-colors duration-200">
            Problem Statements
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;