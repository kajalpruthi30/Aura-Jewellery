import mongoose from "mongoose";
import { type } from "os";

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    birthDate: {
      day: {
        type: Number,
        required: true,
      },
      month: {
        type: Number,
        required: true,
      },
      year: {
        type: Number,
        required: true,
      },
    },
    address: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "addresses", //put the same for the table.
      },
    ],
    paymentInformation: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "payment_informaton",
      },
    ],
    ratings: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "ratings",
      },
    ],
    reviews: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "reviews",
      },
    ],
    createdAt: {
      type: Date,
      default: Date.now(),
    },
  },
  { timestamps: true }
);

const User = mongoose.model("Users", userSchema);

export default User;
