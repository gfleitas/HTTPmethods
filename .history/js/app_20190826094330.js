const form = document.querySelector('#form');

form.addEventListener('submit', firstPOST =>{
    firstPOST.preventDefault()
    let user = document.getElementById("user").value
    let pass = document.getElementById("pass").value

    let objUser = JSON.stringify({"user" :user, "password" :pass});

    fetch("http://192.168.11.31:3000/login",
    {
        method: "POST",
        body: objUser,
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'Application/json'
          }
    })
    .then(function(res){ 
        res.json()
        .then(function(objUser){
            console.log(objUser) 
            firstGET()
        })
    })
    .catch(function(res){ console.log(res) })

    const firstGET{
        
    }

})