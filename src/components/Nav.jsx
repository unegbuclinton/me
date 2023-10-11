import React, { useEffect, useState } from 'react'
import { Link } from 'react-scroll'
import { DPIconClose, DPIconMenu } from '../assets/svgs'
import { navLinks } from '../utils/utils'
import Button from './Button'
import './comp.css'
import pdfFile from '../document/resume.pdf'
import Switch from './Switch'
import { useRef } from 'react'
import { MdDarkMode } from 'react-icons/md'
import { BsFillBrightnessHighFill } from 'react-icons/bs'

const Nav = () => {
  const [open, setOpen] = useState(false)
  const [theme, setTheme] = useState(false)
  const sideNavRef = useRef(null)

  const toggleMenu = () => {
    setOpen((prev) => !prev)
  }
  const closeMenu = () => setOpen(false)
  const getPdf = () => {
    window.open(pdfFile)
  }

  useEffect(() => {
    if (theme) {
      document.body.classList.add('dark')
    } else {
      document.body.classList.remove('dark')
    }
  })

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  function handleClickOutside(event) {
    if (sideNavRef.current && !sideNavRef.current.contains(event.target)) {
      setOpen(false)
    }
  }
  const iconSize = 40
  return (
    <div
      className={` fixed top-0 w-full px-10 flex justify-end bg-flash-white dark:bg-dark dark:text-[#fbfbff] md:pb-5 lg:pt-3 z-10`}
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
