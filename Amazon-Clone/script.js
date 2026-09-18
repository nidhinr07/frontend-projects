let cartCount = 0;

function addToCart(productName) {
    cartCount++;

    document.getElementById("cartCount").textContent = cartCount;

    alert(productName + " added to cart!");
}


function searchProducts() {

    const searchValue =
        document.getElementById("searchInput").value.toLowerCase();

    const products =
        document.querySelectorAll(".product-card");

    let found = false;

    products.forEach(function(product) {

        const productName =
            product.dataset.name.toLowerCase();

        if (productName.includes(searchValue)) {
            product.style.display = "block";
            found = true;
        } else {
            product.style.display = "none";
        }

    });

    const noProducts =
        document.getElementById("noProducts");

    if (found) {
        noProducts.style.display = "none";
    } else {
        noProducts.style.display = "block";
    }
}


function scrollToProducts() {

    document.getElementById("products").scrollIntoView({
        behavior: "smooth"
    });

}


function scrollToTop() {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}
