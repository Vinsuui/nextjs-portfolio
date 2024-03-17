"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>React</li>
        <li>JavaScript</li>
        <li>Ionic</li>
        <li>NextJS</li>
        <li>Adobe Photoshop</li>
        <li>Adobe Illustrator</li>
        <li>Figma</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>City College of Calamba - Bachelor of Science in Computer Science</li>
        <li>STI College - Calamba</li>
      </ul>
    ),
  },
  {
    title: "Work Experience",
    id: "workexperience",
    content: (
      <ul className="list-disc pl-2">
        <li>LegionTech Inc. - Intern Software Developer - September 2022 - Present</li>
        <li>Freelance Graphics Designer - Armada - June 2021 - September 2021 </li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-black" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-black mb-4">About Me</h2>
          <p className="text-black lg:text-lg">
            I am a Frontend Developer with a passion for creating
            interactive and responsive web applications. I have experience
            working with JavaScript, React, NextJS, Ionic, HTML, CSS, and Git. I am a quick learner and I am always
            looking to expand my knowledge and skill set.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("workexperience")}
              active={tab === "workexperience"}
            >
              {" "}
              Work Experience{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
