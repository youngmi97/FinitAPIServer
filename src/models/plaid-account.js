const { model, Schema } = require("mongoose");

module.exports = model(
  "PlaidAccount",
  new Schema({
    plaidItemId: {
      type: String,
      required: true,
    },
    accountId: {
      type: String,
      required: true,
    },
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    mask: String,
    balances: String,
    name: {
      type: String,
      required: true,
    },
    officialName: {
      type: String,
    },
    subtype: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
  })
);
