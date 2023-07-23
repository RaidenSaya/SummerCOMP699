document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("empForm").addEventListener("submit", function (event) {
        event.preventDefault();

        const id = document.getElementById("id").value
        const name = document.getElementById("name").value
        const ext = document.getElementById("ext").value
        const email = document.getElementById("email").value
        const department = document.getElementById("department").value
        
        console.log("ID: ", id);
        console.log("Name: ", name);
        console.log("Extension: ", ext);
        console.log("Email: ", email);
        console.log("Department: ", department);   
})});