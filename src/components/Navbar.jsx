"use client";
import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = ({ pages }) => {
  const pathname = usePathname();
  const navbarRef = useRef();
  const [width, setWidth] = useState(623.5);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    if (navbarRef.current) {
      const navWidth = navbarRef.current.getBoundingClientRect().width;
      setWidth(navWidth);
    }

    const handleResize = () => {
      if (navbarRef.current) {
        const navWidth = navbarRef.current.getBoundingClientRect().width;
        setWidth(navWidth);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <nav
      ref={navbarRef}
      className="fixed top-5 z-[999] flex gap-2 rounded-full border border-gray-800/20 bg-black/10 px-3 py-2 
                backdrop-blur-md transition-all duration-300 hover:bg-black/20"
      style={{ 
        left: "50%",
        transform: "translateX(-50%)", // Centers the navbar horizontally
        boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)"
      }}
    >
      <div className="flex w-fit h-fit relative">
        {pages.map((page, index) => (
          <div
            key={index}
            className="relative"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <Link
              href={page.url}
              className={`relative block px-4 py-2 text-sm font-medium transition-all duration-300
                ${page.url === pathname ? 'text-hack-100' : 'text-hack-100 hover:text-accent-200'}
              `}
            >
              {page.title}
              
              {page.url === pathname && (
                <span className="absolute bottom-0 left-0 right-0 mx-auto h-[2px] w-12 bg-blue-500 transition-all duration-300" />
              )}
              
              {hoveredIndex === index && page.url !== pathname && (
                <span className="absolute bottom-0 left-0 right-0 mx-auto h-[2px] w-8 bg-gray-500/50 transition-all duration-300" />
              )}
              
              {hoveredIndex === index && (
                <span className="absolute inset-0 -z-10 rounded-full bg-white/5 transition-all duration-300" />
              )}
            </Link>
          </div>
        ))}

        <div
          className="absolute bottom-0 h-full transition-all duration-500"
          style={{
            left: `${(pathname.length * 16)}px`,
            width: '4px',
            opacity: 0.2
          }}
        />
      </div>
    </nav>
  );
};

export default Navbar;