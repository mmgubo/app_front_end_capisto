import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
  return (
    <div className='flex flex-col md:flex-row flex-wrap bg-primary md:mx-10 rounded-lg px-6 md:px-10 lg:px-20'>
        {/*------------Left Side--------------*/}
        <div className='md:w-1/2 flex-col items-start justify-center gap-1 py-10 m-auto md:py-[10vw] md:mb-[-25px]'>
            <p className='text-3xl md:text-4xl lg:text-5xl text-white font-semibold leading-tight md:leading-tight lg:leading-tight'>
                Book a Branch Visit online <br /> at Capitec Bank
            </p>
            <div className='flex flex-col md:flex-row items-center mt-9 gap-6 text-white text-xl font-light'>
                <img className='w-30' src={assets.group_profiles} alt='' />
                <p>Bank better at Capitec Bank by booking a branch visit online</p>
            </div>
           {/* <a href='#product' className='flex items-center gap-2 bg-white px-8 py-3 rounded-full text-gray-600 text-sm m-auto md:m-0 hover:scale-105 transition-all duration-300'>
                Book a branch visit<img className='w-' src={assets.arrow_icon} alt='' />
            </a> */}
        </div>

        {/*------------- Right Side ------------*/}
        <div className='md:w-1/2 relative'>
            <img className='w-full md:absolute top-0 bottom-0 h-auto rounded-xl' src= {assets.header_img}/>
        </div>
    </div>
  )
}

export default Header