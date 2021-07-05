const router = require("express").Router();

// get page
router.get("/",(req,res)=>{
	res.render("index")
})
// get page
router.get("/profile",(req,res)=>{
	res.render("profile")
})
// error page
router.get("*",(req,res)=>{
	res.render("not_found")
})

module.exports = router;