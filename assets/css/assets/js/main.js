document.addEventListener("DOMContentLoaded", function () {

    /* ===============================
       LOGIN BUTTON UPDATE
    =============================== */

    if (localStorage.getItem("userLoggedIn") === "true") {
        const userData = JSON.parse(localStorage.getItem("userData"));
        const signupBtn = document.getElementById("signupBtn");

        if (signupBtn && userData) {
            signupBtn.innerHTML = `<i class="fas fa-user"></i> ${userData.name}`;
            signupBtn.href = "account.html";
        }
    }

    /* ===============================
       LEAD FORM HANDLER
    =============================== */

    const leadForm = document.getElementById("leadForm");
    if (leadForm) {
        leadForm.addEventListener("submit", function (e) {
            e.preventDefault();
            alert("Thank you! We'll send the guide to your email.");
            leadForm.reset();
        });
    }

    /* ===============================
       ADVANCED AI CHATBOT
    =============================== */

    const chatbotHTML = `
        <div class="ai-chatbot">
            <button class="chat-toggle">
                <i class="fas fa-comments"></i>
            </button>

            <div class="chat-box">
                <div class="chat-header">
                    <h3>Emery AI Assistant</h3>
                    <button class="chat-close"><i class="fas fa-times"></i></button>
                </div>

                <div class="chat-messages"></div>

                <div class="chat-input-area">
                    <input type="text" placeholder="Ask us anything..." />
                    <button><i class="fas fa-paper-plane"></i></button>
                </div>
            </div>
        </div>
    `;

    document.getElementById("aiChatbot").innerHTML = chatbotHTML;

    const toggleBtn = document.querySelector(".chat-toggle");
    const chatBox = document.querySelector(".chat-box");
    const closeBtn = document.querySelector(".chat-close");
    const sendBtn = document.querySelector(".chat-input-area button");
    const input = document.querySelector(".chat-input-area input");
    const messages = document.querySelector(".chat-messages");

    toggleBtn.addEventListener("click", () => {
        chatBox.classList.toggle("active");
    });

    closeBtn.addEventListener("click", () => {
        chatBox.classList.remove("active");
    });

    function addMessage(text, sender) {
        const message = document.createElement("div");
        message.className = "chat-message " + sender;
        message.innerHTML = `<div>${text}</div>`;
        messages.appendChild(message);
        messages.scrollTop = messages.scrollHeight;
    }

    function botResponse(message) {
        message = message.toLowerCase();

        if (message.includes("price") || message.includes("cost")) {
            return "Pricing depends on your project needs. Book a free discovery call and we'll create a custom quote for you.";
        }

        if (message.includes("service")) {
            return "We offer Website Design and Online Business Management services tailored to growing businesses.";
        }

        if (message.includes("call") || message.includes("book")) {
            return "You can book a discovery call directly through our WhatsApp booking link on the homepage.";
        }

        return "Thank you for reaching out! Our team will be happy to assist you. You can also email us at emerycampexp@gmail.com.";
    }

    function sendMessage() {
        const text = input.value.trim();
        if (!text) return;

        addMessage(text, "user");
        input.value = "";

        setTimeout(() => {
            addMessage(botResponse(text), "bot");
        }, 700);
    }

    sendBtn.addEventListener("click", sendMessage);

    input.addEventListener("keypress", function (e) {
        if (e.key === "Enter") {
            sendMessage();
        }
    });

});
