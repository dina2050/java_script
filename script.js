var btn=document.getElementsByTagName("button")[2]
var msg=document.getElementById("chat-input")
btn.addEventListener("click", function(){
document.getElementById("messages-list").innerHTML==msg.innerHTML
});

var svg=document.getElementsByTagName("svg")[0]
var modal=document.querySelector(".modal")
svg.addEventListener("click",function(){
    modal.style.display="block"
});

