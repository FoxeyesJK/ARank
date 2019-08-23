require('dotenv').config();

const Koa = require('koa');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');

const api = require('./api');

const mongoose = require('mongoose');

const session = require('koa-session');

const {
    PORT: port = 4000,
    MONGO_URI: mongoURI,
    COOKIE_SIGN_KEY: signKey
} = process.env;

mongoose.Promise = global.Promise;
mongoose.connect(mongoURI).then(() => {
    console.log('connected to mongodb');
}).catch((e) => {
    console.error(e);
})

const app = new Koa();
const router = new Router();

//Router Setting
router.get('/', (ctx) => {
    ctx.body = 'home';
})
router.use('/api', api.routes());

//Bpdyparser before router
app.use(bodyParser());

const sessionConfig = {
    maxAge: 86400000, //day
}
app.use(session(sessionConfig, app));
app.keys = [signKey];

//Router in app instances
app.use(router.routes()).use(router.allowedMethods());

app.listen(port, () => {
    console.log('listening to port', port);
});