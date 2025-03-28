import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from '../uploads/logo.png';
import { Link as ScrollLink } from "react-scroll";
import { FaFacebookF, FaInstagram, FaEnvelope, FaWhatsapp, FaPhone } from 'react-icons/fa';

const Header = () => {
  // State to track the active section
  const [activeLink, setActiveLink] = useState("home");

  // Function to handle active link change
  const handleLinkClick = (link) => {
    setActiveLink(link);
    // Scroll to top if Home is clicked
    if (link === "home") {
      window.scrollTo({
        top: 0,
        behavior: "smooth", // Smooth scroll to the top
      });
    }
  };

  // UseEffect to track scroll position and reset active link
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'courses', 'program', 'success', 'contact'];
      const scrollPosition = window.scrollY;

      // Reset active link when scrolling
      if (scrollPosition === 0) {
        setActiveLink("home");
      } else {
        sections.forEach((section) => {
          const element = document.getElementById(section);
          if (element && element.offsetTop <= scrollPosition + 50) {
            setActiveLink(section);
          }
        });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Bar */}
      <div className="fixed-top">
        <div className="bg-info text-white py-3">
          <div className="container">
            <div className="row align-items-center">
              {/* Left Side - Contact Info */}
              <div className="col-12 col-md-6 text-center text-md-start mb-2 mb-md-0">
                <a href="tel:+919800000000" className="me-3 text-white d-inline-flex align-items-center" style={{ textDecoration: "none" }}>
                  <FaPhone className="me-1 rotate-icon" style={{ color: "#fff", width: '20px', height: '20px' }} />
                  +91 9800000000
                </a>

                <a href="mailto:abcd@gmail.com" className="text-white d-inline-flex align-items-center" style={{ textDecoration: "none" }}>
                  <FaEnvelope className="me-1" style={{ color: "#fff", width: '20px', height: '20px' }} />
                  abcd@gmail.com
                </a>
              </div>

              {/* Right Side - Social Media Icons */}
              {/* <div className="col-12 col-md-6 text-center text-md-end">
                <span>Follow us &nbsp;</span>
                <a href="#" className="text-dark d-inline-flex align-items-center justify-content-center rounded-circle shadow me-2" style={{ width: '30px', height: '30px', backgroundColor: '#fff' }}>
                  <FaFacebookF style={{ height: '0.8rem' }} />
                </a>
                <a href="#" className="text-dark d-inline-flex align-items-center justify-content-center rounded-circle shadow me-2" style={{ width: '30px', height: '30px', backgroundColor: '#fff' }}>
                  <FaInstagram style={{ height: '0.8rem' }} />
                </a>
                <a href="mailto:sales@modearchsteel.com" className="text-dark d-inline-flex align-items-center justify-content-center rounded-circle shadow me-2" style={{ width: '30px', height: '30px', backgroundColor: '#fff' }}>
                  <FaEnvelope style={{ height: '0.8rem' }} />
                </a>
                <a href="#" className="text-dark d-inline-flex align-items-center justify-content-center rounded-circle shadow" style={{ width: '30px', height: '30px', backgroundColor: '#fff' }}>
                  <FaWhatsapp style={{ height: '0.8rem' }} />
                </a>
              </div> */}
            </div>
          </div>
        </div>

        {/* Navbar */}
        <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
          <div className="container">
            <Link className="navbar-brand" to="/" onClick={() => handleLinkClick("home")}>
              <img src={Logo} alt="Skillverse Foundation" height="60" />
            </Link>
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
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto align-items-center">
                <li className="nav-item">
                  <Link
                    className={`nav-link ${activeLink === "home" ? "text-warning fw-bold" : ""}`}
                    to="/"
                    onClick={() => handleLinkClick("home")}
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <ScrollLink
                    className={`nav-link ${activeLink === "about" ? "" : ""}`}
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={-120}
                    duration={500}
                    onSetActive={() => setActiveLink("about")}
                  >
                    Who We Are
                  </ScrollLink>
                </li>
                <li className="nav-item">
                  <ScrollLink
                    className={`nav-link ${activeLink === "courses" ? "" : ""}`}
                    to="courses"
                    spy={true}
                    smooth={true}
                    offset={-120}
                    duration={500}
                    onSetActive={() => setActiveLink("courses")}
                  >
                    What We Do
                  </ScrollLink>
                </li>
                <li className="nav-item">
                  <ScrollLink
                    className={`nav-link ${activeLink === "program" ? "" : ""}`}
                    to="program"
                    spy={true}
                    smooth={true}
                    offset={-105}
                    duration={500}
                    onSetActive={() => setActiveLink("program")}
                  >
                    Our Initiatives
                  </ScrollLink>
                </li>
                <li className="nav-item">
                  <ScrollLink
                    className={`nav-link ${activeLink === "success" ? "" : ""}`}
                    to="success"
                    spy={true}
                    smooth={true}
                    offset={-128}
                    duration={500}
                    onSetActive={() => setActiveLink("success")}
                  >
                    What We Aim
                  </ScrollLink>
                </li>
                {/* <li className="nav-item">
                  <ScrollLink
                    className={`btn btn-warning text-white px-3 ${activeLink === "contact" ? "text-warning" : ""}`}
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    onSetActive={() => setActiveLink("contact")}
                  >
                    Contact Us
                  </ScrollLink>
                </li> */}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
