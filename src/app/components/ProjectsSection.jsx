"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Teleconsult Web App",
    description:
      "A web application designed for teleconsultation, facilitating remote medical consultations between healthcare providers and patients. It provides a platform for virtual appointments, secure messaging, and file sharing, enhancing access to healthcare services remotely.",
    image: "/images/web/teleconsult.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Ordering Platform",
    description: "An online ordering platform tailored for businesses to streamline their ordering process. It offers features such as customizable menus, and order tracking, empowering businesses to efficiently manage orders and enhance customer satisfaction.",
    image: "/images/web/op1.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Virtual Event Platform",
    description: "A comprehensive virtual event platform designed to host online conferences, webinars, and trade shows. It provides interactive features like live streaming, chat rooms, and networking opportunities, offering a seamless and engaging virtual event experience for attendees.",
    image: "/images/web/VEP1.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Bank Portal",
    description: "A user-friendly web portal developed for banking institutions to provide convenient access to banking services. It offers functionalities such as account management, fund transfers, and online banking security features, ensuring a secure and efficient banking experience for customers.",
    image: "/images/UI/bp1.png",
    tag: ["All", "UI/UX"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Health App",
    description: "A health-focused mobile application offering authentication and CRUD (Create, Read, Update, Delete) operations for managing health-related data. It enables users to securely store and manage their health records, track medical appointments, and monitor health metrics for improved wellness management.",
    image: "/images/UI/HealthApp.png",
    tag: ["All", "UI/UX"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Travel App",
    description: "A travel-oriented mobile application designed to assist users in planning and organizing their travel itineraries. It offers features such as destination recommendations, itinerary customization, and travel expense tracking, empowering users to seamlessly navigate their travel experiences.",
    image: "/images/UI/TravelApp1.png",
    tag: ["All", "UI/UX"],
    gitUrl: "/",
    previewUrl: "/",
  },

  {
    id: 7,
    title: "Esports Poster",
    description: "A visually captivating poster designed for esports events, capturing the excitement and energy of competitive gaming. It features dynamic graphics and engaging visuals to promote esports tournaments, attracting participants and spectators to the electrifying world of esports.",
    image: "/images/Graphics/ESPORTSPOSTER1.jpg",
    tag: ["All", "Graphics"],
    gitUrl: "/",
    previewUrl: "/",
  },

  {
    id: 8,
    title: "NBA Poster",
    description: "A captivating poster celebrating the National Basketball Association (NBA) and its iconic players. It showcases the talent and athleticism of NBA stars through striking visuals and captivating imagery, paying tribute to the rich history and legacy of professional basketball.",
    image: "/images/Graphics/FaceOfTheTeam.jpg",
    tag: ["All", "Graphics"],
    gitUrl: "/",
    previewUrl: "/",
  },

  {
    id: 9,
    title: "FoT (NBA)",
    description: 'A creative design project titled "Face of the Team (NBA)" showcasing artwork inspired by NBA teams and players. It features visually stunning graphics and artistic interpretations of NBA franchises, offering a unique perspective on the passion and culture surrounding professional basketball.',
    image: "/images/Graphics/Nbaposter.jpg",
    tag: ["All", "Graphics"],
    gitUrl: "/",
    previewUrl:
      "/https://www.behance.net/gallery/136635973/NBA-FACE-OF-THE-TEAM-2022",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        {/* <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        /> */}
        <ProjectTag
          onClick={handleTagChange}
          name="UI/UX"
          isSelected={tag === "UI/UX"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Graphics"
          isSelected={tag === "Graphics"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
