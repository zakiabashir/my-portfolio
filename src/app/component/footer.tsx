import './footer.css'
import Image from 'next/image';
import zlogo from '../../public/zlogo.jpeg';
import { FaFacebook,  FaLinkedin, FaYoutube, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

function Footer() {
    return (
        <footer>
            <div className="container">
                {/* Left Side: Logo and About Section */}
                <div className="footer-left">
                    <Image
                        src={zlogo}
                        alt="Description of image"
                        width={100}
                        height={100} 
                    />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem nesciunt dicta, voluptatum voluptas error, expedita autem dolores adipisci, aspernatur unde laudantium earum accusamus.</p>
                    <p>© QMSH 2024</p>
                </div>

                {/* Right Side: Contact Info and Social Links */}
                <div className="footer-center">
                    <h4>CONTACTS</h4>
                    <ul>
                        <li><FaPhoneAlt /> ++92(300) 000-0000</li>
                        <li><FaPhoneAlt /> +92(300) 000-0000</li>
                        <li><FaEnvelope /> nshafeys0@gmail.com</li>
                    </ul>
                    
                </div>
                <div className="footer-right">
                    
                    <h4>FOLLOW US</h4>
                    <div className="fsocial-icons">
                        <a href="#"><FaFacebook /></a>
                        <a href="#"><FaLinkedin /></a>
                        <a href="#"><FaYoutube /></a>
                    </div>
                    
                </div>
            </div>
        </footer>
    );
}

export default Footer;
