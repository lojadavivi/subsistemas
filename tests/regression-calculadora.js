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
    "até 0.3kg",
    "0.3 a 0.5kg",
    "0.5 a 1kg",
    "1 a 2kg",
    "2 a 5kg",
    "5 a 9kg",
    "9 a 13kg",
    "13 a 17kg",
    "17 a 23kg",
    "23 a 30kg",
];

const SAMPLE_VALUES = [
    { custo: "7.99", manual: "9.99", valorLiq: "2.00", pctLiq: "5" },
    { custo: "11.50", manual: "12.50", valorLiq: "3.75", pctLiq: "12" },
    { custo: "22.30", manual: "29.00", valorLiq: "8.50", pctLiq: "18" },
    { custo: "34.90", manual: "49.90", valorLiq: "12.20", pctLiq: "25" },
    { custo: "61.25", manual: "78.99", valorLiq: "19.90", pctLiq: "32" },
    { custo: "75.00", manual: "79.00", valorLiq: "22.00", pctLiq: "35" },
    { custo: "88.40", manual: "99.99", valorLiq: "28.00", pctLiq: "40" },
    { custo: "130.75", manual: "199.99", valorLiq: "46.20", pctLiq: "55" },
    { custo: "175.25", manual: "200.00", valorLiq: "59.90", pctLiq: "60" },
];

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

function runScenario({ variablesFile, calculatorFile, inputData }) {
    const document = buildDocument(inputData);
    const context = {
        document,
        console,
    };

    vm.createContext(context);

    const variablesCode = fs.readFileSync(variablesFile, "utf8");
    const calculatorCode = fs.readFileSync(calculatorFile, "utf8");

    vm.runInContext(variablesCode, context, { filename: variablesFile });
    vm.runInContext(calculatorCode, context, { filename: calculatorFile });

    context.calcular(null);

    const output = {};
    for (const id of OUTPUT_IDS) {
        output[id] = document.getElementById(id).textContent;
    }

    return output;
}

function compareOutputs(a, b) {
    for (const id of OUTPUT_IDS) {
        if (a[id] !== b[id]) {
            return id;
        }
    }
    return null;
}

function main() {
    const root = path.resolve(__dirname, "..");

    const legacyVariables = path.join(root, "tests", "calc_variables.legacy.js");
    const legacyCalculator = path.join(root, "tests", "calculadora.legacy.js");
    const newVariables = path.join(root, "JS", "calc_variables.js");
    const newCalculator = path.join(root, "JS", "calculadora.js");

    const failures = [];
    let total = 0;

    for (const cnpj of CNPJS) {
        for (const nivel of NIVEIS) {
            for (const peso of PESOS) {
                for (const sample of SAMPLE_VALUES) {
                    const inputData = {
                        cnpj,
                        nivel,
                        peso,
                        custo: sample.custo,
                        Manual: sample.manual,
                        ValorLiq: sample.valorLiq,
                        PctLiq: sample.pctLiq,
                    };

                    const legacyOutput = runScenario({
                        variablesFile: legacyVariables,
                        calculatorFile: legacyCalculator,
                        inputData,
                    });

                    const newOutput = runScenario({
                        variablesFile: newVariables,
                        calculatorFile: newCalculator,
                        inputData,
                    });

                    const mismatchField = compareOutputs(legacyOutput, newOutput);
                    total += 1;

                    if (mismatchField) {
                        failures.push({ inputData, mismatchField, legacy: legacyOutput[mismatchField], modern: newOutput[mismatchField] });
                        if (failures.length >= 20) {
                            break;
                        }
                    }
                }
                if (failures.length >= 20) break;
            }
            if (failures.length >= 20) break;
        }
        if (failures.length >= 20) break;
    }

    if (failures.length > 0) {
        console.error(`Falhas de regressão: ${failures.length} (de ${total} cenários executados).`);
        for (const failure of failures) {
            console.error("---");
            console.error(JSON.stringify(failure, null, 2));
        }
        process.exit(1);
    }

    console.log(`Regressão OK: ${total} cenários com saída idêntica entre legado e refatorado.`);
}

main();
