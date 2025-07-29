// Variaveis de calculo para a calculadora

// ----------------------------------------

// Alíquota Simples Nacional

const cnpj_LTDA = 0.0908; 
const cnpj_FERREIRA = 0.0554;
const cnpj_VIVI = 0.04;

// Lucro Presumido
const ICMS_RAV = 0.17;
const PIS_RAV = 0.0065;
const COFINS_RAV = 0.03;
const Frete_RAV = 0.03;
const Comissao_RAV = 0.1;
const Maquininha_RAV = 0.0329;
const Presuncao_IRPJ_RAV = 0.08;
const Presuncao_CSLL_RAV = 0.12;
const IRPJ_RAV = 0.15;
const CSLL_RAV = 0.09;
const cnpj_RAV = (ICMS_RAV + PIS_RAV + COFINS_RAV + Frete_RAV + Comissao_RAV + Maquininha_RAV + (Presuncao_IRPJ_RAV * IRPJ_RAV) + (Presuncao_CSLL_RAV * CSLL_RAV));


// ----------------------------------------

// COMISSÃO

// Presencial       3,29% maximo da Stone (crédito)
// Americanas:      17%
// Casas Bahia:     21%
// Magalu:          18%
// Mercado Livre:   13% classico e 18% premium
// Olist:           21%
// RD:              18%
// Shein:           16%
// Shopee:          20% comissão + 2% Shopee Antecipa
// WebContinental:  ?
// SiteUool:        4,69% em 1x e 19,13% em 12x
// SiteAtacado:     4,59% em 1x e 23,87% em 12x

const Comissao_Presencial = 0.0329;
const Comissao_CasasBahia = 0.21;
const Comissao_Magalu = 0.18;
const Comissao_MLC = 0.13;
const Comissao_MLP = 0.18;
const Comissao_RD = 0.18;
const Comissao_Shein = 0.16;
const Comissao_Shopee = 0.22;

// ----------------------------------------

// FRETE

// Presencial
// Não se aplica
const Frete_Presencial = 0;

// Casas Bahia
// Até 69,89 o frete é pago pelo cliente
// Acima de 69,90 o frete é pago pelo vendedor
const Frete_CasasBahia_ATE69 = 0;
const Frete_CasasBahia_ACIMA79_ate300G = 29;
const Frete_CasasBahia_ACIMA79_300a500G = 29;
const Frete_CasasBahia_ACIMA79_500Ga1KG = 32;
const Frete_CasasBahia_ACIMA79_1a2KG = 34;
const Frete_CasasBahia_ACIMA79_2a5KG = 42;
const Frete_CasasBahia_ACIMA79_5a9KG = 67.9;
const Frete_CasasBahia_ACIMA79_9a13KG = 91.9;
const Frete_CasasBahia_ACIMA79_13a17KG = 104.9;
const Frete_CasasBahia_ACIMA79_17a23KG = 112.9;
const Frete_CasasBahia_ACIMA79_23a30KG = 119.9;

// Magalu 
// Até 78,99 o frete é pago pelo cliente
// Acima de 79 o frete é pago pelo vendedor
const Frete_Magalu_ATE79 = 0;
const Frete_Magalu_ACIMA79_ate300G = 29.9;
const Frete_Magalu_ACIMA79_300a500G = 29.9;
const Frete_Magalu_ACIMA79_500Ga1KG = 35.9;
const Frete_Magalu_ACIMA79_1a2KG = 38.9;
const Frete_Magalu_ACIMA79_2a5KG = 46.9;
const Frete_Magalu_ACIMA79_5a9KG = 68.9;
const Frete_Magalu_ACIMA79_9a13KG = 89.9;
const Frete_Magalu_ACIMA79_13a17KG = 102.9;
const Frete_Magalu_ACIMA79_17a23KG = 125.9;
const Frete_Magalu_ACIMA79_23a30KG = 139.9;

// Mercado Livre
// Até 78,99 o frete é pago pelo cliente
// Acima de 79 o frete é pago pelo vendedor
const Frete_ML_ATE79 = 0;
const Frete_ML_ACIMA79_ate300G = 40.90;
const Frete_ML_ACIMA79_300a500G = 41.9;
const Frete_ML_ACIMA79_500Ga1KG = 43.9;
const Frete_ML_ACIMA79_1a2KG = 46.9;
const Frete_ML_ACIMA79_2a5KG = 51.9;
const Frete_ML_ACIMA79_5a9KG = 83.9;
const Frete_ML_ACIMA79_9a13KG = 131.9;
const Frete_ML_ACIMA79_13a17KG = 146.9;
const Frete_ML_ACIMA79_17a23KG = 171.9;
const Frete_ML_ACIMA79_23a30KG = 197.9;

// RD
// O frete é pago pelo cliente
const Frete_RD = 0;

// Shein
// Até 49,89 o frete é pago pelo cliente
// Acima de 49,90 o frete é pago pelo vendedor
const Frete_Shein_ATE49 = 0;
const Frete_Shein_ACIMA49_ate300G = 4;
const Frete_Shein_ACIMA49_300a500G = 5;
const Frete_Shein_ACIMA49_500Ga1KG = 5;
const Frete_Shein_ACIMA49_1a2KG = 5;
const Frete_Shein_ACIMA49_2a5KG = 15;
const Frete_Shein_ACIMA49_5a9KG = 32;
const Frete_Shein_ACIMA49_9a13KG = 63;
const Frete_Shein_ACIMA49_13a17KG = 73;
const Frete_Shein_ACIMA49_17a23KG = 89;
const Frete_Shein_ACIMA49_23a30KG = 106;

// Shopee
// O frete é pago pelo cliente
const Frete_Shopee = 0;

// ----------------------------------------

// DESCONTO (%) POR NÍVEL

// Presencial
// Não se aplica
const Nivel_Presencial = 1;

// Casas Bahia
// 1 ao 3:  não ha (1)
// 4:       40% (0.6)
// 5:       50% (0.5)
const Nivel_CasasBahia_1 = 1;
const Nivel_CasasBahia_2 = 1;
const Nivel_CasasBahia_3 = 1;
const Nivel_CasasBahia_4 = 0.6;
const Nivel_CasasBahia_5 = 0.5;


// Magalu
// 1 ao 3:  não ha (1)
// 4:       25% (0.75)
// 5:       50% (0.5)
const Nivel_Magalu_1 = 1;
const Nivel_Magalu_2 = 1;
const Nivel_Magalu_3 = 0.75;
const Nivel_Magalu_4 = 0.5;
const Nivel_Magalu_5 = 0.5;

// Mercado Livre
// 1 e 2:   não ha (1)
// 3:       40% (0.6)
// 4 e 5:   50% (0.5)
const Nivel_ML_1 = 1;
const Nivel_ML_2 = 1;
const Nivel_ML_3 = 0.6;
const Nivel_ML_4 = 0.5;
const Nivel_ML_5 = 0.5;

// RD
// Não ha
const Nivel_RD = 1;

// Shein
// Não ha
const Nivel_Shein = 1;

// Shopee
// Não ha
const Nivel_Shopee = 1;

// ----------------------------------------

// TAXA FIXA

// Presencial
// Não se aplica
const Taxa_Presencial = 0;

// Casas Bahia
// Não ha taxa fixa
const Taxa_CasasBahia = 0;

// Magalu
// Até R$ 9,99:     não ha
// Acima de R$ 10:  R$ 5
const Taxa_Magalu_ATE10 = 0;
const Taxa_Magalu_ACIMA10 = 5;

// Mercado Livre
// Até R$ 28,99:                R$ 6,25
// Entre R$ 29,00 e R$ 49,99:   R$ 6,50
// Entre R$ 50,00 e R$ 78,99:   R$ 6,75
// Acima de R$ 79:              não ha
const Taxa_ML_ATE29 = 6.25;
const Taxa_ML_ATE50 = 6.5;
const Taxa_ML_ATE79 = 6.75;
const Taxa_ML_ACIMA79 = 0;

// RD
// Não ha
const Taxa_RD = 0;

// Shein
// Não ha
const Taxa_Shein = 0;

// Shopee
// Até R$ 8:            metade do valor de venda
// Acima de R$ 8:       R$ 4
const Taxa_Shopee_ACIMA8 = 4;