const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const usersSchema = new Schema({
  // id: {
  //   type: String,
  //   required: true,
  //   unique: true,
  // },
  email: {
    type: String,
    required: true,
  },
  first_name: {
    type: String,
    // required: true,
  },
  last_name: {
    type: String,
    // required: true,
  },
  avatar: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("users", usersSchema);
