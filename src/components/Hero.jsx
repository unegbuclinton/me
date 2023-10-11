import './comp.css'
import me from '../assets/images/me.png'
import { TypeAnimation } from 'react-type-animation'
import { Link } from 'react-scroll'

const Hero = () => {
  return (
    <div id='hero'>
      <div className=' lg:flex items-center pb-6'>
        <div className='flex justify-center pt-20 flex-1'>
          <div data-aos='zoom-out' className='img-container'>
            <img src={me} alt='' className='me-img' />
          </div>
        </div>
        <div className='flex-1 lg:pt-20 '>
          <div data-aos='fade-left' className='text-center lg:text-left'>
            <h1 className=' text-2xl mt-5 font-bold'>HI,</h1>
            <h2 className=' text-2xl font-bold'>I'm Clinton a</h2>
            <TypeAnimation
              sequence={['Frontend Developer', 1000, 'UI Designer', 1500]}
              speed={50}
              style={{ fontSize: '24px', fontWeight: '900' }}
              wrapper='span'
              repeat={Infinity}
            />
            <p className=' my-5 lg:max-w-[400px]'>
              Hello I am Unegbu Clinton, I love and appreciate really great
              design but more importantly I enjoy the process of bringing them
              to life and the satisfaction of seeing people using them.
            </p>
            <p className='font-semibold text-sm'>Let's work together</p>
          </div>
          <div
            data-aos='fade-left'
            data-aos-duration='2500'
            className='w-full flex justify-center lg:justify-start mt-5'
          >
            <Link
              to='contact-me'
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className='p-2 cursor-pointer text-sm font-semibold border border-onyx hover:bg-onyx hover:text-flash-white rounded-lg'
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
      <div className='w-full lg:w-[60%] border-b border-grey my-0 mx-auto pt-16' />
    </div>
  )
}

export default Hero
