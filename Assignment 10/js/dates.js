//STEP 1
function daysInMonth(month, year){
    return new Date (year, month, 0).getDate();
}
var month = prompt("Please enter a month in numeric value. For example, October is 10.")
console.log(daysInMonth(month, 2023));
//STEP 2
function monthName(year, month, day){
    var date = new Date(year, month, day);
    var monthy = date.toLocaleString('default', { month: 'long'} );
    console.log(monthy)
}
var year = prompt("Please enter a year.");
var month = prompt("Please enter a month in numeric value. For example, March is 03.");
var day = prompt("Please enter a day in numeric value.");
month = month - 1 
monthName(year, month, day)
//STEP 3
var datePrompt = new Date(prompt('Please enter a date like 2023-01-15'));
var currentDay = datePrompt.getDay();
function weekendChecker(){
    var dateIsWeekend = (currentDay === 6) || (currentDay === 0);
    if(dateIsWeekend == true) {
        console.log("The given date " + datePrompt + " is a weekend.")
    } else {
        console.log("The given date " + datePrompt + " is not a weekend.")
    }
}
weekendChecker()
//STEP 4
function yesterdayCheck(){
    var d = new Date()
    d.setDate(d.getDate() - 1)
    console.log(d.toLocaleString('default', { weekday: 'long'}))
}
yesterdayCheck()
//STEP 5
function dateFirstLetter(){
    var d = new Date()
    d = d.toLocaleString('default', { weekday: 'long'})
    console.log(d.charAt(0))
}
dateFirstLetter()