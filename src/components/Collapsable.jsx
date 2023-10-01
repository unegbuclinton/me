import React, { useState, useRef, useEffect } from 'react'
import { Link } from 'react-scroll'
import pdfFile from '../document/resume.pdf'

const Collapsable = () => {
  const [open, setOpen] = useState(false)
  const [changeText, setChangeText] = useState(true)

  const changeButtonText = () => {
    setTimeout(() => {
      setChangeText((prev) => !prev)
    }, 1800)
  }
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
      ignore: false,
    },
    {
      item: 'About',
      index: 'z-[2]',
      offset: -100,
      to: 'about-me',
      ignore: false,
    },
    {
      item: 'Projects',
      index: 'z-[3]',
      offset: -100,
      to: 'works',
      ignore: false,
    },
    {
      item: 'Contact',
      index: 'z-[5]',
      offset: -100,
      to: 'contact-me',
      ignore: false,
    },

    {
      item: changeText ? (
        <p>Menu</p>
      ) : (
        <p onClick={getPdf} className='pointer-events-none'>
          Resume
        </p>
      ),
      index: 'z-[6]',
      offset: -100,
      ignore: true,
      to: '',
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
      className='fixed right-4 bottom-[385px] h-[80px] z-20'
    >
      <div
        className={`glass_button-wrapper flex flex-col-reverse items-center relative`}
      >
        <div
          className=' toggle-btn cursor-pointer flex justify-center items-center py-4 px-4 mt-5 w-[15px] h-[15px] rounded-full animate-pulse'
          onClick={() => {
            setOpen((prev) => !prev)
            changeButtonText()
          }}
        >
          {open ? '-' : '+'}
        </div>
        {menuItems?.map(({ item, index, to, offset, ignore }, idx) => (
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
              setChangeText(true)
            }}
            ignoreCancelEvents={ignore}
            className={`glass_button ${index} ${
              open ? 'glass_button-text_open' : 'glass_button-text_closed'
            }  `}
          >
            {item}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Collapsable
