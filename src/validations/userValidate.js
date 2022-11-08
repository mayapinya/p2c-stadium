import Joi from 'joi';

const registerSchema = Joi.object({
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  email: Joi.alternatives().try(
    Joi.string()
      .email({ tlds: { allow: ['com', 'net'] } })
      .required()
  ),
  phoneNumber: Joi.string()
    .length(10)
    .pattern(/^[0-9]+$/) // new RegExp('^[0-9]+$')
    .required(),
  password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{6,16}$')).required(),
  confirmPassword: Joi.ref('password')
}).with('password', 'confirmPassword');

const stadiumDetailSchema = Joi.object({
  stadiumName: Joi.string().required(),
  price: Joi.number().required(),
  facility: Joi.string().required(),
  openTime: Joi.string().required(),
  closeTime: Joi.string().required(),
  image: Joi.any().required()
}).unknown();

export const validateRegister = (input) =>
  registerSchema.validate(input, { abortEarly: false });

export const validateStadium = (input) =>
  stadiumDetailSchema.validate(input, { abortEarly: false });
