'use client'

import React from 'react'
import { Github, Linkedin, Mail, X } from 'lucide-react';
import { Card, CardBody, Tooltip } from '@chakra-ui/react';
function Socials() {
  return (
    <div className='flex'>
    <Card color="rose.600" bg="stone.800" className='bg-stone-800 hover:bg-rose-600 hover:text-slate-200 text-rose-600 p-2 mx-2 rounded-md'>
    <CardBody>
    <Tooltip bg="stone.800" label="Github" color="white" border="2px">
         <Github />
    </Tooltip>
       
    </CardBody>
    </Card>
    <Card color="rose.600" bg="stone.800" className='bg-stone-800  hover:bg-rose-600 hover:text-slate-200  text-rose-600 p-2 mx-2 rounded-md'>
    <CardBody>
    <Tooltip bg="stone.800" label="linkedin"  color="white" border="2px">
         <Linkedin />
    </Tooltip>
        
    </CardBody>
   
    </Card>
    <Card color="rose.600" bg="stone.800" className='bg-stone-800  hover:bg-rose-600 hover:text-slate-200  text-rose-600 p-2 mx-2 rounded-md'>
    <CardBody>
    <Tooltip bg="stone.800" label="X"  color="white" border="2px">
         <X /> 
    </Tooltip>
      
    </CardBody>
    
    </Card>
    <Card color="rose.600" bg="stone.800" className='bg-stone-800  hover:bg-rose-600 hover:text-slate-200  text-rose-600 p-2 mx-2 rounded-md'>
    <CardBody>
    <Tooltip bg="stone.800" label="Mail"  color="white" border="2px">
           <Mail/> 
    </Tooltip>
    
    </CardBody>
    
    </Card>
      
    </div>
  )
}

export default Socials
