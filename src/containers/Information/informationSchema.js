import Joi from 'joi';

const schema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().regex(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/).required(),
    address: Joi.string().required(),
    apartment: Joi.string().allow(''),
    city: Joi.string().required(),
    country: Joi.string().required(),
    state: Joi.string().required(),
    postalCode: Joi.number().required(),
    phone: Joi.number().required()
});

export default schema;