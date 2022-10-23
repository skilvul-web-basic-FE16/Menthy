let form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  console.log(email);

  fetch("https://6353512ae822bad5278ac951.mockapi.io/users")
    .then((resp) => resp.json())
    .then((json) => json_validation(json));

  function json_validation(data) {
    console.log(data);
    let emailValid = data.find((element) => {
      return element.email == email;
    });

    let passwordValid = data.find((element) => {
      return element.password == password;
    });

    if (!emailValid && !passwordValid) {
      return alert("email dan password salah");
    }
    localStorage.setItem("isLogin", "true");

    window.location.href = "index.html";
  }
});
