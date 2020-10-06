import mongoose, { Schema } from "mongoose";

const { ObjectId } = Schema.Types;

const plaidAccountSchema = new Schema(
  {
    accountId: String,
    plaidId: String,
    user: {
      type: ObjectId,
      ref: "User",
    },
    transactions: [
      {
        type: ObjectId,
        ref: "Transaction",
      },
    ],
    name: String,
    officialName: String,
    balance: String,
    type: String,
  },
  {
    timestamps: true,
  }
);

const PlaidAccount = mongoose.model("PlaidAccount", plaidAccountSchema);
export default PlaidAccount;
