import axios from 'axios';


const API_URL = 'http://localhost:5000'


export const login = async ({ email, password }) => {
    const response = await axios.post(`${API_URL}/login/`, { email, password });
    return response?.data?.data;
}
export const getWeather = async ({ lat, long }) => {
    const response = await axios.post(`${API_URL}/weather/`, { lat, long }, {
        headers: {
            'authorization': 'Bearer ' + window.localStorage.getItem('_token')
        }
    });
    return response?.data?.data;
}