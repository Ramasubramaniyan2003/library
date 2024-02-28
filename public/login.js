
// visitednum = 1
// var signup_password;
// function validate(id) {
//     if (id == "login_account") {
//         var signup = document.getElementById('hiddensignup');
//         var login = document.getElementById('hiddenlogin');
//         signup.style.display = "block";
//         login.style.display = "none";
//         visitednum = 0;
//     }
//     if (id == 'signup_account') {
//         var signup = document.getElementById('hiddensignup');
//         var login = document.getElementById('hiddenlogin');
//         signup.style.display = "none";
//         login.style.display = "block";
//         visitednum = 0;
//     }
//     if (visitednum == 1) {
//         const username = document.getElementById('email').value;
//         const password = document.getElementById('password').value;
//         if (password.length < 6) {
//             document.getElementById('demo').innerHTML = `<p>Password length should minimum 6 characters</p>`
//         }
//         console.log(username);
//         if (password.length > 6) {
//             document.getElementById('demo').innerHTML = ``;
//             return true;
//         }
//     }
//     if (id == "register") {
//         var email = document.getElementById('signupemail').value;
//         var password = document.getElementById('signuppassword').value;
//         var retypepassword = document.getElementById('retypepassword').value;
//         var demo = document.getElementById('demo');
    
//         if (password != retypepassword) {
//             alert("invalid password");
//             return false;
//         }
//         else if (password.length < 6) {
//             document.getElementById('demo').innerHTML = `<p>Password length should minimum 6 characters</p>`
//             return false;
//         }
//         else if (password.length > 6) {
//             document.getElementById('demo').innerHTML = ``;
//             return false;
//         }

//     }

//     if (id == "sign") {
//         var email = document.getElementById('email').value;
//         var password = document.getElementById('password').value;
//         var demo = document.getElementById('demo');
     
//          if (password.length < 6) {
//             document.getElementById('demo').innerHTML = `<p>Password length should minimum 6 characters</p>`
//             return false;
//         }
//         else if (password.length >=6) {
//             document.getElementById('demo').innerHTML = ``;
//             return false;
//         }

//     }
// }
// //login
// document.getElementById('form').addEventListener('submit', (event) => {
//     event.preventDefault()
//     const email = document.getElementById('email').value;
//     const password = document.getElementById('password').value;
//     const res = fetch('/authentication/login', {
//         method: 'POST',
//         headers: {
//             'content-Type': 'application/json',
//         },
//         body: `{"username":"${email}","password":"${password}"}`
//     })
//         .then(
//             response => response
//         ).then(
//             data => {
//                 if (!data) {
//                   //  window.open('/','_self');
//                     console.log("logged in");
//                      alert("logged in");
//                      var loginbtn=document.getElementById('loginbtn');
//                      var logoutbtn=document.getElementById('logoutbtn');
//                      var name=document.getElementById('Name');
//                      loginbtn.style.display="none";
//                      logoutbtn.style.display="inline";
//                     const name1=email.substring(0,email.indexOf('@'));
//                      name.innerHTML=`${name1}`;
//                      console.log(name1);
//                 }
//                 else {
//                     console.log("not working");
//                     alert("Not yet register!");
//                 }
//             }
//         )
// })

// // signup
 


// document.getElementById('form1').addEventListener('submit', (event) => {
    
//     event.preventDefault();
//     const signup_email = document.getElementById('signupemail').value;
//     const signup_retypepassword = document.getElementById('retypepassword').value;
//     const signup_password=document.getElementById('signuppassword').value;
//     if(signup_retypepassword===signup_password){
//     const res = fetch('/authentication/signup', {
//         method: 'POST',
//         headers: {
//             'content-Type': 'application/json',
//         },
//         body: `{"username":"${signup_email}","password":"${signup_password}"}`
//     })
//         .then(
//             response => response.json()
//         ).then(
//             data => {
//                 if (data) {
//                     console.log("register")
//                     alert("Register");
//                 }
//                 else{
//                     alert("already existed account");
//                 }
//             }
//         )
//         }
// })
