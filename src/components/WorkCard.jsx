import React from 'react'
import { AiFillGithub } from 'react-icons/ai'
import { FaLink } from 'react-icons/fa'
const WorkCard = ({ img, ProjectTitle, desc, repo, technologies, live }) => {
  return (
    <div
      style={{ flex: '0 1 calc(50% - 8px)' }}
      className='work-card w-full flex flex-1 flex-col items-center p-3 rounded-md hover:bg-flash-white '
    >
      <img src={img} alt='' className='h-[300px] ' />
      <div>
        <h2 className='text-xl font-semibold py-2'>{ProjectTitle}</h2>
        <p className='mt-5 mb-3 font-semibold'>{technologies}</p>
        <p>{desc}</p>
        <div className='flex items-center gap-3 mt-2'>
          {repo.length > 1 && (
            <a href={repo} className='flex gap-2 items-center py-3 pr-2 '>
              Source code <AiFillGithub size={18} />
            </a>
          )}
          <a href={live} className='flex gap-2 items-center py-3 pr-2'>
            Live Demo <FaLink size={18} />
          </a>
        </div>
      </div>
    </div>
  )
}

export default WorkCard
