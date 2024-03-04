var btns = document.getElementsByClassName('btn');
var elements = document.getElementsByClassName("flexbox");
function gridView() {
    elements[0].style.gridTemplateColumns = "auto";
}
function listView() {
    elements[0].style.gridTemplateColumns = "auto auto auto";
}
var booktype = window.location.pathname;
var booktype = booktype.substring(booktype.lastIndexOf('/') + 1);
var navbar = ['Action', 'Classic', 'History', 'Comedy', 'General_knowledge', 'Adventure', 'Random'];
var nav = document.getElementById(`nav1`);
var homenav = document.getElementById('homepage');
for (let i of navbar) {
    if (i.toLowerCase() == booktype.toLowerCase() && i == "Random") {
        nav.innerHTML = `<h3>${i} book</h3>`
        var temp = i.toLowerCase()
        homenav.innerHTML = `${i}`
    }
    else if (i.toLowerCase() == booktype.toLowerCase()) {
        nav.innerHTML = `<h3>${i} books</h3>`
        var temp = i.toLowerCase()
        homenav.innerHTML = `${i}`;
    }
}
sessionStorage.setItem("homenav", homenav.innerHTML);
var visited = 0;
if (booktype == "action") {
    displaydata = [];
    act = fetch("/getdata/action")
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            else {
                console.log('error');
            }
        }
        )
        .then(data => {
            displaydata = data.data;
            authordata = data.authorname;
        })
        .catch(error => {
            console.log('error');
        }).then(process => {
            bookfetch(displaydata, authordata)
        }
        )
}

// classic
if (booktype == "classic") {
    let displaydata = [];
    fetch("/getdata/classic")
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            else {
                console.log('error');
            }
        }
        )
        .then(data => {
            displaydata = data.data;
            authordata = data.authorname;
            bookfetch(displaydata, authordata)
        }
        )
}
// history
if (booktype == 'history') {
    let displaydata = [];
    fetch("/getdata/history")
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            else {
                console.log('error');
            }
        }
        )
        .then(data => {
            displaydata = data.data;
            authordata = data.authorname;
        })
        .catch(error => {
            console.log('error');
        }).then(process => {
            bookfetch(displaydata, authordata)
        })
}
// comedy
if (booktype == 'comedy') {
    let displaydata = [];
    if (visited == 1) {
        for (let i = 1; i <= 3; i++) {
            var details1 = document.getElementById(`detail${i}`);
            var details2 = document.getElementById(`image${i}`);
            var details3 = document.getElementById(`download${i}`);
            details1.remove();
            details2.remove();
            details3.remove();
        }
    }
    fetch("/getdata/comedy")
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            else {
                console.log('error');
            }
        }
        )
        .then(data => {
            displaydata = data.data;
            authordata = data.authorname;
        })
        .catch(error => {
            console.log('error');
        }).then(process => {
            bookfetch(displaydata, authordata)
        })
}
// Gk
if (booktype == 'general_knowledge') {
    let displaydata = [];
    fetch("/getdata/gk")
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            else {
                console.log('error');
            }
        }
        )
        .then(data => {
            displaydata = data.data;
            authordata = data.authorname;
        })
        .catch(error => {
            console.log('error');
        }).then(process => {
            bookfetch(displaydata, authordata)
        })
}

// adventure adventure
if (booktype == 'adventure') {
    let displaydata = [];
    fetch("/getdata/adventure")
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            else {
                console.log('error');
            }
        }
        )
        .then(data => {
            displaydata = data.data;
            authordata = data.authorname;
        })
        .catch(error => {
            console.log('error');
        }).then(process => {
            bookfetch(displaydata, authordata)
        })
}
if (booktype == "random") {
    randombook = [];
    var bookstypes = ["action", "classic", "history", "adventure", "comedy", "gk", "adventure"];
    var ran = Math.floor(Math.random() * bookstypes.length);
    console.log(bookstypes[ran]);
    fetch(`/getdata/${bookstypes[ran]}`)
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            else {
                console.log('error');
            }
        }
        ).then(data => {
            randombook = data.data;
            authordata = data.authorname;
        }
        ).then(
            res => {
                var rannum = Math.floor(Math.random() * randombook.length)
                var y = 1
                imagevalue = 1
                authorlen = 1
                var b = document.getElementById(`img${y}`);
                var details = document.getElementById(`details${y}`);
                var download = document.getElementById(`Download${y}`);
                var addtocart = document.getElementById(`addtocart${y}`);
                var det = document.createElement('div');
                var img = document.createElement("div");
                var dow = document.createElement('div');
                var cart = document.createElement('div');
                det.id = `detail${y}`;
                img.id = `image${y}`;
                dow.id = `download${y}`;
                img.innerHTML = `<div class="col-sm-3">
            <img src="${randombook[rannum].imagePath}" height=200px, width=150px id="cartimage${y}"/>
            </div>`
                det.innerHTML = `<a href="/description/${randombook[rannum].bookType}/${imagevalue}" id="cartheading${y}">${randombook[rannum].name}</a>
            <p>${authordata[authorlen].authorName}</p>
            <p>Rating:</p>
            <p>Views: </p>`
                dow.innerHTML = `<a href="/downloaddata${randombook[rannum].bookPath}">Dowload</a></div>`;
                cart.innerHTML = `<a type="button"><img src="/icons/addtocart.png" width="30px",height="30px" data-bookid="${randombook[rannum].id}" onclick="addingcart(this.getAttribute('data-bookid'))"/></a>`
                b.appendChild(img);
                details.appendChild(det);
                download.appendChild(dow);
                addtocart.appendChild(cart);
                y++;
                imagevalue++;
                visited = 1;
                authorlen++;
            }
        )
}
//add cart items
var checklogin = localStorage.getItem('name');
if (checklogin) {
    var addtocart = document.getElementsByClassName('addtocartdown');
    for (let i of addtocart) {
        console.log(addtocart)
        addtocart[i].style.pointerEvents = "auto";
        addtocart[i].style.opacity = "1.0";
    }
}
function addingcart(Bookid) {
    var Userid = localStorage.getItem('id');
    fetch('/books/types/addtocart', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: `{"Bookid":"${Bookid}","Userid":"${Userid}"}`
    }).then(
        res => {
            if (res.ok) {
                return res.json();
            }
            else {
                console.log("fetching error");
            }
        }
    )
        .then(res => {
            if (res.success) {
                console.log(res);
                // var popup=document.getElementById("popup");
                // popup.style.display="inline";
            }
            else if (res.message) {
                alert(res.message)
            }
            else if (!res.success) {
                alert("something went wrong");
            }
        }
        )
}

window.onload = function (e) {
    var name1 = localStorage.getItem("name");
    var name = document.getElementById('Name');
    console.log("login out func called")
    if (name1 != null) {
        name.innerHTML = `${name1}`;
        login_and_logout();
    }
}
function login_and_logout() {

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
    window.location.reload();
}
// sessionStorage.removeItem("homenav");
sessionStorage.removeItem("description", 'Description');
// display all books
function bookfetch(displaydata, authordata) {
    if (visited == 1) {
        for (let i = 1; i <= 3; i++) {
            var details1 = document.getElementById(`detail${i}`);
            var details2 = document.getElementById(`image${i}`);
            var details3 = document.getElementById(`download${i}`);
            details1.remove();
            details2.remove();
            details3.remove();
        }
    }
    y = 1;
    let imagevalue = 1;
    var authorlen = 0;
    for (var i of displaydata) {
        var b = document.getElementById(`img${y}`);
        var details = document.getElementById(`details${y}`);
        var download = document.getElementById(`Download${y}`);
        var addtocart = document.getElementById(`addtocart${y}`);
        var det = document.createElement('div');
        var img = document.createElement("div");
        var dow = document.createElement('div');
        var cart = document.createElement('div');
        det.id = `detail${y}`;
        img.id = `image${y}`;
        dow.id = `download${y}`;
        img.innerHTML = `<div class="col-sm-3">
        <img src="${i.imagePath}" width=150px, height=200px id="cartimage${y}"/>
        </div>`
        det.innerHTML = `<a href="/description/${i.bookType}/${imagevalue}" id="cartheading${y}">${i.name}</a>
          <p>By: ${authordata[authorlen].authorName}</p>
          <p>Rating:</p>
          <p>Views:</p>`
        dow.innerHTML = `<div class="addtocartdownload"><a href="/downloaddata${i.bookPath}">Dowload</a></div>`;
        cart.innerHTML += `<div class="addtocartbutton"><button data-bookid="${i.id}" onclick="addingcart(this.getAttribute('data-bookid'))" class="addtocartdown">Read Later</button></div>`;
        b.appendChild(img);
        details.appendChild(det);
        addtocart.appendChild(cart);
        download.appendChild(dow);
        y++;
        imagevalue++;
        authorlen++;
        visited = 1;
    }
}

