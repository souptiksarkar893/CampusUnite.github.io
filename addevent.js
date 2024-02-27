function postEvent() {
    // Get event details from the form
    var eventName = document.getElementById("eventName").value;
    var date = document.getElementById("date").value;
    var time = document.getElementById("time").value;
    var location = document.getElementById("location").value;
    var description = document.getElementById("description").value;
    var registrationLink = document.getElementById("registrationLink").value;

    // Validate if the registrationLink is a valid URL
    if (!isValidURL(registrationLink)) {
        alert('Please enter a valid Registration Link URL.');
        return; // Stop execution if the URL is not valid
    }

    // Check if any of the other fields is empty
    if (eventName === '' || date === '' || time === '' || location === '' || description === '') {
        alert('Please fill in all the required fields before posting the event.');
        return; // Stop execution if any required field is empty
    }

    // Create a new event object
    var newEvent = {
        eventName: eventName,
        date: date,
        time: time,
        location: location,
        description: description,
        registrationLink: registrationLink
    };

    // Store the event data in local storage (for simplicity)
    var events = JSON.parse(localStorage.getItem("events")) || [];
    events.push(newEvent);
    localStorage.setItem("events", JSON.stringify(events));

    // Redirect to events.html after posting the event
    window.location.href = "events.html";
}

// Function to validate if a string is a valid URL
function isValidURL(string) {
    var pattern = new RegExp('^(https?:\\/\\/)?' + // Protocol (optional)
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // Domain names (e.g., www.example.com)
        '((\\d{1,3}\\.){3}\\d{1,3}))' + // IP addresses (e.g., 192.168.0.1)
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // Port and path (optional)
        '(\\?[;&a-z\\d%_.~+=-]*)?' + // Query string (optional)
        '(\\#[-a-z\\d_]*)?$', 'i');
    return !!pattern.test(string);
}
