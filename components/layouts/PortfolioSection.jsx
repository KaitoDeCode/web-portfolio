import React from 'react'
import { BsGearFill } from 'react-icons/bs'
import Portfolio from '../fragments/Portfolio'

const PortfolioSection = () => {
  return (
    <div className='p-5 mt-10 shadow-xl'>
         <BsGearFill className='mx-auto text-5xl text-teal-600 animate-slow-spin'/>
          <h3 className='text-3xl text-center'>Portfolio</h3>
          <p>Berikut ini adalah daftar portfolio yang pernah saya buat</p>
          <div className='flex flex-col gap-10 mt-10'>
            <Portfolio/>
            <Portfolio/>
            <Portfolio/>
          </div>
    </div>
  )
}

export default PortfolioSection