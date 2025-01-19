"use client";
import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = ({ pages }) => {
  const pathname = usePathname();
  const navbarRef = useRef(null);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (navbarRef.current) {
      const navWidth = navbarRef.current.getBoundingClientRect().width;
      const navHeight = navbarRef.current.getBoundingClientRect().height;
      console.log(navWidth, navHeight);
      setWidth(navWidth);
      setHeight(navHeight);
    }
  }, []);

  return (
    <nav
      className={`w-fit  p-4 rounded-[50] fixed top-5 flex gap-4 border border-gray-600`}
      style={{ left: `calc((100% - ${width}px)/2)` }}
      id="navbar"
      ref={navbarRef}
    >
      {pages.map((page, index) => (
        <Link
          key={index}
          className={`p-2 border border-gray-600 rounded-3xl  ${
            page.url === pathname && "border-b-[.5px] border-b-blue-500"
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
