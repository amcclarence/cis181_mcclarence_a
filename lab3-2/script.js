/*
    Applied Lab 3-2
    Ducky World JavaScript
*/

/*
    Displays a welcome message.
*/
function welcomeCustomer() {
    alert("Welcome to Ducky World!");
}

/*
    Prompts the user for their name and displays a greeting.
*/
function greetCustomer() {
    let userName = prompt("Please enter your name:");
    alert("Hello, " + userName + "!");
}

/*
    Calculates and displays the total number of ducks ordered.
*/
function calculateTotalDucks() {
    let yellow = Number(document.getElementById("yellow").value) || 0;
    let pink = Number(document.getElementById("pink").value) || 0;
    let blue = Number(document.getElementById("blue").value) || 0;
    let astro = Number(document.getElementById("astro").value) || 0;

    let sum = yellow + pink + blue + astro;

    alert("Total ducks ordered: " + sum);
}

/*
    Validates the order before submitting the form.
    Return true to allow submission.
    Return false to prevent submission.
*/
function validateOrder() {
    let yellow = Number(document.getElementById("yellow").value) || 0;
    let pink = Number(document.getElementById("pink").value) || 0;
    let blue = Number(document.getElementById("blue").value) || 0;
    let astro = Number(document.getElementById("astro").value) || 0;

    let totalQuantity = yellow + pink + blue + astro;

    if (totalQuantity === 0) {
        alert("Please select at least one duck.");
        return false;
    }

    let isConfirmed = confirm("Are you sure you want to place this order?");
    
    if (!isConfirmed) {
        return false;
    }

    return true;
}