'use client'

import React,{useEffect} from 'react'
import SideBar from './SideBar'
import Link from 'next/link';

function Navbar() {
  useEffect(() => {
    const handleScroll = () => {
        const navbar = document.querySelector(".header");
        if (navbar) {
            const scrollTop = window.scrollY || document.documentElement.scrollTop;
            if (scrollTop > 0) {
                navbar.classList.add("navbar-glassmorphism");
                navbar.classList.add("shadow-md");
            } else {
                navbar.classList.remove("navbar-glassmorphism");
                navbar.classList.remove("shadow-md");
            }
        }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
}, []);

  return (
    
    <header className='header flex w-full p-6 sticky  top-0 z-10 lg:justify-around justify-between' id="header">
    <Link href="/" className='text-slate-100 font-bold text-2xl font-serif'><span className='text-rose-600'>Simon </span>Mwangi</Link>
        <nav className='text-center lg:flex hidden' >
            <ul className='flex text-white font-bold'>
                <li className='mx-3'><a href="/">Home</a></li>
                <li className='mx-3'><a href="#about">About</a></li>
                <li className='mx-3'><a href="#services">Services</a></li>
                <li className='mx-3'><a href="#skills">Skills</a></li>
                <li className='mx-3'><a href="#projects">Projects</a></li>
                <li className='mx-3'><a href="#contact">Contact</a></li>
            </ul>
        </nav>
        <div className='lg:hidden flex'><SideBar/></div>
    </header>
     
    
  )
}

export default Navbar
