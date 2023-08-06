// GET ADD EMPLOYEE FORM AND EMPLOYEE TABLE FROM THE DOM
let form = document.getElementById('addForm');
let table = document.getElementById('employees');

// SET A COUNT VARIABLE TO DISPLAY NEXT TO EMPLOYEES HEADER
let empCount = document.getElementById('empCount');
let empCounter = 0
empCount.innerHTML = `(${empCounter})`

// ADD EMPLOYEE
form.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION
    e.preventDefault()
    // GET THE VALUES FROM THE TEXT BOXES
    const id = document.getElementById("id").value
    const name = document.getElementById("name").value
    const ext = document.getElementById("extension").value
    const email = document.getElementById("email").value
    const department = document.getElementById("department").value
        
    // INSERT A NEW ROW AT THE END OF THE EMPLOYEES TABLE
    let row = table.insertRow(-1);
    // INSERT A CELL FOR EACH ITEM WITHIN THE NEW ROW
	let idCell = row.insertCell(0);
    let nameCell = row.insertCell(1);
    let extCell = row.insertCell(2);
    let emailCell = row.insertCell(3);
    let departmentCell = row.insertCell(4);
    let deleteCell = row.insertCell(5);
    // APPEND THE TEXT VALUES AS TEXT NODES WITHIN THE CELLS
    let idText = document.createTextNode(id);
    let nameText = document.createTextNode(name);
    let extText = document.createTextNode(ext);
    let emailText = document.createTextNode(email);
    let departmentText = document.createTextNode(department);

    idCell.appendChild(idText);
    nameCell.appendChild(nameText);
    extCell.appendChild(extText);
    emailCell.appendChild(emailText);
    departmentCell.appendChild(departmentText);
    // CREATE THE DELETE BUTTON
    let deleteBtn = document.createElement('button')
    deleteBtn.className = 'btn btn-danger btn-small float-right delete'
    let rowDelete = document.createTextNode('X')
    deleteBtn.appendChild(rowDelete)
    deleteCell.appendChild(deleteBtn)
    // RESET THE FORM
    document.querySelector('#id').value = ''
    document.querySelector('#name').value = ''
    document.querySelector('#extension').value = ''
    document.querySelector('#email').value = ''
    document.querySelector('#department').value = 'Administrative'
    // SET FOCUS BACK TO THE ID TEXT BOX
    document.getElementById('id').focus();
    // INCREMENENT THE NUMBER OF EMPLOYEES IN THE TABLE
    empCounter++
    empCount.innerHTML = `(${empCounter})`
});

// DELETE EMPLOYEE
table.addEventListener('click', (e) => {
    // CHECK TO SEE IF THE .delete CLASS EXISTS ON LI
    if (e.target.classList.contains('delete')) {
        // CONFIRM THE DELETION
        if (confirm('Are you sure you want to delete this task?')) {
            // SELECT THE PARENT LI AND THEN DELETE IT
           let rowIndex = e.target.closest('tr').rowIndex;
            table.deleteRow(rowIndex);
            empCounter--
            empCount.innerHTML = `(${empCounter})`
        }
    }
})