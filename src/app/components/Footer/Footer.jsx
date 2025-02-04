'use client'
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const Footer = ({pages}) => {
  const footerRef = useRef(null);
  const svgRef = useRef(null);
  const contentRef = useRef(null);
  const headingRef = useRef(null);
  const columnsRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    gsap.registerPlugin(ScrollTrigger);
    
    ScrollTrigger.getAll().forEach(t => t.kill());

    // Set initial state of SVG
    gsap.set(svgRef.current, {
      opacity: 0,
      y: 50 // Start slightly below final position
    });

    // Create animation for the SVG
    gsap.to(svgRef.current, {
      scrollTrigger: {
        trigger: footerRef.current,
        start: "top 80%",
        toggleActions: "play none none reverse"
      },
      opacity: 0.7,
      y: 0,
      duration: 1,
      ease: "power2.out"
    });

    // Subtle floating animation
    const floatingAnimation = gsap.to(svgRef.current, {
      y: "-=10",
      yoyo: true,
      repeat: -1,
      duration: 1.5,
      ease: "power1.inOut",
      delay: 1 // Start after initial animation
    });

    // Text animations
    // Animate main heading
    gsap.from(headingRef.current.children, {
      scrollTrigger: {
        trigger: headingRef.current,
        start: "top 80%",
        toggleActions: "play none none reverse"
      },
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: "power2.out"
    });

    // Animate columns
    const columns = columnsRef.current.children;
    Array.from(columns).forEach((column, index) => {
      // Animate column headers
      gsap.from(column.querySelector('h2'), {
        scrollTrigger: {
          trigger: column,
          start: "top 85%",
          toggleActions: "play none none reverse"
        },
        y: 30,
        opacity: 0,
        duration: 0.6,
        delay: index * 0.1,
        ease: "power2.out"
      });

      // Animate list items
      gsap.from(column.querySelectorAll('li'), {
        scrollTrigger: {
          trigger: column,
          start: "top 85%",
          toggleActions: "play none none reverse"
        },
        y: 20,
        opacity: 0,
        duration: 0.4,
        stagger: 0.1,
        delay: 0.2 + (index * 0.1),
        ease: "power2.out"
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      gsap.killTweensOf([svgRef.current, contentRef.current]);
      floatingAnimation.kill();
    };
  }, []);

  return (
    <footer 
      ref={footerRef} 
      className="relative bg-primary-900 text-hack-400 overflow-hidden"
    >
      {/* Content Container */}
      <div 
        ref={contentRef}
        className="relative z-10 p-8"
      >
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between py-8 gap-8">
          <div className="w-fit space-y-8">
            <h1 
              ref={headingRef}
              className="text-4xl font-semibold"
            >
              <span className="block">Hack MIT-WPU</span>
              {/* <span className="block">newsletter to stay up-to-date with</span>
              <span className="block">the latest releases</span> */}
            </h1>
          </div>

          <div 
            ref={columnsRef}
            className="grid grid-cols-1 md:grid-cols-2` gap-8"
          >
            <div className="space-y-8">
              {/* <h2 className="font-semibold text-lg">Company</h2> */}
              <ul className="space-y-2">
                <li className="font-semibold text-xl">Text</li>
                <li className="font-semibold text-xl">Text</li>
                <li className="font-semibold text-xl">Text</li>
              </ul>
            </div>
            <div className="space-y-8">
              {/* <h2 className="font-semibold text-lg">Connect</h2> */}
              <ul className="space-y-2">
                <li className="font-semibold text-xl">Text</li>
                <li className="font-semibold text-xl">Text</li>
                <li className="font-semibold text-xl">Text</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* SVG Container */}
      <div 
        ref={svgRef}
        className="absolute -bottom-16 left-0 w-full"
      >
        <Image
          src="/footer.svg"
          width={1920}
          height={200}
          alt="Footer"
          className="w-full h-auto"
          priority
        />
      </div>
    </footer>
  );
};

export default Footer;