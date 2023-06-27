var userNumber = prompt("Please pick a number between 1-100");
userNumber = parseInt(userNumber);
var validNumber = false;
while (validNumber == false) {
    if (userNumber > 0 && userNumber <= 100){
        validNumber = true;
    } else {
        validNumber = false
        userNumber = prompt("That number is not valid. Please pick a number between 1-100");
    }
}

if (userNumber < 60) {
    console.log("You received an F");
} else if (userNumber >= 60 && userNumber <= 69){
    console.log("You received a D");
} else if (userNumber >= 70 && userNumber <= 79) {
    console.log("You received a C");
} else if (userNumber >= 80 && userNumber <= 89) {
    console.log("You received a B");
} else if (userNumber >= 90 && userNumber <= 100) {
    console.log("You received an A");
}