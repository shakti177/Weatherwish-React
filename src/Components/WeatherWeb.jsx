import React, { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { LuMapPin } from "react-icons/lu";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { FaTemperatureThreeQuarters } from "react-icons/fa6";
import { FaWind } from "react-icons/fa";
import { GiDroplets } from "react-icons/gi";
import { HiMiniEye } from "react-icons/hi2";
import { FaMapLocationDot } from "react-icons/fa6";
import loader from "../Assets/loader.gif";

const WeatherWeb = () => {
  const [searchParams] = useSearchParams();
  const city = searchParams.get("city");
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const APIKey = process.env.REACT_APP_API_KEY;

  useEffect(() => {
    const fetchWeatherData = async () => {
      if (!city) {
        setError("Please enter a city name.");
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        const response = await fetch(
          `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?key=${APIKey}&unitGroup=metric&IconSet=icons1`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setWeatherData(data);
        setError(null);
      } catch (error) {
        setError("Failed to fetch weather data. Please try again.");
        console.error("Error fetching weather data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchWeatherData();
  }, [city, APIKey]);

  return (
    <>
      {/* Navbar */}

      {loading && (
        <div className="fixed top-0 left-0 w-full h-full bg-white flex justify-center items-center">
          <img src={loader} alt="" className="w-[400px] h-[300px]" />
        </div>
      )}
      <div className="flex flex-row justify-between items-center p-6 w-[100%]">
        <h2>
          <Link to="/" className="flex items-center gap-2 text-xl font-[600]">
            <TiWeatherPartlySunny size={22} /> WEATHERWISE
          </Link>
        </h2>
      </div>
      {/* Weather Hero Section */}
      <div className="p-16 max-md:p-5">
        {error && <p className="text-red-500">{error}</p>}
        {weatherData && (
          <div className="flex flex-col justify-center items-center">
            <div className="flex flex-col items-center justify-center">
              <h2 className="flex items-center gap-3 text-[28px] font-[600] max-md:text-[18px] ">
                {weatherData.resolvedAddress}
                <a
                  href={`https://www.google.com/maps/place/${weatherData.address}`}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:cursor-pointer"
                >
                  <FaMapLocationDot />
                </a>
              </h2>
              <p className="text-[19px] font-[600] mt-3 max-md:text-[16px]">
                {weatherData.days[0].datetime}
              </p>
              <div className="flex items-center gap-9 max-md:gap-2">
                <img
                  src={`https://raw.githubusercontent.com/visualcrossing/WeatherIcons/main/PNG/2nd%20Set%20-%20Color/${weatherData.currentConditions.icon}.png`}
                  alt=""
                  className="w-[120px] h-[120px] max-md:w-[60px] max-md:h-[60px]"
                />
                <h1 className="text-[143px] font-[600] max-md:text-[60px]">
                  {weatherData.currentConditions.temp}°c
                </h1>
              </div>
              <p className="text-[23px] max-md:text-[16px]">
                {weatherData.currentConditions.conditions}
              </p>
            </div>

            {/* Hero Bottom */}
            <div className="flex flex-wrap gap-6 mt-10 max-md:flex-col">
              <div className="flex gap-3">
                <div className="bg-[#121B27] flex items-center justify-center p-4 rounded-md">
                  <FaTemperatureThreeQuarters size={32} color="white" />
                </div>
                <div className="text-xl font-[500] max-md:text-[14px]">
                  <h2>Temperature</h2>
                  <h2>
                    High {weatherData.days[0].feelslikemax}° / Low{" "}
                    {weatherData.days[0].feelslikemin}°
                  </h2>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="bg-[#121B27] flex items-center justify-center p-4 rounded-md">
                  <FaWind size={32} color="white" />
                </div>
                <div className="text-xl font-[500] max-md:text-[14px]">
                  <h2>Wind</h2>
                  <h2>{weatherData.currentConditions.windspeed} km/h</h2>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="bg-[#121B27] flex items-center justify-center p-4 rounded-md">
                  <GiDroplets size={32} color="white" />
                </div>
                <div className="text-xl font-[500] max-md:text-[14px]">
                  <h2>Humidity</h2>
                  <h2>{weatherData.currentConditions.humidity}%</h2>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="bg-[#121B27] flex items-center justify-center p-4 rounded-md">
                  <HiMiniEye size={32} className="text-white" />
                </div>
                <div className="text-xl font-[500] max-md:text-[14px]">
                  <h2>Visibility</h2>
                  <h2>{weatherData.currentConditions.visibility} km</h2>
                </div>
              </div>
            </div>
            <p className="mt-16 text-xl max-md:text-base">
              {weatherData.description}
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default WeatherWeb;
