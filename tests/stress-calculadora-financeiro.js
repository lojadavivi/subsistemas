const fs = require("fs");
const path = require("path");
const vm = require("vm");

const INPUT_IDS = ["cnpj", "nivel", "peso", "custo", "Manual", "ValorLiq", "PctLiq"];
const OUTPUT_IDS = [
    "resultado_Presencial_Manual", "resultado_Presencial_ValorLiq", "resultado_Presencial_PctLiq",
    "resultado_Amazon_Manual", "resultado_Amazon_ValorLiq", "resultado_Amazon_PctLiq",
    "resultado_CasasBahia_Manual", "resultado_CasasBahia_ValorLiq", "resultado_CasasBahia_PctLiq",
    "resultado_Magalu_Manual", "resultado_Magalu_ValorLiq", "resultado_Magalu_PctLiq",
    "resultado_MLC_Manual", "resultado_MLC_ValorLiq", "resultado_MLC_PctLiq",
    "resultado_MLP_Manual", "resultado_MLP_ValorLiq", "resultado_MLP_PctLiq",
    "resultado_Olist_Manual", "resultado_Olist_ValorLiq", "resultado_Olist_PctLiq",
    "resultado_RD_Manual", "resultado_RD_ValorLiq", "resultado_RD_PctLiq",
    "resultado_Shein_Manual", "resultado_Shein_ValorLiq", "resultado_Shein_PctLiq",
    "resultado_Shopee_Manual", "resultado_Shopee_ValorLiq", "resultado_Shopee_PctLiq",
];

const CNPJS = [
    "LOJA DA VIVI LTDA",
    "FERREIRA PROSPERITA COSMETICOS LTDA",
    "RAV SHEFA DISTRIBUIDORA DE COSMETICOS LTDA",
    "VIVIANE CHRISTINA FERREIRA",
];

const NIVEIS = ["1", "2", "3", "4", "5"];

const PESOS = [
    "até 0.3kg", "0.3 a 0.5kg", "0.5 a 1kg", "1 a 2kg", "2 a 5kg",
    "5 a 9kg", "9 a 13kg", "13 a 17kg", "17 a 23kg", "23 a 30kg",
];

const CUSTO_VALUES = [0.01, 1, 7.99, 25, 49.9, 79, 199.99, 399.99, 999.99];
const MANUAL_VALUES = [0.01, 9.99, 10, 12.5, 12.51, 29, 29.01, 49.89, 49.9, 50, 69.89, 69.9, 69.91, 78.99, 79, 79.99, 80, 99.99, 100, 199.99, 200, 499.99, 1200];
const VALORLIQ_VALUES = [0, 1, 2.5, 10, 25, 50, 100, 300, 700];
const PCT_VALUES = [0, 1, 5, 10, 20, 35, 50, 75, 100];

function buildDocument(inputData) {
    const elements = {};

    for (const id of INPUT_IDS) {
        elements[id] = { value: inputData[id] ?? "", textContent: "" };
    }

    for (const id of OUTPUT_IDS) {
        elements[id] = { value: "", textContent: "" };
    }

    return {
        elements,
        getElementById(id) {
            if (!elements[id]) {
                elements[id] = { value: "", textContent: "" };
            }
            return elements[id];
        },
    };
}

function loadEngine() {
    const root = path.resolve(__dirname, "..");
    const variablesFile = path.join(root, "JS", "calc_variables.js");
    const calculatorFile = path.join(root, "JS", "calculadora.js");

    const context = { console };
    vm.createContext(context);

    vm.runInContext(fs.readFileSync(variablesFile, "utf8"), context, { filename: variablesFile });
    vm.runInContext(fs.readFileSync(calculatorFile, "utf8"), context, { filename: calculatorFile });

    return context;
}

function parseMoeda(text) {
    const match = /R\$\s*(-?\d+[\.,]\d+)/.exec(text || "");
    if (!match) return null;
    return parseFloat(match[1].replace(".", "").replace(",", "."));
}

function runScenario(engine, inputData) {
    const document = buildDocument(inputData);
    engine.document = document;
    engine.calcular(null);

    const output = {};
    for (const id of OUTPUT_IDS) {
        output[id] = document.getElementById(id).textContent;
    }
    return output;
}

function isSugestaoField(outputId) {
    return outputId.includes("_ValorLiq") || outputId.includes("_PctLiq");
}

function validateFreightMapping(engine) {
    const checks = [
        ["0.5 a 1kg", "olist", "Frete_Olist_ACIMA79_500Ga1KG"],
        ["0.5 a 1kg", "mercadoLivre", "Frete_ML_ACIMA79_500Ga1KG"],
        ["0.5 a 1kg", "amazon", "Frete_Amazon_ACIMA79_500Ga1KG"],
    ];

    const failures = [];

    vm.runInContext(
        "globalThis.__STRESS_FRETE = { FRETE_POR_PESO, Frete_Olist_ACIMA79_500Ga1KG, Frete_ML_ACIMA79_500Ga1KG, Frete_Amazon_ACIMA79_500Ga1KG };",
        engine
    );

    const data = engine.__STRESS_FRETE;
    for (const [peso, canal, expectedKey] of checks) {
        const got = data.FRETE_POR_PESO[peso][canal];
        const expected = data[expectedKey];
        if (got !== expected) {
            failures.push({
                tipo: "mapeamento_frete_inconsistente",
                peso,
                canal,
                esperado: expected,
                encontrado: got,
            });
        }
    }

    return failures;
}

function main() {
    const engine = loadEngine();
    const issues = [];

    issues.push(...validateFreightMapping(engine));

    let totalScenarios = 0;

    for (const cnpj of CNPJS) {
        for (const nivel of NIVEIS) {
            for (const peso of PESOS) {
                for (const custo of CUSTO_VALUES) {
                    for (const manual of MANUAL_VALUES) {
                        const inputData = {
                            cnpj,
                            nivel,
                            peso,
                            custo: String(custo),
                            Manual: String(manual),
                            ValorLiq: "0",
                            PctLiq: "0",
                        };
                        totalScenarios += 1;
                        const output = runScenario(engine, inputData);
                        validateOutput(issues, cnpj, inputData, output);
                    }

                    for (const valorLiq of VALORLIQ_VALUES) {
                        const inputData = {
                            cnpj,
                            nivel,
                            peso,
                            custo: String(custo),
                            Manual: "0",
                            ValorLiq: String(valorLiq),
                            PctLiq: "0",
                        };
                        totalScenarios += 1;
                        const output = runScenario(engine, inputData);
                        validateOutput(issues, cnpj, inputData, output);
                    }

                    for (const pct of PCT_VALUES) {
                        const inputData = {
                            cnpj,
                            nivel,
                            peso,
                            custo: String(custo),
                            Manual: "0",
                            ValorLiq: "0",
                            PctLiq: String(pct),
                        };
                        totalScenarios += 1;
                        const output = runScenario(engine, inputData);
                        validateOutput(issues, cnpj, inputData, output);
                    }
                }
            }
        }
    }

    if (issues.length > 0) {
        console.error(`Stress test encontrou ${issues.length} inconsistências em ${totalScenarios} cenários.`);
        for (const issue of issues.slice(0, 40)) {
            console.error("---");
            console.error(JSON.stringify(issue, null, 2));
        }
        process.exit(1);
    }

    console.log(`Stress test OK: ${totalScenarios} cenários sem inconsistências numéricas.`);
}

function validateOutput(issues, cnpj, inputData, output) {
    for (const id of OUTPUT_IDS) {
        const value = output[id] || "";

        if (cnpj === "RAV SHEFA DISTRIBUIDORA DE COSMETICOS LTDA" && !id.startsWith("resultado_Presencial_")) {
            if (value !== "") {
                issues.push({ tipo: "saida_deveria_estar_vazia_para_rav", campo: id, inputData, value });
            }
            continue;
        }

        if (value.includes("NaN") || value.includes("Infinity") || value.includes("undefined")) {
            issues.push({ tipo: "saida_invalida", campo: id, inputData, value });
            continue;
        }

        const moeda = parseMoeda(value);
        if (moeda === null) {
            issues.push({ tipo: "formato_invalido", campo: id, inputData, value });
            continue;
        }

        if (!Number.isFinite(moeda)) {
            issues.push({ tipo: "valor_nao_finito", campo: id, inputData, value });
            continue;
        }

        if (isSugestaoField(id) && moeda < 0) {
            issues.push({ tipo: "sugestao_negativa", campo: id, inputData, value });
        }
    }
}

main();
