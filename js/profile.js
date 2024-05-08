// //i need to change the placeholder of the input fields to the users deatils
// //I guess i should try to see if i can edit placeholders first
// //Getting input field showing names and stuff
let DOB1=document.getElementById("DOB");
let FirstNameName=document.getElementById("FirstName");
let Email=document.getElementById("Email");
let SurName=document.getElementById("SurName");
let user_info= JSON.parse(localStorage.getItem("user"))?JSON.parse(localStorage.getItem("user")):[]
let x="Your Data Has been saved"
function onload(){
    //getting the users email stored in local storage and making that the placeholder
    //Email.style.placeholder.color="black"
    let e =  localStorage.email
    for(i=0;i<user_info.length;i++){
        if(user_info[i].email===e){
            Email.value=user_info[i].email
            FirstName.value=user_info[i].FirstName
            SurName.value=user_info[i].SurName
            DOB1.value=user_info[i].DOB
            document.getElementById("Name").innerHTML=user_info[i].FirstName;
         }//else{
        //     user_info[i].email=e;
        //     Email.value=user_info[i].email
        //     FirstName.value=user_info[i].FirstName
        //     SurName.value=user_info[i].SurName
        //     DOB1.value=user_info[i].DOB
        // }
    }
    
    
}   

//FUNCTION FOR user to edit Information
function saveData(){
    let e=localStorage.email
    for(i=0;i<user_info.length;i++){
        if(user_info[i].email===e){
            user_info[i].email=Email.value
            user_info[i].FirstName=FirstName.value
            user_info[i].SurName=SurName.value
            user_info[i].DOB=DOB1.value
            localStorage.setItem("user",JSON.stringify(user_info))
        }
    }
    localStorage.email=Email.value;
    x=`Your Data Has Been Saved ${FirstName.value}`
    snackBar()
    onload();

}
function snackBar(){
    let snack=document.getElementById("snackbar");
    snack.innerHTML=x
    //console.log("hello")
    snack.className="show";
    setTimeout(function(){ 
        snack.className = snack.className.replace("show", ""); 
    }, 2500);
}

// //console.log(user_info.findIndex(check));

// //FirstName.placeholder=""
//TO SHOW USER SCORE
function showScore(){
    let score = document.getElementById("score")
    score.value=`${localStorage.Score} %`
}
showScore();