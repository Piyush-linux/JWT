const router = require("express").Router();

// get page
router.get("/",(req,res)=>{
	res.render("index")
})
// error page
router.get("*",(req,res)=>{
	res.render("not_found")
})

module.exports = router;