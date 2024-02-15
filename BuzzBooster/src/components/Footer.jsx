import React from 'react'
import { instagram,linkedin,github,youtube } from '../assets'
function Footer() {
  return (
    <div className=' bg-slate-900 text-white flex flex-col justify-center px-20  py-20  gap-y-3 sm:px-72 md:px-24 md:gap-y-7 '>
      <h1 className='flex justify-center'>Contact-Us.</h1>
      <ul className='flex flex-col gap-y-6 lg:flex-row justify-center justify-around'>
        <li className=' md:flex sm:flex-row md:gap-x-16 lg:flex-col'>
          <a href="https://instagram.com">
          <img src={instagram} alt="instagram" className='w-10 h-10'/>
          </a>
          
          <p>instagram</p>
        </li>
        <li className=' md:flex sm:flex-row md:gap-x-16 lg:flex-col '>
          <a href="https://linkedin.com">
          <img src={linkedin} alt="likedin" className='w-10 h-10'/>
          </a>
          
          <p>linkedin</p>
        </li>
        <li className=' md:flex sm:flex-row md:gap-x-16 lg:flex-col'>
          <a href="https://youtube.com">
            <img src={youtube} alt="youtube"  className='w-12 h-12 lg:flex-col'/></a>
          
          <p>youtube</p>
        </li>
        <li className=' md:flex sm:flex-row md:gap-x-16 lg:flex-col'>
          <a href="https://github.com">
          <img src={github} alt="github" />
          </a>
          
          <p>github</p>
        </li>
        
      </ul>
    </div>
  )
}

export default Footer
