document.addEventListener("DOMContentLoaded", function () {
    // Array of women's health challenges
    const challenges = [
        "Balanced nutrition",
        "Regular physical activity",
        "Mental health and self-care",
        "Breast health awareness",
        "Reproductive health",
        "Heart health",
        "Bone health",
        "Stress management",
        "Cancer prevention",
        "Healthy aging",
    ];

    // Get the challenges container
    const challengesContainer = document.getElementById("challenges");

    // Populate the challenge list
    challenges.forEach(function (challenge) {
        const listItem = document.createElement("li");
        listItem.textContent = challenge;
        challengesContainer.appendChild(listItem);
    });
});
