import { User } from "../models";
import Joi from "@hapi/joi";
import mongoose from "mongoose";
import { UserInputError } from "apollo-server-express";
import { signUp, signIn } from "../objectSchemas";
import { attemptSignIn, signOut } from "../auth";

export default {
  Query: {
    me: async (root, args, context, info) => {
      console.log("Me query", context.req.session);
      return await User.findById(context.req.session.userId);
    },

    users: (root, args, { req }, info) => {
      // req.session.userId
      // console.log(req.session)
      // Auth.checkSignedIn(req);

      return User.find({});
    },

    user: (root, { id }, { req }, info) => {
      // TODO: auth, projection, pagination
      // Auth.checkSignedOut(req);

      if (!mongoose.Types.ObjectId.isValid(id)) {
        throw new UserInputError(`User ID is not valid Object ID`);
      }

      return User.findById(id);
    },

    async getUsers() {
      const users = await User.find({});
      return users;
    },
  },

  Mutation: {
    signUp: async (root, args, { req }, info) => {
      //TODO: not auth
      //Auth.checkSignedOut(req);
      console.log(args);
      // validation --> have to use validateAsync within async function
      const result = await signUp.validateAsync(args);

      const user = await User.create(args);

      req.session.userId = user.id;

      return user;
    },

    signIn: async (root, args, context, info) => {
      await signIn.validateAsync(args);

      const user = await attemptSignIn(args.email, args.password);

      context.req.session.userId = user.id;

      //console.log("check session id", context.req.session.userId);
      return user;
    },

    signOut: (root, args, context, info) => {
      //Auth.checkSignedIn(context.req);
      //console.log("context.req.session", context.req.session);
      return signOut(context.req, context.res);
    },

    //have to be able to update the ACCESS_TOKEN of user after the PlaidLink evnt happens
    updateAccessToken: async (
      root,
      { userId, access_token },
      context,
      info
    ) => {
      // take userId and ACCESS_TOKEN as arguments
      // find by user by userId, update ACCESS_TOKEN, return the updated User object
      if (!mongoose.Types.ObjectId.isValid(userId)) {
        throw new UserInputError(`User ID is not valid Object ID`);
      }
      //const user = await User.findById(userId);
      //user.update({ access_token: access_token }, { upsert: true });
      const user = await User.findOneAndUpdate(
        { _id: userId },
        { access_token: access_token },
        { upsert: true }
      );

      const updatedUser = await User.findById(userId);
      return updatedUser;
    },
  },

  // query for accounts didnt work before this
  User: {
    accounts: async (user, args, context, info) => {
      return (await user.populate("accounts").execPopulate()).accounts;
    },
    services: async (user, args, context, info) => {
      return (await user.populate("services").execPopulate()).services;
    },
  },
};
