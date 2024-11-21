import React from "react"
import {
  DiHtml5,
  DiCss3,
  DiSass,
  DiBootstrap,
  DiJavascript1,
  DiReact,
  DiNodejsSmall,
  DiMongodb,
  DiGithubBadge,
} from "react-icons/di"
import Reveal from "./Reveal"

const skills = [
    {
      category: 'Fullstack',
      technologies: [
        { name: 'HTML', icon: <DiHtml5 className='text-orange-600' /> },
        { name: 'CSS', icon: <DiCss3 className='text-blue-600' /> },
        { name: 'Bootstrap', icon: <DiBootstrap className='text-purple-600' /> },
        { name: 'JavaScript', icon: <DiJavascript1 className='text-yellow-500' /> },
        { name: 'React', icon: <DiReact className='text-blue-500' /> },
      ],
    },
    {
      category: 'IT Networking',
      technologies: [
        {
          name: 'Network',
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-green-500">
              <path d="M12 4C7.03 4 3 7.03 3 10.5C3 11.79 3.6 13.05 4.63 14.05M4.63 14.05C6.21 15.68 8.95 16.5 12 16.5C15.05 16.5 17.79 15.68 19.37 14.05M12 8C9.24 8 7 9.79 7 12M17 12C17 9.79 14.76 8 12 8M12 12C13.1 12 14 11.1 14 10M12 12C10.9 12 10 11.1 10 10" stroke="currentColor" strokeWidth="2" />
            </svg>
          )
        },
        { 
          name: 'Cisco', 
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 100 100" fill="none" stroke="currentColor" className="text-green-600">
              <circle cx="50" cy="50" r="40" stroke="black" strokeWidth="3" fill="#1D7E8B" />
              <text x="50" y="55" fontSize="15" textAnchor="middle" fill="white">Cisco</text>
            </svg>
          )
        },
        {
          name: 'Mikrotik',
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-blue-500">
              <path d="M2 12L12 2L22 12L12 22L2 12Z" stroke="currentColor" strokeWidth="2" fill="none"/>
              <path d="M2 12L22 12" stroke="currentColor" strokeWidth="2"/>
              <path d="M12 2L12 22" stroke="currentColor" strokeWidth="2"/>
            </svg>
          )
        }
      ],
    },
    {
      category: 'DevOps',
      technologies: [
        {
          name: 'GCP',
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-green-500">
              <path d="M12 2L9.09 8.26L2 9.27l5.45 4.73L5.82 22l6.18-3.65L17.18 22l-1.63-8.99L22 9.27l-7.09-1.01L12 2z" stroke="currentColor" strokeWidth="2" fill="none"/>
            </svg>
          )
        },
        {
          name: 'Alibaba Cloud',
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-green-600">
              <path d="M2 12L22 12M12 2L12 22M4.5 6.5L19.5 6.5M4.5 17.5L19.5 17.5" stroke="currentColor" strokeWidth="2" />
            </svg>
          )
        },
        {
          name: 'AWS',
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-blue-500">
              <path d="M12 2L9 8H15L12 2ZM2 12L9 12L12 22L15 12L22 12L15 12" stroke="currentColor" strokeWidth="2" fill="none" />
            </svg>
          )
        },
        {
          name: 'Docker',
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-gray-600">
              <path d="M3 12H9M3 16H9M3 8H9M15 8H21M15 12H21M15 16H21" stroke="currentColor" strokeWidth="2" />
            </svg>
          )
        },
        {
          name: 'Ansible',
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-blue-500">
              <path d="M2 12L12 2L22 12L12 22L2 12Z" stroke="currentColor" strokeWidth="2" fill="none" />
              <path d="M2 12L12 12M22 12L12 12" stroke="currentColor" strokeWidth="2" />
            </svg>
          )
        }
      ],
    },  
    {
      category: 'IoT Engineer',
      technologies: [
        {
          name: 'IoT architecture',
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-green-500">
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
              <line x1="12" y1="12" x2="12" y2="2" stroke="currentColor" strokeWidth="2" />
              <line x1="12" y1="12" x2="2" y2="12" stroke="currentColor" strokeWidth="2" />
              <line x1="12" y1="12" x2="22" y2="12" stroke="currentColor" strokeWidth="2" />
            </svg>
          )
        },
        {
          name: 'MQTT',
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-green-600">
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
              <line x1="12" y1="4" x2="12" y2="20" stroke="currentColor" strokeWidth="2" />
              <line x1="4" y1="12" x2="20" y2="12" stroke="currentColor" strokeWidth="2" />
            </svg>
          )
        },
        {
          name: 'NodeRed',
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-blue-500">
              <path d="M3 6L21 6M3 12L21 12M3 18L21 18" stroke="currentColor" strokeWidth="2" />
              <path d="M6 3L6 21M18 3L18 21" stroke="currentColor" strokeWidth="2" />
            </svg>
          )
        },
        {
          name: 'IoT Core',
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-gray-600">
              <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="2" fill="none" />
              <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" fill="none" />
              <line x1="12" y1="12" x2="16" y2="16" stroke="currentColor" strokeWidth="2" />
              <line x1="12" y1="12" x2="8" y2="16" stroke="currentColor" strokeWidth="2" />
            </svg>
          )
        }
      ],
    },    
  ]

  const Skills = () => {
    return (
      <div
        className="max-w-[900px] mx-auto flex flex-col justify-center items-center px-4 text-gray-200 pb-8 md:py-12"
        id="skills"
      >
        <Reveal>
          <h2 className="text-3xl font-bold mb-4 text-center">Skills</h2>
          <p className="text-center mb-8">
            I worked on various IT Engineer. Check them{" "}
            <a href="#" className="underline">
              here
            </a>
            .
          </p>
  
          {/* Grid untuk kategori */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="border border-purple-900 p-6 rounded-lg bg-purple-900/20 shadow-lg"
              >
                <h3 className="text-xl font-bold mb-4 text-center">
                  {skill.category}
                </h3>
                {/* Grid untuk teknologi */}
                <div className="grid grid-cols-2 gap-4">
                  {skill.technologies.map((tech, idx) => (
                    <div
                      key={idx}
                      className="flex items-center space-x-2"
                    >
                      <span className="text-2xl">{tech.icon}</span>
                      <span>{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    );
  };
  
  export default Skills;
  