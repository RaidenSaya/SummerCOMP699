//STEP 1
function halfNumber(num){
    console.log(`Half of ${num} is ${num / 2}.`);
}
let num = prompt('Please pick a number.');
halfNumber(num);

//STEP 2
function squareNumber(num1){
    var result = num1 * num1
    console.log(`The result of squaring the number ${num1} is ${num1 * num1}`)
};
let num1 = prompt('Please pick another number.')
squareNumber(num1);

//STEP 3
function percentOf(num3, num4){
    var result = 
    console.log(`${num3} is ${(num3 / num4) * 100}\%  of ${num4}.`);
};
let num3 = prompt('Please pick a number');
let num4 = prompt('Please pick another number');
percentOf(num3, num4);
//STEP 4
function findModulus(num5, num6){;
    console.log(`${num5 % num6} is the modules of ${num6} and ${num5}.`)
};
let num5 = prompt('Please pick a number');
let num6 = prompt('Please pick another number'); 
findModulus(num5, num6);

//STEP 5
num7 = parseInt(prompt('Please enter a number'));
num8 = parseInt(prompt('Please enter a number'));
num9 = parseInt(prompt('Please enter a number'));
num10 = parseInt(prompt('Please enter a number'));
num11 = parseInt(prompt('Please enter a number'));

function sumNumber(num7, num8, num9, num10, num11){
    let base = 0
    for (let i = 0; i < arguments.length; i++) {
        base += arguments[i]
    }
    return base
};
console.log(sumNumber(num7, num8, num9, num10, num11));
