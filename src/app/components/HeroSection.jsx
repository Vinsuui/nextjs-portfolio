"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-[#00A8CC] mb-4 text-2xl sm:text-3xl lg:text-7xl lg:leading-normal font-extrabold">
            <span className="text-black bg-clip-text">
              Hello, I&apos;m{" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "Vince",
                1000,
                "A Web Developer",
                1000,

                "A UI/UX Designer",
                1000,
                "A Graphics Designer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-[#A1A1A1] sm:text-lg mb-6 lg:text-xl">
            4th year Computer Science Student working as an Intern <br/>Software Developer at LegionTech Inc. and Freelance Graphics Designer
          </p>
          <div>
            <Link
              href="/#contact"
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-[#00A8CC] text-white"
            >
              Hire Me
            </Link>
            <Link
              href="/"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full border-[#00A8CC]"
            >
              <span className="block hover:bg-[#00A8CC]-800 rounded-full px-5 py-2">
                Download CV
              </span>
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full bg-[#00A8CC] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative overflow-hidden">
  <Image
    src="/images/vince_image.png"
    alt="hero image"
    className="object-cover w-full h-full"
    layout="fill"
  />
</div>

        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
