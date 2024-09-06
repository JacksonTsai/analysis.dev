import { WeatherType } from './wetherApiType';

export enum WeatherPropsStatus {
  Init,
  Loading,
  Success,
  Error,
  None
}

export type WeatherProps = {
  cardInfo?: WeatherCardInfo;
  status: WeatherPropsStatus;
};

export type WeatherCardInfo = {
  location: string;
  weather: {
    weatherType: WeatherType;
    description: string;
  };
  tempHum: TempHum;
  dateTime: number;
};

export type TempHum = {
  temp: number;
  tempMin: number;
  tempMax: number;
  humidity: number;
};
