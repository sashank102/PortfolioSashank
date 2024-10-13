'use client'

import { useState } from 'react'
import { Code, Server, Globe, Briefcase, Trophy, Mail, Phone, MapPin, Linkedin } from 'lucide-react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { SiCplusplus, SiMysql, SiPython, SiTensorflow, SiKeras, SiPytorch, SiNumpy, SiPandas } from 'react-icons/si'
import GitHubIcon from '@mui/icons-material/GitHub';
export default function EnhancedPortfolio() {
  const [darkMode] = useState(false)

  const projects = [
    {
      title: "Music Recommender System",
      description: "Utilizing clustering algorithms and database management for easy retrieval",
      icon: <Globe className="project-icon" />
    },
    {
      title: "CP/DSA Solver LLM",
      description: "Advanced LLM finetuned to solve competitive programming questions further utilizing RAG",
      icon: <Code className="project-icon" />
    },
    {
      title: "PDF Question Answer Bot",
      description: "Implementation of state-of-the-art VLMs to solve any school-level Question Paper",
      icon: <Server className="project-icon" />
    }
  ]

  const experiences = [
    {
      title: "Machine Learning Intern",
      company: "Styldod Inc. - Delaware, USA",
      period: "2024 - Present",
      description: "Part of a team to optimize existing models and develop new solutions for problems in the real estate market"
    },
    {
      title: "Undergraduate Researcher",
      company: "Mathematics of Machine Learning and Simulations Lab",
      period: "2024 - Present",
      description: "Working on predictive models to complete unread genome sequences"
    }
  ]

  const achievements = [
    "Silver medal, ML Division, IITISOC'2024",
    "JEE Advanced - AIR: 1140"
  ]

  const techStack = [
    { name: "C++", icon: <SiCplusplus className="tech-icon" /> },
    { name: "SQL", icon: <SiMysql className="tech-icon" /> },
    { name: "Python", icon: <SiPython className="tech-icon" /> },
    { name: "TensorFlow", icon: <SiTensorflow className="tech-icon" /> },
    { name: "Keras", icon: <SiKeras className="tech-icon" /> },
    { name: "PyTorch", icon: <SiPytorch className="tech-icon" /> },
    { name: "NumPy", icon: <SiNumpy className="tech-icon" /> },
    { name: "Pandas", icon: <SiPandas className="tech-icon" /> }
  ]

  return (
    <div className={`portfolio-wrapper ${darkMode ? 'dark' : ''}`}>
      <div className="portfolio-container">
        {/* <nav className="navbar">
          <span className="navbar-title"></span>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="dark-mode-toggle"
            aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            {darkMode ? <Sun className="mode-icon" /> : <Moon className="mode-icon" />}
          </button>
        </nav> */}

        <main className="portfolio-main">
          {/* Intro Section */}
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="portfolio-intro"
          >
            <div className="intro-avatar">
              <Image
                src="/me.png"
                alt="John Doe"
                width={192}
                height={192}
                className="intro-avatar-image"
              />
            </div>
            <h1 className="intro-title">Sai Sashank</h1>
            <p className="intro-subtitle">Machine Learning Engineer</p>
            <p className="intro-description">Specializing in building intelligent systems that drive data-driven insights and automation</p>
          </motion.section>

          {/* About Section */}
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="about-section"
          >
            <h2 className="section-title">About Me</h2>
            <p className="about-text">
              I am a passionate learner, driven by curiosity and a deep desire to understand the intricacies of technology. As a machine learning enthusiast, I have gained valuable experience in diverse fields, including computer vision, where I explore how machines interpret visual data; generative AI, focusing on creating innovative content and solutions; and recommender systems, which personalize user experiences through intelligent data analysis.
            </p>
            <p className="about-text">
              My journey in these areas fuels my motivation to develop intelligent systems that can transform data into actionable insights.
            </p>
          </motion.section>

          {/* Tech Stack Section */}
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="tech-stack-section"
          >
            <h2 className="section-title">Tech Stack</h2>
            <div className="tech-stack-grid">
              {techStack.map((tech) => (
                <div key={tech.name} className="tech-stack-item">
                  {tech.icon}
                  <span className="tech-stack-name">{tech.name}</span>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Projects Section */}
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="projects-section"
          >
            <h2 className="section-title">Projects</h2>
            <div className="projects-grid">
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                  className="project-card"
                >
                  <div className="project-icon">{project.icon}</div>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Experience Section */}
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="experience-section"
          >
            <h2 className="section-title">Experience</h2>
            <div className="experience-list">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                  className="experience-item"
                >
                  <div className="bg-transparent experience-icon">
                    <Briefcase className="experience-icon-inner" />
                  </div>
                  <div>
                    <h3 className="experience-title">{exp.title}</h3>
                    <p className="experience-company">{exp.company} | {exp.period}</p>
                    <p className="experience-description">{exp.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Achievements Section */}
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="achievements-section"
          >
            <h2 className="section-title">Achievements</h2>
            <ul className="achievements-list">
              {achievements.map((achievement, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                  className="achievements-item"
                >
                  <Trophy className="achievements-icon" />
                  <span>{achievement}</span>
                </motion.li>
              ))}
            </ul>
          </motion.section>

          {/* Contact Section */}
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            className="contact-section"
          >
            <h2 className="section-title">Contact</h2>
            <div className="contact-info">
              <div className="contact-item">
                <Mail className="contact-icon" />
                <span>saisashank@xyz.com</span>
              </div>
              <div className="contact-item">
                <Phone className="contact-icon" />
                <span>+91 1234567890</span>
              </div>
              <div className="contact-item">
                <MapPin className="contact-icon" />
                <span>Indore, India</span>
              </div>
              <div className="contact-item">
                <Linkedin className="contact-icon" />
                <a href="https://www.linkedin.com/in/sai-sashank" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              </div>
              <div className="contact-item flex flex-col">
                <GitHubIcon className="contact-icon" />
                <a href="https://github.com/sai-sashank" target="_blank" rel="noopener noreferrer">GitHub</a>
              </div>
            </div>
          </motion.section>
        </main>
      </div>
    </div>
  )
}
