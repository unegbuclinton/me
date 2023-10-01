import Hero from '../components/Hero'
import Socials from '../components/Socials'
import Me from '../components/Me'
import Experience from '../components/Experience'
import Works from '../components/Works'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import MoreInfo from '../components/MoreInfo'
import Nav from '../components/Nav'
import Collapsable from '../components/Collapsable'

const Main = () => {
  return (
    <>
      <Nav />
      <Collapsable />
      <div className='h-screen font-roboto lg:pt-20'>
        <div className='relative px-4 lg:px-6 overflow-x-hidden'>
          <Hero />
          <Socials />
          <Experience />
          <Me />
          <Works />
          <Contact />
          <Footer />
          <MoreInfo />
        </div>
      </div>
    </>
  )
}

export default Main
