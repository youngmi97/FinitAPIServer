import { User } from '../models';
import Joi from "@hapi/joi";
import mongoose from 'mongoose';
import { UserInputError } from 'apollo-server-express';
import { signUp, signIn } from '../objectSchemas';
import * as Auth from '../auth';

export default {
  Query: {

    me: (root, args, context, info) => {
        Auth.checkSignedIn(context.req)

        return User.findById(context.req.session.userId)
    },

    users: (root, args, { req }, info) => {
      // req.session.userId
      // console.log(req.session)
      Auth.checkSignedIn(req);

      return User.find({});
    },

    user: (root, { id }, { req }, info) => {
      // TODO: auth, projection, pagination

      Auth.checkSignedOut(req);

      if (mongoose.Types.ObjectId.isValid(id)) {
        throw new UserInputError(`{id} is not valid user ID`);
      }

      return User.findById(id);
    },
  },

  Mutation: {

    signUp: async (root, args, { req }, info) => {
      //TODO: not auth
      Auth.checkSignedOut(req);
      console.log(args);
      // validation --> have to use validateAsync within async function
      const result = await signUp.validateAsync(args);

      const user = await User.create(args);

      req.session.userId = user.id;

      return user;
    },

    signIn: async (root, args, context, info) => {
        const { userId } = context.req.session;

        if (userId) {
            return User.findById(userId);
        }

        await signIn.validateAsync(args);

        const user = await Auth.attemptSignIn(args.mail, args.password);

        context.req.session.userId = user.id;
        return user;
    },

    signOut: (root, args, context, info) => {
        Auth.checkSignedIn(context.req);

        return Auth.signOut(context.req, context.res);
    }
  },
};