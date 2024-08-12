import { Card, CardBody, Tooltip } from '@chakra-ui/react'
import Image from 'next/image'
import React,{useEffect} from 'react'
import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'
import AOS from 'aos'
import 'aos/dist/aos.css';
function Projects() {
  useEffect(() => {
    AOS.init({
      duration: 200,
      easing: 'ease-in-out',
      once: true
    });
  }, []);
  return (
    <div className='my-6'>
      <Card bg="stone.900" className='my-16' data-aos="fade-right" data-aos-offset='500'>
      <CardBody className='lg:flex'>
      <div className='border-2 border-stone-800 p-8 hover:border-rose-600 rounded-md'>
        <Image
        src="/petwill.png"
        width="500"
        height="500"
        alt="petWill"
      />
      </div>
        <div className='mx-8 w-fit'>
        <span className='text-rose-600'>Web App</span>
          <h1 className='lg:text-4xl text-2xl my-3'>The Petwill Company <br/>Dashboard</h1>
          <article className='text-slate-200 text-xl leading-loose'>
            Collaborated with my group of aspiring developers and came up with a<br/> company dashboard for a 
            construction company. A web application <br/>for the Petwill Company to manage their business
          </article>
          <Tooltip label="live demo" color="white" border=" solid 1px red" paddingX={"5px"}>
            <Link target="_blank" href="https://petwill.netlify.app/" className='rounded-full border my-8 border-rose-600 
           text-rose-600 font-bold hover:bg-rose-600 hover:text-slate-200 w-14 h-14 justify-center flex items-center'>
          <ArrowUpRight />
          </Link>
          </Tooltip>
          
        </div>
      </CardBody>
      
      </Card>
      <Card bg="stone.900" className='my-16' data-aos="fade-left">
      <CardBody className='lg:flex flex-col lg:flex-row'>
        <div className='border-2 border-stone-800 p-8 hover:border-rose-600 rounded-md order-1 lg:order-2'>
          <Image
            src="/fresh.png"
            width="500"
            height="500"
            alt="Fresh Picks Groceries"
          />
        </div>
        <div className='mx-8 w-fit order-2 lg:order-1'>
          <span className='text-rose-600'>Web App</span>
          <h1 className='lg:text-4xl text-2xl my-3'>Fresh Picks Groceries</h1>
          <article className='text-slate-200 text-xl leading-loose'>
            Collaborated with my group of aspiring developers and came up with <br /> Fresh Picks web app for a 
            grocery company. A web application <br />for displaying products and online shopping
          </article>
          <Tooltip label="live demo" color="white" border=" solid 1px red" paddingX={"5px"}>
            <Link target="_blank" href="https://group-c-vbxo.vercel.app/" className='rounded-full border my-8 border-rose-600 
              text-rose-600 font-bold hover:bg-rose-600 hover:text-slate-200 w-14 h-14 justify-center flex items-center'>
              <ArrowUpRight />
            </Link>
          </Tooltip>
        </div>
      </CardBody>
    </Card>
      <Card bg="stone.900" className='my-16' data-aos="fade-right">
      <CardBody className='lg:flex'>
      <div className='border-2 border-stone-800 p-8 hover:border-rose-600 rounded-md'>
        <Image
        src="/techverse.png"
        width="500"
        height="500"
        alt="techverse"
      />
      </div>
        <div className='mx-8 w-fit'>
        <span className='text-rose-600'>Web App</span>
          <h1 className='lg:text-4xl text-2xl my-3'>TechVerse</h1>
          <article className='text-slate-200 text-xl  leading-loose'>
            Collaborated with my group of aspiring developers and <br/>came up with TechVerse Web Application.
            TechVerse<br/> is a software engineering students motivation app.
          </article>
          <Tooltip label="live demo" color="white" border=" solid 1px red" paddingX={"5px"}>
            <Link target="_blank" href="https://techverse-1.onrender.com/" className='rounded-full border my-8 border-rose-600 
           text-rose-600 font-bold hover:bg-rose-600 hover:text-slate-200 w-14 h-14 justify-center flex items-center'>
          <ArrowUpRight />
          </Link>
          </Tooltip>
          
        </div>
        
      </CardBody>
      
      </Card>
      <Card bg="stone.900" className='my-16' data-aos="fade-left" >
      <CardBody className='lg:flex'>
      <div className='border-2 border-stone-800 p-8 hover:border-rose-600 lg:order-2 order-1 rounded-md'>
        <Image
        src="/repay.png"
        width="500"
        height="500"
        alt="techverse"
      />
      </div>
        <div className='mx-8 w-fit lg:order-1 order-last '>
        <span className='text-rose-600'>Web App</span>
          <h1 className='lg:text-4xl text-2xl my-3'>REPAY</h1>
          <article className='text-slate-200 text-xl  leading-loose'>
          The Account Management App is a comprehensive solution designed to streamline <br/>and enhance the management of 
          personal and business accounts. This application <br/>provides users with a centralized platform to track, 
          manage, and analyze their financial <br/>activities with ease and efficiency.
          </article>
          <Tooltip label="live demo" color="white" border=" solid 1px red" paddingX={"5px"}>
            <Link target="_blank" href="https://repayapp.netlify.app/" className='rounded-full border my-8 border-rose-600 
           text-rose-600 font-bold hover:bg-rose-600 hover:text-slate-200 w-14 h-14 justify-center flex items-center'>
          <ArrowUpRight />
          </Link>
          </Tooltip>
          
        </div> 
      
        
      </CardBody>
      
      </Card>
      <Card bg="stone.900" className='my-16' data-aos="fade-right" >
      <CardBody className='lg:flex'>
     
        
        <div className='border-2 border-stone-800 p-8 hover:border-rose-600 lg:order-1 order-2 rounded-md'>
        <Image
        src="/repaymobile.png"
        width="500"
        height="500"
        alt="techverse"
      />
      </div>
        <div className='mx-8 w-fit lg:order-2'>
        <span className='text-rose-600'>Mobile App</span>
          <h1 className='lg:text-4xl text-2xl my-3'>REPAY MOBILE</h1>
          <article className='text-slate-200 text-xl  leading-loose'>
          Transformed the Repay web Application to a mobile  App. This is a comprehensive solution designed to streamline and enhance the management of 
          personal and business accounts. This application <br/>provides users with a centralized platform to track, 
          manage, and analyze their financial <br/>activities with ease and efficiency.
          </article>
          <Tooltip label="live demo" color="white" border=" solid 1px red" paddingX={"5px"}>
            <Link target="_blank" href="https://github.com/SIMON-KANGI/REPAY-MOBILE" className='rounded-full border my-8 border-rose-600 
           text-rose-600 font-bold hover:bg-rose-600 hover:text-slate-200 w-14 h-14 justify-center flex items-center'>
          <ArrowUpRight />
          </Link>
          </Tooltip>
          
        </div> 
      </CardBody>
      
      </Card>
    </div>
  )
}

export default Projects
