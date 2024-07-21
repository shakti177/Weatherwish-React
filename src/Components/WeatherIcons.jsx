import { RiSunFill } from "react-icons/ri";
import { RiMoonClearFill } from "react-icons/ri";
import { RiCloudyFill } from "react-icons/ri";
import { RiFoggyFill } from "react-icons/ri";
import { RiHailFill } from "react-icons/ri";
import { RiSunCloudyFill } from "react-icons/ri";
import { RiMoonCloudyFill } from "react-icons/ri";
import { WiDaySnowThunderstorm } from "react-icons/wi";
import { WiNightSnowThunderstorm } from "react-icons/wi";
import { PiCloudRainFill } from "react-icons/pi";
import { FaCloudSunRain } from "react-icons/fa";
import { FaCloudMoonRain } from "react-icons/fa";
import { BsCloudSleetFill } from "react-icons/bs";
import { WiNightAltSnowThunderstorm } from "react-icons/wi";
import { WiDaySnow } from "react-icons/wi";
import { WiNightAltSnow } from "react-icons/wi";
import { RiSnowyFill } from "react-icons/ri";
import { IoThunderstorm } from "react-icons/io5";
import { WiDayThunderstorm } from "react-icons/wi";
import { WiNightAltThunderstorm } from "react-icons/wi";
import { RiThunderstormsFill } from "react-icons/ri";
import { RiCloudWindyFill } from "react-icons/ri";

const WeatherIcons = {
  "clear-day": <RiSunFill />,
  "clear-night": <RiMoonClearFill size="90px" />,
  cloudy: <RiCloudyFill />,
  fog: <RiFoggyFill />,
  hail: <RiHailFill />,
  "partly-cloudy-day": <RiSunCloudyFill />,
  "partly-cloudy-night": <RiMoonCloudyFill />,
  "rain-snow-showers-day": <WiDaySnowThunderstorm />,
  "rain-snow-showers-night": <WiNightAltSnowThunderstorm />,
  "rain-snow": <WiNightSnowThunderstorm />,
  rain: <PiCloudRainFill />,
  "showers-day": <FaCloudSunRain />,
  "showers-night": <FaCloudMoonRain />,
  sleet: <BsCloudSleetFill />,
  "snow-showers-day": <WiDaySnow />,
  "snow-showers-night": <WiNightAltSnow />,
  snow: <RiSnowyFill />,
  "thunder-rain": <IoThunderstorm />,
  "thunder-showers-day": <WiDayThunderstorm />,
  "thunder-showers-night": <WiNightAltThunderstorm />,
  thunder: <RiThunderstormsFill />,
  wind: <RiCloudWindyFill />,
};

export default WeatherIcons;
