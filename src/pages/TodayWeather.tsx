import InputField from '../components/InputField';
import Button from '../components/Button';
import WeatherCard from '../components/WeatherCard';
import { FormEvent, useEffect, useState } from 'react';
import { fetchWeather } from '../apis/weather/weatherApi';
import { WeatherProps, WeatherPropsStatus } from '../types/weatherCardType';
import { weatherDataTransform } from '../utils/weatherDataTransform';

type FormSchema = {
  city: string;
  country: string;
};

type ErrorSchema = FormSchema & {
  api: string;
};

const TodayWeather: React.FC = () => {
  const [formData, setFormData] = useState<FormSchema>({ city: '', country: '' });
  const [errors, setErrors] = useState<ErrorSchema>({ city: '', country: '', api: '' });
  const [loading, setLoading] = useState<boolean>(false);
  const [formInvalid, setFormInvalid] = useState<boolean>(true);
  const [weather, setWeather] = useState<WeatherProps>({ status: WeatherPropsStatus.Init });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    setErrors({
      ...errors,
      [name]: value ? '' : 'This field is required.'
    });
  };

  useEffect(() => {
    const isFormValid = formData.city && formData.country;
    setFormInvalid(!isFormValid);
  }, [formData]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setErrors({ ...errors, api: '' });
    setLoading(true);
    setWeather({ status: WeatherPropsStatus.Loading });
    try {
      const resp = await fetchWeather({ city: formData.city, country: formData.country });
      const cardInfo = weatherDataTransform(resp);
      setWeather({ cardInfo, status: WeatherPropsStatus.Success });
    } catch (error) {
      setWeather({ status: WeatherPropsStatus.Error });
      setErrors({ ...errors, api: 'Not found the city or country.' });
    }
    setLoading(false);
  };

  return (
    <>
      <h1 className="pb-10 text-3xl">Today's Weather</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="relative mb-14 flex gap-3.5">
          <InputField
            onChange={handleInputChange}
            errors={errors}
            value={formData.city}
            name="city"
            label="City"
          ></InputField>
          <InputField
            onChange={handleInputChange}
            errors={errors}
            value={formData.country}
            name="country"
            label="Country"
          ></InputField>
          <Button type="submit" label="Search" disabled={formInvalid || loading}></Button>
          <p className="text-warm-pink absolute -bottom-10 left-10">{errors?.api}</p>
        </div>
      </form>

      <WeatherCard {...weather}></WeatherCard>
    </>
  );
};

export default TodayWeather;
