function validateForm() {
    var name = document.getElementById("name").value;
    var number = document.getElementById("number").value;
    var email = document.getElementById("email").value;
    var enquiry = document.getElementById("enquiry").value;

    // Simple email validation using a regular expression
    var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    var numberRegex = /^[0-9999._-]$/

    if (name === "" || number === "" || email === "" || enquiry === "") {
        alert("All fields are required. Please fill in all the fields.");
        return false;
    } else if (!email.match(emailRegex)) {
        alert("Invalid email address. Please enter a valid email.");
        return false;
    }
    else if (!number.match(numberRegex)) {
        alert("Invalid format on the field number");
        return false;
    }
     else {
        alert("Enquiry successful!");
        document.getElementById("enquiryForm").reset(); // Clear the form
        return false;
    }
}
