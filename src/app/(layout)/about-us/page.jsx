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
        <div className="z-50 p-4 container mx-auto mt-10">
              {/* Founders & Presidents */}
              <TextAnimate
                animation="blurInUp"
                by="character"
                className="text-center text-5xl font-semibold py-8"
                duration={5}
              >
                Founder & President
              </TextAnimate>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                <HorizontalCard 
                  imgUri="/img/vishwanath-karad.jpg" 
                  title="Dr Vishwanath karad" 
                  subtitle="Founder" 
                  index={1} 
                />
                <HorizontalCard 
                  imgUri="/img/rahul-karad.jpeg" 
                  title="Rahul Karad" 
                  subtitle="President" 
                  index={1} 
                />
          </div>
          </div>
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