

(function () {
  "use strict";

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll(".needs-validation");

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener(
      "submit",
      function (event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });

// storing at localhost


}

)

();
// Focus Icons
const inputs = document.querySelectorAll("input");

console.log(typeof inputs);

Object.keys(inputs).map((key, input) => onBlurOnFocus(inputs[key]));

function onBlurOnFocus(input) {
  input.onfocus = (e) => {
    e.target.previousElementSibling.classList.toggle("text-primary");
  };
  input.onblur = (e) => {
    e.target.previousElementSibling.classList.toggle("text-primary");
  };
}

// database at localhost
const fullName = document.querySelector('#fname')
const userName = document.querySelector('#uname')
const emailname = document.querySelector('#email')
const password = document.querySelector('#pass')



const form = document.querySelector('.sign-form')


const register = document.querySelector('.regi')
console.log(register);

// object for database 
const user = {
  fname : '',
  email : '',
  uname :'',
  pass : ''
}

let userlocal
register.addEventListener('click',() => {
  console.log('clicked');

  
  user.fname = fullName.value
  user.email = emailname.value
  user.uname = userName.value
  user.pass = password.value

  // let inittodo 
  if (localStorage.getItem("user") === null) {
    userlocal = []
    localStorage.setItem('user',JSON.stringify(user))
  } else {
    userlocal = JSON.parse(localStorage.getItem("user"));
    console.log(userlocal);
    userlocal.push(user)

    
    localStorage.setItem('user',JSON.stringify(userlocal))
  }


  
  form.action = "confirmsignup.html"
 


})

// end of database at localhost
