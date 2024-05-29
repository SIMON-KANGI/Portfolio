import React from 'react'

function Navbar() {
  return (
    <div>
    <header className='flex w-full p-6  top-0 z-10 justify-around'>
    <h1 className='text-slate-100 font-bold text-2xl font-serif'><span className='text-red-700'>Simon </span>Mwangi</h1>
        <nav className='text-center'>
            <ul className='flex text-white font-bold'>
                <li className='mx-3'><a href="/">Home</a></li>
                <li className='mx-3'><a href="#about">About</a></li>
                <li className='mx-3'><a href="#services">Services</a></li>
                <li className='mx-3'><a href="#projects">Projects</a></li>
                <li className='mx-3'><a href="#ontact">Contact</a></li>
            </ul>
        </nav>
    </header>
      
    </div>
  )
}

export default Navbar
