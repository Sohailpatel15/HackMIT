"use client"
import React from 'react';
import { motion } from 'framer-motion';

import Hero from './_components/Hero';
import AnimatedCard from './_components/SeedThought';
import Sponsors from './_components/Sponsors';
import {GridPatternHero, GridPatternLinearGradient}  from './_components/GridPattern';
import { AboutUsCarouselDemo } from './_components/Carousel'
import { VantaBackground } from '../background/_components/VantaBackground';


const Page = () => {
  return (
    <VantaBackground
      color={0xbecbff}          
      color2={0xbecbff}          
      size={1.10}                
      backgroundColor={0xffffff} 
    >
  <div className="relative"> 
  <div className=" h-full relative">
    <div className="flex flex-col items-center z-20 relative">
      <AboutUsCarouselDemo />
      <div className="-mt-16 w-full flex flex-col items-center">
        <AnimatedCard />
        <Sponsors />
      </div>
    </div>
  </div>
</div>
</VantaBackground>

  
  );
};

export default Page;