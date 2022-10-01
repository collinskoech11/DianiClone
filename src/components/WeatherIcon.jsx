import React, {useState} from 'react'
import Weather from "./Weather"
import "./css/weather.css"
import {weather} from "./icons"

const lattitude =  25.0343
const longitude = 77.3963
const WEATHER_API_KEY="0bff0698379b96eaf19daa753dfa7f0d"
const URL_MAIN = 'https://api.openweathermap.org/data/2.5/weather'
const UNITS = 'metric';

function WeatherIcon() {
  const [temperature, setTemperature] = useState()
  const [isOpen, setIsOpen] = useState(false)
  let url = `${URL_MAIN}?lat=${lattitude}&lon=${longitude}&units=${UNITS}&APPID=${WEATHER_API_KEY}`;
  
  fetchApi(url)
  let iconUrl;
  async function fetchApi(url) {
    
    let response = await fetch(url);
    let {main, weather} = await response.json();

    let temperatureFixed = (main.temp).toFixed(0);
    setTemperature(temperatureFixed)
    // iconUrl = `https://openweathermap.org/img/wn/${icon}@4x.png`
    iconUrl = `https://openweathermap.org/img/wn/${weather[0].icon}@4x.png`
  }
  function set() {
    setIsOpen(true)
  }
  return (
    <>
    <div onClick={set} className="weatherflex">
      <div className="weather">
      {weather} {temperature}°C 
      </div>
    </div>
    {isOpen && <Weather setIsOpen={setIsOpen}/>}
    </>
  )
}

export default WeatherIcon