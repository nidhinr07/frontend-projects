const heartButtons = document.querySelectorAll(".heart-btn");
const categoryButtons = document.querySelectorAll(".category");
const searchButton = document.getElementById("searchButton");


// Like Property

heartButtons.forEach(function (button) {

    button.addEventListener("click", function (event) {

        event.stopPropagation();

        const icon = button.querySelector("i");

        if (button.classList.contains("liked")) {

            button.classList.remove("liked");

            icon.classList.remove("fa-solid");
            icon.classList.add("fa-regular");

        } else {

            button.classList.add("liked");

            icon.classList.remove("fa-regular");
            icon.classList.add("fa-solid");

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

    });

});


// Search Button

searchButton.addEventListener("click", function () {

    alert("Search functionality is for practice only.");

});
