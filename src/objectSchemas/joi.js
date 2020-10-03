const Joi = require("@hapi/joi");
import mongoose from "mongoose";

// creating joi custom validators

/*const objectId = {
  name: "string",
  base: Joi.string(),
  language: {
    objectId: "Must be a valid object id",
  },
  rules: [
    {
      name: "objectId",
      validate(params, value, state, options) {
        if (mongoose.Types.ObjectId.isValid(value)) {
          //second argument is context
          return this.createError("string.objectId", {}, state, options);
        }
        return value;
      },
    },
  ],
}; */

//export default Joi.extend(objectId);
