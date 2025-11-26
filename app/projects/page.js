"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation"; // For navigation
import Header from "../components/Header";
import cargif from "../images/download.gif";
import PortfolioProjects from "../components/Projects.js";

// Animation variants for fade-in effect
const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const ProjectsPage = () => {
  const router = useRouter();

  const navigateToDetails = (project) => {
    router.push(`/projects/${project.id}`);
  };

  return (
    <Header>
      <div className="bg-black">
        {/* Hero Section */}
        <motion.section
          className="relative flex flex-col md:flex-row items-center justify-center bg-cover bg-center pt-20"
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
          <div className="absolute inset-0 bg-black bg-opacity-40" />

          {/* Content */}
          <div className="relative items-center justify-between px-6 py-6 md:px-12 lg:px-20">
            <div className="text-white md:text-left space-y-6">
              <h3 className="text-3xl md:text-5xl font-bold text-center">
                Projects
              </h3>
              <h1 className="text-xl md:text-3xl text-center">
                Home / <span className="text-green">Projects</span>
              </h1>
            </div>
          </div>
        </motion.section>

        {/* Projects Section */}
        <section className="py-12 md:py-16 lg:py-20">
          <div className="mx-auto px-6 md:px-12 lg:px-20 py-8">
            {/* Project Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {PortfolioProjects.map((project, index) => (
                <div
                  key={index}
                  className="bg-black2 shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <Image
                    src={project.pictures}
                    alt={project.name}
                    className="w-full h-96 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800">
                      {project.name}
                    </h3>
                    <p className="text-gray-600 mt-2">{project.description}</p>
                    <button
                      onClick={() => navigateToDetails(project)}
                      className="block mt-4 px-4 py-2 bg-green text-black font-bold text-center rounded-lg hover:bg-green-600"
                    >
                      See More
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </Header>
  );
};

export default ProjectsPage;
