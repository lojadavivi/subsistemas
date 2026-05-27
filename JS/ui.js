const CNPJ_COLOR_MAP = {
    "Selecione": "var(--tabela-padrao)",
    "LOJA DA VIVI LTDA": "var(--tabela-ltda)",
    "FERREIRA PROSPERITA COSMETICOS LTDA": "var(--tabela-ferreira)",
    "RAV SHEFA DISTRIBUIDORA DE COSMETICOS LTDA": "var(--tabela-rav)",
    "VIVIANE CHRISTINA FERREIRA": "var(--tabela-viviane)"
};

const AUTH_STORAGE_KEYS = {
    remember: "calculatorAuthRemembered",
    session: "calculatorAuthSession",
};

const AUTH_PROFILES = [
    {
        user: String.fromCharCode(114, 101, 110, 97, 116, 111),
        pass: String.fromCharCode(111, 116, 97, 110, 101, 114),
    },
    {
        user: String.fromCharCode(118, 105, 118, 105, 97, 110, 101),
        pass: String.fromCharCode(48, 50, 49, 50),
    },
];

let calculatorInitialized = false;

function getStoredAccessMode() {
    try {
        if (localStorage.getItem(AUTH_STORAGE_KEYS.remember) === "true") {
            return "remembered";
        }

        if (sessionStorage.getItem(AUTH_STORAGE_KEYS.session) === "true") {
            return "session";
        }
    } catch (error) {
        return false;
    }

    return false;
}

function setAccessState(unlocked, remember = false) {
    const html = document.documentElement;
    const overlay = document.getElementById("login-overlay");
    const logoutButton = document.getElementById("logout-button");

    html.classList.toggle("is-authenticated", unlocked);
    html.classList.toggle("auth-locked", !unlocked);

    if (document.body) {
        document.body.classList.toggle("auth-locked", !unlocked);
    }

    if (overlay) {
        overlay.hidden = unlocked;
    }

    if (logoutButton) {
        logoutButton.hidden = !unlocked;
    }

    try {
        if (unlocked) {
            sessionStorage.setItem(AUTH_STORAGE_KEYS.session, "true");
            if (remember) {
                localStorage.setItem(AUTH_STORAGE_KEYS.remember, "true");
            } else {
                localStorage.removeItem(AUTH_STORAGE_KEYS.remember);
            }
        } else {
            sessionStorage.removeItem(AUTH_STORAGE_KEYS.session);
        }
    } catch (error) {
        // Sessão bloqueada por política do navegador; seguimos apenas com a UI.
    }
}

function credentialsAreValid(user, pass) {
    return AUTH_PROFILES.some((profile) => profile.user === user && profile.pass === pass);
}

function unlockApplication(remember = false) {
    setAccessState(true, remember);
    initializeApplication();
}

function logoutApplication() {
    try {
        localStorage.removeItem(AUTH_STORAGE_KEYS.remember);
        sessionStorage.removeItem(AUTH_STORAGE_KEYS.session);
    } catch (error) {
        // Se o storage não estiver disponível, seguimos com o estado visual.
    }

    const loginForm = document.getElementById("login-form");
    const loginUser = document.getElementById("login-user");
    const loginPassword = document.getElementById("login-password");
    const loginRemember = document.getElementById("login-remember");
    const loginError = document.getElementById("login-error");

    if (loginUser) {
        loginUser.value = "";
    }

    if (loginPassword) {
        loginPassword.value = "";
    }

    if (loginRemember) {
        loginRemember.checked = false;
    }

    if (loginError) {
        loginError.textContent = "";
    }

    if (loginForm && typeof loginForm.reset === "function") {
        loginForm.reset();
    }

    setAccessState(false, false);

    if (loginUser) {
        loginUser.focus();
    }
}

function initializeApplication() {
    if (calculatorInitialized) {
        return;
    }

    calculatorInitialized = true;

    const toggleButton = document.getElementById("toggle-dark-mode");
    if (toggleButton) {
        toggleButton.addEventListener("click", () => applyTheme(false));
    }

    applyTheme(true);
    inicializarCampos();
    bindCalculatorEvents();
    alterarBackgroundComBaseEmCnpj();
    agendarAjusteTextoMarketplace();
}

function applyTheme(initial = false) {
    const html = document.documentElement;
    const button = document.getElementById("toggle-dark-mode");
    const savedMode = localStorage.getItem("darkMode");

    const shouldBeDark = initial
        ? (savedMode ? savedMode === "enabled" : window.matchMedia("(prefers-color-scheme: dark)").matches)
        : !html.classList.contains("dark-mode");

    if (shouldBeDark) {
        html.classList.add("dark-mode");
        html.classList.remove("light-mode");
        if (button) button.textContent = "Tema claro";
    } else {
        html.classList.add("light-mode");
        html.classList.remove("dark-mode");
        if (button) button.textContent = "Tema escuro";
    }

    localStorage.setItem("darkMode", shouldBeDark ? "enabled" : "disabled");
}

function alterarBackgroundComBaseEmCnpj() {
    const cnpjSelect = document.getElementById("cnpj");
    const cnpj = cnpjSelect ? cnpjSelect.value : "Selecione";
    const color = CNPJ_COLOR_MAP[cnpj] || "var(--tabela-padrao)";

    document.documentElement.style.setProperty("--fl-cnpj-current", color);
    document.documentElement.style.setProperty("--fl-cnpj-overlay", color);

    document.querySelectorAll(".background-color-change").forEach((element) => {
        element.style.backgroundColor = color;
    });
}

function inicializarCampos() {
    const manual = document.getElementById("Manual");
    const valorLiq = document.getElementById("ValorLiq");
    const pctLiq = document.getElementById("PctLiq");

    if (manual && manual.value === "") manual.value = "0.00";
    if (valorLiq && valorLiq.value === "") valorLiq.value = "0.00";
    if (pctLiq && pctLiq.value === "") pctLiq.value = "0";
}

function bindCalculatorEvents() {
    const triggerIds = ["cnpj", "nivel", "peso", "custo", "Manual", "ValorLiq", "PctLiq"];

    triggerIds.forEach((id) => {
        const el = document.getElementById(id);
        if (!el) return;

        const eventName = el.tagName === "SELECT" ? "change" : "input";
        el.addEventListener(eventName, () => {
            if (id === "cnpj") {
                alterarBackgroundComBaseEmCnpj();
            }
            executarCalculoSeguro();
        });
    });
}

function executarCalculoSeguro() {
    const cnpj = document.getElementById("cnpj");
    const peso = document.getElementById("peso");

    if (!cnpj || !peso) return;
    if (cnpj.value === "Selecione" || peso.value === "Selecione") return;

    try {
        calcular();
    } catch (error) {
        console.error("Falha ao executar calculo:", error);
    }
}

function ajustarTextoMarketplaceUmaLinha() {
    const cells = document.querySelectorAll(".tabela_calc tbody .marketplace-cell");
    if (!cells.length) return;

    cells.forEach((cell) => {
        if (cell.clientWidth <= 0) return;

        const computed = window.getComputedStyle(cell);
        const maxSizeRem = parseFloat(computed.getPropertyValue("--marketplace-font-max")) || 0.88;
        const minSizeRem = parseFloat(computed.getPropertyValue("--marketplace-font-min")) || 0.7;

        let fontSizeRem = maxSizeRem;
        cell.style.fontSize = `${fontSizeRem}rem`;

        while (cell.scrollWidth > cell.clientWidth && fontSizeRem > minSizeRem) {
            fontSizeRem -= 0.02;
            cell.style.fontSize = `${fontSizeRem}rem`;
        }
    });
}

let resizeMarketplaceTextRaf = null;
function agendarAjusteTextoMarketplace() {
    if (resizeMarketplaceTextRaf) {
        cancelAnimationFrame(resizeMarketplaceTextRaf);
    }

    resizeMarketplaceTextRaf = requestAnimationFrame(() => {
        ajustarTextoMarketplaceUmaLinha();
        resizeMarketplaceTextRaf = null;
    });
}

document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("login-form");
    const loginUser = document.getElementById("login-user");
    const loginPassword = document.getElementById("login-password");
    const loginRemember = document.getElementById("login-remember");
    const loginError = document.getElementById("login-error");
    const logoutButton = document.getElementById("logout-button");

    const storedAccessMode = getStoredAccessMode();

    if (storedAccessMode) {
        setAccessState(true, storedAccessMode === "remembered");
        initializeApplication();
        window.addEventListener("resize", agendarAjusteTextoMarketplace);
        return;
    }

    setAccessState(false, false);

    if (loginForm) {
        loginForm.addEventListener("submit", (event) => {
            event.preventDefault();

            const user = loginUser ? loginUser.value.trim() : "";
            const pass = loginPassword ? loginPassword.value : "";
            const remember = loginRemember ? loginRemember.checked : false;

            if (!credentialsAreValid(user, pass)) {
                if (loginError) {
                    loginError.textContent = "Login ou senha inválidos.";
                }

                if (loginPassword) {
                    loginPassword.value = "";
                    loginPassword.focus();
                }

                return;
            }

            if (loginError) {
                loginError.textContent = "";
            }

            if (loginPassword) {
                loginPassword.value = "";
            }

            unlockApplication(remember);
        });
    }

    if (logoutButton) {
        logoutButton.addEventListener("click", logoutApplication);
    }

    if (loginUser) {
        loginUser.focus();
    }

    window.addEventListener("resize", agendarAjusteTextoMarketplace);
});
