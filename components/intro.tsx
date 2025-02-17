"use client";

import Image from "next/image";
import React from "react";
import profileImg5 from "@/public/profile.jpg";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import { CVLINK } from "@/lib/data";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setTimeOfLastClick, setActiveSection } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-28"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.2, type: "tween" }}
          >
            <Image
              src={profileImg5}
              alt="Colin Yang"
              width={192}
              height={192}
              priority
              className="h-24 w-24 rounded-full border-[0.35rem] border-white object-cover shadow-xl hover:scale-150 transition"
            />
          </motion.div>

          <motion.span
            className="absolute bottom-0 right-0 text-3xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.7,
              type: "spring",
              stiffness: 125,
              delay: 0.1,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>

      <motion.h1
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-10 mt-4 px-4 text-3xl font-medium !leading-[1.5] sm:text-2xl"
      >
        Hi, I'm Colin. I’m a dedicated and ambitious <span className="text-blue-500">Computer Science</span> student with a strong foundation in <span className="text-green-500">full-stack development</span>, <span className="text-purple-500">machine learning</span>, and <span className="text-orange-500">cloud technologies</span>.
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
      >

        <Link
          href="/resume.pdf"
          download
          target="_blank"
          className="group bg-black text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition border border-black/10"
        >
          Download CV{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition cursor-pointer" />
        </Link>

        <div className="flex gap-2">
          <Link
            href="https://www.linkedin.com/in/colin-y-yang/"
            target="_blank"
            className="bg-white p-4 flex items-center gap-2 rounded-full text-gray-700 focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition border border-black/10"
          >
            <BsLinkedin />
          </Link>

          <Link
            href="https://github.com/GentleOtaku"
            target="_blank"
            className="bg-white p-4 flex items-center gap-2 rounded-full text-gray-700 text-[1.35rem] focus:scale-[1.15] hover:text-gray-950 hover:scale-[1.15] active:scale-105 transition border border-black/10"
          >
            <FaGithubSquare />
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
