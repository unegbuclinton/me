import React, { useState } from 'react'
import './comp.css'
import { projects } from '../utils/work'
import WorkCard from './WorkCard'
const Works = () => {
  return (
    <div id='works' className='my-16 lg:mx-auto lg:w-[80%]'>
      <h1 className='font-extrabold text-lg lg:text-3xl text-center mb-5 lg:my-20'>
        Some Things I’ve Built
      </h1>

      <div className='md:flex flex-wrap gap-4 justify-between lg:mb-24'>
        {projects?.map(
          ({ img, title, desc, technologies, repo, live }, idx) => (
            <WorkCard
              key={idx}
              ProjectTitle={title}
              img={img}
              desc={desc}
              technologies={technologies}
              repo={repo}
              live={live}
            />
          )
        )}
      </div>
    </div>
  )
}

export default Works
