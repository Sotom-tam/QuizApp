let x;
let B=document.querySelectorAll(".main .container .categories-container .categories");

//SnackBar
let snack=document.getElementById("snackbar");
function snackBar(){
    
    snack.innerHTML=x
    //console.log("hello")
    snack.className="show";
    setTimeout(function(){ 
        snack.className = snack.className.replace("show", ""); 
    }, 2500);
}
let user_info = JSON.parse(localStorage.getItem("user"))?JSON.parse(localStorage.getItem("user")):[]
function getName(){ 
let e =  localStorage.email 
    for(i=0;i<user_info.length;i++){
        if(user_info[i].email===e){
            return i;
        }
    }
}
//A function that runs onload of why quiz category Page
//It should do two things
//1 check if the user is logged in
//2 Snack bar to welcome the user 
function onload(){
    //checking if user is logged in
    if(localStorage.email==undefined||localStorage.password==undefined){
        window.location.href="../Pages/login_page.html"
    }else{
        getName();
        let welc=document.getElementById("welcome")
        welc.innerHTML=`Welcome, ${user_info[i].FirstName}`
        // x= `You Are Logged in ${user_info[i].FirstName +" "+user_info[i].SurName}` ;
        // snackBar();
    }
}
//To make all the categories body links
for(i=0;i<B.length;i++){
    B[i].addEventListener("click",()=>{
        window.location.href="../Pages/Startquiz.html"
    })
}
//For Log Out Option
let logout=document.getElementById("logout");
logout.addEventListener("click",()=>{
    localStorage.removeItem("email")
    window.location.href="../index.html"
})
//Instead Of Profile text Users name
getName()
let profileText = document.querySelector("#profile span")
profileText.innerHTML=user_info[i].FirstName;