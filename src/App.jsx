import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Socials from "./components/Socials";
import Me from "./components/Me";
import img from "./assets/images/me.png";
import Experience from "./components/Experience";
import Works from "./components/Works";
const App = () => {
  return (
    <div className=" h-screen overflow-y-auto font-roboto bg-flash-white text-onyx px-4 lg:px-6 ">
      <img
        src={img}
        alt=""
        className="fixed opacity-10 top[-22px] right-[-100px] lg:w-[65%] lg:right-[-211px] lg:top-[-70px] xl:right-[-275px] xl:top-[-84px] 2xl:right-[-390px] 2xl:top-[-84px]"
      />
      <div className="relative overflow-x-hidden">
        <Nav />
        <Hero />
        <Socials />
        <Experience />
        <Me />
        <Works />
      </div>
    </div>
  );
};

export default App;
