import React, { useEffect, useRef, useState } from "react";
import Logo from "./partials/Logo";
import Button from "./partials/Button";
import { Plus } from "lucide-react";

const Navbar = ({ isMenuOpen, setIsMenuOpen }) => {
  const navItems = [
    "Jobs",
    "Active Employers",
    "Job Blogs",
    "Pricing",
    "Jobseeker Login",
    "Employer Login",
  ];
  const [isScrolledUp, setIsScrolledUp] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const navRef = useRef(null);
  const subNavRef = useRef(null);
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 10) {
        // Scrolling down
        setIsScrolledUp(false);
      } else {
        // Scrolling up
        setIsScrolledUp(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);
  useEffect(() => {
    if (window.innerWidth < 600) {
      document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
    }
  }, [isMenuOpen, window.innerWidth]);
  useEffect(() => {
    const scroll = () => {
      if (window.scrollY > 10) {
        subNavRef.current?.classList.add("scrolled");
        subNavRef.current?.classList.remove("transparent");
      } else {
        subNavRef.current?.classList.add("transparent");
        subNavRef.current?.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", scroll);

    return () => {
      window.removeEventListener("scroll", scroll);
    };
  }, []);

  return (
    <nav
      ref={navRef}
      className={`fixed w-full top-0 left-0 z-[999999] transition-transform duration-300 ${
        isScrolledUp ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div
        ref={subNavRef}
        className="absolute inset-0  opacity-95 transition-all duration-150 backdrop-blur-xl"
      ></div>

      <div className="relative mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center relative z-10">
          {/* Logo */}
          <Logo size="8vmax" className="relative z-10" />

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.slice(0, 3).map((item, index) => (
              <div key={index} className="relative group cursor-pointer">
                <span className="relative text-zinc-300 group-hover:text-white transition-colors duration-300 text-base font-medium tracking-wide">
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-300"></span>
                </span>
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-500 rounded-lg opacity-0 group-hover:opacity-10 transition duration-300 blur-lg"></div>
              </div>
            ))}

            {/* CTA Buttons */}
            <div className="flex items-center space-x-4">
              {navItems.slice(-2).map((item, index) => (
                <Button key={index} item={item} />
              ))}
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden z-10 relative">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white focus:outline-none relative group"
            >
              <div className="space-y-1.5">
                <span className="block w-6 h-0.5 bg-white"></span>
                <span className="block w-6 h-0.5 bg-white"></span>
                <span className="block w-6 h-0.5 bg-white"></span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black/95 z-40 lg:hidden h-screen">
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            {navItems.map((item, index) => {
              return index <= 3 ? (
                <div key={index} className="relative group cursor-pointer">
                  <span className="text-[2vmax] text-zinc-300 group-hover:text-white transition-colors duration-300 tracking-wide">
                    {item}
                  </span>
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-500 rounded-lg opacity-0 group-hover:opacity-10 transition duration-300 blur-lg"></div>
                </div>
              ) : (
                <Button key={index} item={item} />
              );
            })}
          </div>
          <div
            className="absolute top-3 right-4 z-[9999]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Plus color="white" className="rotate-45" />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
