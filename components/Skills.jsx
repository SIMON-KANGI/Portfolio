import Image from 'next/image'
import React from 'react'
import { Card, CardBody } from '@chakra-ui/react'
function Skills() {
  return (
    <div className='grid lg:grid-cols-6 grid-cols-2 p-4'>
      <Card className='bg-stone-900 flex my-2 flex-col justify-center items-center hover:border hover:border-rose-600  text-rose-600 p-4 mx-2 rounded-md'>
        <CardBody>
          <Image
            src="/html-1.svg"
            width="50"
            height="50"
          />
          <h1 className='text-center'>HTML</h1>
        </CardBody>
      </Card>
      <Card className='bg-stone-900 flex my-2  flex-col justify-center items-center hover:border hover:border-rose-600  text-rose-600 p-4 mx-2 rounded-md'>
        <CardBody>
          <Image
            src="/css.png"
            width="50"
            height="50"
          />
          <h1 className='text-center'>CSS</h1>
        </CardBody>
      </Card>
      <Card className='bg-stone-900 flex my-2 flex-col justify-center items-center hover:border hover:border-rose-600  text-rose-600 p-4 mx-2 rounded-md'>
        <CardBody>
          <Image
            src="/react.jpg"
            width="50"
            height="50"
          />
          <h1 className='text-center'>React</h1>
        </CardBody>
      </Card>
      <Card className='bg-stone-900 flex my-2 flex-col justify-center items-center hover:border hover:border-rose-600  text-rose-600 p-4 mx-2 rounded-md'>
        <CardBody>
          <Image
            src="/javascript.png"
            width="50"
            height="50"
          />
          <h1 className='text-center'>Javascript</h1>
        </CardBody>
      </Card>
      <Card className='bg-stone-900 flex my-2 flex-col justify-center items-center hover:border hover:border-rose-600  text-rose-600 p-4 mx-2 rounded-md'>
        <CardBody>
          <Image
            src="/next.png"
            width="50"
            height="50"
          />
          <h1 className='text-center'>Next Js</h1>
        </CardBody>

      </Card>
      <Card className='bg-stone-900 flex my-2 flex-col justify-center items-center hover:border hover:border-rose-600  text-rose-600 p-4 mx-2 rounded-md'>
        <CardBody>
          <Image
            src="/python.jpg"
            width="50"
            height="50"
          />
          <h1 className='text-center'>Python</h1>
        </CardBody>
      </Card>
      <Card className='bg-stone-900 flex my-2 flex-col justify-center items-center hover:border hover:border-rose-600  text-rose-600 p-4 mx-2 rounded-md'>
        <CardBody>
          <Image
            src="/sql.png"
            width="50"
            height="50"
          />
          <h1 className='text-center'>SQL</h1>
        </CardBody>
      </Card>
      <Card className='bg-stone-900 flex my-2 flex-col justify-center items-center hover:border hover:border-rose-600  text-rose-600 p-4 mx-2 rounded-md'>
        <CardBody>
          <Image
            src="/tailwind.png"
            width="50"
            height="50"
          />
          <h1 className='text-center'>Tailwind CSS</h1>
        </CardBody>
      </Card>
      <Card className='bg-stone-900 flex my-2 flex-col justify-center items-center hover:border hover:border-rose-600  text-rose-600 p-4 mx-2 rounded-md'>
        <CardBody>
          <Image
            src="/bootstrap.png"
            width="50"
            height="50"
          />
          <h1 className='text-center'>Bootstrap</h1>
        </CardBody>
      </Card>
      <Card className='bg-stone-900 flex my-2 flex-col justify-center items-center hover:border hover:border-rose-600  text-rose-600 p-4 mx-2 rounded-md'>
        <CardBody>
          <Image
            src="/flask.png"
            width="50"
            height="50"
          />
          <h1 className='text-center'>Flask</h1>
        </CardBody>
      </Card>
    </div>
  )
}

export default Skills
