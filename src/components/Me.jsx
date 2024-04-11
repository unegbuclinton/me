import React from 'react'
import './comp.css'
import me from '../assets/images/me.png'

const Me = () => {
  return (
    <div id='about-me' className='mt-16'>
      <h1 className='font-extrabold text-lg lg:text-3xl text-center'>
        About Me
      </h1>
      <div className='flex justify-center pt-8 lg:pt-20 flex-1'>
        <div className='about-img-container'>
          <img src={me} alt='' className='about-me-img' />
        </div>
      </div>
      <p
        data-aos='fade-right'
        data-aos-offset='250'
        data-aos-easing='ease-in-sine'
        className='text-center w-full lg:w-[80%] my-0 mx-auto lg:text-xl'
      >
        I started my Tech journey in 2019 where I joined a small Tech community.
        Being part of the team fueled my interest about the Web, it's
        superpowers and how it can be used to improve life for others. Fast
        forward to today, I have had the opportunity to work with great teams
        like{' '}
        <a className='metag' href='https://www.curacel.co/'>
          Curacel
        </a>
        ,{' '}
        <a className='metag' href='https://www.biggorillaapps.com/'>
          Biggorrillapps
        </a>{' '}
        &{' '}
        <a className='metag' href='https://zuri.team/'>
          Zuri. <br />
        </a>
        . My goal is to continue building quality products for digital
        communities while providing a unique immersive experience for users.
      </p>

      <h3 className='font-semibold text-center my-4'>
        Here are few technologies I have worked with recently:
      </h3>
      <ul className='pl-12 list'>
        <li data-aos='fade-right'>Javascript(ES6)</li>
        <li data-aos='fade-right'>Typrscript</li>
        <li data-aos='fade-left'>React</li>
        <li data-aos='fade-right'>NextJs</li>
        <li data-aos='fade-left'>NodeJs</li>
        <li data-aos='fade-right'>Redux toolKit</li>
        <li data-aos='fade-left'>Tailwind</li>
        <li data-aos='fade-left'>React Storybook</li>
        <li data-aos='fade-right'>Styled components</li>
        <li data-aos='fade-left'>Figma</li>
        <li data-aos='fade-left'>Jest</li>
      </ul>
      <div className='w-full lg:w-[60%] border-b border-grey my-0 mx-auto pt-16' />
    </div>
  )
}

export default Me
