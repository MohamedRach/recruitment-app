const Job = require("../models/job")

const dashboard = (req,res) => {
    const user_id = req.user.id
    Job.find({user_id})
        .then((result) => {
            res.send(result)
        })
        .catch((err) => {
            console.log(err);
        })
    
}

const createJob = (req,res) => {
    const user_id = req.user.id
    console.log(user_id)
    req.body.user_id = user_id
    console.log(req.body)
    const job = new Job(req.body)
    job.save()
        .then(() => console.log("nice"))
        .catch((err) => console.log(err));
}

const deleteJob = (req,res) => {
    Job.deleteOne({_id:req.params.id})
        .then(() => console.log("success"))
        .catch((err) => console.log(err))
}

const getJob = (req,res) => {
    Job.findById(req.params.id)
        .then((result) => {
            res.send(result)
        })
        .catch((err) => {
            console.log(err)
        })
}

const getCandidates = (req,res) => {
    Job.find({}, {candidates:1})
        .then((result) => {
            res.send(result)
        })
        .catch((err) => {
            console.log(err);
        })
}

const createCandidate = (req, res) => {
    Job.findByIdAndUpdate(req.params.id, {$push: {candidates: req.body}})
        .then((result) => {
            console.log("nice")
        })
        .catch((err) => {
            console.log(err)
        })
}

const updateCandidate = (req,res) => {
    Job.updateOne({_id : req.params.jobId}, {$set: {"candidates.$[c]": req.body}},
                                            {arrayFilters: [{"c._id" : req.params.candidateId}]})
        .then((result) => {
            console.log("nice")
        })
        .catch((err) => {
            console.log(err);
        })
}

const deleteCandidate = (req,res) => {
    Job.updateOne({_id : req.params.jobId}, {$pull:{"candidates": {"_id": req.params.candidateId}}})
        .then((result) => {
            console.log("nice")
        })
        .catch((err) => {
            console.log(err);
        })
}

const createDetails = (req, res) => {
    //console.log(req.body)
    //console.log(req.params)
    Job.findByIdAndUpdate(req.params.id, {details: req.body})
        .then((result) => {
            console.log(result)
        })
        .catch((err) => {
            console.log(err)
        })
}

module.exports = {
    dashboard,
    createJob,
    deleteJob,
    getJob,
    createCandidate,
    getCandidates,
    updateCandidate,
    deleteCandidate,
    createDetails
}