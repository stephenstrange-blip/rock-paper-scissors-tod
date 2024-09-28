let humanScore = 0;
let computerScore = 0;


/*  if random_num is less than 5, choose rock
    if random_num is greater than 5, choose paper,
    If neither, choose Scissors*/

function getComputerChoice() {
    //Math.floor rounds the random generated decimal multiplied to 10//
    let random_num = Math.floor(Math.random() *10);

    if (random_num < 5){
        console.log("Rock", random_num);
        return "Rock";
    }
    else if (random_num > 5){
        console.log("Paper", random_num);
        return "Paper";
    }
    else {
        console.log("Scissors", random_num);
        return "Scissors";
    }
}

function getHumanChoice() {
    
    while(true) {
        let user_input = prompt("Enter Rock, Paper, Scissors");

        if (user_input.toLowerCase().trim() === "rock") {
            return "Rock";
            // break;
        }
        else if (user_input.toLowerCase().trim() === "paper") {
            return "Paper"
            // break;
        }
        else if (user_input.toLowerCase().trim() === "scissors") {
            return "Scissors"
            // break;
        }
        else {
            console.log("Invalid response. Try again.")
            continue;
        }
    }
}
getHumanChoice();
function playRound(humanChoice, computerChoice) {
    return;
}

