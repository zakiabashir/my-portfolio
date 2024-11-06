import "./portfolio.css";
import Link from "next/link";
import Image from "next/image";
import figma from "../../public/figma.png"
import { FaExternalLinkAlt } from "react-icons/fa";
import html from "../../public/html.png"
import food from "../../public/food.jpg"
import personal from "../../public/personal.png"

function Portfolio() {
  return (
    <section id="portfolio" className="portfolio">
      <div className="main-text">
        <span> I am ready to assist you with anything you need.</span>
        <h3>My Latest Projects</h3>
      </div>
      <div className="portfolio-gallery">
        <div className="port-box">
          <div className="port-img">
          <Image
              src={html} // Use relative path directly
              alt="htmlcss portfolio project"
              width={500}
              height={400}
            />
          </div>
          <div className="port-content">
            <h3>website Designer</h3>
            <p>
              I am a website designer focused on creating clean, modern, and
              responsive designs that provide a seamless user experience on any
              device
            </p>
            <Link href="https://react-website-pharmeas4.netlify.app/">
              <FaExternalLinkAlt />
            </Link>
          </div>
        </div>

        <div className="port-box">
          <div className="port-img">
            <Image src={food} alt="nextjs food web project" width={500} height={600} />
          </div>
          <div className="port-content">
            <h3> Food website</h3>
            <p>
              I am a UI/UX designer dedicated to crafting intuitive and engaging
              user experiences with clean, modern, and responsive designs.
            </p>
            <Link href="https://alishba526-alishba526-alishba526-q2mil-alishbarehman-s-projects.vercel.app/">
              <FaExternalLinkAlt />
            </Link>
          </div>
        </div>

        <div className="port-box">
          <div className="port-img">
            <Image
              src={figma}
              alt="figma web portfolio"
              width={500}
              height={700}
            />
          </div>
          <div className="port-content">
            <h3>Figma website</h3>
            <p>
              My Figmawebsite highlights my work as a web developer, featuring
              responsive and user-friendly websites.
            </p>
            <Link href="https://alishbarehmanportfolio-pegw.vercel.app/">
              <FaExternalLinkAlt />
            </Link>
          </div>
        </div>

        <div className="port-box">
          <div className="port-img">
            <Image
              src={personal}
              alt="personal portfolio project"
              width={500}
              height={400}
            />
          </div>
          <div className="port-content">
            <h3>RESTAURANT</h3>
            <p>
              I design restaurant websites that showcase menus, ambiance, and
              services, providing a user-friendly experience that helps attract
              customers and enhance online reservations
            </p>
            <Link href="https://figmafirstrestuarantwebsite.vercel.app/">
              <FaExternalLinkAlt />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;