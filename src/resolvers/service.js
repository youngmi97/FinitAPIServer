import { SubscriptionItem, User } from "../models";
import { syncAccount } from "../objectSchemas";
import mongoose from "mongoose";
const Joi = require("@hapi/joi");

// Mutation TODO
// 1. EditSubscription
// 2. DeleteSubscription

export default {
  Mutation: {
    addSubscription: async (root, args, { req }, info) => {
      const { userId } = args;
      await syncAccount.validateAsync({ userId });
      const service = await SubscriptionItem.create(args);

      // 1. Generate and add lastDate, firstAddedDate and plan
      // 2. Resolver only to be used for Manually Added Subscriptions?
      // 3. Auto-filtered Subscription services should be added from the node-cron job

      //add the newly created account to the User
      await User.updateOne(
        { _id: userId },
        {
          $push: { services: service },
        }
      );
      return service;
    },

    removeSubscription: async (root, { userId, name, plan }, { req }, info) => {
      // !! Have to make sure that name/plan pair for each user is unique
      // Q: Difference between findoneandremove and findoneanddelete --> choose delete unless have good reason not to
      //console.log("Delete Subscription Called");

      User.findById(mongoose.Types.ObjectId(userId), function (err, foundUser) {
        SubscriptionItem.findOneAndDelete({ name: name, plan: plan });
      });
      //have to check that delete query was valid before returning

      return true;
    },

    editSubscription: async (
      root,
      {
        userId,
        name,
        amount,
        lastDate,
        period,
        plan,
        plaidGenerated,
        firstAddedDate,
      },
      { req },
      info
    ) => {
      console.log("edit Subscription called");

      User.findById(mongoose.Types.ObjectId(userId), function (err, foundUser) {
        SubscriptionItem.findOneAndUpdate({
          name: name,
          amount: amount,
          lastDate: lastDate,
          period: period,
          plan: plan,
          plaidGenerated: plaidGenerated,
          firstAddedDate: firstAddedDate,
        });
      });

      return true;
    },
  },
};
