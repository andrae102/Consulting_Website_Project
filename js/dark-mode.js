class DarkMode {
    constructor() {
        this.init();
    }

    init() {
        this.loadPreference();
        this.createToggle();
    }

    createToggle() {
        const toggle = document.createElement('button');
        toggle.innerText = 'Toggle Dark Mode';
        toggle.onclick = () => this.toggleDarkMode();
        document.body.appendChild(toggle);
    }

    loadPreference() {
        if (localStorage.getItem('darkMode') === 'enabled') {
            this.enableDarkMode();
        }
    }

    toggleDarkMode() {
        if (localStorage.getItem('darkMode') === 'enabled') {
            this.disableDarkMode();
        } else {
            this.enableDarkMode();
        }
    }

    enableDarkMode() {
        document.body.classList.add('dark-mode');
        localStorage.setItem('darkMode', 'enabled');
    }

    disableDarkMode() {
        document.body.classList.remove('dark-mode');
        localStorage.setItem('darkMode', null);
    }

    watchSystemTheme() {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        mediaQuery.addListener(e => {
            if (e.matches) {
                this.enableDarkMode();
            } else {
                this.disableDarkMode();
            }
        });
        this.loadPreference(); // Apply preference on load
    }
}

// Initialize the DarkMode functionality
const darkMode = new DarkMode();
darkMode.watchSystemTheme();
