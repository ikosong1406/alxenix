"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import projects from "../../components/Projects.js";
import Image from "next/image";
import { motion } from "framer-motion";
import Header from "../../components/Header";
import cargif from "../../images/download.gif";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const ProjectDetails = () => {
  const { id } = useParams(); // Dynamic route parameter
  const [project, setProject] = useState(null);

  useEffect(() => {
    if (id) {
      // Ensure both are compared as numbers
      const foundProject = projects.find(
        (project) => project.id === parseInt(id, 10)
      );
      setProject(foundProject || null); // Set project or null if not found
    }
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen bg-black text-white flex justify-center items-center">
        <h2>Project not found</h2>
      </div>
    );
  }

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
                Projects Details
              </h3>
              <h1 className="text-xl md:text-3xl text-center">
                Home / <span className="text-green">Projects Details</span>
              </h1>
            </div>
          </div>
        </motion.section>

        {/* Main Content */}
        <div className="container mx-auto px-6 py-12">
          {/* Project Main Image */}
          <Image
            src={project.pictures}
            alt={project.name}
            className="w-full h-1/4 object-cover rounded-lg shadow-md"
          />

          {/* Project Details Section */}
          <div>
            {/* Left Section */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-3xl font-bold text-green">
                  {project.name}
                </h2>
                <p className="text-gray-400 mt-4">{project.description}</p>
              </div>

              <div className="bg-green text-black p-6 rounded-lg shadow-md">
                <div>
                  <strong className="text-black">Category:</strong>
                  <p>{project.category}</p>
                </div>
                <div>
                  <strong className="text-black">Duration:</strong>
                  <p>{project.duration}</p>
                </div>
                <div>
                  <strong className="text-black">Client:</strong>
                  <p>{project.client}</p>
                </div>
                <div>
                  <strong className="text-black">Link:</strong>
                  <p>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 underline"
                    >
                      View Project
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Right Section */}
            <div className="">
              <div className="mt-4 space-y-4">
                <div>
                  <strong>Problem:</strong>
                  <p>{project.problem}</p>
                </div>
                <div>
                  <strong>Solution:</strong>
                  <p>{project.solution}</p>
                </div>
                <div>
                  <strong>Technologies:</strong>
                  <ul className="list-disc list-inside">
                    {Array.isArray(project.technologies) &&
                      project.technologies.map((tech, index) => (
                        <li key={index}>{tech}</li>
                      ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Header>
  );
};

export default ProjectDetails;
