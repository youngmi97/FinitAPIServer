import { PlaidAccount, PlaidItem, User } from "../models";
import { syncAccount } from "../objectSchemas";
import mongoose from "mongoose";
const Joi = require("@hapi/joi");

export default {
  Mutation: {
    addAccount: async (root, args, { req }, info) => {
      const { userId } = args;
      //console.log("userId", userId);
      //console.log("Finding User", User.findOne({ _id: args.userId }));
      await syncAccount.validateAsync({ userId });
      const account = await PlaidAccount.create(args);

      //add the newly created account to the User
      await User.updateOne(
        { _id: userId },
        {
          $push: { accounts: account },
        }
      );
      return account;
    },

    removeAccount: async (root, { accountId, userId }, { req }, info) => {
      PlaidAccount.deleteOne({ accountId: accountId, userId, userID });
      //have to check that delete query was valid before returning
      return true;
    },
  },
  Account: {
    transactions: (account, args, context, info) => {
      return PlaidItem.find({ accountId: account.accountId });
    },
  },
};
