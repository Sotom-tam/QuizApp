//function to Calculate users score
function user_score(){
    //Users Score is Initially 0

    score= 0;
    //Loops through User Answers
    for(let i=0;i<total_questions;i++){
        //If Users answer is correct it adds to the score
        if(answer===correct_answer){
            score++;
        //Else nothing is added to the score
        }else{
            score=score+0;
        }
    }
    let displayed=((score/total_question)*100);
    document.getElementById("display_score").innerText="Your Score:",displayed;
}
function displaying_score(){

}