import axios from 'axios';
import { IWeatherReq, IWeatherResp } from '../../types/wetherApiType';

const API_KEY = '004013be78373c8702b4c20e156e5883';
const WEATHER_PATH = '/weather';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/';

export const apiClient = axios.create({
  baseURL: BASE_URL
});

export const fetchWeather = async ({ city, country }: IWeatherReq): Promise<IWeatherResp> => {
  const url = `${WEATHER_PATH}?q=${city},${country}&units=metric&appid=${API_KEY}`;
  const response = await apiClient.get(url);
  return response.data;
};
