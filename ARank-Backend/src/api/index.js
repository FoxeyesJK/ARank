const Router = require('koa-router');
const artists = require('./artists');
const users = require('./users');
const auth = require('./auth');

const api = new Router();

api.use('/artists', artists.routes());
api.use('/users', users.routes());
api.use('/auth', auth.routes());

module.exports = api;
