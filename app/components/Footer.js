// components/Footer.js
import Link from "next/link";
import Image from "next/image";
import logo from "../images/logo.png"; // Make sure this path matches your logo location

export default function Footer() {
  return (
    <footer className="bg-black text-white py-8 border-t">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4 md:px-8 lg:px-16">
        {/* Logo & Site Info */}
        <div className="mb-6 md:mb-0 flex flex-col items-center md:items-start text-center md:text-left">
          <Image src={logo} alt="BitCloud Logo" width={25} height={25} />
          <p className="text-sm mt-4 text-gray-400">Alxenix</p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 mb-6 md:mb-0 items-center">
          <Link
            href="/about"
            className="text-gray-400 hover:text-blue-400 transition"
          >
            About Us
          </Link>
          <Link
            href="/services"
            className="text-gray-400 hover:text-blue-400 transition"
          >
            Services
          </Link>
          <Link
            href="/projects"
            className="text-gray-400 hover:text-blue-400 transition"
          >
            Projects
          </Link>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="border-t border-gray-700 mt-6 pt-6 text-center">
        <p className="text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Alxenix. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
