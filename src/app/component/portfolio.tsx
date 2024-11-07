"use client"
import "./portfolio.css";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import { useState, useEffect } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

import figma from "../../public/figma.png";
import html from "../../public/html.png";
import food from "../../public/food.jpg";
import personal from "../../public/personal.png";

// Define the Project type
type Project = {
  images: StaticImageData[]; // Assuming you're using StaticImageData for Next.js images
  title: string;
  description: string;
  link: string;
};

// Arrays of images for each project
const projects: Project[] = [
  {
    images: [html, figma],
    title: "Website Designer",
    description:
      "I am a website designer focused on creating clean, modern, and responsive designs that provide a seamless user experience on any device.",
    link: "https://html-css-final-assign.vercel.app",
  },
  {
    images: [food, figma],
    title: "Food Website",
    description:
      "I am a UI/UX designer dedicated to crafting intuitive and engaging user experiences with clean, modern, and responsive designs.",
    link: "https://food-delivery-next-js-one.vercel.app",
  },
  {
    images: [figma, personal],
    title: "Figma Website",
    description:
      "My Figma website highlights my work as a web developer, featuring responsive and user-friendly websites.",
    link: "figma-web-nextjs.vercel.ap",
  },
  {
    images: [personal, food],
    title: "personal",
    description:
      "I design restaurant websites that showcase menus, ambiance, and services, providing a user-friendly experience that helps attract customers and enhance online reservations.",
    link: "https://zakia-portfolio.vercel.app",
  },
];

function Portfolio() {
  return (
    <section id="portfolio" className="portfolio">
      <div className="main-text">
        <span>I am ready to assist you with anything you need.</span>
        <h3>My Latest Projects</h3>
      </div>
      <div className="logo1">
        <ul>
          <li>Figma</li>
          <li>F00d-web</li>
          <li>Personal-portfolio</li>
          <li>HTML-CSS</li>
        </ul>
      </div>
      <div className="portfolio-gallery">
        {projects.map((project, index) => (
          <ProjectBox key={index} project={project} />
        ))}
      </div>
    </section>
  );
}

function ProjectBox({ project }: { project: Project }) {
  const [currentImage, setCurrentImage] = useState(0);

  // Cycle images every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % project.images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Clear interval on unmount
  }, [project.images.length]);

  return (
    <div className="port-box">
      <div className="port-img">
        <Image
          src={project.images[currentImage]}
          alt={project.title}
          width={500}
          height={400}
        />
      </div>
      <div className="port-content">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <Link href={project.link}>
          <FaExternalLinkAlt />
        </Link>
      </div>
    </div>
  );
}

export default Portfolio;
