//STEP 1
var str = prompt("Please enter a random word.");
str = str.toLowerCase();
function strSorter(str){
    var chars = str.split('').sort().join('');
    console.log(chars)
}
strSorter(str)
//STEP 2
var sentence = prompt("Please enter a sentence.")

function strUpperCase(sentence){
    var words = sentence.split(" ");

    for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].substr(1);
        
    } 
    var str = words.join(' ');
    console.log(str)
}
strUpperCase(sentence)
//STEP 3
var str = prompt("Please enter another sentence.");
function vowelCounter(str){
    var vowels = (str.toLowerCase().match(/[a,e,i,o,u]/g) || '').length
    console.log("There are " + vowels + " vowels in your sentence.");
}
vowelCounter(str);

//STEP 4
var stringLength = prompt("Please enter a random number.")

function randomString(stringLength){
    var randomString = '';
    var randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' + 'abcdefghijklmnopqrstuvwxyz0123456789'
    for (let i = 1; i < stringLength; i++) {
        let char = Math.floor(Math.random() * randomChars.length +1)
        randomString += randomChars.charAt(char)
    }
    return randomString
} 

console.log(randomString(stringLength))
//STEP 5
var countryPrompt = prompt("Please enter 3 country names separated by commas.")
function longestCountry(countryPrompt){
    var words = countryPrompt.split(", ");
    return words.sort(function (a, b) {
        return b.length - a.length;
    })[0];
    }
    
console.log(longestCountry(countryPrompt))