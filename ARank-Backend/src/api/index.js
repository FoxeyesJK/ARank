const Router = require('koa-router');
const artists = require('./artists');

const api = new Router();

api.use('/artists', artists.routes());

module.exports = api;