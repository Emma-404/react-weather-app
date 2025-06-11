import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          This project was coded by Emma-404 and is{" "}
          <a
            href="https://github.com/Emma-404/react-weather-app"
            target="_blank"
          >
            Open-sourced{" "}
          </a>
        </footer>
      </div>
    </div>
  );
}
