/* =========================
   GLOBAL USER DATABASE
========================= */

function getUsers() {
    return JSON.parse(localStorage.getItem("users") || "[]");
}

function saveUsers(users) {
    localStorage.setItem("users", JSON.stringify(users));
}

function getCurrentUser() {
    return JSON.parse(localStorage.getItem("currentUser"));
}

function setCurrentUser(user) {
    localStorage.setItem("currentUser", JSON.stringify(user));
}

function logout() {
    localStorage.removeItem("currentUser");
    window.location.href = "index.html";
}

/* =========================
   SIGNUP LOGIC
========================= */

function handleSignup(e) {
    e.preventDefault();

    const name = document.getElementById("signupName").value.trim();
    const email = document.getElementById("signupEmail").value.trim().toLowerCase();
    const password = document.getElementById("signupPassword").value;
    const confirm = document.getElementById("signupConfirm").value;

    if (password !== confirm) {
        alert("Passwords do not match.");
        return;
    }

    let users = getUsers();

    if (users.find(u => u.email === email)) {
        alert("User already exists.");
        return;
    }

    const newUser = {
        id: Date.now(),
        name,
        email,
        role: email === "admin@emery.com" ? "admin" : "client",
        signupDate: new Date().toISOString(),
        businessInfo: {},
        projectStatus: "Pending",
        files: [],
        activity: []
    };

    users.push(newUser);
    saveUsers(users);
    setCurrentUser(newUser);

    window.location.href = newUser.role === "admin" ? "admin.html" : "account.html";
}

/* =========================
   NAVBAR AUTO SWITCH
========================= */

function updateNavbar() {
    const currentUser = getCurrentUser();
    const btn = document.getElementById("signupBtn");

    if (!btn) return;

    if (currentUser) {
        btn.textContent = currentUser.role === "admin" ? "Admin Panel" : currentUser.name;
        btn.href = currentUser.role === "admin" ? "admin.html" : "account.html";
    }
}

/* =========================
   CLIENT DASHBOARD
========================= */

function loadAccountPage() {
    const user = getCurrentUser();
    if (!user) {
        window.location.href = "index.html";
        return;
    }

    document.getElementById("clientName").textContent = user.name;
    document.getElementById("projectStatus").textContent = user.projectStatus;

    const businessBox = document.getElementById("businessInfoBox");
    if (businessBox && user.businessInfo.company) {
        businessBox.innerHTML = `
            <p><strong>Company:</strong> ${user.businessInfo.company}</p>
            <p><strong>Industry:</strong> ${user.businessInfo.industry}</p>
        `;
    }
}

function saveBusinessInfo() {
    const company = document.getElementById("companyName").value;
    const industry = document.getElementById("industry").value;

    let users = getUsers();
    let user = getCurrentUser();

    const index = users.findIndex(u => u.id === user.id);

    users[index].businessInfo = { company, industry };
    saveUsers(users);

    setCurrentUser(users[index]);
    alert("Business info updated.");
    location.reload();
}

/* =========================
   ADMIN DASHBOARD
========================= */

function loadAdminPage() {
    const user = getCurrentUser();
    if (!user || user.role !== "admin") {
        window.location.href = "index.html";
        return;
    }

    const users = getUsers();
    const table = document.getElementById("userTable");

    table.innerHTML = "";

    users.forEach(u => {
        table.innerHTML += `
            <tr>
                <td>${u.name}</td>
                <td>${u.email}</td>
                <td>${u.projectStatus}</td>
                <td>
                    <button onclick="updateStatus(${u.id})">Update Status</button>
                    <button onclick="deleteUser(${u.id})">Delete</button>
                </td>
            </tr>
        `;
    });
}

function updateStatus(id) {
    let users = getUsers();
    const index = users.findIndex(u => u.id === id);

    const newStatus = prompt("Enter new project status:");
    if (!newStatus) return;

    users[index].projectStatus = newStatus;
    saveUsers(users);
    alert("Status updated.");
    location.reload();
}

function deleteUser(id) {
    let users = getUsers();
    users = users.filter(u => u.id !== id);
    saveUsers(users);
    alert("User deleted.");
    location.reload();
}

/* =========================
   CHATBOT
========================= */

function initChatbot() {
    const chatbot = document.createElement("div");
    chatbot.className = "ai-chatbot";
    chatbot.innerHTML = `
        <button class="chat-toggle-btn" onclick="toggleChat()">💬</button>
        <div class="chat-window" id="chatWindow">
            <div class="chat-header">AI Assistant</div>
            <div class="chat-messages" id="chatMessages">
                Welcome to Emery Campbell Consulting 👋
            </div>
            <div class="chat-input-container">
                <input class="chat-input" id="chatInput">
                <button class="chat-send-btn" onclick="sendChat()">Send</button>
            </div>
        </div>
    `;
    document.body.appendChild(chatbot);
}

function toggleChat() {
    document.getElementById("chatWindow").classList.toggle("open");
}

function sendChat() {
    const input = document.getElementById("chatInput");
    const box = document.getElementById("chatMessages");

    box.innerHTML += `<div>You: ${input.value}</div>`;
    box.innerHTML += `<div>AI: Thanks! We'll respond shortly.</div>`;
    input.value = "";
}

/* =========================
   INIT
========================= */

document.addEventListener("DOMContentLoaded", function () {
    updateNavbar();

    if (document.getElementById("signupForm")) {
        document.getElementById("signupForm").addEventListener("submit", handleSignup);
    }

    if (document.getElementById("accountPage")) {
        loadAccountPage();
    }

    if (document.getElementById("adminPage")) {
        loadAdminPage();
    }

    initChatbot();
});
