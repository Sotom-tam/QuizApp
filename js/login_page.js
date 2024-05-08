//Getting User Data

//Profile page
//I need the Profile to show the Users, name, email, etc
//It's supposed to get the user info from the local storage
let x
function snackBar(){
    let snack=document.getElementById("snackbar");
    snack.innerHTML=x
    //console.log("hello")
    snack.className="show";
    setTimeout(function(){ 
        snack.className = snack.className.replace("show", ""); 
    }, 3000);
}

 
//For Creating Account Page
function user_data(){
    let email = document.getElementById("Email").value; 
    let password = document.getElementById("Password").value;
    let SurName= document.getElementById("SurName").value;
    let FirstName=document.getElementById("FirstName").value;
    let DOB="2005-08-17";
    //Getting User Data and passing it into an empty array
    let user_info=[];
    //to change the string data to A javaScript object
    user_info= JSON.parse(localStorage.getItem("user"))?JSON.parse(localStorage.getItem("user")):[]
    //If any of the input fields are empty
    if(SurName==""||FirstName==""||email==""||password==""){
        x="Please Fill In All the input Fields"
        snackBar();
    }
    //If the email is thesame as email saved in local storage, using the .some array method
    else if(user_info.some((v)=>{
        return v.email===email;
        
    })){
        x="Inncorrect Email Entered \nThe email Entered is already saved"
        snackBar();
    }
    //If user has field all fields and entered a valid email
    else{
    //Pushing New User data into an array, with Objects
        user_info.push({
            "FirstName":FirstName,
            "SurName": SurName,
            "email": email,
            "password": password,
            "DOB":DOB,
        })
        window.location.href="../Pages/login_page.html"
    }
     //Allocating Storage to User Info to save data
    localStorage.setItem("user",JSON.stringify(user_info))
}
//For User login
function check_data(){
    console.log("hello")
    //Getting User Details that are entered
    enter_email=document.getElementById("log_email").value;
    enterpass=document.getElementById("log_Pass").value;
    console.log("Email:"+enter_email+""+"Password:"+ enterpass)
    let user_records = [];
    user_records = JSON.parse(localStorage.getItem("user"))?JSON.parse(localStorage.getItem("user")):[]
    //let users=localStorage.user;
    //window.localStorage.user
    console.log(user_records)
    if(user_records.some((v)=>{
        return v.email == enter_email && v.password == enterpass;
      })){
        let current_user = user_records.filter((v =>{
          return v.email == enter_email && v.password == enterpass;
        }))[0]
        localStorage.setItem("email",current_user.email);
        localStorage.setItem("password", current_user.password); 
        window.location.href="../Pages/quiz_categories.html"
        //console.log("hello")
    }else if(enter_email==""||enterpass==""){
        x="Please Fill in all in Input fields"
        snackBar();
    }else{
        x="Incorrect Email Or Password"
        snackBar();
    }
    
}

   /*if(enter_email===email&&enterpass===password){
        window.location.href ="../html/quiz_categories.html";
    }else{
        alert("Invalid Details")
    }*/

