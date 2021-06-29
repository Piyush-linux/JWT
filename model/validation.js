const rules = require('@hapi/joi')
// val = data => rules.validate( data )

// register validation
const reg_vli=(usr)=>{
	const schema = rules.object({
		name: rules.string().min(6).max(10).required(),
		email: rules.string().min(6).max(20).required().email(),
		password: rules.string().min(6).max(10).required()
	})
	return schema.validate(usr)
}
// login validation
const log_vli=(usr)=>{
	const schema = rules.object({
		email: rules.string().min(6).required().email(),
		password: rules.string().min(6).required()
	})
	return schema.validate(usr)
}

module.exports = {reg_vli , log_vli}; 
