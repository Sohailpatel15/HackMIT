"use client";
import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = ({ pages }) => {
  const pathname = usePathname();
  const navbarRef = useRef();
  const [width, setWidth] = useState(623.5);
  
  useEffect(() => {
    if (navbarRef.current) {
      const navWidth = navbarRef.current.getBoundingClientRect().width;
      console.log(navWidth);
      
      setWidth(navWidth);
    }
  }, []);

  return (
    <nav
      className={`w-fit backdrop-blur-md shadow-[0_8px_32px_rgba(0,0,0,0.4)] p-2 rounded-[50px] fixed top-5 flex gap-4 border border-gray-600  mix-blend-difference`}
      style={{ left: `calc((100% - ${width}px)/2)` }} //center the navbar
      ref={navbarRef}
    >
      {pages.map((page, index) => (
        <Link
          key={index}
          className={`p-2 rounded-[48px] ${
            page.url === pathname && "border-b-[.5px] border-b-blue-500 border border-gray-600"
          } `}
          href={page.url}
        >
          {page.title}
        </Link>
      ))}
    </nav>
  );
};

export default Navbar;
