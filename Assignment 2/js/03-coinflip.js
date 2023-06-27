let randomNum = Math.round(Math.random());
let coinFlip = randomNum;


var heads;


if (coinFlip == 0){
    heads = true
} else {
    heads = false
}
console.log(coinFlip,heads);
let choice = prompt("Heads or Tails?");
console.log(choice.toUpperCase());
if (choice.toUpperCase() == "HEADS" && heads == true){
    alert("The flip was heads and you chose heads... you win!");
} else if (choice.toUpperCase() == "HEADS" && heads == false){
    alert("The flip was tails and you chose heads... you lose!");
} else if (choice.toUpperCase() == "TAILS" && heads == true){
    alert("The flip was tails and you chose heads... you lose!");
} else if (choice.toUpperCase() == "TAILS" && heads == false){
    alert("The flip was tails and you chose tails... you win!");
}
