import Image from 'next/image'
import React from 'react'
import Socials from './Socials'

function About() {
  return (
    
    <section className="grid lg:grid-cols-2 grid-cols-1">
       <div className='border-y-4 w-fit border-gray-800 p-2 rounded-md hover:border-rose-600'>
      <Image
        src="/ndovu.jpeg"
        width={500}
        height={500}
        objectFit="cover"
        alt="ndovu"
      />
    </div>
        <div>
          <h1 className='text-slate-100 text-xl py-2'>About Me</h1>
          <h1 className='lg:text-3xl text-2xl'><span className='text-rose-600'>Ambitious,</span> Collaborative <br/> Software 
          <span className='font-medium text-rose-600'>Engineer</span></h1>
          <article className='text-slate-200 lg:text-xl py-2 leading-loose'>
          I am an ambitious and self-driven software developer with a
          strong commitment to learning and adapting to emerging
          technologies and innovative ideas. My passion for coding
          and problem-solving, combined with a collaborative
          mindset, allows me to excel both as an individual
          contributor and as a valuable team player. I am seeking a
          software development internship where I can leverage my
          skills, contribute to meaningful projects, and further enhance
          my technical expertise.
          </article>
          <Socials/>
        </div>
    </section>
       
      
  
  )
}

export default About
