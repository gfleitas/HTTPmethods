const form = document.querySelector('#form');
const form2 = document.querySelector('#form2');
const cualquiera = document.querySelector('#cualquiera')


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
                cualquiera.innerHTML = "successfull"
            })
        })
        .catch(function(res){ console.log(res) })
    }

    queryGET();

    function queryGET (){

        let token = localStorage.getItem("token")

        fetch("http://192.168.11.31:3000/test/query?name=Gabriel&surname=Fleitas",
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
                console.log(res)
            })
        })
        .catch(function(res){ console.log(res) })
    }

    paramGET();

    function paramGET() {
        let token = localStorage.getItem("token")

        fetch("http://192.168.11.31:3000/test/params/Gabriel/Fleitas",
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
                console.log(res)
            })
        })
        .catch(function(res){ console.log(res) })
        
    }
})

const prueba = () =>
    form2.addEventListener('submit', e =>{
        e.preventDefault();
        bodyPOST()

        function bodyPOST(token) {

        let name = document.getElementById("name").value
        let surname = document.getElementById("surname").value

        let objBody = JSON.stringify({"name" : name, "surname" : surname})

        fetch("http://192.168.11.31:3000/test/body",
        {
            method: "POST",
            body : objBody,
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'Application/json',
                'Authorization' : token
            }
        })
        .then(function(res){
            res.json()
            .then((res) => {
                console.log(res)
                console.log('todo piola')
            })
        })
        .catch(function(res){ console.log(res) })
    }
    })
