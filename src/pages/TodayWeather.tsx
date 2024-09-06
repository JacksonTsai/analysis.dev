import InputField from '../components/InputField';
import Button from '../components/Button';
import WeatherCard from '../components/WeatherCard';
import { fetchWeather } from '../apis/weather/weatherApi';
import { useForm } from 'react-hook-form';
import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import { weatherDataTransform } from '../utils/weatherDataTransform';
import { WeatherProps, WeatherPropsStatus } from '../types/weatherCardType';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const formSchema = z.object({
  city: z.string().min(1, 'This field is required.').max(64, 'Exceeds max length.'),
  country: z.string().min(1, 'This field is required.').max(64, 'Exceeds max length.')
});

type formType = z.infer<typeof formSchema>;

const TodayWeather: React.FC = () => {
  const [weather, setWeather] = useState<WeatherProps>({ status: WeatherPropsStatus.Init });
  const {
    handleSubmit,
    control,
    getValues,
    setError,
    formState: { errors, isValid, isSubmitting }
  } = useForm<formType>({
    defaultValues: { city: '', country: '' },
    mode: 'onChange',
    resolver: zodResolver(formSchema)
  });

  const { data, refetch, isError, isFetching, isLoading, isSuccess, error } = useQuery({
    queryKey: [getValues().city, getValues().country],
    queryFn: async () => await fetchWeather({ city: getValues().city, country: getValues().country }),
    enabled: false,
    retry: 0,
    staleTime: 0,
    gcTime: 0
  });

  useEffect(() => {
    if (isSuccess) {
      const cardInfo = weatherDataTransform(data);
      setWeather({ cardInfo, status: WeatherPropsStatus.Success });
    } else if (isError || error) {
      setError('root', {
        message: 'Not found the city or country'
      });
      setWeather({ status: WeatherPropsStatus.Error });
    } else if (isFetching || isLoading) {
      setWeather({ status: WeatherPropsStatus.Loading });
    }
  }, [isSuccess, isError, isFetching, isLoading, error, isSubmitting]);

  const isFormDisabled = () => {
    if (!isValid || isLoading || isFetching) {
      return true;
    }
    return false;
  };

  return (
    <>
      <h1 className="pb-10 text-3xl">Today's Weather</h1>
      <form onSubmit={handleSubmit(() => refetch())}>
        <div className="relative mb-14 flex gap-3.5">
          <InputField control={control} name="city" label="City"></InputField>
          <InputField control={control} name="country" label="Country"></InputField>
          <Button type="submit" label="Search" disabled={isFormDisabled()}></Button>
          <p className="absolute -bottom-10 left-10 text-warm-pink">{errors.root?.message}</p>
        </div>
      </form>

      <WeatherCard {...weather}></WeatherCard>
    </>
  );
};

export default TodayWeather;
