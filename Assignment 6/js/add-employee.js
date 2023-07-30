// CREATE A HELPER FUNCTION TO RETRIEVE THE HTML ELEMENTS FROM THE DOM
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("empForm").addEventListener("submit", (event) => {
        // HANDLE THE SUBMISSION OF THE FORM AND THEN IMMEDIATELY PREVENT THE SUBMISSION
        event.preventDefault();
        // CREATE 5 VARIABLES FOR ID, NAME, EXT, EMAIL, AND DEPT
        // SET THOSE VARIABLES TO WHATEVER THE USER ENTERS INTO THE FORM ELEMENTS
        const id = document.getElementById("id").value
        const name = document.getElementById("name").value
        const ext = document.getElementById("extension").value
        const email = document.getElementById("email").value
        const department = document.getElementById("department").value
       // GET THE LOGINDETAILS OUTPUT ELEMENT FROM THE PARENT PAGE
        let parentoutput = window.opener.document.getElementById('loginDetails');
        // SET THE TEXT OF THE LOGINDETAILS ELEMENT TO THE ABOVE SET VARIABLES
        let text = `ID: ${id}<br>Name: ${name}<br>Extension: ${ext}<br>Email: ${email}<br>Department: ${department}`
        // THE DATA SHOULD SHOW ON THE INDEX.HTML PAGE
        parentoutput.innerHTML = text
        // CLOSE THE POPUP
        window.close();
        })
   // HANDLE THE CANCEL BUTTON. WHEN THE USER CLICKS THIS BUTTON, CLOSE THE WINDOW    
    let cancelButton = document.getElementById("cancel");
    cancelButton.addEventListener("click", function(event) {
        window.close();
    });
});

