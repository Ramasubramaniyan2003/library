cart = [];
var id = localStorage.getItem('id');
// viewcart
fetch('/viewcart/getdata', {
    method: 'POST',
    headers: { "content-type": "application/json" },
    body: `{"Userid":"${id}"}`
})
    .then(res => {
        if (res.ok) {
            return res.json();
        }
        else {
            console.log("errror");
        }
    }
    )
    .then(
        data => {
            cart = data.data;
        })
    .then(res => {
        if(cart.length>0){
        var cartimghidden=document.getElementById('cartimghidden');
        cartimghidden.style.display="none";
        console.log(cart);
        }
        var y = 0;
        for (let i in cart) {
            var bookposition=cart[i].bookPath
            var bookcart=document.getElementById('bookcart');
            var bookdel=document.getElementById('bookdel');
            var img = document.createElement('div');
            var del=document.createElement('div');
            img.className = "col-sm-6 cartbox mb-3";
            img.innerHTML = `<div class="px-5 mb-3" ><a href="/description/${cart[i].bookType}/${bookposition[bookposition.length-1]}" style="text-decoration:none;color:black">
            <img src="${cart[i].imagePath}" width=150px height=250px id="cartimages${y}" class="mycartimage mb-3"/> 
            </div><div class="cartdetails">
            <p id="heading${y}">${cart[i].name}</p></a>
            <p ml-3>language: ${cart[i].language}</p>
            <p>booktype: ${cart[i].bookType}</p>
            <p>publisher: ${cart[i].publisher}</p>
            <p>no.of.pages: ${cart[i].numberOfPages}</div>
            <button class="removecart" data-bookid="${cart[i].id}" onclick="deletecart(this.getAttribute('data-bookid'),${y})"> Remove</button>`
            cartimage.appendChild(img);
            y++;
        }
    }
    )

//delete cart
function deletecart(bookid, y) {
    var userid = localStorage.getItem('id');
    fetch("/books/types/addtocart/delete", {
        method: 'DELETE',
        headers: { "content-type": "application/json" },
        body: `{"Userid":"${userid}","Bookid":"${bookid}"}`
    }
    ).then(
        res => {
            if (res) {
                alert("Removed");
                location.reload();
            }
            else {
                console.log("something wrong");
            }
        }
    )
}
function reset(){
if(confirm("are you want to reset your cart")){
    var userid = localStorage.getItem('id');
    fetch("/books/types/addtocart/reset", {
        method: 'DELETE',
        headers: { "content-type": "application/json" },
        body: `{"Userid":"${userid}"}`
    }
    ).then(
        res => {
            if (res) {
                alert("Reset");
                location.reload();
            }
            else {
                console.log("something wrong");
            }
        }
    )
}
}
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
    var randomcard = document.getElementById("randomcard");
    randomcard.style.display = "none";
}



