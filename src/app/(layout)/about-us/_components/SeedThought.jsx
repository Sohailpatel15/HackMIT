import React, { useState } from 'react';

const AnimatedCard = ({ title, content }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="h-[32rem] w-full flex items-center justify-center">
      <div
        className={`w-full h-full rounded-xl md:rounded-2xl shadow-xl md:shadow-2xl transform transition-all duration-700 ease-out
          ${isHovered ? 'md:scale-105 md:shadow-3xl md:rotate-1' : 'rotate-0'} bg-white`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Floating Particles - Hidden on mobile */}
        <div className="absolute inset-0 overflow-hidden hidden md:block">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-2 md:w-4 h-2 md:h-4 rounded-full opacity-0 transition-all duration-1000
                ${isHovered ? 'opacity-30 animate-float' : ''}`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.2}s`,
                transform: isHovered ? `translate(${Math.random() * 50 - 25}px, ${Math.random() * 50 - 25}px)` : 'none'
              }}
            />
          ))}
        </div>

        {/* Card Header with Enhanced Animation */}
        <div className="relative overflow-hidden rounded-t-xl md:rounded-t-2xl">
          <div className={`bg-hack-100 p-4 transition-all duration-700
            ${isHovered ? 'bg-opacity-90' : 'bg-opacity-100'}`}>
            <h2 className={`text-2xl md:text-3xl font-bold text-hack-500 mb-2 transition-all duration-500
              ${isHovered ? 'md:translate-x-2' : 'translate-x-0'}`}>
              {title}
            </h2>
            <div 
              className={`h-1 bg-yellow-400 transition-all duration-700 ease-in-out
                ${isHovered ? 'w-32 md:w-40 md:translate-x-4' : 'w-16 md:w-20 translate-x-0'}`}
            />
          </div>
        </div>

        {/* Card Content with Staggered Animations */}
        <div className="p-4 space-y-3 relative max-h-[calc(32rem-8rem)] overflow-y-auto">
          {content.map((text, index) => (
            <p
              key={index}
              className={`text-xs md:text-base text-gray-700 leading-relaxed transition-all duration-700
                ${isHovered ? 'text-blue-800 md:translate-x-2' : 'translate-x-0'}`}
              style={{
                transitionDelay: `${index * 100}ms`,
                transform: isHovered ? `translateX(${index * 2}px)` : 'none'
              }}
            >
              {text}
            </p>
          ))}

          {/* Animated Footer */}
          <div className="relative h-1 mt-4">
            <div className={`absolute inset-0 bg-hack-400 transition-all duration-1000 ease-in-out
              ${isHovered ? 'w-full scale-x-100' : 'w-0 scale-x-0'}`} 
            />
            <div className={`absolute inset-0 bg-yellow-400 transition-all duration-1000 delay-500
              ${isHovered ? 'w-full scale-x-100 opacity-50' : 'w-0 scale-x-0 opacity-0'}`} 
            />
          </div>
        </div>

        {/* Hover Glow Effect - Reduced on mobile */}
        <div className={`absolute inset-0 bg-hack-300 mix-blend-multiply filter blur-md md:blur-xl transition-all duration-700
          ${isHovered ? 'opacity-5 md:opacity-10' : 'opacity-0'}`} 
        />
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) translateX(0); }
          25% { transform: translateY(-10px) translateX(5px); }
          50% { transform: translateY(-5px) translateX(-5px); }
          75% { transform: translateY(-8px) translateX(3px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default AnimatedCard;
