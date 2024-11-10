import Image from "next/image";
import "./about.css";
import about from "../../public/file.png";
function About() {
  return (
    
       <section id="about" className="about">
      <div className="img-about">
        <Image
          src={about}
          alt="About Us Image"
          width={400}
          height={400}
          className="roundedImage"
        />
        <div className="info-about info-about1">
          <span>1+</span>
          <p>Experience</p>
        </div>
        <div className="info-about info-about2">
          <span>60+</span>
          <p>Projects</p>
        </div>
        <div className="info-about info-about3">
          <span>400+</span>
          <p>Happy Clients</p>
        </div>
      </div>
      <div className="about-content">
        <h2>About Me</h2>
        <h1>A Story of Good</h1>
        <h4>
        I am a web developer with 1 years of experience in creating modern responsive, and user-focused websites. Skilled in leveraging the latest technologies to deliver seamless and efficient web experiences I am dedicated to building high-quality functional, and visually appealing applications that meet user needs and enhance online presence.  
        Welcome to my portfolio! I'm excited to have you here. As you scroll down, you'll get an in-depth look at my skills, the exciting projects I've worked on, and how I can collaborate with you to bring your creative ideas to life. Whether it's developing responsive, visually appealing websites or crafting innovative digital experiences, I take pride in combining creativity with technical expertise. Explore my journey, see the impact of my work, and learn how I can help turn your vision into reality with solutions tailored to your unique needs. Let's build something amazing together!
              </h4>
        <div className="btn-box">
          <a
            target="blank"
            href="https://www.linkedin.com/in/zakia-bashir-367b41254/"
            className="btn"
          >
            Read More!
          </a>
        </div>
      </div>
      
    </section>
  );
}

export default About;
