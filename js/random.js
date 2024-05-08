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
    //end of first question object
    {
        //question 2
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
        //question 3
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
        //question 4
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
        //question 5
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
    }
];
// let x =Math.floor(Math.random()*questions.length);
// console.log(x);
const li =document.getElementById("question");
let questionIndex=0;
console.log(questionIndex);
let next=document.getElementById("next");
function showQuestion(){
    currentQuestion=questions[questionIndex];
    li.innerHTML=currentQuestion.question;
}
next.addEventListener("click",()=>{ 
    
    questionIndex=(Math.floor(Math.random()*questions.length));
    //console.log(questionIndex)

    // questionIndex++;
    // questionIndex=questionIndex%questions.length;
    
    showQuestion();
    questions.splice(questionIndex,1);
    //console.log(questions.length)
})
    

