import Joi from 'joi';

const formSchema = Joi.object({
    name: Joi.string().required()
});

export default formSchema;