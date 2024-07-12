import React, { useState } from "react";
import { LuMapPin } from "react-icons/lu";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { FaTemperatureThreeQuarters } from "react-icons/fa6";
import { FaWind } from "react-icons/fa";
import { GiDroplets } from "react-icons/gi";
import { HiMiniEye } from "react-icons/hi2";

const WeatherWeb = () => {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState();

  const APIKey = "G2UVJ3Z4STVCFBG8NWSTX6J2Q";
  const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?key=${APIKey}&unitGroup=metric&IconSet=icons1`;

  const fetchWeatherData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setWeatherData(data);
    console.log(data);
  };

  const handleCity = (e) => {
    e.preventDefault();
    setCity(e.target.value);
  };

  return (
    <>
      {/* navbar */}
      <div className="flex flex-row justify-between items-center p-6 w-[100%]">
        <h2 className="flex items-center gap-2 text-xl font-[600]">
          <TiWeatherPartlySunny size={22} /> WEATHERWISE
        </h2>
        <div className="flex items-center border-2 border-black py-1 px-4 rounded-xl">
          <input
            type="text"
            onChange={handleCity}
            placeholder="Enter City Name"
            className="outline-none"
          />
          <button onClick={fetchWeatherData}>
            <LuMapPin />
          </button>
        </div>
      </div>
      {/* weather Hero Section */}
      <div className="p-16">
        {weatherData && (
          <div className="flex flex-col justify-center items-center">
            <div className="flex flex-col items-center justify-center">
              <h2 className="text-[28px] font-[600]">
                {weatherData.resolvedAddress}
              </h2>
              <p className="text-[19px] font-[600] mt-3">
                {weatherData.days[0].datetime}
              </p>
              <div className="flex items-center gap-9">
                <img
                  src={`https://raw.githubusercontent.com/visualcrossing/WeatherIcons/main/PNG/2nd%20Set%20-%20Color/${weatherData.currentConditions.icon}.png`}
                  alt=""
                  className="w-[120px] h-[120px]"
                />

                <h1 className="text-[143px] font-[600]">
                  {weatherData.currentConditions.temp} °c
                </h1>
              </div>
              <p className="text-[23px]">
                {weatherData.currentConditions.conditions}
              </p>
            </div>
            <div className="flex gap-6 mt-10">
              <div className="flex gap-3">
                <div className="bg-[#121B27] flex items-center justify-center p-4 rounded-md">
                  <FaTemperatureThreeQuarters size={32} color="white" />
                </div>
                <div>
                  <h2 className="text-xl font-[500]">Temperature</h2>
                  <h2 className="text-xl font-[500]">
                    High {weatherData.days[0].feelslikemax}° / Low{" "}
                    {weatherData.days[0].feelslikemin}°
                  </h2>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="bg-[#121B27] flex items-center justify-center p-4 rounded-md">
                  <FaWind size={32} color="white" />
                </div>
                <div>
                  <h2 className="text-xl font-[500]">Wind</h2>
                  <h2 className="text-xl font-[500]">
                    {weatherData.currentConditions.windspeed} km/h
                  </h2>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="bg-[#121B27] flex items-center justify-center p-4 rounded-md">
                  <GiDroplets size={32} color="white" />
                </div>
                <div>
                  <h2 className="text-xl font-[500]">Humidity</h2>
                  <h2 className="text-xl font-[500]">
                    {weatherData.currentConditions.humidity}%
                  </h2>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="bg-[#121B27] flex items-center justify-center p-4 rounded-md">
                  <HiMiniEye size={32} className="text-white" />
                </div>
                <div>
                  <h2 className="text-xl font-[500]">Visibility</h2>
                  <h2 className="text-xl font-[500]">
                    {weatherData.currentConditions.visibility} km
                  </h2>
                </div>
              </div>
            </div>
            <p className="mt-16 text-xl">{weatherData.description}</p>
          </div>
        )}
      </div>
    </>
  );
};

export default WeatherWeb;
