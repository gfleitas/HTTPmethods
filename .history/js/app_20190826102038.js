const form = document.querySelector('#form');

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
                console.log(objUser) 
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