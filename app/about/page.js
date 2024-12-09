"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Header from "../components/Header";
import cargif from "../images/download.gif";
import hire from "../images/hire.png";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const page = () => {
  return (
    <Header>
      <div className="bg-black">
        {/* Hero Section */}
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

          {/* Content */}
          <div className="relative items-center justify-between px-6 py-6 md:px-12 lg:px-20">
            <div className="text-white md:text-left space-y-6">
              <h3 className="text-3xl md:text-5xl font-bold text-center">
                About Me
              </h3>
              <h1 className="text-xl md:text-3xl text-center">
                Home / <span className="text-green">About Me</span>
              </h1>
            </div>
          </div>
        </motion.section>

        <motion.section
          className=" md:py-16 bg-gray-100 py-8"
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="container mx-auto px-6 md:px-12 lg:px-20 flex flex-col md:flex-row items-center space-y-6 md:space-y-0">
            {/* Picture */}
            <div className="w-5/6 md:w-1/2 lg:w-1/3 mt-2">
              <Image
                src={hire}
                alt="Alexander Ikosong"
                className="w-full h-auto rounded-lg shadow-lg object-cover"
              />
            </div>

            {/* Write-Up */}
            <div className="w-full md:w-1/2 text-gray-800 space-y-6 md:pl-12">
              {/* About Me */}
              <h2 className="text-xl font-bold">About Me</h2>
              <h3 className="text-2xl font-semibold">
                Who is <span className="text-green">Alexander Ikosong?</span>
              </h3>
              <p className="text-lg leading-relaxed">
                I am a passionate and results-driven web developer with years of
                experience in designing, building, and deploying
                high-performance web and mobile applications. My goal is to
                craft solutions that not only meet but exceed client
                expectations.
              </p>

              {/* Key Metrics */}
              <div className="flex md:flex-row justify-between items-start md:items-center mt-8">
                <div className="text-center">
                  <h4 className="text-2xl font-bold text-green">10+</h4>
                  <p className="text-gray-600 font-bold">Projects Completed</p>
                </div>
                <div className="text-center">
                  <h4 className="text-2xl font-bold text-green">5+</h4>
                  <p className="text-gray-600 font-bold">Industries Covered</p>
                </div>
                <div className="text-center">
                  <h4 className="text-2xl font-bold text-green">3+</h4>
                  <p className="text-gray-600 font-bold">Years of Experience</p>
                </div>
              </div>

              {/* Button */}
              <button className="bg-green hover:bg-blue-600 text-black px-6 py-3 rounded-lg font-medium mt-8">
                Download CV
              </button>
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
              <span className="text-green">My</span> Professional Journey
            </h2>
          </div>

          {/* Service Cards */}
          <div className="container mx-auto px-6 md:px-12 lg:px-20 mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
            {/* Frontend Development */}
            <div className="bg-black2 shadow-lg rounded-lg p-6 flex flex-col">
              <div className="text-blue-500 mb-4 flex border-b pb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 10h11M9 21V3m4 18v-7m4 7v-3m0 0H3"
                  />
                </svg>
                <h3 className="text-xl font-semibold align-center mt-4">
                  Work Experience
                </h3>
              </div>
              <div className="flex justify-between mt-2">
                <div>
                  <h1 className="text-xl font-bold">Jason Tech</h1>
                  <h3>Frontend Developer</h3>
                </div>
                <h2 className="p-4 bg-green rounded-lg text-black">
                  2022-2023
                </h2>
              </div>
              <div className="flex justify-between mt-5">
                <div>
                  <h1 className="text-xl font-bold">Fortechhub</h1>
                  <h3>Junior Mobile Developer</h3>
                </div>
                <h2 className="p-4 bg-green rounded-lg text-black">
                  2022-2023
                </h2>
              </div>
              <div className="flex justify-between mt-5">
                <div>
                  <h1 className="text-xl font-bold">Silicon Delta</h1>
                  <h3>Fullstack Developer</h3>
                </div>
                <h2 className="p-4 bg-green rounded-lg text-black">
                  2023-2024
                </h2>
              </div>
            </div>

            {/* Backend Development */}
            <div className="bg-black2 shadow-lg rounded-lg p-6 flex flex-col">
              <div className="text-green-500 mb-4 flex border-b pb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 10h16M10 14h4m-4 4h4"
                  />
                </svg>
                <h3 className="text-xl font-semibold mt-2">Education</h3>
              </div>
              <div className="flex justify-between mt-2">
                <div>
                  <h1 className="text-xl font-bold">
                    Ignatius Ajuru University
                  </h1>
                  <h3>Bsc. Computer Science</h3>
                </div>
                <h2 className="p-4 bg-green rounded-lg text-black">
                  2021-Date
                </h2>
              </div>
              <div className="flex justify-between mt-5">
                <div>
                  <h1 className="text-xl font-bold">Harvard CS50</h1>
                  <h3>Intoduction to computer science</h3>
                </div>
                <h2 className="p-4 bg-green rounded-lg text-black">2023</h2>
              </div>
              <div className="flex justify-between mt-5">
                <div>
                  <h1 className="text-xl font-bold">Harvard CS50</h1>
                  <h3>Web Development</h3>
                </div>
                <h2 className="p-4 bg-green rounded-lg text-black">2024</h2>
              </div>
            </div>
          </div>
        </motion.section>
      </div>
    </Header>
  );
};

export default page;
