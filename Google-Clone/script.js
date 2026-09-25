const searchInput = document.getElementById("searchInput");

function searchGoogle() {
    const query = searchInput.value.trim();

    if (query === "") {
        alert("Please enter something to search.");
        return;
    }

    alert("Searching for: " + query);
}

function luckySearch() {
    const query = searchInput.value.trim();

    if (query === "") {
        alert("Please enter something first.");
        return;
    }

    alert("I'm Feeling Lucky: " + query);
}

searchInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        searchGoogle();
    }
});
