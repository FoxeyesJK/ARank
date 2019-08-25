const Artist = require('models/artist');
const Joi = require('joi');
const { ObjectId } = require('mongoose').Types;

exports.checkObjectId = (ctx, next) => {
    const { id } = ctx.params;

    if(!ObjectId.isValid(id)) {
        ctx.status = 400;
        return null;
    }

    return next();
}

exports.write = async (ctx) => {
    //Request body can be found from ctx.request.body in REST API
    const schema = Joi.object().keys({
        name: Joi.string().required(),
        genres: Joi.array().items(Joi.string()).required(),
        like: Joi.string()
    });

    const result = Joi.validate(ctx.request.body, schema);

    if(result.error) {
        ctx.status = 400;
        ctx.body = result.error;
        return;
    }

    const { name, genres, like } = ctx.request.body;

    const artist = new Artist({
        name, genres, like
    });

    try {
        await artist.save();
        ctx.body = artist;
    } catch(e) {
        ctx.throw(e, 500);
    }
}

exports.list = async (ctx) => {
    try {
        const artists = await Artist.find().exec();
        ctx.body = artists;
    } catch(e) {
        ctx.throw(e, 500);
    }
}

exports.read = async (ctx) => {
    const { id } = ctx.params;
    try {
        const artist = await Artist.findById(id).exec();

        if(!artist) {
            ctx.status = 404;
            return;
        }
        ctx.body = artist;
    } catch(e) {
        ctx.throw(e, 500);
    }
}

exports.remove = async (ctx) => {
    const { id } = ctx.params;
    try {
        await Artist.findByIdAndRemove(id).exec();
        ctx.status = 204;
    } catch(e) {
        ctx.throw(e, 500);
    }
}

exports.update = async (ctx) => {
    const { id } = ctx.params;
    try {
        const artist = await Artist.findByIdAndUpdate(id, ctx.request.body, {
            new: true
        }).exec();

        if(!artist) {
            ctx.status = 404;
            return;
        }
        ctx.body = artist;
    } catch(e) {
        ctx.throw(e, 500);
    } 
};

exports.checkLogin = (ctx, next) => {
    if(!ctx.session.logged) {
        ctx.status = 401; // Unauthorized
        return null;
    }
    return next();
}