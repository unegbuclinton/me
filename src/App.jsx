import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Socials from "./components/Socials";
import Me from "./components/Me";
import img from "./assets/images/me.png";
import Experience from "./components/Experience";
import Works from "./components/Works";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import MoreInfo from "./components/MoreInfo";
import { useEffect, useState } from "react";
import PreLoader from "./components/Preloader/PreLoader";
import Aos from "aos";
import "aos/dist/aos.css";
const App = () => {
  const [delay, setDelay] = useState(true);
  useEffect(() => {
    Aos.init({ duration: 1000 });
    const timer = setTimeout(() => {
      setDelay(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);
  if (delay) return <PreLoader />;
  return (
    <div className="h-screen font-roboto lg:pt-20">
      <Nav />
      <img
        src={img}
        alt="me"
        className="fixed opacity-10 top[-22px] right-[-100px] lg:w-[65%] xl:w-[55%] lg:right-[-211px] lg:top-[-70px] xl:right-[-275px] xl:top-[91px] 2xl:right-[-390px] 2xl:top-[-84px] "
      />
      <div className="relative px-4 lg:px-6 overflow-x-hidden">
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
  );
};

export default App;
