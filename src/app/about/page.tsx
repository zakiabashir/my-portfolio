import Image from "next/image";
import "./about.css";
import about from "../../public/c1.jpeg";
import a from "../../public/c4.jpeg";
import b from "../../public/c3.jpeg";
import c from "../../public/c2.jpeg";


function About() {
  return (
    
    <section id="about" className="about">
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
          <p>Guarantee</p>
        </div>
        <div className="info-about info-about2">
          <span>60+</span>
          <p>Designs</p>
        </div>
        <div className="info-about info-about3">
          <span>400+</span>
          <p>Happy Clients</p>
        </div>
      </div>
      <div className="about-content">
        <h2>About Us</h2>
        <h4>
         Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius sequi fuga dolorem autem a cumque impedit, itaque dignissimos nulla quos eum rerum quisquam blanditiis iure, eligendi ducimus veniam perspiciatis nemo! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe fugit neque omnis nulla, perferendis officiis, modi aliquid voluptate hic maiores...
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
      <div className="img-about">
        <Image
          src={a}
          alt="About Us Image 2"
          width={400}
          height={400}
          className="roundedImage"
        />
        <div className="info-about info-about1">
          <span>2+</span>
          <p>Guarantee</p>
        </div>
        <div className="info-about info-about2">
          <span>70+</span>
          <p>Designs</p>
        </div>
        <div className="info-about info-about3">
          <span>500+</span>
          <p>Happy Clients</p>
        </div>
      </div>
    </section>
      <div className="img-about">
        <Image
          src={b}
          alt="About Us Image"
          width={400}
          height={400}
          className="roundedImage"
        />
        <div className="info-about info-about1">
          <span>1+</span>
          <p>Guarantee</p>
        </div>
        <div className="info-about info-about2">
          <span>60+</span>
          <p>Designs</p>
        </div>
        <div className="info-about info-about3">
          <span>400+</span>
          <p>Happy Clients</p>
        </div>
      </div>
      <div className="about-content">
        <h2>About Us</h2>
        <h4>
         Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius sequi fuga dolorem autem a cumque impedit, itaque dignissimos nulla quos eum rerum quisquam blanditiis iure, eligendi ducimus veniam perspiciatis nemo! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe fugit neque omnis nulla, perferendis officiis, modi aliquid voluptate hic maiores...
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
      <div className="img-about">
        <Image
          src={c}
          alt="About Us Image 2"
          width={400}
          height={400}
          className="roundedImage"
        />
        <div className="info-about info-about1">
          <span>2+</span>
          <p>Guarantee</p>
        </div>
        <div className="info-about info-about2">
          <span>70+</span>
          <p>Designs</p>
        </div>
        <div className="info-about info-about3">
          <span>500+</span>
          <p>Happy Clients</p>
        </div>
      </div>
    </section>
  );
}

export default About;
