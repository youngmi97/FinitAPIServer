import mongoose from "mongoose";
const cron = require("node-cron");
import { User, PlaidItem, PlaidAccount, SubscriptionItem } from "./models";

// 1. Fix Reload and Client Cookie Persistence on Re-route
// 2. Add a reload prompt on the Main page
// 3. Edit and Delete Subscription Services Mutation

const serviceList = ["Spotify", "Netflix", "Notion", ""];

// Methods to Reference
// unshift(), findIndex(condition)

// Could apply changeStream on other Collections too (e.g. plaiditems, subscriptionitems)
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

function monitorTransactionUpdate() {
  const client = mongoose.connection.client;
  const db = client.db("test");
  const collection = db.collection("plaiditems");
  const changeStream = collection.watch();
  changeStream.on("change", (changeEvent) => {
    // Make the ServiceList Update here
    console.log("Change happened");
    console.log("changeEvent", changeEvent);
    console.log("operationType", changeEvent.operationType);
  });
}

// The following is called for each userId
function addServiceDirect(userId, transactionList) {
  transactionList.forEach(async function (transaction) {
    // 1. Filter Subscription Services
    // More comprehensive filter should be placed inside the if statement !
    if (serviceList.includes(transaction.name)) {
      console.log("userId", userId);
      console.log(transaction.name);

      // 2. Find Existing Service from corresponding userId
      User.findById(mongoose.Types.ObjectId(userId), function (err, foundUser) {
        // Get the companies whose founders are in that set.
        console.log("user", foundUser);

        SubscriptionItem.findOne({ name: transaction.name }, function (
          err,
          existingService
        ) {
          console.log(existingService);
          if (existingService) {
            // 3. If not null, record of the service exists for the user == UPDATE
            // docs --> object of the instance
            console.log("service exists");
          } else {
            // 4. Renew the record / Create one if null == CREATE
            console.log("new service");
          }
        });
      });

      // const existingSub = await SubscriptionItem.findOne({
      //   user: ObjectId(userId),
      //   name: transaction.name,
      // });
      // console.log("existing sub", existingSub);

      // const service = await SubscriptionItem.create({
      //   user : userId,
      //   transaction : transaction._id,
      //   name : transaction.name,
      //   amount : transaction.amount,
      //   lastDate : transaction.date,
      //   category : transaction.category,
      //   period : "toBeDetermined",
      //   isoCurrencyCode: transaction.isoCurrencyCode,
      //   plan : "toBeDetermined",
      //   transactionType : transaction.transactionType,
      //   plaidGenerated: true,
      //   firstAddedDate : "toBeDetermined",
      //   createdAt: new Date().toISOString(),
      // });

      // await User.updateOne(
      //   { _id: userId },
      //   {
      //     $push: { services: service },
      //   }
      // );
    }
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
  var tmpTransactionMap = {};

  cron.schedule("*/10 * * * * *", async function () {
    var transactionMap = {};

    await User.find({}, function (err, users) {
      users.forEach(function (user) {
        transactionMap[user._id] = [];
        const accountList = user.accounts;
        if (accountList && accountList.length !== 0) {
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
                    //
                    // Have access to:
                    // - Transaction Information
                    // - Corresponding User
                    // - Corresponding Account

                    // console.log("transaction belongs to", user._id);
                    transactionMap[user._id].push(item[0]);
                    //console.log("Transaction Name", item[0].name);
                  });
                  // Temporarily save the fetched transaction records
                  tmpTransactionMap = transactionMap;
                });
              }
            });
          });
        }
      });
    });

    //Extraction function Here!!
    console.log(Object.keys(tmpTransactionMap));

    Object.keys(tmpTransactionMap).forEach(function (key) {
      addServiceDirect(key, tmpTransactionMap[key]);
    });
  });

  // Q: Conduct this with concurrency ?
  // Q: Switch this logic to data streaming ?
}

module.exports = { monitorUserChange, regularSubscriptionExtract };
