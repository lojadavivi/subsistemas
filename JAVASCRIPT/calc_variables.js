// Variáveis de cálculo para a calculadora

// ----------------------------------------

// Alíquota por CNPJ

const cnpj_svltda = 0.08506399;
const cnpj_ltda = 0.09162236;
const cnpj_online_imps = 0.04000002;
const cnpj_online_cmss = 0.02500000;

// ----------------------------------------

// COMISSÃO POR CATEGORIA

// 01 - Bronzeador ou protetor solar
const CtAme01 = 0.17;
const CtMag01 = 0.18;
const CtMerCl01 = 0.13;
const CtMerPr01 = 0.18;
const CtSho01 = 0.2;
const CtSit01 = 0;

// 02 - Creme depilatório
const CtAme02 = 0.17;
const CtMag02 = 0.18;
const CtMerCl02 = 0.13;
const CtMerPr02 = 0.18;
const CtSho02 = 0.2;
const CtSit02 = 0;

// 03 - Desodorante
const CtAme03 = 0.17;
const CtMag03 = 0.18;
const CtMerCl03 = 0.13;
const CtMerPr03 = 0.18;
const CtSho03 = 0.2;
const CtSit03 = 0;

// 04 - Escova ou pente de cabelo
const CtAme04 = 0.17;
const CtMag04 = 0.18;
const CtMerCl04 = 0.12;
const CtMerPr04 = 0.17;
const CtSho04 = 0.2;
const CtSit04 = 0;

// 05 - Espuma de barbear
const CtAme05 = 0.17;
const CtMag05 = 0.18;
const CtMerCl05 = 0.13;
const CtMerPr05 = 0.18;
const CtSho05 = 0.2;
const CtSit05 = 0;

// 06 - Fixador de cabelo
const CtAme06 = 0.17;
const CtMag06 = 0.18;
const CtMerCl06 = 0.12;
const CtMerPr06 = 0.17;
const CtSho06 = 0.2;
const CtSit06 = 0;

// 07 - Maquinário ou eletrônico
const CtAme07 = 0.16;
const CtMag07 = 0.18;
const CtMerCl07 = 0.12;
const CtMerPr07 = 0.17;
const CtSho07 = 0.2;
const CtSit07 = 0;

// 08 - Pele ou unha
const CtAme08 = 0.17;
const CtMag08 = 0.18;
const CtMerCl08 = 0.12;
const CtMerPr08 = 0.17;
const CtSho08 = 0.2;
const CtSit08 = 0;

// 09 - Repelente
const CtAme09 = 0.17;
const CtMag09 = 0.18;
const CtMerCl09 = 0.115;
const CtMerPr09 = 0.165;
const CtSho09 = 0.2;
const CtSit09 = 0;

// 10 - Sabonete
const CtAme10 = 0.17;
const CtMag10 = 0.18;
const CtMerCl10 = 0.13;
const CtMerPr10 = 0.18;
const CtSho10 = 0.2;
const CtSit10 = 0;

// 11 - Shampoo/Cond/Masc capilar
const CtAme11 = 0.17;
const CtMag11 = 0.18;
const CtMerCl11 = 0.13;
const CtMerPr11 = 0.18;
const CtSho11 = 0.2;
const CtSit11 = 0;

// 12 - Tinta capilar
const CtAme12 = 0.17;
const CtMag12 = 0.18;
const CtMerCl12 = 0.12;
const CtMerPr12 = 0.17;
const CtSho12 = 0.2;
const CtSit12 = 0;

// 13 - Utensílio ou acessório de beleza
const CtAme13 = 0.17;
const CtMag13 = 0.18;
const CtMerCl13 = 0.12;
const CtMerPr13 = 0.17;
const CtSho13 = 0.2;
const CtSit13 = 0;

// ----------------------------------------

// FRETE

// Americanas abaixo de R$ 40
const FrAmeMen40 = 0;

// Americanas abaixo de R$ 79
const FrAmeMen79 = 12.9;

// Americanas acima de R$ 79
const FrAmeMai79_300g = 32.9;
const FrAmeMai79_300gA500g = 32.9;
const FrAmeMai79_500gA1kg = 35.9;
const FrAmeMai79_1A2kg = 36.9;
const FrAmeMai79_2A5kg = 45.9;
const FrAmeMai79_5A9kg = 67.9;
const FrAmeMai79_9A13kg = 91.9;
const FrAmeMai79_13A17kg = 104.9;
const FrAmeMai79_17A23kg = 112.9;
const FrAmeMai79_23A30kg = 119.9;

// Magalu abaixo de R$ 79
const FrMagMen79 = 0;

// Magalu acima de R$ 79
const FrMagMai79_300g = 27.9;
const FrMagMai79_300gA500g = 27.9;
const FrMagMai79_500gA1kg = 32.9;
const FrMagMai79_1A2kg = 35.9;
const FrMagMai79_2A5kg = 44.9;
const FrMagMai79_5A9kg = 47.9;
const FrMagMai79_9A13kg = 52.9;
const FrMagMai79_13A17kg = 57.9;
const FrMagMai79_17A23kg = 62.9;
const FrMagMai79_23A30kg = 67.9;

// Mercado Livre abaixo de R$ 79
const FrMerMen79 = 0;

// Mercado Livre acima de R$ 79
const FrMerMai79_300g = 35.9;
const FrMerMai79_300gA500g = 36.9;
const FrMerMai79_500gA1kg = 40.9;
const FrMerMai79_1A2kg = 42.9;
const FrMerMai79_2A5kg = 52.9;
const FrMerMai79_5A9kg = 77.9;
const FrMerMai79_9A13kg = 121.9;
const FrMerMai79_13A17kg = 135.9;
const FrMerMai79_17A23kg = 158.9;
const FrMerMai79_23A30kg = 182.9;

// Shopee
const FrSho = 0;

// Site
const FrSit = 0;

// ----------------------------------------

// DESCONTO (%) POR NÍVEL

// Americanas
const NvAme1 = 1;
const NvAme2 = 1;
const NvAme3 = 1;
const NvAme4 = 0.6;
const NvAme5 = 0.5;

// Magalu
const NvMag1 = 1;
const NvMag2 = 1;
const NvMag3 = 0.6;
const NvMag4 = 0.5;
const NvMag5 = 0.5;

// Mercado Livre
const NvMer1 = 1;
const NvMer2 = 1;
const NvMer3 = 0.6;
const NvMer4 = 0.5;
const NvMer5 = 0.5;

// Shopee
const NvSho = 1;

// Site
const NvSit = 1;

// ----------------------------------------

// TAXA FIXA

// Americanas
const TxAme = 0;

// Magalu
const TxMag_10 = 0;
const TxMag_10A40 = 5;
const TxMag_40A79 = 5;
const TxMag_79 = 5;

// Mercado Livre
const TxMerMen79 = 6;
const TxMerMai79 = 0;

// Shopee
const TxSho = 3;

// Site
const TxSit_10 = 0;
const TxSit_10A40 = 0;
const TxSit_40A79 = 0;
const TxSit_79 = 0;