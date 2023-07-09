// Global variables
let futureValue
let investment
let rate
let years

// Collect the values from the user
while (isNaN(investment)){
    investment = parseFloat(prompt("Enter investment amount as xxxx.xx"))
}
do{
    rate = parseFloat(prompt("Enter interest rate as xx.x"));
} while (isNaN(rate) || (rate < 0 || rate > 6));

do {
    years = parseFloat(prompt("Enter the number of years you plan on investing this money"))
} while (isNaN(years) || (years < 1 || years > 30));

// Calculate future value
futureValue = investment
for (let i = 0; i < years; i++) {
    futureValue = futureValue + (futureValue * rate / 100)
}

// Display results
document.write(`Investment amount : $${investment.toFixed(2)} <br>`)
document.write(`Interest rate: ${rate.toFixed(2)} %<br>`)
document.write(`Years: ${years} <br>`)
document.write(`Future value: $${futureValue.toFixed(2)} <br>`)