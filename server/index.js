require('dotenv').config()
const express = require("express");
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const dbURI = process.env.dbURI;
const userRoutes = require("./routes/userRoutes")
const jobRoutes = require("./routes/jobRoutes")
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

app.use(express.json({limit: '25mb'}));
app.use(express.urlencoded({extended: true, limit:'25mb'}));

app.use(userRoutes);
app.use(jobRoutes)