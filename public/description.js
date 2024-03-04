var path = window.location.pathname;
var homenav=document.getElementById('homenav');
var home=sessionStorage.getItem('homenav');
var desc=document.getElementById('homepage');
if(desc!=null && home != null){
    var homepath=home.toLowerCase();
    desc.innerHTML=`<a href="/books/types/${homepath}">${home}`;
    sessionStorage.setItem("description",'Description');
}
else{
   desc.style.display="none";
   console.log("home not null condition")
}
var booktype = window.location.pathname;
var booktype = booktype.substring(booktype.lastIndexOf('/') + 1, booktype.length);
var homenav1=document.getElementById('homenav1');
if (path.substring(1, path.lastIndexOf('/')) == "description/action") {
fetch("/getdata/action").then(
    res => {
        if (res.ok) {
            return res.json();
        }
        else {
            console.log("error in fetching file");
        }
    }
).then(
    data => {
        displaydata = data.data;
        authorname=data.authorname;
    }
).catch(error => {
    console.log(error);
}
).then(process => {
    descriptionfetching(displaydata,authorname)
})
}

console.log("path::", path.substring(1, path.lastIndexOf('-')));
// classic
if (path.substring(1, path.lastIndexOf('/')) == "description/classic") {
    displaydata = [];
    fetch("/getdata/classic").then(
        res => {
            if (res.ok) {
                return res.json();
            }
            else {
                console.log("error in fetching file");
            }
        }
    ).then(
        data => {
            displaydata = data.data;
            authorname=data.authorname;
        }
    ).catch(error => {
        console.log(error);
    }
    ).then(process => {
        descriptionfetching(displaydata,authorname)
    })
}
// history
if (path.substring(1, path.lastIndexOf('/')) == "description/history") {
    displaydata = [];
    fetch("/getdata/history").then(
        res => {
            if (res.ok) {
                return res.json();
            }
            else {
                console.log("error in fetching file");
            }
        }
    ).then(
        data => {
            displaydata = data.data;
            authorname=data.authorname;
        }
    ).catch(error => {
        console.log(error);
    }
    ).then(process => {
        descriptionfetching(displaydata,authorname)
    })
}
// comedy
if (path.substring(1, path.lastIndexOf('/')) == "description/comedy") {
    displaydata = [];
    fetch("/getdata/comedy").then(
        res => {
            if (res.ok) {
                return res.json();
            }
            else {
                console.log("error in fetching file");
            }
        }
    ).then(
        data => {
            displaydata = data.data;
            authorname=data.authorname;
        }
    ).catch(error => {
        console.log(error);
    }
    ).then(process => {
        descriptionfetching(displaydata,authorname)
    })
}
// adventure
if (path.substring(1, path.lastIndexOf('/')) == "description/adventure") {
    displaydata = [];
    fetch("/getdata/adventure").then(
        res => {
            if (res.ok) {
                return res.json();
            }
            else {
                console.log("error in fetching file");
            }
        }
    ).then(
        data => {
            displaydata = data.data;
            authorname=data.authorname;
        }
    ).catch(error => {
        console.log(error);
    }
    ).then(process => {
        descriptionfetching(displaydata,authorname)
    })
}
// gk
if (path.substring(1, path.lastIndexOf('/')) == "description/gk") {
    displaydata = [];
    fetch("/getdata/gk").then(
        res => {
            if (res.ok) {
                return res.json();
            }
            else {
                console.log("error in fetching file");
            }
        }
    ).then(
        data => {
            displaydata = data.data;
            authorname=data.authorname;
        }
    ).catch(error => {
        console.log(error);
    }
    ).then(process => {
        descriptionfetching(displaydata,authorname)
    })
}

function descriptionfetching(displaydata,authorname){
    console.log(displaydata)
    console.log(authorname);
    var str = path.substring(path.lastIndexOf('/') + 1, path.length);
    console.log("number::",str);
    var num = Number.parseInt(str);
    var img = document.getElementById('image');
    var imginsert = document.createElement('div');
    var dts = document.getElementById('details');
    var dtsinsert = document.createElement('div');
    var downloadbutton = document.getElementById('download');
    var downloadbtninsert = document.createElement('div');
    imginsert.innerHTML = `<img src='${displaydata[num - 1].imagePath}' height=350px,width=250px />`
    dtsinsert.innerHTML = `<h3>${displaydata[num - 1].name}</h3>
                            <p>${authorname[num - 1].authorName}</p>
                            <p style="text-align:start;">${displaydata[num - 1].description}</p>
                            <p><strong>Rating-</strong> </p>
                            <p><strong>views-</strong> </p>
                            <p><strong>publisher</strong> :${displaydata[num-1].publisher}</p>
                            <p><strong>publishedDate</strong> :${displaydata[num-1].publishedDate}</p>
                            <p><strong>Language</strong> :${displaydata[num-1].language}</p>
                            <p><strong>ISBN</strong> :${displaydata[num-1].ISBN}</p>
                            <p><strong>No.of.pages</strong> :${displaydata[num-1].numberOfPages}</p>`
    downloadbtninsert.innerHTML = `<div class="downloadbutton"><a href="/downloaddata${displaydata[num - 1].bookPath}">Download</a>
                               </div>`
    img.appendChild(imginsert);
    dts.appendChild(dtsinsert);
    downloadbutton.appendChild(downloadbtninsert);
}
function login_and_logout() {
    var loginbtn = document.getElementById('loginbtn');
    var logoutbtn = document.getElementById('logoutbtn');
    var viewcart = document.getElementById('viewcart');
    loginbtn.style.display = "none";
    logoutbtn.style.display = "inline";
    viewcart.style.display = "inline";
}
window.onload = function (e) {
    var name1 = localStorage.getItem("name");
    var name = document.getElementById('Name');
    if (name1 != null) {
        name.innerHTML = `${name1}`;
        login_and_logout();
        var name = document.getElementById('Name');
    }
}
function logout() {
    localStorage.removeItem("name");
    loginbtn.style.display = "inline";
    logoutbtn.style.display = "none";
    viewcart.style.display = "none";
    var name = document.getElementById('Name');
    name.innerHTML = ``; 
}
sessionStorage.setItem("description",'Description');

