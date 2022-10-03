import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ThemeProvider } from "./components/ThemeContext";
import Background from "./components/Background";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider>
    <Background>
      <App />
    </Background>
  </ThemeProvider>
);

reportWebVitals();
