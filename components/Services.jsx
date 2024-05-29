import { Card, CardBody, CardHeader } from '@chakra-ui/react'
import React from 'react'
import { Globe,CodeXml } from 'lucide-react'
function Services() {
  return (
    <div className='grid grid-cols-3 mt-3'>
      <Card className='bg-stone-900 flex flex-col justify-center items-center hover:border hover:border-rose-600  text-rose-600 p-4 mx-2 rounded-md'>
      <CardBody>
        <div className='flex justify-center items-center'>
          <Globe />   
        </div>
        <h1 className='text-slate-100 text-center text-xl py-2'>
          Web Design
        </h1>
        <p className='text-slate-100 text-xl'>Design responsive webpages for all usage</p>
      </CardBody>
    </Card>
      <Card className='bg-stone-900 flex flex-col justify-center items-center hover:border hover:border-rose-600  text-rose-600 p-2 mx-2 rounded-md'>
        <CardBody>
        <CardHeader className='flex justify-center items-center'>
         <CodeXml />
      
        </CardHeader>
        <h1 className='text-slate-100 text-xl py-2'>API Design/Testing</h1>
        <p className='text-slate-100 text-xl'>Design highly scallable restfull APIs and test API endpoints</p>
        </CardBody>
      </Card>
      <Card className='bg-stone-900 flex flex-col justify-center items-center hover:border hover:border-rose-600  text-rose-600 p-2 mx-2 rounded-md'>
        <CardBody>
        <CardHeader className='flex justify-center items-center'>
           <Globe /> 
        </CardHeader>
        
        <h1 className='text-slate-100 text-xl py-2'>Web Design</h1>
        </CardBody>
      </Card>
    </div>
  )
}

export default Services
