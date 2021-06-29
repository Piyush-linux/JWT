// require
const dotenv = require('dotenv')
const bodyParser = require('body-parser')
const express = require('express')
const app = express()
const mongoose = require("mongoose")
const auth = require("./router/auth.js");
dotenv.config()

// conect to DB
mongoose.connect(process.env.DB,{ useNewUrlParser: true, useUnifiedTopology: true },()=>{
	console.log('connected')
})
// mid: get data when post
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// mid: router's
app.use('/api/user',auth);


// Server running
app.listen(3000,()=>{
	console.log('http://localhost:3000/')
})


