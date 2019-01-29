const express =  require("express");
const router = express.router();

//job model

const Job = require("../models/mongoose");

//@route get api/jobs
//@desc get all jobs
router.get("/", (req, res) => {
    Job.find()
    .then(jobs => res.json(jobs))
})

router.post("/", (req, res) => {
    const newJob = new Job({
        title: req.body.title,
        employer: req.body.employer,
        link: req.body.link
    });

    newJob.save().then(job => res.json(job));
})

module.exports = router;