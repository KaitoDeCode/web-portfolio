import Link from 'next/link'
import React from 'react'
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillTwitterCircle, AiFillYoutube } from 'react-icons/ai'

const Footer = () => {
  return (
    <footer className='flex flex-col justify-between w-full h-auto px-10 pt-20 bg-black dark:border-t dark:border-t-slate-400 md:px-20 xl:px-40'>
        <div className='grid grid-cols-3 gap-5'>
            <div className='col-span-3 md:col-span-1'>
                <h2 className='text-xl text-teal-600 md:text-2xl lg:text-3xl'>Kurniawan()</h2>
                <p className='text-slate-400 md:text-lg'>Yen dijimit keroso loro ojo ndjiwit marang liyan</p>
                <div className='flex gap-2 text-2xl text-slate-600'>
                <AiFillTwitterCircle className='duration-200 hover:text-teal-600'/>
            <AiFillYoutube className='duration-200 hover:text-teal-600'/>
            <AiFillInstagram className='duration-200 hover:text-teal-600'/>
            <AiFillLinkedin className='duration-200 hover:text-teal-600'/>
            <AiFillGithub className='duration-200 hover:text-teal-600'/>
                </div>
            </div>
            <div className='md:justify-self-end md:pr-5'>
                <h3 className='text-lg text-teal-600 md:text-xl'>Navigations</h3>
                <ul className='text-slate-400'>
                    <li><Link className='duration-200 hover:text-teal-600'  href={'#'}>Beranda</Link></li>
                    <li><Link className='duration-200 hover:text-teal-600'  href={'#'}>Tentang Saya</Link></li>
                    <li><Link className='duration-200 hover:text-teal-600'  href={'#'}>Portfolio</Link></li>
                </ul>
            </div>
            <div>
                <h3 className='text-lg text-teal-600 md:text-xl'>Lainya</h3>
                <ul className='text-slate-400'>
                    <li><Link  className='duration-200 hover:text-teal-600' href={'#'}>Anime</Link></li>
                    <li><Link className='duration-200 hover:text-teal-600'  href={'#'}>Skansa</Link></li>
                </ul>
            </div>
        </div>
        <div className='mt-10 text-center border-t-2'>
           <h3 className='text-white'>Copyright || 2023 by Adi Kurniawan</h3>
        </div>
    </footer>
  )
}

export default Footer