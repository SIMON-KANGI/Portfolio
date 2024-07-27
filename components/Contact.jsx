import { Card, CardBody } from '@chakra-ui/react'
import React, {useEffect} from 'react'
import { CircleChevronRight } from 'lucide-react'
import Form from './Form'
import AOS from 'aos';
import 'aos/dist/aos.css';
function Contact() {
  useEffect(() => {
    AOS.init({
      duration: 500,
      easing: 'ease-in-out',
      once: false
    });
  }, []);
  return (
    <div className='lg:grid grid-cols-2' data-aos="fade-up">
      <Card bg="stone.900" className='lg:mx-0 mx-6'>
      <h1 className='text-xl'>Reach Out</h1>
  <p className='lg:text-4xl text-2xl text-slate-200'>I am fully Available for a <span className='text-rose-600'> Job</span> or<br/> 
  <span className='text-rose-600'> internship </span>Opportunities</p>
  <p className='text-slate-200 text-xl my-4'>You can reach me via Email or Phone call</p>
  <ul>
    <li className=' text-xl text-slate-200 my-4 flex'>
    <CircleChevronRight className='text-rose-600' />
    Software Development
    </li>
    <li className='text-xl text-slate-200 my-4 flex'>
    <CircleChevronRight className='text-rose-600' />
    Web Design
    </li>
    <li className='text-xl text-slate-200 my-4 flex'>
    <CircleChevronRight className='text-rose-600' />
    Internship
    </li>
    <li className='text-xl text-slate-200 my-4 flex'>
    <CircleChevronRight className='text-rose-600' />
    FullStack Developer
    </li>
  </ul>
      </Card>
      <Card bg="stone.900">
        <CardBody>
          <Form/>
        </CardBody>
      </Card>
    </div>
  )
}

export default Contact
