// https://api.openweathermap.org/data/2.5/weather?q=Taipei,TW&units=metric&appid=004013be78373c8702b4c20e156e5883

export type WeatherType = 'Clouds' | 'Rain' | 'Clear' | 'None';

export interface IWeatherReq {
  city: string;
  country: string;
}

export interface IWeatherResp {
  coord: Coord;
  weather: Weather[];
  base: string;
  main: Main;
  visibility: number;
  wind: Wind;
  clouds: Clouds;
  dt: number;
  sys: Sys;
  timezone: number;
  id: number;
  name: string;
  cod: number;
}

export interface Weather {
  id: number;
  main: WeatherType;
  description: string;
  icon: string;
}

interface Sys {
  type: number;
  id: number;
  country: string;
  sunrise: number;
  sunset: number;
}

interface Clouds {
  all: number;
}

interface Wind {
  speed: number;
  deg: number;
}

interface Main {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
  sea_level: number;
  grnd_level: number;
}

interface Coord {
  lon: number;
  lat: number;
}
