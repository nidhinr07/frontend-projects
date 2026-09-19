// Create Post

function createPost() {

    const input = document.getElementById("postInput");

    const text = input.value.trim();

    if (text === "") {
        alert("Please write something before posting.");
        return;
    }

    const feed = document.querySelector(".feed");

    const post = document.createElement("article");

    post.className = "post";

    post.innerHTML = `
        <div class="post-header">

            <div class="post-avatar">N</div>

            <div>
                <h3>Nidhin</h3>
                <p>Python Full Stack Developer</p>
                <span>Just now • 🌐</span>
            </div>

            <i class="fa-solid fa-ellipsis post-menu"></i>

        </div>

        <p class="post-text">
            ${text}
        </p>

        <div class="post-stats">
            <span>👍 0</span>
            <span>0 comments</span>
        </div>

        <div class="post-buttons">

            <button onclick="likePost(this)">
                <i class="fa-regular fa-thumbs-up"></i>
                Like
            </button>

            <button>
                <i class="fa-regular fa-comment"></i>
                Comment
            </button>

            <button>
                <i class="fa-solid fa-share"></i>
                Share
            </button>

            <button>
                <i class="fa-regular fa-paper-plane"></i>
                Send
            </button>

        </div>
    `;

    const sortBar = document.querySelector(".sort-bar");

    feed.insertBefore(post, sortBar.nextSibling);

    input.value = "";

}


// Like Button

function likePost(button) {

    button.classList.toggle("liked");

    const icon = button.querySelector("i");

    if (button.classList.contains("liked")) {

        icon.classList.remove("fa-regular");
        icon.classList.add("fa-solid");

    } else {

        icon.classList.remove("fa-solid");
        icon.classList.add("fa-regular");

    }

}


// Search

document
    .getElementById("searchInput")
    .addEventListener("input", function () {

        const searchText = this.value.toLowerCase();

        const posts = document.querySelectorAll(".post");

        posts.forEach(function (post) {

            const content = post.innerText.toLowerCase();

            if (content.includes(searchText)) {
                post.style.display = "block";
            } else {
                post.style.display = "none";
            }

        });

    });


// Connect Buttons

const connectButtons =
    document.querySelectorAll(".person button");

connectButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        if (button.textContent === "Connect") {

            button.textContent = "Pending";
            button.style.color = "#555";
            button.style.borderColor = "#777";

        } else {

            button.textContent = "Connect";
            button.style.color = "#0a66c2";
            button.style.borderColor = "#0a66c2";

        }

    });

});
