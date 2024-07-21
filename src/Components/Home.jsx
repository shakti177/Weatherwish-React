import React, { useState } from "react";
import { LuMapPin } from "react-icons/lu";
import { IoSearch } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

import Gwalior from "../Assets/gwalior.jpg";
import Indore from "../Assets/indore.jpg";
import London from "../Assets/london.jpg";
import Mumbai from "../Assets/mumbai.jpg";
import delhi from "../Assets/delhi.webp";

const Home = () => {
  const [city, setCity] = useState("");
  const navigate = useNavigate();

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  const handleSearch = () => {
    if (city) {
      navigate(`/weather?city=${city}`);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <>
      <div className="py-[150px] flex flex-col items-center justify-center gap-10 max-sm:py-[50px] max-sm:gap-5">
        {/* heading */}

        <div className="flex flex-col items-center justify-center gap-2">
          <h2 className="text-4xl font-bold max-sm:text-3xl">WeatherWise</h2>
          <p className="max-sm:w-[80%] text-center">
            Get the latest weather forecast of your City
          </p>
        </div>

        {/* search Bar */}

        <div className="flex justify-between border-2 rounded-full border-slate-950 p-3 w-[60%] max-md:w-[90%]">
          <div className="flex items-center gap-2">
            <LuMapPin />
            <input
              type="text"
              onChange={handleCityChange}
              placeholder="Enter City Name"
              className="outline-none w-[100%]"
              onKeyDown={handleKeyDown}
            />
          </div>
          <button onClick={handleSearch} className="flex items-center">
            <IoSearch />
          </button>
        </div>

        {/* cities */}

        <div className="flex items-center justify-center flex-wrap gap-8">
          <div
            className="flex flex-col gap-3"
            onClick={() => navigate("/weather?city=mumbai")}
          >
            <img
              src={Mumbai}
              alt=""
              className="w-[170px] h-[213px] object-cover rounded-xl hover:opacity-70 transition-all max-sm:w-[130px] max-sm:h-[170px]"
            />
            <p className="text-[20px]">Mumbai</p>
          </div>
          <div
            className="flex flex-col gap-3"
            onClick={() => navigate("/weather?city=new delhi")}
          >
            <img
              src={delhi}
              alt=""
              className="w-[170px] h-[213px] object-cover rounded-xl hover:opacity-70 transition-all max-sm:w-[130px] max-sm:h-[170px]"
            />
            <p className="text-[20px]">New Delhi</p>
          </div>
          <div
            className="flex flex-col gap-3"
            onClick={() => navigate("/weather?city=london")}
          >
            <img
              src={London}
              alt=""
              className="w-[170px] h-[213px] object-cover rounded-xl hover:opacity-70 transition-all max-sm:w-[130px] max-sm:h-[170px]"
            />
            <p className="text-[20px]">London</p>
          </div>
          <div
            className="flex flex-col gap-3"
            onClick={() => navigate("/weather?city=indore")}
          >
            <img
              src={Indore}
              alt=""
              className="w-[170px] h-[213px] object-cover rounded-xl hover:opacity-70 transition-all max-sm:w-[130px] max-sm:h-[170px]"
            />
            <p className="text-[20px]">Indore</p>
          </div>
          <div
            className="flex flex-col gap-3"
            onClick={() => navigate("/weather?city=gwalior")}
          >
            <img
              src={Gwalior}
              alt=""
              className="w-[170px] h-[213px] object-cover rounded-xl hover:opacity-70 transition-all max-sm:w-[130px] max-sm:h-[170px]"
            />
            <p className="text-[20px]">Gwalior</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
