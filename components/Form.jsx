import React from 'react'
import { Send } from 'lucide-react'
function Form() {
  return (
    <div>
      <form>
      <div className="lg:grid grid-cols-2">
      <div className='flex flex-col mx-3'>
 <label className='lg:text-xl my-4 text-slate-200 font-bold'>
        Full Name<span className='text-rose-600'>*</span>
           </label> 
        <input type="text" name="name" className='bg-stone-800 rounded-md p-3 text-slate-300' placeholder="Name" required/>
      </div>
           <div className='flex flex-col mx-3'>
<label className='lg:text-xl my-4 font-bold text-slate-200'>
        Email<span className='text-rose-600'>*</span>
            
        </label>   
          <input type="email" name="email" placeholder="Email" className='bg-stone-800 text-slate-300 rounded-md p-3' required/> 
           </div>
        
        </div>
        <div className="lg:grid grid-cols-2">
        <div className='flex flex-col mx-3'>
        <label className='lg:text-xl my-4 font-bold text-slate-200'>
        Phone Number<span className='text-rose-600'>*</span>
           
        </label> 
        <input type="number" name="number" placeholder="Phone number" className='bg-stone-800 text-slate-300 rounded-md p-3' required/>
        </div>
      <div className='flex flex-col'>
<label className='lg:text-xl my-4 font-bold text-slate-200'>
        Subject<span className='text-rose-600'>*</span>
         </label>   
        <input type="text" name="subject" placeholder="Subject" className='bg-stone-800 text-slate-300 rounded-md p-3' required/> 
      </div>
          
        </div>
        <div className='flex flex-col mx-3'>
        <label className='lg:text-xl my-4 text-slate-200 font-bold'>Message <span className='text-rose-600'>*</span></label>
 <textarea name="message" placeholder='message' className='bg-stone-800 p-3 text-white rounded-md'/>
        </div>
        <button type="submit" className='lg:w-60 py-3 lg:mx-4 my-4 lg:my-8 bg-rose-600
         text-slate-200 text-xl flex justify-center w-full rounded-md hover:bg-stone-950 hover:text-rose-600 hover:border hover:border-rose-600'>Send Message
        <Send />
        </button>
      
      </form>
    </div>
  )
}

export default Form
