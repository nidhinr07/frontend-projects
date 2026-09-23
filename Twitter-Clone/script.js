const postInput = document.getElementById("postInput");
const postButton = document.getElementById("postButton");
const postsContainer = document.getElementById("posts");


// Create New Post

postButton.addEventListener("click", function () {

    const text = postInput.value.trim();

    if (text === "") {
        alert("Please write something before posting.");
        return;
    }

    const newPost = document.createElement("article");

    newPost.className = "post";

    newPost.innerHTML = `
        <img src="https://i.pravatar.cc/50?img=12" alt="Profile">

        <div class="post-content">

            <div class="post-header">
                <strong>Nidhin</strong>
                <span>@nidhin · now</span>
            </div>

            <p>${text}</p>

            <div class="post-buttons">

                <button>
                    <i class="fa-regular fa-comment"></i>
                    <span>0</span>
                </button>

                <button>
                    <i class="fa-solid fa-retweet"></i>
                    <span>0</span>
                </button>

                <button class="like-btn">
                    <i class="fa-regular fa-heart"></i>
                    <span>0</span>
                </button>

                <button>
                    <i class="fa-solid fa-chart-simple"></i>
                    <span>0</span>
                </button>

                <button>
                    <i class="fa-regular fa-bookmark"></i>
                </button>

            </div>

        </div>
    `;

    postsContainer.prepend(newPost);

    postInput.value = "";

    addLikeButton(newPost);

});


// Like Buttons

function addLikeButton(post) {

    const likeButton = post.querySelector(".like-btn");

    likeButton.addEventListener("click", function () {

        const icon = likeButton.querySelector("i");
        const count = likeButton.querySelector("span");

        let currentCount = parseInt(count.textContent);

        if (likeButton.classList.contains("liked")) {

            likeButton.classList.remove("liked");
            icon.classList.remove("fa-solid");
            icon.classList.add("fa-regular");

            count.textContent = currentCount - 1;

        } else {

            likeButton.classList.add("liked");
            icon.classList.remove("fa-regular");
            icon.classList.add("fa-solid");

            count.textContent = currentCount + 1;
        }

    });
}


// Add Like Functionality to Existing Posts

document.querySelectorAll(".post").forEach(function (post) {
    addLikeButton(post);
});


// Follow Buttons

document.querySelectorAll(".follow-user button").forEach(function (button) {

    button.addEventListener("click", function () {

        if (button.textContent === "Follow") {
            button.textContent = "Following";
        } else {
            button.textContent = "Follow";
        }

    });

});
