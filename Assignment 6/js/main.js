// HANDLE THE LOAD EVENT OF THE WINDOW
document.addEventListener("DOMContentLoaded", () => {
    // HANDLE THE CLICK EVENT FOR THE BTNADDEMPLOYEE BUTTON
    let btn = window.document.getElementById("btnAddEmployee");
    // OPEN THE ADD-EMPLOYEE.HTML PAGE WITHIN A POPUP
    btn.addEventListener("click", function () {     
        // SET WIDTH AND HEIGHT VARIABLES TO 800 x 700
        let width = 800
        let height = 700
        myWindow = window.open('add-employee.html', 'popup', 'resizeable=yes')
        // RESIZE THE POPUP TO THE SET WIDTH AND HEIGHT
        myWindow.resizeTo(width,height)
        // MOVE THE POPUP TO THE MIDDLE OF THE SCREEN
        var left = (screen.width - width) / 2;
        var top = (screen.width - height) / 4;
        myWindow.moveTo(left, top)
    });
});

