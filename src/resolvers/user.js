import { User } from '../models';
import mongoose from 'mongoose';
import { UserInputError } from 'apollo-server-express';

export default {
    Query: {
        users: (root, args, context, info) => {
            return User.find({})
        },

        user: (root, { id }, context, info) => {
            // TODO: auth, projection, pagination
            if (mongoose.Types.ObjectId.isValid(id)) {
                throw new UserInputError(`{id} is not valid user ID`)
            }

            return User.findById(id)
        }
    },

    Mutation: {
        signUp: (root, args, context, info) => {
            //TODO: not auth

            // validation

            return User.create(args)
        }
    }

}