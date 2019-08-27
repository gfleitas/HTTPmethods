const form = document.querySelector('#form');

form.addEventListener('submit', loginPOST =>{
    loginPOST.preventDefault()
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
            localStorage.setItem("token", objUser.token)
            console.log(objUser) 
            queryGET()
        })
    })
    .catch(function(res){ console.log(res) })

    const queryGET = () =>{

        let token = localStorage.getItem("token")

        fetch("http://192.168.11.31:3000/test/query?name=Gabriel&surname=Fleitas",
    {
        method: "GET",
        body: objUser,
        headers: {
            'Accept': 'Application/json',
            'Authorization' : token,
            'Content-Type': 'Application/json'
          }
    })
    .then

    }

})