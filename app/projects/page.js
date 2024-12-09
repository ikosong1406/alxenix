"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Header from "../components/Header";
import cargif from "../images/download.gif";
import PortfolioProjects from "../components/Projects.json";

// Animation variants for fade-in effect
const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const ProjectsPage = () => {
  const [modal, setModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
    setSelectedProject(null);
  };

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
                Projects
              </h3>
              <h1 className="text-xl md:text-3xl text-center">
                Home / <span className="text-green">Projects</span>
              </h1>
            </div>
          </div>
        </motion.section>

        {/* Projects Section */}
        <motion.section
          className="py-12 md:py-16 lg:py-20"
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="mx-auto px-6 md:px-12 lg:px-20 py-8">
            <div className="text-center mb-10">
              <h2 className="text-xl font-bold text-gray-800">My Portfolio</h2>
              <p className="text-2xl text-gray-600 mt-2">
                Let&apos;s have a look at{" "}
                <span className="text-green">My Portfolio</span>
              </p>
            </div>

            {/* Project Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {PortfolioProjects.map((project, index) => (
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
                    <button
                      onClick={() => openModal(project)}
                      className="block mt-4 px-4 py-2 bg-green text-black font-bold text-center rounded-lg hover:bg-green-600"
                    >
                      See More
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {modal && selectedProject && (
          <div
            className="fixed inset-0 z-[105] bg-black bg-opacity-70 flex items-center justify-center"
            onClick={closeModal} // Close modal when clicking the overlay
          >
            <div
              className="relative bg-black rounded-lg shadow-lg w-full max-w-4xl h-auto md:h-auto"
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
            >
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-green hover:text-gray-800 text-3xl"
              >
                &times;
              </button>

              {/* Modal Content */}
              <div className="p-6">
                {/* Project Picture */}
                <img
                  src={selectedProject.pictures[0]}
                  alt={selectedProject.name}
                  className="w-full h-64 object-cover rounded-lg"
                />

                {/* Project Details */}
                <div className="mt-6 flex flex-col md:flex-row gap-6">
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-green">
                      {selectedProject.name}
                    </h2>
                    <p className="text-gray-600 mt-2">
                      {selectedProject.description}
                    </p>
                  </div>
                  <div className="flex-1 bg-green text-black p-4 rounded-lg">
                    <strong>Category:</strong>
                    <p>{selectedProject.category}</p>
                    <strong>Duration:</strong>
                    <p>{selectedProject.duration}</p>
                    <strong>Client:</strong>
                    <p>{selectedProject.client}</p>
                    <strong>Link:</strong>{" "}
                    <p>
                      <a
                        href={selectedProject.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 underline"
                      >
                        View Project
                      </a>
                    </p>
                  </div>
                </div>

                {/* Additional Details */}
                <div>
                  <h3 className="text-lg font-semibold">Problem:</h3>
                  <p className="text-gray-600">{selectedProject.problem}</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Solution:</h3>
                  <p className="text-gray-600">{selectedProject.solution}</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Technologies:</h3>
                  <ul className="list-disc list-inside text-gray-600">
                    {selectedProject.technologies.map((tech, i) => (
                      <li key={i}>{tech}</li>
                    ))}
                  </ul>
                </div>

                {/* Other Pictures */}
                <div className="grid grid-cols-2 gap-4 mt-4">
                  {selectedProject.pictures.slice(1).map((pic, i) => (
                    <img
                      key={i}
                      src={pic}
                      alt={`Project ${i}`}
                      className="w-full h-32 object-cover rounded-lg"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </Header>
  );
};

export default ProjectsPage;
