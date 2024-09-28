
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
    
    while(true) {
        let user_input = prompt("Enter Rock, Paper, Scissors");

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

function playRound(humanChoice, computerChoice, humanScore, computerScore) {
    if (humanChoice === "Rock") {
        if (computerChoice === "Rock"){
            humanScore++;
            computerScore++;
            tie();
            showScore(humanScore, computerScore);
        }
        else if (computerChoice === "Paper") {
            computerScore++;
            lose(humanChoice, computerChoice);
            showScore(humanScore, computerScore);
        }
        else {
            humanScore++;
            win(humanChoice, computerChoice);
            showScore(humanScore, computerScore);
        }
    }
    if (humanChoice === "Paper") {
        if (computerChoice === "Rock"){
            humanScore++;
            win(humanChoice, computerChoice);
            showScore(humanScore, computerScore);
        }
        else if (computerChoice === "Paper") {
            computerScore++;
            humanScore++;
            tie();
            showScore(humanScore, computerScore);
        }
        else {
            computerScore++;
            lose(humanChoice, computerChoice);
            showScore(humanScore, computerScore);
        }
    }
    if (humanChoice === "Scissors") {
        if (computerChoice === "Rock"){
            computerScore++;
            lose(humanChoice, computerChoice);
            showScore(humanScore, computerScore);
        }
        else if (computerChoice === "Paper") {
            humanScore++;
            win(humanChoice, computerChoice);
            showScore(humanScore, computerScore);
        }
        else {
            humanScore++;
            computerScore++;
            tie();
            showScore(humanScore, computerScore);
        }
    }
    return [humanScore, computerScore];
}



/*  inside playGame()
        declare score
        call function 5 times
        display score
*/
function playGame(){
    let humanScore = 0;
    let computerScore = 0;
    for (let i = 1; i <= 5; i++) {
        let result = playRound(getHumanChoice(), getComputerChoice(), humanScore, computerScore)
        humanScore = result[0];
        computerScore = result[1];
    }
}

playGame();

function tie(){
    console.log("Its a Tie!");
}
function lose(human,computer){
    console.log(`You lose! ${computer} beats ${human}.`);
}
function win(human, computer){
    console.log(`You win! ${human} beats ${computer}.`);
}
function showScore(human, computer) {
    console.log(`You: ${human} , Computer: ${computer}.`);
}
