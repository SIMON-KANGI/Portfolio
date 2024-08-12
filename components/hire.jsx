import React from 'react'
import { Modal,ModalBody,ModalContent,ModalCloseButton, useDisclosure, ModalOverlay } from '@chakra-ui/react'
import { FaPhone } from "react-icons/fa6";
import { FiMail } from "react-icons/fi";
import { IoLogoWhatsapp } from "react-icons/io";
function Hire() {
    const {isOpen, onOpen, onClose}= useDisclosure()
  return (
    <div>
      <button className='bg-rose-600 text-white rounded-md px-8 py-3' onClick={onOpen}>Hire Me</button>
      <Modal isOpen={isOpen} onClose={onClose}>
<ModalOverlay/>
<ModalContent className='p-8 bg-stone-200'>
 <ModalCloseButton/>  
 <ModalBody>
      <div>
    <h1 className='text-2xl text-center text-black'>Reach out via</h1>
    <hr/>
    <div className='flex my-8'>
   <FaPhone size={"24"} color='black'/>
   <div className='mx-3'>
      <h2 className='xl font-bold'>Phone</h2>
        <p>+254 797222488 <span>(Mobile)</span></p>
   </div> 
      
    </div>
    <div className='flex my-8'>
   <FiMail size={"24"} color='black'/>
   <div className='mx-3'>
      <h2 className='xl font-bold'>Email</h2>
        <p>simonmwangikangi@gmail.com </p>
   </div> 
      
    </div>
    <div className='flex'>
   <IoLogoWhatsapp size={"24"} color='black'/>
   <div className='mx-3'>
      <h2 className='xl font-bold'>Whatsapp</h2>
        <p>0797222488 / 0714889629</p>
   </div> 
      
    </div>
    </div>
 </ModalBody>
  
</ModalContent>
      </Modal>
    </div>
  )
}

export default Hire
