"use client";
import { useRef, useState } from "react";

export const CardTilt = ({ children, className = "" }) => {
  const [transformStyle, setTransformStyle] = useState("");
  const itemRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!itemRef.current) return;

    const { left, top, width, height } = itemRef.current.getBoundingClientRect();

    const relativeX = (e.clientX - left) / width;
    const relativeY = (e.clientY - top) / height;

    // Reduced tilt angle for subtler effect
    const tiltX = (relativeY - 0.5) * 7; 
    const tiltY = (relativeX - 0.5) * -7; 

    // Added ease-out timing function and increased perspective
    const newTransform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(1.02, 1.02, 1.02)`;

    setTransformStyle(newTransform);
  };

  const handleMouseLeave = () => {
    setTransformStyle("");
  };

  return (
    <div
      className={`transition-transform duration-300 ease-out ${className}`}
      ref={itemRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ 
        transform: transformStyle,
        transformStyle: "preserve-3d"
      }}
    >
      {children}
    </div>
  );
};

export default CardTilt;