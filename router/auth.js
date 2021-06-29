const express = require('express')
const bcrypt = require("bcrypt")
const router = express.Router()
const users = require("../model/user.js")
const {reg_vli, log_vli} = require('../model/validation.js')

// register post
router.post('/register', async (req, res) => {
    // data validation from /model/validaion
    let { error } = reg_vli(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    // check if already exists
    const email_exist = await users.findOne({ email: req.body.email })
    if (email_exist) return res.status(400).send("Email already exists")
    // encode psw / id
    let salt = await bcrypt.genSalt(10);
    let Psw = await bcrypt.hash(req.body.password, salt);
    // data creation
    const usr = new users({
        name: req.body.name,
        email: req.body.email,
        password: Psw
    })
    // pass opr
    try {
        const scc = await usr.save();
        console.log('pass');
        res.send(scc);
    }
    // fail opr
    catch (err) {
        console.log('fail');
        res.send(err);
    }
})


// login post : vli > eml > decode > login
router.post("/login",async(req,res)=>{
     // data validation from /model/validaion
    let { error } = log_vli(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    // emk chk
    const usr = await users.findOne({ email: req.body.email }) // return true if avaibale 
    if (!usr) return res.status(400).send("Email or password doent exist") // turn false to continue
    // decode
    const psw_chk = bcrypt.compare(req.body.password,usr.password);
    if(!psw_chk) return res.status(400).send("wrong eml or password")
    // login
    res.send("Logged in !")
})

module.exports = router;