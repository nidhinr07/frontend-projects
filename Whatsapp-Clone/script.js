const messageForm = document.getElementById("messageForm");
const messageInput = document.getElementById("messageInput");
const messages = document.getElementById("messages");

const chatItems = document.querySelectorAll(".chat-item");
const contactName = document.getElementById("contactName");
const searchInput = document.getElementById("searchInput");


// Send Message

messageForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const messageText = messageInput.value.trim();

    if (messageText === "") {
        return;
    }

    const message = document.createElement("div");
    message.classList.add("message", "sent");

    const text = document.createElement("p");
    text.textContent = messageText;

    const time = document.createElement("span");

    const currentTime = new Date();

    time.textContent = currentTime.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit"
    });

    message.appendChild(text);
    message.appendChild(time);

    messages.appendChild(message);

    messageInput.value = "";

    messages.scrollTop = messages.scrollHeight;
});


// Select Chat

chatItems.forEach(function (chat) {

    chat.addEventListener("click", function () {

        chatItems.forEach(function (item) {
            item.classList.remove("active");
        });

        chat.classList.add("active");

        const name = chat.getAttribute("data-name");

        contactName.textContent = name;
    });

});


// Search Chats

searchInput.addEventListener("input", function () {

    const searchText = searchInput.value.toLowerCase();

    chatItems.forEach(function (chat) {

        const name = chat.getAttribute("data-name").toLowerCase();

        if (name.includes(searchText)) {
            chat.style.display = "flex";
        } else {
            chat.style.display = "none";
        }

    });

});
