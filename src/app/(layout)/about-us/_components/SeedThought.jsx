// import React from "react";
// import { motion } from "framer-motion";

// const SeedThought = () => {
//   const textBlocks = [
//     "At MIT World Peace University (MIT WPU), we are dedicated to fostering the holistic development of our students through innovative education. Our aim goes beyond traditional subjects, focusing on cultivating versatile skills and values that transcend career boundaries.",
//     "In this era of rapid information, we understand that future careers may be unpredictable. To prepare our students for these challenges, we provide essential skills and adaptability. Our history is a testament to our commitment to evolving education to meet changing needs. We remain steadfast in our mission to prepare students for an ever-evolving professional world.",
//     "A distinctive conclave, called RIDE (Research, Innovation, Design, and Entrepreneurship), was conceptualized in 2022. The conclave gives an exceptional doorway to students to understand and explore new approaches to research, innovation, design, and entrepreneurship, as was made evident by the huge success of RIDE22, the inaugural edition. We have always believed in the importance of practical application of knowledge beyond textbooks.",
//     "As a secondary aim of RIDE 24, we aspire to promote the spirit of nationalism, foster a strong national identity, and instill pride in our rich culture. Central to this goal is our advocacy for the traditional name of our beloved nation, 'Bharat,' which aligns harmoniously with our heritage and values.",
//   ];

//   return (
//     <motion.section
//       initial={{ opacity: 0, y: 20 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.8 }}
//       className="relative max-w-5xl mx-auto bg-white p-10 rounded-xl border border-hack-200 text-center text-black"
//     >
//       <h2 className="text-4xl font-bold text-hack-100 mb-6">Seed Thought</h2>
//       {textBlocks.map((text, index) => (
//         <p key={index} className="text-lg leading-relaxed mt-4">{text}</p>
//       ))}
//     </motion.section>
//   );
// };

// export default SeedThought;


import React, { useState } from 'react';

const AnimatedCard = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div
        className={`w-[700px] max-w-3xl  rounded-2xl shadow-2xl transform transition-all duration-700 ease-out
          ${isHovered ? 'scale-110 shadow-3xl rotate-1' : 'rotate-0'}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-4 h-4  rounded-full opacity-0 transition-all duration-1000
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
        <div className="relative overflow-hidden rounded-t-2xl">
          <div className={`bg-hack-100 p-8 transition-all duration-700
            ${isHovered ? 'bg-opacity-90' : 'bg-opacity-100'}`}>
            <h2 className={`text-4xl font-bold text-hack-500 mb-3 transition-all duration-500
              ${isHovered ? 'translate-x-2' : 'translate-x-0'}`}>
              Seed Thought
            </h2>
            <div 
              className={`h-1 bg-yellow-400 transition-all duration-700 ease-in-out
                ${isHovered ? 'w-60 translate-x-4' : 'w-20 translate-x-0'}`}
            />
          </div>
          
          {/* Enhanced Corner Decorations */}
          <div className={`absolute top-0 right-0 w-28 h-28 transition-all duration-700
            ${isHovered ? 'translate-x-0 translate-y-0 rotate-0' : 'translate-x-full -translate-y-full rotate-45'}`}>
            <div className="w-full h-full border-r-4 border-t-4 border-yellow-400 rounded-tr-2xl" />
          </div>
          <div className={`absolute bottom-0 left-0 w-28 h-28 transition-all duration-700
            ${isHovered ? 'translate-x-0 translate-y-0 rotate-0' : '-translate-x-full translate-y-full -rotate-45'}`}>
            <div className="w-full h-full border-l-4 border-b-4 border-yellow-400 rounded-bl-2xl" />
          </div>
        </div>

        {/* Card Content with Staggered Animations */}
        <div className="p-8 space-y-5 relative">
          {[
            "In the realm of innovation and progress, seed thoughts serve as the foundation of great achievements. These initial sparks of inspiration, no matter how small they may seem at first, have the potential to grow into transformative ideas that can reshape our understanding and approach to challenges.",
            "Like seeds scattered in fertile soil, these thoughts need nurturing, patience, and dedication to flourish. They require the right environment, careful attention, and sometimes, the collaborative effort of many minds working together towards a common goal. Through this process, what begins as a simple concept can evolve into groundbreaking solutions.",
            "As we cultivate these seed thoughts, we must remain open to new perspectives and possibilities. The journey from concept to reality is often unpredictable, but it is precisely this uncertainty that makes the process so exciting and rewarding. Each seed thought represents not just an idea, but a potential future waiting to be discovered and shaped by those brave enough to nurture it."
          ].map((text, index) => (
            <p
              key={index}
              className={`text-lg text-gray-700 leading-relaxed transition-all duration-700 delay-${index * 100}
                ${isHovered ? 'text-blue-800 translate-x-2' : 'translate-x-0'}`}
              style={{
                transitionDelay: `${index * 100}ms`,
                transform: isHovered ? `translateX(${index * 4}px)` : 'none'
              }}
            >
              {text}
            </p>
          ))}

          {/* Animated Footer with Pulse Effect */}
          <div className="relative h-1 mt-8">
            <div className={`absolute inset-0 bg-hack-400 transition-all duration-1000 ease-in-out
              ${isHovered ? 'w-full scale-x-100' : 'w-0 scale-x-0'}`} 
            />
            <div className={`absolute inset-0 bg-yellow-400 transition-all duration-1000 delay-500
              ${isHovered ? 'w-full scale-x-100 opacity-50' : 'w-0 scale-x-0 opacity-0'}`} 
            />
          </div>
        </div>

        {/* Hover Glow Effect */}
        <div className={`absolute inset-0 bg-hack-300 mix-blend-multiply filter blur-xl transition-all duration-700
          ${isHovered ? 'opacity-10' : 'opacity-0'}`} 
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
