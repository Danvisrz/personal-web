"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  const projects = [
    {
      id: "01",
      category: "Web Application",
      title: "Classification of Tomato Ripeness Levels",
      techStack: "Python, TensorFlow, Kaggle, Gradio",
      image: "/project-1.png",
      link: "https://colab.research.google.com/drive/1KFUFKVBmGyf9Ep4iklbAey7Bsxv5K_6E?usp=sharing",
      description: "I undertook this project with the goal of exploring computer vision, specifically using VGG16. I began by searching for a tomato dataset on Kaggle, then performed model tuning, calculated the model’s accuracy metrics, and conducted testing using the Gradio interface.",
    },
    {
      id: "02",
      category: "Web Application",
      title: "Rodeches Website",
      techStack: "React JS, Tailwind CSS, Supabase, Paypal API, Midtrans API, Resend API",
      image: "/project-2.png",
      link: "https://github.com/Danvisrz",
      description: "I created this website to meet my client's needs, where they requested an e-commerce website for their fashion products. In this project, I gained knowledge about creating websites using next.js (react), managing databases, and implementing payment gateways (Midtrans) and automation (Resend).",
    },
    {
      id: "03",
      category: "Local Application",
      title: "Local-Playlist Song",
      techStack: "MySQL Workbench, Python, Tkinter",
      image: "/project-3.png",
      link: "https://github.com/Danvisrz",
      description: "I designed this application for the purpose of the Final Semester Exam in the Data Structures and Algorithms course. This project implements the use of Database, Double Linked List, etc.",
    },
    {
      id: "04",
      category: "Web Application",
      title: "Interactive To Do List",
      techStack: "HTML, CSS, JavaScript",
      image: "/project-4.png",
      link: "https://github.com/Danvisrz",
      description: "I undertook this project while attending the RevoU coding camp for a week. This To Do List project provided me with knowledge about HTML, CSS, JavaScript front-end and UI/UX.",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white selection:bg-blue-600 selection:text-white font-sans overflow-x-hidden">
      
      {/* NAVBAR: Tetap animate (hanya sekali saat web dimuat) */}
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6 bg-black/50 backdrop-blur-md border-b border-white/5"
      >
        <span className="font-bold tracking-widest text-sm text-gray-200 uppercase">
          Danvi's Personal Web
        </span>
        <div className="flex items-center gap-8 text-sm font-medium text-gray-400">
          <a href="#about" className="hover:text-white font-black transition-colors">About</a>
          <a href="#projects" className="hover:text-white font-black transition-colors">Projects</a>
          <a href="#contact" className="hover:text-white font-black transition-colors">Contact</a>
        </div>
      </motion.nav>

      {/* --- HERO SECTION --- */}
      <section className="relative w-full h-screen flex flex-col md:flex-row items-end justify-center px-8 pt-32 pb-0 gap-8 md:gap-16">
        <div className="absolute top-1/2 left-[50%] -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-700/15 rounded-full blur-[150px] -z-10 pointer-events-none"></div>
        
        {/* FOTO HERO: Diubah menjadi whileInView agar terulang */}
        <motion.div 
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: -80, opacity: 1 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-auto flex justify-end items-end h-full relative z-20"
        >
          <Image
            src="/profiles.png" 
            alt="Danvi Almasrazqi"
            width={550} 
            height={800}
            priority
            className="object-contain drop-shadow-[0_0_40px_rgba(29,78,216,0.25)] h-[85vh] w-auto origin-bottom"
          />
        </motion.div>
        
        {/* TEKS HERO: Diubah menjadi whileInView agar terulang */}
        <div className="w-auto flex flex-col justify-center h-full relative z-10 pb-20">
          <motion.div 
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="mb-16 ml-0"
          >
            <p className="text-blue-500 font-semibold text-xl md:text-2xl mb-2 tracking-wide">Hi There! I&apos;m</p>
            <h1 className="text-6xl md:text-[6.5rem] font-black leading-[0.85] tracking-tighter text-white">
              Danvi<br />Almasrazqi
            </h1>
          </motion.div>
          <motion.div 
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 40, opacity: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="ml-0 md:ml-24"
          >
            <p className="text-blue-500 font-semibold text-lg md:text-xl mb-2 tracking-wide">Student of Undiksha</p>
            <h2 className="text-5xl md:text-[5.5rem] font-black leading-[0.9] tracking-tighter">
              <span className="text-transparent [-webkit-text-stroke:2px_white] drop-shadow-sm">AI & CV</span><br />
              <span className="text-white">Enthusiast</span>
            </h2>
          </motion.div>
        </div>
      </section>

      {/* --- ABOUT SECTION --- */}
      <section id="about" className="relative w-full min-h-screen flex flex-col justify-center px-8 md:px-16 py-32 z-30 bg-black">
        <div className="max-w-7xl mx-auto w-full">
          
          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.3 }} // once: false agar terulang
            transition={{ duration: 0.6 }}
            className="mb-20 text-center"
          >
            <h2 className="text-5xl md:text-5xl font-black text-white">I Love To</h2>
            <h1 className="text-3xl md:text-5xl text-blue-500 font-black">Explore</h1>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
            
            <motion.div 
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="text-gray-400 text-sm md:text-base leading-relaxed space-y-6 md:text-right relative z-20"
            >
              <h4 className="text-2xl font-black text-white mb-6 inline-block">Background & Philosophy</h4>
              <p>
                My interest in learning about <span className="text-blue-500 font-medium">AI and UI/UX</span> stemmed from university assignments that I decided to explore further. Since then, I have realized that these technologies can be used to help both myself and others in daily life.
              </p>
              <p>
                As a student at Universitas Pendidikan Ganesha, I am passionate about exploring <span className="text-blue-500 font-medium">Machine Learning and Computer Vision</span> technologies, while ensuring that every system built features an intuitive interface centered on user comfort.
              </p>
            </motion.div>

            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.8 }}
              className="flex justify-center items-center relative z-10"
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-600/15 rounded-full blur-[60px] -z-10 pointer-events-none"></div>
              <Image
                src="/about.png" 
                alt="Danvi About"
                width={500}
                height={700}
                className="object-contain drop-shadow-[0_0_30px_rgba(29,78,216,0.15)] max-h-128 w-auto scale-110 md:scale-[1.2]"
              />
            </motion.div>

            <motion.div 
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="text-left relative z-20"
            >
              <h4 className="text-2xl font-black text-white mb-6 inline-block">Organization Experience</h4>
              <div className="space-y-6">
                <div className="p-5 rounded-2xl bg-neutral-900/40 border border-white/5 hover:border-blue-500/30 transition-colors">
                  <span className="text-blue-500 text-sm font-semibold tracking-wider">2026 - 2027</span>
                  <h5 className="text-lg font-black text-white mt-2">Coordinator of Division 1</h5>
                  <p className="text-gray-400 text-sm mt-1">(Press and Student Creative Works)</p>
                  <p className="text-gray-500 text-xs mt-3 font-medium">HMJ Teknik Informatika Undiksha</p>
                </div>
                <div className="p-5 rounded-2xl bg-neutral-900/40 border border-white/5 hover:border-blue-500/30 transition-colors">
                  <span className="text-blue-500 text-sm font-semibold tracking-wider">2025 - 2026</span>
                  <h5 className="text-lg font-black text-white mt-2">Coordinator of Sub-division</h5>
                  <p className="text-gray-400 text-sm mt-1">(Student Creative Works)</p>
                  <p className="text-gray-500 text-xs mt-3 font-medium">HMJ Teknik Informatika Undiksha</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- PROJECTS SECTION --- */}
      <section id="projects" className="relative w-full min-h-screen flex flex-col justify-center py-32 z-30 bg-black">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-800/10 rounded-full blur-[120px] -z-10 pointer-events-none"></div>

        <motion.div 
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="max-w-[1400px] mx-auto w-full px-8 md:px-16 mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-black text-white">
            Featured <span className="text-blue-500">Projects</span>
          </h2>
        </motion.div>

        <div className="flex overflow-x-auto gap-8 px-8 md:px-16 pb-12 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] w-full">
          
          {projects.map((project, index) => (
            <motion.div 
              initial={{ y: 80, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: false, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }} 
              key={index} 
              className="relative z-10 hover:z-[100] min-w-[340px] md:min-w-[420px] h-[580px] bg-[#0c0c0e] rounded-[3rem] p-10 flex flex-col snap-center group overflow-hidden border border-white/5 hover:border-blue-500/30 transition-colors duration-300"
            >
              <div className="absolute bottom-0 left-0 w-full h-3/5 bg-gradient-to-t from-blue-600/30 via-blue-900/10 to-transparent pointer-events-none transition-opacity duration-500 opacity-0 group-hover:opacity-100"></div>

              <div className="flex justify-between items-start z-10 w-full">
                <span className="text-6xl font-black text-white tracking-tighter">{project.id}</span>
                <span className="text-lg font-medium text-white">{project.category}</span>
              </div>

              <div className="z-10 mt-12">
                <h3 className="text-3xl font-bold text-white leading-tight mb-3">{project.title}</h3>
                <p className="text-gray-400 text-sm font-medium">Techstack used</p>
                <p className="text-gray-200 text-sm mt-1">{project.techStack}</p>
              </div>

              <div className="mt-auto relative w-full h-52 bg-black/60 rounded-2xl z-10 border border-white/10 group/image">
                <Image 
                  src={project.image} 
                  alt={project.title} 
                  fill 
                  className="object-cover rounded-2xl transition-transform duration-500 group-hover/image:scale-[1.03]" 
                />

                <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 md:p-12 pointer-events-none opacity-0 invisible group-hover/image:opacity-100 group-hover/image:visible transition-all duration-500">
                  <div className="absolute inset-0 bg-black/80 backdrop-blur-md"></div>
                  
                  <div className="relative w-full max-w-4xl bg-neutral-900 border border-white/10 rounded-[2rem] overflow-hidden shadow-2xl flex flex-col transform scale-95 opacity-0 group-hover/image:scale-100 group-hover/image:opacity-100 transition-all duration-500 delay-75 pointer-events-auto">
                    <div className="relative w-full h-[35vh] md:h-[45vh] bg-black">
                      <Image 
                        src={project.image} 
                        alt={`${project.title} Full Preview`} 
                        fill 
                        className="object-contain" 
                      />
                      <Link 
                        href={project.link || "#"} 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute bottom-4 right-4 w-12 h-12 bg-black/80 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:bg-blue-600 hover:border-blue-400 hover:scale-110 z-20 shadow-lg"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M7 17L17 7" />
                          <path d="M7 7h10v10" />
                        </svg>
                      </Link>
                    </div>
                    <div className="p-8 md:p-10 bg-[#0c0c0e]">
                      <h3 className="text-2xl font-bold text-white mb-4">{project.title}</h3>
                      <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                        {project.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}

        </div>
      </section>

      {/* --- CONTACT & FOOTER SECTION --- */}
      <section id="contact" className="relative w-full flex flex-col justify-center items-center py-32 z-30 bg-[#060608] border-t border-white/5">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-600/10 rounded-full blur-[100px] -z-10 pointer-events-none"></div>

        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto w-full px-8 text-center"
        >
          <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-6">
            Let&apos;s Work <span className="text-blue-500">Together</span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
            I am currently open for new opportunities and collaborations. Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
          </p>
          <a 
            href="mailto:arazqidanvi@gmail.com" 
            className="inline-block px-10 py-5 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(37,99,235,0.4)]"
          >
            Send Email
          </a>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 1 }}
          className="mt-32 pt-8 border-t border-white/10 w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-8 text-sm text-gray-500 font-medium gap-4"
        >
          <p>© {new Date().getFullYear()} Danvi Almasrazqi. All rights reserved.</p>
          <div className="flex gap-6 items-center">
            <a href="https://github.com/Danvisrz" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-500 transition-colors" aria-label="GitHub">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.03c3.15-.38 6.5-1.4 6.5-7.17A5.1 5.1 0 0 0 19 5.8a5.1 5.1 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a11.5 11.5 0 0 0-6 0C7.2 2.3 6.1 2.6 6.1 2.6a5.1 5.1 0 0 0-.1 3.2A5.1 5.1 0 0 0 4 8.6c0 5.8 3.3 6.8 6.5 7.2A4.8 4.8 0 0 0 8 19v3"></path></svg>
            </a>
            <a href="https://www.linkedin.com/in/danvi-almasrazqi-suwatno-381301363" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-500 transition-colors" aria-label="LinkedIn">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </a>
            <a href="https://instagram.com/dnvalmas_" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-500 transition-colors" aria-label="Instagram">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
          </div>
        </motion.div>

      </section>
    </div>
  );
}