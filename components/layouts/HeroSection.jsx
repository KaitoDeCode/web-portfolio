import Image from 'next/image'
import React from 'react'
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillTwitterCircle, AiFillYoutube } from 'react-icons/ai'

const HeroSection = () => {
  return (
    <div className='p-10 py-10 text-center'>
            <h2 className='py-2 text-5xl font-medium text-teal-600'>Adi Kurniawan</h2>
            <h3 className='py-2 text-2xl '>Frontend Developer.</h3>
            <p className='leading-8 text-gray-800 text-md'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis commodi, corporis quaerat natus sit accusantium.</p>
          <div className='flex items-center justify-center gap-10 py-3 text-4xl text-gray-600'>
            <AiFillTwitterCircle/>
            <AiFillYoutube/>
            <AiFillInstagram/>
            <AiFillLinkedin/>
            <AiFillGithub/>
          </div>
          <div className='relative mx-auto mt-20 overflow-hidden rounded-full bg-gradient-to-b from-teal-600 h-80 w-80'>
            <Image src={'/dev-ed-wave.png'} alt='image' layout='fill' objectFit='cover'/>
          </div>
        </div>
  )
}

export default HeroSection