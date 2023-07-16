var userChoice = prompt("Rock, Paper or Scissors?");
userChoice = userChoice.toUpperCase()
var validChoice = false
while (validChoice == false) {
    if (userChoice == "ROCK" || userChoice == "PAPER" || userChoice == "SCISSORS") {
        validChoice = true
    } else {
        validChoice = false
        userChoice = prompt("That is an invalid choice. Please pick Rock, Paper or Scissors.")
        userChoice = userChoice.toUpperCase();
    }
}

var computerChoice

function randomInteger(max) {
    return Math.floor(Math.random() * max);
}
var randomChoice = randomInteger(3);
if (randomChoice == 0){
    computerChoice = "ROCK"
} else if (randomChoice == 1){
    computerChoice = "PAPER"
} else if (randomChoice == 2){
    computerChoice = "SCISSORS"
}
console.log(userChoice, computerChoice);

function playGame(userChoice, computerChoice) {
    if (userChoice ==  computerChoice){
    alert(`You both picked ${userChoice}. It's a tie!`)
    } else if (userChoice == "ROCK" && computerChoice == "PAPER"){
        alert(`${computerChoice} beats ${userChoice}. You lose!`)
    } else if (userChoice == "ROCK" && computerChoice == "SCISSORS"){
        alert(`${userChoice} beats ${computerChoice}. You win!`)
    } else if (userChoice == "PAPER" && computerChoice == "ROCK"){
        alert(`${userChoice} beats ${computerChoice}. You win!`)
    } else if (userChoice == "PAPER" && computerChoice == "SCISSORS"){
        alert(`${computerChoice} beats ${userChoice}. You lose!`)
    } else if (userChoice == "SCISSORS" && computerChoice == "ROCK"){
        alert(`${computerChoice} beats ${userChoice}. You lose!`)
    } else if (userChoice == "SCISSORS" && computerChoice == "PAPER"){
        alert(`${userChoice} beats ${computerChoice}. You win!`)
    }
}
playGame(userChoice, computerChoice)