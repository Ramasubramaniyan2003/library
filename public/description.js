var path = window.location.pathname;
var homenav=document.getElementById('homenav');
var homenavi=sessionStorage.getItem("home",homenav);
console.log('home navi--->',homenavi);
homenav.innerHTML=`${homenavi}`;

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
        displaydata = data;
    }
).catch(error => {
    console.log(error);
}
).then(process => {
    var str = path.substring(path.lastIndexOf('/') + 1, path.length);
    console.log("number::",str);
    var num = Number.parseInt(str);
    console.log(displaydata);
   
    var img = document.getElementById('image');
    var imginsert = document.createElement('div');
    var dts = document.getElementById('details');
    var dtsinsert = document.createElement('div');
    var downloadbutton = document.getElementById('download');
    var downloadbtninsert = document.createElement('div');
    imginsert.innerHTML = `<img src='${displaydata[num - 1].imagePath}' height=350px,width=250px />`
    dtsinsert.innerHTML = `<h3>${displaydata[num - 1].name}</h3>
                            <p>${displaydata[num - 1].author_name}</p>
                            <p>${displaydata[num - 1].description}</p>
                            <p>Rating- ${displaydata[num - 1].rating}</p>
                            <p>views- ${displaydata[num - 1].views}</p>`
    downloadbtninsert.innerHTML = `<a href="/downloaddata${displaydata[num - 1].bookPath}">Download</a>`
    img.appendChild(imginsert);
    dts.appendChild(dtsinsert);
    downloadbutton.appendChild(downloadbtninsert);
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
            displaydata = data;
        }
    ).catch(error => {
        console.log(error);
    }
    ).then(process => {

        var path = window.location.pathname;
        console.log(path);
        var str = path.substring(path.lastIndexOf('/') + 1, path.length);
        console.log(str);
        var num = Number.parseInt(str);
        console.log(num);
        var img = document.getElementById('image');
        var imginsert = document.createElement('div');
        var dts = document.getElementById('details');
        var dtsinsert = document.createElement('div');
        var downloadbutton = document.getElementById('download');
        var downloadbtninsert = document.createElement('div');
        imginsert.innerHTML = `<img src='${displaydata[num - 1].imagePath}' height=350px,width=250px />`
        dtsinsert.innerHTML = `<h3>${displaydata[num - 1].name}</h3>
                            <p>${displaydata[num - 1].author_name}</p>
                            <p>${displaydata[num - 1].description}</p>
                            <p>Rating- ${displaydata[num - 1].rating}</p>
                            <p>views- ${displaydata[num - 1].views}</p>`
        downloadbtninsert.innerHTML = `<a href="/downloaddata${displaydata[num - 1].bookPath}">Download</a>`
        img.appendChild(imginsert);
        dts.appendChild(dtsinsert);
        downloadbutton.appendChild(downloadbtninsert);
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
            displaydata = data;
        }
    ).catch(error => {
        console.log(error);
    }
    ).then(process => {

        var path = window.location.pathname;
        console.log(path);
        var str = path.substring(path.lastIndexOf('/') + 1, path.length);
        console.log(str);
        var num = Number.parseInt(str);
        console.log(num);
        var img = document.getElementById('image');
        var imginsert = document.createElement('div');
        var dts = document.getElementById('details');
        var dtsinsert = document.createElement('div');
        var downloadbutton = document.getElementById('download');
        var downloadbtninsert = document.createElement('div');
        imginsert.innerHTML = `<img src='${displaydata[num - 1].imagePath}' height=350px,width=250px />`
        dtsinsert.innerHTML = `<h3>${displaydata[num - 1].name}</h3>
                            <p>${displaydata[num - 1].author_name}</p>
                            <p>${displaydata[num - 1].description}</p>
                            <p>Rating- ${displaydata[num - 1].rating}</p>
                            <p>views- ${displaydata[num - 1].views}</p>`
        downloadbtninsert.innerHTML = `<a href="/downloaddata${displaydata[num - 1].bookPath}">Download</a>`
        img.appendChild(imginsert);
        dts.appendChild(dtsinsert);
        downloadbutton.appendChild(downloadbtninsert);
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
            displaydata = data;
        }
    ).catch(error => {
        console.log(error);
    }
    ).then(process => {

        var path = window.location.pathname;
        console.log(path);
        var str = path.substring(path.lastIndexOf('/') + 1, path.length);
        console.log(str);
        var num = Number.parseInt(str);
        console.log(num);
        var img = document.getElementById('image');
        var imginsert = document.createElement('div');
        var dts = document.getElementById('details');
        var dtsinsert = document.createElement('div');
        var downloadbutton = document.getElementById('download');
        var downloadbtninsert = document.createElement('div');
        imginsert.innerHTML = `<img src='${displaydata[num - 1].imagePath}' height=350px,width=250px />`
        dtsinsert.innerHTML = `<h3>${displaydata[num - 1].name}</h3>
                            <p>${displaydata[num - 1].author_name}</p>
                            <p>${displaydata[num - 1].description}</p>
                            <p>Rating- ${displaydata[num - 1].rating}</p>
                            <p>views- ${displaydata[num - 1].views}</p>`
        downloadbtninsert.innerHTML = `<a href="/downloaddata${displaydata[num - 1].bookPath}">Download</a>`
        img.appendChild(imginsert);
        dts.appendChild(dtsinsert);
        downloadbutton.appendChild(downloadbtninsert);
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
            displaydata = data;
        }
    ).catch(error => {
        console.log(error);
    }
    ).then(process => {
      console.ogg(displaydata)
        var path = window.location.pathname;
        console.log(path);
        var str = path.substring(path.lastIndexOf('/') + 1, path.length);
        console.log(str);
        var num = Number.parseInt(str);
        console.log(num);
        var img = document.getElementById('image');
        var imginsert = document.createElement('div');
        var dts = document.getElementById('details');
        var dtsinsert = document.createElement('div');
        var downloadbutton = document.getElementById('download');
        var downloadbtninsert = document.createElement('div');
        imginsert.innerHTML = `<img src='${displaydata[num - 1].imagePath}' height=350px,width=250px />`
        dtsinsert.innerHTML = `<h3>${displaydata[num - 1].name}</h3>
                            <p>${displaydata[num - 1].author_name}</p>
                            <p>${displaydata[num - 1].description}</p>
                            <p>Rating- ${displaydata[num - 1].rating}</p>
                            <p>views- ${displaydata[num - 1].views}</p>`
        downloadbtninsert.innerHTML = `<a href="/downloaddata${displaydata[num - 1].bookPath}">Download</a>`
        console.log("path:", displaydata[num - 1].book_path)
        img.appendChild(imginsert);
        dts.appendChild(dtsinsert);
        downloadbutton.appendChild(downloadbtninsert);
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
            displaydata = data;
        }
    ).catch(error => {
        console.log(error);
    }
    ).then(process => {

        var path = window.location.pathname;
        console.log(path);
        var str = path.substring(path.lastIndexOf('/') + 1, path.length);
        console.log(str);
        var num = Number.parseInt(str);
        console.log(num);
        var img = document.getElementById('image');
        var imginsert = document.createElement('div');
        var dts = document.getElementById('details');
        var dtsinsert = document.createElement('div');
        var downloadbutton = document.getElementById('download');
        var downloadbtninsert = document.createElement('div');
        imginsert.innerHTML = `<img src='${displaydata[num - 1].imagePath}' height=350px,width=250px />`
        dtsinsert.innerHTML = `<h3>${displaydata[num - 1].name}</h3>
                            <p>${displaydata[num - 1].author_name}</p>
                            <p>${displaydata[num - 1].description}</p>
                            <p>Rating- ${displaydata[num - 1].rating}</p>
                            <p>views- ${displaydata[num - 1].views}</p>`
        downloadbtninsert.innerHTML = `<a href="/downloaddata${displaydata[num - 1].bookPath}">Download</a>`
        img.appendChild(imginsert);
        dts.appendChild(dtsinsert);
        downloadbutton.appendChild(downloadbtninsert);
    })
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
// var homenav=document.getElementById('homenav');
// var homenavi=sessionStorage.removeItem("home",homenav);
// homenav.innerHTML=``;

