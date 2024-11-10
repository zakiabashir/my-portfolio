

"use client";
import { useState } from "react";
import { MdMenu } from "react-icons/md";
import "./header.css";
import Image from "next/image";
import zlogo from "@/public/zlogo.jpeg"
import Link from "next/link";
function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className={`header ${isOpen ? "open" : ""}`}>
      <div className="logo">
      <Image src={zlogo} alt="qmsh" width={40} height={40} className="rounded-full align-center"/>
      <span>Z</span>akia
      </div>
      <ul className={`navlist ${isOpen ? "open" : ""}`}>
        <li>
          <Link href="/" onClick={closeMenu}>Home</Link>
        </li>
        <li>
          <Link href="/about" onClick={closeMenu}>About</Link>
        </li>
        <li>
          <Link href="/service" onClick={closeMenu}>Service</Link> {/* Updated link */}
        </li><li>
          <Link href="/porfolio" onClick={closeMenu}>Portfolio</Link>
        </li>
        <li>
          <Link href="/skills" onClick={closeMenu}>Skills</Link> {/* Updated link */}
        </li>
        <li>
          <Link href="/contact" onClick={closeMenu}>Contact</Link>
        </li>
      </ul>
      <div id="menu-icon" onClick={toggleMenu}>
        <MdMenu />
      </div>
    </header>
  );
}

export default Header;