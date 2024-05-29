'use client'

import React from 'react'
import { Github, Linkedin, Mail, X } from 'lucide-react';
import { Card, CardBody, Tooltip } from '@chakra-ui/react';
function Socials() {
  return (
    <div className='flex'>
    <Card className='bg-gray-800 hover:bg-rose-600 hover:text-slate-200 text-rose-600 p-2 mx-2 rounded-md'>
    <CardBody>
    <Tooltip label="Github" bg='gray.300' color="white" border="2px">
         <Github />
    </Tooltip>
       
    </CardBody>
    </Card>
    <Card className='bg-gray-800  hover:bg-rose-600 hover:text-slate-200  text-rose-600 p-2 mx-2 rounded-md'>
    <CardBody>
    <Tooltip label="linkedin" bg='gray.300' color="white" border="2px">
         <Linkedin />
    </Tooltip>
        
    </CardBody>
   
    </Card>
    <Card className='bg-gray-800  hover:bg-rose-600 hover:text-slate-200  text-rose-600 p-2 mx-2 rounded-md'>
    <CardBody>
    <Tooltip label="X" bg='gray.300' color="white" border="2px">
         <X /> 
    </Tooltip>
      
    </CardBody>
    
    </Card>
    <Card className='bg-gray-800  hover:bg-rose-600 hover:text-slate-200  text-rose-600 p-2 mx-2 rounded-md'>
    <CardBody>
    <Tooltip label="Mail" bg='gray.300' color="white" border="2px">
           <Mail/> 
    </Tooltip>
    
    </CardBody>
    
    </Card>
      
    </div>
  )
}

export default Socials
