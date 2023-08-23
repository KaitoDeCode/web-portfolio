import Link from 'next/link'
import React from 'react'
import { BsFillMoonStarsFill } from 'react-icons/bs'
const Navbar = ({onClick}) => {
 
  return (
    <nav className='flex justify-between py-10 mb-12'>
            <h1 className='text-xl font-burtons dark:text-white'>KaitoDCode</h1>
            <ul className='flex items-center'>
              <li><BsFillMoonStarsFill onClick={onClick} className='text-2xl cursor-pointer dark:text-teal-600' /></li>
              <li>
                <Link className='px-4 py-2 ml-8 text-white rounded-md from-cyan-500 to-teal-500 bg-gradient-to-r' href={'#'}>Resume</Link>
              </li>
            </ul>
    </nav>
  )
}

export default Navbar