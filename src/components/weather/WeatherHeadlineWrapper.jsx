import { useTranslation } from "react-i18next";
import WeatherHeadline from "./WeatherHeadline";

function WeatherHeadlineWrapper() {
  const { t } = useTranslation();

  return <WeatherHeadline t={t} />;
}

export default WeatherHeadlineWrapper;