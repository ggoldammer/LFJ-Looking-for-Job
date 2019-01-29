const mongoose = require("mongoose");

//schema
const Schema = mongoose.Schema;

//create schema
const lfjSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  employer: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true
  }
});

module.exports = jobs = mongoose.model("lfj", lfjSchema);