
const form = document.querySelector('#form');

form.addEventListener('submit', e =>{
    e.preventDefault()
    let user = document.getElementById("user").value
    let pass = document.getElementById("pass").value
    console.log(user)
    console.log(pass)

    
    fetch("http://192.168.11.31:3000/login",
    {
        method: "POST",
        body: JSON.stringify({"user" :user, 'pass' :pass}),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json; charset=utf-8'
          }
    })
    .then(function(res){ console.log(res) })
    .catch(function(res){ console.log(res) })
})