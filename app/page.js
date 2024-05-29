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
      <section id="display" className='grid lg:grid-cols-2 grid-cols-1 w-full my-6 h-screen'>
        <div id="display-1" data-aos="fade-right"  className=" justify-center flex-col mt-10 overflow-hidden w-fit">
        <div className='block text-center lg:text-left  left-0'>
        <h1 className="text-center lg:text-left text-xl">Hello I'm</h1>
          <h1 className="lg:text-5xl text-3xl font-extrabold pt-2"><span className='text-rose-600'>Simon </span>Mwangi</h1>
          </div>
          

          <p className="lg:text-4xl text-center lg:text-left  text-xl py-6 text-primary font-semibold text-rose-500">
             <ReactRotatingText items={['FrontEnd Developer', 'Backend Developer', 'Fullstack developer']}/>
          </p>
          <article className='text-slate-100 lg:px-0 px-3 pt-3 w-75'>
            I am an ambitious and aspiring senior software developer with a passion and interest in developing<br/>
              robust mobile, desktop and web application
          </article>
          <div className='py-3 lg:mx-0 mx-3 my-4'>
            <button className='text-center lg:w-fit w-full my-2 mx-3 hover:bg-black hover:border hover:border-rose-600 bg-rose-600 px-8 py-3 rounded-md font-bold text-slate-100'>View Resume</button>
            <button className='text-center lg:w-fit w-full my-2 bg-black border border-rose-600 hover:bg-rose-600 px-8 py-3 rounded-md font-bold text-slate-100'>Contact</button>
          </div>
          <div>
            <Socials/>
          </div>
         
        </div>
        <div className='w-fit' data-aos="fade-left" >
         <Image
          src="/ndovu.jpeg"
          width="0"
          height="400"
          className='rounded-full lg:w-fit w-0'
          layout='responsive'
         />
        </div>
      </section>
      <section id='about' className='lg:mx-0 mx-4' data-aos="fade-up">
      <About/>
      </section>
      <section id="services" className='text-center mt-3' data-aos="fade-up">
        <h1 className='text-center text-3xl font-medium'>Here are some of the current<br/> <span className='text-rose-600'>services</span> I can offer</h1>

        <Services/>
      </section>
      <section id='skills' className='mt-3'>
      <h1 className='text-lg text-center'>I have <span className='text-rose-600'>Learnt</span></h1>
      <h1 className='text-center text-3xl font-medium'>Professional Skills & Talents</h1>

<Skills/>
      </section>
    </main>
  );
}
