/**
 * CALCULADORA DE PREÇOS PARA MÚLTIPLOS CANAIS DE VENDA
 * =====================================================
 * 
 * Função que calcula preços finais de produtos para diferentes canais de distribuição,
 * considerando custos, taxas, comissões, fretes e margens de lucro específicos de cada plataforma.
 * 
 * DEPENDÊNCIAS: Este arquivo carrega as variáveis diretamente da planilha
 * pública do Google Sheets (CSV), sem arquivo local de variáveis.
 * 
 * CANAIS SUPORTADOS:
 * - Presencial (com envio especial para RAV SHEFA)
 * - Amazon
 * - Casas Bahia
 * - Magalu
 * - Mercado Livre (Clássico e Premium)
 * - Olist
 * - RD
 * - Shein
 * - Shopee
 * 
 * @param {HTMLElement} inputElement - Elemento HTML que acionou a função (não utilizado diretamente)
 * @returns {void} - Atualiza os elementos HTML com os resultados calculados
 */

const CALCULATOR_VARIABLE_KEYS = [
    "cnpj_LTDA", "cnpj_FERREIRA", "cnpj_VIVI", "cnpj_RAV",
    "Comissao_Presencial", "Comissao_Amazon", "Comissao_CasasBahia", "Comissao_Magalu", "Comissao_MLC", "Comissao_MLP", "Comissao_Olist", "Comissao_RD", "Comissao_Shein", "Comissao_Shopee_ATE79", "Comissao_Shopee_ACIMA79", "Comissao_Temu", "Comissao_TikTok_ATE50", "Comissao_TikTok_ACIMA50",
    "Frete_Presencial", "Frete_Amazon_ATE30", "Frete_Amazon_30a50", "Frete_Amazon_50a79", "Frete_Amazon_ACIMA79_ate300G", "Frete_Amazon_ACIMA79_300a500G", "Frete_Amazon_ACIMA79_500Ga1KG", "Frete_Amazon_ACIMA79_1a2KG", "Frete_Amazon_ACIMA79_2a5KG", "Frete_Amazon_ACIMA79_5a9KG", "Frete_Amazon_ACIMA79_9a13KG", "Frete_Amazon_ACIMA79_13a17KG", "Frete_Amazon_ACIMA79_17a23KG", "Frete_Amazon_ACIMA79_23a30KG",
    "Frete_CasasBahia_ATE69", "Frete_CasasBahia_ACIMA79_ate300G", "Frete_CasasBahia_ACIMA79_300a500G", "Frete_CasasBahia_ACIMA79_500Ga1KG", "Frete_CasasBahia_ACIMA79_1a2KG", "Frete_CasasBahia_ACIMA79_2a5KG", "Frete_CasasBahia_ACIMA79_5a9KG", "Frete_CasasBahia_ACIMA79_9a13KG", "Frete_CasasBahia_ACIMA79_13a17KG", "Frete_CasasBahia_ACIMA79_17a23KG", "Frete_CasasBahia_ACIMA79_23a30KG",
    "Frete_Magalu_ATE79", "Frete_Magalu_ACIMA79_ate300G", "Frete_Magalu_ACIMA79_300a500G", "Frete_Magalu_ACIMA79_500Ga1KG", "Frete_Magalu_ACIMA79_1a2KG", "Frete_Magalu_ACIMA79_2a5KG", "Frete_Magalu_ACIMA79_5a9KG", "Frete_Magalu_ACIMA79_9a13KG", "Frete_Magalu_ACIMA79_13a17KG", "Frete_Magalu_ACIMA79_17a23KG", "Frete_Magalu_ACIMA79_23a30KG",
    "Frete_ML_ATE79", "Frete_ML_ACIMA79_ate300G", "Frete_ML_ACIMA79_300a500G", "Frete_ML_ACIMA79_500Ga1KG", "Frete_ML_ACIMA79_1a2KG", "Frete_ML_ACIMA79_2a5KG", "Frete_ML_ACIMA79_5a9KG", "Frete_ML_ACIMA79_9a13KG", "Frete_ML_ACIMA79_13a17KG", "Frete_ML_ACIMA79_17a23KG", "Frete_ML_ACIMA79_23a30KG",
    "Frete_Olist_ATE79", "Frete_Olist_ACIMA79_ate300G", "Frete_Olist_ACIMA79_300a500G", "Frete_Olist_ACIMA79_500Ga1KG", "Frete_Olist_ACIMA79_1a2KG", "Frete_Olist_ACIMA79_2a5KG", "Frete_Olist_ACIMA79_5a9KG", "Frete_Olist_ACIMA79_9a13KG", "Frete_Olist_ACIMA79_13a17KG", "Frete_Olist_ACIMA79_17a23KG", "Frete_Olist_ACIMA79_23a30KG",
    "Frete_RD_ate300G", "Frete_RD_300a500G", "Frete_RD_500Ga1KG", "Frete_RD_1a2KG", "Frete_RD_2a5KG", "Frete_RD_5a9KG", "Frete_RD_9a13KG", "Frete_RD_13a17KG", "Frete_RD_17a23KG", "Frete_RD_23a30KG",
    "Frete_Shein_ATE49", "Frete_Shein_ACIMA49_ate300G", "Frete_Shein_ACIMA49_300a500G", "Frete_Shein_ACIMA49_500Ga1KG", "Frete_Shein_ACIMA49_1a2KG", "Frete_Shein_ACIMA49_2a5KG", "Frete_Shein_ACIMA49_5a9KG", "Frete_Shein_ACIMA49_9a13KG", "Frete_Shein_ACIMA49_13a17KG", "Frete_Shein_ACIMA49_17a23KG", "Frete_Shein_ACIMA49_23a30KG",
    "Frete_Shopee", "Frete_Temu", "FretePct_TikTok", "Frete_TikTok",
    "Nivel_Presencial", "Nivel_Amazon", "Nivel_CasasBahia_1", "Nivel_CasasBahia_2", "Nivel_CasasBahia_3", "Nivel_CasasBahia_4", "Nivel_CasasBahia_5", "Nivel_Magalu_1", "Nivel_Magalu_2", "Nivel_Magalu_3", "Nivel_Magalu_4", "Nivel_Magalu_5", "Nivel_ML_1", "Nivel_ML_2", "Nivel_ML_3", "Nivel_ML_4", "Nivel_ML_5", "Nivel_Olist_1", "Nivel_Olist_2", "Nivel_Olist_3", "Nivel_Olist_4", "Nivel_Olist_5", "Nivel_RD", "Nivel_Shein", "Nivel_Shopee", "Nivel_Temu", "Nivel_TikTok",
    "Taxa_Presencial", "Taxa_Amazon", "Taxa_CasasBahia", "Taxa_Magalu_ATE10", "Taxa_Magalu_ACIMA10", "Taxa_ML_ATE12_PCT", "Taxa_ML_ATE29", "Taxa_ML_ATE50", "Taxa_ML_ATE79", "Taxa_ML_ACIMA79", "Taxa_Olist", "Taxa_RD", "Taxa_Shein", "Taxa_Shopee_ATE79", "Taxa_Shopee_ATE99", "Taxa_Shopee_ATE199", "Taxa_Shopee_ACIMA200", "Taxa_Temu", "Taxa_TikTok_ATE50", "Taxa_TikTok_ACIMA50",
    "Custo_Insumos_ate300G", "Custo_Insumos_acima300G",
];

const CALCULATOR_VARIABLE_KEY_SET = new Set(CALCULATOR_VARIABLE_KEYS);
const PLANILHA_DATA_CHAVES = new Set([
    "PLANILHA_ULTIMA_ALTERACAO",
    "META_ULTIMA_ATUALIZACAO",
    "ULTIMA_ATUALIZACAO",
]);

function inicializarBindingsVariaveis() {
    CALCULATOR_VARIABLE_KEYS.forEach(function (name) {
        // Cria binding global (var) sem valor de negócio local.
        (0, eval)("var " + name + " = 0;");
    });
}

let CNPJ_ALIQUOTAS = {};
let FRETE_POR_PESO = {};
let NIVEL_DESCONTO = {};

const GOOGLE_SHEET_SHARE_URL = "https://docs.google.com/spreadsheets/d/18mMqatenWtyLYyV2s2pAEQRtGokApxA3/edit?usp=sharing&ouid=102644507788220176781&rtpof=true&sd=true";
const GOOGLE_SHEET_GID = "0";

function obterValorVariavel(nome, fallback = 0) {
    const valor = globalThis[nome];
    return Number.isFinite(valor) ? valor : fallback;
}

function reconstruirMapasConfiguracao() {
    CNPJ_ALIQUOTAS = {
        "LOJA DA VIVI LTDA": cnpj_LTDA,
        "FERREIRA PROSPERITA COSMETICOS LTDA": cnpj_FERREIRA,
        "RAV SHEFA DISTRIBUIDORA DE COSMETICOS LTDA": cnpj_RAV,
        "VIVIANE CHRISTINA FERREIRA": cnpj_VIVI,
    };

    const sufixoPorPeso = {
        "até 0.3kg": "ate300G",
        "0.3 a 0.5kg": "300a500G",
        "0.5 a 1kg": "500Ga1KG",
        "1 a 2kg": "1a2KG",
        "2 a 5kg": "2a5KG",
        "5 a 9kg": "5a9KG",
        "9 a 13kg": "9a13KG",
        "13 a 17kg": "13a17KG",
        "17 a 23kg": "17a23KG",
        "23 a 30kg": "23a30KG",
    };

    FRETE_POR_PESO = {};
    Object.keys(sufixoPorPeso).forEach(function (faixaPeso) {
        const sufixo = sufixoPorPeso[faixaPeso];
        FRETE_POR_PESO[faixaPeso] = {
            presencial: Frete_Presencial,
            amazon: obterValorVariavel("Frete_Amazon_ACIMA79_" + sufixo),
            casasBahia: obterValorVariavel("Frete_CasasBahia_ACIMA79_" + sufixo),
            magalu: obterValorVariavel("Frete_Magalu_ACIMA79_" + sufixo),
            mercadoLivre: obterValorVariavel("Frete_ML_ACIMA79_" + sufixo),
            olist: obterValorVariavel("Frete_Olist_ACIMA79_" + sufixo),
            rd: obterValorVariavel("Frete_RD_" + sufixo),
            shein: obterValorVariavel("Frete_Shein_ACIMA49_" + sufixo),
            shopee: Frete_Shopee,
            temu: Frete_Temu,
            tiktok: Frete_TikTok,
        };
    });

    NIVEL_DESCONTO = {
        "5": { presencial: Nivel_Presencial, amazon: Nivel_Amazon, casasBahia: Nivel_CasasBahia_5, magalu: Nivel_Magalu_5, mercadoLivre: Nivel_ML_5, olist: Nivel_Olist_5, rd: Nivel_RD, shein: Nivel_Shein, shopee: Nivel_Shopee, temu: Nivel_Temu, tiktok: Nivel_TikTok },
        "4": { presencial: Nivel_Presencial, amazon: Nivel_Amazon, casasBahia: Nivel_CasasBahia_4, magalu: Nivel_Magalu_4, mercadoLivre: Nivel_ML_4, olist: Nivel_Olist_4, rd: Nivel_RD, shein: Nivel_Shein, shopee: Nivel_Shopee, temu: Nivel_Temu, tiktok: Nivel_TikTok },
        "3": { presencial: Nivel_Presencial, amazon: Nivel_Amazon, casasBahia: Nivel_CasasBahia_3, magalu: Nivel_Magalu_3, mercadoLivre: Nivel_ML_3, olist: Nivel_Olist_3, rd: Nivel_RD, shein: Nivel_Shein, shopee: Nivel_Shopee, temu: Nivel_Temu, tiktok: Nivel_TikTok },
        "2": { presencial: Nivel_Presencial, amazon: Nivel_Amazon, casasBahia: Nivel_CasasBahia_2, magalu: Nivel_Magalu_2, mercadoLivre: Nivel_ML_2, olist: Nivel_Olist_2, rd: Nivel_RD, shein: Nivel_Shein, shopee: Nivel_Shopee, temu: Nivel_Temu, tiktok: Nivel_TikTok },
        "1": { presencial: Nivel_Presencial, amazon: Nivel_Amazon, casasBahia: Nivel_CasasBahia_1, magalu: Nivel_Magalu_1, mercadoLivre: Nivel_ML_1, olist: Nivel_Olist_1, rd: Nivel_RD, shein: Nivel_Shein, shopee: Nivel_Shopee, temu: Nivel_Temu, tiktok: Nivel_TikTok },
    };
}

function obterCustoInsumoPorPeso(peso) {
    if (peso === "até 0.3kg") {
        return Custo_Insumos_ate300G;
    }
    return Custo_Insumos_acima300G;
}

function parseCsvLine(line) {
    const values = [];
    let current = "";
    let inQuotes = false;

    for (let i = 0; i < line.length; i += 1) {
        const ch = line[i];

        if (ch === '"') {
            const next = line[i + 1];
            if (inQuotes && next === '"') {
                current += '"';
                i += 1;
            } else {
                inQuotes = !inQuotes;
            }
            continue;
        }

        if (ch === "," && !inQuotes) {
            values.push(current);
            current = "";
            continue;
        }

        current += ch;
    }

    values.push(current);
    return values;
}

function atualizarVariavelNumerica(chave, valorBruto) {
    if (!/^[A-Za-z_][A-Za-z0-9_]*$/.test(chave)) {
        return false;
    }
    if (!CALCULATOR_VARIABLE_KEY_SET.has(chave)) {
        return false;
    }

    let valorNormalizado = String(valorBruto).trim();
    if (valorNormalizado === "") {
        return false;
    }

    const isPercentual = valorNormalizado.endsWith("%");
    valorNormalizado = valorNormalizado
        .replace(/R\$\s*/gi, "")
        .replace(/\s+/g, "")
        .replace(/%$/, "");

    if (valorNormalizado.includes(".") && valorNormalizado.includes(",")) {
        valorNormalizado = valorNormalizado.replace(/\./g, "").replace(",", ".");
    } else if (valorNormalizado.includes(",")) {
        valorNormalizado = valorNormalizado.replace(",", ".");
    }

    let numero = Number(valorNormalizado);
    if (isPercentual && Number.isFinite(numero)) {
        numero = numero / 100;
    }

    if (!Number.isFinite(numero)) {
        return false;
    }

    globalThis[chave] = numero;
    return true;
}

function aplicarCsvDeVariaveis(csvText) {
    const lines = csvText.split(/\r?\n/).filter(Boolean);
    if (lines.length < 2) {
        throw new Error("CSV de variaveis vazio ou invalido.");
    }

    let headerLineIndex = -1;
    let header = [];
    for (let i = 0; i < Math.min(lines.length, 20); i += 1) {
        const probe = parseCsvLine(lines[i]).map(function (item) {
            return item.trim().toLowerCase();
        });
        if (probe.indexOf("chave") !== -1 && probe.indexOf("valor") !== -1) {
            headerLineIndex = i;
            header = probe;
            break;
        }
    }

    if (headerLineIndex === -1) {
        throw new Error("Cabecalho com colunas chave/valor nao encontrado no CSV.");
    }

    const idxChave = header.indexOf("chave");
    const idxValor = header.indexOf("valor");

    if (idxChave === -1 || idxValor === -1) {
        throw new Error("CSV precisa conter colunas chave e valor.");
    }

    let atualizadas = 0;
    let planilhaAtualizadaEmValor = "";
    for (let i = headerLineIndex + 1; i < lines.length; i += 1) {
        const cols = parseCsvLine(lines[i]);
        const chave = (cols[idxChave] || "").trim();
        const valor = cols[idxValor] || "";

        if (PLANILHA_DATA_CHAVES.has(chave.toUpperCase())) {
            planilhaAtualizadaEmValor = String(valor).trim();
            continue;
        }

        if (atualizarVariavelNumerica(chave, valor)) {
            atualizadas += 1;
        }
    }

    if (atualizadas === 0) {
        throw new Error("Nenhuma variavel valida foi atualizada a partir do CSV.");
    }

    reconstruirMapasConfiguracao();
    return {
        atualizadas: atualizadas,
        planilhaAtualizadaEmValor: planilhaAtualizadaEmValor,
    };
}

async function carregarVariaveisDaUrl(url) {
    const response = await fetch(url, { cache: "no-store" });
    if (!response.ok) {
        throw new Error("Falha ao buscar planilha: " + response.status + " em " + url);
    }
    const csvText = await response.text();
    const parsed = aplicarCsvDeVariaveis(csvText);

    const lastModifiedHeader = response.headers.get("last-modified");
    const dateHeader = response.headers.get("date");
    const etagHeader = response.headers.get("etag");

    return {
        url: url,
        atualizadas: parsed.atualizadas,
        sincronizadoEm: new Date().toISOString(),
        planilhaAtualizadaEm: parsed.planilhaAtualizadaEmValor || "",
        planilhaAtualizadaEmHttp: lastModifiedHeader || "",
        respostaGeradaEm: dateHeader || "",
        etag: etagHeader || "",
    };
}

function extrairSpreadsheetId(url) {
    const match = String(url).match(/\/spreadsheets\/d\/([a-zA-Z0-9_-]+)/);
    return match ? match[1] : "";
}

function montarUrlsCsvGoogle(sheetId, gid) {
    return [
        "https://docs.google.com/spreadsheets/d/" + sheetId + "/gviz/tq?tqx=out:csv&gid=" + gid,
        "https://docs.google.com/spreadsheets/d/" + sheetId + "/export?format=csv&gid=" + gid,
        "https://docs.google.com/spreadsheets/d/" + sheetId + "/export?format=csv&single=true&gid=" + gid,
        "https://docs.google.com/spreadsheets/d/" + sheetId + "/pub?gid=" + gid + "&single=true&output=csv",
        "https://docs.google.com/feeds/download/spreadsheets/Export?key=" + sheetId + "&exportFormat=csv&gid=" + gid,
    ];
}

async function carregarConfiguracaoRemota() {
    const scope = typeof window !== "undefined" ? window : globalThis;
    const sheetId = extrairSpreadsheetId(GOOGLE_SHEET_SHARE_URL);
    if (!sheetId) {
        throw new Error("Nao foi possivel extrair o ID da planilha no link configurado.");
    }

    const urls = montarUrlsCsvGoogle(sheetId, GOOGLE_SHEET_GID);
    const falhas = [];

    for (let i = 0; i < urls.length; i += 1) {
        const url = urls[i];
        try {
            const resultado = await carregarVariaveisDaUrl(url);
            scope.calculatorConfigStatus = {
                ok: true,
                erro: "",
                fonte: resultado.url,
                atualizadas: resultado.atualizadas,
                sincronizadoEm: resultado.sincronizadoEm,
                planilhaAtualizadaEm: resultado.planilhaAtualizadaEm,
                planilhaAtualizadaEmHttp: resultado.planilhaAtualizadaEmHttp,
                respostaGeradaEm: resultado.respostaGeradaEm,
                etag: resultado.etag,
            };
            console.info("Variaveis carregadas de", resultado.url, "(atualizadas:", resultado.atualizadas + ")");
            return resultado;
        } catch (error) {
            falhas.push(error && error.message ? error.message : String(error));
        }
    }

    const erroFinal = "Falha ao buscar planilha em todos os endpoints CSV do Google. Detalhes: " + falhas.join(" | ");
    scope.calculatorConfigStatus = {
        ok: false,
        erro: erroFinal,
        fonte: "",
        atualizadas: 0,
        sincronizadoEm: "",
        planilhaAtualizadaEm: "",
        planilhaAtualizadaEmHttp: "",
        respostaGeradaEm: "",
        etag: "",
    };

    throw new Error(erroFinal);
}

inicializarBindingsVariaveis();
reconstruirMapasConfiguracao();

const runtimeScope = typeof window !== "undefined" ? window : globalThis;
runtimeScope.calculatorConfigStatus = {
    ok: false,
    erro: "Aguardando sincronizacao.",
    fonte: "",
    atualizadas: 0,
    sincronizadoEm: "",
    planilhaAtualizadaEm: "",
    planilhaAtualizadaEmHttp: "",
    respostaGeradaEm: "",
    etag: "",
};
if (typeof fetch === "function") {
    runtimeScope.calculatorConfigReady = carregarConfiguracaoRemota();
} else {
    runtimeScope.calculatorConfigReady = Promise.resolve({
        url: "embedded-defaults",
        atualizadas: 0,
    });
}

runtimeScope.recarregarVariaveisCalculadora = function () {
    if (typeof fetch !== "function") {
        return Promise.resolve({ url: "embedded-defaults", atualizadas: 0 });
    }
    return carregarConfiguracaoRemota();
};

function calcular(inputElement) {

    function parseNumeroInput(id) {
        const valor = document.getElementById(id).value;
        return parseFloat(valor.replace(",", "."));
    }

    function animarResultadosTabela() {
        const celulasResultado = document.querySelectorAll('td[id^="resultado_"]');
        const regexNumero = /^-?\d+(?:,\d+)?$/;

        if (!Element.prototype.animate) {
            return;
        }

        celulasResultado.forEach(function (celula) {
            const textoFinal = (celula.textContent || "").trim();

            if (textoFinal === "" || !/\d/.test(textoFinal)) {
                return;
            }

            celula.getAnimations({ subtree: true }).forEach(function (animacao) {
                animacao.cancel();
            });

            const partes = textoFinal.split(/(-?\d+(?:,\d+)?)/g).filter(Boolean);
            celula.textContent = "";
            celula.setAttribute("aria-label", textoFinal);

            let ordemNumero = 0;

            partes.forEach(function (parte) {
                if (!regexNumero.test(parte)) {
                    celula.appendChild(document.createTextNode(parte));
                    return;
                }

                const numeroWrapper = document.createElement("span");
                numeroWrapper.className = "resultado-odometro-numero";

                let ordemDigito = 0;

                Array.from(parte).forEach(function (caractere) {
                    if (!/\d/.test(caractere)) {
                        const separador = document.createElement("span");
                        separador.className = "resultado-odometro-separador";
                        separador.textContent = caractere;
                        numeroWrapper.appendChild(separador);
                        return;
                    }

                    const digitoFinal = Number(caractere);
                    const voltas = 1;
                    const passos = voltas * 10 + digitoFinal;

                    const slot = document.createElement("span");
                    slot.className = "resultado-odometro-slot";

                    const trilho = document.createElement("span");
                    trilho.className = "resultado-odometro-trilho";

                    for (let passo = 0; passo <= passos; passo++) {
                        const item = document.createElement("span");
                        item.className = "resultado-odometro-digito";
                        item.textContent = String(passo % 10);
                        trilho.appendChild(item);
                    }

                    slot.appendChild(trilho);
                    numeroWrapper.appendChild(slot);

                    trilho.animate(
                        [
                            { transform: "translateY(0)" },
                            { transform: "translateY(-" + passos + "em)" }
                        ],
                        {
                            duration: 560,
                            easing: "cubic-bezier(0.2, 0.9, 0.2, 1)",
                            delay: ordemNumero * 46 + ordemDigito * 20,
                            fill: "forwards"
                        }
                    );

                    ordemDigito += 1;
                });

                celula.appendChild(numeroWrapper);
                ordemNumero += 1;
            });
        });
    }

    // ============================================================================
    // ETAPA 1: OBTENÇÃO DOS VALORES DE ENTRADA DO FORMULÁRIO
    // ============================================================================
    // Estes valores vêm de campos de entrada HTML e serão usados na base dos cálculos

    var cnpj = document.getElementById("cnpj").value;              // CNPJ/Loja selecionada
    var nivel = document.getElementById("nivel").value;            // Nível de desconto (1-5)
    var peso = document.getElementById("peso").value;              // Faixa de peso do produto
    var custo_puro = parseNumeroInput("custo");                    // Custo puro do produto (sem insumos)
    var Manual = parseNumeroInput("Manual");                       // Preço de venda manual
    var ValorLiq = parseNumeroInput("ValorLiq");                   // Valor líquido desejado
    var PctLiq = parseNumeroInput("PctLiq");                       // Percentual de margem líquida desejada

    // ============================================================================
    // ETAPA 2: DEFINIÇÃO DE CONSTANTES BASEADAS NO CNPJ/LOJA SELECIONADA
    // ============================================================================
    // Cada CNPJ tem uma taxa/comissão diferente carregada da planilha pública
    var constCnpj = CNPJ_ALIQUOTAS[cnpj];

    // ============================================================================
    // ETAPA 3: DEFINIÇÃO DE CONSTANTES DE FRETE POR PESO E PLATAFORMA
    // ============================================================================
    // O frete varia dependendo do peso do produto e da plataforma de vendas.
    // Produtos acima de R$ 79 geralmente têm frete reduzido ou gratuito.
    // Estas constantes são definidas pelos dados da planilha pública

    var fretePorPeso = FRETE_POR_PESO[peso] || {};
    var constFrete_Presencial = fretePorPeso.presencial;
    var constFrete_Amazon = fretePorPeso.amazon;
    var constFrete_CasasBahia = fretePorPeso.casasBahia;
    var constFrete_Magalu = fretePorPeso.magalu;
    var constFrete_MercadoLivre = fretePorPeso.mercadoLivre;
    var constFrete_Olist = fretePorPeso.olist;
    var constFrete_RD = fretePorPeso.rd;
    var constFrete_Shein = fretePorPeso.shein;
    var constFrete_Shopee = fretePorPeso.shopee;
    var constFrete_Temu = fretePorPeso.temu;
    var constFrete_TikTok = fretePorPeso.tiktok;

    // ============================================================================
    // ETAPA 4: DEFINIÇÃO DE CONSTANTES DE NÍVEL DE DESCONTO
    // ============================================================================
    // O nível (1-5) define descontos progressivos no frete entre as plataformas.
    // Nível 5 = maior desconto, Nível 1 = menor desconto
    // Plataformas como RAV SHEFA e RD não têm variação de nível

    var nivelConfig = NIVEL_DESCONTO[nivel] || {};
    var constNivel_Presencial = nivelConfig.presencial;
    var constNivel_Amazon = nivelConfig.amazon;
    var constNivel_CasasBahia = nivelConfig.casasBahia;
    var constNivel_Magalu_ = nivelConfig.magalu;
    var constNivel_ML = nivelConfig.mercadoLivre;
    var constNivel_Olist = nivelConfig.olist;
    var constNivel_RD = nivelConfig.rd;
    var constNivel_Shein = nivelConfig.shein;
    var constNivel_Shopee = nivelConfig.shopee;
    var constNivel_Temu = nivelConfig.temu;
    var constNivel_TikTok = nivelConfig.tiktok;

    // ============================================================================
    // ETAPA 5: DEFINIÇÃO DE CUSTO DE INSUMOS POR FAIXA DE PESO
    // ============================================================================
    // Produtos com peso diferente têm custos de embalagem/insumos diferentes:
    // - Até 300g: embalagem mais simples
    // - Acima de 300g: embalagem mais robusta (maior custo)

    var constCusto_Insumos = obterCustoInsumoPorPeso(peso);

    // Custo total = custos de produto puro + custos de insumos/embalagem
    const custo = custo_puro + constCusto_Insumos;

    // ============================================================================
    // OTIMIZAÇÃO: PRÉ-CÁLCULO DE VALORES REPETIDOS
    // ============================================================================
    // Evita recalcular os mesmos valores múltiplas vezes
    
    const margem_percentual = custo * PctLiq / 100;  // Margem em reais para PctLiq
    const custo_com_margem = custo + margem_percentual;  // Custo com margem
    
    // Pré-calcular comissões totais por canal
    const comissao_Presencial_RAV = constCnpj;
    const comissao_Presencial = constCnpj + Comissao_Presencial;
    const comissao_Amazon = constCnpj + Comissao_Amazon;
    const comissao_CasasBahia = constCnpj + Comissao_CasasBahia;
    const comissao_Magalu = constCnpj + Comissao_Magalu;
    const comissao_MLC = constCnpj + Comissao_MLC;
    const comissao_MLP = constCnpj + Comissao_MLP;
    const comissao_Olist = constCnpj + Comissao_Olist;
    const comissao_RD = constCnpj + Comissao_RD;
    const comissao_Shein = constCnpj + Comissao_Shein;
    const comissao_Shopee_ATE79 = constCnpj + Comissao_Shopee_ATE79;
    const comissao_Shopee_ACIMA79 = constCnpj + Comissao_Shopee_ACIMA79;
    const comissao_Temu = constCnpj + Comissao_Temu;
    const comissao_TikTok_ATE50 = constCnpj + Comissao_TikTok_ATE50 + FretePct_TikTok;
    const comissao_TikTok_ACIMA50 = constCnpj + Comissao_TikTok_ACIMA50 + FretePct_TikTok;

    // ============================================================================
    // - Comissão da plataforma (varia por CNPJ e canal)
    // - Frete (varia por peso e nível)
    // - Taxas específicas do canal (alguns cobram taxa fixa)
    // - Três métodos de cálculo: Manual, Valor Líquido (ValorLiq), Percentual (PctLiq)

    // NOTA IMPORTANTE: RAV SHEFA DISTRIBUIDORA tem um tratamento especial com
    // menor comissão/taxa no canal Presencial


    // --------------------------------
    // PRESENCIAL
    // --------------------------------

    // Presencial Manual - calcPresencialManual
    if (cnpj === "RAV SHEFA DISTRIBUIDORA DE COSMETICOS LTDA") {
        var calcPresencialManual = Manual - (custo + Manual * comissao_Presencial_RAV);
    }
    else {
        var calcPresencialManual = Manual - (custo + Manual * comissao_Presencial);
    }
    
    // Presencial Valor Liquido - calcPresencialValorLiq
    if (cnpj === "RAV SHEFA DISTRIBUIDORA DE COSMETICOS LTDA") {
        var calcPresencialValorLiq = (ValorLiq + custo) / (1 - comissao_Presencial_RAV);
    }
    else {
        var calcPresencialValorLiq = (ValorLiq + custo) / (1 - comissao_Presencial);
    }
    
    // Presencial Porcentagem Liquida - calcPresencialPctLiq
    if (cnpj === "RAV SHEFA DISTRIBUIDORA DE COSMETICOS LTDA") {
        var calcPresencialPctLiq = custo_com_margem / (1 - comissao_Presencial_RAV);
    }
    else {
        var calcPresencialPctLiq = custo_com_margem / (1 - comissao_Presencial);
    }

    // ================================ AMAZON ====================================
    // Amazon tem frete progressivo até R$ 79: frete reduzido acima desse valor
    // CalcA3 cálculos: Manual, Valor Líquido (ValorLiq), Percentual (PctLiq)
    // Comissão: padrão para Amazon (definida pela planilha pública)

    // Pré-calcular para Amazon
    const denominador_Amazon = 1 - (constCnpj + Comissao_Amazon);
    const frete_Amazon_ATE30_n = Frete_Amazon_ATE30 * constNivel_Amazon;
    const frete_Amazon_30a50_n = Frete_Amazon_30a50 * constNivel_Amazon;
    const frete_Amazon_50a79_n = Frete_Amazon_50a79 * constNivel_Amazon;
    const frete_Amazon_ACIMA79_n = constFrete_Amazon * constNivel_Amazon;
    const frete_Amazon_manual = (Manual < 30 ? frete_Amazon_ATE30_n : Manual < 50 ? frete_Amazon_30a50_n : Manual < 79 ? frete_Amazon_50a79_n : frete_Amazon_ACIMA79_n);

    // Amazon Manual - calcAmazonManual - simplificado
    var calcAmazonManual = Manual - (custo + Manual * (constCnpj + Comissao_Amazon) + frete_Amazon_manual);

    // Amazon Valor Liquido - calcAmazonValorLiq - com cascata de ternários
    const calc_Amazon_ate30 = (ValorLiq + custo + frete_Amazon_ATE30_n) / denominador_Amazon;
    const calc_Amazon_ate50 = (ValorLiq + custo + frete_Amazon_30a50_n) / denominador_Amazon;
    const calc_Amazon_ate79 = (ValorLiq + custo + frete_Amazon_50a79_n) / denominador_Amazon;
    const calc_Amazon_acima79 = (ValorLiq + custo + frete_Amazon_ACIMA79_n) / denominador_Amazon;
    var calcAmazonValorLiq = (calc_Amazon_ate30 < 30) ? calc_Amazon_ate30 : (calc_Amazon_ate50 < 50) ? calc_Amazon_ate50 : (calc_Amazon_ate79 < 79) ? calc_Amazon_ate79 : calc_Amazon_acima79;

    // Amazon Porcentagem Liquida - calcAmazonPctLiq - com cascata de ternários
    const calc_Amazon_pct_ate30 = (custo_com_margem + frete_Amazon_ATE30_n) / denominador_Amazon;
    const calc_Amazon_pct_ate50 = (custo_com_margem + frete_Amazon_30a50_n) / denominador_Amazon;
    const calc_Amazon_pct_ate79 = (custo_com_margem + frete_Amazon_50a79_n) / denominador_Amazon;
    const calc_Amazon_pct_acima79 = (custo_com_margem + frete_Amazon_ACIMA79_n) / denominador_Amazon;
    var calcAmazonPctLiq = (calc_Amazon_pct_ate30 < 30) ? calc_Amazon_pct_ate30 : (calc_Amazon_pct_ate50 < 50) ? calc_Amazon_pct_ate50 : (calc_Amazon_pct_ate79 < 79) ? calc_Amazon_pct_ate79 : calc_Amazon_pct_acima79;


    // ========================= CASAS BAHIA ==============================
    // Casas Bahia cobra taxa fixa + frete progressivo (até R$ 69,90)
    // Três faixas de cálculo: até 69,90 / acima de 69,90 / por percentual

    // CasasBahia Manual - calcCasasBahiaManual
    // Fórmula: Preço Manual - (Custo + Taxa + Comissão + Frete)
    var calcCasasBahiaManual =
        Manual
        - (
            + custo
            + Taxa_CasasBahia
            + (Manual * (constCnpj + Comissao_CasasBahia))
            + ((Manual < 69.90 ? Frete_CasasBahia_ATE69 :
                Manual > 69.90 ? constFrete_CasasBahia : 0
            ) * constNivel_CasasBahia)
        );

    // Casas Bahia Valor Liquido - calcCasasBahiaValorLiq - simplificado
    const denominador_CasasBahia = 1 - comissao_CasasBahia;
    const frete_CB_ATE69_n = Frete_CasasBahia_ATE69 * constNivel_CasasBahia;
    const frete_CB_ACIMA69_n = constFrete_CasasBahia * constNivel_CasasBahia;
    const calc_CB_ate69 = (ValorLiq + custo + Taxa_CasasBahia + frete_CB_ATE69_n) / denominador_CasasBahia;
    calcCasasBahiaValorLiq = (calc_CB_ate69 <= 69.89) ? calc_CB_ate69 : (ValorLiq + custo + Taxa_CasasBahia + frete_CB_ACIMA69_n) / denominador_CasasBahia;

    // Casas Bahia Porcentagem Liquida - calcCasasBahiaPctLiq - simplificado
    const calc_CB_pct_ate69 = (custo_com_margem + Taxa_CasasBahia + frete_CB_ATE69_n) / denominador_CasasBahia;
    calcCasasBahiaPctLiq = (calc_CB_pct_ate69 <= 69.89) ? calc_CB_pct_ate69 : (custo_com_margem + Taxa_CasasBahia + frete_CB_ACIMA69_n) / denominador_CasasBahia;

    // ========================= MAGALU ================================
    // Magalu cobra taxa variável por faixa de preço (até 9,99 / 10+)
    // Frete progressivo até R$ 79 (taxa reduzida acima desse valor)
    // Cálculos: Manual, Valor Líquido (em 3 faixas), Percentual (em 3 faixas)

    // Pré-calcular para Magalu
    const denominador_Magalu = 1 - comissao_Magalu;
    const frete_Magalu_ATE79_n = Frete_Magalu_ATE79 * constNivel_Magalu_;
    const frete_Magalu_ACIMA79_n = constFrete_Magalu * constNivel_Magalu_;
    const frete_Magalu_manual = (Manual <= 78.99 ? frete_Magalu_ATE79_n : frete_Magalu_ACIMA79_n);
    const taxa_Magalu_manual = (Manual <= 9.99 ? Taxa_Magalu_ATE10 : Taxa_Magalu_ACIMA10);

    // Magalu Manual - calcMagaluManual - simplificado
    var calcMagaluManual = Manual - (custo + Manual * comissao_Magalu + frete_Magalu_manual + taxa_Magalu_manual);

    // Magalu Valor Liquido - calcMagaluValorLiq
    // Abaixo de 10
    if (
        (ValorLiq
            + custo
            + Taxa_Magalu_ATE10
            + (Frete_Magalu_ATE79 * constNivel_Magalu_)
        )
        /
        (1 - (constCnpj + Comissao_Magalu)) <= 9.99) {
        calcMagaluValorLiq =
            (ValorLiq
                + custo
                + Taxa_Magalu_ATE10
                + (Frete_Magalu_ATE79 * constNivel_Magalu_)
            )
            /
            (1 - (constCnpj + Comissao_Magalu));
    }

    // Magalu Valor Liquido - calcMagaluValorLiq
    // Entre 10 e 78,99
    else if (
        (ValorLiq
            + custo
            + Taxa_Magalu_ATE10
            + (Frete_Magalu_ATE79 * constNivel_Magalu_)
        )
        /
        (1 - (constCnpj + Comissao_Magalu)) > 9.99
        &&
        (ValorLiq
            + custo
            + Taxa_Magalu_ACIMA10
            + (Frete_Magalu_ATE79 * constNivel_Magalu_)
        )
        /
        (1 - (constCnpj + Comissao_Magalu)) <= 78.99) {
        calcMagaluValorLiq =
            (ValorLiq
                + custo
                + Taxa_Magalu_ACIMA10
                + (Frete_Magalu_ATE79 * constNivel_Magalu_)
            )
            /
            (1 - (constCnpj + Comissao_Magalu));
    }

    // Magalu Valor Liquido - calcMagaluValorLiq
    // Acima de 79
    else if (
        (ValorLiq
            + custo
            + Taxa_Magalu_ACIMA10
            + (Frete_Magalu_ATE79 * constNivel_Magalu_)
        )
        /
        (1 - (constCnpj + Comissao_Magalu)) > 78.99) {
        calcMagaluValorLiq =
            (ValorLiq
                + custo
                + Taxa_Magalu_ACIMA10
                + (constFrete_Magalu * constNivel_Magalu_)
            )
            /
            (1 - (constCnpj + Comissao_Magalu));
    }

    // Magalu Porcentagem Liquida - calcMagaluPctLiq
    // Abaixo de 10
    if (
        (custo
            + (PctLiq * custo) / 100
            + Taxa_Magalu_ATE10
            + Frete_Magalu_ATE79 * constNivel_Magalu_
        )
        /
        (1 - (constCnpj + Comissao_Magalu)) <= 9.99) {
        calcMagaluPctLiq =
            (custo
                + (PctLiq * custo) / 100
                + Taxa_Magalu_ATE10
                + Frete_Magalu_ATE79 * constNivel_Magalu_
            )
            /
            (1 - (constCnpj + Comissao_Magalu));
    }

    // Magalu Porcentagem Liquida - calcMagaluPctLiq
    // Entre 10 e 78,99
    else if (
        (custo
            + (PctLiq * custo) / 100
            + Taxa_Magalu_ATE10
            + Frete_Magalu_ATE79 * constNivel_Magalu_
        )
        /
        (1 - (constCnpj + Comissao_Magalu)) > 9.99
        &&
        (custo
            + (PctLiq * custo) / 100
            + Taxa_Magalu_ACIMA10
            + Frete_Magalu_ATE79 * constNivel_Magalu_
        )
        /
        (1 - (constCnpj + Comissao_Magalu)) <= 78.99) {
        calcMagaluPctLiq =
            (custo
                + (PctLiq * custo) / 100
                + Taxa_Magalu_ACIMA10
                + Frete_Magalu_ATE79 * constNivel_Magalu_
            )
            /
            (1 - (constCnpj + Comissao_Magalu));
    }

    // Magalu Porcentagem Liquida - calcMagaluPctLiq
    // Acima de 79
    else if (
        (custo
            + (PctLiq * custo) / 100
            + Taxa_Magalu_ACIMA10
            + Frete_Magalu_ATE79 * constNivel_Magalu_
        )
        /
        (1 - (constCnpj + Comissao_Magalu)) > 78.99) {
        calcMagaluPctLiq =
            (custo
                + (PctLiq * custo) / 100
                + Taxa_Magalu_ACIMA10
                + constFrete_Magalu * constNivel_Magalu_
            )
            /
            (1 - (constCnpj + Comissao_Magalu));
    }

    // ===================== MERCADO LIVRE (CLÁSSICO + PREMIUM) =====================
    // Mercado Livre tem dois tipos: Clássico (MLC) e Premium (MLP)
    // Taxa variável por faixa: até 12,50 / 12,50-29 / 29-50 / 50-79 / acima 79
    // Frete progressivo até R$ 78,99, reduzido acima
    // Comissão: MLC vs MLP diferem

    // Pré-calcular constantes para Mercado Livre
    const denominador_MLC = 1 - (constCnpj + Comissao_MLC);
    const denominador_MLP = 1 - (constCnpj + Comissao_MLP);
    const frete_ML_ATE79_n = Frete_ML_ATE79 * constNivel_ML;
    const frete_ML_ACIMA79_n = constFrete_MercadoLivre * constNivel_ML;
    const frete_Manual_ML = (Manual <= 78.99 ? frete_ML_ATE79_n : frete_ML_ACIMA79_n);
    const taxa_Manual_ML = (Manual <= 12.5 ? Taxa_ML_ATE12_PCT * Manual : Manual <= 29 ? Taxa_ML_ATE29 : Manual <= 50 ? Taxa_ML_ATE50 : Manual <= 78.99 ? Taxa_ML_ATE79 : Taxa_ML_ACIMA79);

    // MLC Manual - calcMLCManual - simplificado
    var calcMLCManual = Manual - (custo + Manual * (constCnpj + Comissao_MLC) + taxa_Manual_ML + frete_Manual_ML);

    // MLC Valor Liquido - calcMLCValorLiq - com cascata de 5 ternários
    // taxa até 12,50 é percentual: move para o denominador (denominador_MLC - Taxa_ML_ATE12_PCT)
    const calc_MLC_ate12 = (ValorLiq + custo + frete_ML_ATE79_n) / (denominador_MLC - Taxa_ML_ATE12_PCT);
    const calc_MLC_ate29 = (ValorLiq + custo + Taxa_ML_ATE29 + frete_ML_ATE79_n) / denominador_MLC;
    const calc_MLC_ate50 = (ValorLiq + custo + Taxa_ML_ATE50 + frete_ML_ATE79_n) / denominador_MLC;
    const calc_MLC_ate79 = (ValorLiq + custo + Taxa_ML_ATE79 + frete_ML_ATE79_n) / denominador_MLC;
    const calc_MLC_acima79 = (ValorLiq + custo + Taxa_ML_ACIMA79 + frete_ML_ACIMA79_n) / denominador_MLC;
    var calcMLCValorLiq = (calc_MLC_ate12 <= 12.5) ? calc_MLC_ate12 : (calc_MLC_ate29 <= 29) ? calc_MLC_ate29 : (calc_MLC_ate50 <= 50) ? calc_MLC_ate50 : (calc_MLC_ate79 <= 78.99) ? calc_MLC_ate79 : calc_MLC_acima79;

    // MLC Porcentagem Liquida - calcMLCPctLiq - com cascata de 5 ternários
    // taxa até 12,50 é percentual: move para o denominador (denominador_MLC - Taxa_ML_ATE12_PCT)
    const calc_MLC_pct_ate12 = (custo_com_margem + frete_ML_ATE79_n) / (denominador_MLC - Taxa_ML_ATE12_PCT);
    const calc_MLC_pct_ate29 = (custo_com_margem + Taxa_ML_ATE29 + frete_ML_ATE79_n) / denominador_MLC;
    const calc_MLC_pct_ate50 = (custo_com_margem + Taxa_ML_ATE50 + frete_ML_ATE79_n) / denominador_MLC;
    const calc_MLC_pct_ate79 = (custo_com_margem + Taxa_ML_ATE79 + frete_ML_ATE79_n) / denominador_MLC;
    const calc_MLC_pct_acima79 = (custo_com_margem + Taxa_ML_ACIMA79 + frete_ML_ACIMA79_n) / denominador_MLC;
    var calcMLCPctLiq = (calc_MLC_pct_ate12 <= 12.5) ? calc_MLC_pct_ate12 : (calc_MLC_pct_ate29 <= 29) ? calc_MLC_pct_ate29 : (calc_MLC_pct_ate50 <= 50) ? calc_MLC_pct_ate50 : (calc_MLC_pct_ate79 <= 78.99) ? calc_MLC_pct_ate79 : calc_MLC_pct_acima79;

    // MLP Manual - calcMLPManual - simplificado
    var calcMLPManual = Manual - (custo + Manual * (constCnpj + Comissao_MLP) + taxa_Manual_ML + frete_Manual_ML);

    // MLP Valor Liquido - calcMLPValorLiq - com cascata de 5 ternários
    // taxa até 12,50 é percentual: move para o denominador (denominador_MLP - Taxa_ML_ATE12_PCT)
    const calc_MLP_ate12 = (ValorLiq + custo + frete_ML_ATE79_n) / (denominador_MLP - Taxa_ML_ATE12_PCT);
    const calc_MLP_ate29 = (ValorLiq + custo + Taxa_ML_ATE29 + frete_ML_ATE79_n) / denominador_MLP;
    const calc_MLP_ate50 = (ValorLiq + custo + Taxa_ML_ATE50 + frete_ML_ATE79_n) / denominador_MLP;
    const calc_MLP_ate79 = (ValorLiq + custo + Taxa_ML_ATE79 + frete_ML_ATE79_n) / denominador_MLP;
    const calc_MLP_acima79 = (ValorLiq + custo + Taxa_ML_ACIMA79 + frete_ML_ACIMA79_n) / denominador_MLP;
    var calcMLPValorLiq = (calc_MLP_ate12 <= 12.5) ? calc_MLP_ate12 : (calc_MLP_ate29 <= 29) ? calc_MLP_ate29 : (calc_MLP_ate50 <= 50) ? calc_MLP_ate50 : (calc_MLP_ate79 <= 78.99) ? calc_MLP_ate79 : calc_MLP_acima79;

    // MLP Porcentagem Liquida - calcMLPPctLiq - com cascata de 5 ternários
    // taxa até 12,50 é percentual: move para o denominador (denominador_MLP - Taxa_ML_ATE12_PCT)
    const calc_MLP_pct_ate12 = (custo_com_margem + frete_ML_ATE79_n) / (denominador_MLP - Taxa_ML_ATE12_PCT);
    const calc_MLP_pct_ate29 = (custo_com_margem + Taxa_ML_ATE29 + frete_ML_ATE79_n) / denominador_MLP;
    const calc_MLP_pct_ate50 = (custo_com_margem + Taxa_ML_ATE50 + frete_ML_ATE79_n) / denominador_MLP;
    const calc_MLP_pct_ate79 = (custo_com_margem + Taxa_ML_ATE79 + frete_ML_ATE79_n) / denominador_MLP;
    const calc_MLP_pct_acima79 = (custo_com_margem + Taxa_ML_ACIMA79 + frete_ML_ACIMA79_n) / denominador_MLP;
    var calcMLPPctLiq = (calc_MLP_pct_ate12 <= 12.5) ? calc_MLP_pct_ate12 : (calc_MLP_pct_ate29 <= 29) ? calc_MLP_pct_ate29 : (calc_MLP_pct_ate50 <= 50) ? calc_MLP_pct_ate50 : (calc_MLP_pct_ate79 <= 78.99) ? calc_MLP_pct_ate79 : calc_MLP_pct_acima79;

    // ======================== OLIST ==================================
    // Olist é um agregador de marketplace
    // Taxa fixa aplicada a todos os produtos
    // Frete progressivo até R$ 79

    // Olist Manual - calcOlistManual
    var calcOlistManual = Manual
        - (
            + custo
            + (Manual * (constCnpj + Comissao_Olist))
            + ((Manual <= 78.99 ? Frete_Olist_ATE79 :
                Manual >= 79 ? constFrete_Olist : 0
            ) * constNivel_Olist)
            + Taxa_Olist
        );

    // Olist Valor Liquido - calcOlistValorLiq
    // Abaixo de 78.99
    if (
        (ValorLiq
            + custo
            + Taxa_Olist
            + (Frete_Olist_ATE79 * constNivel_Olist)
        )
        /
        (1 - (constCnpj + Comissao_Olist)) <= 78.99) {
        calcOlistValorLiq =
            (ValorLiq
                + custo
                + Taxa_Olist
                + (Frete_Olist_ATE79 * constNivel_Olist)
            )
            /
            (1 - (constCnpj + Comissao_Olist));
    }

    // Olist Valor Liquido - calcOlistValorLiq
    // Acima de 79
    else {
        calcOlistValorLiq =
            (ValorLiq
                + custo
                + Taxa_Olist
                + (constFrete_Olist * constNivel_Olist)
            )
            /
            (1 - (constCnpj + Comissao_Olist));
    }

    // Olist Porcentagem Liquida - calcOlistPctLiq
    // Abaixo de 78.99
    if (
        (custo
            + (PctLiq * custo) / 100
            + Taxa_Olist
            + (Frete_Olist_ATE79 * constNivel_Olist)
        )
        /
        (1 - (constCnpj + Comissao_Olist)) <= 78.99) {
        calcOlistPctLiq =
            (custo
                + (PctLiq * custo) / 100
                + Taxa_Olist
                + (Frete_Olist_ATE79 * constNivel_Olist)
            )
            /
            (1 - (constCnpj + Comissao_Olist));
    }

    // Olist Porcentagem Liquida - calcOlistPctLiq
    // Acima de 79
    else {
        calcOlistPctLiq =
            (custo
                + (PctLiq * custo) / 100
                + Taxa_Olist
                + (constFrete_Olist * constNivel_Olist)
            )
            /
            (1 - (constCnpj + Comissao_Olist));
    }


    // ========================== RD ====================================
    // RD é um cliente especial com cálculo simplificado
    // Sem variação de nível ou múltiplas faixas de preço
    // Frete fixo + comissão padrão
    
    const denominador_RD = 1 - comissao_RD;
    const frete_RD_comissao = constFrete_RD * Comissao_RD;

    // RD Manual - calcRDManual - simplificado
    var calcRDManual = Manual - (custo + frete_RD_comissao + Manual * comissao_RD);

    // RD Valor Liquido - calcRDValorLiq
    var calcRDValorLiq = (ValorLiq + custo + frete_RD_comissao) / denominador_RD;

    // RD Porcentagem Liquida - calcRDPctLiq
    var calcRDPctLiq = (custo_com_margem + frete_RD_comissao) / denominador_RD;


    // ======================== SHEIN ================================
    // Shein: plataforma chinesa com taxa fixa
    // Frete progressivo até R$ 49,89
    // Duas faixas de cálculo principal: até 49,89 / acima de 49,89

    // Pré-calcular para Shein
    const denominador_Shein = 1 - comissao_Shein;
    const frete_Shein_ATE49_n = Frete_Shein_ATE49 * constNivel_Shein;
    const frete_Shein_ACIMA49_n = constFrete_Shein * constNivel_Shein;
    const frete_Shein_manual = (Manual <= 49.89 ? frete_Shein_ATE49_n : frete_Shein_ACIMA49_n);

    // Shein Manual - calcSheinManual - simplificado
    var calcSheinManual = Manual - (custo + Manual * constCnpj + Manual * Comissao_Shein + Taxa_Shein + frete_Shein_manual);

    // Shein Valor Liquido - calcSheinValorLiq - simplificado com ternário
    const calc_Shein_ate49 = (ValorLiq + custo + Taxa_Shein + frete_Shein_ATE49_n) / denominador_Shein;
    var calcSheinValorLiq = (calc_Shein_ate49 <= 49.89) ? calc_Shein_ate49 : (ValorLiq + custo + Taxa_Shein + frete_Shein_ACIMA49_n) / denominador_Shein;

    // Shein Porcentagem Liquida - calcSheinPctLiq - simplificado com ternário
    const calc_Shein_pct_ate49 = (custo_com_margem + Taxa_Shein + frete_Shein_ATE49_n) / denominador_Shein;
    var calcSheinPctLiq = (calc_Shein_pct_ate49 <= 49.89) ? calc_Shein_pct_ate49 : (custo_com_margem + Taxa_Shein + frete_Shein_ACIMA49_n) / denominador_Shein;

    // ======================== SHOPEE ==============================
    // Shopee: plataforma asiática com comissão variável por preço
    // Taxa progressiva com 4 faixas: até 79,99 / até 99,99 / até 199,99 / acima 200
    // Comissão também varia: até 79,99 vs acima de 79,99
    // Frete fixo para todos os produtos

    // Pré-calcular para Shopee
    const denominador_Shopee_ATE79 = 1 - (constCnpj + Comissao_Shopee_ATE79);
    const denominador_Shopee_ACIMA79 = 1 - (constCnpj + Comissao_Shopee_ACIMA79);
    const frete_Shopee_n = Frete_Shopee * constNivel_Shopee;
    const comissao_Shopee_manual_ATE79 = Manual * Comissao_Shopee_ATE79;
    const comissao_Shopee_manual_ACIMA79 = Manual * Comissao_Shopee_ACIMA79;

    // Shopee Manual - calcShopeeManual - simplificado com ternário
    var calcShopeeManual = Manual - (custo + Manual * constCnpj
        + (Manual <= 79.99 ? comissao_Shopee_manual_ATE79 : comissao_Shopee_manual_ACIMA79)
        + (Manual <= 79.99 ? Taxa_Shopee_ATE79 : Manual <= 99.99 ? Taxa_Shopee_ATE99 : Manual <= 199.99 ? Taxa_Shopee_ATE199 : Taxa_Shopee_ACIMA200)
        + frete_Shopee_n);

    // Shopee Valor Liquido - calcShopeeValorLiq - com cascata de ternários
    const calc_Shopee_ate79 = (ValorLiq + custo + Taxa_Shopee_ATE79 + frete_Shopee_n) / denominador_Shopee_ATE79;
    const calc_Shopee_ate99 = (ValorLiq + custo + Taxa_Shopee_ATE99 + frete_Shopee_n) / denominador_Shopee_ACIMA79;
    const calc_Shopee_ate199 = (ValorLiq + custo + Taxa_Shopee_ATE199 + frete_Shopee_n) / denominador_Shopee_ACIMA79;
    const calc_Shopee_acima200 = (ValorLiq + custo + Taxa_Shopee_ACIMA200 + frete_Shopee_n) / denominador_Shopee_ACIMA79;
    var calcShopeeValorLiq = (calc_Shopee_ate79 <= 79.99) ? calc_Shopee_ate79 : (calc_Shopee_ate99 <= 99.99) ? calc_Shopee_ate99 : (calc_Shopee_ate199 <= 199.99) ? calc_Shopee_ate199 : calc_Shopee_acima200;

    // Shopee Porcentagem Liquida - calcShopeePctLiq - com cascata de ternários
    const calc_Shopee_pct_ate79 = (custo_com_margem + Taxa_Shopee_ATE79 + frete_Shopee_n) / denominador_Shopee_ATE79;
    const calc_Shopee_pct_ate99 = (custo_com_margem + Taxa_Shopee_ATE99 + frete_Shopee_n) / denominador_Shopee_ACIMA79;
    const calc_Shopee_pct_ate199 = (custo_com_margem + Taxa_Shopee_ATE199 + frete_Shopee_n) / denominador_Shopee_ACIMA79;
    const calc_Shopee_pct_acima200 = (custo_com_margem + Taxa_Shopee_ACIMA200 + frete_Shopee_n) / denominador_Shopee_ACIMA79;
    var calcShopeePctLiq = (calc_Shopee_pct_ate79 <= 79.99) ? calc_Shopee_pct_ate79 : (calc_Shopee_pct_ate99 <= 99.99) ? calc_Shopee_pct_ate99 : (calc_Shopee_pct_ate199 <= 199.99) ? calc_Shopee_pct_ate199 : calc_Shopee_pct_acima200;

    // ======================== TEMU ================================
    // Temu sem comissão, sem frete e sem taxa fixa na regra atual.
    // Apenas a alíquota do CNPJ é considerada no cálculo.

    const frete_Temu = constFrete_Temu * constNivel_Temu;
    const denominador_Temu = 1 - comissao_Temu;
    var calcTemuManual = Manual - (custo + Manual * comissao_Temu + frete_Temu + Taxa_Temu);
    var calcTemuValorLiq = (ValorLiq + custo + frete_Temu + Taxa_Temu) / denominador_Temu;
    var calcTemuPctLiq = (custo_com_margem + frete_Temu + Taxa_Temu) / denominador_Temu;

    // ======================== TIKTOK ==============================
    // TikTok aplica comissão e taxa fixa por faixa de preço:
    // - abaixo de R$ 50,00: comissão 10% e taxa fixa R$ 4,00
    // - a partir de R$ 50,00: comissão 6% e taxa fixa R$ 6,00

    const frete_TikTok = constFrete_TikTok * constNivel_TikTok;
    const denominador_TikTok_ATE50 = 1 - comissao_TikTok_ATE50;
    const denominador_TikTok_ACIMA50 = 1 - comissao_TikTok_ACIMA50;

    const taxa_TikTok_Manual = (Manual < 50 ? Taxa_TikTok_ATE50 : Taxa_TikTok_ACIMA50);
    const comissao_TikTok_Manual = (Manual < 50 ? comissao_TikTok_ATE50 : comissao_TikTok_ACIMA50);
    var calcTikTokManual = Manual - (custo + Manual * comissao_TikTok_Manual + frete_TikTok + taxa_TikTok_Manual);

    const calc_TikTok_ate50 = (ValorLiq + custo + frete_TikTok + Taxa_TikTok_ATE50) / denominador_TikTok_ATE50;
    const calc_TikTok_acima50 = (ValorLiq + custo + frete_TikTok + Taxa_TikTok_ACIMA50) / denominador_TikTok_ACIMA50;
    var calcTikTokValorLiq = (calc_TikTok_ate50 < 50) ? calc_TikTok_ate50 : calc_TikTok_acima50;

    const calc_TikTok_pct_ate50 = (custo_com_margem + frete_TikTok + Taxa_TikTok_ATE50) / denominador_TikTok_ATE50;
    const calc_TikTok_pct_acima50 = (custo_com_margem + frete_TikTok + Taxa_TikTok_ACIMA50) / denominador_TikTok_ACIMA50;
    var calcTikTokPctLiq = (calc_TikTok_pct_ate50 < 50) ? calc_TikTok_pct_ate50 : calc_TikTok_pct_acima50;

    // ============================================================================
    // ETAPA 7: EXIBIÇÃO DOS RESULTADOS NA PÁGINA HTML
    // ============================================================================
    // Os resultados calculados são formatados e exibidos em elementos HTML
    // Formato: "R$ XX,XX (YY%)" ou "R$ XX,XX (R$ YY,YY)"
    // 
    // NOTA ESPECIAL: Se o CNPJ for RAV SHEFA, apenas Presencial e Olist/RD 
    // são exibidos. Os demais canais ficam em branco para manter a interface clara.

    // Presencial - sempre exibido (todos os CNPJs)
    // Exibe 3 métodos: Manual (margem bruta), ValorLiq (valor líquido desejado), PctLiq (percentual de margem)
    document.getElementById("resultado_Presencial_Manual").textContent = "R$ " + calcPresencialManual.toFixed(2).replace(".", ",") + " (" + ((calcPresencialManual / custo) * 100).toFixed(2).replace(".", ",") + "%)";
    document.getElementById("resultado_Presencial_ValorLiq").textContent = "R$ " + calcPresencialValorLiq.toFixed(2).replace(".", ",") + " (" + ((ValorLiq / custo) * 100).toFixed(2).replace(".", ",") + "%)";
    document.getElementById("resultado_Presencial_PctLiq").textContent = "R$ " + calcPresencialPctLiq.toFixed(2).replace(".", ",") + " (" + "R$ " + ((custo * PctLiq) / 100).toFixed(2).replace(".", ",") + ")";

    // Amazon
    document.getElementById("resultado_Amazon_Manual").textContent = "R$ " + calcAmazonManual.toFixed(2).replace(".", ",") + " (" + ((calcAmazonManual / custo) * 100).toFixed(2).replace(".", ",") + "%)";
    document.getElementById("resultado_Amazon_ValorLiq").textContent = "R$ " + calcAmazonValorLiq.toFixed(2).replace(".", ",") + " (" + ((ValorLiq / custo) * 100).toFixed(2).replace(".", ",") + "%)";
    document.getElementById("resultado_Amazon_PctLiq").textContent = "R$ " + calcAmazonPctLiq.toFixed(2).replace(".", ",") + " (" + "R$ " + ((custo * PctLiq) / 100).toFixed(2).replace(".", ",") + ")";

    // Casas Bahia
    document.getElementById("resultado_CasasBahia_Manual").textContent = "R$ " + calcCasasBahiaManual.toFixed(2).replace(".", ",") + " (" + ((calcCasasBahiaManual / custo) * 100).toFixed(2).replace(".", ",") + "%)";
    document.getElementById("resultado_CasasBahia_ValorLiq").textContent = "R$ " + calcCasasBahiaValorLiq.toFixed(2).replace(".", ",") + " (" + ((ValorLiq / custo) * 100).toFixed(2).replace(".", ",") + "%)";
    document.getElementById("resultado_CasasBahia_PctLiq").textContent = "R$ " + calcCasasBahiaPctLiq.toFixed(2).replace(".", ",") + " (" + "R$ " + ((custo * PctLiq) / 100).toFixed(2).replace(".", ",") + ")";

    // Magalu
    document.getElementById("resultado_Magalu_Manual").textContent = "R$ " + calcMagaluManual.toFixed(2).replace(".", ",") + " (" + ((calcMagaluManual / custo) * 100).toFixed(2).replace(".", ",") + "%)";
    document.getElementById("resultado_Magalu_ValorLiq").textContent = "R$ " + calcMagaluValorLiq.toFixed(2).replace(".", ",") + " (" + ((ValorLiq / custo) * 100).toFixed(2).replace(".", ",") + "%)";
    document.getElementById("resultado_Magalu_PctLiq").textContent = "R$ " + calcMagaluPctLiq.toFixed(2).replace(".", ",") + " (" + "R$ " + ((custo * PctLiq) / 100).toFixed(2).replace(".", ",") + ")";

    // Mercado Livre Classico
    document.getElementById("resultado_MLC_Manual").textContent = "R$ " + calcMLCManual.toFixed(2).replace(".", ",") + " (" + ((calcMLCManual / custo) * 100).toFixed(2).replace(".", ",") + "%)";
    document.getElementById("resultado_MLC_ValorLiq").textContent = "R$ " + calcMLCValorLiq.toFixed(2).replace(".", ",") + " (" + ((ValorLiq / custo) * 100).toFixed(2).replace(".", ",") + "%)";
    document.getElementById("resultado_MLC_PctLiq").textContent = "R$ " + calcMLCPctLiq.toFixed(2).replace(".", ",") + " (" + "R$ " + ((custo * PctLiq) / 100).toFixed(2).replace(".", ",") + ")";


    // Mercado Livre Premium
    document.getElementById("resultado_MLP_Manual").textContent = "R$ " + calcMLPManual.toFixed(2).replace(".", ",") + " (" + ((calcMLPManual / custo) * 100).toFixed(2).replace(".", ",") + "%)";
    document.getElementById("resultado_MLP_ValorLiq").textContent = "R$ " + calcMLPValorLiq.toFixed(2).replace(".", ",") + " (" + ((ValorLiq / custo) * 100).toFixed(2).replace(".", ",") + "%)";
    document.getElementById("resultado_MLP_PctLiq").textContent = "R$ " + calcMLPPctLiq.toFixed(2).replace(".", ",") + " (" + "R$ " + ((custo * PctLiq) / 100).toFixed(2).replace(".", ",") + ")";

    // Olist
    document.getElementById("resultado_Olist_Manual").textContent = "R$ " + calcOlistManual.toFixed(2).replace(".", ",") + " (" + ((calcOlistManual / custo) * 100).toFixed(2).replace(".", ",") + "%)";
    document.getElementById("resultado_Olist_ValorLiq").textContent = "R$ " + calcOlistValorLiq.toFixed(2).replace(".", ",") + " (" + ((ValorLiq / custo) * 100).toFixed(2).replace(".", ",") + "%)";
    document.getElementById("resultado_Olist_PctLiq").textContent = "R$ " + calcOlistPctLiq.toFixed(2).replace(".", ",") + " (" + "R$ " + ((custo * PctLiq) / 100).toFixed(2).replace(".", ",") + ")";

    // RD
    document.getElementById("resultado_RD_Manual").textContent = "R$ " + calcRDManual.toFixed(2).replace(".", ",") + " (" + ((calcRDManual / custo) * 100).toFixed(2).replace(".", ",") + "%)";
    document.getElementById("resultado_RD_ValorLiq").textContent = "R$ " + calcRDValorLiq.toFixed(2).replace(".", ",") + " (" + ((ValorLiq / custo) * 100).toFixed(2).replace(".", ",") + "%)";
    document.getElementById("resultado_RD_PctLiq").textContent = "R$ " + calcRDPctLiq.toFixed(2).replace(".", ",") + " (" + "R$ " + ((custo * PctLiq) / 100).toFixed(2).replace(".", ",") + ")";

    // Shein
    document.getElementById("resultado_Shein_Manual").textContent = "R$ " + calcSheinManual.toFixed(2).replace(".", ",") + " (" + ((calcSheinManual / custo) * 100).toFixed(2).replace(".", ",") + "%)";
    document.getElementById("resultado_Shein_ValorLiq").textContent = "R$ " + calcSheinValorLiq.toFixed(2).replace(".", ",") + " (" + ((ValorLiq / custo) * 100).toFixed(2).replace(".", ",") + "%)";
    document.getElementById("resultado_Shein_PctLiq").textContent = "R$ " + calcSheinPctLiq.toFixed(2).replace(".", ",") + " (" + "R$ " + ((custo * PctLiq) / 100).toFixed(2).replace(".", ",") + ")";

    // Shopee
    document.getElementById("resultado_Shopee_Manual").textContent = "R$ " + calcShopeeManual.toFixed(2).replace(".", ",") + " (" + ((calcShopeeManual / custo) * 100).toFixed(2).replace(".", ",") + "%)";
    document.getElementById("resultado_Shopee_ValorLiq").textContent = "R$ " + calcShopeeValorLiq.toFixed(2).replace(".", ",") + " (" + ((ValorLiq / custo) * 100).toFixed(2).replace(".", ",") + "%)";
    document.getElementById("resultado_Shopee_PctLiq").textContent = "R$ " + calcShopeePctLiq.toFixed(2).replace(".", ",") + " (" + "R$ " + ((custo * PctLiq) / 100).toFixed(2).replace(".", ",") + ")";

    // Temu
    document.getElementById("resultado_Temu_Manual").textContent = "R$ " + calcTemuManual.toFixed(2).replace(".", ",") + " (" + ((calcTemuManual / custo) * 100).toFixed(2).replace(".", ",") + "%)";
    document.getElementById("resultado_Temu_ValorLiq").textContent = "R$ " + calcTemuValorLiq.toFixed(2).replace(".", ",") + " (" + ((ValorLiq / custo) * 100).toFixed(2).replace(".", ",") + "%)";
    document.getElementById("resultado_Temu_PctLiq").textContent = "R$ " + calcTemuPctLiq.toFixed(2).replace(".", ",") + " (" + "R$ " + ((custo * PctLiq) / 100).toFixed(2).replace(".", ",") + ")";

    // TikTok
    document.getElementById("resultado_TikTok_Manual").textContent = "R$ " + calcTikTokManual.toFixed(2).replace(".", ",") + " (" + ((calcTikTokManual / custo) * 100).toFixed(2).replace(".", ",") + "%)";
    document.getElementById("resultado_TikTok_ValorLiq").textContent = "R$ " + calcTikTokValorLiq.toFixed(2).replace(".", ",") + " (" + ((ValorLiq / custo) * 100).toFixed(2).replace(".", ",") + "%)";
    document.getElementById("resultado_TikTok_PctLiq").textContent = "R$ " + calcTikTokPctLiq.toFixed(2).replace(".", ",") + " (" + "R$ " + ((custo * PctLiq) / 100).toFixed(2).replace(".", ",") + ")";

    animarResultadosTabela();

    // ============================================================================
    // FIM DA FUNÇÃO
    // ============================================================================
    // Todos os cálculos foram executados e os resultados foram exibidos na página.
    // Se precisar adicionar novos canais de vendas:
    // 1. Adicione as constantes necessárias na planilha pública
    // 2. Defina as constantes de CNPJ, frete, nível e insumos
    // 3. Implemente os três tipos de cálculo: Manual, ValorLiq, PctLiq
    // 4. Adicione elementos HTML para exibir os resultados
    // 5. Adicione a lógica de exibição (similarmente ao tratamento de RAV SHEFA)
}