const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser")

const jobs = require("../api/jobs")

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

// use routes

app.use("/api/jobs", jobs)

  const port = process.env.PORT || 5000;

  app.listen(port, () => console.log(`lisenting on port ${port}`));