// components/Footer.js
import Link from "next/link";
import Image from "next/image";
import logo from "../images/logo.png"; // Ensure this path is correct

export default function Footer() {
  return (
    <footer className="bg-black text-white py-10 border-t mt-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-16">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-10">
          
          {/* Logo & Info */}
          <div className="flex flex-col items-center md:items-start">
            <Image src={logo} alt="Alxenix Logo" width={35} height={35} />
            <p className="text-sm mt-4 text-gray-400">Alxenix</p>
          </div>

          {/* Navigation */}
          <div className="flex flex-col sm:flex-row sm:space-x-8 text-center sm:text-left space-y-4 sm:space-y-0">
            <Link href="/about" className="text-gray-400 hover:text-green transition">
              About Us
            </Link>
            <Link href="/services" className="text-gray-400 hover:text-green transition">
              Services
            </Link>
            <Link href="/projects" className="text-gray-400 hover:text-green transition">
              Projects
            </Link>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-10 pt-6 text-center">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Alxenix. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
