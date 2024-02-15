import React from 'react'

function Milestones() {
  return (
    <div className=' text-slate-900  mx-6 py-6 sm:px-20 lg:gap-y-12 lg:px-24'>
      <h1 className=' font-sans text-sm font-bold mt-2 mb-4 md:text-md lg:px-24  xl:px-32'>MILESTONES</h1>
      <p className=' font-sans text-sm font-bold mt-2 mb-4 md:text-lg lg:px-24 xl:px-32'>Stand aware of accomplishments, stay awake to achieve more.</p>

      <section className='flex flex-col gap-y-4 mt-4 md:gap-y-8 xl:flex-wrap xl:p-10 xl:flex-row xl: justify-center '>
        <div className='hover:bg-slate-200 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 border p-4 rounded-xl md:flex md:justify-around md:p-5 xl:flex-col xl:gap-y-8 shadow-sm shadow-black xl:w-96 xl:mx-10 hover:scale-105 transition-all duration-300'>
          <div className='md:font-extrabold'>
            <h1 className='font-sans text-2xl font-semibold xl:text-4xl'>$699M+</h1>
            <h1 className='font-sans text-sm font-semibold'>Capital raised</h1>
          </div>
          <p className='md:w-72 md:text-xl'>Total amount of capital raised following collaboration with One Week Wonders</p>
        </div>

        <div className='hover:bg-slate-200 bg-gradient-to-l from-blue-400 via-green-500 to-yellow-500  border p-4 rounded-xl md:flex md:justify-around md:p-5 xl:flex-col xl:gap-y-8 shadow-sm shadow-black xl:w-96 hover:scale-105 transition-all duration-300'>
          <div className='md:font-extrabold'>
            <h1 className='font-sans text-2xl font-semibold xl:text-4xl'>8</h1>
            <h1 className='font-sans text-sm font-semibold'>Unicorn branded</h1>
          </div>
          <p className='md:w-72 md:text-xl'>Unicorn brands that have gained up to $1B valuations post-branding</p>
        </div>

        <div className='hover:bg-slate-200 bg-gradient-to-l from-blue-400 via-green-500 to-blue-400 p-4 border p-4 rounded-xl md:flex md:justify-around md:p-5 xl:flex-col xl:gap-y-8 shadow-sm shadow-black xl:w-96 hover:scale-105 transition-all duration-300'>
          <div className='md:font-extrabold'>
            <h1 className='font-sans text-2xl font-semibold xl:text-4xl'>300+</h1>
            <h1 className='font-sans text-sm font-semibold'>Acquisitions</h1>
          </div>
          <p className='md:w-72 md:text-xl'>Number of clients who have been acquired following collaboration with One Week Wonders</p>
        </div>
      </section>

      <p className=' text-xl mt-3  p-4 md:mt-10 mb-8 lg:px-24 xl:flex xl:justify-center xl:text-2xl'>Our clients are companies, brands , startups and social bees that keeps the world going around .</p>

    </div>
  )
}

export default Milestones
