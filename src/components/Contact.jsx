import React from 'react'

const Contact = () => {
  return (
    <div className='subpixel-antialiased'>
        <div className='max-w-[580px] flex flex-col mx-auto items-center text-center'>
            <h1 className='text-[#1c3879] font-medium text-2xl'><span className='text-xl'>04.&nbsp;&nbsp;</span>What's Next?</h1>
            <h1 className='text-5xl font-bold mt-4 mb-4'>Get In Touch</h1>
            <p className='mb-14 text-gray-500'>I'm currently looking for any new opportunities for a junior developer 
                position or level 1 position. Whether you have a question or just want 
                to say hi, I'll try my best to get back to you!
            </p>
            <button className='px-10 py-5 hover:bg-[#607EAA] duration-500 ease-in-out'>Say Hello</button>
        </div>
    </div>
  )
}

export default Contact