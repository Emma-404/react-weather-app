import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

export default function WeatherIcon(props) {
  console.log(props.code);
  const codeMapping = {
    "Clear sky": "clear-sky-day",
    "Clear sky": "clear-sky-night",
  };

  return (
    <ReactAnimatedWeather
      icon={codeMapping[props.code]}
      color="purple"
      size={60}
      animate={true}
    />
  );
}
