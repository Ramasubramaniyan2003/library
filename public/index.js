var show = true;
function books() {
    var booktopics = document.getElementById('booktopics');
    if (show) {
        booktopics.style.display = "inline";
        show = false;
    }
    else {
        booktopics.style.display = "none"
        show = true;
    }
}

var btns = document.getElementsByClassName('btn');
for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active1");
        current[0].className = current[0].className.replace(" active1", "");
        this.className += " active1";
    })
}

var elements = document.getElementsByClassName("flexbox");
var card = document.getElementsByClassName('cardimage');
//list view
function listView() {
    elements[0].style.gridTemplateColumns = "auto";
    // elements[0].style.width = "0px";
    document.getElementById('list').style.color = "#FF5079"
    document.getElementById('grid').style.color = "black"
    var card=document.getElementsByClassName('card');
    var cardimg=document.getElementsByClassName('cardimg');
   
    for(let i=0;i<card.length;i++){
    card[i].style.width="50%";
    }
    
}
//grid view
function gridView() {
    elements[0].style.gridTemplateColumns = "auto auto auto";
    document.getElementById('list').style.color = "black"
    document.getElementById('grid').style.color = "#FF5079"
}

// validate
visitednum = 1;
var signup_password;
function validate(id) {
    if (id == "login_account") {
        var signup = document.getElementById('hiddensignup');
        var login = document.getElementById('hiddenlogin');
        var modalsignup = document.getElementById('modalsignup');
        var modallogin = document.getElementById('modallogin');
        signup.style.display = "block";
        login.style.display = "none";
        modalsignup.style.display = "block"
        modallogin.style.display = "none"
        visitednum = 0;
    }
    if (id == 'signup_account') {
        var signup = document.getElementById('hiddensignup');
        var login = document.getElementById('hiddenlogin');
        var modalsignup = document.getElementById('modalsignup');
        var modallogin = document.getElementById('modallogin');
        signup.style.display = "none";
        login.style.display = "block";
        modalsignup.style.display = "none"
        modallogin.style.display = "block"
        visitednum = 0;
    }
    if (visitednum == 1) {
        const username = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        if (password.length < 6) {
            document.getElementById('demo').innerHTML = `<p>Password length should minimum 6 characters</p>`
        }
        console.log(username);
        if (password.length > 6) {
            document.getElementById('demo').innerHTML = ``;
            return true;
        }
    }
    if (id == "register") {
        var email = document.getElementById('signupemail').value;
        var password = document.getElementById('signuppassword').value;
        var retypepassword = document.getElementById('retypepassword').value;
        var demo = document.getElementById('demo');

        if (password != retypepassword) {
            alert("invalid password");
            return false;
        }
        else if (password.length < 6) {
            document.getElementById('demo').innerHTML = `<p>Password length should minimum 6 characters</p>`
            return false;
        }
        else if (password.length > 6) {
            document.getElementById('demo').innerHTML = ``;
            return false;
        }

    }

    if (id == "sign") {
        var email = document.getElementById('email').value;
        var password = document.getElementById('password').value;
        var demo = document.getElementById('demo');

        if (password.length < 6) {
            document.getElementById('demo').innerHTML = `<p>Password length should minimum 6 characters</p>`
            return false;
        }
        else if (password.length >= 6) {
            document.getElementById('demo').innerHTML = ``;
            return false;
        }

    }
}
//login
document.getElementById('form').addEventListener('submit', (event) => {
    event.preventDefault()
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const res = fetch('/authentication/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: `{"username":"${email}","password":"${password}"}`
    })
        .then(response => response.json())
        .then(res => {
            if (res.success) {
                login_and_logout();
                var name = document.getElementById('Name');
                var randomcard = document.getElementById('randomcard');
                const name1 = email.substring(0, email.indexOf('@'));
                name.innerHTML = `${name1}`;
                localStorage.setItem("name", name1);
                localStorage.setItem("id",res.id);
                window.location.reload();
            }
            else {
                alert("No User Found!");
            }
        }
        )
})


function login_and_logout() {
    var loginbtn = document.getElementById('loginbtn');
    var logoutbtn = document.getElementById('logoutbtn');
    var viewcart = document.getElementById('viewcart');
    var randomcard = document.getElementById('randomcard');
    loginbtn.style.display = "none";
    logoutbtn.style.display = "inline";
    viewcart.style.display = "inline";
    randomcard.style.display = "inline";
}
// signup
document.getElementById('form1').addEventListener('submit', (event) => {
    event.preventDefault();
    const signup_email = document.getElementById('signupemail').value;
    const signup_retypepassword = document.getElementById('retypepassword').value;
    const signup_password = document.getElementById('signuppassword').value;
    if (signup_retypepassword === signup_password) {
        const res = fetch('/authentication/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: `{"username":"${signup_email}","password":"${signup_password}"}`
        })
            .then(
                response => response.json()
            ).then(
                data => {
                    if (data) {

                        alert("Register");
                    }
                    else {
                        alert("already existed account");
                    }
                }
            )
    }
})
window.onload = function (e) {
    var name1 = localStorage.getItem("name");
    var name = document.getElementById('Name');
    if (name1 != null) {
        name.innerHTML = `${name1}`;
        login_and_logout();
    }
}
function login_and_logout() {
    var name1 = localStorage.getItem("name");
    var name = document.getElementById('Name');
    if (name1 != null) {
        name.innerHTML = `${name1}`;
    }
    var loginbtn = document.getElementById('loginbtn');
    var logoutbtn = document.getElementById('logoutbtn');
    var viewcart = document.getElementById('viewcart');
    var randomcard=document.getElementById("randomcard");
    randomcard.style.display="inline";
    loginbtn.style.display = "none";
    logoutbtn.style.display = "inline";
    viewcart.style.display = "inline";
}
function logout() {
    localStorage.removeItem("name");
    loginbtn.style.display = "inline";
    logoutbtn.style.display = "none";
    viewcart.style.display = "none";
    location.reload();
    var randomcard=document.getElementById("randomcard");
    randomcard.style.display="none";
}
var homenav = document.getElementById('homenav');
var homenavi = sessionStorage.removeItem("home", homenav);
