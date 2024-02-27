function displayEvents() {
    var eventsContainer = document.getElementById("eventsContainer");
    eventsContainer.innerHTML = ""; // Clear the container

    // Retrieve events data from local storage (for simplicity)
    var events = JSON.parse(localStorage.getItem("events")) || [];

    // Loop through and display events
    events.forEach(function (event, index) {
        var eventDiv = document.createElement("div");
        eventDiv.classList.add("event", "text-center"); // Add text-center class to center-align content

        var heading = document.createElement("h3");
        heading.textContent = event.eventName;

        var dateInfo = document.createElement("p");
        dateInfo.textContent = "Date: " + event.date;

        var timeInfo = document.createElement("p");
        timeInfo.textContent = "Time: " + event.time;

        var locationInfo = document.createElement("p");
        locationInfo.textContent = "Location: " + event.location;

        var descriptionInfo = document.createElement("p");
        descriptionInfo.textContent = "Description: " + event.description;


        // Create a button to delete the event
        var deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete Event";
        deleteButton.classList.add("btn", "btn-danger", "btn-sm");
        deleteButton.onclick = function () {
            var password = prompt("Enter admin password to delete this event:");
            if (password === "321") {
                deleteEvent(index);
            } else {
                alert("Incorrect password. Event deletion canceled.");
            }
        };

        eventDiv.appendChild(heading);
        eventDiv.appendChild(dateInfo);
        eventDiv.appendChild(timeInfo);
        eventDiv.appendChild(locationInfo);
        eventDiv.appendChild(descriptionInfo);// Append the registration link
        eventDiv.appendChild(deleteButton);

        eventsContainer.appendChild(eventDiv);
    });
}

// Function to delete an event
function deleteEvent(index) {
    var events = JSON.parse(localStorage.getItem("events")) || [];
    
    if (index >= 0 && index < events.length) {
        events.splice(index, 1); // Remove the event at the specified index
        localStorage.setItem("events", JSON.stringify(events)); // Update local storage
        displayEvents(); // Refresh the event list
    }
}

// Call the displayEvents function to load and display events
displayEvents();
