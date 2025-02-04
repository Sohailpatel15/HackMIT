"use client";
import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = ({ pages }) => {
  const pathname = usePathname();
  const navbarRef = useRef();
  const [width, setWidth] = useState(623.5);

  const pageRef = useRef(null);
  const [pageWidth, setPageWidth] = useState(0);

  useEffect(() => {
    if (navbarRef.current) {
      const navWidth = navbarRef.current.getBoundingClientRect().width;

      setWidth(navWidth);
    }

    if (pageRef.current) {
      const navLinkWidth = pageRef.current.getBoundingClientRect().width;
      console.log(navLinkWidth);
      setPageWidth(navLinkWidth);
    }
  }, []);

  return (
    <nav
      className={`backdrop-blur-md shadow-[0_8px_32px_rgba(0,0,0,0.4)] p-2 rounded-xl fixed top-5 flex gap-2 border-[0.1px] border-gray-300`}
      style={{ left: `calc((100% - ${width}px)/2)` }} //center the navbar
      ref={navbarRef}
    >
      <div className="w-fit h-fit flex">
        {pages.map((page, index) => (
          <div
          key={index}
            className="p-2 rounded-[48px] h-fit transition-all"
            ref={pageRef}
            
          >
            <Link
              key={index}
              className={`p-2 rounded-[48px]  ${
                page.url === pathname &&
                "border-b-[.5px] border-b-blue-500  border-gray-600"
              } `}
              href={page.url}
            >
              {page.title}  
            </Link>
          </div>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
