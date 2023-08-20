//STEP 1
function nameLength(){
    var userName = prompt("Please enter your name.");
    var strLength = userName.length;
    alert(strLength);
}
nameLength();
//STEP 2
function nameIndex(){
    var userName = prompt("Please enter your name.");
    var numValue = prompt("Please enter a number");
    var numIndex =  userName.charAt(numValue);
    alert(numIndex);
}
nameIndex();
//STEP 3
function fullName(){
    var firstName = prompt("Please enter your first name.");
    var lastName = prompt("Please enter your last name.")
    alert("Your name is: " + firstName + " " + lastName);
}
fullName();
//STEP 4
function strSearch(){
    var phrase = "The quick brown fox jumps over the lazy dog"
    alert(phrase.search("fox"))
}
strSearch();
//STEP 5
function strIndex(){
    var phrase = "The quick brown fox jumps over the lazy fox"
    alert(phrase.lastIndexOf("fox"))
}
strIndex();
//STEP 6
function strReplace(){
    var phrase = "The quick brown fox jumped over the lazy dog"
    var firstName = prompt("Please enter your first name.");
    var newPhrase = phrase.replace("the lazy dog", firstName);
    alert(newPhrase)
}
strReplace();
//STEP 7
function wordFinder(){
    var phrase = "The quick brown fox jumped over the lazy dog"
    var wordPrompt = prompt("Please enter a word.")
    var indexPrompt = phrase.search(wordPrompt)
    if (indexPrompt > -1) {
        alert("Congrats! The word " + wordPrompt + " was found.")
    } else (alert("That word was not found."))
}
wordFinder();
//STEP 8
function strSlicer(){
    var old_string = "The quick brown fox jumped over the lazy dog"
    var new_string = old_string.slice(32, 44)
    alert(new_string.toUpperCase())
}
strSlicer();
//STEP 9
function strTrimmer(){
    var phrase = "            THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG          "
    alert(phrase.trim());
}
strTrimmer();
//STEP 10
function strCapital(){
    var phrase = "the quick brown fox jumps over the lazy dog"
    alert(phrase.charAt(0).toUpperCase() + phrase.slice(1))
}
strCapital();