// Sample user reviews data (you can replace this with actual data)
const userReviews = [];

// Function to display user reviews
function displayReviews() {
    const reviewsList = document.querySelector(".reviews-list");

    // Clear existing reviews
    reviewsList.innerHTML = "";

    // Loop through user reviews and create review elements
    userReviews.forEach((review) => {
        const reviewItem = document.createElement("div");
        reviewItem.classList.add("review-item");

        const userName = document.createElement("h3");
        userName.textContent = review.name;

        const userRating = document.createElement("div");
        userRating.classList.add("user-rating");
        userRating.textContent = `Rating: ${review.rating}`;

        const userReview = document.createElement("p");
        userReview.textContent = review.review;

        reviewItem.appendChild(userName);
        reviewItem.appendChild(userRating);
        reviewItem.appendChild(userReview);

        reviewsList.appendChild(reviewItem);
    });
}

// Handle form submission
document.getElementById("reviewForm").addEventListener("submit", function (e) {
    e.preventDefault();

    // Get user input
    const userName = document.getElementById("userName").value;
    const userRating = parseInt(document.getElementById("userRating").value);
    const userReview = document.getElementById("userReview").value;

    // Validate user input
    if (!userName || !userRating || !userReview) {
        alert("Please fill in all fields.");
        return;
    }

    // Create a new review object
    const newReview = {
        name: userName,
        rating: userRating,
        review: userReview,
    };

    // Add the new review to the userReviews array
    userReviews.push(newReview);

    // Clear form fields
    document.getElementById("userName").value = "";
    document.getElementById("userRating").value = "";
    document.getElementById("userReview").value = "";

    // Refresh the displayed reviews
    displayReviews();
});

// Call the displayReviews function to initially load reviews
displayReviews();
