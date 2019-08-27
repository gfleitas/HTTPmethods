
const form = document.querySelector('#form');

form.addEventListener('submit', e =>{
    e.preventDefault()
    let user = document.getElementById("user") 
    let pass = document.getElementById("pass")

    
    fetch("http://192.168.11.31:3000/login",
    {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
        body: JSON.stringify({'user' :user, 'pass' :pass})
    })
    .then(function(res){ console.log(res) })
    .catch(function(res){ console.log(res) })
})