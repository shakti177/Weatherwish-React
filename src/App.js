import React from "react";
import WeatherWeb from "./Components/WeatherWeb";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/weather" element={<WeatherWeb />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
