import mongoose from "mongoose";
const cron = require("node-cron");
import { User, PlaidItem, PlaidAccount } from "./models";

function monitorUserChange() {
  const client = mongoose.connection.client;
  const db = client.db("test");
  const collection = db.collection("users");
  const changeStream = collection.watch();
  changeStream.on("change", (changeEvent) => {
    console.log("Change happened");
    console.log("changeEvent", changeEvent);
    console.log("operationType", changeEvent.operationType);
  });
}

//function filterSubscription(transactionInfoObjectList) {}

// Regularly update Service List for Each users --> AWS Kinesis Migration Later Stage

// NOTE: Updating service list has to happen for every (1) Login , (2) Reload Page Event

function regularSubscriptionExtract() {
  const client = mongoose.connection.client;
  const db = client.db("test");
  const collection = db.collection("users");
  // 1. Take the transactions corresponding to each user
  // 2. Filter subscription services from transaction list
  // 3. Add Subscription Collection to corresponding user

  cron.schedule("*/10 * * * * *", async function () {
    //console.log("cron transactions", collection);
    //const users = User.find({});
    var transactionMap = {};

    await User.find({}, function (err, users) {
      users.forEach(function (user) {
        transactionMap[user._id] = [];
        const accountList = user.accounts;
        if (accountList && accountList.length !== 0) {
          //console.log("user email", user.email);

          accountList.forEach(async function (accountId) {
            await PlaidAccount.find({ _id: accountId }, function (
              err,
              account
            ) {
              if (
                typeof account[0] === "object" &&
                account[0].transactions &&
                account[0].transactions.length !== 0
              ) {
                account[0].transactions.forEach(async function (transactionId) {
                  await PlaidItem.find({ _id: transactionId }, function (
                    err,
                    item
                  ) {
                    // Have access to:
                    // Transaction Information
                    // Corresponding User
                    // Corresponding Account
                    // console.log("transaction belongs to", user._id);
                    transactionMap[user._id].push(item[0]);
                    //console.log("Transaction Name", item[0].name);
                  });
                  console.log("transactionMap", transactionMap);
                  // Service Filtering Algorithm Goes HERE!
                  //
                });
              }
            });
          });
        }
      });
    });

    //Extraction function Here
  });

  // Q: Conduct this with concurrency ?
  // Q: Switch this logic to data streaming ?
}

module.exports = { monitorUserChange, regularSubscriptionExtract };
