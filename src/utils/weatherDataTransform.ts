import { WeatherCardInfo } from '../types/weatherCardType';
import { IWeatherResp } from '../types/wetherApiType';

export const weatherDataTransform = (data: IWeatherResp): WeatherCardInfo => {
  return {
    location: data.name,
    weather: {
      weatherType: data.weather[0].main,
      description: data.weather[0].description
    },
    tempHum: {
      temp: data.main.temp,
      tempMax: data.main.temp_max,
      tempMin: data.main.temp_min,
      humidity: data.main.humidity
    },
    dateTime: data.dt
  };
};
