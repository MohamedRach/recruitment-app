require('dotenv').config()
const express = require("express");
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const dbURI = process.env.dbURI;
const Job = require("./models/job");
app.use(
    cors({
      origin: 'http://localhost:5173',
      credentials: true,
    })
  );
mongoose.connect(dbURI)
    .then((result) => {
        console.log("success");
        app.listen(5000);
    })
    .catch((err) => console.log(err));

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get("/dashboard", (req,res) => {
    Job.find()
        .then((result) => {
            res.send(result)
        })
        .catch((err) => {
            connsole.log(err);
        })
    
})
app.post('/jobs/create', (req,res) => {
    const job = new Job(req.body)
    job.save()
        .then(() => console.log("nice"))
        .catch((err) => console.log(err));
})
app.get('/candidates', (req,res) => {
    Job.find({}, {candidates:1})
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            console.log(err);
        })
})
app.post("/candidates/:id", (req, res) => {
    Job.findByIdAndUpdate(req.params.id, {$push: {candidates: req.body}})
        .then((result) => {
            console.log("nice")
        })
        .catch((err) => {
            console.log(err)
        })
})
app.post('/create/:id', (req, res) => {
    //console.log(req.body)
    //console.log(req.params)
    Job.findByIdAndUpdate(req.params.id, {details: req.body})
        .then((result) => {
            console.log(result)
        })
        .catch((err) => {
            console.log(err)
        })
})
app.get('/jobs/:id', (req,res) => {
    Job.findById(req.params.id)
        .then((result) => {
            res.send(result)
        })
        .catch((err) => {
            console.log(err)
        })
})