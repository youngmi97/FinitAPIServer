const Joi = require("@hapi/joi");
import mongoose from "mongoose";

// validate that
// 1. userId is an existing + valid user id
// 2. Name of the account does not overlap

// Maybe have to check that userId field is exactly a specific value

const checkId = (value, helpers) => {
  if (!mongoose.Types.ObjectId.isValid(value)) {
    //second argument is context
    return new Error("Invalid Id");
  }
  return value;
};

export const syncAccount = Joi.object()
  .options({ abortEarly: false })
  .keys({
    userId: Joi.string().custom(checkId, "checking if userId is valid"),
  });

export const syncTransaction = Joi.object()
  .options({ abortEarly: false })
  .keys({
    accountId: Joi.string().custom(checkId, "checking if accountId is valid"),
  });
