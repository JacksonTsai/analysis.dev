import WeatherCard from './WeatherCard';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { WeatherCardInfo, WeatherPropsStatus } from '../types/weatherCardType';
import { describe, it, expect } from 'vitest';

const mockCardInfo: WeatherCardInfo = {
  location: 'New York',
  dateTime: Math.floor(Date.now() / 1000),
  weather: {
    weatherType: 'Clear',
    description: 'clear sky'
  },
  tempHum: {
    temp: 25,
    humidity: 60,
    tempMin: 20,
    tempMax: 30
  }
};

describe('WeatherCard component', () => {
  it('renders weather information correctly on Success status', () => {
    render(<WeatherCard cardInfo={mockCardInfo} status={WeatherPropsStatus.Success} />);

    expect(screen.getByText(/New York/i)).toBeInTheDocument();
    expect(screen.getByText(/Today/i)).toBeInTheDocument();
    expect(screen.getByText(/25°C/i)).toBeInTheDocument();
    expect(screen.getByText(/clear sky/i)).toBeInTheDocument();
    expect(screen.getByText(/Humidity: 60/i)).toBeInTheDocument();
    expect(screen.getByText(/Temperature 20°C ~ 30°C/i)).toBeInTheDocument();
  });

  it('renders initialization message correctly', () => {
    render(<WeatherCard status={WeatherPropsStatus.Init} />);

    expect(screen.getByText(/Please type in the "City" and "Country," then click "Search."/i)).toBeInTheDocument();
  });

  it('renders loading spinner correctly', () => {
    render(<WeatherCard status={WeatherPropsStatus.Loading} />);

    expect(screen.getByAltText(/loading/i)).toBeInTheDocument();
  });

  it('renders error message correctly', () => {
    render(<WeatherCard status={WeatherPropsStatus.Error} />);

    expect(screen.getByText(/No Data/i)).toBeInTheDocument();
  });
});
