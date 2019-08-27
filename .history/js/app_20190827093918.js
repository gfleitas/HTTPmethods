const form = document.querySelector('#form');
const form2 = document.querySelector('#form2');
const form3 = document.querySelector('#form3');
const form4 = document.querySelector('#form4');


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
                    queryGET();
                    paramGET();
                    console.log(res)
                })
            })
            .catch(function(res){ console.log(res) })
        })       
    }

    function queryGET (){

        form3.addEventListener('submin', e =>{
        e.preventDefault();
        
        let token = localStorage.getItem("token");

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
    })}

    function paramGET() {
        form4.style.display = "inline";

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