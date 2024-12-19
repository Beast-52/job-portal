import React, { useState } from "react";
import Logo from "./partials/Logo";
import Button from "./partials/Button";
import { Cross, CrossIcon, LucideCross, Plus } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    "Jobs",
    "Active Employers",
    "Job Blogs",
    "Pricing",
    "Jobseeker Login",
    "Employer Login",
  ];

  return (
    <nav className="fixed w-full top-0 left-0 z-50 bg-transparent">
      <div className="absolute inset-0 bg-gradient-to-r from-[#121212] via-[#1e1e1e] to-[#121212] opacity-95 backdrop-blur-xl"></div>

      <div className="relative  mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center relative z-10">
          {/* Logo with Gradient Effect */}
          <div className="relative group">
            <Logo size="8vmax" className="relative z-10" />
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-500 rounded-lg opacity-30 group-hover:opacity-50 transition duration-300 blur-lg"></div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <div key={index} className="relative group cursor-pointer">
                <span className="relative text-zinc-300 group-hover:text-white transition-colors duration-300 text-base font-medium tracking-wide">
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-300"></span>
                </span>
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-500 rounded-lg opacity-0 group-hover:opacity-10 transition duration-300 blur-lg"></div>
              </div>
            ))}

            {/* CTA Buttons with Intense Gradient */}
            <div className="flex items-center space-x-4">
              {navItems.slice(-2).map((item, index) => (
                <Button item={item} />
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
                <span className="block w-6 h-0.5 bg-white transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-purple-500 group-hover:to-pink-500"></span>
                <span className="block w-6 h-0.5 bg-white transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-purple-500 group-hover:to-pink-500"></span>
                <span className="block w-6 h-0.5 bg-white transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-purple-500 group-hover:to-pink-500"></span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black/95 z-40 lg:hidden">
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            {navItems.map((item, index) => (
              <div key={index} className="relative group cursor-pointer">
                <span className="text-3xl text-zinc-300 group-hover:text-white transition-colors duration-300 tracking-wide">
                  {item}
                </span>
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-500 rounded-lg opacity-0 group-hover:opacity-10 transition duration-300 blur-lg"></div>
              </div>
            ))}
          </div>
          {isMenuOpen && (
            <div className="space-y-1.5 absolute top-3 right-4 z-[9999]" onClick={()=>setIsMenuOpen(!isMenuOpen)}>
              <Plus color="white" className="rotate-45" />
            </div>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
