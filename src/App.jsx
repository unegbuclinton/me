import Nav from "./components/Nav";
import "./App.css";
import Hero from "./components/Hero";
import Socials from "./components/Socials";
import Me from "./components/Me";
const App = () => {
  return (
    <div className="relative h-screen font-roboto bg-flash-white text-onyx px-4 lg:px-6 overflow-auto">
      <Nav />
      <Hero />
      <Socials />
      <Me />
    </div>
  );
};

export default App;
