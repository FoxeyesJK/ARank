const Router = require('koa-router');
const artistsCtrl = require('./artists.ctrl');

const artists = new Router();

artists.get('/', artistsCtrl.list);
artists.post('/', artistsCtrl.write);
artists.get('/:id', artistsCtrl.checkObjectId, artistsCtrl.read);
artists.delete('/:id', artistsCtrl.checkObjectId, artistsCtrl.remove);
artists.patch('/:id', artistsCtrl.checkObjectId, artistsCtrl.update);

module.exports = artists;