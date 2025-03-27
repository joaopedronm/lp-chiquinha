'use client'

import React from 'react'
import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs, FaAngular, FaBootstrap, FaGit } from 'react-icons/fa'
import { SiTailwindcss, SiNextdotjs, SiMongodb, SiTypescript } from 'react-icons/si'

const about = {
  title: 'About me',
  description: 'Loving coding, learning, and sharing ideas.',
  info: [
    {
      fieldName: 'Name',
      fieldValue: 'João Pedro'
    },
    {
      fieldName: 'Age',
      fieldValue: '28'
    },
    {
      fieldName: 'Phone',
      fieldValue: '+55 (88) 98824-2039'
    },
    {
      fieldName: 'Experience',
      fieldValue: '2+ Years'
    },
    {
      fieldName: 'Nationality',
      fieldValue: 'Brazilian'
    },
    {
      fieldName: 'Languages',
      fieldValue: 'English, French, Italian and Portuguese'
    },
  ]
}

const experience = {
  icon: '/assets/resume/badge.svg',
  title: 'My experience',
  description: 'Hands-on experience in building robust applications with modern technologies.',
  items: [
    {
      company: "Fretador",
      position: 'Full Stack Developer',
      duration: 'Jun. 2024 - Present',
    },
    {
      company: "HubFlow",
      position: 'Frontend Developer (Freelancer)',
      duration: 'Jan. 2025 - Present',
    },
    {
      company: "Mr. Frontend",
      position: 'Webdesigner (Wordpress)',
      duration: 'Jan. 2021 - May. 2024',
    },
  ]
}

const education = {
  icon: '/assets/resume/cap.svg',
  title: 'Education',
  description: 'My academic background and learning journey so far.',
  items: [
    {
      institution: "Unifatecie",
      degree: 'System Analysis and Development',
      title: "Tech. Degree",
      duration: '2023 - Present',
    },
    {
      institution: "Udemy",
      degree: 'Angular: O Guia Definitivo',
      title: 'Course',
      duration: '2024',
    },
    {
      institution: "Escola da Nuvem",
      degree: 'Cloud Computing',
      title: 'Course',
      duration: '2024',
    },
    {
      institution: "Udemy",
      degree: 'Node.js do Zero a Maestria',
      title: 'Course',
      duration: '2024',
    },
    {
      institution: "Udemy",
      degree: 'React do Zero a Maestria',
      title: 'Course',
      duration: '2024',
    },
    {
      institution: "ADA - Let's Code",
      degree: 'Front-end Development',
      title: 'Course',
      duration: '2022 - 2023',
    },
    {
      institution: "IFCE - Campus Acaraú",
      degree: "Physics",
      title: "Bachelor's Degree",
      duration: '2014 - 2020',
    },
  ]
}

const skills = {
  title: 'My skills',
  description: "Tools and technologies I've been working with along my journey.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: 'html 5',
    },
    {
      icon: <FaCss3 />,
      name: 'css 3',
    },
    {
      icon: <FaJs />,
      name: 'javascript',
    },
    {
      icon: <SiTypescript />,
      name: 'typescript',
    },
    {
      icon: <FaReact />,
      name: 'react',
    },
    {
      icon: <SiNextdotjs />,
      name: 'next.js',
    },
    {
      icon: <FaAngular />,
      name: 'angular',
    },
    {
      icon: <SiTailwindcss />,
      name: 'tailwind.css',
    },
    {
      icon: <FaBootstrap />,
      name: 'bootstrap',
    },
    {
      icon: <FaNodeJs />,
      name: 'node.js',
    },
    {
      icon: <SiMongodb />,
      name: 'mongodb',
    },
    {
      icon: <FaGit />,
      name: 'git',
    },
  ]
}

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { ScrollArea } from '@/components/ui/scroll-area'
import { motion } from 'framer-motion'



const Resume = () => {
  return (
    <motion.div
      initial={{opacity: 0}}
      animate={{
        opacity: 1,
        transition: {delay: 0.6, duration: 0.3, ease: 'easeIn'}}}
      className='min-h-[80vh] flex items-center justify-center py-12 xl:py-8'
    >
      <div className="container mx-auto">
        <Tabs defaultValue='experience' className='flex flex-col xl:flex-row gap-[60px]'>
          <TabsList className='flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6'>
            <TabsTrigger value='experience'>Experience</TabsTrigger>
            <TabsTrigger value='education'>Education</TabsTrigger>
            <TabsTrigger value='skills'>Skills</TabsTrigger>
            <TabsTrigger value='about'>About me</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className='min-h-[70vh] w-full'>

            {/* experience */}
            <TabsContent value='experience' className='w-full'>
              <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                <h3 className='text-4xl font-bold'>{experience.title}</h3>
                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{experience.description}</p>

                <ScrollArea className='h-[400px]'>
                  <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                    {experience.items.map((item, index) => {
                      return (
                        <li key={index} className='bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'>
                          <span className='text-accent'>{item.duration}</span>
                          <h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left'>{item.position}</h3>
                          <div className='flex items-center gap-3'>
                            {/* dot */}
                            <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                            <p className='text-white/60'>{item.company}</p>
                          </div>
                        </li>
                      )
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>


            {/* education */}
            <TabsContent value='education' className='w-full'>
            <div className='flex flex-col gap-[30px] text-center xl:text-left'>
              <h3 className='text-4xl font-bold'>{education.title}</h3>
              <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{education.description}</p>

              <ScrollArea className='h-[400px]'>
                <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                  {education.items.map((item, index) => {
                    return (
                      <li key={index} className='bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'>
                        <div className='w-[100%] flex flex-col items-center justify-between lg:flex-row'>
                          <span className='text-accent'>{item.duration}</span>
                          <span className='text-xs text-white/60'>{item.title}</span>
                        </div>
                        <h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left'>{item.degree}</h3>
                        <div className='flex items-center gap-3'>
                          {/* dot */}
                          <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                          <p className='text-white/60'>{item.institution}</p>
                        </div>
                      </li>
                    )
                  })}
                </ul>
              </ScrollArea>
            </div>
            </TabsContent>


            {/* skills */}
            <TabsContent value='skills' className='w-full'>
              <div className="flex flex-col gap-[30px]">
                <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                  <h3 className='text-4xl font-bold'>{skills.title}</h3>
                  <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{skills.description}</p>
                </div>

                <ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4'>
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className='w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group'>
                              <div className='text-6xl group-hover:text-accent transition-all duration-300'>{skill.icon}</div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className='capitalize'>{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </TabsContent>


            {/* about */}
            <TabsContent value='about' className='w-full text-center xl:text-left'>
              <div className='flex flex-col gap-[30px]'>
                <h3 className='text-4xl font-bold'>{about.title}</h3>
                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{about.description}</p>
                <ul className='grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0'>
                  {about.info.map((item, index) => {
                    return (
                      <li key={index} className='flex items-center justify-center xl:justify-start gap-4'>
                        <span className='text-white/60'>{item.fieldName}</span>
                        <span className='text-lg'>{item.fieldValue}</span>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  )
}

export default Resume