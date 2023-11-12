import img from './assets/images/me.png'
import { useEffect } from 'react'
import Aos from 'aos'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import 'aos/dist/aos.css'
import Main from './pages/main'
import Archives from './pages/Archives'
import Home from './pages/Home'
const App = () => {
  useEffect(() => {
    Aos.init({ duration: 500 })
  }, [])
  return (
    <div className='max-w-[1200px] my-0 mx-auto font-roboto lg:pt-20'>
      <div className='dot-background fixed top-0 bottom-0 left-0 right-0'></div>
      <img
        src={img}
        alt='me'
        className='fixed opacity-10 top[-22px] right-[-100px] lg:w-[65%] xl:w-[55%] lg:right-[-211px] lg:top-[-70px] xl:right-[-275px] xl:top-[91px] 2xl:right-[-390px] 2xl:top-[-84px] '
      />
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/main' element={<Main />} />
          <Route exact path='/archives' element={<Archives />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
