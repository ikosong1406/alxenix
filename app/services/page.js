"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion"; // Import framer motion
import Header from "../components/Header";
import cargif from "../images/download.gif";
import { FaPenNib } from "react-icons/fa";
import { FaMobile } from "react-icons/fa6";
import { MdWeb } from "react-icons/md";
import { IoGlobeSharp } from "react-icons/io5";

// Animation variants for fade-in effect
const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const page = () => {
  return (
    <Header>
      <div className="bg-black">
        <motion.section
          className="relative flex flex-col md:flex-row items-center justify-center bg-cover bg-center pt-32"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          {/* Background GIF */}
          <Image
            src={cargif}
            alt="Background GIF"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-60" />

          {/* Content Container */}
          <div className="relative items-center justify-between px-6 py-6 md:px-12 lg:px-20">
            {/* Text Section */}
            <div className="text-white md:text-left space-y-6">
              <h3 className="text-3xl md:text-5xl font-bold text-center">
                Services
              </h3>
              <h1 className="text-xl md:text-3xl text-center">
                Home / <span className="text-green">Services</span>
              </h1>
            </div>
          </div>
        </motion.section>

        <motion.section
          className=" py-12 md:py-16 lg:py-20"
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Section Header */}
          <div className="container mx-auto px-6 md:px-12 lg:px-20 flex md:flex-row justify-center items-center">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-800">
              <span className="text-green">Services</span> I Provide
            </h2>
          </div>

          {/* Service Cards */}
          <div className="container mx-auto px-6 md:px-12 lg:px-20 mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Frontend Development */}
            <div className="bg-black2 shadow-lg rounded-lg p-6 flex flex-col">
              <div className="text-blue-500 mb-4">
                <MdWeb style={{ width: 30, height: 30 }} />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Frontend Development
              </h3>
              <p className="text-gray-600">
                Crafting stunning, responsive, and user-friendly interfaces
                using modern frameworks like React and Next.js.
              </p>
            </div>

            {/* Backend Development */}
            <div className="bg-black2 shadow-lg rounded-lg p-6 flex flex-col">
              <div className="text-green-500 mb-4">
                <IoGlobeSharp style={{ width: 30, height: 30 }} />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Backend Development
              </h3>
              <p className="text-gray-600">
                Building robust and scalable APIs and backend systems using
                Node.js, Express, and MongoDB.
              </p>
            </div>

            {/* UI/UX Design */}
            <div className="bg-black2 shadow-lg rounded-lg p-6 flex flex-col">
              <div className="text-purple-500 mb-4">
                <FaPenNib style={{ width: 30, height: 30 }} />
              </div>
              <h3 className="text-xl font-semibold mb-2">UI/UX Design</h3>
              <p className="text-gray-600">
                Designing intuitive and engaging user experiences and interfaces
                to enhance usability.
              </p>
            </div>

            {/* Mobile App Development */}
            <div className="bg-black2 shadow-lg rounded-lg p-6 flex flex-col">
              <div className="text-yellow-500 mb-4">
                <FaMobile style={{ width: 30, height: 30 }} />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Mobile App Development
              </h3>
              <p className="text-gray-600">
                Creating high-performance cross-platform mobile applications
                with React Native and Expo.
              </p>
            </div>
          </div>
        </motion.section>
      </div>
    </Header>
  );
};

export default page;
