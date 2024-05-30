import React from 'react'
import SideBar from './SideBar'

function Navbar() {
  return (
    <div>
    <header className='flex w-full p-6  top-0 z-10 lg:justify-around justify-between'>
    <h1 className='text-slate-100 font-bold text-2xl font-serif'><span className='text-rose-600'>Simon </span>Mwangi</h1>
        <nav className='text-center lg:flex hidden'>
            <ul className='flex text-white font-bold'>
                <li className='mx-3'><a href="/">Home</a></li>
                <li className='mx-3'><a href="#about">About</a></li>
                <li className='mx-3'><a href="#services">Services</a></li>
                <li className='mx-3'><a href="#skills">Skills</a></li>
                <li className='mx-3'><a href="#projects">Projects</a></li>
                <li className='mx-3'><a href="#ontact">Contact</a></li>
            </ul>
        </nav>
        <div className='lg:hidden flex'><SideBar/></div>
    </header>
     
    </div> 
  )
}

export default Navbar
