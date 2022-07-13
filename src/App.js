import "./App.css";
import logoSecondary from "./assets/images/klcodes-logo-secondary.png";
import logoWhite from "./assets/images/klcodes-logo-white.png";

function App() {
  return (
    <div className="App">
      <img src={logoWhite} alt="klcodes" className="banner-logo" />
      <h1 className="header1">Hey there! I'm Kirby!</h1>
      <p className="subheading">
        This portfolio is still under construction. Thank you for your patience.
      </p>
    </div>
  );
}

export default App;
