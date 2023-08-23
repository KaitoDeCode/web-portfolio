import Head from 'next/head'
import { Signika } from "next/font/google"
import Navbar from '@/components/layouts/Navbar'
import HeroSection from '@/components/layouts/HeroSection'
import AboutSection from '@/components/layouts/AboutSection'
import PortfolioSection from '@/components/layouts/PortfolioSection'
import { useState } from 'react'
import Footer from '@/components/layouts/Footer'
const signika = Signika({subsets:['latin-ext']})
export default function Home() {
  const [darkMode,setDarkMode] = useState(false)
  const handleDarkMode = () =>{
    setDarkMode(!darkMode)
  }
  return (
    <div className={`${darkMode ? "dark" : ""}`}>
      <Head>
        <title>Adi Kurniawan</title>
      </Head>
      <main className={`${signika.className} dark:bg-black px-10 md:px-20 lg:px-40`}>
        <section className='min-h-screen '> 
          <Navbar onClick={handleDarkMode}/>
          <HeroSection/>
        </section>
        <section>
          <AboutSection/>
        </section>
        <section>
          <PortfolioSection/>
        </section>
      </main>
        <Footer/>
    </div>
  )
}