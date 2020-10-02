const { model, Schema } = require("mongoose");

module.exports = model(
  "PlaidItem",
  new Schema({
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    accountId: String,
    amount: String,
    category: [String],
    categoryId: String,
    date: String,
    isoCurrencyCode: String,
    name: String,
    paymentChannel: String,
    transactionId: String,
    transactionType: String,
  })
);
