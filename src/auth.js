// User session authentication helper functions

import { AuthenticationError } from "apollo-server-express";
import { User, PlaidAccount } from "./models";
const mongoose = require("mongoose");

const dotenv = require("dotenv").config({
  path: require("find-config")(".env"),
});

export const attemptSignIn = async (email, password) => {
  //console.log("email", email)
  const user = await User.findOne({ email });

  if (!user) {
    throw new AuthenticationError("Incorrect Email!");
  }

  if (!(await user.matchesPassword(password))) {
    throw new AuthenticationError("Incorrect Password!");
  }

  return user;
};

const signedIn = (req) => req.session.userId;

export const checkSignedIn = (req) => {
  if (!signedIn(req)) {
    throw new AuthenticationError("You must be signed in");
  }
};

export const checkSignedOut = (req) => {
  if (signedIn(req)) {
    throw new AuthenticationError("You must be signed in");
  }
};

export const signOut = (req, res) =>
  new Promise((resolve, reject) => {
    req.session.destroy((err) => {
      if (err) reject(err);

      res.clearCookie(process.env.SESS_NAME);

      resolve(true);
    });
  });

export const checkAccountLinked = async (req) => {
  // check for accounts associated with the userId
  console.log("checkAccountLinked", req.session.userId);
  //console.log(req.session.userId);
  // check all keys for json object
  var keys = [];
  for (var k in req) keys.push(k);

  console.log("keys", keys);
  console.log("params", req.params);
  console.log("body", req.body);
  console.log("session", req.session);

  // session userId is different from the user id
  const accounts = await PlaidAccount.findOne({
    userId: mongoose.Types.ObjectId(req.session.userId),
  });
  // accounts should be a list
  // the accounts list should be length of 0 when it doesnt have any accounts
  if (!accounts || accounts.length == 0) {
    // check account has already been linked
    throw new AuthenticationError("Bank Account Not Linked");
  }
};
