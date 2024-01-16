import React from 'react'
import { biggorilla, curacel, Clamp, Nicelyformed } from '../utils/utils'
import Tab from './Tab'
import WorkTemplate from './WorkTemplate'

const Experience = () => {
  const exp = [
    {
      title: 'Nicelyformed',
      component: <WorkTemplate works={Nicelyformed} />,
    },
    {
      title: 'Clamp ',
      component: <WorkTemplate works={Clamp} />,
    },
    {
      title: 'Biggorillaapps ',
      component: <WorkTemplate works={biggorilla} />,
    },
    { title: 'Curacel ', component: <WorkTemplate works={curacel} /> },
  ]
  return (
    <div id='experience' className='lg:px-24 max-w-[985px] my-0 mx-auto'>
      <h1 className='font-extrabold text-lg lg:text-3xl text-center my-10'>
        Experience
      </h1>
      <p className='block md:hidden text-sm mb-3 animate-pulse'>
        Scroll right....
      </p>
      <Tab tabs={exp} />
      <div className='w-full lg:w-[60%] border-b border-grey my-0 mx-auto pt-16' />
    </div>
  )
}

export default Experience
