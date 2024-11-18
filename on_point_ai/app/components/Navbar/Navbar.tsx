import "./Navbar.css";
import "../../fonts/Poppins.css";
import OnPointAI from "../../onpoint_ai-removebg-preview.png";
import BoostrapScripts from "./BoostrapScripts";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
      <div className="container">
        {/* Logo/Brand */}
        <Link className="navbar-brand poppins-bold" href="#home">
          <Image src={OnPointAI} alt="Logo" className="mr-2" height={45} />
          <span className="ml-2 brand-title">&nbsp;&nbsp;&nbsp;ONPOINT AI</span>
        </Link>

        {/* Toggle button for mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto poppins">
            
            <li className="nav-item">
              <Link className="nav-link" href="#features">
                Our Services
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="#Pricing">
                Pricing {/* Tentative for now */}
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="#engineering">
                See Results
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="#events">
                Contact Us
              </Link>
            </li>
            
          </ul>
        </div>
      </div>
      <BoostrapScripts></BoostrapScripts>
    </nav>
  );
};

export default Navbar;
