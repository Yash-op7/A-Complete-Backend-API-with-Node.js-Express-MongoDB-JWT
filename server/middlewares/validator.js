const Joi = require('joi');

exports.signupSchema = Joi.object({
    email: Joi.email()
    .required()
    .messages({
        "string.email":"invalid email",
        "any.required":"email is mandatory"
    }),
    password: Joi.string()
    .min(6).required()
    .messages({
        "any.required":"password is mandatory"
    })
})