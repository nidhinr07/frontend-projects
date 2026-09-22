const searchInput = document.getElementById("searchInput");
const repoCards = document.querySelectorAll(".repo-card");
const contributionGrid = document.getElementById("contributionGrid");


// Repository Search

searchInput.addEventListener("input", function () {

    const searchValue = searchInput.value.toLowerCase();

    repoCards.forEach(function (repo) {

        const repoName = repo
            .querySelector(".repo-title a")
            .textContent
            .toLowerCase();

        if (repoName.includes(searchValue)) {
            repo.style.display = "block";
        } else {
            repo.style.display = "none";
        }

    });

});


// Contribution Graph

for (let i = 0; i < 96; i++) {

    const day = document.createElement("div");

    day.classList.add("day");

    const randomNumber = Math.floor(Math.random() * 4);

    if (randomNumber === 1) {
        day.classList.add("active");
    }

    if (randomNumber === 2) {
        day.classList.add("medium");
    }

    if (randomNumber === 3) {
        day.classList.add("high");
    }

    contributionGrid.appendChild(day);
}


// Edit Profile Button

const editButton = document.querySelector(".edit-btn");

editButton.addEventListener("click", function () {
    alert("Edit profile feature is for practice only.");
});
