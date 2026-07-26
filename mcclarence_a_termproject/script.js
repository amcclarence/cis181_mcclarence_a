// Custom JavaScript function to toggle Dark/Light Mode
function toggleDarkMode() {
    var body = document.body;
    body.classList.toggle("dark-mode");
}

// confirm() dialog box for digital resume download
function confirmDownload(event) {
    var userConfirmed = confirm("Are you sure you want to download this PDF?");
    if (!userConfirmed) {
        event.preventDefault(); 
    }
}

// alert() dialog for form usability (Contact Page)
function validateForm(event) {
    var nameInput = document.getElementById("name").value;
    if (nameInput === "") {
        alert("Please enter your name before submitting the form.");
        event.preventDefault();  
    }
}