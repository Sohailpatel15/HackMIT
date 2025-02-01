// "use client";
// import { useEffect, useRef } from "react";
// import gsap from "gsap";

// export const AnimatedTitle = ({ title, containerClass, wordClass }) => {
//   const containerRef = useRef(null);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       const titleAnimation = gsap.timeline({
//         scrollTrigger: {
//           trigger: containerRef.current,
//           start: "100 bottom",
//           end: "center bottom",
//           toggleActions: "play none none reverse",
//         },
//       });

//       titleAnimation.to(".animated-word", {
//         opacity: 1,
//         transform: "translate3d(0,0,0) rotateY(0deg) rotateX(0deg)",
//         stagger: 0.02,
//         ease: "power2.inOut",
//         duration: 1.5,
//       });
//     }, containerRef);

//     return () => {
//       ctx.revert();
//     };
//   }, []);

//   return (
//     <div ref={containerRef} className={`animated-title ${containerClass} `}>
//       {title.split("<br />").map((line, index) => (
//         <div
//           key={index}
//           className="flex-center max-w-full flex-wrap gap-2 md:gap-3"
//         >
//           {line.split(" ").map((word, i) => (
//             <span
//               key={i}
//               className={`animated-word ${wordClass} `}
//               dangerouslySetInnerHTML={{ __html: word }}
//             />
//           ))}
//         </div>
//       ))}
//     </div>
//   );
// };


"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export const AnimatedTitle = ({ title, containerClass }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const titleAnimation = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "100 bottom",
          end: "center bottom",
          toggleActions: "play none none reverse",
        },
      });

      titleAnimation.to(".animated-word", {
        opacity: 1,
        y: 0,
        rotateY: 0,
        rotateX: 0,
        stagger: 0.05,
        ease: "power2.inOut",
        duration: 1.2,
      });
    }, containerRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <div ref={containerRef} className={`animated-title ${containerClass}`}>
      {title.split("<br />").map((line, index) => (
        <div key={index} className="flex justify-center flex-wrap gap-2 md:gap-3">
          {line.split(" ").map((word, i) => {
            let styleClass = "text-hack-100 animated-word opacity-0 translate-y-5";
            if (i === 0) styleClass += " merriweather italic";
            if (i === 1) styleClass = "text-accent-100 animated-word opacity-0 translate-y-5";
            if (i === 2) styleClass += " highlight";

            return (
              <span key={i} className={`${styleClass} text-7xl font-bold`}>
                {word}&nbsp;
              </span>
            );
          })}
        </div>
      ))}
    </div>
  );
};
