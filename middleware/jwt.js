const jwt = require("jsonwebtoken");
/*
1. chk token avalable > verify > dcrpt usrID > req.usr
*/
let verify = (req,res,next)=>{
	// chk token avaibale
	const token = req.header('auth-token')
	if(!token) return res.status(400).send("Access Denied")
	// T: verify token
	try{
		// verifed token
		// get user id fromtoken and insert into req.user 
		const verified = jwt.verify(token, process.env.TOKEN)
		req.user = verified
		next()
	}catch(err){
		res.status(400).send("Invalid token")
	}

}

module.exports = verify;