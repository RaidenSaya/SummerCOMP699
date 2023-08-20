//STEP 1
function positiveNumber() {
    var num = prompt("Please enter a number.");
    var posNum
    if (num < 0) {
        posNum = num * -1
        console.log(posNum)
    } else (console.log(num))
}
positiveNumber();
//STEP 2
function numRound(){
    var num = prompt("Please enter a number with a decimal like 3.14");
    console.log(Math.round(num));
}
numRound();
//STEP 3
function numRoundDown(){
    var num = prompt("Please enter another number with a decimal like 3.14");
    console.log(Math.floor(num))
}
numRoundDown();
//STEP 4
function smallLargeNum(){
    var num = prompt("Please enter 5 numbers separated by commas like 1,2,3,4,5.")
    numArray = num.split(",");
    console.log(Math.max(...numArray) + " is the largest number. " + Math.min(...numArray) + " is the smallest number.");
}
smallLargeNum();
//STEP 5
function squareRoot(){
    var num = prompt("Please enter a number.");
    console.log(Math.sqrt(num));
}
squareRoot();