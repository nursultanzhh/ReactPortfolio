import React from 'react'
import ProjectItem from './ProjectItem'
import firstproject from '../assets/FirstProject.png'
import secondproject from '../assets/SecondProject.png'
import thirdproject from '../assets/ThirdProject.png'
import fourthproject from '../assets/FourthProject.png'

const Projects = () => {
  return (
    <div id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
        <h1 className='text-4xl font-bold text-center text-blue-950'>Projects</h1>
        <p className='text-center py-8'>
            Here are some of my projects that I have worked on.
        </p>
        <div className='grid sm:grid-cols-2 gap-12'>
            <ProjectItem img={firstproject} title="First project" url="https://nursultanzhh.github.io/Nfactor/" />
            <ProjectItem img={secondproject} title="Medium clone" url="https://medium-clone-eight-rho.vercel.app/"/>
            <ProjectItem img={thirdproject} title="To-do list" url="https://todoapp-zeta-mauve.vercel.app/"/>
            <ProjectItem img={fourthproject} title="Quote generator" url="https://vite-ten-beryl.vercel.app/"/>
        </div>
      
    </div> 
  )
}

export default Projects
