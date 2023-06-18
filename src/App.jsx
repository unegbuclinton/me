import img from "./assets/images/me.png";
import { useEffect, useState } from "react";
import PreLoader from "./components/Preloader/PreLoader";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Aos from "aos";
import Nav from "./components/Nav";
import "aos/dist/aos.css";
import Main from "./pages/main";
import Archives from "./pages/Archives";
const App = () => {
  const [delay, setDelay] = useState(true);
  useEffect(() => {
    Aos.init({ duration: 1000 });
    const timer = setTimeout(() => {
      setDelay(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);
  if (delay) return <PreLoader />;
  return (
    <div className="h-screen font-roboto lg:pt-20">
      <img
        src={img}
        alt="me"
        className="fixed opacity-10 top[-22px] right-[-100px] lg:w-[65%] xl:w-[55%] lg:right-[-211px] lg:top-[-70px] xl:right-[-275px] xl:top-[91px] 2xl:right-[-390px] 2xl:top-[-84px] "
      />
      <Router>
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route exact path="/archives" element={<Archives />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
