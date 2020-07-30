const mongoose = require('mongoose');
import { hash, compare } from 'bcryptjs';

const userSchema = mongoose.Schema(
  {
    email: {
      type: String,
      validate: {
        validator: async email =>
          User.doesntExist({ email }),
        message: ({ value }) => `Email ${value} has already been taken.`, // Need additional layer of security
      },
    },
    username: {
      type: String,
      validate: {
        validator: async username =>
         User.doesntExist({ username }),
        message: ({ value }) => `Username ${value} has already been taken.`, // Need additional layer of security
      },
    },
    name: String,
    password: String,
  },
  {
    timestamps: true,
  }
);


// pre hook --> called before model is saved
// have to use the function callback to prevent global reference
// 'this' will refer to the User that is being handled
userSchema.pre('save', async function (next) {
    if (this.isModified('password')) {
        this.password = await hash(this.password, 10);
}});

// Instance method vs Static Method
// For static method, it has to be called on the actual Object e.g.) User.method
// For Instance method, it can be called on the actual user instance e.g.) user.method
userSchema.statics.doesntExist = async function (options) {
    return await this.where(options).countDocuments() === 0
};


userSchema.methods.matchesPassword = function (password) {
  // use traditional function and not arrow function to have access to "this" keyword
  // import compare method from bcrypt module
  return compare(password, this.password)
}

const User =  mongoose.model("User", userSchema)
export default User
