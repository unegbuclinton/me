import { BsArrow90DegLeft, BsBoxArrowUpRight } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
import { archivedprojects } from '../utils/work'
import { AiFillGithub } from 'react-icons/ai'

const Archives = () => {
  const navigate = useNavigate()
  return (
    <div className='relative pt-[-20px] px-4 lg:px-8 z-10 '>
      <div className='flex justify-between gap-5'>
        <h2 className='text-center text-2xl font-bold'>Archives</h2>
        <div
          onClick={() => navigate('/main')}
          className='p-3 rounded hover:bg-grey cursor-pointer w-fit'
        >
          <BsArrow90DegLeft size={25} />
        </div>
      </div>
      <div className='flex flex-col items-center'>
        {archivedprojects?.map(
          ({ img, repo, title, desc, live, technologies }, idx) => (
            <div
              key={idx}
              className='flex flex-col lg:flex-row items-center lg:px-6 my-5 border bg-white rounded-xl w-[80%] hover:scale-105 duration-150 hover:border-grey'
            >
              <img src={img} alt='' className='w-full lg:w-[30%]' />
              <div className='ml-4'>
                <h3 className='font-semibold text-xl'>{title}</h3>
                <p className='font-medium tetx-base pt-4'>{desc}</p>
                <p className='mt-3'>{technologies}</p>
                <div className='flex items-center gap-3 mt-2 '>
                  <a
                    href={repo}
                    className='py-3 px-2 font-semibold hover:-translate-y-1 transition-all'
                  >
                    <AiFillGithub size={25} />
                  </a>

                  <a
                    href={live}
                    className='font-semibold py-3 px-2 hover:-translate-y-1 transition-all'
                  >
                    <BsBoxArrowUpRight size={20} />
                  </a>
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  )
}

export default Archives
