// components/Header.js
"use client";

import { useRouter } from "next/navigation";
import logo from "../images/logo.png";
import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";
import Footer from "./Footer"; // Assuming you want to keep the Footer component here

const Header = ({ children }) => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  // Close the mobile menu on route change
  useEffect(() => {
    const handleRouteChange = () => {
      setIsOpen(false);
    };

    router.events?.on("routeChangeStart", handleRouteChange);

    return () => {
      router.events?.off("routeChangeStart", handleRouteChange);
    };
  }, [router]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Define navigation items (removed "About")
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Projects", path: "/projects" },
  ];

  return (
    <header className="text-white">
      <div
        style={{ backgroundColor: "transparent", zIndex: 70 }}
        className="bg-transparent fixed w-full container mx-auto flex justify-between items-center p-6"
      >
        {/* Logo */}
        <div
          className="flex items-center space-x-2 cursor-pointer"
          onClick={() => router.push("/")}
        >
          <Image src={logo} alt="Logo" width={25} height={25} />
          <div className="text-xl font-bold">Alxenix</div>
        </div>

        {/* Navigation Links for Desktop */}
        <nav className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <Link key={item.name} href={item.path} passHref>
              <span className="hover:text-gray-400 cursor-pointer text-base font-medium transition duration-300">
                {item.name}
              </span>
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button (Hamburger/Close Icon) */}
        <div className="md:hidden z-50">
          <button onClick={toggleMenu} aria-label="Menu toggle button">
            <svg
              className="w-8 h-8"
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

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-95 transform transition-transform duration-500 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:hidden z-40 flex flex-col justify-center items-center`}
      >
        <nav className="flex flex-col space-y-8 text-2xl font-semibold">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.path}
              passHref
              onClick={toggleMenu}
            >
              <span className="hover:text-gray-400 cursor-pointer transition duration-300">
                {item.name}
              </span>
            </Link>
          ))}
        </nav>
      </div>

      {/* Main Content Area - Ensure it starts below the fixed header */}
      <main className="pt-20">{children}</main>
      <Footer />
    </header>
  );
};

export default Header;
