const { Schema, model } = require("mongoose");
const validateEmail = require("../utils/emailFormat");

const UserSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      validate: [
        validateEmail,
        "Please make sure your email address is formatted correctly.",
      ],
      match: [
        /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/,
        "Please make sure your email address is formatted correctly.",
      ],
    },
