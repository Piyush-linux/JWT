const router = require("express").Router();

router.get("/",(req,res)=>{
	res.render("index")
})

router.get("*",(req,res)=>{
	res.render("not_found")
})

module.exports = router;