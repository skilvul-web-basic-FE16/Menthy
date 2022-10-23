fetch('https://6353512ae822bad5278ac951.mockapi.io/users', {
//   headers: {Authentication: 'Bearer Token'}
})
   .then(resp => resp.json())
   .then(json => {
    // console.log(json)

    json.forEach(element => {
        // console.log(element)
        return arrayFetch(element)
    }) 
})

let btn = document.getElementById("btn");


//    validation
function arrayFetch (b){
    return {
        b.name,
        b.email,
        b.password
    }

}

console.log(wrap.name)


btn.addEventListener('click', (e)=>{
    let username = document.getElementById('username').value;
    console.log(username)
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    e.preventDefault();
    console.log(wrap.name)
    if (username == "" ) {
        window.alert("Please enter your username.");
        username.focus();
        return false;
    }

    if (username == wrap.name){
        window.alert("username sudah ada.");
        email.focus();
        return false;
    }

    if (email == "") {
        window.alert("Please enter your email.");
        email.focus();
        return false;
    }

    if (email == wrap.email){
        window.alert("email sudah digunakan.");
        email.focus();
        return false;
    }

    if (password == "") {
        window.alert("Please enter your password.");
        password.focus();
        return false;
    }

    if (password == wrap.password){
        window.alert("Password sudah digunakan.");
        email.focus();
        return false;
    }

})



