"use client"
import React, { useEffect } from 'react';
import Socials from '@/components/Socials';
import ReactRotatingText from 'react-rotating-text';
import Image from 'next/image';
import About from '@/components/About';
import Services from '@/components/Services';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Link from 'next/link';

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 500,
      easing: 'ease-in-out',
      once: false
    });
  }, []);
  return (
    <main className="w-full">
      <section id="display" className='grid lg:grid-cols-2 grid-cols-1 justify-center lg:p-24 p-0 w-full  h-full'>
        <div id="display-1" data-aos="fade-right"  className=" justify-center flex-col mt-10 overflow-hidden lg:order-1 order-2 w-fit">
        <div className='block text-center lg:text-left  left-0'>
        <h1 className="text-center lg:text-left text-xl">Hello I &apos; m</h1>
          <h1 className="lg:text-5xl text-3xl font-extrabold pt-2"><span className='text-rose-600'>Simon </span>Mwangi</h1>
          </div>
          <h2 className="lg:text-4xl  text-center lg:text-left  text-xl py-6 text-primary font-semibold text-rose-500">
             <ReactRotatingText items={['Frontend Developer', 'Backend Developer', 'Fullstack Developer','Junior Developer']}/>
          </h2>
          <p className='text-slate-100 text-xl lg:px-0 px-3 pt-3 w-75 leading-loose'>
            I am an ambitious and aspiring senior software developer with a passion and interest in developing
              robust mobile, desktop and web application
          </p>
          <div className='py-3 lg:mx-0 my-4'>
            <button  className='text-center lg:w-fit w-full my-2 lg:mx-3 mx-3 hover:bg-black hover:border hover:border-rose-600 bg-rose-600 lg:px-8 py-3 rounded-md font-bold text-slate-100'>
            <Link href="/CV.pdf" target="_blank"> View Resume</Link>
           </button>
            <button className='text-center lg:w-fit w-full mx-3 lg:my-2 mb-4 bg-black border border-rose-600 hover:bg-rose-600 lg:px-10 py-3 rounded-md font-bold text-slate-100'>Contact</button>
          </div>
          <div className=''>
            <Socials/>
          </div>
         
        </div>
        <div className='lg:w-fit w-full lg:items-start items-center justify-center flex lg:order-2 order-1' data-aos="fade-left" >
         <img
          src="/ndovu.jpeg"
          className='rounded-full lg:w-full w-72 lg:h-height '
          alt="ndovu"
         
         />
        </div>
      </section>
      <section id='about' className='lg:mx-0 mx-4' >
      <About/>
      </section>
      <section id="services" className='text-center lg:my-10 my-8' data-aos="fade-up">
        <h1 className='text-center lg:text-3xl text-2xl font-medium'>Here are some of the current<br/> <span className='text-rose-600'>services</span> I can offer</h1>

        <Services/>
      </section>
      <section id='skills' className='mt-6'>
      <h1 className='text-lg text-center'>I have <span className='text-rose-600'>Learnt</span></h1>
      <h1 className='text-center lg:text-3xl text-2xl font-medium'>Professional Skills & Talents</h1>

<Skills/>
      </section>
      <section id="projects" data-aos="fade-up">
      <h1 className='text-center text-xl'>What I have been <span className='text-rose-600'>Working</span> on</h1>
        <h1 className='text-center text-3xl font-medium'>My Projects</h1>
        <Projects/>
      </section>
      <section id="contact">
  <Contact/>
      </section>
      
    </main>
  );
}
