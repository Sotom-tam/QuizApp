let no=document.getElementById("no");
let border=document.getElementById("bord");
let count=3;
setInterval(function(){
    count--
    no.innerHTML=count;
    if(count===0){
        no.innerHTML="GO!!"
        border.style.border="none"
        window.location.href="../Pages/quiz.html"
    }
},1000)