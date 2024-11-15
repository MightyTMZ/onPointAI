import "./Footer.css";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer bg-dark text-light py-5">
      <div className="container">
        <div className="row">
          {/* Quick Links */}
          <div className="col-md-4 mb-4">
            <h5 className="poppins-bold">Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <Link href="#features" className="text-light">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#pricing" className="text-light">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="#results" className="text-light">
                  See Results
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-light">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-light">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-md-4 mb-4">
            <h5 className="poppins-bold">Contact Us</h5>
            <p>
              Email:{" "}
              <Link href="mailto:info@omniwavenexus.com" className="text-light">
                admin@getonpointai.com
              </Link>
            </p>
            <p>
              Phone:{" "}
              <Link href="tel:+123456789" className="text-light">
                +1 234 567 89
              </Link>
            </p>
            <p>Address: 123 Artificial Intelligence Lane, Toronto</p>
          </div>

          {/* Social Media Icons */}
          <div className="col-md-4 mb-4">
            <h5 className="poppins-bold">Follow Us</h5>
            <div className="social-icons">
              <Link
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-facebook-f"></i>
              </Link>
              <Link
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-twitter"></i>
              </Link>
              <Link
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin-in"></i>
              </Link>
              <Link
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-instagram"></i>
              </Link>
            </div>
          </div>
        </div>

        <hr className="border-light" />

        {/* Copyright */}
        <div className="text-center">
          <p className="mb-0">
            &copy; {new Date().getFullYear()} OnPointAI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
