// require
const dotenv = require('dotenv')
const bodyParser = require('body-parser')
const express = require('express')
const app = express()
const mongoose = require("mongoose")
const auth = require("./router/auth.js");
const profile = require("./router/profile.js");
const root = require("./router/gets.js")
const PORT = process.env.PORT || 3000
dotenv.config()

// conect to DB
mongoose.connect(process.env.DB,{ useNewUrlParser: true, useUnifiedTopology: true },()=>{
	console.log('connected')
})
// mid: get data when post
app.set('view engine', 'pug')
app.use(express.static("public"))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// mid: router's
// app.get("/",(req,res)=>{
// 	res.render("index")
// })
app.use('/',root);
app.use('/user',auth);
app.use('/profile',profile);


// Server running
app.listen(process.env.PORT || 3000,()=>{
	console.log('running...')
})


