const Koa = require('koa');
const router = require('koa-router')();
const fetch = require('node-fetch');
const cors = require('kcors');

const port = process.env.PORT || 9001;

const app = new Koa();

const weatherJson = require('./weather.json');
const forecastJson = require('./forecast.json');

app.use(cors());

router.get('/api/weather', async ctx => {
  ctx.type = 'application/json; charset=utf-8';
  ctx.body = weatherJson;
});

router.get('/api/forecast', async ctx => {
  ctx.type = 'application/json; charset=utf-8';
  ctx.body = forecastJson;
});

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(port);

console.log(`App listening on port ${port}`);
