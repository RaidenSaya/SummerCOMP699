let languageCode = prompt("Please enter one of the following language codes: es, de ,en or fr.");
if (languageCode == "en"){
    console.log("Hello World translated in English is: Hello World");
} else if (languageCode == "fr") {
    console.log("Hello World translated in French is: Bonjour le monde");
} else if (languageCode == "de") {
        console.log("Hello World translated in Dutch is: Hallo Mensen");
} else if (languageCode == "es") {
        console.log("Hello World translated in Spanish is: Hola Mundo");
} else {console.log("Hello World translated in English is: Hello World");
}