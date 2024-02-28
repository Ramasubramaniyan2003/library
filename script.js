var show=true;
function books(){
var booktopics=document.getElementById('booktopics');
if(show){
booktopics.style.display="inline";
show=false;
}
else{
    booktopics.style.display="none"
    show=true; 
}
}