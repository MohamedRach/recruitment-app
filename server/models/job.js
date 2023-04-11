const mongoose = require('mongoose');
const schema = mongoose.Schema;
const candidatesSchema = new schema({
    firstName: {
        type: String,
        required: true
    },
    lastName:{
        type: String,
        required: true
    },
    jobRole:{
        type: String,
        required: true
    },
    department: {
        type: String,
        required: true
    },
    adresse: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    resume: {
        type: String
    }
})
const detailsSchema = new schema({
    overview: {
        type: String,
        required: true
    },
    AboutTheRole:{
        type: String,
        required: true
    },
    WhatYouWillDo:{
        type: String,
        required: true
    },
    WhoYouAre: {
        type: String,
        required: true
    },
    
})
const jobSchema = new schema({
    user_id:{
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    department: {
        type: String,
        required: true
    },
    date:{
        type: Date,
        required: true
    },
    status:{
        type:String,
        required:true
    },
    link:{
        type: String,
        default: null
    },
    candidates:{
        type: [candidatesSchema],
        default: null
    },
    details:{
        type: detailsSchema,
        default: null
    }
}, {timestamps: true});

const Job = mongoose.model('Job', jobSchema);

module.exports = Job;