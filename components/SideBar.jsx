'use client'

import React from 'react';
import { Drawer, DrawerBody, DrawerCloseButton, DrawerContent,Box, DrawerHeader, DrawerOverlay, useDisclosure } from '@chakra-ui/react';
import { Menu } from 'lucide-react';
import Socials from './Socials';

function SideBar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  
  return (
    <div>
      <button className='btn' onClick={onOpen} aria-label="Open sidebar">
        <Menu className='text-rose-600' />
      </button>
      <Drawer bg="stone.900" onClose={onClose} isOpen={isOpen} size="md" placement='left'>
        <DrawerOverlay />
        <DrawerContent bg="stone.900">
        <DrawerCloseButton color="rose.600"/>
          <DrawerHeader>
            <article className='text-stone-400 text-xl lg:px-0 px-3 pt-3 w-75 leading-loose'>
              I am an ambitious and aspiring senior software developer with a passion and interest in developing
              robust mobile, desktop, and web applications.
            </article>
          </DrawerHeader>
          <Box as="hr" border="2px" borderColor='stone.800'/>
          <DrawerBody>
          <nav className='text-center '>
            <ul className='grid grid-cols-3 p-4 text-white font-bold'>
             <li className='mx-6  text-rose-600'><a href="/">Home</a></li>
                <li className='mx-6 text-stone-400'><a href="#about">About</a></li>
                <li className='mx-6  text-stone-400'><a href="#services">Services</a></li>
               
               
                <li className='mx-6  text-stone-400'><a href="#skills">Skills</a></li>
                <li className='mx-6  text-stone-400'><a href="#projects">Projects</a></li>
                <li className='mx-6  text-stone-400'><a href="#ontact">Contact</a></li>
            </ul>
        </nav>
        <Box as="hr" border="2px" borderColor='stone.800'/>
        <h1 className='text-2xl text-stone-400 my-6'>Reach Me</h1>
        <Socials/>
        <Box as="hr" border="2px" marginTop={"3rem"} borderColor='stone.800'/>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </div>
  );
}

export default SideBar;
