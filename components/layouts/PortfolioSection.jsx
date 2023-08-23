import React from 'react'
import { BsGearFill } from 'react-icons/bs'
import Portfolio from '../fragments/Portfolio'

const PortfolioSection = () => {
  return (
    <div className='p-5 pb-20 shadow-xl'>
         <BsGearFill className='mx-auto text-5xl text-teal-600 animate-slow-spin md:text-6xl'/>
          <h3 className='text-3xl text-center md:text-4xl dark:text-white'>Portfolio</h3>
          <p className='text-center md:text-xl dark:text-slate-400'>Berikut ini adalah daftar portfolio yang pernah saya buat</p>
          <div className='grid grid-cols-1 gap-10 mt-10 md:grid-cols-2'>
            <Portfolio/>
            <Portfolio/>
            <Portfolio/>
            <Portfolio/>
          </div>
    </div>
  )
}

export default PortfolioSection