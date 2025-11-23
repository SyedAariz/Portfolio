import { useState } from "react";
import "./App.css";
import Navigation from "./Navigation";
import Hero from "./Hero";
import WritingText from "./WritingText";
import TextPressure from "./TextPressure";
import { CardBody, CardContainer, CardItem } from "./3d-card";
import { AnimatePresence, motion } from "framer-motion";
import Footer from "./Footer";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { HighlightText } from './HighlightText';
import { Vortex } from "./Vortex";
import Contacting from "./Contacting.jsx";




import {
  Modal,
  ModalTrigger,
  ModalBody,
  ModalContent,
  ModalFooter,
  useModal
} from "./Modal";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import DSAImage from "./assets/DSA.jpg";
import Demographic from "./assets/Demographic.jpg";
import PD from "./assets/PD.jpg";
import Scavenger from "./assets/Scavenger.png";
import Fall from "./assets/Fall.jpg";
import Spring from "./assets/Spring.jpg";
import MD from "./assets/MD.png";
import ER1 from "./assets/ER1.jpg";
import ER2 from "./assets/ER2.jpg";
import ResumePDF from "./assets/Resume.pdf";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const staggerContainer = {
  show: { transition: { staggerChildren: 0.15 } },
};

const pageTransition = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 1, ease: "easeInOut", when: "beforeChildren" },
  },
};



const skillCategories = [
  {
    title: "Programming",
    icon: "💻",
    skills: [
      "Python",
      "Java",
      "SQL",
      "C++",
      "HTML",
      "Xcode",
      "React",
      "Tailwind CSS",
      "React Native",
    ],
  },
  {
    title: "Cloud Architecture",
    icon: "☁️",
    skills: ["AWS", "S3", "CloudFront", "Route 53", "Amplify"],
  },
  {
    title: "APIs & Web Technologies",
    icon: "🌐",
    skills: [
      "REST APIs",
      "FastAPI",
      "Flask",
      "Postman",
      "Census Bureau API",
      "Google Maps API",
    ],
  },
  {
    title: "Data Libraries",
    icon: "📊",
    skills: [
      "pandas",
      "matplotlib",
      "seaborn",
      "json",
      "requests",
      "numPy",
      "nominatim",
      "pytorch",
      "openpyxl",
    ],
  },
];

function App() {
  const [count, setCount] = useState(0);
  const [openContact, setOpenContact] = useState(false);




  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: false,
    pauseOnHover: false,
    fade: true,
  };

  const experiences = [
    {
      date: "May 2025 – Present",
      title: "MD Anderson Cancer Center — Trainee",
      text: `
        <ul class='list-disc pl-5 space-y-1'>
        I build <b>Python</b> and <b>SQL</b> pipelines that process public-health data as it flows through the system, including geocoding 300,000+ addresses to Census tracts. I automate <b>CDC PLACES</b> and <b>Census API</b> integrations to generate datasets for <b>Power BI</b> with 95%+ accuracy.
        </ul>`,
      img: MD,
      skills: ["Python", "SQL", "pandas", "geopy", "Power BI", "Google Maps API", "Geocode", "React", "Flask", "Census Bureau API"],
    },

    {
      date: "Aug 2025 – Present",
      title: "UMR — Data Strategist",
      text: `
        <div style="text-align: center;">
          <p>
            I used <b>Google Sheets</b>, <b>Excel</b>, and <b>Power BI</b> 
            to analyze donation patterns and volunteer activity for <b>150–200 volunteers</b>. 
            I identify trends that improve how we plan and distribute 
            <b>400–500 meals every week</b> to Houston’s homeless community. 
            These insights help streamline logistics and strengthen long-term outreach efforts.
          </p>
        </div>
      `,
      slider: [PD, Scavenger],
      skills: ["Excel", "Leadership", "Event Planning", "Fundraising", "Community Outreach"],
    },

    {
      date: "Jan 2025 – Apr 2025",
      title: "NASA L'SPACE NPWEE — Data Scientist",
      text: `
        <div style="text-align: center;">
          <p>
            I explored mapping and localization strategies that incorporated <b>IMU-based</b> measurements and inertial system modeling to improve reliability in extreme environments. I also analyzed thermal environment data to identify key factors influencing spacecraft performance and overall mission design.
          </p>
        </div>
      `,
      img: Spring,
      skills: [ "SLAM", "Computer Vision", "IMU Signal Processing", "Aerospace", "Planetary Environment Analysis"],
    },

    {
      date: "Aug 2024 – Dec 2024",
      title: "NASA L'SPACE Mission Concept Academy — Program Analyst",
      text: `
        <div style="text-align: center;">
          <p>
            I supported early mission concepts with data-driven tools and system modeling workflows. I used <b>Python</b> to automate data extraction and cleaning pipelines and helped build standardized utilities for scope, schedule, and cost tracking. I also contributed to risk analysis efforts that informed engineering decisions and improved cross-team coordination for a multi-year mission concept.
          </p>
        </div>
      `,

      img: Fall,
      skills: ["Schedule Analysis", "Budget Modeling", "Excel", "Data Cleaning",  ],
    },

    {
      date: "Jul 2024 – Nov 2024",
      title: "Elite Robotics — Program Director",
      text: `
        <div style="text-align: center;">
          <p>
            I created personalized robotics curriculum that boosted project completion from 60% to 90% and supported 70+ students in developing computational thinking skills. I expanded the program by building 20+ robotics systems using <b>LEGO Spike Prime</b> with sensor-based autonomous navigation. I also launched a social media strategy that earned 10,000+ impressions and increased sign-ups by 35%.
          </p>
        </div>
      `,
      slider: [ER1, ER2],
      skills: ["Education", "STEM", "Lego Spike Prime", "Mentorship", "Robotics", "Leadership"],
    },
  ];



  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      {/* === FULLSCREEN VORTEX BACKGROUND === */}
      <Vortex
        backgroundColor="black"
        rangeY={800}
        particleCount={500}
        baseHue={220}
        baseSpeed={0.4}
        rangeSpeed={1.2}
        className="fixed top-0 left-0 w-full h-full object-cover"
        style={{ zIndex: 0 }}
      />

      <div className="absolute inset-0 bg-black/40 z-[5]" />

      <motion.div className="relative z-10">
        <motion.div variants={pageTransition} initial="hidden" animate="show" className="relative z-10">
          <Navigation />
          <section id="home" className="pt-[90px]"></section>
         
          <Hero />
          

          {/* INTRO */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-4xl font-semibold text-center mt-8 px-4 leading-snug text-white"
          >
            <WritingText text="Hey, I'm" inView={true} transition={{ duration: 1 }} />
            <div className="max-w-3xl mx-auto text-4xl font-semibold text-center mt-8 px-6 leading-snug">
              <TextPressure text="Syed Aariz" textColor="#ffffff" stroke strokeColor="#3b82f6" strokeWidth={1.5} />
            </div>
            <WritingText
              text="I’m a Computer Science student with a big curiosity for innovation from AI and data science to full-stack development 🖥"
              inView={true}
              transition={{ duration: 1, delay: 0.4 }}
            />
          </motion.div>

          

            {/* BUTTONS */}
            <div className="flex justify-center gap-10 mt-16 mb-10">

              {/* Resume Button (now looks like Contact button) */}
              <button
                onClick={() => window.open(ResumePDF, "_blank")}
                className="bg-white/10 text-white px-6 py-3 rounded-lg border border-white/30 
                hover:bg-white/20 transition"
              >
                Resume
              </button>



              {/* Contact Me Button → opens modal */}
              <button
                onClick={() => setOpenContact(true)}
                className="bg-white/10 text-white px-6 py-3 rounded-lg border border-white/30 
                hover:bg-white/20 transition"
              >
                Contact Me
              </button>
              <AnimatePresence>
                <Contacting open={openContact} setOpen={setOpenContact} />
              </AnimatePresence>
            </div>
      
          {/* ===== ABOUT ME ===== */}
          <section
            id="about"
            className="relative w-full pt-[150px] pb-[140px] flex flex-col items-center"
          >
            {/* Subtle background glow */}
           
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="flex flex-col items-center px-6"
            >
              {/* Title */}
              <h1
                className="
                  text-center 
                  text-5xl md:text-6xl 
                  font-extrabold 
                  tracking-wide 
                  text-white 
                  mb-14
                  font-space
                  
                "
              >
                About Me
              </h1>

              {/* Body */}
              <div className="leading-tight md:leading-snug text-center max-w-3xl mx-auto">
                <p
                  className="
                    text-center 
                    leading-relaxed
                    text-[18px] md:text-[20px] 
                    font-light 
                    text-gray-200
                    tracking-wide
                    font-space
                  "
                >
                  I’m a passionate data scientist and developer who enjoys creating everything from{" "}
                  <HighlightText text="Python/SQL pipelines" className="px-1" inView />{" "}
                  and{" "}
                  <HighlightText text="F1 telemetry systems" className="px-1" inView /> to{" "}
                  <HighlightText text="full-stack web apps" className="px-1" inView /> and{" "}
                  <HighlightText text="AI-powered tools" className="px-1" inView />.
                  Whether I’m building data models, optimizing backend systems, or designing smooth user interfaces, I love creating products that feel clean, intuitive, and alive.
                </p>

              </div>
            </motion.div>
          </section>

          {/* ===== SKILLS ===== */}
          <motion.div variants={fadeInUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="mt-24 mb-20 px-6">
            <h1 className="text-3xl text-center font-bold mb-12 text-white">Skills</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {skillCategories.map((cat, i) => (
                <motion.div key={i} whileHover={{ scale: 1.03 }} className="bg-gradient-to-br from-[#0c0c0e]/80 to-[#1c1c20]/80 backdrop-blur-xl rounded-2xl p-6 border border-gray-800 hover:border-indigo-500/50 transition-all duration-300">
                  <h2 className="text-xl font-semibold mb-4 flex items-center gap-2 text-white">
                    <span>{cat.icon}</span> {cat.title}
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((s, j) => (
                      <span key={j} className="px-3 py-1 text-sm rounded-lg bg-black/40 border border-gray-700 text-gray-200 hover:border-indigo-500 transition-all duration-200">
                        {s}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* ===== EXPERIENCE TIMELINE (ALTERNATING LEFT / RIGHT) ===== */}
          <section id="experiences" className="pt-[90px]"></section>
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mt-16 mb-16"
          >
            <h1 className="text-3xl md:text-4xl font-bold text-center text-white mb-3">
              Experience Timeline
            </h1>
            <p className="text-center text-neutral-400 mb-8 text-sm md:text-base">
              A journey through data, design, and discovery.
            </p>

            {/* === Center timeline line === */}
            <div className="relative max-w-6xl mx-auto before:content-[''] before:absolute before:top-0 before:bottom-0 before:left-1/2 before:w-[3px] before:bg-emerald-500/30">
              {experiences.map((exp, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  className={`mb-16 flex flex-col md:flex-row items-center ${
                    i % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* === Left / Right Card === */}
                  <div
                    className={`w-full md:w-1/2 px-6 md:px-10 ${
                      i % 2 === 0
                        ? "md:pl-12 md:text-left"
                        : "md:pr-12 md:text-right"
                    }`}
                  >
                    <div className="bg-neutral-900/70 border border-emerald-500/20 hover:border-emerald-400 transition-all rounded-lg p-5 shadow-md hover:shadow-emerald-500/10 backdrop-blur-sm">
                      <h3 className="text-xl font-semibold text-white">
                        {exp.title}
                      </h3>
                      <p className="text-sm text-emerald-400 mb-4">{exp.date}</p>

                      <div
                        className="text-neutral-300 text-[14px] leading-relaxed"
                        dangerouslySetInnerHTML={{ __html: exp.text }}
                      />

                      <div className="flex flex-wrap justify-center gap-2 mt-4">
                        {exp.skills.map((skill, idx) => (
                          <span
                            key={idx}
                            className="text-[11px] bg-emerald-500/10 text-emerald-400 border border-emerald-400/30 px-2 py-1 rounded-md hover:bg-emerald-500/20 transition"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>

                      <div className="mt-5">
                        {exp.slider ? (
                          <Slider {...settings}>
                            {exp.slider.map((s, idx) => (
                              <div key={idx}>
                                <img
                                  src={s}
                                  className="w-full max-h-[420px] rounded-xl object-cover mx-auto shadow-md hover:shadow-emerald-400/20 transition"
                                  alt="Experience Slide"
                                />
                              </div>
                            ))}
                          </Slider>
                        ) : (
                          <img
                            src={exp.img}
                            className="w-full max-h-[420px] rounded-xl object-cover mx-auto shadow-md hover:shadow-emerald-400/20 transition"
                            alt="Experience"
                          />
                        )}
                      </div>
                    </div>
                  </div>

                  {/* === Center Dot === */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-5 h-5 bg-emerald-400 rounded-full border border-white shadow-[0_0_10px_rgba(52,211,153,0.6)]"></div>
                </motion.div>
              ))}
            </div>
          </motion.div>


          {/* ===== PROJECTS ===== */}
          <section id="projects" className="pt-[90px]"></section>
          <motion.div variants={fadeInUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="mt-20 mb-20">
            <h1 className="text-3xl md:text-4xl text-center font-bold mb-10 text-white">Projects</h1>
            <motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true }} className="flex flex-wrap items-center justify-center gap-12">
              {[
                {
                  title: "Demographic Explorer",
                  text: "A full-stack web app that lets users enter an address or upload data to instantly view Census insights for that area. Built with Flask, React, and Google Maps API for real-time geospatial analytics.",
                  img: Demographic,
                  link: "https://demographicexplorer.org",
                },
                {
                  title: "DSA Website",
                  text: "Developed the UH Dialogue Students Association website using React, Tailwind CSS, and Framer Motion. Showcases events, club initiatives, and team info with responsive design.",
                  img: DSAImage,
                  link: "https://www.uhdsa.org",
                },
              ].map((proj, i) => (
                <motion.div key={i} variants={fadeInUp}>
                  <CardContainer className="inter-var" containerClassName="py-6">
                    <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-violet-500/[0.15] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-[28rem] h-auto rounded-2xl p-6 border transition-all duration-300 hover:-translate-y-1">
                      <CardItem translateZ="50" className="text-2xl font-semibold text-neutral-800 dark:text-white tracking-tight">
                        {proj.title}
                      </CardItem>
                      <CardItem translateZ="100" className="w-full mt-5">
                        <img src={proj.img} className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl transition-all duration-300" alt={proj.title} />
                      </CardItem>
                      <CardItem as="p" translateZ="60" className="text-neutral-600 dark:text-neutral-300 text-[15px] mt-4 leading-relaxed">
                        {proj.text}
                      </CardItem>
                      <div className="flex justify-between items-center mt-8">
                        <CardItem translateZ={20} as="a" href={proj.link} target="_blank" className="px-4 py-2 rounded-xl text-sm font-medium text-violet-400 hover:text-violet-300 transition">
                          View Project →
                        </CardItem>
                        <a
                          href="https://github.com/yaozay/dsa-website"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <CardItem
                            translateZ={20}
                            as="button"
                            className="px-5 py-2 rounded-xl bg-violet-500 hover:bg-violet-600 text-white text-sm font-semibold transition"
                          >
                            Source Code
                          </CardItem>
                        </a>
                        
                        
                      </div>
                    </CardBody>
                  </CardContainer>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div variants={fadeInUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <Footer />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}


export default App;
