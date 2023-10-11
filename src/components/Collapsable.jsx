import React, { useState, useRef, useEffect } from 'react'
import { Link } from 'react-scroll'
import pdfFile from '../document/resume.pdf'

const Collapsable = () => {
  const [open, setOpen] = useState(false)

  const getPdf = () => {
    window.open(pdfFile)
  }

  const sideNavRef = useRef(null)
  const menuItems = [
    {
      item: 'Work',
      index: 'z-[1]',
      offset: -100,
      to: 'experience',
    },
    {
      item: 'About',
      index: 'z-[2]',
      offset: -100,
      to: 'about-me',
    },
    {
      item: 'Projects',
      index: 'z-[3]',
      offset: -100,
      to: 'works',
    },
    {
      item: 'Contact',
      index: 'z-[5]',
      offset: -100,
      to: 'contact-me',
    },
  ]

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
  return (
    <div
      ref={sideNavRef}
      className='fixed right-4 bottom-[385px] h-5 md:h-[80px] z-20'
    >
      <div
        onClick={getPdf}
        className={` transition-opacity glass_button-resume ${
          open ? 'opacity-100' : 'opacity-0'
        } duration-200`}
      >
        Resume
      </div>
      <div
        className={`glass_button-wrapper flex flex-col-reverse items-center relative`}
      >
        <div
          onClick={() => {
            setOpen((prev) => !prev)
          }}
          className={`menu-burger ${open ? 'open' : ''} mt-5 animate-pulse `}
        ></div>

        {menuItems?.map(({ item, index, to, offset }, idx) => (
          <Link
            to={to}
            spy={true}
            smooth={true}
            offset={offset}
            duration={500}
            style={{ top: open ? 0 : '' }}
            key={idx}
            activeStyle={{ border: '2px solid black' }}
            onClick={() => {
              setOpen(false)
            }}
            className={`glass_button ${index} ${
              open ? 'glass_button-text_open' : 'glass_button-text_closed '
            } transition-opacity duration-1000 ${
              open ? 'opacity-100' : 'opacity-0'
            } `}
          >
            {item}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Collapsable
