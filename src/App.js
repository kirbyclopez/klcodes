import "./App.css";
import Navigation from "./components/Navigation";
import HeroHeader from "./components/HeroHeader";
import About from "./components/About";
import CanDo from "./components/CanDo";
import MyFooter from "./components/MyFooter";

const App = () => {
  return (
    <div>
      <Navigation />
      <HeroHeader />
      <About />
      <CanDo />
      <MyFooter />
    </div>
  );
};

export default App;
