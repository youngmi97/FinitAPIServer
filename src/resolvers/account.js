import { PlaidAccount } from "../models";
import mongoose from "mongoose";

export default {
  Query: {
    accounts: (root, { userId }, { req }, info) => {
      // Returns all accounts under the given userId
      // There is an internal Server Error --> UnhandledPromiseRejectionWarning Needs to be Resolved(?)
      return PlaidAccount.find({ userId: userId });
    },

    getAccount: (root, { userId, accountId }, { req }, info) => {
      // if (mongoose.Types.ObjectId.isValid(userId)) {
      //   throw new UserInputError(`{id} is not valid account ID`);
      // }

      // TODO:
      // Relay Real Access Token
      // AWS Raw Data Store and Visualization
      // GraphQL Accounts Model --> save to DB

      return PlaidAccount.find({ userId: userId, accountId: accountId });
    },
  },

  Mutation: {
    addAccount: async (root, args, { req }, info) => {
      //const result = await signUp.validateAsync(args);
      console.log("Account Create", args);
      const account = await PlaidAccount.create(args);
      return account;
    },

    removeAccount: async (root, { accountId, userId }, { req }, info) => {
      PlaidAccount.deleteOne({ accountId: accountId, userId, userID });

      //have to check that delete query was valid before returning
      return true;
    },
  },
};
