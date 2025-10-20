"use client";

import "@/app/globals.css";
import Link from "next/link";
import { useState } from "react";

export const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navLinks = [
        { href: '#home', label: 'Home' },
        { href: '#about', label: 'About' },
        { href: '#portfolio', label: 'Portfolio' },
        { href: '#skills', label: 'Skills' },
    ];

    const linkClass = "hover:text-white transition-colors duration-300";
  return (

    <header className="p-2 fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/50 border-b border-white/10 shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <Link href="#home" className="text-3xl font-bold drop-shadow-sm text-white">Kaming</Link>

        <nav className="hidden md:flex gap-8 text-white/80 font-medium">
            {navLinks.map(({ href, label }) => (
            <Link key={href} href={href} className={linkClass}>
                {label}
            </Link>
            ))}
        </nav>

      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Menu"
        className="md:hidden p-2 rounded-lg hover:bg-white/30 dark:hover:bg-gray-700/30 transition-colors"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          {isOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      <div
        className={`absolute top-14 right-4 bg-white/5 border border-white/30 backdrop-blur-xl rounded-lg shadow-lg p-5 flex flex-col space-y-4 md:hidden transform transition-all duration-300 origin-top ${
          isOpen
            ? 'opacity-100 scale-100 translate-y-0'
            : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'
        }`}
      >
        {navLinks.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            onClick={() => setIsOpen(false)}
            className="hover:text-white transition-colors duration-300 text-gray-400"
          >
            {label}
          </Link>
        ))}
      </div>
      </div>
      </header>
  );
};
