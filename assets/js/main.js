document.addEventListener("DOMContentLoaded", function () {

    /* =========================
       AUTO NAVBAR LOGIN SYSTEM
    ========================== */

    const navActions = document.querySelector(".nav-actions");

    const currentUser = localStorage.getItem("currentUser");
    const users = JSON.parse(localStorage.getItem("users")) || [];

    if (currentUser && navActions) {

        const user = users.find(u => u.email === currentUser);

        if (user) {

            navActions.innerHTML = "";

            const accountBtn = document.createElement("a");
            accountBtn.className = "login-btn";

            if (user.role === "admin") {
                accountBtn.href = "admin.html";
                accountBtn.innerHTML = `<i class="fas fa-user-shield"></i> Admin Panel`;
            } else {
                accountBtn.href = "account.html";
                accountBtn.innerHTML = `<i class="fas fa-user"></i> My Account`;
            }

            const logoutBtn = document.createElement("a");
            logoutBtn.href = "#";
            logoutBtn.className = "login-btn";
            logoutBtn.style.marginLeft = "10px";
            logoutBtn.innerHTML = `<i class="fas fa-sign-out-alt"></i> Logout`;

            logoutBtn.addEventListener("click", function (e) {
                e.preventDefault();
                localStorage.removeItem("currentUser");
                window.location.reload();
            });

            navActions.appendChild(accountBtn);
            navActions.appendChild(logoutBtn);
        }
    }


    /* =========================
       SIMPLE AI CHATBOT
    ========================== */

    const chatbotHTML = `
        <div class="ai-chatbot">
            <button class="chat-toggle-btn" id="chatToggleBtn">
                <i class="fas fa-comments"></i>
            </button>

            <div class="chat-window" id="chatWindow">
                <div class="chat-header">
                    <strong>Emery Assistant</strong>
                </div>

                <div class="chat-messages" id="chatMessages">
                    <div>Hi 👋 How can we help you today?</div>
                </div>

                <div class="chat-input-container">
                    <input type="text" class="chat-input" id="chatInput" placeholder="Type a message..." />
                    <button class="chat-send-btn" id="chatSendBtn">
                        <i class="fas fa-paper-plane"></i>
                    </button>
                </div>
            </div>
        </div>
    `;

    document.body.insertAdjacentHTML("beforeend", chatbotHTML);

    const toggleBtn = document.getElementById("chatToggleBtn");
    const chatWindow = document.getElementById("chatWindow");
    const sendBtn = document.getElementById("chatSendBtn");
    const chatInput = document.getElementById("chatInput");
    const chatMessages = document.getElementById("chatMessages");

    toggleBtn.addEventListener("click", function () {
        chatWindow.classList.toggle("open");
    });

    sendBtn.addEventListener("click", sendMessage);

    chatInput.addEventListener("keydown", function (e) {
        if (e.key === "Enter") {
            e.preventDefault();
            sendMessage();
        }
    });

    function sendMessage() {

        const message = chatInput.value.trim();
        if (!message) return;

        const userMsg = document.createElement("div");
        userMsg.style.marginBottom = "8px";
        userMsg.textContent = "You: " + message;
        chatMessages.appendChild(userMsg);

        chatInput.value = "";

        setTimeout(function () {

            const botMsg = document.createElement("div");
            botMsg.style.marginBottom = "8px";

            if (message.toLowerCase().includes("service")) {
                botMsg.textContent = "We offer Website Design & Online Business Management.";
            } else if (message.toLowerCase().includes("price")) {
                botMsg.textContent = "Pricing depends on your needs. Book a free discovery call!";
            } else if (message.toLowerCase().includes("call")) {
                botMsg.textContent = "Call +1 (847) 942-7399 or click Book Discovery Call.";
            } else {
                botMsg.textContent = "Email emerycampexp@gmail.com and we'll assist you!";
            }

            chatMessages.appendChild(botMsg);
            chatMessages.scrollTop = chatMessages.scrollHeight;

        }, 700);
    }

});
