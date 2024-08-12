import React, { useState, useEffect } from 'react';
import { Send } from 'lucide-react';
import { useToast } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import AOS from 'aos';
import 'aos/dist/aos.css';
function Form() {
  const toast = useToast();
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: '',
    subject: '',
    message: '',
  });

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const res = await fetch('/api/clients', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      const data = await res.json();
      console.log(data);
      toast({
        title: 'Success',
        description: 'Thank you for reaching out.',
        status: 'success',
        duration: 9000,
        isClosable: true,
      });
      router.push('/');
      router.refresh();
    } else {
      const error = await res.json();
      console.error(error);
      toast({
        title: 'Error',
        description: error.message || 'An error occurred. Please try again.',
        status: 'error',
        duration: 9000,
        isClosable: true,
      });
    }
  }
  useEffect(() => {
    AOS.init({
      duration: 500,
      easing: 'ease-in-out',
      once: true
    });
  }, []);
  return (
    <div>
      <form onSubmit={handleSubmit} method="POST">
        <div className="lg:grid grid-cols-2">
          <div className="flex flex-col mx-3">
            <label className="lg:text-xl my-4 text-slate-200 font-bold">
              Full Name<span className="text-rose-600">*</span>
            </label>
            <input
              onChange={handleChange}
              value={formData.name}
              type="text"
              name="name"
              className="bg-stone-800 rounded-md p-3 text-slate-300"
              placeholder="Name"
              required
            />
          </div>
          <div className="flex flex-col mx-3">
            <label className="lg:text-xl my-4 font-bold text-slate-200">
              Email<span className="text-rose-600">*</span>
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={handleChange}
              name="email"
              placeholder="Email"
              className="bg-stone-800 text-slate-300 rounded-md p-3"
              required
            />
          </div>
        </div>
        <div className="lg:grid grid-cols-2">
          <div className="flex flex-col mx-3">
            <label className="lg:text-xl my-4 font-bold text-slate-200">
              Phone Number<span className="text-rose-600">*</span>
            </label>
            <input
              type="number"
              value={formData.number}
              onChange={handleChange}
              name="number"
              placeholder="Phone number"
              className="bg-stone-800 text-slate-300 rounded-md p-3"
              required
            />
          </div>
          <div className="flex flex-col mx-3">
            <label className="lg:text-xl my-4 font-bold text-slate-200">
              Subject<span className="text-rose-600">*</span>
            </label>
            <input
              type="text"
              value={formData.subject}
              onChange={handleChange}
              name="subject"
              placeholder="Subject"
              className="bg-stone-800 text-slate-300 rounded-md p-3"
              required
            />
          </div>
        </div>
        <div className="flex flex-col mx-3">
          <label className="lg:text-xl my-4 text-slate-200 font-bold">
            Message <span className="text-rose-600">*</span>
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Message"
            className="bg-stone-800 p-3 text-white rounded-md"
            required
          />
        </div>
        <button
          type="submit"
          className="lg:w-60 py-3 lg:mx-4 my-4 lg:my-8 bg-rose-600 text-slate-200 text-xl flex justify-center w-full rounded-md hover:bg-stone-950 hover:text-rose-600 hover:border hover:border-rose-600"
        >
          Send Message
          <Send />
        </button>
      </form>
    </div>
  );
}

export default Form;
