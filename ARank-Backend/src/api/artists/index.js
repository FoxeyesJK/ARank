const Router = require('koa-router');
const artistsCtrl = require('./artists.ctrl');

const artists = new Router();

artists.get('/', artistsCtrl.list);
artists.get('/:id', artistsCtrl.checkObjectId, artistsCtrl.read);

artists.post('/', artistsCtrl.write);
artists.delete('/:id', artistsCtrl.checkObjectId, artistsCtrl.remove);
artists.patch('/:id', artistsCtrl.checkObjectId, artistsCtrl.update);

// Uncomment for loginAdmin function
// artists.post('/', artistsCtrl.checkLogin, artistsCtrl.write);
// artists.delete('/:id', artistsCtrl.checkLogin, artistsCtrl.checkObjectId, artistsCtrl.remove);
// artists.patch('/:id', artistsCtrl.checkLogin, artistsCtrl.checkObjectId, artistsCtrl.update);

module.exports = artists;