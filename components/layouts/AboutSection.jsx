import React from 'react'
import { FaBrain } from 'react-icons/fa'
import dynamic from 'next/dynamic'
const SkillSetNoSSR = dynamic(()=> import('@/components/fragments/SkillSet'),{ssr:false})


const AboutSection = () => {
  return (
    <>
    <div>
            <p className='pt-1 text-xs text-teal-600'>Ketahui lebih banyak</p>
            <h3 className='pb-1 text-3xl'>Tentang Saya</h3>
            <p className='py-2 leading-8 text-gray-800 text-md'>Hai Saya <span className='text-lg text-teal-600'>Adi</span> Kurniawan seorang <span className='text-lg text-teal-600'>Frontend Web Developer</span> asal Madiun,Jawa Timur.Saat ini saya sedang menempuh pendidikan sekolah kejuruhan dengan mengambil jurusan <span className='text-lg text-teal-600'>Rekayasa Perangkat Lunak </span> di SMKN 1 Mejayan.
            </p>
            <p className='py-2 leading-8 text-gray-800 text-md'>
              Saya adalah pribadi yang <span className='text-teal-600'>bersemangat</span> dan senang belajar hal yang baru, memiliki jiwa <span className='text-teal-600'>kepemimpinan</span> dan tidak mudah puas, selalu menerima kritik dan saran sehingga saya selalu bisa berkaca dalam perbuatan saya.
            </p>
          </div>  
          <div>
            <div className='flex flex-col items-center p-10 mx-10 mt-10 mb-10 text-center rounded-lg shadow-lg'>
              <FaBrain className='text-5xl text-teal-600 animate-bounce'/>
              <h3 className='py-1 mb-5 text-3xl'><span className='text-teal-600'>Teknologi</span> yang <br /> saya Kuasai :</h3>
              <SkillSetNoSSR/>
            </div>
 </div>
 </>
  )
}

export default AboutSection