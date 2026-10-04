const searchInput = document.getElementById("searchInput");
const pinCards = document.querySelectorAll(".pin-card");
const categoryButtons = document.querySelectorAll(".category");
const saveButtons = document.querySelectorAll(".save-button");


// Search Pins

searchInput.addEventListener("input", function () {

    const searchText = searchInput.value.toLowerCase();

    pinCards.forEach(function (card) {

        const title = card.getAttribute("data-title").toLowerCase();

        if (title.includes(searchText)) {
            card.style.display = "inline-block";
        } else {
            card.style.display = "none";
        }

    });

});


// Category Selection

categoryButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        categoryButtons.forEach(function (item) {
            item.classList.remove("active");
        });

        button.classList.add("active");

        const category = button.textContent.toLowerCase();

        pinCards.forEach(function (card) {

            const title = card.getAttribute("data-title").toLowerCase();

            if (category === "all" || title.includes(category)) {
                card.style.display = "inline-block";
            } else {
                card.style.display = "none";
            }

        });

    });

});


// Save Buttons

saveButtons.forEach(function (button) {

    button.addEventListener("click", function (event) {

        event.stopPropagation();

        if (button.textContent === "Save") {
            button.textContent = "Saved";
        } else {
            button.textContent = "Save";
        }

    });

});
