function first(){
var button=document.getElementById("button");
button.addEventListener("click",store,false);
}
function store(){
    var name=document.getElementById("name").value;
	var number=document.getElementById("number").value;
	sessionStorage.setItem(name,number);
	write(name,number);
}
function write(name,number){
var write1=document.getElementById("write");
 write1.innerHTML=""+name+"<br/>"+number;
}
window.addEventListener("load",first,false);