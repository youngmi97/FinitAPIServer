const Joi = require("@hapi/joi");

//separate out the keys that will be used for multiple Joi objects
const email = Joi.string().email().required().label("Email");
const username = Joi.string()
  .alphanum()
  .min(4)
  .max(30)
  .required()
  .label("Username");

const name = Joi.string().max(254).required().label("Name");
const password = Joi.string()
  .regex(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/)
  .required()
  .label("Password")
  .error((errors) => {
    errors.forEach((err) => {
      err.message =
        "Minimum eight characters, at least one letter and one number";
    });
    return errors;
  });


export const signUp = Joi.object()
  .options({ abortEarly: false })
  .keys({
   email, username, name, password
  });

export const signIn = Joi.object()
  .options({ abortEarly: false })
  .keys({
    email,
    password,
  });