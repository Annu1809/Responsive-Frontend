

import React from 'react';
import { useState } from 'react';
import { logo, icon } from '../assets';

function Navbar() {
  const [active, setActive] = useState("Home");

  const handleNavLinkClick = (sectionId) => {
    setActive(sectionId);
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className='text-white flex flex-row justify-between mx-0 gap-y-2 sm:px-8 lg:justify-between lg:pb-10 lg:px-20 xl:pt-8 xl:px-24 bg-slate-950'>
      <div className='p-3'>
        <img src={logo} alt="zones" className='h-28 w-28' />
      </div>
      <nav className='flex justify-end w-full my-5 lg:hidden'>
        <img src={icon} alt="zones" className='h-10 w-10' />
      </nav>
      <nav>
        <ul className='lg:flex lg:py-12 hidden'>
          <li
            className={`px-4 ${active === "Home" ? 'text-blue-400' : 'hover:text-blue-400'} hover:cursor-pointer`}
            onClick={() => handleNavLinkClick("Home")}
          >
            Home
          </li>
          <li
            className={`px-4 ${active === "GetStarted" ? 'text-blue-400' : 'hover:text-blue-400'}  hover:cursor-pointer`}
            onClick={() => handleNavLinkClick("GetStarted")}
          >
            Get Started
          </li>
          <li
            className={`px-4 ${active === "Milestones" ? 'text-blue-400' : 'hover:text-blue-400'}  hover:cursor-pointer`}
            onClick={() => handleNavLinkClick("Milestones")}
          >
            Milestones
          </li>
          <li
            className={`px-4 ${active === "Services" ? 'text-blue-400' : 'hover:text-blue-400'}  hover:cursor-pointer`}
            onClick={() => handleNavLinkClick("Services")}
          >
            Services
          </li>
          <li
            className={`px-4 ${active === "Works" ? 'text-blue-400' : 'hover:text-blue-400'}  hover:cursor-pointer`}
            onClick={() => handleNavLinkClick("Works")}
          >
            Works
          </li>
          <li
            className={`px-4 ${active === "Testimonial" ? 'text-blue-400' : 'hover:text-blue-400'}  hover:cursor-pointer`}
            onClick={() => handleNavLinkClick("Testimonial")}
          >
            Testimonial
          </li>
          <li
            className={`px-4 ${active === "FAQ" ? 'text-blue-400' : 'hover:text-blue-400'}  hover:cursor-pointer`}
            onClick={() => handleNavLinkClick("FAQ")}
          >
            FAQs
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
