import { WeatherCardInfo } from '../types/weatherCardType';
import { IWeatherResp } from '../types/wetherApiType';

/**
 * Transforms weather API response data into a format suitable for the WeatherCardInfo type.
 *
 * @param {IWeatherResp} data - The weather API response data.
 * @returns {WeatherCardInfo} The transformed weather card information.
 *
 * @example
 * const apiResponse = {
 *   name: "New York",
 *   weather: [{ main: "Clear", description: "clear sky" }],
 *   main: { temp: 25.0, temp_max: 30.0, temp_min: 20.0, humidity: 60 },
 *   dt: 1672531200
 * };
 *
 * const weatherCardInfo = weatherDataTransform(apiResponse);
 * // Returns:
 * // {
 * //   location: "New York",
 * //   weather: { weatherType: "Clear", description: "clear sky" },
 * //   tempHum: { temp: 25.0, tempMax: 30.0, tempMin: 20.0, humidity: 60 },
 * //   dateTime: 1672531200
 * // }
 */
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
