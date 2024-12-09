// components/Header.js
"use client";

import { useRouter } from "next/navigation";
import logo from "../images/logo.png";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import Footer from "./Footer";

const Header = ({ children }) => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className=" text-white border-b">
      <div
        style={{ backgroundColor: "transparent", zIndex: 70 }}
        className="bg-transparent fixed container mx-auto flex justify-between items-center p-6"
      >
        {/* Logo */}
        <div className="flex justify-between items-center">
          <Image src={logo} alt="Logo" width={25} height={25} />
          <div
            className="text-xl font-bold cursor-pointer"
            onClick={() => router.push("/")}
          >
            Alxenix
          </div>
        </div>

        {/* Navigation Links for Desktop */}
        <nav className="flex md:flex space-x-6">
          <span
            onClick={() => router.push("/")}
            className="hover:text-gray-400 cursor-pointer text-sm md:text-xl"
          >
            Home
          </span>
          <span
            onClick={() => router.push("/services")}
            className="hover:text-gray-400 cursor-pointer text-sm md:text-xl"
          >
            Services
          </span>
          <span
            onClick={() => router.push("/projects")}
            className="hover:text-gray-400 cursor-pointer text-sm md:text-xl"
          >
            Projects
          </span>
          <span
            onClick={() => router.push("/about")}
            className="hover:text-gray-400 cursor-pointer text-sm md:text-xl"
          >
            About
          </span>
        </nav>

        {/* Mobile Menu Button */}
        <div className="hidden md:hidden">
          <button onClick={toggleMenu} aria-label="Menu toggle button">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {/* {isOpen && (
        <div className="md:hidden bg-gray-700 text-white p-4">
          <nav className="flex flex-col space-y-4">
            <Link href="/about" className="hover:text-gray-400">
              About Us
            </Link>
            <Link href="/faq" className="hover:text-gray-400">
              FAQ
            </Link>
            <Link href="/privacy" className="hover:text-gray-400">
              Privacy Policy
            </Link>
          </nav>

         
          <div className="flex flex-col space-y-4 mt-4">
            <button
              onClick={() => router.push("/login")}
              className="px-4 py-2 bg-gold rounded-lg"
            >
              Login
            </button>
            <button
              onClick={() => router.push("/signup")}
              className="px-4 py-2 bg-transparent hover:bg-bluey rounded-lg border"
            >
              Sign Up
            </button>
          </div>
        </div>
      )} */}
      <main>{children}</main>
      <Footer />
    </header>
  );
};

export default Header;
