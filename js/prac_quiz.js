

//Creating an array of objects to store questions
const questions=[
    //first question object
    {
        //question 1
        question:"Who Wrote the Bible Book Of Ecclesiastes?",
        //creating and array of objects to store the answer options
        //each option has a text(the value) and a property "correct" which is either true or false
        answers:[
            //each option has a text and a true or false value
                //this is the first option
            {text: "King Solomon",correct:"true"},
            {text:"Paul",correct: "false"},
            {text:"Moses",correct:"false"},
            {text:"David",correct:"false"}
        ]
    },
    {
        //question 2
        question:"A Man of wealth said this:'I hated all my toil in which I toil under the sun, seeing that I must leave it to the man who will come after me'",
        //creating and array of objects to store the answer options
        //each option has a text(the value) and a property "correct" which is either true or false
        answers:[
            //each option has a text and a true or false value
                //this is the first option
            {text: "King Solomon",correct:"true"},
            {text:"Paul",correct: "false"},
            {text:"Moses",correct:"false"},
            {text:"Abraham",correct:"false"}
        ]
    },
    //end of first question object
    {
        //question 3
        question:"Who told the Parable of the Prodigal Son?",
        //creating and array of objects to store the answer options
        //each option has a text(the value) and a property "correct" which is either true or false
        answers:[
            //each option has a text and a true or false value
                //this is the first option
            {text:"Paul",correct: "false"},
            {text: "Elisha",correct:"false"},
            {text:"Jesus",correct:"true"},
            {text:"John The Baptist",correct:"false"}
        ]
    },
    {
        //question 4
        question:"Who Wrote the Bible Book Of Lamentations?",
        //creating and array of objects to store the answer options
        //each option has a text(the value) and a property "correct" which is either true or false
        answers:[
            //each option has a text and a true or false value
                //this is the first option
            {text:"Paul",correct: "false"},
            {text:"Jeremiah",correct:"true"},
            {text: "Moses",correct:"false"},
            {text:"David",correct:"false"}
        ]
    },
    {
        //question 5
        question:"Who Wrote much of the Bible Book Of Psalm?",
        //creating and array of objects to store the answer options
        //each option has a text(the value) and a property "correct" which is either true or false
        answers:[
            //each option has a text and a true or false value
                //this is the first option
            {text:"King Saul",correct: "false"},
            {text: "King Solomon",correct:"false"},
            {text:"Moses",correct:"false"},
            {text:"David",correct:"true"}
        ]
    },
    {
        //question 6
        question:"Who Wrote the Bible Book Of Proverbs?",
        //creating and array of objects to store the answer options
        //each option has a text(the value) and a property "correct" which is either true or false
        answers:[
            //each option has a text and a true or false value
                //this is the first option
            {text:"Paul",correct: "false"},
            {text: "Elijah",correct:"false"},
            {text:"Moses",correct:"false"},
            {text:"King Solomon",correct:"true"}
        ]
    },
    {
        //question 7
        question:"'In the beginning... Complete this statement",
        //creating and array of objects to store the answer options
        //each option has a text(the value) and a property "correct" which is either true or false
        answers:[
            //each option has a text and a true or false value
                //this is the first option
            {text:"God made Heaven and Hell",correct: "false"},
            {text: "There was light",correct:"false"},
            {text:"The earth was without form and void",correct:"false"},
            {text:"God made Heaven and Earth",correct:"true"},
        ]
    },
    {
        //question 8
        question:"Who Wrote the Bible Book Of Exodus?",
        //creating and array of objects to store the answer options
        //each option has a text(the value) and a property "correct" which is either true or false
        answers:[
            //each option has a text and a true or false value
                //this is the first option
            {text:"Paul",correct: "false"},
            {text: "King Solomon",correct:"false"},
            {text:"Moses",correct:"true"},
            {text:"David",correct:"false"}
        ]
    },
    {
        //question 9
        question:"Who Wrote the Bible Book Of Romans?",
        //creating and array of objects to store the answer options
        //each option has a text(the value) and a property "correct" which is either true or false
        answers:[
            //each option has a text and a true or false value
                //this is the first option
            {text:"Apostle Paul",correct: "true"},
            {text: "Peter",correct:"false"},
            {text:"King Saul",correct:"false"},
            {text:"David",correct:"false"}
        ]
    },
    {
        //question 10
        question:" '...For what I want to do I do not do, but what I hate I do.' Who made this statement?",
        //creating and array of objects to store the answer options
        //each option has a text(the value) and a property "correct" which is either true or false
        answers:[
            //each option has a text and a true or false value
                //this is the first option
            {text: "Peter",correct:"false"},
            {text:"King Saul",correct:"false"},
            {text:"Apostle Paul",correct: "true"},
            {text:"David",correct:"false"}
        ]
    },
];
//creating variables to store the question
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
//question numbring
let questionNo=1;
//quiz progress meter
let meter=document.querySelector("meter");
//meter label
let meterLab=document.getElementById("label");
meterLab.innerHTML="1 of 10"

//element to change value of meter
//function to calculate time
// let timer = new Date("Sept 7,2023 15:30:00");
// let time=new Date();
// let distance=timer-time;
// let days=Math.floor(distance/(1000*60*60*24));
// let hours=Math.floor(distance/)
// console.log(days)
// let minutes=Math.floor(timer/60)
// console.log(minutes);
// var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//   var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//   var seconds = Math.floor((distance % (1000 * 60)) / 1000);
// setInterval(function(){

// },1000)

//I'm going to make a time variable that has 5mins

function timer(){
    let five_minutes=new Date();
    five_minutes.setHours(0);
    five_minutes.setMinutes(2);
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
        timer_dis.innerHTML=min +":"+ sec;
        if(min===0&&sec<=10){
            timer_dis.classList.add("red");
            timer_dis.innerHTML=sec;
        }
        if(min===0&&sec===0){
            clearInterval(x)
            timer_dis.style.display="none";
            timer_text.style.display="none";
            showScore();
        }else if(questionNo>10){
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
    timer()
    meter.value=0;
//at the start of the quiz
    currentQuestionIndex=Math.floor(Math.random()*questions.length)//removes the random question for array
    score=0;
    next.innerHTML="Next";
    again.style.display="none";
    back_to.style.display="none";
    //Calling the Show Question Function,
    questionNo=1;
    showQuestion()
}
function showQuestion(){
    resetState()
    meter.value=questionNo-1;
    //the current question displayed
    //question array index 0,1,2,3,4
    let currentQuestion=questions[currentQuestionIndex]//currentQuestion gives the object with a question and answer stored in it
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
        //remove the children element old answers button
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
    next.style.margin="10px 50px 0px 150px"
    // questionNo++;
    
}
//Function to showscore
function showScore(){
    resetState();
    let percentage=0;
    function percent_score(){
        percentage=(score/10)*100;
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
        localStorage.setItem("Score",percentage)
    }
    grading();
    questionElement.innerText=`You Got ${score}  out of 10 questions
    You Scored  ${percentage}% 
    ${Quote}`;
    meterLab.innerHTML="Completed";
    meter.style.display="none"
    next.style.display="none";
    back_to.style.display="inline";
    again.style.display="inline";
    again.addEventListener("click",()=>{
        window.location.href="../Pages/countdown.html"
    })
}
function next_button(){
    questionNo=questionNo+1;
    meterLab.innerHTML=`${questionNo} of 10`
    if(questions.length>1){
        questions.splice(currentQuestionIndex,1);
        currentQuestionIndex=Math.floor(Math.random()*questions.length)
        showQuestion();
        console.log(questions);
    }else if(questions.length<=1){
        showScore()    
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
