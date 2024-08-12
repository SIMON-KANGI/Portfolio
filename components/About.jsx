import Image from 'next/image'
import React,{useEffect} from 'react'
import Socials from './Socials'
import AOS from 'aos'
import 'aos/dist/aos.css';
function About() {
  useEffect(() => {
    AOS.init({
      duration: 200,
      easing: 'ease-in-out',
      once: false
    });
  }, []);
  return (
    
    <section className="grid my-16 lg:grid-cols-2 grid-cols-1">
       <div className='border-y-4 w-fit border-gray-800 p-2 rounded-md hover:border-rose-600' data-aos="zoom-in">
      <Image
        src="/ndovu.jpeg"
        width={500}
        height={500}
        objectFit="cover"
        alt="ndovu"
        
      />
    </div>
        <div data-aos="fade-left">
          <h1 className='text-slate-100 text-xl py-2'>About Me</h1>
          <h1 className='lg:text-3xl text-2xl'><span className='text-rose-600'>Ambitious,</span> Collaborative <br/> Software 
            <span className='font-medium text-rose-600'> Engineer</span></h1>
          <p className='text-slate-200 leading-loose lg:text-xl py-2'>
          I am an ambitious and self-driven software developer with a
          strong commitment to learning and adapting to emerging
          technologies and innovative ideas. My passion for coding
          and problem-solving, combined with a collaborative
          mindset, allows me to excel both as an individual
          contributor and as a valuable team player. I am seeking a
          software development internship where I can leverage my
          skills, contribute to meaningful projects, and further enhance
          my technical expertise.
          </p>
          <Socials/>
        </div>
    </section>
       
      
  
  )
}

export default About
