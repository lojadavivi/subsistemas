// Variaveis de calculo para a calculadora

// ----------------------------------------

// Alíquota Simples Nacional

const cnpjLTDA = 0.0908; 
const cnpjFERREIRA = 0.0554;
const cnpjVIVI = 0.04;

// Lucro Presumido
const ICMSRAV = 0.17;
const PISRAV = 0.0065;
const COFINSRAV = 0.03;
const FreteRAV = 0.03;
const ComissaoRAV = 0.1;
const cnpjRAV = (ICMSRAV + PISRAV + COFINSRAV + FreteRAV + ComissaoRAV);
const MaquininhaRAV = 0.0329;
const LucroPresumidoRAV = 0.08;
const IRPJRAV = 0.15;
const CSLLRAV = 0.09;
const PresuncaoRAV = (LucroPresumidoRAV * (IRPJRAV + CSLLRAV));


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

const ComissaoPresencial = 0.0329;
const ComissaoCasasBahia = 0.21;
const ComissaoMagalu = 0.18;
const ComissaoMercadoLivreClassico = 0.13;
const ComissaoMercadoLivrePremium = 0.18;
const ComissaoRD = 0.18;
const ComissaoShein = 0.16;
const ComissaoShopee = 0.22;

// ----------------------------------------

// FRETE

// Presencial
// Não se aplica
const FretePresencial = 0;

// Casas Bahia
// Até 69,89 o frete é pago pelo cliente
// Acima de 69,90 o frete é pago pelo vendedor
const FreteCasasBahia_ATE69 = 0;
const FreteCasasBahia_ACIMA79_ate300G = 29;
const FreteCasasBahia_ACIMA79_300a500G = 29;
const FreteCasasBahia_ACIMA79_500Ga1KG = 32;
const FreteCasasBahia_ACIMA79_1a2KG = 34;
const FreteCasasBahia_ACIMA79_2a5KG = 42;
const FreteCasasBahia_ACIMA79_5a9KG = 67.9;
const FreteCasasBahia_ACIMA79_9a13KG = 91.9;
const FreteCasasBahia_ACIMA79_13a17KG = 104.9;
const FreteCasasBahia_ACIMA79_17a23KG = 112.9;
const FreteCasasBahia_ACIMA79_23a30KG = 119.9;

// Magalu 
// Até 78,99 o frete é pago pelo cliente
// Acima de 79 o frete é pago pelo vendedor
const FreteMagalu_ATE79 = 0;
const FreteMagalu_ACIMA79_ate300G = 29.9;
const FreteMagalu_ACIMA79_300a500G = 29.9;
const FreteMagalu_ACIMA79_500Ga1KG = 35.9;
const FreteMagalu_ACIMA79_1a2KG = 38.9;
const FreteMagalu_ACIMA79_2a5KG = 46.9;
const FreteMagalu_ACIMA79_5a9KG = 68.9;
const FreteMagalu_ACIMA79_9a13KG = 89.9;
const FreteMagalu_ACIMA79_13a17KG = 102.9;
const FreteMagalu_ACIMA79_17a23KG = 125.9;
const FreteMagalu_ACIMA79_23a30KG = 139.9;

// Mercado Livre
// Até 78,99 o frete é pago pelo cliente
// Acima de 79 o frete é pago pelo vendedor
const FreteMercadoLivre_ATE79 = 0;
const FreteMercadoLivre_ACIMA79_ate300G = 40.90;
const FreteMercadoLivre_ACIMA79_300a500G = 41.9;
const FreteMercadoLivre_ACIMA79_500Ga1KG = 43.9;
const FreteMercadoLivre_ACIMA79_1a2KG = 46.9;
const FreteMercadoLivre_ACIMA79_2a5KG = 51.9;
const FreteMercadoLivre_ACIMA79_5a9KG = 83.9;
const FreteMercadoLivre_ACIMA79_9a13KG = 131.9;
const FreteMercadoLivre_ACIMA79_13a17KG = 146.9;
const FreteMercadoLivre_ACIMA79_17a23KG = 171.9;
const FreteMercadoLivre_ACIMA79_23a30KG = 197.9;

// RD
// O frete é pago pelo cliente
const FreteRD = 0;

// Shein
// Até 49,89 o frete é pago pelo cliente
// Acima de 49,90 o frete é pago pelo vendedor
const FreteShein_ATE49 = 0;
const FreteShein_ACIMA49_ate300G = 4;
const FreteShein_ACIMA49_300a500G = 5;
const FreteShein_ACIMA49_500Ga1KG = 5;
const FreteShein_ACIMA49_1a2KG = 5;
const FreteShein_ACIMA49_2a5KG = 15;
const FreteShein_ACIMA49_5a9KG = 32;
const FreteShein_ACIMA49_9a13KG = 63;
const FreteShein_ACIMA49_13a17KG = 73;
const FreteShein_ACIMA49_17a23KG = 89;
const FreteShein_ACIMA49_23a30KG = 106;

// Shopee
// O frete é pago pelo cliente
const FreteShopee = 0;

// ----------------------------------------

// DESCONTO (%) POR NÍVEL

// Presencial
// Não se aplica
const NivelPresencial = 1;

// Casas Bahia
// 1 ao 3:  não ha (1)
// 4:       40% (0.6)
// 5:       50% (0.5)
const NivelCasasBahia1 = 1;
const NivelCasasBahia2 = 1;
const NivelCasasBahia3 = 1;
const NivelCasasBahia4 = 0.6;
const NivelCasasBahia5 = 0.5;


// Magalu
// 1 ao 3:  não ha (1)
// 4:       25% (0.75)
// 5:       50% (0.5)
const NivelMagalu1 = 1;
const NivelMagalu2 = 1;
const NivelMagalu3 = 0.75;
const NivelMagalu4 = 0.5;
const NivelMagalu5 = 0.5;

// Mercado Livre
// 1 e 2:   não ha (1)
// 3:       40% (0.6)
// 4 e 5:   50% (0.5)
const NivelMercadoLivre1 = 1;
const NivelMercadoLivre2 = 1;
const NivelMercadoLivre3 = 0.6;
const NivelMercadoLivre4 = 0.5;
const NivelMercadoLivre5 = 0.5;

// RD
// Não ha
const NivelRD = 1;

// Shein
// Não ha
const NivelShein = 1;

// Shopee
// Não ha
const NivelShopee = 1;

// ----------------------------------------

// TAXA FIXA

// Presencial
// Não se aplica
const TaxaPresencial = 0;

// Casas Bahia
// Não ha taxa fixa
const TaxaCasasBahia = 0;

// Magalu
// Até R$ 9,99:     não ha
// Acima de R$ 10:  R$ 5
const TaxaMagalu_ATE10 = 0;
const TaxaMagalu_ACIMA10 = 5;

// Mercado Livre
// Até R$ 28,99:                R$ 6,25
// Entre R$ 29,00 e R$ 49,99:   R$ 6,50
// Entre R$ 50,00 e R$ 78,99:   R$ 6,75
// Acima de R$ 79:              não ha
const TaxaMercadoLivre_ATE29 = 6.25;
const TaxaMercadoLivre_ATE50 = 6.5;
const TaxaMercadoLivre_ATE79 = 6.75;
const TaxaMercadoLivre_ACIMA79 = 0;

// RD
// Não ha
const TaxaRD = 0;

// Shein
// Não ha
const TaxaShein = 0;

// Shopee
// Até R$ 8:            metade do valor de venda
// Acima de R$ 8:       R$ 4
const TaxaShopee_ACIMA8 = 4;