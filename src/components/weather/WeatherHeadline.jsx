import { useContext } from "react";
import { useTranslation } from "react-i18next";
import i18n from "../../i18next";
import LanguageSwitcher from "../header/LanguageSwitcher";
import Header from "../header/Header";

import CloudIcon from "../../assets/cloud.svg";
import HazeIcon from "../../assets/haze.svg";
import SnowIcon from "../../assets/icons/snow.svg";
import SunnyIcon from "../../assets/icons/sunny.svg";
import RainIcon from "../../assets/rainy.svg";
import ThunderIcon from "../../assets/thunder.svg";

import PinIcon from "../../assets/pin.svg";

import { WeatherContext } from "../../context";
import { getFormattedDate } from "../../utils/date-util";

function WeatherHeadline() {
    const { weatherData } = useContext(WeatherContext);
    const { t } = useTranslation();

    const { climate, location, temperature, time } = weatherData;

    function getWeatherIcon(climate) {
        const formattedClimate = climate.toLowerCase();

        switch (formattedClimate) {
            case "rain":
                return RainIcon;
            case "clouds":
                return CloudIcon;
            case "clear":
                return SunnyIcon;
            case "snow":
                return SnowIcon;
            case "thunder":
                return ThunderIcon;
            case "fog":
                return HazeIcon;
            case "haze":
                return HazeIcon;
            case "mist":
                return HazeIcon;
            default:
                return SunnyIcon;
        }
    }

    return (
        <div>
            <div className="max-md:flex items-center justify-between md:-mt-10">
                <img src={getWeatherIcon(climate)} alt={t(`climate.${climate.toLowerCase()}`)} />
                <div className="max-md:flex items-center max-md:space-x-4">
                    <h1 className="text-[60px] lg:text-[80px] xl:text-[100px] leading-none md:mb-4">
                        {Math.round(temperature)}°
                    </h1>
                    <div className="flex items-center space-x-4 md:mb-4">
                        <img src={PinIcon} alt={t("location.pin")} />
                        <h2 className="text-2xl lg:text-[50px]">{location}</h2>
                    </div>
                </div>
            </div>
            <p className="text-sm lg:text-lg">
                {getFormattedDate(time, "time", false)} -{" "}
                {getFormattedDate(time, "date", false)}
            </p>
        </div>
    );
}

export default WeatherHeadline;