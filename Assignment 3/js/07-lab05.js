// GLOBAL VARIABLES
let miles
let gallons
let mpg
let again

// Process User Feedback
do {
    miles = parseFloat(prompt("Enter miles driven"));
    gallons = parseFloat(prompt("How many gallons does your tank hold?"));
    if (!isNaN(miles) && miles > 0 && !isNaN(gallons) && gallons > 0) {
        mpg =  miles / gallons
        console.log(`Your car gets ${mpg.toFixed(2)} miles per gallon.`)
    } else {
        alert('One or both of your values in either not a number or not greater than 0')
    }
    while (true) {
        again = prompt("Do you want to run the application again? (y/n)");
        if (again === 'y' || again === 'n'){
            break;
        }
    }
} while (again === 'y');
console.log('Application has exited.')