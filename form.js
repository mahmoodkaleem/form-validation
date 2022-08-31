const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2")
const form = document.getElementById("form");
const btn = document.getElementById("button")

btn.addEventListener("click", (e) => {
  e.preventDefault();
  checkInputs()
});

function checkInputs() {
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const password2Value = password2.value.trim()

  //validation of username:
  if (usernameValue === "") {
    setErrorFor(username, "*Username can not be blank")
  } else if (usernameValue.length < 3 || usernameValue.length > 20) {
    setErrorFor(username, "*Username should be between 3 to 5 characters")
  }
  else {
    setSuccessFor(username)
  }

  //validation of email:
  if (emailValue === "") {
    setErrorFor(email, "*Email can not be blank")
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, "*Email Id is not valid")
  } else {
    setSuccessFor(email)
  }


  //validation of password:
  if (passwordValue === "") {
    setErrorFor(password, "*Password can not be blank")
  } else if (passwordValue.match(' ')) {
    setErrorFor(password, "*password should not have space")
  }
  else if (passwordValue.length < 5 || passwordValue.length > 16) {
    setErrorFor(password, "*password should be between 5 to 16 character")
  } else if (!passwordValue.match(/[0-9]/) || !passwordValue.match(/[a-z]/) || !passwordValue.match(/[A-Z]/) || !passwordValue.match(/[!\@\#\$\_]/)) {
    setErrorFor(password, "*Password should have atleast 1 lowecase, 1 Uppercase, 1 Number and one Special character [@, $, _, #]")
  } else {
    setSuccessFor(password)
  }


  //validation of confirm password:
  if (password2Value != passwordValue  ||  password2Value==="") {
    setErrorFor(password2, "*Password mismatch")
  } else {
    setSuccessFor(password2)
  }
}


//setErrorFor function:
function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");
  formControl.className = "form-control error";
  small.innerHTML = message
}


//setSuccessFor function:
function setSuccessFor(input) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");
  formControl.className = "form-control success";
}


//isEmail function:
function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}

//prevent copy-paste:
window.onload = () => {
  const copyPrevent = document.getElementById('password');
  copyPrevent.oncopy = e => e.preventDefault();
  const pastePrevent = document.getElementById('password2');
  pastePrevent.onpaste = e => e.preventDefault();
 }
