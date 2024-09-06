import { format } from 'date-fns';
import { WeatherProps, WeatherPropsStatus } from '../types/weatherCardType';
import React from 'react';
import clear_day from '../assets/icons/clear_day.svg';
import cloudy from '../assets/icons/cloudy.svg';
import humidity from '../assets/icons/humidity.svg';
import location_mark from '../assets/icons/location_mark.svg';
import not_available from '../assets/icons/not_available.svg';
import rain from '../assets/icons/rain.svg';
import temperature from '../assets/icons/temperature.svg';
import loading from '../assets/icons/loading.svg';
import Card from './Card';

/**
 * WeatherCard component that displays weather information.
 * The card adjusts based on the status of the weather data (Success, Init, Loading, or Error).
 *
 * @param {WeatherProps} props - The properties for the WeatherCard component.
 * @param {WeatherProps['cardInfo']} props.cardInfo - The weather data to display when the status is Success.
 * @param {WeatherPropsStatus} [props.status=WeatherPropsStatus.Init] - The current status of the weather data (Success, Init, Loading, or Error).
 *
 * @returns {JSX.Element} The rendered weather card with conditional content based on the status.
 *
 */

const WeatherCard: React.FC<WeatherProps> = ({ cardInfo, status = WeatherPropsStatus.Init }) => {
  const numRound = (num: number) => {
    return Math.round(num);
  };

  const weatherType = {
    Clouds: cloudy,
    Rain: rain,
    Clear: clear_day,
    None: not_available
  };

  return (
    <Card>
      <div className="flex h-[334px] w-[476px] flex-col justify-between text-navy-blue">
        {status === WeatherPropsStatus.Success && cardInfo && (
          <>
            <div className="flex justify-between">
              <span className="flex gap-1 font-bold">
                <img src={location_mark} alt="Location" />
                {cardInfo.location}
              </span>
              <span>Today, {cardInfo?.dateTime && format(new Date(cardInfo?.dateTime * 1000), 'p')}</span>
            </div>
            <div className="flex justify-center">
              <img
                height="128px"
                width="128px"
                src={weatherType[cardInfo?.weather?.weatherType] ?? weatherType['None']}
                alt="cloudy"
              />
              <div>
                <div className="pb-2 text-6xl">
                  {numRound(cardInfo?.tempHum.temp)}
                  &deg;C
                </div>
                <div className="text-2xl">{cardInfo?.weather.weatherType}</div>
                <div className="text-base">{cardInfo?.weather.description}</div>
              </div>
            </div>
            <div className="flex justify-between">
              <span className="flex gap-1">
                <img src={humidity} alt="humidity" />
                Humidity: {numRound(cardInfo?.tempHum.humidity)}
              </span>
              <span className="flex gap-1">
                <img src={temperature} alt="temperature" />
                Temperature {numRound(cardInfo?.tempHum.tempMin)}&deg;C ~ {numRound(cardInfo?.tempHum.tempMax)}&deg;C
              </span>
            </div>
          </>
        )}
        {status === WeatherPropsStatus.Init && (
          <div className="flex h-full w-full items-center justify-center">
            Please type in the "City" and "Country," then click "Search."
          </div>
        )}
        {status === WeatherPropsStatus.Loading && (
          <div className="flex h-full w-full items-center justify-center">
            <img src={loading} alt="loading" />
          </div>
        )}
        {status === WeatherPropsStatus.Error && (
          <div className="flex h-full w-full items-center justify-center">No Data</div>
        )}
      </div>
    </Card>
  );
};

export default WeatherCard;
