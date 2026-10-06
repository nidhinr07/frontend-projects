const categoryButtons = document.querySelectorAll(".category");
const projectCards = document.querySelectorAll(".project-card");
const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
const noResults = document.getElementById("noResults");


// Category filtering

categoryButtons.forEach(button => {

    button.addEventListener("click", () => {

        categoryButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        const selectedCategory = button.dataset.category;

        let visibleProjects = 0;

        projectCards.forEach(card => {

            const cardCategory = card.dataset.category;

            if (
                selectedCategory === "all" ||
                cardCategory === selectedCategory
            ) {
                card.style.display = "block";
                visibleProjects++;
            } else {
                card.style.display = "none";
            }

        });

        noResults.style.display =
            visibleProjects === 0 ? "block" : "none";
    });

});


// Like buttons

const likeButtons = document.querySelectorAll(".like-btn");

likeButtons.forEach(button => {

    button.addEventListener("click", () => {

        button.classList.toggle("liked");

        if (button.classList.contains("liked")) {
            button.textContent = "♥";
        } else {
            button.textContent = "♡";
        }

    });

});


// Save buttons

const saveButtons = document.querySelectorAll(".save-btn");

saveButtons.forEach(button => {

    button.addEventListener("click", () => {

        if (button.textContent === "Save") {
            button.textContent = "Saved";
        } else {
            button.textContent = "Save";
        }

    });

});


// Search

function searchProjects() {

    const searchValue = searchInput.value
        .toLowerCase()
        .trim();

    let visibleProjects = 0;

    projectCards.forEach(card => {

        const title = card
            .querySelector("h3")
            .textContent
            .toLowerCase();

        const designer = card
            .querySelector(".project-info p")
            .textContent
            .toLowerCase();

        const category = card.dataset.category.toLowerCase();

        if (
            title.includes(searchValue) ||
            designer.includes(searchValue) ||
            category.includes(searchValue)
        ) {
            card.style.display = "block";
            visibleProjects++;
        } else {
            card.style.display = "none";
        }

    });

    noResults.style.display =
        visibleProjects === 0 ? "block" : "none";
}

searchBtn.addEventListener("click", searchProjects);

searchInput.addEventListener("keyup", event => {

    if (event.key === "Enter") {
        searchProjects();
    }

});
