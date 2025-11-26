"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Header from "./components/Header";
import cargif from "./images/download.gif";
import PortfolioProjects from "./components/Projects.js";
import Contact from "./components/Contact.js";
import {
  FaWhatsapp,
  FaTwitter,
  FaLinkedin,
  FaCheckCircle,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";
import { FaPenNib } from "react-icons/fa";
import { FaMobile } from "react-icons/fa6";
import { MdWeb } from "react-icons/md";
import { IoGlobeSharp } from "react-icons/io5";

// Animation
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

export default function HomePage() {
  const router = useRouter();
  const goTo = (path) => () => router.push(path);

  return (
    <Header>
      <div className="bg-black text-gray-900">
        {/* HERO */}
        <motion.header
          className="relative overflow-hidden"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <Image
            src={cargif}
            alt="background"
            className="absolute inset-0 w-full h-full object-cover opacity-30"
            priority
          />

          <div className="relative z-10 bg-black/70">
            <div className="container mx-auto px-5 sm:px-8 lg:px-20 py-20 flex flex-col-reverse md:flex-row items-center gap-10">
              {/* Text */}
              <div className="w-full md:w-1/2 text-white">
                <p className="uppercase text-xs tracking-widest text-gray-300 mb-2">
                  Digital Product Studio
                </p>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-4">
                  Alxenix Digital Studio We build fast, scalable digital
                  products.
                </h1>
                <p className="text-gray-300 text-base sm:text-lg mb-6">
                  We partner with startups and enterprises to design, develop,
                  and scale high-performing web and mobile experiences.
                </p>

                <div className="flex flex-col sm:flex-row gap-3">
                  {/* <button
                    onClick={goTo("/contact")}
                    className="bg-green text-black font-semibold px-6 py-3 rounded-lg hover:opacity-90"
                  >
                    Start a Project
                  </button> */}
                  <button
                    onClick={goTo("/projects")}
                    className="border border-gray-400 text-white px-6 py-3 rounded-lg hover:bg-white/10"
                  >
                    View Case Studies
                  </button>
                </div>

                <div className="mt-6 flex items-center gap-6 text-gray-300 text-sm">
                  <span className="flex items-center gap-2">
                    <FaCheckCircle className="text-green" /> End-to-end Delivery
                  </span>
                  <span className="flex items-center gap-2">
                    <FaCheckCircle className="text-green" /> Design-Led Dev
                  </span>
                </div>
              </div>

              {/* Visual Placeholder */}
              {/* <div className="w-full md:w-1/2 flex justify-center md:justify-end">
                <div className="w-72 sm:w-80 md:w-96 h-64 sm:h-72 md:h-80 rounded-2xl bg-gradient-to-br from-green/30 to-black2 shadow-lg" />
              </div> */}
            </div>
          </div>
        </motion.header>

        {/* SERVICES */}
        <motion.section
          className="py-12 md:py-16"
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          viewport={{ once: true }}
        >
          <div className="container mx-auto px-5 sm:px-8 lg:px-20">
            <div className="flex flex-col justify-between gap-8">
              <div className="">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-200 mb-3">
                  What We Do
                </h2>
                <p className="text-gray-400 text-base sm:text-lg">
                  A digital studio delivering modern engineering for ambitious
                  brands web, mobile, backend & design.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
                <ServiceCard
                  icon={<MdWeb />}
                  title="Web Development"
                  description="Next.js, React, fast & scalable."
                />
                <ServiceCard
                  icon={<FaMobile />}
                  title="Mobile Apps"
                  description="Cross-platform with React Native."
                />
                <ServiceCard
                  icon={<IoGlobeSharp />}
                  title="Backend Systems"
                  description="Secure APIs, auth, databases."
                />
                <ServiceCard
                  icon={<FaPenNib />}
                  title="Product Design"
                  description="UX strategy & interface design."
                />
              </div>
            </div>
          </div>
        </motion.section>

        {/* ABOUT (NO PERSONAL IMAGE) */}
        <motion.section
          className="bg-gray-900 py-12 md:py-16"
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
        >
          <div className="container mx-auto px-5 sm:px-8 lg:px-20 flex flex-col md:flex-row items-center gap-10">
            {/* Text */}
            <div className="w-full ">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                About Alxenix Digital Studio
              </h3>
              <p className="text-gray-300 text-base sm:text-lg mb-5">
                A compact digital studio focused on engineering, design, and
                scalable product execution. We deliver production-ready digital
                products fast.
              </p>

              <div className="grid grid-cols-3 gap-5 text-center">
                <MetricCard value="10+" label="Projects" />
                <MetricCard value="6+" label="Industries" />
                <MetricCard value="5+" label="Years" />
              </div>
            </div>
          </div>
        </motion.section>

        {/* CASE STUDIES */}
        <motion.section
          className="py-12 md:py-16"
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
        >
          <div className="container mx-auto px-5 sm:px-8 lg:px-20">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl sm:text-2xl font-bold text-white">
                Selected Case Studies
              </h2>
              <button
                onClick={goTo("/projects")}
                className="text-sm px-4 py-2 border border-gray-500 rounded-lg text-gray-200 hover:bg-white/10"
              >
                View All
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {PortfolioProjects.slice(0, 2).map((project, i) => (
                <article
                  key={i}
                  className="bg-black2 rounded-lg shadow-lg overflow-hidden"
                >
                  <div className="h-44 relative">
                    <Image
                      src={project.pictures}
                      fill
                      alt={project.name}
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-gray-100 text-lg font-semibold">
                      {project.name}
                    </h3>
                    <p className="text-gray-400 mt-2 text-sm line-clamp-3">
                      {project.description}
                    </p>
                    <button
                      onClick={() =>
                        router.push(
                          `/projects/${project.slug || project.id || i}`
                        )
                      }
                      className="mt-4 bg-green text-black px-4 py-2 rounded-md text-sm"
                    >
                      Case Study
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </motion.section>

        {/* TECH STACK */}
        <motion.section
          className="bg-gray-100 py-12 md:py-16"
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
        >
          <div className="container mx-auto px-5 sm:px-8 lg:px-20">
            <h2 className="text-2xl font-bold text-gray-700 mb-4">
              Tools & Technologies
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                "React",
                "Next.js",
                "Tailwind",
                "Node.js",
                "Express",
                "MongoDB",
                "Git",
                "Figma",
              ].map((t) => (
                <div
                  key={t}
                  className="bg-green p-4 rounded-lg shadow text-center font-semibold text-black"
                >
                  {t}
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* CTA */}
        <motion.section
          className="py-12 md:py-16 bg-gradient-to-r from-black to-gray-800"
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
        >
          <Contact />
        </motion.section>
      </div>
    </Header>
  );
}

/* Subcomponents */
function ServiceCard({ icon, title, description }) {
  return (
    <div className="bg-black2 rounded-lg p-6 shadow flex flex-col gap-3">
      <div className="text-green text-2xl">{icon}</div>
      <h4 className="text-gray-100 font-semibold">{title}</h4>
      <p className="text-gray-400 text-sm">{description}</p>
    </div>
  );
}

function MetricCard({ value, label }) {
  return (
    <div className="bg-white/10 rounded-lg py-4 flex flex-col items-center">
      <span className="text-green text-xl font-bold">{value}</span>
      <span className="text-gray-300 text-sm mt-1">{label}</span>
    </div>
  );
}
