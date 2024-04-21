// https://api.openweathermap.org/data/2.5/weather?q=mumbai&appid=ab68aaa417657429819a4c11216b2e41

import React, { useEffect, useState } from "react";
import "./weather.css";
import "./weather-icons.min.css";
import WeatherCard from "./WeatherCard";

const Weather = () => {
  const [searchValue, setSearchValue] = useState("Mumbai");
  const [weatherInfo, setWeatherInfo] = useState({});

  const getWeatherData = async () => {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=ab68aaa417657429819a4c11216b2e41`;

      const res = await fetch(url);
      const data = await res.json();

      const { temp, humidity, pressure } = data.main;
      const { main: weathermood } = data.weather[0];
      const { name } = data;
      const { speed } = data.wind;
      const { country, sunset } = data.sys;

      const newWeatherData = {
        temp,
        humidity,
        pressure,
        weathermood,
        name,
        speed,
        country,
        sunset,
      };

      setWeatherInfo(newWeatherData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getWeatherData();
  }, []);

  return (
    <>
      <div className="main">
        <div className="search">
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Search..."
            autoFocus
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            required
          />
          <button onClick={getWeatherData}>Search</button>
        </div>

        {/* card start */}
        <WeatherCard weatherInfo={weatherInfo} />
        {/* card end */}
      </div>
    </>
  );
};

export default Weather;
