import React from "react";
import "./App.css";
import Weather from "./Weather";
import WeatherInfo from "./WeatherInfo";
import WeatherTemperature from "./WeatherTemperature";
import FormattedDate from "./FormattedDate";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="London" />
        <footer>
          This project was coded by{" "}
          <a
            href="https://github.com/Emma-404"
            target="_blank"
            rel="noreferrer"
          >
            Emma-404
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/Emma-404/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            Open-sourced{" "}
          </a>
        </footer>
      </div>
    </div>
  );
}
