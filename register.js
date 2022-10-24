let btn = document.getElementById("btn");

btn.addEventListener('click', (e)=>{
    let username = document.getElementById('username').value;
    console.log(username)
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    e.preventDefault();
    // console.log(wrap.name)

    let data = {name : username, password : password,email : email}

    fetch('https://6353512ae822bad5278ac951.mockapi.io/users', {
     method: 'POST',
     body: JSON.stringify(data),
     headers: {
        'Content-Type': 'application/json'
      },
    })
    .then(resp => resp.json())
    .then(json => alert("registrasi sukses"))
    .catch(err => alert("registrasi gagal"))

})








