// Variáveis de cálculo para a calculadora

// ----------------------------------------

// Alíquota por CNPJ

const cnpjLTDA = 0.10;
const cnpjONLINE = 0.05;
const cnpjSV = 0.09;
const cnpjVIVI = 0.06;

// ----------------------------------------

// COMISSÃO POR CATEGORIA

// Americanas: todos os produtos que vendemos atualmente entram na taxa de 17%

// 01 - Bronzeador ou protetor solar
const CategoriaAmericanas01 = 0.17;
const CategoriaCasasBahia01 = 0;
const CategoriaMagalu01 = 0.18;
const CategoriaMercadoLivreClassico01 = 0.13;
const CategoriaMercadoLivrePremium01 = 0.18;
const CategoriaOlist01 = 0;
const CategoriaRD01 = 0;
const CategoriaShopee01 = 0.2;
const CategoriaWebContinental01 = 0;
const CategoriaSiteUool01 = 0;
const CategoriaSiteAtacado01 = 0;

// 02 - Creme depilatório
const CategoriaAmericanas02 = 0.17;
const CategoriaCasasBahia02 = 0;
const CategoriaMagalu02 = 0.18;
const CategoriaMercadoLivreClassico02 = 0.13;
const CategoriaMercadoLivrePremium02 = 0.18;
const CategoriaOlist02 = 0;
const CategoriaRD02 = 0;
const CategoriaShopee02 = 0.2;
const CategoriaWebContinental02 = 0;
const CategoriaSiteUool02 = 0;
const CategoriaSiteAtacado02 = 0;

// 03 - Desodorante
const CategoriaAmericanas03 = 0.17;
const CategoriaCasasBahia03 = 0;
const CategoriaMagalu03 = 0.18;
const CategoriaMercadoLivreClassico03 = 0.13;
const CategoriaMercadoLivrePremium03 = 0.18;
const CategoriaOlist03 = 0;
const CategoriaRD03 = 0;
const CategoriaShopee03 = 0.2;
const CategoriaWebContinental03 = 0;
const CategoriaSiteUool03 = 0;
const CategoriaSiteAtacado03 = 0;

// 04 - Escova ou pente de cabelo
const CategoriaAmericanas04 = 0.17;
const CategoriaCasasBahia04 = 0;
const CategoriaMagalu04 = 0.18;
const CategoriaMercadoLivreClassico04 = 0.12;
const CategoriaMercadoLivrePremium04 = 0.17;
const CategoriaOlist04 = 0;
const CategoriaRD04 = 0;
const CategoriaShopee04 = 0.2;
const CategoriaWebContinental04 = 0;
const CategoriaSiteUool04 = 0;
const CategoriaSiteAtacado04 = 0;

// 05 - Espuma de barbear
const CategoriaAmericanas05 = 0.17;
const CategoriaCasasBahia05 = 0;
const CategoriaMagalu05 = 0.18;
const CategoriaMercadoLivreClassico05 = 0.13;
const CategoriaMercadoLivrePremium05 = 0.18;
const CategoriaOlist05 = 0;
const CategoriaRD05 = 0;
const CategoriaShopee05 = 0.2;
const CategoriaWebContinental05 = 0;
const CategoriaSiteUool05 = 0;
const CategoriaSiteAtacado05 = 0;

// 06 - Fixador de cabelo
const CategoriaAmericanas06 = 0.17;
const CategoriaCasasBahia06 = 0;
const CategoriaMagalu06 = 0.18;
const CategoriaMercadoLivreClassico06 = 0.12;
const CategoriaMercadoLivrePremium06 = 0.17;
const CategoriaOlist06 = 0;
const CategoriaRD06 = 0;
const CategoriaShopee06 = 0.2;
const CategoriaWebContinental06 = 0;
const CategoriaSiteUool06 = 0;
const CategoriaSiteAtacado06 = 0;

// 07 - Maquinário ou eletrônico
const CategoriaAmericanas07 = 0.16;
const CategoriaCasasBahia07 = 0;
const CategoriaMagalu07 = 0.18;
const CategoriaMercadoLivreClassico07 = 0.12;
const CategoriaMercadoLivrePremium07 = 0.17;
const CategoriaOlist07 = 0;
const CategoriaRD07 = 0;
const CategoriaShopee07 = 0.2;
const CategoriaWebContinental07 = 0;
const CategoriaSiteUool07 = 0;
const CategoriaSiteAtacado07 = 0;

// 08 - Pele ou unha
const CategoriaAmericanas08 = 0.17;
const CategoriaCasasBahia08 = 0;
const CategoriaMagalu08 = 0.18;
const CategoriaMercadoLivreClassico08 = 0.12;
const CategoriaMercadoLivrePremium08 = 0.17;
const CategoriaOlist08 = 0;
const CategoriaRD08 = 0;
const CategoriaShopee08 = 0.2;
const CategoriaWebContinental08 = 0;
const CategoriaSiteUool08 = 0;
const CategoriaSiteAtacado08 = 0;

// 09 - Repelente
const CategoriaAmericanas09 = 0.17;
const CategoriaCasasBahia09 = 0;
const CategoriaMagalu09 = 0.18;
const CategoriaMercadoLivreClassico09 = 0.115;
const CategoriaMercadoLivrePremium09 = 0.165;
const CategoriaOlist09 = 0;
const CategoriaRD09 = 0;
const CategoriaShopee09 = 0.2;
const CategoriaWebContinental09 = 0;
const CategoriaSiteUool09 = 0;
const CategoriaSiteAtacado09 = 0;

// 10 - Sabonete
const CategoriaAmericanas10 = 0.17;
const CategoriaCasasBahia10 = 0;
const CategoriaMagalu10 = 0.18;
const CategoriaMercadoLivreClassico10 = 0.13;
const CategoriaMercadoLivrePremium10 = 0.18;
const CategoriaOlist10 = 0;
const CategoriaRD10 = 0;
const CategoriaShopee10 = 0.2;
const CategoriaWebContinental10 = 0;
const CategoriaSiteUool10 = 0;
const CategoriaSiteAtacado10 = 0;

// 11 - Shampoo/Cond/Masc capilar
const CategoriaAmericanas11 = 0.17;
const CategoriaCasasBahia11 = 0;
const CategoriaMagalu11 = 0.18;
const CategoriaMercadoLivreClassico11 = 0.13;
const CategoriaMercadoLivrePremium11 = 0.18;
const CategoriaOlist11 = 0;
const CategoriaRD11 = 0;
const CategoriaShopee11 = 0.2;
const CategoriaWebContinental11 = 0;
const CategoriaSiteUool11 = 0;
const CategoriaSiteAtacado11 = 0;

// 12 - Tinta capilar
const CategoriaAmericanas12 = 0.17;
const CategoriaCasasBahia12 = 0;
const CategoriaMagalu12 = 0.18;
const CategoriaMercadoLivreClassico12 = 0.12;
const CategoriaMercadoLivrePremium12 = 0.17;
const CategoriaOlist12 = 0;
const CategoriaRD12 = 0;
const CategoriaShopee12 = 0.2;
const CategoriaWebContinental12 = 0;
const CategoriaSiteUool12 = 0;
const CategoriaSiteAtacado12 = 0;

// 13 - Utensílio ou acessório de beleza
const CategoriaAmericanas13 = 0.17;
const CategoriaCasasBahia13 = 0;
const CategoriaMagalu13 = 0.18;
const CategoriaMercadoLivreClassico13 = 0.12;
const CategoriaMercadoLivrePremium13 = 0.17;
const CategoriaOlist13 = 0;
const CategoriaRD13 = 0;
const CategoriaShopee13 = 0.2;
const CategoriaWebContinental13 = 0;
const CategoriaSiteUool13 = 0;
const CategoriaSiteAtacado13 = 0;

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
const FreteCasasBahia = 0;

// Magalu 
const FreteMagaluGratis = 0;
const FreteMagalu_ate300G = 27.9;
const FreteMagalu_300a500G = 27.9;
const FreteMagalu_500Ga1KG = 32.9;
const FreteMagalu_1a2KG = 35.9;
const FreteMagalu_2a5KG = 44.9;
const FreteMagalu_5a9KG = 47.9;
const FreteMagalu_9a13KG = 52.9;
const FreteMagalu_13a17KG = 57.9;
const FreteMagalu_17a23KG = 62.9;
const FreteMagalu_23a30KG = 67.9;

// Mercado Livre
const FreteMercadoLivreGratis = 0;
const FreteMercadoLivre_ate300G = 35.9;
const FreteMercadoLivre_300a500G = 36.9;
const FreteMercadoLivre_500Ga1KG = 40.9;
const FreteMercadoLivre_1a2KG = 42.9;
const FreteMercadoLivre_2a5KG = 52.9;
const FreteMercadoLivre_5a9KG = 77.9;
const FreteMercadoLivre_9a13KG = 121.9;
const FreteMercadoLivre_13a17KG = 135.9;
const FreteMercadoLivre_17a23KG = 158.9;
const FreteMercadoLivre_23a30KG = 182.9;

// Olist
const FreteOlist = 0;

// RD
const FreteRD = 0;

// Shopee
const FreteShopee = 0;

// Web Continental
const FreteWebContinental = 0;

// Site Uool
const FreteSiteUool = 0;

// Site Atacado
const FreteSiteAtacado = 0;

// ----------------------------------------

// DESCONTO (%) POR NÍVEL

// Americanas
// Do nível 1 ao 3 não há desconto no frete (1 = 0%)
// No nível 4 há desconto de 40% no frete (0.6 = 40%)
// No nível 5 há desconto de 50% no frete (0.5 = 50%)
const NivelAmericanas1 = 1;
const NivelAmericanas2 = 1;
const NivelAmericanas3 = 1;
const NivelAmericanas4 = 0.6;
const NivelAmericanas5 = 0.5;

// Casas Bahia
const NivelCasasBahia = 1;

// Magalu
const NivelMagalu1 = 1;
const NivelMagalu2 = 1;
const NivelMagalu3 = 0.6;
const NivelMagalu4 = 0.5;
const NivelMagalu5 = 0.5;

// Mercado Livre
const NivelMercadoLivre1 = 1;
const NivelMercadoLivre2 = 1;
const NivelMercadoLivre3 = 0.6;
const NivelMercadoLivre4 = 0.5;
const NivelMercadoLivre5 = 0.5;

// Olist
const NivelOlist1 = 1;
const NivelOlist2 = 1;
const NivelOlist3 = 1;
const NivelOlist4 = 1;
const NivelOlist5 = 1;

// RD
const NivelRD = 1;

// Web Continental
const NivelWebContinental = 1;

// Shopee
const NivelShopee = 1;

// Site Uool
const NivelSiteUool = 1;

// Site Atacado
const NivelSiteAtacado = 1;

// ----------------------------------------

// TAXA FIXA

// Americanas
// Não há taxa fixa
const TaxaAmericanas = 0;

// Americanas
const TaxaCasasBahia = 0;

// Magalu
const TaxaMagalu_ATE10 = 0;
const TaxaMagalu_10A40 = 5;
const TaxaMagalu_40A79 = 5;
const TaxaMagalu_ACIMA79 = 5;

// Mercado Livre
const TaxaMercadoLivre_ATE79 = 6;
const TaxaMercadoLivre_ACIMA79 = 0;

// Olist
const TaxaOlist = 0;

// RD
const TaxaRD = 0;

// Web Continental
const TaxaWebContinental = 0;

// Shopee
const TaxaShopee = 3;

// Site Uool
const TaxaSiteUool_ATE10 = 0;
const TaxaSiteUool_10A40 = 0;
const TaxaSiteUool_40A79 = 0;
const TaxaSiteUool_ACIMA79 = 0;
const TaxaSiteUool_12x = 0.1306;

// Site Atacado
const TaxaSiteAtacado_ATE10 = 0;
const TaxaSiteAtacado_10A40 = 0;
const TaxaSiteAtacado_40A79 = 0;
const TaxaSiteAtacado_ACIMA79 = 0;
const TaxaSiteAtacado_12x = 0.1306;
