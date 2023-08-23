import React from 'react'

const Portfolio = ({Gambar="/web3.png"}) => {
  return (
    <>
   <div className='relative flex items-center justify-center duration-200 group'>
    <div
        style={{
            backgroundImage:`url(${Gambar})`
          }}
          className='flex items-center justify-center w-full duration-200 bg-center bg-cover h-60 group-hover:blur-[2px]'
          
          >
    </div>
      <h4 className='absolute z-40 invisible text-3xl font-bold text-teal-600 duration-200 group-hover:visible'>Coming soon</h4>
   </div>
     </>
  )
}

export default Portfolio