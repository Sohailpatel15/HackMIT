"use client"
import React, { useEffect, useRef } from 'react';

export const VantaBackground = ({ 
  color = 0xbecbff,
  color2 = 0xbecbff,
  backgroundColor = 0xffffff,
  size = 1.10,
  children 
}) => {
  const vantaRef = useRef(null);
  const vantaEffect = useRef(null);

  useEffect(() => {
    const loadScript = (src) => {
      return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = src;
        script.async = true;
        script.onload = resolve;
        script.onerror = reject;
        document.body.appendChild(script);
      });
    };

    const initVanta = async () => {
      try {
        await loadScript('https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js');
        await loadScript('https://cdnjs.cloudflare.com/ajax/libs/vanta/0.5.24/vanta.globe.min.js');

        if (window.VANTA) {
          vantaEffect.current = window.VANTA.GLOBE({
            el: vantaRef.current,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200,
            minWidth: 200,
            scale: 1.00,
            scaleMobile: 1.00,
            color,
            color2,
            size,
            backgroundColor
          });

          const handleResize = () => {
            vantaEffect.current.resize();
          };
          window.addEventListener('resize', handleResize);
          return () => window.removeEventListener('resize', handleResize);
        }
      } catch (error) {
        console.error('Failed to load Vanta.js:', error);
      }
    };

    initVanta();

    return () => {
      if (vantaEffect.current) {
        vantaEffect.current.destroy();
      }
    };
  }, [color, color2, backgroundColor, size]);

  return (
    <div className="relative min-h-screen w-full">
      <div 
        ref={vantaRef}
        className="fixed inset-0 w-full h-full -z-10"
        aria-hidden="true"
      />
      <div className="relative z-10 min-h-screen">
        {children}
      </div>
    </div>
  );
};