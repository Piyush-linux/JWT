const router = require("express").Router();
const jwt = require("../middleware/jwt.js")
const users= require("../model/user.js")

/*
1. jwt verify
2. get usr
3. render data
*/
router.get("/",jwt,async (req,res)=>{
	// req.user is get through JWT_Middleware which decrypt token as it included id of the user while logging_in given by us
	const usr = await users.findOne({_id: req.user._id})
	res.json({
		"profile":{
			"name":usr.name,
			"email":usr.email,
			"Password":usr.password
		}
	})
})

module.exports = router;