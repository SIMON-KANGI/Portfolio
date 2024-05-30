import React from 'react'

function Footer() {
  return (
    
    <footer className='flex lg:w-screen mt-8 p-6 bg-stone-800 top-0 z-10 justify-around'>
    <h1 className='text-slate-100 font-bold lg:text-2xl text-xl font-serif'>Copyright &copy;2024 <span className='text-rose-600 text-base'>Simon Mwangi </span>
    All Rights Reserved
    </h1>
        <nav className='text-center lg:flex bg-none hidden'>
            <ul className='lg:flex  text-white font-bold'>
                <li className='mx-3'><a href="/">Home</a></li>
                <li className='mx-3'><a href="#about">About</a></li>
                <li className='mx-3'><a href="#services">Services</a></li>
                <li className='mx-3'><a href="#skills">Skills</a></li>
                <li className='mx-3'><a href="#projects">Projects</a></li>
                <li className='mx-3'><a href="#ontact">Contact</a></li>
            </ul>
        </nav>
    </footer>
      
    
  )
}

export default Footer
