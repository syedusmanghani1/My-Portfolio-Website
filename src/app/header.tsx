"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 bg-gray-800 text-white shadow-lg z-50 h-16">
      <div className="container mx-auto p-4 flex justify-between items-center">
        <div className="flex items-center gap-x-2">
          <Image
            width={140}
            height={12}
            src="/logo.png"
            alt="logo"
            className="w-14 h-12"
          />
          <div className="text-3xl font-bold">
            <span className="text-gray-300">M</span>
            <span className="text-gray-500">y</span>
            <span className="text-yellow-300">Port</span>
            <span className="text-yellow-500">folio</span>
          </div>
        </div>

        <button className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          )}
        </button>

        <ul className={`hidden md:flex space-x-10 text-[20px]`}>
          <li>
            <Link href="#home">
              <button className="hover:bg-white hover:text-gray-800 hover:rounded-full w-20">Home</button>
            </Link>
          </li>
          <li>
            <Link href="#about">
              <button className="hover:bg-white hover:text-gray-800 hover:rounded-full w-20">About</button>
            </Link>
          </li>
          <li>
            <Link href="#skills">
              <button className="hover:bg-white hover:text-gray-800 hover:rounded-full w-20">Skills</button>
            </Link>
          </li>
          <li>
            <Link href="#contact">
              <button className="hover:bg-white hover:text-gray-800 hover:rounded-full w-24">Contact</button>
            </Link>
          </li>
        </ul>
      </div>

      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-gray-800 bg-opacity-90 flex flex-col items-center justify-center z-40">
          <ul className="flex flex-col">
            <li>
              <Link href="#home">
                <button className="block px-4 py-2 text-left text-white hover:bg-gray-700 w-full" onClick={closeMenu}>
                  Home
                </button>
              </Link>
            </li>
            <li>
              <Link href="#about">
                <button className="block px-4 py-2 text-left text-white hover:bg-gray-700 w-full" onClick={closeMenu}>
                  About
                </button>
              </Link>
            </li>
            <li>
              <Link href="#skills">
                <button className="block px-4 py-2 text-left text-white hover:bg-gray-700 w-full" onClick={closeMenu}>
                  Skills
                </button>
              </Link>
            </li>
            <li>
              <Link href="#contact">
                <button className="block px-4 py-2 text-left text-white hover:bg-gray-700 w-full" onClick={closeMenu}>
                  Contact
                </button>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
