import React from 'react'
import { Link } from 'react-scroll'
import './comp.css'

const Nav = () => {
  return (
    <div
      className={`dot-background fixed top-0 w-full px-10 flex justify-end bg-white dark:bg-dark dark:text-[#fbfbff] md:pb-5 lg:pt-2 z-10`}
    >
      <div className='hidden w-full md:flex justify-between items-center gap-6 text-onyx dark:text-[#fbfbff]  text-base font-bold pt-5 '>
        <Link
          data-aos='fade-right'
          to='hero'
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          activeClass='border-b border-onyx'
          className='text-2xl text-onyx font-bold dark:text-[#fbfbff]'
          href='#'
        >
          CodeClown
        </Link>
      </div>
    </div>
  )
}

export default Nav
