const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser")

const app = express();
//body parser middleware
app.use(bodyParser.json());

//db config
const mLab = process.env.mongoURI

// connect to mongo
mongoose
  .connect(mLab)
  .then(() => console.log("mLab Connected"))
  .catch(err => console.log(err));

  const port = process.env.PORT || 5000;

  app.listen(port, () => console.log(`lisenting on port ${port}`));

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

module.exports = DB = mongoose.model("lfj", lfjSchema);