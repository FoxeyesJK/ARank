const Router = require('koa-router');
const usersCtrl = require('./users.ctrl');

const users = new Router();

users.get('/', usersCtrl.list);
users.get('/:id', usersCtrl.checkObjectId, usersCtrl.read);
users.post('/', usersCtrl.post);
users.delete('/:id', usersCtrl.checkObjectId, usersCtrl.remove);
users.patch('/:id', usersCtrl.checkObjectId, usersCtrl.update);

module.exports = users;