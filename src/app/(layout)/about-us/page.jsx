"use client"
import React from 'react';
import { motion } from 'framer-motion';

import Hero from './_components/Hero';
import AnimatedCard from './_components/SeedThought';
import Sponsors from './_components/Sponsors';
import {GridPatternHero, GridPatternLinearGradient}  from './_components/GridPattern';
import { AboutUsCarouselDemo } from './_components/Carousel'
import { VantaBackground } from '../background/_components/VantaBackground';
import { TextAnimate } from "./_components/TextAnimate"
import { HorizontalCard } from "./_components/HorizontalCard"

const Page = () => {
  return (
    <VantaBackground
      color={0xbecbff}          
      color2={0xbecbff}          
      size={1.10}                
      backgroundColor={0xffffff} 
    >
      <div className="z-50 p-4 container mx-auto mt-32">
        {/* Founders & Presidents */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-48">
          <div className="w-full md:w-1/2">
            <HorizontalCard 
              imgUri="/img/vishwanath-karad.jpg" 
              title="Dr. Vishwanath karad" 
              subtitle="Founder" 
              textColor="text-hack-100"
              index={1} 
            />
          </div>
          <div className="w-full md:w-1/2">
            <AnimatedCard />
          </div>
          
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-16">
          <div className="w-full md:w-1/2">
            <HorizontalCard 
              imgUri="/img/rahul-karad.jpeg" 
              title="Dr. Rahul Karad"
              textColor="text-accent-100"
              subtitle="Founder" 
              index={1} 
            />
          </div>
          <div className="w-full md:w-1/2">
            <AnimatedCard />
          </div>
          
        </div>
      </div>
      <div className="relative"> 
        <div className="h-full relative">
          <div className="flex flex-col items-center z-20 relative">
            <AboutUsCarouselDemo />
            <div className="w-full flex flex-col items-center">
              <Sponsors />
            </div>
          </div>
        </div>
      </div>
    </VantaBackground>
  );
};

export default Page;