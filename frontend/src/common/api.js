const baseURL = process.env.ENDPOINT;

const getWeatherFromApi = async () => {
  try {
    const response = await fetch(`${baseURL}/weather`);
    return response.json();
  } catch (error) {
    throw new Error('Error fetching weather from api');
  }
};

export { getWeatherFromApi };

const getWeatherFromApiWithLocation = async (location) => {
  const lat = location.coords.latitude.toFixed(2);
  const lon = location.coords.longitude.toFixed(2);

  try {
    const response = await fetch(`${baseURL}/weather?lat=${lat}&lon=${lon}`);
    return response.json();
  } catch (error) {
    throw new Error('Error fetching weather from api');
  }
};

export { getWeatherFromApiWithLocation };

const getForecastFromApi = async () => {
  try {
    const response = await fetch(`${baseURL}/forecast`);
    return response.json();
  } catch (error) {
    throw new Error('Error fetching forecast from api');
  }
};

export { getForecastFromApi };

const getForecastFromApiWithLocation = async (location) => {
  const lat = location.coords.latitude.toFixed(2);
  const lon = location.coords.longitude.toFixed(2);

  try {
    const response = await fetch(`${baseURL}/forecast?lat=${lat}&lon=${lon}`);
    return response.json();
  } catch (error) {
    throw new Error('Error fetching forecast from api');
  }
};

export { getForecastFromApiWithLocation };
