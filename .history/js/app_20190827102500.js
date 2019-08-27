const form = document.querySelector('#form');
const form2 = document.querySelector('#form2');

form.addEventListener('submit', e =>{
    e.preventDefault();
    loginPOST();

    function loginPOST() {
        
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
                bodyPOST();
                msjLogin.innerHTML = `Bienvenido ${objUser.user} <br><br>`
                console.log(objUser) 
            }).catch(function(res){ 
                msjLogin.innerHTML = "Error. Usuario o Constraseña incorrectos."
                console.log(res) })
        })
        .catch(function(res){ 
            console.log(res) })
    }

    function bodyPOST() {
        form2.style.display = "inline";

        form2.addEventListener('submit', e =>{
            e.preventDefault()


            let name = document.getElementById("name").value
            let surname = document.getElementById("surname").value
            let token = localStorage.getItem("token")

            fetch("http://192.168.11.31:3000/test/body",
            {
                method: "POST",
                body : JSON.stringify({"name" : name, "surname" : surname}),
                headers: {
                    'Accept': 'Application/json',
                    'Content-Type': 'Application/json',
                    'Authorization' : token
                }
            })
            .then(function(res){
                res.json()
                .then((res) => {
                    msjPost.innerHTML = `${res.message} Status:${res.status}`
                    console.log(res)
                }).catch(function(res){ msjPost console.log(res) })
            })
            .catch(function(res){ console.log(res) })
        })       
    }
})

function queryGET (){

    let name = document.getElementById("name").value
    let surname = document.getElementById("surname").value
    let token = localStorage.getItem("token");

    fetch(`http://192.168.11.31:3000/test/query?name=${name}&surname=${surname}`,
    {
        method: "GET",
        headers: {
            'Accept': 'Application/json',
            'Authorization' : token,
            'Content-Type': 'Application/json'
        }
    })
    .then(function(res){
    res.json()
        .then((res) => {
            msjQuery.innerHTML = `${res.message} Status:${res.status}`
            console.log(res)
        })
    })
    .catch(function(res){ console.log(res) })
}


function paramGET() {

    let name = document.getElementById("name").value
    let surname = document.getElementById("surname").value
    let token = localStorage.getItem("token")

    fetch(`http://192.168.11.31:3000/test/params/${name}/${surname}`,
    {
        method: "GET",
        headers: {
            'Accept': 'Application/json',
            'Authorization' : token,
            'Content-Type': 'Application/json'
        }
    })
    .then(function(res){
        res.json()
        .then((res) => {
            msjParam.innerHTML = `${res.message} Status:${res.status}`
            console.log(res)
        })
    })
    .catch(function(res){
         console.log(res) })
    
}