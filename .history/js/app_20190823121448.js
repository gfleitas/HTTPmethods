
const form = document.querySelector('#form');

form.addEventListener('submit', e =>{
    e.preventDefault()
    let user = document.getElementById("user") 
    let pass = document.getElementById("pass")
    let url = 'http://192.168.11.31:3000'

    fetch("/echo/json/",
    {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: "POST",
    body: JSON.stringify({a: 1, b: 2})
    })
.then(function(res){ console.log(res) })
.catch(function(res){ console.log(res) })
})