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