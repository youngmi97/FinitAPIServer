import mongoose, { Schema } from "mongoose";

const { ObjectId } = Schema.Types;

const plaidItemSchema = mongoose.Schema(
  {
    accountId: String,
    amount: String,
    category: [String],
    categoryId: String,
    date: String,
    isoCurrencyCode: String,
    name: String,
    paymentChannel: String,
    transactionType: String,
  },
  {
    timestamps: true,
  }
);

const PlaidItem = mongoose.model("PlaidItem", plaidItemSchema);
export default PlaidItem;
