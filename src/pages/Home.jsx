import React, { useEffect, useState } from 'react'
import PreLoader from '../components/Preloader/PreLoader'
import Aos from 'aos'
import { useNavigate } from 'react-router-dom'
const Home = () => {
  const navigate = useNavigate()
  const [delay, setDelay] = useState(true)
  useEffect(() => {
    Aos.init({ duration: 500 })
    const timer = setTimeout(() => {
      setDelay(false)
      navigate('/main')
    }, 3000)
    return () => clearTimeout(timer)
  }, [])
  if (delay) return <PreLoader />
  return <div></div>
}

export default Home
