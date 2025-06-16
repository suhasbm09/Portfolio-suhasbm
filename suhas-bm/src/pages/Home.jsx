// src/pages/Home.jsx

import { FaEnvelope, FaPhone, FaArrowDown, FaGithub, FaLinkedin } from "react-icons/fa";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

import React,{ useState } from "react";

function ProjectCard({ proj }) {
  const [hasImage, setHasImage] = useState(true);
  const cardRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.5, 1, 0.5]);

  return (
    <motion.div
      ref={cardRef}
      style={{ y, opacity }}
      className={`
        group relative
        flex flex-col 
        ${hasImage ? "lg:flex-row" : ""} 
        items-center bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl rounded-2xl border border-white/10 
        overflow-hidden hover:scale-[1.02] transition-all duration-500
        shadow-lg hover:shadow-cyan-500/10
      `}
    >
      {/* Image column with overlay */}
      {hasImage && (
        <div className="relative w-full lg:w-1/3 h-48 lg:h-auto flex-shrink-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 mix-blend-overlay" />
          <img
            src={`/images/${proj.key}.png`}
            alt={`${proj.title} preview`}
            loading="lazy"
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
            onError={() => setHasImage(false)}
          />
        </div>
      )}

      {/* Content column */}
      <div className={`
        w-full ${hasImage ? "lg:w-2/3" : ""} p-8 space-y-4
        relative z-10
      `}>
        <h3 className="text-3xl font-semibold bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
          {proj.title}
        </h3>
        <p className="text-white/70 text-base lg:text-lg leading-relaxed">
          {proj.desc}
        </p>
        <div className="flex flex-wrap gap-3">
          {proj.tech.map((t) => (
            <span 
              key={t} 
              className="px-3 py-1 text-xs lg:text-sm rounded-full 
                bg-gradient-to-r from-cyan-500/20 to-purple-500/20 
                text-white/90 backdrop-blur-sm border border-white/10
                hover:from-cyan-500/30 hover:to-purple-500/30 transition-colors"
            >
              {t}
            </span>
          ))}
        </div>
        <a
          href={proj.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 mt-4 text-lg font-medium 
            text-cyan-400 hover:text-cyan-300 transition-colors
            group-hover:translate-x-2 duration-300"
        >
          View on GitHub 
          <FaGithub className="transform group-hover:rotate-12 transition-transform" />
        </a>
      </div>
    </motion.div>
  );
}

const Home = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const [text] = useTypewriter({
    words: ["Crafting Smart Contracts", "Building Intuitive Web Apps", "Solving Complex Challenges"],
    loop: true,
    delaySpeed: 2000,
  });

  const educationItems = [
    {
      title: "B.E. Computer Science & Engineering",
      institute: "National Institute of Engineering, Mysuru",
      detail: "GPA 9.3/10 (2022 – Present)",
      isCurrent: true,
    },
    {
      title: "Senior Secondary Education (PUC)",
      institute: "Vijaya Vittala PU Composite",
      detail: "95.5% (2020 – 2022)",
    },
    {
      title: "Secondary Education (10th Grade)",
      institute: "Vijaya Vittala Vidyashala",
      detail: "91.5% (2008 – 2020)",
    },
  ];

  const skillsGroups = [
    { title: "Languages", items: ["C", "C++", "Python", "JavaScript", "Rust"] },
    { title: "Frameworks", items: ["React", "TailwindCSS", "Flask", "Node.js", "Anchor", "Metaplex"] },
    { title: "Databases", items: ["MySQL", "MongoDB", "Firebase", "Pinata"] },
    { title: "Tools & Platforms", items: ["Docker", "Jenkins", "Git", "Linux", "Solana CLI"] },
  ];

  const projects = [
    {
      key: "skillflex",
      title: "SkillFlex",
      desc: "Decentralized Proof-of-Skill dApp: complete challenges, AI evaluation, mint soulbound NFT with metadata on IPFS.",
      tech: ["Solana", "Anchor", "Rust", "React", "Flask", "MongoDB", "TailwindCSS"],
      link: "https://github.com/suhasbm09/SKILL_FLEX",
    },
    {
      key: "vionex",
      title: "Vionex",
      desc: "Blockchain-backed medicine donation system with QR tracking, fraud detection, and rule-based AI matching.",
      tech: ["Solana", "Anchor", "Node.js", "Flask", "React", "TailwindCSS"],
      link: "https://github.com/suhasbm09/Vionex",
    },
    {
      key: "ai-code-commenter",
      title: "AI Code Commenter",
      desc: "GenAI tool that auto-comments code lines with live video UI, integrated CI/CD via Jenkins & Docker.",
      tech: ["Flask", "OpenRouter API", "JavaScript", "Docker", "Jenkins"],
      link: "https://github.com/suhasbm09/ai-code-commentor",
    },
    {
      key: "college_chatbot",
      title: "College Enquiry Chatbot",
      desc: "RAG-powered domain-aware assistant with speech input, Firebase storage, and adaptive response generation.",
      tech: ["React", "Flask", "TailwindCSS", "LangChain", "Firebase"],
      link: "https://github.com/suhasbm09/College_Chatbot",
    },
    {
      key: "ai-autocorrect",
      title: "AI Autocorrect Tool",
      desc: "Two-stage text optimizer using SymSpell & T5-small for high-speed grammar & spelling refinement.",
      tech: ["Flask", "SymSpell", "T5-small"],
      link: "https://github.com/suhasbm09/AutoCorrect-tool",
    },
  ];

  const hackathons = [
    {
      title: "Solana OutBreak 2025",
      subtitle: "Participant",
      desc: "Built initial prototype of SkillFlex — an AI-evaluated NFT skill platform on Solana.",
      status: "Participated",
      color: "from-cyan-400 to-blue-400",
    },
    {
      title: "Inohax 2.0",
      subtitle: "Top 5/30+",
      desc: "Developed Vionex, a blockchain medicine-donation dApp with AI fraud detection.",
      status: "Top 5",
      color: "from-blue-400 to-purple-400",
    },
    {
      title: "Bolt.New Hackathon",
      subtitle: "Ongoing",
      desc: "Designing a unified DevOps sandbox to write code, generate pipelines, and simulate deployments.",
      status: "In Progress",
      color: "from-purple-400 to-pink-400",
    },
  ];

  return (
    <div ref={containerRef} className="relative space-y-32">
      {/* Hero Section */}
      <section
        id="hero"
        className="relative min-h-screen flex flex-col justify-center items-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-8 max-w-5xl mx-auto px-4"
        >
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
              Hi, I'm Suhas B M
            </span>
          </h1>

          <motion.p 
            className="text-2xl md:text-3xl text-white/70 flex items-center justify-center gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <span>{text}</span>
            <Cursor cursorColor="#00FFD5" />
          </motion.p>

          <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent w-48 mx-auto" />

          <motion.p 
            className="text-lg md:text-xl text-white/60 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            Execution-first engineer delivering impactful, production-grade solutions across AI, blockchain, and full-stack development. Passionate about owning the full product lifecycle ― from ideation and prototyping to deployment and optimization.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4 items-center justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
          >
            <a
              href="#projects"
              className="group px-8 py-4 text-lg font-medium rounded-full 
                bg-gradient-to-r from-cyan-400 to-purple-500 
                hover:from-cyan-500 hover:to-purple-600 
                text-white shadow-lg hover:shadow-cyan-500/25 
                transition-all duration-300 transform hover:-translate-y-1"
            >
              View Projects
              <FaArrowDown className="inline-block ml-2 transform group-hover:translate-y-1 transition-transform" />
            </a>

            <a
              href="https://drive.google.com/file/d/1cPYy5SuwtrQuSkozuLZvFKwilcfenMTb/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="group px-8 py-4 text-lg font-medium rounded-full 
                border border-white/20 text-white 
                hover:border-cyan-400 hover:text-cyan-300 
                transition-all duration-300 transform hover:-translate-y-1
                backdrop-blur-sm bg-white/5"
            >
              View Resume
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <FaArrowDown className="text-white/30 text-2xl" />
        </motion.div>
      </section>

      {/* ---------- Education Timeline (Flex-Based, Aligned) ---------- */}

        <motion.section
          id="education"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="py-24"
          aria-labelledby="education-heading"
        >
          <h2
            id="education-heading"
            className="text-4xl font-semibold mb-4 text-cyan-400 text-center"
          >
            Education
          </h2>
          <div className="h-px bg-white/20 my-8 w-24 mx-auto" />

          <div className="relative max-w-4xl mx-auto">
            {/* Full-height vertical line */}
            <div className="absolute top-0 bottom-0 left-8 w-px bg-gradient-to-b from-cyan-400 to-purple-500/60" />

            <div className="space-y-16">
              {educationItems.map((item, idx) => (
                <div
                  key={item.title}
                  className="grid grid-cols-[auto_1fr] gap-x-16 items-start relative"
                  style={{ animationDelay: `${idx * 0.2}s` }}
                >
                  {/* Node container (first col) */}
                  <div className="relative">
                    <div
                      className={`
                        absolute left-8 top-16 -translate-x-1/2 
                        w-5 h-5 rounded-full border-2
                        ${item.isCurrent
                          ? "bg-gradient-to-tr from-cyan-400 to-purple-500 border-white animate-glow-pulse"
                          : "bg-cyan-400 border-white/70"}
                      `}
                    />
                  </div>
                        
                  {/* Card container (second col) */}
                  <div
                    className={`
                      px-8 py-6 bg-white/5 backdrop-blur-md  rounded-2xl border border-white/10
                      hover:scale-[1.02] transition-all
                      ${item.isCurrent ? "border-cyan-400" : ""}
                    `}
                  >
                    <p className="text-2xl font-semibold text-white">{item.title}</p>
                    <p className="mt-1 text-white/70">{item.institute}</p>
                    <p className="mt-2 font-mono text-sm text-white/50">{item.detail}</p>
                    {item.isCurrent && (
                      <span className="inline-block mt-4 px-3 py-1 text-xs font-medium bg-cyan-500 text-black rounded-full">
                        Currently Pursuing
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.section>
          
          
          
          
      {/* Skills */}
      <motion.section
        id="skills"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="py-24"
        aria-labelledby="skills-heading"
      >
        <h2 id="skills-heading" className="text-4xl font-semibold mb-4 text-cyan-400 text-center">
          Skills
        </h2>
        <div className="h-px bg-white/20 my-8 w-24 mx-auto" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
          {skillsGroups.map((grp) => (
            <div key={grp.title} className="w-full h-56 [perspective:1000px]">
              <div
                className="relative w-full h-full transition-transform duration-500 [transform-style:preserve-3d] hover:[transform:rotateY(180deg)]"
              >
                <div
                  className="absolute inset-0 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 flex items-center justify-center"
                  style={{ backfaceVisibility: "hidden", transform: "rotateY(0deg)" }}
                >
                  <h3 className="text-2xl font-semibold text-cyan-500">{grp.title}</h3>
                </div>
                <div
                  className="absolute inset-0 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 p-6 flex flex-col items-center justify-center space-y-2 [transform:rotateY(180deg)]"
                  style={{ backfaceVisibility: "hidden" }}
                >
                  <h3 className="text-xl font-medium text-cyan-300 text-center">{grp.title}</h3>
                  <div className="flex flex-wrap gap-2 justify-center mt-2">
                    {grp.items.map((skill) => (
                      <span key={skill} className="px-4 py-2 text-md rounded-full bg-cyan-500/10 text-white/90">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Projects */}
{/* ---------- Projects Gallery (With Image Fallback) ---------- */}
<motion.section
  id="projects"
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
  className="py-24"
  aria-labelledby="projects-heading"
>
  <h2 id="projects-heading" className="text-4xl font-semibold mb-4 text-cyan-400 text-center">
    Projects
  </h2>
  <div className="h-px bg-white/20 my-8 w-24 mx-auto" />

  <div className="grid gap-12 lg:grid-cols-2 px-4">
    {projects.map((proj) => (
      <ProjectCard key={proj.key} proj={proj} />
    ))}
  </div>
</motion.section>

      {/* Hackathons */}
      <motion.section
        id="hackathons"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="py-24"
        aria-labelledby="hackathons-heading"
      >
        <h2 id="hackathons-heading" className="text-4xl font-semibold mb-4 text-cyan-400 text-center">
          Hackathons & Challenges
        </h2>
        <div className="h-px bg-white/20 my-8 w-24 mx-auto" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 px-4">
          {hackathons.map((item, idx) => (
            <div
              key={idx}
              className="relative bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 p-8 flex flex-col justify-between hover:scale-[1.02] transition-all"
            >
              <div
                className={`
                  absolute -top-2 -right-2 px-3 py-1 text-xs font-medium rounded-tr-2xl rounded-bl-2xl
                  bg-gradient-to-r ${item.color} text-black
                `}
              >
                {item.status}
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-white text-center">
                  {item.title}
                </h3>
                <p className="text-cyan-300 text-sm text-center font-medium">
                  {item.subtitle}
                </p>
                <p className="text-white/70 text-sm leading-relaxed text-center">
                  {item.desc}
                </p>
              </div>
              <div className="mt-4 text-center">
                {item.status === "In Progress" && (
                  <span className="px-4 py-2 text-xs font-medium bg-white/10 rounded-full text-white/70">
                    Stay tuned…
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Contact */}
      <section
        id="contact"
        className="relative py-24"
      >
        <div className="relative max-w-4xl mx-auto px-4">
          <motion.h2 
            className="text-4xl font-semibold text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Let's build something impactful
            </span>
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div 
              className="group p-8 bg-gradient-to-br from-white/5 to-white/[0.02] 
                backdrop-blur-xl rounded-2xl border border-white/10 
                hover:border-cyan-400/50 transition-all duration-500
                hover:shadow-lg hover:shadow-cyan-500/10"
              whileHover={{ scale: 1.02 }}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <FaEnvelope className="text-4xl text-cyan-400 mb-4 transform group-hover:rotate-12 transition-transform" />
              <h3 className="text-xl font-semibold text-white mb-2">Email Me</h3>
              <a 
                href="mailto:suhaasbm2004@gmail.com" 
                className="text-white/70 hover:text-cyan-300 transition-colors block"
              >
                suhaasbm2004@gmail.com
              </a>
            </motion.div>

            <motion.div 
              className="group p-8 bg-gradient-to-br from-white/5 to-white/[0.02] 
                backdrop-blur-xl rounded-2xl border border-white/10 
                hover:border-cyan-400/50 transition-all duration-500
                hover:shadow-lg hover:shadow-cyan-500/10"
              whileHover={{ scale: 1.02 }}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <FaPhone className="text-4xl text-cyan-400 mb-4 transform group-hover:rotate-12 transition-transform" />
              <h3 className="text-xl font-semibold text-white mb-2">Call Me</h3>
              <a 
                href="tel:+919036751497" 
                className="text-white/70 hover:text-cyan-300 transition-colors block"
              >
                +91 9036751497
              </a>
            </motion.div>
          </div>

          <motion.div 
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <a
              href="mailto:suhaasbm2004@gmail.com"
              className="inline-flex items-center gap-2 px-8 py-4 text-lg font-medium 
                rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 
                hover:from-cyan-500 hover:to-purple-600 
                text-white shadow-lg hover:shadow-cyan-500/25 
                transition-all duration-300 transform hover:-translate-y-1"
            >
              Reach Out
              <FaEnvelope className="transform group-hover:rotate-12 transition-transform" />
            </a>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default Home;
