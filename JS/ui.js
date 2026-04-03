const CNPJ_COLOR_MAP = {
    "Selecione": "var(--tabela-padrao)",
    "LOJA DA VIVI LTDA": "var(--tabela-ltda)",
    "FERREIRA PROSPERITA COSMETICOS LTDA": "var(--tabela-ferreira)",
    "RAV SHEFA DISTRIBUIDORA DE COSMETICOS LTDA": "var(--tabela-rav)",
    "VIVIANE CHRISTINA FERREIRA": "var(--tabela-viviane)"
};

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

function setGuideStepState(stepId, done, active) {
    const el = document.getElementById(stepId);
    if (!el) return;

    el.classList.toggle("is-done", !!done);
    el.classList.toggle("is-active", !done && !!active);
}

function toNumber(value) {
    if (value === undefined || value === null || value === "") return 0;
    const normalized = String(value).replace(",", ".");
    const parsed = parseFloat(normalized);
    return Number.isFinite(parsed) ? parsed : 0;
}

function updateGuidedHelp() {
    const cnpjEl = document.getElementById("cnpj");
    const pesoEl = document.getElementById("peso");
    const custoEl = document.getElementById("custo");
    const manualEl = document.getElementById("Manual");
    const valorLiqEl = document.getElementById("ValorLiq");
    const pctLiqEl = document.getElementById("PctLiq");

    const statusEl = document.getElementById("guide-status");
    const hintEl = document.getElementById("guide-hint");

    if (!cnpjEl || !pesoEl || !custoEl || !manualEl || !valorLiqEl || !pctLiqEl || !statusEl || !hintEl) {
        return;
    }

    const hasCnpj = cnpjEl.value !== "Selecione";
    const hasPeso = pesoEl.value !== "Selecione";
    const hasCusto = toNumber(custoEl.value) > 0;

    const filledModes = [
        toNumber(manualEl.value) > 0,
        toNumber(valorLiqEl.value) > 0,
        toNumber(pctLiqEl.value) > 0,
    ].filter(Boolean).length;

    const hasSingleMode = filledModes === 1;

    setGuideStepState("guide-step-cnpj", hasCnpj, !hasCnpj);
    setGuideStepState("guide-step-peso", hasPeso, hasCnpj && !hasPeso);
    setGuideStepState("guide-step-custo", hasCusto, hasCnpj && hasPeso && !hasCusto);
    setGuideStepState("guide-step-modo", hasSingleMode, hasCnpj && hasPeso && hasCusto && !hasSingleMode);

    if (!hasCnpj) {
        statusEl.textContent = "Passo atual: selecione o CNPJ para carregar as regras tributárias.";
        hintEl.textContent = "Dica: cada CNPJ aplica alíquotas diferentes no resultado final.";
        return;
    }

    if (!hasPeso) {
        statusEl.textContent = "Passo atual: selecione o peso para aplicar fretes e insumos corretos.";
        hintEl.textContent = "Dica: mudanças de peso podem alterar bastante a sugestão de preço.";
        return;
    }

    if (!hasCusto) {
        statusEl.textContent = "Passo atual: informe o custo do produto acima de zero.";
        hintEl.textContent = "Dica: custo inválido gera margem distorcida em todos os marketplaces.";
        return;
    }

    if (filledModes === 0) {
        statusEl.textContent = "Passo atual: preencha um modo de cálculo para gerar os resultados.";
        hintEl.textContent = "Dica: Manual confere um preço existente, Valor líquido define quanto receber, Percentual trabalha com margem.";
        return;
    }

    if (filledModes > 1) {
        statusEl.textContent = "Atenção: mais de um modo preenchido. Prefira manter apenas um campo de entrada.";
        hintEl.textContent = "Dica: limpar os outros modos torna a leitura da tabela mais direta.";
        return;
    }

    statusEl.textContent = "Tudo certo: parâmetros mínimos preenchidos e cálculo pronto para leitura comparativa.";
    hintEl.textContent = "Dica: troque o CNPJ para simular cenários tributários sem perder os demais dados.";
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
            updateGuidedHelp();
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

document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.getElementById("toggle-dark-mode");
    if (toggleButton) {
        toggleButton.addEventListener("click", () => applyTheme(false));
    }

    applyTheme(true);
    inicializarCampos();
    bindCalculatorEvents();
    alterarBackgroundComBaseEmCnpj();
    updateGuidedHelp();
});
