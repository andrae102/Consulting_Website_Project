
/* =========================
GLOBAL STYLES
========================= */

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Montserrat', sans-serif;
    background-color: #000;
    color: #fff;
    line-height: 1.6;
}

h1, h2, h3 {
    font-family: 'Cormorant Garamond', serif;
}

.container {
    max-width: 1100px;
    margin: auto;
    padding: 40px 20px;
}

/* =========================
NAVIGATION
========================= */

.top-banner {
    background: linear-gradient(135deg,#C19A6B,#8B7355);
    text-align: center;
    padding: 10px;
    font-size: 0.8rem;
    letter-spacing: 2px;
}

.navbar {
    background: #000;
    padding: 20px;
}

.nav-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.nav-logo {
    font-size: 1.8rem;
    text-decoration: none;
    color: #fff;
    letter-spacing: 3px;
}

.login-btn {
    border: 1px solid #C19A6B;
    padding: 8px 18px;
    border-radius: 6px;
    color: #C19A6B;
    text-decoration: none;
    font-size: 0.85rem;
}

.login-btn:hover {
    background: #C19A6B;
    color: #000;
}

/* =========================
HERO
========================= */

.hero-section {
    background: linear-gradient(135deg,#C19A6B,#8B7355);
    text-align: center;
    padding: 100px 20px;
}

.hero-title {
    font-size: clamp(2.5rem,6vw,4rem);
}

.hero-subtitle {
    margin-top: 10px;
    font-style: italic;
}

.primary-btn {
    display: inline-block;
    margin-top: 30px;
    background: #000;
    color: #fff;
    padding: 14px 30px;
    border-radius: 6px;
    text-decoration: none;
}

/* =========================
SERVICES
========================= */

.section-dark {
    background: #000;
    padding: 80px 0;
}

.section-light {
    background: #F5F1E8;
    color: #000;
    padding: 80px 0;
}

.section-title {
    text-align: center;
    margin-bottom: 40px;
    font-size: 2rem;
}

.services-grid {
    display: grid;
    gap: 30px;
}

.service-card {
    background: #111;
    padding: 30px;
    border-radius: 8px;
}

.service-card ul {
    margin: 15px 0;
}

.service-card li {
    margin-bottom: 8px;
}

/* =========================
FOOTER
========================= */

.footer {
    background: #000;
    text-align: center;
    padding: 40px 20px;
    font-size: 0.9rem;
}

/* =========================
CHATBOT
========================= */

.ai-chatbot {
    position: fixed;
    bottom: 20px;
    right: 20px;
    z-index: 9999;
}

.chat-toggle-btn {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    border: none;
    background: linear-gradient(135deg,#C19A6B,#8B7355);
    color: #fff;
    font-size: 22px;
    cursor: pointer;
}

.chat-window {
    width: 320px;
    height: 450px;
    background: #fff;
    position: fixed;
    bottom: 90px;
    right: 20px;
    border-radius: 12px;
    display: none;
    flex-direction: column;
}

.chat-window.open {
    display: flex;
}

.chat-header {
    background: #C19A6B;
    padding: 12px;
    color: #fff;
}

.chat-messages {
    flex: 1;
    padding: 10px;
    overflow-y: auto;
    font-size: 0.85rem;
    color: #000;
}

.chat-input-container {
    display: flex;
    border-top: 1px solid #ddd;
}

.chat-input {
    flex: 1;
    border: none;
    padding: 10px;
}

.chat-send-btn {
    background: #C19A6B;
    border: none;
    padding: 10px;
    color: #fff;
    cursor: pointer;
}
