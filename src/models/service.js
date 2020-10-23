import mongoose, { Schema } from "mongoose";

const { ObjectId } = Schema.Types;

const userSubscriptionServiceItem = mongoose.Schema(
  {
    user: {
      type: ObjectId,
      ref: "User",
    },
    transaction: {
      type: ObjectId,
      ref: "PlaidItem",
    },
    name: String,
    amount: String,
    lastDate: String,
    category: [String],
    period: String,
    isoCurrencyCode: String,
    plan: String,
    transactionType: String,
    plaidGenerated: Boolean,
    firstAddedDate: String,
  },
  {
    timestamps: true,
  }
);

const SubscriptionItem = mongoose.model(
  "SubscriptionItem",
  userSubscriptionServiceItem
);
export default SubscriptionItem;
