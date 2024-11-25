import React from 'react';
import project1 from "../assets/project1.png"
import project2 from "../assets/project2.png"
import project4 from "../assets/project4.png"
import project5 from "../assets/project5.png"
import project6 from "../assets/project6.png"
import dashboard from "../assets/dashboard.png"
import flutter1 from "../assets/flutter1.png"
import javascript1 from "../assets/javascript1.png"
import sertifikat from "../assets/sertifikat.png"
import uiux from "../assets/uiux.png"
import { AiFillGithub, AiOutlineGithub } from 'react-icons/ai'
import Reveal from './Reveal';

const projects = [
    {
      img: dashboard,
      title: "Project IoT Monitoring Pendaki",
      description: "A fullstack application development javascript.",
      links: {
        site: "http://sistemiotmonitoringburangrang.great-site.net/",
        github: "https://github.com/rezapebriawan/",
      },
    },
    {
      img: flutter1,
      title: "Project #2",
      description: "A application built with flutter.",
      links: {
        site: "https://flutter-sparepart.vercel.app/",
        github: "https://github.com/rezapebriawan/Submission-Belajar-Membuat-Aplikasi-Flutter-untuk-Pemula",
      },
    },
    {
      img: javascript1,
      title: "Project #3",
      description: "An notepad with javascript.",
      links: {
        site: "https://rezapebriawan.github.io/Submission-Belajar-Fundamental-Front-End-Web-Development/",
        github: "https://github.com/rezapebriawan/Submission-Belajar-Fundamental-Front-End-Web-Development",
      },
    },
    {
      img: uiux,
      title: "Project #4",
      description: "A ui & ux mobile apps.",
      links: {
        site: "https://drive.google.com/drive/folders/1HRbcVOSK0kdgCrGlC8ZfjE-qbJzJeTpc",
        github: "#",
      },
    },
    {
      img: sertifikat,
      title: "Project #5",
      description: "A Sertifikat Linux RHCSA EX-200.",
      links: {
        site: "https://www.credly.com/badges/72300a4f-55b5-43e9-9f1f-96a50d9f37c5/linked_in_profile",
        github: "#",
      },
    },
  ]

const Portfolio = () => {
  return (
    <div className='max-w-[1000px] mx-auto p-6 md:my-20' id="portfolio">
        <h2 className='text-3xl font-bold text-gray-200 mb-8'>Portfolio</h2>
        {projects.map((project, index) => (
            <Reveal>
            <div key={index} 
            className={`flex flex-col md:flex-row ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''} mb-12`}>
                <div className='w-full md:w-1/2 p-4'>
                    <img
                        src={project.img}
                        alt={project.title}
                        className='w-full h-full object-cover rounded-lg shadow-lg'
                    />
                </div>
                <div className='w-full md:w-1/2 p-4 flex flex-col justify-center'>
                    <h3 className='text-2xl font-semibold text-gray-200 mb-4'>{project.title}</h3>
                    <p className='text-gray-300 mb-4'>{project.description}</p>
                    <div className='flex space-x-4'>
                        <a href={project.links.site}
                            className='px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700
                                        transition duration-300'>
                            View Site
                        </a>
                        <a href={project.links.github}
                            className='px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700
                                        transition duration-300'>
                            <AiOutlineGithub/>
                        </a>

                    </div>

                </div>

            </div>
            </Reveal>
        ))}
        
    </div>
  )
}

export default Portfolio