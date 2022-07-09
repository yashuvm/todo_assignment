const mongoose = require("mongoose");

const todoSchema = mongoose.Schema({
  studentName: { type: String, trim: true, required: true, maxLength: 50 },
  studentAddress: { type: String, trim: true, required: true, maxLength: 200 },
  studentMobile: { type: String, trim: true, required: true, maxLength: 13 },
});

module.exports = mongoose.model("todos", todoSchema);
