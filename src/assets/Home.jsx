import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import Header from './Header'
import banner2 from '../uploads/Home_desk.webp'
import banner1 from '../uploads/home1.png'
import about from '../uploads/about.webp'
import Logo from '../uploads/footer_logo.png';
import { FaFacebookF, FaInstagram, FaEnvelope, FaWhatsapp, FaPhone, FaLinkedin, FaBriefcase } from 'react-icons/fa';

import banner1Mobile from '../uploads/mobile-home1.png' 
import banner2Mobile from '../uploads/mobile-home2.webp'  

import { FaHandHoldingHeart } from 'react-icons/fa';
import Carousel from 'react-bootstrap/Carousel';
import elderCareImage1 from '../uploads/mobile-home2.webp';
import elderCareImage2 from '../uploads/whta_we_do.webp';
// import elderCareImage3 from '../uploads/mobile-home2.webp';

import one from '../uploads/1.png'  
import two from '../uploads/2.png'  
import three from '../uploads/3.png'  
import four from '../uploads/4.png' 
import five from '../uploads/5.png' 
import six from '../uploads/6.png' 

import CountUp from "react-countup"
import calendar from "../uploads/women_career.png";
import location from "../uploads/New_tech.png";
import users from "../uploads/startup.png";
import files from "../uploads/internships.png";

import target from '../uploads/target.png' 
import vision from '../uploads/vision.png' 

import team1 from '../uploads/team1.webp';
import team2 from '../uploads/team2.webp';

import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {

    const experts = [
        {
          name: "Sudhir Gorade",
          role: "Director",
          linkedin: "https://www.linkedin.com/in/sudhir-gorade-18b83526/",
          experience: "15+ years",
          qualification: "BE IT | MTech Computer",
          description:
            "A strategic innovator advancing skill development and employability in emerging technologies through industry collaboration.",
          img: team1,
        },
        {
          name: "Sonali Adhav-Gorade",
          role: "Director",
          linkedin: "https://www.linkedin.com/in/sonali-adhav-gorade-648a9a209/",
          experience: "10+ years",
          qualification: "BE IT | ME Computer",
          description:
            "A visionary leader empowering women through tech-driven education, bridging the skills gap for inclusive growth.",
          img: team2,
        },
      ];
    

    useEffect(() => {
        AOS.init({
          duration: 2000, // Animation duration in milliseconds
          once: false, // Whether animation should only happen once
        });
      }, []);

    const stats = [
        { icon: <img src={calendar} alt="Calendar Icon" style={{maxWidth:'60px'}} />, text: "Upskilling Individuals", count: 2014, suffix: "+", bold: true },
        { icon: <img src={location} alt="location" style={{maxWidth:'60px'}} />, text: "Transforming Careers", count: 190, suffix: "+", bold: true },
        { icon: <img src={users} alt="users" style={{maxWidth:'60px'}} />, text: "Incubating Startup", count: 2.5, suffix: "+", bold: true, decimal: true },
        { icon: <img src={files} alt="files" style={{maxWidth:'60px'}} />, text: "Empowering Student", count: 200, suffix: "+", bold: true },
      ];

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
          setIsMobile(window.innerWidth <= 576);  // You can adjust the breakpoint as needed
        };
    
        window.addEventListener('resize', handleResize);
        handleResize();  // Check screen size on initial render
    
        return () => {
          window.removeEventListener('resize', handleResize);
        };
    }, []);

  return (
    <>

        <Header />

        <div id="carouselExampleIndicators" className="carousel slide top-carousel" data-bs-ride="carousel">
            <div className="carousel-indicators">
                {/* <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button> */}
                {/* <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button> */}
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                <img src={isMobile ? banner2Mobile : banner2} className="d-block w-100" alt="..."/>
                </div>
                {/* <div className="carousel-item">
                <img src={isMobile ? banner2Mobile : banner2} className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                <img src={isMobile ? banner1Mobile : banner1} className="d-block w-100" alt="..."/>
                </div> */}
            </div>
            {/* <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button> */}
        </div>

        {/* <div className="container mt-5 text-center">
            <div className="row align-items-center">
                <div className="col-md-6 text-start">
                    <h2><span className="text-warning">WHO</span> <strong>WE ARE</strong></h2>
                    <p>
                        At Skillverse, we are on a mission to bridge the skills gap and empower underserved communities through technology-driven education...
                    </p>
                    <button className="btn btn-outline-warning">More <span>&#10132;</span></button>
                </div>
                <div className="col-md-6">
                    <img src={banner1} alt="Who We Are 1" className="img-fluid m-2" width={120} height={120} />
                </div>
            </div>
            <div className="row mt-5 text-white">
                <div className="col-md-6 p-4 bg-primary rounded">
                    <h3>VISION</h3>
                    <p>
                        We empower students, job seekers, and entrepreneurs with technology-driven skills, hands-on training, and career opportunities...
                    </p>
                </div>
                <div className="col-md-6 p-4 bg-warning rounded text-dark">
                    <h3>MISSION</h3>
                    <ul>
                        <li>Empower 500,000+ individuals with future-ready skills.</li>
                        <li>Create 100,000+ career & business opportunities.</li>
                        <li>Empower 200,000+ women through digital & financial inclusion.</li>
                        <li>Partner with corporates, NGOs & governments for large-scale impact.</li>
                    </ul>
                </div>
            </div>
        </div> */}
        
            {/* About Us */}
        <div className="container about-section py-2 mt-1" id="about">
            <div className="row align-items-center">
                <div className="col-lg-6 d-flex justify-content-center" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="900">
                    <img src={about} alt="Community Support" className="img-fluid rounded"/>
                </div>
                <div className="col-lg-6 mt-4" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="900">
                    <div className="d-flex align-items-center mb-2">
                        <hr className="me-2" style={{ width: '50px', border: '1px solid #000000', opacity:'unset' }} />
                        <h6 className="mt-md-0">WHO WE ARE</h6>
                        {/* text-success */}
                    </div>
                    <h2 className="fw-bold">SkillVerse Foundation</h2>
                    <p className="about-text text-justify">At SkillVerse Foundation, we are committed to transforming lives through technology-driven education and skill development. Our mission is to bridge the gap between education and industry requirements by equipping individuals with future-ready skills that enhance employability, foster innovation, and drive digital empowerment.</p>
                    <p className="about-text text-justify">We believe that technology has the power to create equal opportunities for all, regardless of background or circumstances. Through our initiatives, we provide training in emerging fields such as Artificial Intelligence, Data Science, Data Analytics , and Web Development while also focusing on digital literacy and professional development.</p>
                    <p className="about-text text-justify">Our programs cater to diverse groups, including women returning to the workforce, young professionals, students, and underserved communities, ensuring they gain the knowledge, confidence, and industry exposure needed to succeed in the modern digital economy.</p>
                    <p className="about-text text-justify">At SkillVerse Foundation, we collaborate with industry leaders, educational institutions, and corporate partners to create a sustainable impact. Whether it’s through hands-on internships, mentorship programs, or startup incubation, we empower individuals to thrive in the tech-driven world and unlock new career opportunities.</p>
                    {/* <a href="#" className="btn btn-custom">Learn more</a> */}
                </div>
            </div>
        </div>

            {/* What we do */}
        <div className="container py-4 mt-4" id="courses">
            <div className="row align-items-center">
                <div className="col-lg-6 text-start" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="900">
                    <div className="d-flex align-items-center mb-2">
                        <hr className="me-2" style={{ width: '50px', border: '1px solid #000000', opacity:'unset' }} />
                        <h6 className="mb-0">WHAT WE DO</h6>
                    </div>
                    <h2 className="fw-bold">SkillVerse Foundation Initiatives</h2>
                    <p className="text-muted text-justify">At every step, we are together – especially when they need us the most.</p>
                    <div className="list-group what_we_do" >
                        <div className="list-group-item border-0 d-flex align-items-center">
                            <FaHandHoldingHeart className="text-dark me-2" size={30} /> <strong>Women Career Comeback: Reskilling for IT Excellence</strong>
                        </div>
                        <div className="list-group-item border-0 d-flex align-items-center">
                            <FaHandHoldingHeart className="text-dark me-2" size={30} /> <strong>Tech-Driven Skilling</strong>
                        </div>
                        <div className="list-group-item border-0 d-flex align-items-center">
                            <FaHandHoldingHeart className="text-dark me-2" size={30} /> <strong>Employability Solutions</strong>
                        </div>
                        <div className="list-group-item border-0 d-flex align-items-center">
                            <FaHandHoldingHeart className="text-dark me-2" size={30} /> <strong>Digital Empowerment</strong>
                        </div>
                        <div className="list-group-item border-0 d-flex align-items-center">
                            <FaHandHoldingHeart className="text-dark me-2" size={30} /> <strong>Fostering Innovation</strong>
                        </div>
                        <div className="list-group-item border-0 d-flex align-items-center">
                            <FaHandHoldingHeart className="text-dark me-2" size={30} /> <strong>Career Kickstart: Internship Opportunities for Tech Students</strong>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 mt-4 mt-lg-0">
                    <Carousel controls={false} indicators={false} interval={1000} fade>
                        <Carousel.Item>
                            <img src={elderCareImage1} alt="Elderly Woman" className="img-fluid rounded w-100" style={{ objectFit: 'cover' }} />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src={elderCareImage2} alt="Elderly Woman" className="img-fluid rounded w-100" style={{ objectFit: 'cover' }} />
                        </Carousel.Item>
                        {/* <Carousel.Item>
                            <img src={elderCareImage3} alt="Elderly Woman" className="img-fluid rounded w-100" style={{ objectFit: 'cover' }} />
                        </Carousel.Item> */}
                    </Carousel>
                </div>
            </div>
        </div>

        <div className="container text-center py-3 mt-2 mb-1" id="titlesWithIcon">
            <h2 className="section-heading" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="900">We aim to create a better world for everyone</h2>
            <div className="row g-4 justify-content-center">
                <div className="col-6 col-md-4 col-lg-2" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="900">
                    <div className="icon-box">
                        <img src={one} alt="Women Entrepreneurship"/>
                        <p className='fw-bold'>Women Career Comeback</p>
                    </div>
                </div>
                <div className="col-6 col-md-4 col-lg-2" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="900">
                    <div className="icon-box">
                        <img src={two} alt="Sustainable Livelihoods"/>
                        <p className='fw-bold'>Tech-Driven Skilling</p>
                    </div>
                </div>
                <div className="col-6 col-md-4 col-lg-2" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="900">
                    <div className="icon-box">
                        <img src={three} alt="Tech Driven Skilling"/>
                        <p className='fw-bold'>Employability Solutions</p>
                    </div>
                </div>
                <div className="col-6 col-md-4 col-lg-2" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="900">
                    <div className="icon-box">
                        <img src={four}  alt="Employability Solutions"/>
                        <p className='fw-bold'>Digital Empowerment</p>
                    </div>
                </div>
                <div className="col-6 col-md-4 col-lg-2" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="900">
                    <div className="icon-box">
                        <img src={five}  alt="Digital Empowerment"/>
                        <p className='fw-bold'>Fostering Innovation</p>
                    </div>
                </div>
                <div className="col-6 col-md-4 col-lg-2" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="900">
                    <div className="icon-box">
                        <img src={six}  alt="Fostering Innovation"/>
                        <p className='fw-bold'>Career Kickstart</p>
                    </div>
                </div>
            </div>
        </div>

        <div className="container-fluid py-2 step-container for_desktop" id="program">
            <div className="steps-container">
                {/* <h2 className="fw-bold">Starting your online assessments is as easy as 1-2-3</h2>
                <p> Spark learning by introducing innovative and meaningful remote evaluations. It is simple and stress-free!</p> */}

                <div className="row g-4 mt-4 impactful_row">
                    <div className="col-md-6 impactful_row_col">
                        <h2 className="fw-bold cardsix" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="900">Our Impactful Initiatives</h2>
                        <p className='text-justify' data-aos="fade-up" data-aos-duration="2000" data-aos-delay="900">Our initiatives focus to driving social impact through skill development, digital empowerment, and entrepreneurship support. Our initiatives focus on women’s entrepreneurship, tech-driven skilling, employability solutions, digital empowerment, fostering innovation, and career comebacks. We equip individuals with business skills, digital literacy, and job-ready training to enhance their financial independence and career growth.</p>

                        <div className="step-card" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="900">
                            <span className="step-number step-number2">02</span>
                            <h5 className="step-title">Tech-Driven Skilling</h5>
                            <p className='text-justify'>With rapid advancements, specialized IT skills are essential across industries. This initiative equips individuals with expertise in Web Development, UI/UX Designing, Data Analytics, AWS DevOps, and AI through an industry-driven curriculum. Hands-on learning, real-world projects, career counseling, and mentorship help participants develop job-ready skills. By providing cutting-edge training and placement support, this initiative ensures individuals stay competitive in the evolving job market.</p>
                            {/* <img src="pattern1.png" alt="Pattern"/> */}
                        </div>

                        <div className="step-card mt-4" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="900">
                            <span className="step-number step-number4">04</span>
                            <h5 className="step-title">Digital Empowerment</h5>
                            <p className='text-justify'>Access to technology and digital literacy are vital, yet many communities lack essential skills. This initiative provides training in Web Development, UI/UX Designing, Data Analytics, AWS DevOps, and AI, along with online safety and financial digitalization. Community tech hubs offer free internet access and resources. By improving digital awareness, individuals can safely navigate technology, engage in the digital economy, and enhance their career prospects effectively.</p>
                            {/* <img src="pattern3.png" alt="Pattern"/> */}
                        </div>

                        <div className="step-card mb-4 mt-4" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="900">
                            <span className="step-number step-number6">06</span>
                            <h5 className="step-title">Career Kickstart: Internship Opportunities for Tech Students</h5>
                            <p className='text-justify'>Practical industry experience is crucial for students entering tech careers. This initiative connects them with internships in Web Development, UI/UX Designing, Data Analytics, AWS DevOps, and AI. Project-based learning under industry mentorship enhances skills. Pre-placement training, interview preparation, and workplace exposure ensure students gain hands-on experience, making them job-ready for successful careers in technology.</p>
                        </div>
                    </div>
                    <div className="col-md-6 impactful_row_col" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="900">
                        <div className="step-card">
                            <span className="step-number step-number1">01</span>
                            <h5 className="step-title">Women Career Comeback: Reskilling for IT Excellence</h5>
                            <p className='text-justify'>Many women take career breaks due to personal responsibilities, making it challenging to re-enter the workforce, especially in IT. This initiative helps women restart careers through structured training in Web Development, UI/UX Designing, Data Analytics, AWS DevOps, and AI. It provides mentorship, job placement support, and industry-recognized certifications, empowering women to regain financial independence, boost confidence, and seamlessly relaunch their professional journeys.</p>
                            {/* <img src="pattern2.png" alt="Pattern"/> */}
                        </div>

                        <div className="step-card mt-4" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="900">
                            <span className="step-number step-number3">03</span>
                            <h5 className="step-title">Employability Solutions</h5>
                            <p className='text-justify'>Bridging the gap between education and employer expectations is crucial in today’s job market. This initiative enhances employability through job-readiness training, including soft skills, resume building, and interview preparation. Structured workshops focus on communication, leadership, and workplace etiquette. Collaborations with corporate partners enable direct hiring in fields like Web Development, UI/UX Designing, Data Analytics, AWS DevOps, and AI, ensuring participants transition smoothly into professional roles with confidence.</p>
                            {/* <img src="pattern3.png" alt="Pattern"/> */}
                        </div>

                        <div className="step-card mt-4" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="900">
                            <span className="step-number step-number5">05</span>
                            <h5 className="step-title">Fostering Innovation</h5>
                            <p className='text-justify'>Innovation drives technological growth, and this initiative supports entrepreneurs and startups through mentorship, incubation, and research assistance. Participants gain expert guidance, funding access, and networking opportunities. Hackathons, innovation challenges, and startup programs encourage problem-solving in Web Development, UI/UX Designing, Data Analytics, AWS DevOps, and AI. By fostering creativity and research, this initiative strengthens the startup ecosystem and accelerates tech advancements.</p>
                            {/* <img src="pattern4.png" alt="Pattern"/> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="container-fluid py-2 step-container for_mobile">
            <div className="steps-container">
                <div className="row g-4 mt-4 impactful_row">
                    <div className="col-md-6 impactful_row_col">
                        <h2 className="fw-bold cardsix">Our Impactful Initiatives</h2>
                        <p>Our initiatives focus to driving social impact through skill development, digital empowerment, and entrepreneurship support. Our initiatives focus on women’s entrepreneurship, tech-driven skilling, employability solutions, digital empowerment, fostering innovation, and career comebacks. We equip individuals with business skills, digital literacy, and job-ready training to enhance their financial independence and career growth.</p>

                        <div className="step-card" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="900">
                            <span className="step-number step-number1">01</span>
                            <h5 className="step-title">Women Career Comeback: Reskilling for IT Excellence</h5>
                            <p className='text-justify'>Many women take career breaks due to personal responsibilities, making it challenging to re-enter the workforce, especially in IT. This initiative helps women restart careers through structured training in Web Development, UI/UX Designing, Data Analytics, AWS DevOps, and AI. It provides mentorship, job placement support, and industry-recognized certifications, empowering women to regain financial independence, boost confidence, and seamlessly relaunch their professional journeys.</p>
                            {/* <img src="pattern2.png" alt="Pattern"/> */}
                        </div>
                    </div>
                    <div className="col-md-6 impactful_row_col">
                        <div className="step-card" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="900">
                            <span className="step-number step-number2">02</span>
                            <h5 className="step-title">Tech-Driven Skilling</h5>
                            <p className='text-justify'>With rapid advancements, specialized IT skills are essential across industries. This initiative equips individuals with expertise in Web Development, UI/UX Designing, Data Analytics, AWS DevOps, and AI through an industry-driven curriculum. Hands-on learning, real-world projects, career counseling, and mentorship help participants develop job-ready skills. By providing cutting-edge training and placement support, this initiative ensures individuals stay competitive in the evolving job market.</p>
                            {/* <img src="pattern1.png" alt="Pattern"/> */}
                        </div>
                    </div>
                    <div className="col-md-6 impactful_row_col">
                        <div className="step-card mt-4" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="900">
                            <span className="step-number step-number3">03</span>
                            <h5 className="step-title">Employability Solutions</h5>
                            <p className='text-justify'>Bridging the gap between education and employer expectations is crucial in today’s job market. This initiative enhances employability through job-readiness training, including soft skills, resume building, and interview preparation. Structured workshops focus on communication, leadership, and workplace etiquette. Collaborations with corporate partners enable direct hiring in fields like Web Development, UI/UX Designing, Data Analytics, AWS DevOps, and AI, ensuring participants transition smoothly into professional roles with confidence.</p>
                            {/* <img src="pattern3.png" alt="Pattern"/> */}
                        </div>
                    </div>
                    <div className="col-md-6 impactful_row_col">
                        <div className="step-card mt-4" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="900">
                            <span className="step-number step-number4">04</span>
                            <h5 className="step-title">Digital Empowerment</h5>
                            <p className='text-justify'>Access to technology and digital literacy are vital, yet many communities lack essential skills. This initiative provides training in Web Development, UI/UX Designing, Data Analytics, AWS DevOps, and AI, along with online safety and financial digitalization. Community tech hubs offer free internet access and resources. By improving digital awareness, individuals can safely navigate technology, engage in the digital economy, and enhance their career prospects effectively.</p>
                            {/* <img src="pattern3.png" alt="Pattern"/> */}
                        </div>
                    </div>
                    <div className="col-md-6 impactful_row_col">
                        <div className="step-card mt-4" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="900">
                            <span className="step-number step-number5">05</span>
                            <h5 className="step-title">Fostering Innovation</h5>
                            <p className='text-justify'>Innovation drives technological growth, and this initiative supports entrepreneurs and startups through mentorship, incubation, and research assistance. Participants gain expert guidance, funding access, and networking opportunities. Hackathons, innovation challenges, and startup programs encourage problem-solving in Web Development, UI/UX Designing, Data Analytics, AWS DevOps, and AI. By fostering creativity and research, this initiative strengthens the startup ecosystem and accelerates tech advancements.</p>
                            {/* <img src="pattern4.png" alt="Pattern"/> */}
                        </div>
                    </div>
                    <div className="col-md-6 impactful_row_col">
                        <div className="step-card mb-4 mt-4" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="900">
                            <span className="step-number step-number6">06</span>
                            <h5 className="step-title">Career Kickstart: Internship Opportunities for Tech Students</h5>
                            <p className='text-justify'>Practical industry experience is crucial for students entering tech careers. This initiative connects them with internships in Web Development, UI/UX Designing, Data Analytics, AWS DevOps, and AI. Project-based learning under industry mentorship enhances skills. Pre-placement training, interview preparation, and workplace exposure ensure students gain hands-on experience, making them job-ready for successful careers in technology.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="container-fluid p-4 my-4 vision-mission_bg" id="success">
            <div className="container">
                    <div className="d-flex align-items-center justify-content-center mb-2">
                        <hr className="me-2" style={{ width: '50px', border: '1px solid #000000', opacity:'unset' }} />
                        <h6 className="mb-0">WHAT WE AIM</h6>
                    </div>
                <h2 className='text-center mb-4 fw-bold'>Reskilling, Uplifting, and Empowering the Future of Tomorrow</h2>
                <div className="row justify-content-center">
                    <div className="col-md-6" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="900">
                        <div className="card border-0 p-4 h-100 vision-card">
                            <div className="d-flex align-items-center mb-2">
                                <img src={vision} alt="Mission" style={{ maxWidth: '60px', marginRight: '10px' }} />
                                <h1 className='fw-bold'>Vision</h1>
                            </div>
                            <p className="fs-5 fw-medium text-dark text-justify text-white">
                            To create an inclusive, technology-driven world where individuals, especially women and underserved communities, have equal access to skills and opportunities in the digital economy. We aim to bridge the digital divide, foster innovation, and promote entrepreneurship.
                            </p>
                            <div className="text-end fs-1 opacity-50">
                            ❞
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 mt-4 mt-md-0" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="900">
                        <div className="card border-0 p-4 h-100 mission-card">
                            <div className="d-flex align-items-center mb-2">
                                <img src={target} alt="Mission" style={{ maxWidth: '60px', marginRight: '10px' }} />
                                <h1 className='fw-bold'>Mission</h1>
                            </div>
                            <p className="fs-5 fw-medium text-dark text-justify text-white">
                            To transform lives through specialized training in emerging technologies, career comeback programs, and digital empowerment initiatives. We focus on hands-on learning, mentorship, and corporate collaborations to enhance job readiness and entrepreneurship.
                            </p>
                            <div className="text-end fs-1 opacity-50">
                            ❞
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="container my-4">
            <div className="p-4 counter-card-rounded shadow">
                <div className="row text-center">
                {stats.map((stat, index) => (
                    <div key={index} className="col-md-3 col-6 d-flex align-items-center">
                    <div className="d-flex align-items-center">
                        <span className="fs-3 me-3 counter-icon">{stat.icon}</span>
                        <div className="text-start">
                        {/* <p className="mb-0">{stat.text}</p> */}
                        {/* <h2 className="fw-bold">
                            <CountUp start={0} end={stat.count} duration={5} separator="," decimals={stat.decimal ? 1 : 0} />
                            {stat.suffix}
                        </h2> */}
                        <p className="mb-0 counter_mobile" style={{ fontWeight: 'bold' }}>{stat.text}</p>
                        </div>
                    </div>
                    </div>
                ))}
                </div>
            </div>
        </div>

        <section className="py-5">
            <div className="container text-center">
                <h2 className="fw-bold mb-4" style={{fontSize:'2.5rem'}}>Our Visionary Leaders</h2>
                <div className="row g-4">
                    {experts.map((expert, index) => (
                        <div key={index} className="col-md-6">
                            <div className="d-flex flex-column flex-md-row shadow rounded overflow-hidden h-100" 
                                data-aos="zoom-in" 
                                data-aos-duration="2000" 
                                data-aos-delay="2000">
                                
                                {/* Image Section */}
                                <div className="w-100 w-md-50">
                                    <img
                                        src={expert.img}
                                        alt={expert.name}
                                        className="img-fluid w-100"
                                        style={{ objectFit: "cover", height: "100%" }}
                                    />
                                </div>

                                {/* Info Section */}
                                <div className="w-100 w-md-50 bg-dark text-white d-flex flex-column justify-content-start p-4 text-start h-100">
                                    <p>{expert.description}</p>

                                    {/* Push content to bottom */}
                                    <div className="mt-auto">
                                        {/* Experience & Qualification */}
                                        <div className="mb-2">
                                            <div className="d-flex align-items-center text-light">
                                                <small><strong>Experience:</strong> {expert.experience}</small>
                                            </div>
                                            <div className="d-flex align-items-center text-light mt-1">
                                                <small><strong>Qualification:</strong> {expert.qualification}</small>
                                            </div>
                                        </div>

                                        {/* Name, Role & LinkedIn */}
                                        <div className="name-role d-flex align-items-center justify-content-between">
                                            <div>
                                                <h5 className="mb-0" style={{ color: '#F78E26' }}>{expert.name}</h5>
                                                <small className="text-light">{expert.role}</small>
                                            </div>
                                            <a
                                                href={expert.linkedin}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-primary ms-2"
                                            >
                                                <FaLinkedin size={30} />
                                            </a>
                                        </div>
                                    </div>
                                </div> 
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        <footer className="main-footer">
            <div className="container">
                <div className="footer-content">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-12 footer-column">
                            <div className="logo-widget footer-widget">
                                <figure className="logo-box"><Link className="footer_anchor" to="/"><img src={Logo} alt="Logo"/></Link></figure>
                                <div className="text">
                                    <p className='text-white text-justify'>SkillVerse Foundation is committed to empowering individuals through technology-driven education, skill development, and career-building opportunities. Our initiatives focus on reskilling, digital literacy, employability, and fostering innovation to create a sustainable impact.</p>
                                </div>
                                {/* <ul className="footer-social">
                                    <li><a className="footer_anchor" href="#"><i className="fab fa-facebook-f"></i></a></li>
                                    <li><a className="footer_anchor" href="#"><i className="fab fa-twitter"></i></a></li>
                                    <li><a className="footer_anchor" href="#"><i className="fab fa-vimeo-v"></i></a></li>
                                    <li><a className="footer_anchor" href="#"><i className="fab fa-google-plus-g"></i></a></li>
                                </ul> */}
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-3 col-sm-6 footer-column footer-before-address d-flex justify-content-center">
                            <div className="service-widget footer-widget">
                                <div className="footer-title" style={{color:'#ff5e14'}}>Initiatives</div>
                                <ul className="list">
                                    <li><a className="footer_anchor text-white" >Women Career Comeback</a></li>
                                    <li><a className="footer_anchor text-white" >Tech-Driven Skilling</a></li>
                                    <li><a className="footer_anchor text-white" >Employability Solutions</a></li>
                                    <li><a className="footer_anchor text-white" >Digital Empowerment</a></li>
                                    <li><a className="footer_anchor text-white" >Fostering Innovation</a></li>
                                    <li><a className="footer_anchor text-white" >Career Kickstart</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-3 col-sm-6 footer-widget footer-address">
                            <div className="contact-widget footer-widget">
                                <div className="footer-title" style={{color:'#ff5e14'}}>Contacts</div>
                                <div className="text">
                                    <p className='text-white'>The Avenue, behind Prakash Petrol Pump, Mumbai Naka, Govind Nagar, Nashik, Maharashtra 422009</p>
                                    {/* <p>+919890058156</p> */}
                                    <a href="tel:+919890058156" className="me-3 text-white d-inline-flex align-items-center mt-2 mt-md-0" style={{ textDecoration: "none" }}>
                                        <FaPhone className="me-1 rotate-icon" style={{ color: "#fff", width: '20px', height: '20px' }} />
                                        +91 9890058156
                                    </a>
                                    <a href="mailto:contact@skillversefoundation.org" className="mt-3 text-white d-inline-flex align-items-center" style={{ textDecoration: "none" }}>
                                        <FaEnvelope className="me-1" style={{ color: "#fff", width: '20px', height: '20px' }} />
                                        contact@skillversefoundation.org
                                    </a>
                                    {/* <p>contact@skillversefoundation.org</p> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

        <div className="footer-bottom">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 column d-flex justify-content-center">
                        <div className="copyright">
                            © {new Date().getFullYear()} Copyright: 
                            <a className="footer_anchor" style={{color:'#ff5e14'}}> Designed and Developed by Skillverse Foundation</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

                
    </>
  )
}

export default Home
