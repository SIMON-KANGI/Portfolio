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
        src="/ibima.png"
        width="500"
        height="500"
        alt="petWill"
      />
      </div>
        <div className='mx-8 w-fit'>
        <span className='text-rose-600'>Web App</span>
          <h1 className='lg:text-4xl text-2xl my-3'>IBIMA Company <br/>Dashboard</h1>
          <article className='text-slate-200 text-xl leading-loose'>
            Developed an admin dashboard for Ibima insurance company<br/> that helps the company manage their sales and transactions<br/>
          </article>
          <Tooltip label="live demo" color="white" border=" solid 1px red" paddingX={"5px"}>
            <Link target="_blank" href="https://admin.demo.ibima.co.ke/login" className='rounded-full border my-8 border-rose-600 
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
            src="/clientibima.png"
            width="500"
            height="500"
            alt="Fresh Picks Groceries"
          />
        </div>
        <div className='mx-8 w-fit order-2 lg:order-1'>
          <span className='text-rose-600'>Web App</span>
          <h1 className='lg:text-4xl text-2xl my-3'>IBIMA Client Web App</h1>
          <article className='text-slate-200 text-xl leading-loose'>
            Developed a progressive web application for ibima insurance company.<br />This web app helps 
            their clients purchase insurance covers online <br />and displays a variety of thier products.
          </article>
          <Tooltip label="live demo" color="white" border=" solid 1px red" paddingX={"5px"}>
            <Link target="_blank" href="https://insurance.ibima.co.ke/" className='rounded-full border my-8 border-rose-600 
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
        src="/nobero.png"
        width="500"
        height="500"
        alt="techverse"
      />
      </div>
        <div className='mx-8 w-fit'>
        <span className='text-rose-600'>Web App</span>
          <h1 className='lg:text-4xl text-2xl my-3'>Nobero Eccomerce</h1>
          <article className='text-slate-200 text-xl  leading-loose'>
            Did a web scrapping project for the nobero eccomerce website.<br/> I used a combination of React in the frontend and Django for the backend.<br/>.
          </article>
          <Tooltip label="live demo" color="white" border=" solid 1px red" paddingX={"5px"}>
            <Link target="_blank" href="https://noberoclone.netlify.app/" className='rounded-full border my-8 border-rose-600 
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
