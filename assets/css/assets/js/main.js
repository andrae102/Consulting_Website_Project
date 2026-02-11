document.addEventListener("DOMContentLoaded", function () {

    // =====================================
    // LOGIN BUTTON UPDATE
    // =====================================
    const signupBtn = document.getElementById("signupBtn");

    if (localStorage.getItem("userLoggedIn") === "true") {
        const userData = JSON.parse(localStorage.getItem("userData"));

        if (signupBtn && userData) {
            signupBtn.innerHTML = '<i class="fas fa-user"></i> ' + userData.name;
            signupBtn.href = "account.html";
        }
    }

    // =====================================
    // AI CHATBOT BUILD
    // =====================================

    const chatbotHTML = `
        <div class="ai-chatbot">
            <button class="chat-toggle-btn" id="chatToggleBtn">
                <i class="fas fa-comments"></i>
            </button>

            <div class="chat-window" id="chatWindow">
                <div class="chat-header">
                    <h3>Chat with Us</h3>
                    <button id="chatCloseBtn">&times;</button>
                </div>

                <div class="chat-messages" id="chatMessages">
                    <div class="bot-message">
                        Hi 👋 Welcome to Emery Campbell Consulting! How can I help you?
                    </div>
                </div>

                <div class="chat-input-container">
                    <input type="text" id="chatInput" placeholder="Type your message...">
                    <button id="chatSendBtn">Send</button>
                </div>
            </div>
        </div>
    `;

    const chatbotContainer = document.getElementById("aiChatbot");
    if (chatbotContainer) {
        chatbotContainer.innerHTML = chatbotHTML;
    }

    const toggleBtn = document.getElementById("chatToggleBtn");
    const closeBtn = document.getElementById("chatCloseBtn");
    const chatWindow = document.getElementById("chatWindow");
    const sendBtn = document.getElementById("chatSendBtn");
    const chatInput = document.getElementById("chatInput");
    const messages = document.getElementById("chatMessages");

    if (toggleBtn && chatWindow) {
        toggleBtn.addEventListener("click", function () {
            chatWindow.style.display = "flex";
        });
    }

    if (closeBtn && chatWindow) {
        closeBtn.addEventListener("click", function () {
            chatWindow.style.display = "none";
        });
    }

    function sendMessage() {
        const message = chatInput.value.trim();
        if (!message) return;

        const userMsg = document.createElement("div");
        userMsg.className = "user-message";
        userMsg.innerText = message;
        messages.appendChild(userMsg);

        chatInput.value = "";

        setTimeout(() => {
            const botMsg = document.createElement("div");
            botMsg.className = "bot-message";

            let response = "Call us at +1 (847) 942-7399 or email emerycampexp@gmail.com";

            if (message.toLowerCase().includes("service")) {
                response = "We offer Website Design and Online Business Management.";
            }

            if (message.toLowerCase().includes("price") || message.toLowerCase().includes("cost")) {
                response = "Pricing depends on your needs. Book a discovery call for a custom quote.";
            }

            if (message.toLowerCase().includes("call") || message.toLowerCase().includes("schedule")) {
                response = "Click the Discovery Call button above to schedule.";
            }

            botMsg.innerText = response;
            messages.appendChild(botMsg);
            messages.scrollTop = messages.scrollHeight;

        }, 600);
    }

    if (sendBtn && chatInput) {
        sendBtn.addEventListener("click", sendMessage);

        chatInput.addEventListener("keypress", function (e) {
            if (e.key === "Enter") {
                sendMessage();
            }
        });
    }

});
