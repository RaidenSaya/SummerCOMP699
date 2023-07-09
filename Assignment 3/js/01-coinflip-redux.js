var coinflip
let choice = prompt("How many coins would you like to flip?");

for ( let i = 1; i<= Number(choice) ; i++) {
    let randomNum = Math.round(Math.random());
    coinFlip = randomNum;
    if (coinFlip == 0){
        console.log("Heads");
    } else (console.log("Tails"));
}