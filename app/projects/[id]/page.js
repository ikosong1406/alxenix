"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import caseStudies from "../../components/Projects.js"; // Renamed import
import Image from "next/image";
import { motion } from "framer-motion";
import Header from "../../components/Header";
import cargif from "../../images/download.gif";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const CaseStudyDetail = () => {
  const { id } = useParams(); // Dynamic route parameter
  const [caseStudy, setCaseStudy] = useState(null);

  useEffect(() => {
    if (id) {
      // Find case study using the new name
      const foundCaseStudy = caseStudies.find(
        (study) => study.id === parseInt(id, 10)
      );
      setCaseStudy(foundCaseStudy || null); // Set case study or null if not found
    }
  }, [id]);

  if (!caseStudy) {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex justify-center items-center">
        <div className="text-xl">Case Study not found.</div>
      </div>
    );
  }

  // Helper for Technology stack display
  const renderStack = (stack) => {
    if (!stack || Object.keys(stack).length === 0) return null;
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4 p-4 border border-gray-700 rounded-lg bg-gray-800">
        {Object.entries(stack).map(([key, value]) => (
          <div key={key}>
            <strong className="text-green capitalize">
              {" "}
              {/* GREEN ACCENT */}
              {key.replace(/([A-Z])/g, " $1").trim()}:
            </strong>
            <p className="text-gray-300 text-sm">{value}</p>
          </div>
        ))}
      </div>
    );
  };

  const {
    name,
    description,
    category,
    client,
    duration,
    link,
    pictures,
    challenge,
    solution,
    projectScope,
    keyMetrics,
    stackDetails,
    process,
  } = caseStudy;

  return (
    <Header>
      <div className="bg-gray-900 min-h-screen text-white">
        {/* Hero Section */}
        <motion.section
          className="relative flex flex-col items-center justify-center pt-32 h-64 overflow-hidden"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          {/* Background GIF */}
          <Image
            src={cargif}
            alt="Background GIF"
            className="absolute inset-0 w-full h-full object-cover opacity-10"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gray-900 bg-opacity-80" />

          {/* Content */}
          <div className="relative text-center px-6 py-6 md:px-12 lg:px-20">
            <h3 className="text-xl font-medium text-green uppercase tracking-widest">
              {" "}
              {/* GREEN ACCENT */}
              Case Study Overview
            </h3>
            <h1 className="text-4xl md:text-6xl font-extrabold mt-2">{name}</h1>
            <p className="text-gray-400 mt-2">
              <span className="font-bold">{projectScope}</span>
            </p>
          </div>
        </motion.section>

        {/* --- Main Content --- */}
        <div className="container mx-auto px-6 py-16">
          {/* Main Image */}
          {pictures && (
            <Image
              src={pictures}
              alt={`${name} screenshot`}
              className="w-full h-auto max-h-96 object-cover rounded-xl shadow-2xl border border-gray-700"
              priority
            />
          )}

          {/* --- Summary / Contract Details --- */}
          <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column: Description & Narrative */}
            <div className="lg:col-span-2 space-y-8">
              <motion.div variants={fadeInUp}>
                <h2 className="text-3xl font-bold text-green border-b border-gray-700 pb-2">
                  {" "}
                  {/* GREEN ACCENT */}
                  Client Challenge ({client})
                </h2>
                <p className="text-gray-300 mt-4 text-lg leading-relaxed">
                  {challenge}
                </p>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <h2 className="text-3xl font-bold text-green border-b border-gray-700 pb-2">
                  {" "}
                  {/* GREEN ACCENT */}
                  Solution Delivered
                </h2>
                <p className="text-gray-300 mt-4 text-lg leading-relaxed">
                  {solution}
                </p>
              </motion.div>
            </div>

            {/* Right Column: Key Details Box */}
            <motion.div
              className="bg-gray-800 p-8 rounded-xl shadow-2xl border border-green/50"
              variants={fadeInUp}
            >
              <h3 className="text-2xl font-bold mb-4 border-b border-gray-700 pb-2">
                Contract Snapshot
              </h3>
              <div className="space-y-4 text-gray-300">
                <p>
                  <strong className="text-white block">Client:</strong> {client}
                </p>
                <p>
                  <strong className="text-white block">Category:</strong>{" "}
                  {category}
                </p>
                <p>
                  <strong className="text-white block">Duration:</strong>{" "}
                  {duration}
                </p>
                <p>
                  <strong className="text-white block">Process:</strong>{" "}
                  {process}
                </p>
                <p>
                  <strong className="text-white block">Live URL:</strong>
                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green underline hover:text-white transition-colors block"
                  >
                    {link}
                  </a>
                </p>
              </div>
            </motion.div>
          </div>

          {/* --- Technical Stack Section --- */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold mb-4 text-green">
              {" "}
              {/* GREEN ACCENT */}
              Technical Stack Overview
            </h2>
            <p className="text-gray-400 mb-6">
              A breakdown of the core technologies used across the
              multi-platform solution:
            </p>
            {renderStack(stackDetails)}
          </div>

          {/* --- Key Metrics Section --- */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold mb-4 text-green">
              Contract Impact & Metrics
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {Array.isArray(keyMetrics) &&
                keyMetrics.map((metric, index) => (
                  <motion.div
                    key={index}
                    className="bg-gray-800 p-6 rounded-lg shadow-lg border-l-4 border-green"
                    variants={fadeInUp}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 0.2 + index * 0.1 }}
                  >
                    <p className="text-xl font-semibold text-white">{metric}</p>
                  </motion.div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </Header>
  );
};

export default CaseStudyDetail;
