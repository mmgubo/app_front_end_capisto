import React from 'react'
import { specialityData } from '../assets/assets'
import { Link } from 'react-router-dom'

const ProductMenu = () => {
  return (
    <div id='product' className='flex flex-col items-center gap-4 py-16 text-gray-800'>
        <h1 className='text-3xl font-medium'>Find ways to bank better</h1>
        <p className='sm:w-1/2 text-center text-lg font-medium'>You deserve to bank simpler, schedule your branch appointment hassle-free. <br />Choose your need to start the booking process: </p>
        <div className='flex sm:justify-center gap-4 pt-5 w-full overflow-scroll'>
            {specialityData.map((item,index)=>(
                <Link onClick={()=>scrollTo(0,0)} className='flex flex-col items-center text-xs cursor-pointer flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500' key={index} to={'/appointments}'}>
                    <img className='mb-2' src={item.image} alt='' />
                </Link>
            ))}
        </div>
    </div>
  )
}

export default ProductMenu