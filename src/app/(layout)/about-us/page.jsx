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
        <div className="flex flex-col md:flex-row justify-center items-center mb-48">
        <div className="w-full md:w-1/2 mb-10 md:mb-0">
            <HorizontalCard 
              imgUri="/img/vishwanath-karad.jpg" 
              title="Dr. Vishwanath karad" 
              subtitle="Founder" 
              textColor="text-hack-100"
              imageSpec="contain"
              index={1}
            />
          </div>
          <div className="w-full md:w-1/2">
          <AnimatedCard 
            title="Founder's Thought" 
            content={[
              "As we unite for HACK MIT-WPU 2025, we embrace the spirit of innovation, collaboration, and purpose. This event is more than a competition; it is a testament to our shared vision of progress—where technology meets wisdom, and knowledge is guided by values.",
              "Rooted in the principles of ‘tyaag’ and ‘samparpan,’ our journey reflects the ideals of discipline, dedication, and devotion.",
              "Inspired by Swami Vivekananda’s vision and the teachings of Revered Prof. Dr. Vishwanath Karad, we recognize that true innovation flourishes when science and spirituality converge.",
              "In shaping an Aatmanirbhar Bharat and striving for Bharat’s role as a Vishwaguru, we carry forward the responsibility of creating meaningful change, driven by intellect and guided by higher ideals."
            ]}
          />
          </div>
          
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center mb-16">
          <div className="w-full md:w-1/2 mb-10 md:mb-0">
            <HorizontalCard 
              imgUri="/img/rahul-karad.jpeg" 
              title="Dr. Rahul Karad"
              textColor="text-accent-100"
              subtitle="Founder" 
              imageSpec="cover"
              index={1} 
            />
          </div>
          <div className="w-full md:w-1/2">
          <AnimatedCard 
          title="Seed Thought" 
          content= {[
            "At MIT World Peace University, we are committed to fostering the holistic development of our students through innovative education. Beyond academics, we nurture adaptability, problem-solving, and leadership skills, preparing students to excel in an ever-evolving professional landscape.",
            "HACKMITWPU 2025 is a transformative three-day event designed to spark innovation, creativity, and entrepreneurship. This Executive President’s Challenge encourages students to explore cutting-edge solutions in technology, management, science, social sciences, fine arts, sustainable studies, and public health.",
            "More than just a competition, HACKMITWPU 2025 is a dynamic platform for collaboration and critical thinking. It empowers students to push boundaries, challenge conventions, and develop impactful solutions that drive real-world change.",
          ]}
          
        />
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