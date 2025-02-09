import React, { useState } from 'react';

const AnimatedCard = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="min-h-screen w-full flex items-center justify-center p-4">
      <div
        className={`w-full md:w-[700px] max-w-3xl rounded-xl md:rounded-2xl shadow-xl md:shadow-2xl transform transition-all duration-700 ease-out
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
          <div className={`bg-hack-100 p-4 md:p-8 transition-all duration-700
            ${isHovered ? 'bg-opacity-90' : 'bg-opacity-100'}`}>
            <h2 className={`text-2xl md:text-4xl font-bold text-hack-500 mb-2 md:mb-3 transition-all duration-500
              ${isHovered ? 'md:translate-x-2' : 'translate-x-0'}`}>
              Seed Thought
            </h2>
            <div 
              className={`h-1 bg-yellow-400 transition-all duration-700 ease-in-out
                ${isHovered ? 'w-40 md:w-60 md:translate-x-4' : 'w-16 md:w-20 translate-x-0'}`}
            />
          </div>
          
          {/* Corner Decorations - Hidden on mobile */}
          <div className={`absolute top-0 right-0 w-16 md:w-28 h-16 md:h-28 transition-all duration-700 hidden md:block
            ${isHovered ? 'translate-x-0 translate-y-0 rotate-0' : 'translate-x-full -translate-y-full rotate-45'}`}>
            <div className="w-full h-full border-r-4 border-t-4 border-yellow-400 rounded-tr-2xl" />
          </div>
          <div className={`absolute bottom-0 left-0 w-16 md:w-28 h-16 md:h-28 transition-all duration-700 hidden md:block
            ${isHovered ? 'translate-x-0 translate-y-0 rotate-0' : '-translate-x-full translate-y-full -rotate-45'}`}>
            <div className="w-full h-full border-l-4 border-b-4 border-yellow-400 rounded-bl-2xl" />
          </div>
        </div>

        {/* Card Content with Staggered Animations */}
        <div className="p-4 md:p-8 space-y-4 md:space-y-5 relative">
          {[
            "In the realm of innovation and progress, seed thoughts serve as the foundation of great achievements. These initial sparks of inspiration, no matter how small they may seem at first, have the potential to grow into transformative ideas that can reshape our understanding and approach to challenges.",
            "Like seeds scattered in fertile soil, these thoughts need nurturing, patience, and dedication to flourish. They require the right environment, careful attention, and sometimes, the collaborative effort of many minds working together towards a common goal. Through this process, what begins as a simple concept can evolve into groundbreaking solutions.",
            "As we cultivate these seed thoughts, we must remain open to new perspectives and possibilities. The journey from concept to reality is often unpredictable, but it is precisely this uncertainty that makes the process so exciting and rewarding. Each seed thought represents not just an idea, but a potential future waiting to be discovered and shaped by those brave enough to nurture it."
          ].map((text, index) => (
            <p
              key={index}
              className={`text-base md:text-lg text-gray-700 leading-relaxed transition-all duration-700
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
          <div className="relative h-1 mt-6 md:mt-8">
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