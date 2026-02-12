// ===============================
// CHATBOT FUNCTIONALITY
// ===============================

const chatToggle = document.getElementById("chatToggle");
const chatWindow = document.getElementById("chatWindow");
const chatMessages = document.getElementById("chatMessages");
const chatInput = document.getElementById("chatInput");

if (chatToggle) {
    chatToggle.addEventListener("click", () => {
        chatWindow.classList.toggle("open");
        chatInput.focus();
    });
}

function closeChat() {
    chatWindow.classList.remove("open");
}

function sendMessage() {
    const message = chatInput.value.trim();
    if (!message) return;

    addMessage("user", message);
    chatInput.value = "";

    setTimeout(() => {
        autoReply(message);
    }, 800);
}

function addMessage(type, text) {
    const messageDiv = document.createElement("div");
    messageDiv.classList.add("chat-message", `${type}-message`, "show");

    messageDiv.innerHTML = `
        <div class="message-avatar">
            ${type === "bot" ? "🤖" : "👤"}
        </div>
        <div class="message-content">
            <div class="message-text">${text}</div>
        </div>
    `;

    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function autoReply(userText) {
    let reply = "Thanks for reaching out! We'll get back to you shortly.";

    if (userText.toLowerCase().includes("price")) {
        reply = "Our pricing depends on your project scope. Would you like to book a discovery call?";
    }

    if (userText.toLowerCase().includes("website")) {
        reply = "We specialize in custom website design, e-commerce, and booking systems.";
    }

    addMessage("bot", reply);
}

// Allow enter key
if (chatInput) {
    chatInput.addEventListener("keypress", function (e) {
        if (e.key === "Enter") {
            e.preventDefault();
            sendMessage();
        }
    });
}
