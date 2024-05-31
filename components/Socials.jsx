'use client'

import React from 'react'
import { Github, Linkedin, Mail, X } from 'lucide-react';
import { Box, Card, CardBody, Tooltip } from '@chakra-ui/react';
import Link from 'next/link';
function Socials() {
  return (
    <div className='flex'>
   
   
    <Tooltip bg="stone.800" label="Github" color="white" border="2px">
    <Link href='https://github.com/SIMON-KANGI' color="rose.600" bg="stone.800" className='bg-stone-800 hover:bg-rose-600 flex flex-col justify-center items-center hover:text-slate-200 text-rose-600 p-3  mx-2 rounded-md'>
       <Github />
    </Link>
       
    </Tooltip>
       
   <Tooltip bg="stone.800" label="linkedin"  color="white" border="2px">
    <Link href="/" color="rose.600" bg="stone.800" className='bg-stone-800 flex flex-col justify-center items-center  hover:bg-rose-600 hover:text-slate-200  text-rose-600 p-3  mx-2 rounded-md'>
      <Linkedin />
    </Link>
         
    </Tooltip>
        
   <Tooltip bg="stone.800" label="X"  color="white" border="2px">
    <Link href="/" color="rose.600" bg="stone.800" className='bg-stone-800 flex flex-col justify-center items-center  hover:bg-rose-600 hover:text-slate-200  text-rose-600 p-3  mx-2 rounded-md'>
        <X /> 
    </Link>
       
    </Tooltip>
      
   
    
 
   
    <Tooltip bg="stone.800" label="Mail"  color="white" border="2px">
    <Link href="/" color="rose.600" bg="stone.800" className='bg-stone-800 flex flex-col justify-center items-center  hover:bg-rose-600 hover:text-slate-200  text-rose-600 p-3  mx-2 rounded-md'>
      <Mail/> 
    </Link>
           
    </Tooltip>
    
 
    
   
      
    </div>
  )
}

export default Socials
