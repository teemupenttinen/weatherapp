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

const getWeatherFromApiWithLocation = async (location) => {

    const lat = location.coords.latitude.toFixed(2);
    const lon = location.coords.longitude.toFixed(2);

    try {
        const response = await fetch(`${baseURL}/weather?lat=${lat}&lon=${lon}`);
        return response.json();
    } catch (error) {
        console.error(error);
    }

    return [];
}

const _getWeatherFromApiWithLocation = getWeatherFromApiWithLocation;
export { _getWeatherFromApiWithLocation as getWeatherFromApiWithLocation };

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

const getForecastFromApiWithLocation = async (location) => {
    const lat = location.coords.latitude.toFixed(2);
    const lon = location.coords.longitude.toFixed(2);

    try {
        const response = await fetch(`${baseURL}/forecast?lat=${lat}&lon=${lon}`);
        return response.json();
    } catch (error) {
        console.error(error);
    }

    return [];
}

const _getForecastFromApiWithLocation = getForecastFromApiWithLocation;
export { _getForecastFromApiWithLocation as getForecastFromApiWithLocation };


