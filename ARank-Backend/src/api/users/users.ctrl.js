const User = require('models/user');
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

exports.read = async (ctx) => {
    const { id } = ctx.params;
    try {
        const user = await User.findById(id).exec();

        if(!user) {
            ctx.status = 404;
            return;
        }
        ctx.body = user;
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

exports.post = async (ctx) => {
    //Request body can be found from ctx.request.body in REST API
    const schema = Joi.object().keys({
        username: Joi.string().required(),
        password: Joi.string().required(),
    });

    const result = Joi.validate(ctx.request.body, schema);

    if(result.error) {
        ctx.status = 400;
        ctx.body = result.error;
        return;
    }

    const { username, password } = ctx.request.body;

    const user = new User({
        username, password
    });

    try {
        await user.save();
        ctx.body = user;
    } catch(e) {
        ctx.throw(e, 500);
    }
}


exports.remove = async (ctx) => {
    const { id } = ctx.params;
    try {
        await User.findByIdAndRemove(id).exec();
        ctx.status = 204;
    } catch(e) {
        ctx.throw(e, 500);
    }
}

exports.update = async (ctx) => {
    const { id } = ctx.params;
    try {
        const user = await User.findByIdAndUpdate(id, ctx.request.body, {
            new: true
        }).exec();

        if(!user) {
            ctx.status = 404;
            return;
        }
        ctx.body = user;
    } catch(e) {
        ctx.throw(e, 500);
    } 
};