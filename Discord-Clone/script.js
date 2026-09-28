const messageForm = document.getElementById("messageForm");
const messageInput = document.getElementById("messageInput");
const messages = document.querySelector(".messages");

messageForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const messageText = messageInput.value.trim();

    if (messageText === "") {
        return;
    }

    const message = document.createElement("article");
    message.className = "message";

    message.innerHTML = `
        <div class="message-avatar">N</div>

        <div class="message-content">
            <div class="message-header">
                <strong>Nidhin</strong>
                <small>Just now</small>
            </div>

            <p>${messageText}</p>
        </div>
    `;

    messages.appendChild(message);

    messageInput.value = "";

    messages.scrollTop = messages.scrollHeight;
});


const channels = document.querySelectorAll(".channel");

channels.forEach(function (channel) {
    channel.addEventListener("click", function (event) {
        event.preventDefault();

        channels.forEach(function (item) {
            item.classList.remove("active-channel");
        });

        channel.classList.add("active-channel");

        const channelName = channel.textContent.trim();

        document.querySelector(".channel-name strong").textContent =
            channelName.replace(/^#/, "");
    });
});
