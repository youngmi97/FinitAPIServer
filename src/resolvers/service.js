import { SubscriptionItem, User } from "../models";
import { syncAccount } from "../objectSchemas";
import mongoose from "mongoose";
const Joi = require("@hapi/joi");

export default {
  Mutation: {
    addSubscription: async (root, args, { req }, info) => {
      const { userId } = args;
      await syncAccount.validateAsync({ userId });
      const service = await SubscriptionItem.create(args);

      //add the newly created account to the User
      await User.updateOne(
        { _id: userId },
        {
          $push: { services: service },
        }
      );
      return service;
    },

    removeSubscription: async (root, { userId, name }, { req }, info) => {
      SubscriptionItem.deleteOne({ user: userId, name: name });
      //have to check that delete query was valid before returning
      return true;
    },
  },
};
