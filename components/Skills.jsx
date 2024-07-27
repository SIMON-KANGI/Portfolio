import Image from 'next/image'
import React from 'react'
import { Card, CardBody } from '@chakra-ui/react'
import Chakra from './chakra/chakra'
function Skills() {
  return (
   
        <div className='grid lg:grid-cols-6 grid-cols-2 p-4'>
  
      <Card bg="stone.800" className=' flex my-2 flex-col justify-center items-center hover:border hover:border-rose-600  text-rose-600 p-4 mx-2 rounded-md'>
        <CardBody>
          <Image
            src="/html.png"
            width="50"
            height="50"
            alt="html"
            className='rounded-full '
          />
          <h1 className='text-center font-bold text-xl pt-4'>HTML</h1>
        </CardBody>
      </Card>
      <Card bg="stone.800" className='bg-stone-900 flex my-2  flex-col justify-center items-center hover:border hover:border-rose-600  text-rose-600 p-4 mx-2 rounded-md'>
        <CardBody>
          <Image
            src="/css.png"
            width="50"
            height="50"
            alt="css"
            className='rounded-full '
          />
          <h1 className='text-center font-bold text-xl pt-4'>CSS</h1>
        </CardBody>
      </Card>
      <Card bg="stone.800" className='bg-stone-900 flex my-2 flex-col justify-center items-center hover:border hover:border-rose-600  text-rose-600 p-4 mx-2 rounded-md'>
        <CardBody>
          <Image
            src="/react.png"
            width="50"
            height="50"
            alt="react"
            className='rounded-full '
          />
          <h1 className='text-center font-bold text-xl pt-4'>React</h1>
        </CardBody>
      </Card>
      <Card bg="stone.800" className='bg-stone-900 flex my-2 flex-col justify-center items-center hover:border hover:border-rose-600  text-rose-600 p-4 mx-2 rounded-md'>
        <CardBody className='items-center justify-center'>
          <Image
            src="/react.png"
            width="50"
            height="50"
            alt="react"
            className='rounded-full '
          />
          <h1 className='text-center font-bold text-xl pt-4'>React Native</h1>
        </CardBody>
      </Card>
      <Card bg="stone.800" className='bg-stone-900 flex my-2 flex-col justify-center items-center hover:border hover:border-rose-600  text-rose-600 p-4 mx-2 rounded-md'>
        <CardBody>
          <Image
            src="/javascript.png"
            width="50"
            height="50"
            alt="javascript"
            className='rounded-full '
          />
          <h1 className='text-center font-bold text-xl pt-4'>Javascript</h1>
        </CardBody>
      </Card>
      <Card bg="stone.800" className='bg-stone-900 flex my-2 flex-col justify-center items-center hover:border hover:border-rose-600  text-rose-600 p-4 mx-2 rounded-md'>
        <CardBody>
          <Image
            src="/next.png"
            width="50"
            height="50"
            alt="next Js"
            className='rounded-full '
          />
          <h1 className='text-center font-bold text-xl pt-4'>Next Js</h1>
        </CardBody>

      </Card>
      <Card bg="stone.800" className='bg-stone-900 flex my-2 flex-col justify-center items-center hover:border hover:border-rose-600  text-rose-600 p-4 mx-2 rounded-md'>
        <CardBody>
          <Image
            src="/python.jpg"
            width="50"
            height="50"
            alt="python"
            className='rounded-full '
          />
          <h1 className='text-center font-bold text-xl pt-4'>Python</h1>
        </CardBody>
      </Card>
      <Card bg="stone.800" className='bg-stone-900 flex my-2 flex-col justify-center items-center hover:border hover:border-rose-600  text-rose-600 p-4 mx-2 rounded-md'>
        <CardBody>
          <Image
            src="/sql.png"
            width="70"
            height="70"
            alt="sql"
            className=' '
          />
          <h1 className='text-center font-bold text-xl pt-4'>My SQL</h1>
        </CardBody>
      </Card>
      <Card bg="stone.800" className='bg-stone-900 flex my-2 flex-col justify-center items-center hover:border hover:border-rose-600  text-rose-600 p-4 mx-2 rounded-md'>
        <CardBody className='items-center'>
          <Image
            src="/tailwind.png"
            width="50"
            height="50"
            alt="tailwind"
            className='items-center'
          />
          <h1 className='text-center font-bold text-xl pt-4'>Tailwind CSS</h1>
        </CardBody>
      </Card>
      <Card bg="stone.800" className='bg-stone-900 flex my-2 flex-col justify-center items-center hover:border hover:border-rose-600  text-rose-600 p-4 mx-2 rounded-md'>
        <CardBody>
          <Image
            src="/bootstrap.png"
            width="50"
            height="50"
            alt="bootstrap"
            className='rounded-full '
          />
          <h1 className='text-center font-bold text-xl pt-4'>Bootstrap</h1>
        </CardBody>
      </Card>
      <Card bg="stone.800" className='bg-stone-900 flex my-2 flex-col justify-center items-center hover:border hover:border-rose-600  text-rose-600 p-4 mx-2 rounded-md'>
        <CardBody>
          <Image
            src="/flask.png"
            width="50"
            height="50"
            alt="flask"
            className='rounded-full'
          />
          <h1 className='text-center font-bold text-xl pt-4'>Flask</h1>
        </CardBody>
      </Card>
    </div>
  
  
  )
}

export default Skills
