const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const authtokensSchema = mongoose.Schema({
  email: { type: String, trim: true, required: true, maxLength: 100 },
  password: { type: String, trim: true, required: true, maxLength: 200 },
  tokens: [{ token: { type: String } }],
});

module.exports = mongoose.model("authtokens", authtokensSchema);
