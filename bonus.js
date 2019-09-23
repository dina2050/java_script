var bla=document.getElementsByClassName("first")[0];
var score=0;
var count = document.getElementById("current");
score=count.innerHTML;
bla.addEventListener("click", function(){
    score++;
    count.innerHTML=score;
});
