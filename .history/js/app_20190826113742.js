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
                bodyPOST();
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

    

    function bodyPOST() {
        const form2 = document.querySelector('#form2');

        let token = localStorage.getItem("token")

        form2.innerHtml=`
        <input class="mt-1 ml-1" type="text" name="name" id="name" placeholder="Name">
        <br>
        <br>
        <input class="ml-1" type="text" name="surname" id="surname" placeholder="Surname">
        <br>
        <br>
        <button type="submit" class="btn btn-primary ml-1">second endpoint</button>
        `

        let objBody = JSON.stringify({"name" : "Gabriel", "surname" : "Fleitas"})

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
            })
        })
        .catch(function(res){ console.log(res) })
        
    }

})