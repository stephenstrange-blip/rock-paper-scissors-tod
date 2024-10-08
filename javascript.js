
//helper functions
function tie(){
    return "Its a Tie!";
}
function lose(human,computer){
    return `You lose! ${computer} beats ${human}.`
}
function win(human, computer){
    return `You win! ${human} beats ${computer}.`
}
function showScore(human, computer) {
    return `You: ${human} , Computer: ${computer}.`
}

/*  if random_num is less than 5, choose rock
    if random_num is greater than 5, choose paper,
    If neither, choose Scissors*/

function getComputerChoice() {
    //Math.floor rounds the random generated decimal multiplied to 10//
    let random_num = Math.floor(Math.random() *10);

    if (random_num < 5){  
        return "Rock";
    }
    else if (random_num > 5){       
        return "Paper";
    }
    else {
        return "Scissors";
    }
}

function getHumanChoice() {
    //user should put valid responses, otherwise the loop 
    //continues indefinitely
    while(true) {
        let user_input = prompt("Enter Rock, Paper, Scissors");
        
        // trim beginning and end whitespaces
        if (user_input.toLowerCase().trim() === "rock") {
            return "Rock";
        }
        else if (user_input.toLowerCase().trim() === "paper") {
            return "Paper";
        }
        else if (user_input.toLowerCase().trim() === "scissors") {
            return "Scissors";
        }
        else {
            console.log("Invalid response. Try again.")
            continue;
        }
    }
}

/*
    If human plays rock
        if computer plays rock, plus 1 to both
        if computer play paper, plus 1 to computer
        if computer play scissors, plus 1 to human
    if human plays paper
        if computer plays rock, plus 1 to human
        if computer play paper, plus 1 to both
        if computer play scissors, plus 1 to computer
    if human plays scissors
        if computer plays rock, plus 1 to computer
        if computer play paper, plus 1 to human
        if computer play scissors, plus 1 to both
*/

function playRound(humanChoice, humanScore, computerScore) {
    // const span = document.querySelector("span");
    let computerChoice = getComputerChoice();
    // let humanChoice = getHumanChoice();
    if (humanChoice === "Rock") {
        if (computerChoice === "Rock"){
            humanScore++;
            computerScore++;
            //display messages are called
            span.textContent = tie() + "</br>;" + showScore(humanScore, computerScore);
        }
        else if (computerChoice === "Paper") {
            computerScore++;
            //helper function is called based on human perspective
            span.textContent = lose(humanChoice, computerChoice) + "</br>" + showScore(humanScore, computerScore);
        }
        else {
            humanScore++;
            span.textContent = win(humanChoice, computerChoice) + "</br>" + showScore(humanScore, computerScore);
        }
    }
    if (humanChoice === "Paper") {
        if (computerChoice === "Rock"){
            humanScore++;
            span.textContent = win(humanChoice, computerChoice) + "</br>" + showScore(humanScore, computerScore);
        }
        else if (computerChoice === "Paper") {
            computerScore++;
            humanScore++;
            span.textContent = tie() + "</br>" + showScore(humanScore, computerScore);
        }
        else {
            computerScore++;
            span.textContent = lose(humanChoice, computerChoice) + "</br>" + showScore(humanScore, computerScore);
        }
    }
    if (humanChoice === "Scissors") {
        if (computerChoice === "Rock"){
            computerScore++;
            span.textContent = lose(humanChoice, computerChoice) + "</br>" + showScore(humanScore, computerScore);
        }
        else if (computerChoice === "Paper") {
            humanScore++;
            span.textContent = win(humanChoice, computerChoice) + "</br>" + showScore(humanScore, computerScore);
        }
        else {
            humanScore++;
            computerScore++;
            span.textContent = `${tie()} </br> ${showScore(humanScore, computerScore)}`;
        }
    }
    return [humanScore, computerScore];
}

let humanScore = 0;
let computerScore = 0

const btns = document.querySelectorAll("button");
const span = document.querySelector("span");

btns.forEach( function (btn) {
    btn.addEventListener("click", () => {
        // call every round on every click
        const result = playRound(btn.textContent, humanScore, computerScore);
        // update score every click
        humanScore = result[0];
        computerScore = result[1];
        // game ends when either reaches a score of 5
        if ((humanScore === 5) || (computerScore === 5)) {
            span.textContent = "Game ends";
            // reset the score
            humanScore = 0;
            computerScore = 0;
            return;
        }
    });

}
);



