let table = document.getElementById("table");
let btn = document.getElementById("add-btn");

btn.addEventListener("click", function () {
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let email = document.getElementById("email").value;
    let gpa = document.getElementById("gpa").value;
    let degree = document.getElementById("degree").value;

    if (name && age && email && gpa && degree) {
        let row = table.insertRow();
        
        let cell = row.insertCell();
        cell.innerHTML = table.rows.length - 1; // Display row number
        
        cell = row.insertCell();
        cell.innerHTML = name;
        
        cell = row.insertCell();
        cell.innerHTML = age;
        
        cell = row.insertCell();
        cell.innerHTML = email;
        
        cell = row.insertCell();
        cell.innerHTML = gpa;
        
        cell = row.insertCell();
        cell.innerHTML = degree;
        
        cell = row.insertCell();
        cell.innerHTML = `<button class="btn btn-warning" onclick="editRow(this)"><i class="fa-regular fa-pen-to-square"></i></button>`;
        cell.innerHTML += `<button class="btn btn-danger" onclick="deleteRow(this)"><i class="fa-solid fa-trash"></i></button>`;
        
        clearInputFields();
    } else {
        alert("Please fill in all the fields.");
    }
});

function deleteRow(button) {
    let row = button.parentNode.parentNode;
    table.deleteRow(row.rowIndex);
}

function editRow(button) {
    let row = button.parentNode.parentNode;
    let cells = row.cells;
    document.getElementById("add-btn").innerHTML = "Edit Student";
    document.getElementById("add-btn").style.backgroundColor = "#ffc107";

    document.getElementById("name").value = cells[1].innerHTML;
    document.getElementById("age").value = cells[2].innerHTML;
    document.getElementById("email").value = cells[3].innerHTML;
    document.getElementById("gpa").value = cells[4].innerHTML;
    document.getElementById("degree").value = cells[5].innerHTML;
    
    table.deleteRow(row.rowIndex);

    document.getElementById("add-btn").addEventListener("click", function () {
        document.getElementById("add-btn").innerHTML = "Add Student";
        document.getElementById("add-btn").style.backgroundColor = "#fff";
});
}

function clearInputFields() {
    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
    document.getElementById("email").value = "";
    document.getElementById("gpa").value = "";
    document.getElementById("degree").value = "";
}
