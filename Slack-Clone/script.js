const messageForm = document.getElementById("messageForm");
const messageInput = document.getElementById("messageInput");
const chatMessages = document.getElementById("chatMessages");

messageForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const messageText = messageInput.value.trim();

    if (messageText === "") {
        return;
    }

    const message = document.createElement("article");
    message.className = "message";

    message.innerHTML = `
        <div class="avatar nidhin">N</div>

        <div class="message-content">
            <div class="message-info">
                <strong>Nidhin</strong>
                <span>Just now</span>
            </div>

            <p>${messageText}</p>
        </div>
    `;

    chatMessages.appendChild(message);

    messageInput.value = "";

    chatMessages.scrollTop = chatMessages.scrollHeight;
});


const channels = document.querySelectorAll(".channel");
const channelTitle = document.querySelector(".chat-title h2");
const channelDescription = document.querySelector(".chat-title p");
const messagePlaceholder = document.getElementById("messageInput");

channels.forEach(function (channel) {
    channel.addEventListener("click", function (event) {
        event.preventDefault();

        channels.forEach(function (item) {
            item.classList.remove("active-channel");
        });

        channel.classList.add("active-channel");

        const channelName = channel.textContent.trim();

        if (channelName.startsWith("#")) {
            const name = channelName.substring(1).trim();

            channelTitle.textContent = name;
            channelDescription.textContent = "Team conversations";
            messagePlaceholder.placeholder = `Message #${name}`;
        }
    });
});
