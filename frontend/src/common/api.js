const baseURL = process.env.ENDPOINT;

const getWeatherFromApi = async () => {
    try {
        const response = await fetch(`${baseURL}/weather`);
        return response.json();
    } catch (error) {
        console.error(error);
    }

    return {};
};

const _getWeatherFromApi = getWeatherFromApi;
export { _getWeatherFromApi as getWeatherFromApi };

const getForecastFromApi = async () => {
    try {
        const response = await fetch(`${baseURL}/forecast`);
        return response.json();
    } catch (error) {
        console.error(error);
    }

    return [];
};

const _getForecastFromApi = getForecastFromApi;
export { _getForecastFromApi as getForecastFromApi };
