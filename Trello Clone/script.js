const searchInput = document.getElementById("searchInput");
const addCardButtons = document.querySelectorAll(".add-card");
const addListButton = document.querySelector(".add-list");


// Search Cards

searchInput.addEventListener("input", function () {

    const searchText = searchInput.value.toLowerCase();
    const cards = document.querySelectorAll(".task-card");

    cards.forEach(function (card) {

        const title = card.querySelector("h3").textContent.toLowerCase();
        const description = card.querySelector("p").textContent.toLowerCase();

        if (
            title.includes(searchText) ||
            description.includes(searchText)
        ) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }

    });

});


// Add New Card

addCardButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const listName = button.getAttribute("data-list");

        let cardContainer;

        if (listName === "todo") {
            cardContainer = document.getElementById("todoCards");
        } else if (listName === "progress") {
            cardContainer = document.getElementById("progressCards");
        } else {
            cardContainer = document.getElementById("doneCards");
        }

        const title = prompt("Enter card title:");

        if (!title || title.trim() === "") {
            return;
        }

        const card = document.createElement("div");
        card.classList.add("task-card");

        card.innerHTML = `
            <span class="tag blue">New</span>

            <h3>${title}</h3>

            <p>New task added to the board.</p>

            <div class="card-footer">
                <span>New</span>
                <span>0</span>
            </div>
        `;

        cardContainer.appendChild(card);
    });

});


// Add New List

addListButton.addEventListener("click", function () {

    const listName = prompt("Enter list name:");

    if (!listName || listName.trim() === "") {
        return;
    }

    const list = document.createElement("div");
    list.classList.add("list");

    list.innerHTML = `
        <div class="list-header">
            <h2>${listName}</h2>
            <button>⋮</button>
        </div>

        <div class="cards"></div>

        <button class="add-card" data-list="new">
            + Add a card
        </button>
    `;

    document.querySelector(".board-content").insertBefore(
        list,
        addListButton
    );

});
