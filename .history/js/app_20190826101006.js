const form = document.querySelector('#form');

form.addEventListener('submit', e =>{
    e.preventDefault()

    function loginPOST() {
        
    }

    

    function queryGET (){

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
    .then(function(res){
        res.json()
        console.log(res)
    })
    .catch(function(res){ console.log(res) })

    }

})