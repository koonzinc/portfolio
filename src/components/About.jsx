import React from 'react'

const About = () => {
    return (
        <div className='text-[#1c3879] subpixel-antialiased'>
            <div className='w-full h-screen max-w-[1280px] flex md:flex-row flex-col justify-center mx-auto px-14 '>
                <div className='w-[520px] mx-auto md:mx-0 md:mr-12'>
                    <h1 className='text-2xl font-bold mt-24 text-[#1B1C1E] mb-10'><span className='font-normal text-xl text-[#1c3879]'>01.&nbsp;&nbsp;</span>About Me<hr className='w-[200px] mt-2'></hr></h1>
                    <p className='mb-4 text-gray-500 text-[18px] '>
                        Hello! My name is Will and I enjoy creating things that live on
                        the internet. My interest in web development started back in
                        2021 when I decided to try editing custom Tumblr themes -
                        turns out hacking together a custom reblog button taught me
                        a lot about HTML & CSS!</p>
                    <p className='mb-4 text-gray-500 text-[18px] '>
                        Fast-forward to today, and I've had the privilege of working at
                        an advertising agency, a start-up, a huge corporation, and a
                        student-led design studio. My main focus these days is
                        building accessible, inclusive products and digital experiences
                        at Upstatement for a variety of clients.
                    </p>
                    
                </div>
                <div className='w-[350px] mt-12 mx-auto md:mx-0'>
                    <a href='https://www.linkedin.com/in/william-koonz-iii/'><img className='md:mt-[176px] mx-auto shadow-2xl rounded-xl grayscale hover:grayscale-0' src="https://placeimg.com/300/260/any" alt="" /></a>
                </div>
            </div>
        </div>
    )
}

export default About