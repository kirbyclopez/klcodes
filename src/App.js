import "./App.css";
import Navigation from "./components/Navigation";
import HeroHeader from "./components/HeroHeader";
import About from "./components/About";
import CanDo from "./components/CanDo";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import MyFooter from "./components/MyFooter";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <div>
      <Toaster position="top-right" reverseOrder={true} />
      <Navigation />
      <HeroHeader />
      <About />
      <CanDo />
      <Skills />
      <Projects />
      <Contact />
      <MyFooter />
    </div>
  );
};

export default App;
