import Image from 'next/image'
import React from 'react'
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillTwitterCircle, AiFillYoutube } from 'react-icons/ai'

const HeroSection = () => {
  return (
    <div className='p-10 py-10 text-center'>
            <h2 className='py-2 text-5xl font-medium text-teal-600 md:text-6xl'>Adi Kurniawan</h2>
            <h3 className='py-2 text-2xl md:text-3xl dark:text-white'>Frontend Developer.</h3>
            <p className='max-w-xl mx-auto leading-8 text-gray-800 text-md md:text-xl dark:text-slate-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis commodi, corporis quaerat natus sit accusantium.</p>
          <div className='flex items-center justify-center gap-10 py-3 text-4xl text-gray-600'>
            <AiFillTwitterCircle className='duration-200 hover:text-teal-600'/>
            <AiFillYoutube className='duration-200 hover:text-teal-600'/>
            <AiFillInstagram className='duration-200 hover:text-teal-600'/>
            <AiFillLinkedin className='duration-200 hover:text-teal-600'/>
            <AiFillGithub className='duration-200 hover:text-teal-600'/>
          </div>
          <div className='relative mx-auto mt-20 overflow-hidden rounded-full bg-gradient-to-b from-teal-600 h-72 w-72'>
            <Image src={'/dev-ed-wave.png'} alt='image' layout='fill' objectFit='cover'/>
          </div>
        </div>
  )
}

export default HeroSection