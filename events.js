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

        // Create a clickable link for the registration URL
        var registrationLink = document.createElement("a");
        registrationLink.href = event.registrationLink; // Set the URL
        registrationLink.textContent = "Register";
        registrationLink.target = "_blank"; // Open link in a new tab
        registrationLink.classList.add("btn", "btn-primary", "btn-sm", "mr-2"); // Add mr-2 class for margin-right

        eventDiv.appendChild(heading);
        eventDiv.appendChild(dateInfo);
        eventDiv.appendChild(timeInfo);
        eventDiv.appendChild(locationInfo);
        eventDiv.appendChild(descriptionInfo);
        eventDiv.appendChild(registrationLink); 
        eventsContainer.appendChild(eventDiv);
    });
}


// Call the displayEvents function to load and display events
displayEvents();


document.addEventListener("DOMContentLoaded", function () {
    // Assuming you have some logic to fetch events and store them in an array
    // For this example, let's assume an empty array for no events
    const events = [];

    const eventsContainer = document.getElementById("eventsContainer");
    const noEventsMessage = document.getElementById("noEventsMessage");

    if (events.length === 0) {
        noEventsMessage.style.display = "block";
        eventsContainer.style.display = "none";
    } else {
        noEventsMessage.style.display = "none";
        eventsContainer.style.display = "block";

        // Use your logic to populate the eventsContainer with events here
        // For example, you can loop through the events array and create HTML elements to display them.
    }
});

