
//ex1
document.getElementById("red").addEventListener("mouseover", function(){
    document.getElementById("red").style.color='red'
});
document.getElementById("red").addEventListener("mouseleave", function(){
    document.getElementById("red").style.color='black'
});

//ex2
var paragraph = document.createElement("p");
document.getElementById("parent").appendChild(paragraph);


//ex3
document.getElementById("destroy").addEventListener("click", function(){
    document.getElementById("destroy").parentElement.remove()
});

//ex4
document.getElementById("cut").addEventListener("copy", function(){
  alert("COPIED")
});

//ex5
var input= document.getElementById("disable");
input.addEventListener("input",function(){
    if  (input.value=="Stop"){
        input.disabled=true
}});
//ex6
var a = document.querySelectorAll(".selector p");
console.log(a)
for(let i=0; i<a.length; i++)
a[i].style.color="red"
 
//ex7
// var x = document.getElementsByTagName("div")
// x.innerHTML="whatever"