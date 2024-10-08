import React from 'react'
import { BsFillBrightnessHighFill } from 'react-icons/bs'
import { MdDarkMode } from 'react-icons/md'
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from 'react-icons/ai'
import { useEffect } from 'react'
import { useState } from 'react'

const Socials = () => {
  const iconSize = 20
  const [theme, setTheme] = useState(false)
  const [screenSize, setScreenSize] = useState(window.innerWidth)

  const socialLinks = [
    {
      icon: <AiFillGithub size={iconSize} />,
      to: 'https://github.com/unegbuclinton',
    },
    {
      icon: <AiFillLinkedin size={iconSize} />,
      to: 'https://linkedin.com/in/clinton-unegbu',
    },
    {
      icon: <AiFillTwitterCircle size={iconSize} />,
      to: 'https://twitter.com/_klintonunegbu',
    },
  ]

  useEffect(() => {
    if (theme) {
      document.body.classList.add('dark')
    } else {
      document.body.classList.remove('dark')
    }
  })

  useEffect(() => {
    function handleResize() {
      setScreenSize(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div className='bg-transparent flex flex-col gap-5 fixed top-[20%] left-3 lg:left-10 z-10'>
      {socialLinks?.map(({ icon, to }, idx) => {
        return (
          <a
            className='hover:translate-x-1 hover:shadow-2xl transition-all'
            key={idx}
            href={to}
          >
            {icon}
          </a>
        )
      })}

      {/* {screenSize > 765 && (
        <>
          {!theme && (
            <MdDarkMode
              size={iconSize}
              className="mt-5 hover:translate-x-1 hover:shadow-2xl transition-all cursor-pointer"
              onClick={() => setTheme((theme) => !theme)}
            />
          )}

          {theme && (
            <BsFillBrightnessHighFill
              size={iconSize}
              color="#fff"
              className="mt-5 hover:translate-x-1 hover:shadow-2xl transition-all cursor-pointer"
              onClick={() => setTheme((theme) => !theme)}
            />
          )}
        </>
      )} */}
    </div>
  )
}

export default Socials
