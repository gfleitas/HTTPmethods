
const form = document.querySelector('#form');

form.addEventListener('submit', e =>{
    e.preventDefault()
    let user = document.getElementById("user") 
    let pass = document.getElementById("pass")
    let url = 'http://192.168.11.31:3000/status'
})