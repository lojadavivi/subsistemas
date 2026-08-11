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
let calculatorInitializationPromise = null;
let lastRemoteConfigSyncAt = 0;
const REMOTE_CONFIG_SYNC_INTERVAL_MS = 30000;
const MODE_INPUT_IDS = ["Manual", "ValorLiq", "PctLiq"];
let selectedMode = "manual";

function normalizarNumeroDoInput(value) {
    let valor = String(value || "").trim();
    if (!valor) return NaN;

    valor = valor
        .replace(/R\$\s*/gi, "")
        .replace(/\s+/g, "");

    if (valor.includes(".") && valor.includes(",")) {
        valor = valor.replace(/\./g, "").replace(/,/g, ".");
    } else {
        valor = valor.replace(/,/g, ".");
    }

    const numero = Number(valor);
    return Number.isFinite(numero) ? numero : NaN;
}

function definirStatusPlanilha(state, message) {
    const statusEl = document.getElementById("sheet-sync-status");
    if (!statusEl) return;

    statusEl.dataset.state = state;

    const msgEl = statusEl.querySelector(".status-message");
    if (msgEl) {
        msgEl.textContent = message;
        return;
    }

    statusEl.innerHTML = `<span class="status-dot" aria-hidden="true"></span><strong>Planilha:</strong><span class="status-message">${message}</span>`;
}

function formatarDataHora(value) {
    if (!value) return "indisponivel";

    const date = new Date(value);
    if (!Number.isNaN(date.getTime())) {
        return date.toLocaleString("pt-BR");
    }

    return String(value);
}

function atualizarDisplayStatusPlanilha() {
    const status = window.calculatorConfigStatus || {};

    if (!status.ok) {
        const erro = status.erro ? String(status.erro) : "Aguardando sincronizacao.";
        if (/aguardando/i.test(erro)) {
            definirStatusPlanilha("loading", "aguardando sincronizacao...");
        } else {
            definirStatusPlanilha("error", `${erro} Clique em "Atualizar planilha" para tentar novamente.`);
        }
        return;
    }

    const sincronizado = formatarDataHora(status.sincronizadoEm);
    const detalhesAlteracao = status.planilhaAtualizadaEm
        ? ` | ultima alteracao do arquivo: ${formatarDataHora(status.planilhaAtualizadaEm)}`
        : "";

    definirStatusPlanilha("ok", `sincronizado em ${sincronizado}${detalhesAlteracao}`);
}

function atualizarFeedbackCalculo(tipo, mensagem) {
    const feedbackEl = document.getElementById("calc-feedback");
    if (!feedbackEl) return;

    feedbackEl.dataset.state = tipo;
    feedbackEl.textContent = mensagem;
}

function limparErrosCampos() {
    document.querySelectorAll(".field.is-invalid").forEach((field) => {
        field.classList.remove("is-invalid");
    });
}

function marcarCampoComoInvalido(fieldId) {
    const input = document.getElementById(fieldId);
    if (!input) return;
    const field = input.closest(".field");
    if (field) {
        field.classList.add("is-invalid");
    }
}

function obterValorNumericoCampo(fieldId) {
    const el = document.getElementById(fieldId);
    if (!el) return 0;
    const numero = normalizarNumeroDoInput(el.value);
    return Number.isFinite(numero) ? numero : 0;
}

function atualizarDestaqueModo() {
    const map = {
        Manual: "manual",
        ValorLiq: "valorliquido",
        PctLiq: "percentual",
    };

    let activeMode = "";
    MODE_INPUT_IDS.forEach((inputId) => {
        const valor = obterValorNumericoCampo(inputId);
        if (valor > 0 && !activeMode) {
            activeMode = map[inputId];
        }
    });

    document.querySelectorAll(".mode-card").forEach((card) => {
        const isActive = activeMode && card.dataset.mode === activeMode;
        card.classList.toggle("is-active", isActive);
    });
}

function parseCurrencyNumberFromText(text) {
    if (!text) return NaN;

    const normalized = String(text)
        .replace(/R\$/gi, "")
        .replace(/\s+/g, "")
        .replace(/\./g, "")
        .replace(/,/g, ".")
        .replace(/[^0-9.-]/g, "");

    const value = Number(normalized);
    return Number.isFinite(value) ? value : NaN;
}

function atualizarResumoPrincipal() {
    const heroValueEl = document.getElementById("result-hero-value");
    const heroMetaEl = document.getElementById("result-hero-meta");
    if (!heroValueEl || !heroMetaEl) return;

    const modeSuffixMap = {
        manual: "Manual",
        valorliquido: "ValorLiq",
        percentual: "PctLiq",
    };

    const modeLabelMap = {
        manual: "Manual",
        valorliquido: "Valor líquido",
        percentual: "Percentual líquido",
    };

    const marketplaces = [
        { id: "Presencial", label: "Presencial" },
        { id: "Amazon", label: "Amazon" },
        { id: "CasasBahia", label: "Casas Bahia" },
        { id: "Magalu", label: "Magalu" },
        { id: "MLC", label: "Mercado Livre Clássico" },
        { id: "MLP", label: "Mercado Livre Premium" },
        { id: "Olist", label: "Olist" },
        { id: "RD", label: "RD" },
        { id: "Shein", label: "Shein" },
        { id: "Shopee", label: "Shopee" },
        { id: "Temu", label: "Temu" },
        { id: "TikTok", label: "TikTok" },
    ];

    const suffix = modeSuffixMap[selectedMode] || "Manual";
    const rows = marketplaces.map((item) => {
        const el = document.getElementById(`resultado_${item.id}_${suffix}`);
        const text = (el?.textContent || "").trim();
        return {
            label: item.label,
            text,
            value: parseCurrencyNumberFromText(text),
        };
    }).filter((item) => Number.isFinite(item.value));

    if (!rows.length) {
        heroValueEl.textContent = "Aguardando dados...";
        heroMetaEl.textContent = "Preencha os campos e escolha um modo para calcular.";
        return;
    }

    const compareFn = selectedMode === "manual"
        ? (a, b) => b.value - a.value
        : (a, b) => a.value - b.value;

    const best = [...rows].sort(compareFn)[0];
    heroValueEl.textContent = best.text;
    heroMetaEl.textContent = `${modeLabelMap[selectedMode]} | destaque atual: ${best.label}`;
}

function limparResultadosTabela() {
    document.querySelectorAll('td[id^="resultado_"]').forEach((celula) => {
        celula.textContent = "";
        celula.removeAttribute("aria-label");
    });
}

function validarEntradasParaCalculo() {
    limparErrosCampos();

    const cnpjEl = document.getElementById("cnpj");
    const pesoEl = document.getElementById("peso");
    const custoEl = document.getElementById("custo");

    const cnpj = cnpjEl ? cnpjEl.value : "Selecione";
    const peso = pesoEl ? pesoEl.value : "Selecione";
    const custo = obterValorNumericoCampo("custo");

    if (cnpj === "Selecione") {
        marcarCampoComoInvalido("cnpj");
        return { ok: false, message: "Selecione o CNPJ para iniciar." };
    }

    if (peso === "Selecione") {
        marcarCampoComoInvalido("peso");
        return { ok: false, message: "Selecione a faixa de peso do produto." };
    }

    if (!Number.isFinite(custo) || custo <= 0) {
        if (custoEl) marcarCampoComoInvalido("custo");
        return { ok: false, message: "Informe um custo maior que zero." };
    }

    const modosComValor = MODE_INPUT_IDS.filter((id) => obterValorNumericoCampo(id) > 0);
    if (modosComValor.length === 0) {
        MODE_INPUT_IDS.forEach((id) => marcarCampoComoInvalido(id));
        return { ok: false, message: "Preencha ao menos um modo de cálculo para gerar resultados." };
    }

    if (modosComValor.length === 1) {
        if (modosComValor[0] === "Manual") selectedMode = "manual";
        if (modosComValor[0] === "ValorLiq") selectedMode = "valorliquido";
        if (modosComValor[0] === "PctLiq") selectedMode = "percentual";
    }

    return { ok: true, message: "Calculo pronto. Resultados atualizados automaticamente." };
}

function limparCalculoCompleto() {
    const cnpj = document.getElementById("cnpj");
    const nivel = document.getElementById("nivel");
    const peso = document.getElementById("peso");
    const custo = document.getElementById("custo");
    const manual = document.getElementById("Manual");
    const valorLiq = document.getElementById("ValorLiq");
    const pctLiq = document.getElementById("PctLiq");

    if (cnpj) cnpj.value = "Selecione";
    if (nivel) nivel.value = "5";
    if (peso) peso.value = "Selecione";
    if (custo) custo.value = "";
    if (manual) manual.value = "";
    if (valorLiq) valorLiq.value = "";
    if (pctLiq) pctLiq.value = "";

    inicializarCampos();
    limparErrosCampos();
    atualizarDestaqueModo();
    alterarBackgroundComBaseEmCnpj();
    limparResultadosTabela();
    atualizarResumoPrincipal();
    atualizarFeedbackCalculo("info", "Campos limpos. Preencha novamente para calcular.");
}

function prepararTabelaResponsiva() {
    const table = document.querySelector(".tabela_calc");
    if (!table) return;

    const headers = Array.from(table.querySelectorAll("thead th")).map((header) => {
        return (header.textContent || "").trim();
    });

    table.querySelectorAll("tbody tr").forEach((row) => {
        const marketplaceName = (row.querySelector("th")?.textContent || "").trim();
        row.querySelectorAll("td").forEach((td, index) => {
            const columnName = headers[index + 1] || "Resultado";
            td.setAttribute("data-label", columnName);
            td.setAttribute("data-marketplace", marketplaceName);
        });
    });
}

function aplicarMotionFluent() {
    document.body.classList.add("motion-ready");

    document.querySelectorAll(".calc-main .panel").forEach((panel, index) => {
        panel.style.setProperty("--stagger-delay", `${90 + index * 85}ms`);
    });

    document.querySelectorAll(".tabela_calc tbody tr").forEach((row, index) => {
        row.style.setProperty("--stagger-delay", `${120 + index * 26}ms`);
    });
}

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
    void initializeApplication();
}

async function aguardarConfiguracaoCalculadora() {
    const readyPromise = window.calculatorConfigReady;
    if (!readyPromise || typeof readyPromise.then !== "function") {
        atualizarDisplayStatusPlanilha();
        return;
    }

    definirStatusPlanilha("loading", "sincronizando dados da planilha...");
    await readyPromise;
    atualizarDisplayStatusPlanilha();
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
        return Promise.resolve();
    }

    if (calculatorInitializationPromise) {
        return calculatorInitializationPromise;
    }

    calculatorInitializationPromise = (async () => {
        await aguardarConfiguracaoCalculadora();

        calculatorInitialized = true;

        const toggleButton = document.getElementById("toggle-dark-mode");
        if (toggleButton) {
            toggleButton.addEventListener("click", () => applyTheme(false));
        }

        applyTheme(true);
        inicializarCampos();
        prepararTabelaResponsiva();
        aplicarMotionFluent();
        bindCalculatorEvents();
        alterarBackgroundComBaseEmCnpj();
        atualizarDestaqueModo();
        agendarAjusteTextoMarketplace();
        configurarAcoesPlanilha();
        atualizarDisplayStatusPlanilha();
        atualizarResumoPrincipal();
        atualizarFeedbackCalculo("info", "Selecione CNPJ e peso para iniciar o calculo.");
    })().catch((error) => {
        console.error("Falha ao carregar configuracao da calculadora:", error);

        const loginError = document.getElementById("login-error");
        if (loginError) {
            loginError.textContent = "Nao foi possivel carregar a planilha publica. Verifique o link/compartilhamento e recarregue a pagina.";
        }

        atualizarDisplayStatusPlanilha();
    }).finally(() => {
        calculatorInitializationPromise = null;
    });

    return calculatorInitializationPromise;
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
            limparErrosCampos();

            if (id === "cnpj") {
                alterarBackgroundComBaseEmCnpj();
            }

            if (MODE_INPUT_IDS.includes(id)) {
                if (id === "Manual") selectedMode = "manual";
                if (id === "ValorLiq") selectedMode = "valorliquido";
                if (id === "PctLiq") selectedMode = "percentual";
                atualizarDestaqueModo();
            }

            executarCalculoSeguro();
        });
    });
}

async function sincronizarVariaveisRemotasSeNecessario() {
    const recarregar = window.recarregarVariaveisCalculadora;
    if (typeof recarregar !== "function") {
        return;
    }

    const now = Date.now();
    if (now - lastRemoteConfigSyncAt < REMOTE_CONFIG_SYNC_INTERVAL_MS) {
        return;
    }

    definirStatusPlanilha("loading", "sincronizando dados da planilha...");
    await recarregar();
    lastRemoteConfigSyncAt = Date.now();
    atualizarDisplayStatusPlanilha();
}

async function executarCalculoSeguro() {
    const validacao = validarEntradasParaCalculo();
    if (!validacao.ok) {
        limparResultadosTabela();
        atualizarFeedbackCalculo("error", validacao.message);
        return;
    }

    try {
        await sincronizarVariaveisRemotasSeNecessario();
        calcular();
        atualizarDestaqueModo();
        atualizarResumoPrincipal();
        atualizarFeedbackCalculo("success", validacao.message);
    } catch (error) {
        console.error("Falha ao executar calculo:", error);
        atualizarDisplayStatusPlanilha();
        atualizarFeedbackCalculo("error", "Nao foi possivel atualizar os resultados agora. Tente novamente.");
    }
}

function configurarAcoesPlanilha() {
    const syncButton = document.getElementById("sync-sheet-now");
    const clearButton = document.getElementById("clear-calculation");

    if (syncButton && syncButton.dataset.bound !== "true") {
        syncButton.dataset.bound = "true";
        syncButton.addEventListener("click", async () => {
            const recarregar = window.recarregarVariaveisCalculadora;
            if (typeof recarregar !== "function") {
                return;
            }

            const originalText = syncButton.textContent;
            syncButton.disabled = true;
            syncButton.textContent = "Atualizando...";
            definirStatusPlanilha("loading", "sincronizando dados da planilha...");

            try {
                await recarregar();
                lastRemoteConfigSyncAt = Date.now();
                atualizarDisplayStatusPlanilha();
                await executarCalculoSeguro();
            } catch (error) {
                console.error("Falha ao atualizar planilha manualmente:", error);
                atualizarDisplayStatusPlanilha();
                atualizarFeedbackCalculo("error", "Falha ao atualizar planilha. Verifique o link e tente novamente.");
            } finally {
                syncButton.disabled = false;
                syncButton.textContent = originalText || "Atualizar planilha";
            }
        });
    }

    if (!clearButton || clearButton.dataset.bound === "true") {
        return;
    }

    clearButton.dataset.bound = "true";
    clearButton.addEventListener("click", () => {
        limparCalculoCompleto();
    });
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
    const isCalculatorPage = Boolean(document.getElementById("login-overlay"));

    if (!isCalculatorPage) {
        applyTheme(true);
        const toggleButton = document.getElementById("toggle-dark-mode");
        if (toggleButton && toggleButton.dataset.bound !== "true") {
            toggleButton.dataset.bound = "true";
            toggleButton.addEventListener("click", () => applyTheme(false));
        }
        document.body.classList.add("motion-ready");
        return;
    }

    if (logoutButton) {
        logoutButton.addEventListener("click", logoutApplication);
    }

    window.addEventListener("resize", agendarAjusteTextoMarketplace);

    const storedAccessMode = getStoredAccessMode();

    if (storedAccessMode) {
        setAccessState(true, storedAccessMode === "remembered");
        void initializeApplication();
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

    if (loginUser) {
        loginUser.focus();
    }
});
