import React, { useEffect, useState } from "react";

const WeatherCard = ({ weatherInfo }) => {
  const [weatherState, setWeatherState] = useState("");
  const {
    temp,
    humidity,
    pressure,
    weathermood,
    name,
    speed,
    country,
    sunset,
  } = weatherInfo;

  useEffect(() => {
    if (weathermood) {
      switch (weathermood) {
        case "Clouds":
          setWeatherState("wi-day-cloudy");
          break;
        case "Haze":
          setWeatherState("wi-day-haze");
          break;
        case "Sunny":
          setWeatherState("wi-day-sunny");
          break;
        case "Rain":
          setWeatherState("wi-day-rain");
          break;
        case "Smoke":
          setWeatherState("wi-day-fog");
          break;

        default:
          setWeatherState("wi-day-sunny");
          break;
      }
    }
  }, [weathermood]);

  //   convertig time
  const sec = sunset;
  const date = new Date(sec * 1000);
  const timeStr = `${date.getHours()}:${date.getMinutes()}`;
  return (
    <>
      <div className="box">
        <div className="icon">
          <i className={`wi ${weatherState}`}></i>
        </div>
        <div className="weather-info">
          <div className="temp">
            <h1>{Math.floor(temp)}°</h1>
            <div className="temp2">
              <h1>{weathermood}</h1>
              <p>
                {name}, {country}
              </p>
            </div>
          </div>
          <div className="date">
            <h2>{new Date().toLocaleString()}</h2>
          </div>
        </div>
        <div className="extra-info">
          <div className="info">
            <i className={"wi wi-sunset"}></i>
            <div className="inside">
              <p>{timeStr} PM</p>
              <p>Sunset</p>
            </div>
          </div>
          <div className="info">
            <i className={"wi wi-humidity"}></i>
            <div className="inside">
              <p>{humidity}%</p>
              <p>Humidity</p>
            </div>
          </div>
          <div className="info">
            <i className={"wi wi-barometer"}></i>
            <div className="inside">
              <p>{pressure} Pa</p>
              <p>Pressure</p>
            </div>
          </div>
          <div className="info">
            <i className={"wi wi-cloudy-gusts"}></i>
            <div className="inside">
              <p>{speed} M/S</p>
              <p>Wind</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WeatherCard;
