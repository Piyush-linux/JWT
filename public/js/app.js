/*
tar reg & log
when btn.clk() 
	replace register with login 
	replace wap btn too
using diplay style property
*/
let register = document.querySelector('#register')
let login = document.querySelector('#login')
let log_btn = document.querySelector("#log_btn")
let reg_btn = document.querySelector("#reg_btn")
console.log(register)

log_btn.onclick=()=>{
	register.style.display = 'none';
	login.style.display = 'block'
	log_btn.style.display = 'none'
	reg_btn.style.display = 'block';
}
reg_btn.onclick=()=>{
	register.style.display = 'block';
	login.style.display = 'none'
	log_btn.style.display = 'block'
	reg_btn.style.display = 'none';
}