import { PlaidItem } from "../models";
const mongoose = require("mongoose");

export default {
  Query: {
    transactions: (root, { userId, accountId }, { req }, info) => {
      // Returns all accounts under the given userId
      // There is an internal Server Error --> UnhandledPromiseRejectionWarning Needs to be Resolved(?)
      return PlaidItem.find({ userId: userId, accountId: accountId });
    },

    getTransaction: (root, { transactionId }, { req }, info) => {
      return PlaidAccount.find({
        transactionId: transactionId,
      });
    },
  },

  Mutation: {
    addTransaction: async (root, args, { req }, info) => {
      //const result = await signUp.validateAsync(args);
      args.userId = mongoose.Types.ObjectId(args.userId);
      const account = await PlaidItem.create(args);
      return account;
    },
  },
};
