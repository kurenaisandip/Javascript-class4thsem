function validateLogin() {
    // Retrieve the values entered in the form fields
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Send an AJAX request to the server to check if the credentials are valid
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "/api/login");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onload = function() {
        if (xhr.status === 200) {
            // Success: allow the user to proceed to the next page or display a success message
            window.location.href = "/dashboard";
        } else {
            // Error: display an error message or prompt the user to try again
            const error = JSON.parse(xhr.responseText);
            document.getElementById("error-message").innerHTML = error.message;
        }
    };
    xhr.send(JSON.stringify({username: username, password: password}));
}
