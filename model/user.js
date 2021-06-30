const mongoose = require("mongoose")
/*
rules={
	name: [5 < sting < 10]
}
*/
const user_schema = new mongoose.Schema({
	name:{
		type: String,
		require:true,
		min:5,
		max:10
	},
	email:{
		type: String,
		require:true,
		min:5,
		max:10
	},
	password:{
		type: String,
		require:true,
		min:5,
		max:10	
	}
})

module.exports = mongoose.model('User',user_schema)