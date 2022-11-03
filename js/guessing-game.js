/* What I want to accomplish -

create a function that generates a random number 1-100 and remains the same until the game is reset

create a function that changes the inner text of the getItemByClassName("ans") to the submited number 
and changes the class name to the desingated styling name based on how close to the number it is and also changes to inner
text of the getClassbyID("result") to say "You are within 5!!", "You are within 15.", "Not even close.", "Winner" or "Game over"
based on the submitted answer and amount of submitted answers. 

create a function to reset the game when the play again is pushed 

*/ 

const correctAnswer = (resetGame());
let submittedAnswersArray = [];

 function resetGame(Event){ 
    // Event.preventDefault();
    /* I could not figure out a way to keep the random number from reseting with every click so I set it to a set 
    number so you could see how the code worked without the number changing*/
    // let correctAnswer = Math.floor(Math.random() * 100);
    let correctAnswer = 30;
    console.log(correctAnswer);
    let clearRed = document.getElementsByClassName("red");
    clearRed.className = "ans";
    let clearGreen = document.getElementsByClassName("green");
    clearGreen.className = "ans";
    let clearYellow = document.getElementsByClassName("yellow");
    clearYellow.className = "ans";
    let submittedAnswersArray = [];
    return correctAnswer;
} 

let reset = document.getElementById("playAgain");
reset.addEventListener('click', resetGame);

let whereToLog = document.getElementsByClassName("ans");
let whereToChange = document.getElementsByClassName('ans');
let result = document.getElementById("result");

let form = document.getElementById("addGuess");
// console.log(form)

//I could not get this code to work it will not even console.log the value
let submittedValue = document.getElementById("guess").value;
console.log(submittedValue);

form.addEventListener('submit', pushAnswers);

function pushAnswers(submittedValue){   
    Event.PreventDefault;
    if (submittedAnswersArray.length < 6){
    submittedAnswersArray.push(submittedValue)
    } else {                                
        alert("game over")
    }
    return;
}
/* Since i could not get the returned numbers from the form I added these to push in answer so you can see the
other code and how it works if you uncomment them one at a time starting from the top you can see the page change
because of this I also can't really test to see if the game reset works*/
pushAnswers(72);
pushAnswers(63);
pushAnswers(10);
pushAnswers(20);
pushAnswers(31);
// pushAnswers(30);
pushAnswers(29);



logAnswer(submittedAnswersArray);
console.log(submittedAnswersArray);

function logAnswer(submittedAnswersArray){
    for (i=0; i<=5; i++){
        if(i === 0){
            if(submittedAnswersArray[0] !== undefined){
            console.log(submittedAnswersArray[0]);    
            whereToLog[0].innerText = submittedAnswersArray[0];
            whereToChange[0].className = howDidYouDo(correctAnswer, submittedAnswersArray[0]);
          }  
        } else if(i === 1){
            if(submittedAnswersArray[1] !== undefined){
            console.log(submittedAnswersArray[1]);    
            whereToLog[0].innerText =submittedAnswersArray[1];
            whereToChange[0].className = howDidYouDo(correctAnswer, submittedAnswersArray[1]);
          }  
        } else if(i === 2){
            if(submittedAnswersArray[2] !== undefined){
            console.log(submittedAnswersArray[2]);   
            whereToLog[0].innerText =submittedAnswersArray[2];
            whereToChange[0].className = howDidYouDo(correctAnswer, submittedAnswersArray[2]);
          }  
        } else if(i === 3){
            if(submittedAnswersArray[3] !== undefined){
            console.log(submittedAnswersArray[3]); 
            whereToLog[0].innerText =submittedAnswersArray[3];
            whereToChange[0].className = howDidYouDo(correctAnswer, submittedAnswersArray[3]);
          }  
        } else if(i === 4){
            if(submittedAnswersArray[4] !== undefined){
            console.log(submittedAnswersArray[4]);    
            whereToLog[0].innerText =submittedAnswersArray[4];
            whereToChange[0].className = howDidYouDo(correctAnswer, submittedAnswersArray[4]);
          }  
        } else if (i === 5){
            if(submittedAnswersArray[5] !== undefined){
            console.log(submittedAnswersArray[5]);   
            whereToLog[0].innerText =submittedAnswersArray[5];
            whereToChange[0].className = howDidYouDo(correctAnswer, submittedAnswersArray[5]);
          }  
        }
    }
}


function howDidYouDo(correctAnswer, submittedAnswersArrayIndex){
    
    if (submittedAnswersArrayIndex === correctAnswer){
        result.innerText = "Winner!!";
        return "green";
    }
    else if (submittedAnswersArrayIndex >= (correctAnswer - 5) && submittedAnswersArrayIndex <= (correctAnswer + 5)){
        if (submittedAnswersArray.length < 6){
        result.innerText = "You are within 5!!";
        return "green";
        } else {
        result.innerText = "You were close but you lost!! The correct answer is " + correctAnswer + ".";
        return "green";
        } 
    }
    else if (submittedAnswersArrayIndex >= (correctAnswer - 15) && submittedAnswersArrayIndex <= (correctAnswer + 15)){
        if (submittedAnswersArray.length < 6){
        result.innerText = "You are within 15";
        return "yellow";
        } else {
            result.innerText = "Sorry you lost. The correct answer is " + correctAnswer + ".";;
            return "yellow";
        } 
    }
    else if (submittedAnswersArrayIndex < (correctAnswer - 15) || submittedAnswersArrayIndex > (correctAnswer + 15)){ 
        if (submittedAnswersArray.length < 6){
        result.innerText = "Not even close.";
        return "red";        
        } else {
        result.innerText = "Sorry you lost. The correct answer is " + correctAnswer + ".";;
        return "red";
        } 
    }
}