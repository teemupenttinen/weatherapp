const debug = require('debug')('weathermap');

const Koa = require('koa');
const router = require('koa-router')();
const fetch = require('node-fetch');
const cors = require('kcors');

const appId = process.env.APPID || '';
const mapURI = process.env.MAP_ENDPOINT || "http://api.openweathermap.org/data/2.5";
const targetCity = process.env.TARGET_CITY || "Helsinki,fi";

const port = process.env.PORT || 9000;

const app = new Koa();

app.use(cors());

const fetchWeather = async (queryPath) => {
  const endpoint = `${mapURI}/${queryPath}?q=${targetCity}&appid=${appId}&units=metric`;
  const response = await fetch(endpoint);  
  return response ? response.json() : {}
};


router.get('/api/weather', async ctx => {
  const weatherData = await fetchWeather("weather");
  ctx.type = 'application/json; charset=utf-8';
  ctx.body = weatherData.weather ? weatherData : {};
});

router.get('/api/forecast', async ctx => {
  const weatherData = await fetchWeather("forecast");
  ctx.type = 'application/json; charset=utf-8';
  ctx.body = weatherData;
});

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(port);

console.log(`App listening on port ${port}`);
