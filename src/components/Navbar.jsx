"use client";
import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const Navbar = ({ pages }) => {
  const pathname = usePathname();
  const navbarRef = useRef();
  const [width, setWidth] = useState(623.5);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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

    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close mobile menu when clicking a link
  const handleMobileLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMobileMenuOpen]);

  return (
    <nav className={`fixed top-0 z-[999] w-full transition-all duration-300 ${scrolled ? "py-2" : "py-5"}`}>
      {/* Desktop Navbar */}
      <div
        ref={navbarRef}
        className="hidden md:flex gap-2 mx-auto w-fit rounded-full border border-gray-800/20 bg-black/10 px-3 py-2 backdrop-blur-md transition-all duration-300 hover:bg-black/20"
        style={{
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)",
        }}
      >
        {pages.map((page, index) => (
          <div
            key={index}
            className="relative"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <Link
              href={page.url}
              className={`relative block px-4 py-2 text-sm font-medium transition-all duration-300 ${
                page.url === pathname ? "text-hack-100" : "text-hack-100 hover:text-accent-200"
              }`}
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
      </div>

      {/* Mobile Navbar */}
      <div className="md:hidden px-4">
        <div className={`flex justify-between items-center `}>
          <Link href="/" className="text-hack-100 font-bold"></Link>
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
            className="text-hack-100 p-2 rounded-full hover:bg-white/10 transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 bg-/80 backdrop-blur-md pt-20 z-10">
            <div className="max-h-[calc(100vh-5rem)] overflow-y-auto">
              <div className="px-6 py-2 flex flex-col gap-1">
                {pages.map((page, index) => (
                  <Link
                    key={index}
                    href={page.url}
                    className={`relative block px-4 py-4 text-lg font-medium rounded-lg transition-all duration-200 ${
                      page.url === pathname 
                        ? "bg-hack-400/20 text-hack-100" 
                        : "text-hack-100/80 hover:bg-hack-400/10 hover:text-hack-100"
                    }`}
                    onClick={handleMobileLinkClick}
                  >
                    <div className="flex items-center">
                      <span>{page.title}</span>
                      {page.url === pathname && (
                        <span className="ml-2 h-2 w-2 rounded-full" />
                      )}
                    </div>
                    {page.url === pathname && (
                      <span className="absolute top-0 left-0  h-full w-1 bg-blue-500 rounded-r-md transform" style={{ transform: "rotateX(45deg)" }}/>
                    )}
                  </Link>
                ))}
              </div>

            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;