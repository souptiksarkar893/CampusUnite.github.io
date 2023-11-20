function login() {
    // Get the entered password
    var password = document.getElementById("password").value;

    // Check if the password is correct (insecure for demonstration purposes)
    if (password === "123") {
        // Redirect to the admin dashboard (replace with the actual URL)
        window.location.href = "addevent.html";
    } else {
        alert("Invalid password. Please try again.");
    }
}