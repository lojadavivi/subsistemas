// Variáveis de cálculo para a calculadora

// ----------------------------------------

// Alíquota por CNPJ

const cnpjLTDA = 0.10;
const cnpjONLINE = 0.05;
const cnpjSV = 0.09;
const cnpjVIVI = 0.06;

// ----------------------------------------

// COMISSÃO

// Americanas:      17%
// Casas Bahia:     21%
// Magalu:          18%
// Mercado Livre:   13% clássico e 18% premium
// Olist:           21%
// RD:              18%
// Shopee:          20%
// WebContinental:  ?
// SiteUool:        ?
// SiteAtacado:     ?

const ComissaoAmericanas = 0.17;
const ComissaoCasasBahia = 0.21;
const ComissaoMagalu = 0.18;
const ComissaoMercadoLivreClassico = 0.13;
const ComissaoMercadoLivrePremium = 0.18;
const ComissaoOlist = 0.21;
const ComissaoRD = 0.18;
const ComissaoShopee = 0.2;
const ComissaoWebContinental = 999;
const ComissaoSiteUool = 999;
const ComissaoSiteAtacado = 999;

// ----------------------------------------

// FRETE

// Americanas
// Até R$ 40 o frete é pago pelo cliente
// De R$ 40 a 89,99 o frete é pago pelo vendedor, com um desconto baseado no nível
// Acima de R$ 90 o frete é pago pelo vendedor, com um desconto baseado no nível
const FreteAmericanas_ATE40 = 0;
const FreteAmericanas_DE40A89 = 12.9;
const FreteAmericanas_ACIMA79_ate300G = 37.9;
const FreteAmericanas_ACIMA79_300a500G = 37.9;
const FreteAmericanas_ACIMA79_500Ga1KG = 40.9;
const FreteAmericanas_ACIMA79_1a2KG = 41.9;
const FreteAmericanas_ACIMA79_2a5KG = 50.9;
const FreteAmericanas_ACIMA79_5a9KG = 72.9;
const FreteAmericanas_ACIMA79_9a13KG = 96.9;
const FreteAmericanas_ACIMA79_13a17KG = 113.9;
const FreteAmericanas_ACIMA79_17a23KG = 121.9;
const FreteAmericanas_ACIMA79_23a30KG = 128.9;

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
const FreteMagalu_ACIMA79_ate300G = 27.9;
const FreteMagalu_ACIMA79_300a500G = 27.9;
const FreteMagalu_ACIMA79_500Ga1KG = 32.9;
const FreteMagalu_ACIMA79_1a2KG = 35.9;
const FreteMagalu_ACIMA79_2a5KG = 44.9;
const FreteMagalu_ACIMA79_5a9KG = 47.9;
const FreteMagalu_ACIMA79_9a13KG = 52.9;
const FreteMagalu_ACIMA79_13a17KG = 57.9;
const FreteMagalu_ACIMA79_17a23KG = 62.9;
const FreteMagalu_ACIMA79_23a30KG = 67.9;

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

// Olist
// Até 78,99 o frete é pago pelo cliente
// Acima de 79 o frete é pago pelo vendedor
const FreteOlist_ATE79 = 0;
const FreteOlist_ACIMA79_ate300G = 37.9;
const FreteOlist_ACIMA79_300a500G = 38.9;
const FreteOlist_ACIMA79_500Ga1KG = 42.9;
const FreteOlist_ACIMA79_1a2KG = 44.9;
const FreteOlist_ACIMA79_2a5KG = 52.9;
const FreteOlist_ACIMA79_5a9KG = 81.9;
const FreteOlist_ACIMA79_9a13KG = 127.9;
const FreteOlist_ACIMA79_13a17KG = 142.9;
const FreteOlist_ACIMA79_17a23KG = 166.9;
const FreteOlist_ACIMA79_23a30KG = 191.9;

// RD
// O frete é pago pelo cliente
const FreteRD = 0;

// Shopee
// O frete é pago pelo cliente
const FreteShopee = 0;

// Web Continental
// ?
const FreteWebContinental = 999;

// Site Uool
// O frete é pago pelo cliente
const FreteSiteUool = 0;

// Site Atacado
// O frete é pago pelo cliente
const FreteSiteAtacado = 0;

// ----------------------------------------

// DESCONTO (%) POR NÍVEL

// Americanas
// 1 ao 3:  não há (1)
// 4:       40% (0.6)
// 5:       50% (0.5)
const NivelAmericanas1 = 1;
const NivelAmericanas2 = 1;
const NivelAmericanas3 = 1;
const NivelAmericanas4 = 0.6;
const NivelAmericanas5 = 0.5;

// Casas Bahia
// 1 ao 3:  não há (1)
// 4:       40% (0.6)
// 5:       50% (0.5)
const NivelCasasBahia1 = 1;
const NivelCasasBahia2 = 1;
const NivelCasasBahia3 = 1;
const NivelCasasBahia4 = 0.6;
const NivelCasasBahia5 = 0.5;


// Magalu
// 1 ao 3:  não há (1)
// 4:       25% (0.75)
// 5:       50% (0.5)
const NivelMagalu1 = 1;
const NivelMagalu2 = 1;
const NivelMagalu3 = 0.75;
const NivelMagalu4 = 0.5;
const NivelMagalu5 = 0.5;

// Mercado Livre
// 1 e 2:   não há (1)
// 3:       40% (0.6)
// 4 e 5:   50% (0.5)
const NivelMercadoLivre1 = 1;
const NivelMercadoLivre2 = 1;
const NivelMercadoLivre3 = 0.6;
const NivelMercadoLivre4 = 0.5;
const NivelMercadoLivre5 = 0.5;

// Olist
// 1:       30% (0.7)
// 2:       35% (0.65)
// 3:       40% (0.6)
// 4:       45% (0.55)
// 5:       50% (0.5)
const NivelOlist1 = 0.7;
const NivelOlist2 = 0.65;
const NivelOlist3 = 0.6;
const NivelOlist4 = 0.55;
const NivelOlist5 = 0.5;

// RD
// Não há
const NivelRD = 1;

// Shopee
// Não há
const NivelShopee = 1;

// Web Continental
// ?
const NivelWebContinental = 999;

// Site Uool
// Não há
const NivelSiteUool = 1;

// Site Atacado
// Não há
const NivelSiteAtacado = 1;

// ----------------------------------------

// TAXA FIXA

// Americanas
// Não há taxa fixa
const TaxaAmericanas = 0;

// Casas Bahia
// Não há taxa fixa
const TaxaCasasBahia = 0;

// Magalu
// Até R$ 9,99:     não há
// Acima de R$ 10:  R$ 5
const TaxaMagalu_ATE10 = 0;
const TaxaMagalu_ACIMA10 = 5;

// Mercado Livre
// Até R$ 29,99:        R$ 1
// De R$ 30 a 49,99:    R$ 2
// De R$ 50 a 99,99:    R$ 4
// De R$ 100 a 198,99:  R$ 6
// Acima de R$ 199:     não há
const TaxaMercadoLivre_ATE29 = 1;
const TaxaMercadoLivre_DE30A49 = 2;
const TaxaMercadoLivre_DE50A99 = 4;
const TaxaMercadoLivre_DE100A199 = 6;
const TaxaMercadoLivre_ACIMA199 = 0;

// Olist
// Até R$ 78,99:        R$ 5
// Acima de R$ 79:      não há
const TaxaOlist_ATE79 = 5;
const TaxaOlist_ACIMA79 = 0;

// RD
// Não há
const TaxaRD = 0;

// Shopee
// Taxa fixa de R$ 3
const TaxaShopee = 3;

// Web Continental
// ?
const TaxaWebContinental = 999;

// Site Uool
// Verificar cartão de crédito em 1 e 12x
const TaxaSiteUool_01x = 0;
const TaxaSiteUool_12x = 0.1306;

// Site Atacado
// Verificar cartão de crédito em 1 e 12x
const TaxaSiteAtacado_01x = 0;
const TaxaSiteAtacado_12x = 0.1306;
