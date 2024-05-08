let startBtn=document.getElementById("start-btn-anime")
// startBtn.addEventListener("click",()=>{
//     window.location.href="../Pages/anime_quiz.html"
// })
const questions=[
    {
        question:"A Popularly Known Volley Ball Based Anime",
        answers:[
            {text:"Haikyuu", correct:"true"},
            {text:"Yuuri!! On Ice", correct:"false"},
            {text:"Slam Dunk", correct:"false"},
            {text:"Kuroku No Basket", correct:"false"},
        ],
    },
    {
        question:"The first Anime Movie to be Nominated for an Oscar",
        answers:[
            {text:"A Silent Voice", correct:"false"},
            {text:"Spirited Away", correct:"true"},
            {text:"Slam Dunk", correct:"false"},
            {text:"Kimetsu No Yaiba", correct:"false"},
        ],
    },
    {
        question:"All of the above are Shonen Jump anime except..",
        answers:[
            {text:"Hunter X Hunter", correct:"false"},
            {text:"Slam Dunk", correct:"false"},
            {text:"Classroom Of the Elite", correct:"true"},
            {text:"My Hero Academia", correct:"false"},
        ],
    },
    {
        question:"Based On A South-Korean Manhwa",
        answers:[
            {text:"Horimiya", correct:"false"},
            {text:"BlueLock", correct:"false"},
            {text:"Black Clover", correct:"false"},
            {text:"The God of Highschool", correct:"true"},
        ],
    },
    {
        question:"A football Based Anime series",
        answers:[
            {text:"Dragon Ball", correct:"false"},
            {text:"Black Clover", correct:"false"},
            {text:"BlueLock", correct:"true"},
            {text:"My Hero Academia", correct:"false"},
        ],
    },
    
];
const questionElement=document.getElementById("question");
//creating variables to store the div holding the  answer buttons
const answer_buttons=document.getElementById("answer-buttons");
//creating variables to store the next
const next=document.getElementById("next-btn");
//creating previous button
const again=document.getElementById("prev-btn");
//back to quiz category button
const back_to=document.getElementById("backto_quizcategory");
//creating variables to store the users score
let score=0;
//timer purple background
const timer_text=document.getElementById("text");
//first question in the array has an index of 0
let currentQuestionIndex=0;
//timer element 
let timer_dis=document.getElementById("timer");
let questionNo;
function timer(){
    let five_minutes=new Date();
    five_minutes.setHours(0);
    five_minutes.setMinutes(5);
    five_minutes.setSeconds(1);
    five_minutes.setMilliseconds(0);
    let fiveTimeStamp=five_minutes.getTime()
    let user=new Date().getTime();
    let countDown_time=user+fiveTimeStamp
    let x=setInterval(function(){
        currentTime=new Date().getTime();
        let five=countDown_time-currentTime;
        let min=Math.floor((five%(60*60*1000))/(1000*60));
        let sec=Math.floor((five)%(1000*60)/1000)
        //sec=sec.toPrecision(2);
        timer_dis.innerHTML=min +":"+sec;
        if(min===0&&sec===0){
            clearInterval(x)
            timer_dis.style.display="none";
            timer_text.style.display="none";
            alert("Time Up")
            showScore()
        }else if(currentQuestionIndex===20){
            clearInterval(x)
            timer_dis.style.display="none"
            timer_text.style.display="none";
        }else{
            timer_dis.style.display="block"
            timer_text.style.display="block";
        }
    },1000)
}
function start_quiz(){
//at the start of the quiz
    currentQuestionIndex=0;
    //questions.splice(currentQuestionIndex,1);//removes the random question for array
    score=0;
    next.innerHTML="Next";
    again.style.display="none";
    back_to.style.display="none";
    //Calling the Show Question Function,
    timer()
    showQuestion()
}
function showQuestion(){
    resetState()
    //the current question displayed
    //question array index 0,1,2,3,4
    let currentQuestion=questions[currentQuestionIndex]//currentQuestion gives the object with a question and answer stored in it
    questionNo=currentQuestionIndex+1;
    //formula to calculate question Number
    //questionNo=Math.abs(currentQuestionIndex+questions.length-(questions.length-1));
    //question element that will be diaplyed on our page
    //currentQuestion will be going to the next because our current question index is increasing
    questionElement.innerHTML= questionNo + "." + currentQuestion.question;//inside the array, get me the question property
    //new answers are added to the div holding answers here
    currentQuestion.answers.forEach(answer=>{
        let button= document.createElement("button");
        button.innerHTML=answer.text;
        button.classList.add("btn")
        answer_buttons.appendChild(button);
        if(answer.correct){
            //adding true or false to button as well
            button.dataset.correct=answer.correct;
        }
        //adding click even to button
        button.addEventListener("click",selectAnswer)

    });
    
}

//defing function to reset old buttons
function resetState(){
    while(answer_buttons.firstChild){ //while the div holding the answer has children
        //remove the children element i.e Answer1. Answer 2...
       answer_buttons.removeChild(answer_buttons.firstChild)
    }
}
function selectAnswer(e){
    const selectedbtn=e.target;
    const isCorrect= selectedbtn.dataset.correct==="true";
    //if the button has the datadset true then add the class name "correct" to it
    //if added "true" to the button with answer.correct="true" earlier
    if(isCorrect){
        selectedbtn.classList.add("correct");
        score++;
    }else{
        selectedbtn.classList.add("incorrect");
    }
    Array.from(answer_buttons.children).forEach(button=>{
        if(button.dataset.correct==="true"){
            button.classList.add("correct")
        }
        button.disabled="true";
    })
    next.style.display="block";
    next.style.margin="10px 50px 0px 190px"
    questionNo++;
    //you can style the class of correct in css
    
}
function showScore(){
    resetState();
    let percentage=0;
    function percent_score(){
        percentage=(score/questions.length)*100;
    }
    let Quote=0;
    function grading(){
        percent_score();
        if(percentage>=80){
            Quote="Wow,You Must Really Now your Stuff!"
        }else if(percentage>=75&&percentage<80){
            Quote="That's a really Good Try, Good Job!"
        }else if(percentage>=50&&percentage<75){
            Quote="Well Done, You are above average!"
        }else{
            Quote="Good Try, I'm Sure You'll Do better Next Time"
        }
    }
    grading();
    questionElement.innerText=`You Got ${score}  out of ${questions.length} questions
    You Score is ${percentage}% 
    ${Quote}`;
    next.style.display="none";
    back_to.style.display="inline";
    again.style.display="inline";
    again.addEventListener("click",start_quiz)
}
function next_button(){
    currentQuestionIndex++;
    if(currentQuestionIndex<questions.length){
        showQuestion();
    }else{
        showScore();
    }
}
next.addEventListener("click",()=>{
    if(currentQuestionIndex<questions.length){
        next_button()
    }else{
        start_quiz();
    }
})

//calling start quiz function
start_quiz();




//can't i just call the button from my html and change their inner html?
