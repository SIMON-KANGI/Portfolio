import { Card, CardBody, CardHeader } from '@chakra-ui/react'
import React,{useEffect} from 'react'
import { Globe,CodeXml, Bug } from 'lucide-react'
import AOS from 'aos'
import 'aos/dist/aos.css';
function Services() {
  useEffect(() => {
    AOS.init({
      duration: 200,
      easing: 'ease-in-out',
      once: true
    });
  }, []);
  return (
    <div className='grid lg:grid-cols-3 grid-cols-1 lg:mx-0 mx-3 mt-3'>
      <Card color="rose.600" bg="stone.800" className='bg-stone-900 flex flex-col my-2 justify-center items-center 
       hover:border hover:border-rose-600  text-rose-600 p-4 mx-2 rounded-md' data-aos="flip-right">
      <CardBody>
        <div className='flex justify-center items-center'>
          <Globe />   
        </div>
        <h1 className=' text-center text-xl py-2'>
          Web Design
        </h1>
        <p className='text-slate-100 text-xl'>Design responsive webpages for any use. ie Eccomerce Websites, Blogs etc</p>
      </CardBody>
    </Card>
      <Card color="rose.600" data-aos="flip-right" bg="stone.800" className='bg-stone-900 flex  my-2 flex-col justify-center items-center hover:border hover:border-rose-600  text-rose-600 p-2 mx-2 rounded-md'>
        <CardBody>
        <CardHeader className='flex justify-center items-center'>
         <CodeXml />
      
        </CardHeader>
        <h1 className='text-slate-100 text-xl py-2'>API Design/Testing</h1>
        <p className='text-slate-100 text-xl leading-loose'>Design highly scallable restfull APIs and test API endpoints</p>
        </CardBody>
      </Card>
      <Card color="rose.600" data-aos="flip-right" bg="stone.800" className='bg-stone-900 flex my-2 flex-col justify-center items-center hover:border hover:border-rose-600  text-rose-600 p-2 mx-2 rounded-md'>
        <CardBody>
        <CardHeader className='flex justify-center items-center'>
        <Bug />
        </CardHeader>
        
        <h1 className='text-slate-100 text-xl py-2'>Debuging</h1>
        <p className='text-slate-100 text-xl leading-loose'>Perform debugging on written code and solve issues related to it.</p>
        </CardBody>
      </Card>
    </div>
  )
}

export default Services
