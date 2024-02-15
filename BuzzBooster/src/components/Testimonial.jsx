import React from 'react'
import {people01, people02, people03} from "../assets";
function Testimonial() {
  return (
    <div className='text-white  mx-6 py-6 sm:px-16 md:mx-8'>
    <h1 className=' font-sans text-sm font-bold mt-2 mb-4 md:text-md lg:mx-24'>TESTIMONIAL</h1>
    <p className=' font-sans text-sm font-bold mt-2 mb-4 md:text-lg lg:mx-24'>What people are saying about us ?</p>

    <section className='flex flex-col gap-y-3 sm:gap-y-8 md:gap-y-12 lg:mx-24 xl:flex-row'>
      <div className=' hover:bg-slate-800 shadow-sm shadow-blue-300 w-96 p-2 flex flex-col gap-y-3 rounded-lg sm:gap-y-5 sm:p-4 md:px-14 lg:py-12 xl:mx-5'>
        <p className='font-serif'>"Choosing BuzzBooster Media was one of the best decisions we made for our startup. Their social media strategy development services have been instrumental in helping us establish a strong online presence from scratch, thanks to their efforts." </p>
        <img src={people01} alt="BuzzBooster Media " className=" w-16 h-16 sm:flex sm:justify-center " />
        <span className='text-sm sm:text-blue-300 '>Emily Chen, Co-Founder, vizart Startup</span>
      </div>

      <div className=' hover:bg-slate-800 shadow-sm shadow-blue-300 w-96  p-2 flex flex-col gap-y-3 rounded-lg sm:gap-y-5 sm:p-4 md:px-14 lg:py-12 xl:mx-5'>
        <p className='font-serif'>"I've had the pleasure of working with BuzzBooster Media for several years now, and I continue to be impressed by their professionalism and expertise. They're always on top of the latest trends and algorithms, ensuring that our brand stays ahead of the curve. I highly recommend BuzzBooster Media to anyone looking to take their social media marketing to the next level."  </p>
        <img src={people02} alt="BuzzBooster Media" className=" w-16 h-16" />
        <span className='text-sm sm:text-blue-300 '> Mark Thompson, Director of Marketing, Notion Enterprises</span>
      </div>

      <div className=' hover:bg-slate-800 shadow-sm shadow-blue-300 w-96 p-2 flex flex-col gap-y-3 rounded-lg sm:gap-y-5 sm:p-4 md:px-14 lg:py-12 xl:mx-5'>
        <p className='font-serif'>"Working with BuzzBooster Media has been a game-changer for our brand. Their strategic approach to social media management has significantly boosted our online presence and engagement.  I highly recommend BuzzBooster Media to any business looking to elevate their social media presence." -  </p>
        <img src={people03} alt="BuzzBooster Media" className=" w-16 h-16" />
        <span className='text-sm sm:text-blue-300 '>John Smith, CEO, airnab Company</span>
      </div>
    </section>
      
    </div>
  )
}

export default Testimonial
