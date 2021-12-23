import React, { useEffect, useState } from 'react';

import { getWeather } from '../../services/api';

import {
    PageWrapper, WeatherSummary,
    WeatherTemp
} from './style';

const Page = ({ goTo }) => {

    const [weatherInfo, setWeatherInfo] = useState(false);

    const getWeatherInfo = async (lat, long) => {
        const response = await getWeather({ lat, long });
        setWeatherInfo(response[0]);
    }

    const getUserLocation = async () => {
        navigator.geolocation.getCurrentPosition(function (position) {
            getWeatherInfo(position.coords.latitude, position.coords.longitude);
        });
    }

    useEffect(() => {
        if (!window.localStorage.getItem('_token')) {
            goTo('login');
        } else {
            getUserLocation();
        }
        //eslint-disable-next-line
    }, [])

    return (
        <PageWrapper>
            <WeatherSummary>
                {weatherInfo?.weather?.description}
            </WeatherSummary>
            <WeatherTemp>
                {weatherInfo?.temp}º
            </WeatherTemp>
        </PageWrapper>
    )

}


export default Page;