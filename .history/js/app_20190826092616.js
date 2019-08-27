const form = document.querySelector('#form');

form.addEventListener('submit', e =>{
    e.preventDefault()
    let user = document.getElementById("user").value
    let pass = document.getElementById("pass").value

    fetch("http://192.168.11.31:3000/login",
    {
        method: "POST",
        body: JSON.stringify({"user" :user, "password" :pass}),
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'Application/json'
          }
    })
    .then(function(res){ 
        res.json
        console.log(res) })
    .catch(function(res){ console.log(res) })
})