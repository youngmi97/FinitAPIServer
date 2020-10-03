import { PlaidItem, PlaidAccount } from "../models";
import { syncTransaction } from "../objectSchemas";
const mongoose = require("mongoose");

export default {
  Mutation: {
    addTransaction: async (root, args, { req }, info) => {
      const { accountId } = args;
      //console.log("userId", userId);
      //console.log("Finding User", User.findOne({ _id: args.userId }));

      await syncTransaction.validateAsync({ accountId });
      const transaction = await PlaidItem.create(args);
      //add the newly created account to the User
      await PlaidAccount.updateOne(
        { accountId: accountId },
        {
          $push: { transactions: transaction },
        }
      );
      return transaction;
    },
  },
};
