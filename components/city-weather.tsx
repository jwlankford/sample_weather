import React, { useState, useEffect } from "react";
import axios from "axios";
import { setDefaultResultOrder } from "dns";

function KtoF(tempKevlin: number) {
  if (tempKevlin <= 0) {
    return 0;
  }
  return ((tempKevlin - 273.15) * 9) / 5 + 32;
}

function CityWeather(props: any) {
 
  const [weatherResult, setWeatherResult] = useState({
    name: props.city,
    cod: 0,
    main: {
      temp: 0
    },
    weather: [{
      main: "",
      description: "",
      icon: ""
    }]
  });
  const [error, setError] = useState({code: ""});

  const API_KEY = "3624edb9aa9ea5f294f4a3f62ff195f8";

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${weatherResult.name}&appid=${API_KEY}`;

  const getdata = async () => {  
    const response = await axios.get(url);
    setWeatherResult(response.data);
    setError(response.data.cod);
  }
 
  useEffect(() => {
    getdata();
  });

  return (
    <div className="city-weather">
        <div className="flex justify-center text-center bg-slate-200">
          {(error.code === "ERR_BAD_REQUEST") ? 
          <div className="text-red-500 text-2xl font-bold">City not found</div>:
          <div className="block px-10 m-5 rounded-lg shadow-lg bg-white">
            <div className="inline-block text-gray-800 text-2xl leading-tight font-bold mb-2 mt-5 uppercase">
              <p>{weatherResult.name}</p>
            </div>
            <div className="hero container max-w-screen-lg mx-auto pb-0">
                {weatherResult.weather[0].icon ? <img src={`http://openweathermap.org/img/w/${weatherResult.weather[0].icon}.png`} alt="weather icon" width="160" className="mx-auto"/> : null}
            </div>
            <div className="text-gray-400 leading-tight text-2xl mt-0 mr-2 mb-3">
                {weatherResult.weather[0].main}
            </div>
            <div className="inline-flex text-gray-900 text-l leading-tight font-medium mb-5">
                {weatherResult ? 
                  <div className="text-l font-medium">
                    <span className="text-gray-400 mr-2 mt-4">Temperature: </span>
                    <span className="text-4xl text-bold">{KtoF(weatherResult.main.temp).toFixed(0)} <span>&#8457;</span></span>
                  </div>
                : null}
            </div>
          </div>
          }
        </div>
    </div>
  );
}

export default CityWeather;