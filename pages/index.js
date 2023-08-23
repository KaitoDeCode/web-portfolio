import Head from 'next/head'
import Link from 'next/link'
import {BsFillMoonStarsFill, BsGearFill } from "react-icons/bs"
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillTwitterCircle, AiFillYoutube } from "react-icons/ai"
import{ FaBrain } from "react-icons/fa"

import Image from 'next/image'

import { Signika } from "next/font/google"
import Navbar from '@/components/layouts/Navbar'
import HeroSection from '@/components/layouts/HeroSection'
import AboutSection from '@/components/layouts/AboutSection'
import PortfolioSection from '@/components/layouts/PortfolioSection'
const signika = Signika({subsets:['latin-ext']})
export default function Home() {
  return (
    <div>
      <Head>
        <title>Adi Kurniawan</title>
      </Head>
      <main className={`${signika.className} px-10`}>
        <section className='min-h-screen '> 
          <Navbar/>
          <HeroSection/>
        </section>
        <section>
          <AboutSection/>
        </section>
        <section className='flex flex-col items-center'>
          <PortfolioSection/>
        </section>
      </main>
    </div>
  )
}