"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation"; // For page navigation
import { motion } from "framer-motion"; // Import framer motion
import Header from "./components/Header";
import cargif from "./images/download.gif";
import hire from "./images/hire.png";
import hire1 from "./images/hire1.png";
import PortfolioProjects from "./components/Projects.json";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

// Animation variants for fade-in effect
const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

export default function HomePage() {
  const router = useRouter();

  const handleCallToAction = () => {
    router.push("/signup");
  };

  return (
    <Header>
      <div className="bg-black">
        <motion.section
          className="relative h-[600px] flex flex-col md:flex-row items-center justify-center bg-cover bg-center pt-32"
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
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between px-6 md:px-12 lg:px-20">
            {/* Text Section */}
            <div className="text-white w-full md:w-1/2 md:text-left space-y-6">
              <p className="text-lg md:text-2xl leading-tight">Hi There!</p>
              <h3 className="text-3xl md:text-5xl text-green font-bold">
                I'm Alexander Ikosong
              </h3>
              <h1 className="text-xl md:text-3xl">
                I'm an experienced developer with 3+ years in the field of
                collaborationd with various clients and startups
              </h1>

              {/* Buttons */}
              <div className="flex md:space-x-4 md:space-y-0 justify-between w-96">
                <button
                  className="bg-green hover:bg-blue-600 text-black px-6 py-3 rounded-lg font-medium"
                  onClick={() => (window.location.href = "/portfolio")}
                >
                  View My Work
                </button>
                <button
                  className="border border-white hover:bg-gray-800 text-white px-6 py-3 rounded-lg font-medium"
                  onClick={() => (window.location.href = "/cv.pdf")}
                >
                  Download CV
                </button>
              </div>
            </div>

            {/* Image Section */}
            <div className="w-4/6 md:w-2/5 lg:w-1/3 mt-16">
              <Image
                src={hire1}
                alt="Profile Picture"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            <div className="absolute bottom-[0] left-0 w-full bg-green text-black text-center py-4 mt-96">
              <p className="text-lg font-semibold">
                Web Development * App Development * UI/UX Design
              </p>
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
          <div className="container mx-auto px-6 md:px-12 lg:px-20 flex md:flex-row justify-between items-center">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-800">
              <span className="text-green">Services</span> I Provide
            </h2>
            <button className="mt-4 md:mt-0 bg-green hover:bg-blue-600 text-black px-6 py-3 rounded-lg font-medium">
              View All Services
            </button>
          </div>

          {/* Service Cards */}
          <div className="container mx-auto px-6 md:px-12 lg:px-20 mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Frontend Development */}
            <div className="bg-black2 shadow-lg rounded-lg p-6 flex flex-col">
              <div className="text-blue-500 mb-4">
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
                    d="M10 2h4m0 0v2m0 0v14m-4-2h4M10 20h4M4 6h16M4 10h16"
                  />
                </svg>
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

        <motion.section
          className=" md:py-16 bg-gray-100"
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
              <h3 className="text-3xl font-semibold">
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
                  <h4 className="text-2xl font-bold text-green">50+</h4>
                  <p className="text-gray-600 font-bold">Projects Completed</p>
                </div>
                <div className="text-center">
                  <h4 className="text-2xl font-bold text-green">10+</h4>
                  <p className="text-gray-600 font-bold">Industries Covered</p>
                </div>
                <div className="text-center">
                  <h4 className="text-2xl font-bold text-green">7+</h4>
                  <p className="text-gray-600 font-bold">Years of Experience</p>
                </div>
              </div>

              {/* Button */}
              <button className="bg-green hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium mt-8">
                Download CV
              </button>
            </div>
          </div>
        </motion.section>

        <motion.section
          className="pt-20"
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="relative h-[700px] md:h-[400px] px-6 md:px-12 lg:px-20">
            {/* Heading */}
            <div className=" mb-10">
              <h2 className="text-xl font-bold text-gray-800">
                My Favourite Tools
              </h2>
              <p className="text-3xl text-gray-600 mt-2">
                <span className="text-green"> Exploring the technologies</span>{" "}
                behind my craft
              </p>
            </div>

            {/* Technologies Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
              {/* Example Card */}
              {[
                {
                  name: "React",
                  image:
                    "https://th.bing.com/th/id/OIP.QdIrCNdF2ZVylABjjes1LAHaGq?rs=1&pid=ImgDetMain",
                  proficiency: "95%",
                },
                {
                  name: "Next.js",
                  image:
                    "https://th.bing.com/th/id/R.340bb593ebc5d9962f901b8dc66ad4e5?rik=vpjqhXVQaMDhMQ&pid=ImgRaw&r=0",
                  proficiency: "90%",
                },
                {
                  name: "Tailwind CSS",
                  image:
                    "https://th.bing.com/th?id=OIP.WMUyMA6k8m06DlgL9MHVDgHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
                  proficiency: "92%",
                },
                {
                  name: "Node.js",
                  image:
                    "https://th.bing.com/th?id=OIP.9zN9M5IW0FwVUWiO-xOoMAHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
                  proficiency: "88%",
                },
                {
                  name: "Express.js",
                  image:
                    "https://th.bing.com/th?id=OIP.mbGqG9oLZIhHr4KoESQtIAHaJ4&w=216&h=288&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
                  proficiency: "85%",
                },
                {
                  name: "MongoDB",
                  image:
                    "https://th.bing.com/th?id=OIP.nwnAJDp7rH7vvaKRiJsyHQHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
                  proficiency: "87%",
                },
                {
                  name: "Git",
                  image:
                    "https://th.bing.com/th?id=OIP.94bkBm5O_T_HvcnDT0C1iAHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
                  proficiency: "90%",
                },
                {
                  name: "Figma",
                  image:
                    "https://th.bing.com/th?id=OIP.akV9KjAtdaROFei8n8dnowHaHw&w=244&h=255&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
                  proficiency: "80%",
                },
              ].map((tech, index) => (
                <div
                  key={index}
                  className="relative bg-black2 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow flex justify-between pt-14"
                >
                  {/* Proficiency */}
                  <span className="absolute top-3 right-3 bg-green text-black text-sm font-bold px-2 py-1 rounded-full">
                    {tech.proficiency}
                  </span>
                  {/* Image */}
                  <div className="flex justify-center items-center mb-4">
                    <img
                      src={tech.image}
                      alt={tech.name}
                      className="w-16 h-16 object-contain rounded-lg"
                    />
                  </div>
                  {/* Name */}
                  <h3 className="text-lg font-semibold text-gray-800 text-center text-center">
                    {tech.name}
                  </h3>
                </div>
              ))}
            </div>
            <div className="absolute bottom-0 left-0 w-full bg-green text-black text-center py-4 mt-96">
              <p className="text-lg font-semibold">
                Web Development * App Development * UI/UX Design
              </p>
            </div>
          </div>
        </motion.section>

        <motion.section
          className="pt-20"
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className=" mx-auto px-6 md:px-12 lg:px-20 relative h-[750px] md:h-[450px]">
            {/* Section Header */}
            <div className="flex justify-between items-center mb-10">
              <div>
                <h2 className="text-xl font-bold text-gray-800">
                  My Portfolio
                </h2>
                <p className="text-2xl text-gray-600 mt-2">
                  Let's have a look at{" "}
                  <span className="text-green">My portfolio</span>
                </p>
              </div>
              <button className="mt-4 md:mt-0 px-6 py-3 bg-green text-black font-bold rounded-lg hover:bg-blue-600">
                View All Projects
              </button>
            </div>

            {/* Project Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {PortfolioProjects.slice(0, 2).map((project, index) => (
                <div
                  key={index}
                  className="bg-black2 shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <img
                    src={project.pictures[0]}
                    alt={project.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800">
                      {project.name}
                    </h3>
                    <p className="text-gray-600 mt-2">{project.description}</p>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block mt-4 px-4 py-2 bg-green text-white font-bold text-center rounded-lg hover:bg-green-600"
                    >
                      See More
                    </a>
                  </div>
                </div>
              ))}
            </div>
            <div className="absolute bottom-0 left-0 w-full bg-green text-black text-center py-4 mt-96">
              <p className="text-lg font-semibold">
                Web Development * App Development * UI/UX Design
              </p>
            </div>
          </div>
        </motion.section>

        <motion.section
          className="py-12 bg-gray-100"
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className=" md:px-12 lg:px-20">
            {/* Section Header */}
            <div className="text-center mb-10">
              <h2 className="text-xl font-bold text-gray-800">Contact Me</h2>
              <p className="text-3xl text-gray-600 mt-2">
                Let's talk on{" "}
                <span className="text-green">your next project</span>
              </p>
            </div>

            {/* Contact Card */}
            <div className="mx-auto bg-black2 shadow-lg rounded-lg p-8 md:w-1/2 w-5/6">
              <div className="space-y-6">
                {/* Address */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    Address
                  </h3>
                  <p className="text-gray-600">
                    123 Main Street, City, Country
                  </p>
                </div>

                {/* Contact Information */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    Contact
                  </h3>
                  <p className="text-gray-600">Phone: +1 (123) 456-7890</p>
                  <p className="text-gray-600">Email: example@example.com</p>
                </div>

                {/* Operating Hours */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    Available Time
                  </h3>
                  <p className="text-gray-600">Mon - Fri: 9:00 AM - 6:00 PM</p>
                </div>

                {/* Social Media Section */}
                <div className="bg-green p-4 rounded-lg flex justify-center space-x-6">
                  <a
                    href="https://www.facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green text-2xl hover:text-gray-200 bg-black p-2 rounded-xl"
                  >
                    <FaFacebook />
                  </a>
                  <a
                    href="https://www.twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green text-2xl hover:text-gray-200 bg-black p-2 rounded-xl"
                  >
                    <FaTwitter />
                  </a>
                  <a
                    href="https://www.linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green text-2xl hover:text-gray-200 bg-black p-2 rounded-xl"
                  >
                    <FaLinkedin />
                  </a>
                  <a
                    href="https://www.instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green text-2xl hover:text-gray-200 bg-black p-2 rounded-xl"
                  >
                    <FaInstagram />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.section>
      </div>
    </Header>
  );
}
