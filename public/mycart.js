cart=[];
var id=localStorage.getItem('id');

fetch('/viewcart/getdata')
.then(res=>{
    if(res.ok){
        return res.json();
    }
    else{
        console.log("errror");
    }
}
)
.then(
    data=>{
cart=data;
    })
.then( res=>{
    var y=0;
    var cartimage=document.getElementById('cartimage');
    for(let i in cart){
        var img=document.createElement('div');
        var heading=document.createElement('div');
        img.className="col-sm-4";
       img.innerHTML=`<div class="mt-5 mx-5 px-5"><img src="${cart[i].imagePath}" width=150px height=250px id="cartimages${y}"/> <p id="heading${y}" class="mt-2">${cart[i].heading}</p><i class="fa fa-trash-o delete" onclick="deletecart(${y})" style="font-size:30px"></i> </div>`
       cartimage.appendChild(img);
       y++;
    }
}
)
var userid
function deletecart(para){
var imagepath=document.getElementById('cartimages'+para).src;
var heading=document.getElementById('heading'+para).textContent;
var id=localStorage.getItem('id');
fetch("/books/types/addtocart/delete",{
method:'DELETE',
headers:{"content-type":"application/json"},
body:`{"image_path":"${imagepath}","heading":"${heading}","id":"${id}" }`
}
).then(
    res=>{
        if(res){
            alert("deleted");
            location.reload();
        }
        else{
            console.log("something wrong");
        }
    }
)
}
window.onload = function (e) {
    var name1 = localStorage.getItem("name");
    var name = document.getElementById('Name');
    if (name1 != null) {
        name.innerHTML = `${name1}`;
       // login_and_logout();
        var name = document.getElementById('Name');
    }
}
var homenav=document.getElementById('homenav');
var homenavi=sessionStorage.getItem("home",homenav);
homenav.innerHTML=`${homenavi}`;