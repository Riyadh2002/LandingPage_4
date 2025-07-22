import React, { useState } from 'react';
import hero from "../assets/image/Hero.png";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", href: "#" },
  { label: "Agent", href: "#" },
  { label: "Navbar", href: "#" },
  { label: "Help", href: "#" },
];

// Named export for ResponsiveNavbar
export function ResponsiveNavbar() {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  return (
<nav className="absolute top-0 left-0 w-full px-4 md:px-6 py-3 sm:py-4 z-10 bg-white/80 backdrop-blur-sm md:bg-transparent md:backdrop-blur-0">
      <div className="flex items-center justify-between flex-wrap md:flex-nowrap gap-y-3">
        {/* Left navbar links - desktop only */}
        <div className="hidden md:flex gap-4 text-xs sm:text-xs text-gray-700 font-roboto">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="hover:text-orange-400 transition">
              {item.label}
            </a>
          ))}
        </div>

        {/* Right navbar links - desktop only */}
        <div className="hidden md:flex items-center gap-3 text-gray-700 font-roboto">
          <a href="#" className="text-xs sm:text-xs whitespace-nowrap hover:text-orange-400 transition">
            Sign Up
          </a>
          <button className="bg-custom-darkblue text-white px-4 md:px-6 py-2 text-sm hover:bg-opacity-90 transition whitespace-nowrap ">
            Get Started
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setMobileDrawerOpen(!mobileDrawerOpen)}
          aria-label="Toggle Menu"
        >
          {mobileDrawerOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Drawer */}
        {mobileDrawerOpen && (
          <div className="fixed top-0 right-0 z-50 bg-neutral-900 w-full h-screen p-12 flex flex-col justify-center items-center md:hidden">
            <ul className="text-white space-y-6 text-xl mb-8 text-center">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setMobileDrawerOpen(false)}
                    className="block px-4 py-2 hover:text-orange-400 transition"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex flex-col space-y-4 items-center">
              <a
                href="#"
                onClick={() => setMobileDrawerOpen(false)}
                className="py-2 px-6 border border-white/20 text-white rounded-md hover:bg-white/10 transition"
              >
                Sign Up
              </a>
              <button
                onClick={() => setMobileDrawerOpen(false)}
                className="py-2 px-6 rounded-md bg-gradient-to-r from-orange-500 to-orange-800 text-white hover:opacity-90 transition"
              >
                Get Started
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

// Default export for Hero component
export default function Hero() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="max-w-[1100px] w-full mx-auto flex flex-col md:flex-row items-center justify-between gap-10 py-16">

        {/* Container for Text Section including logo */}
        <div className="flex-1 text-center md:text-left">

          {/* Logo FINMIN at top */}
          <div className="mb-16 md:mb-40">
            <p className="text-lg md:text-xl font-bold uppercase tracking-widest text-custom-darkblue font-roboto">
              FINMIN
            </p>
          </div>

          {/* Main Text */}
          <div className="space-y-6 px-2 md:px-0">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-light text-darkblue leading-tight font-taviraj">
              Sell smarter. <br />
              Market better.
            </h1>

            <p className="text-xs sm:text-sm text-gray-600 max-w-md mx-auto md:mx-0 ">
              All-in-one AI-powered tools to grow your <br />
              property business.
            </p>

            <div className='mt-30'>
              <button className="bg-custom-maincolor text-white px-6 sm:px-8 py-2 sm:py-4 text-sm sm:text-base font-semibold hover:bg-opacity-90 transition ">
  Get Started Free
</button>

            </div>
          </div>
        </div>

        {/* Image Section with ResponsiveNavbar included */}
        <div className="flex-none w-full md:w-[700px] relative font-taviraj font-semibold">
          <ResponsiveNavbar hero={hero} />
          {/* Hero Image */}
          <img src={hero} alt="Hero" className="w-full h-auto object-contain" />
        </div>

      </div>
    </div>
  );
}
