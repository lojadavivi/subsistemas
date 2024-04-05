// Início da função
function calcular(inputElement) {

    // Obtém os valores de cada campo
    var cnpj = document.getElementById("cnpj").value;
    var nivel = document.getElementById("nivel").value;
    var peso = document.getElementById("peso").value;
    var categoria = document.getElementById("categoria").value;
    var custo = parseFloat(document.getElementById("custo").value.replace(",", "."));
    var VendaManual = parseFloat(document.getElementById("VendaManual").value.replace(",", "."));
    var VendaValorLiquido = parseFloat(document.getElementById("VendaValorLiquido").value.replace(",", "."));
    var VendaPorcentagemLiquida = parseFloat(document.getElementById("VendaPorcentagemLiquida").value.replace(",", "."));

    // Valores constantes de CNPJ definidos no calc_variables.js
    if (cnpj === "LOJA DA VIVI LTDA") {
        constCnpj = cnpjLTDA;
    } else if (cnpj === "LOJA DA VIVI ONLINE") {
        constCnpj = cnpjONLINE;
    } else if (cnpj === "LOJA DA VIVI SV LTDA") {
        constCnpj = cnpjSV;
    } else if (cnpj === "VIVIANE CHRISTINA FERREIRA") {
        constCnpj = cnpjVIVI;
    } else if (cnpj === "Selecione") {
        constCnpj = 999;
    }

    // Valores constantes de categorias definidos no calc_variables.js
    if (categoria === "Selecione") {
        constCategoriaAmericanas = 999;
        constCategoriaCasasBahia = 999;
        constCategoriaMagalu = 999;
        constCategoriaMercadoLivreClassico = 999;
        constCategoriaMercadoLivrePremium = 999;
        constCategoriaOlist = 999;
        constCategoriaRD = 999;
        constCategoriaShopee = 999;
        constCategoriaWebContinental = 999;
        constCategoriaSiteUool = 999;
        constCategoriaSiteAtacado = 999;
    } else if (categoria === "Bronzeador ou protetor") {
        constCategoriaAmericanas = CategoriaAmericanas01;
        constCategoriaCasasBahia = CategoriaCasasBahia01;
        constCategoriaMagalu = CategoriaMagalu01;
        constCategoriaMercadoLivreClassico = CategoriaMercadoLivreClassico01;
        constCategoriaMercadoLivrePremium = CategoriaMercadoLivrePremium01;
        constCategoriaOlist = CategoriaOlist01;
        constCategoriaRD = CategoriaRD01;
        constCategoriaShopee = CategoriaShopee01;
        constCategoriaWebContinental = CategoriaWebContinental01;
        constCategoriaSiteUool = CategoriaSiteUool01;
        constCategoriaSiteAtacado = CategoriaSiteAtacado01;
    } else if (categoria === "Creme depilatório") {
        constCategoriaAmericanas = CategoriaAmericanas02;
        constCategoriaCasasBahia = CategoriaCasasBahia02;
        constCategoriaMagalu = CategoriaMagalu02;
        constCategoriaMercadoLivreClassico = CategoriaMercadoLivreClassico02;
        constCategoriaMercadoLivrePremium = CategoriaMercadoLivrePremium02;
        constCategoriaOlist = CategoriaOlist02;
        constCategoriaRD = CategoriaRD02;
        constCategoriaShopee = CategoriaShopee02;
        constCategoriaWebContinental = CategoriaWebContinental02;
        constCategoriaSiteUool = CategoriaSiteUool02;
        constCategoriaSiteAtacado = CategoriaSiteAtacado02;
    } else if (categoria === "Desodorante") {
        constCategoriaAmericanas = CategoriaAmericanas03;
        constCategoriaCasasBahia = CategoriaCasasBahia03;
        constCategoriaMagalu = CategoriaMagalu03;
        constCategoriaMercadoLivreClassico = CategoriaMercadoLivreClassico03;
        constCategoriaMercadoLivrePremium = CategoriaMercadoLivrePremium03;
        constCategoriaOlist = CategoriaOlist03;
        constCategoriaRD = CategoriaRD03;
        constCategoriaShopee = CategoriaShopee03;
        constCategoriaWebContinental = CategoriaWebContinental03;
        constCategoriaSiteUool = CategoriaSiteUool03;
        constCategoriaSiteAtacado = CategoriaSiteAtacado03;
    } else if (categoria === "Escova ou pente de cabelo") {
        constCategoriaAmericanas = CategoriaAmericanas04;
        constCategoriaCasasBahia = CategoriaCasasBahia04;
        constCategoriaMagalu = CategoriaMagalu04;
        constCategoriaMercadoLivreClassico = CategoriaMercadoLivreClassico04;
        constCategoriaMercadoLivrePremium = CategoriaMercadoLivrePremium04;
        constCategoriaOlist = CategoriaOlist04;
        constCategoriaRD = CategoriaRD04;
        constCategoriaShopee = CategoriaShopee04;
        constCategoriaWebContinental = CategoriaWebContinental04;
        constCategoriaSiteUool = CategoriaSiteUool04;
        constCategoriaSiteAtacado = CategoriaSiteAtacado04;
    } else if (categoria === "Espuma de barbear") {
        constCategoriaAmericanas = CategoriaAmericanas05;
        constCategoriaCasasBahia = CategoriaCasasBahia05;
        constCategoriaMagalu = CategoriaMagalu05;
        constCategoriaMercadoLivreClassico = CategoriaMercadoLivreClassico05;
        constCategoriaMercadoLivrePremium = CategoriaMercadoLivrePremium05;
        constCategoriaOlist = CategoriaOlist05;
        constCategoriaRD = CategoriaRD05;
        constCategoriaShopee = CategoriaShopee05;
        constCategoriaWebContinental = CategoriaWebContinental05;
        constCategoriaSiteUool = CategoriaSiteUool05;
        constCategoriaSiteAtacado = CategoriaSiteAtacado05;
    } else if (categoria === "Fixador de cabelo") {
        constCategoriaAmericanas = CategoriaAmericanas06;
        constCategoriaCasasBahia = CategoriaCasasBahia06;
        constCategoriaMagalu = CategoriaMagalu06;
        constCategoriaMercadoLivreClassico = CategoriaMercadoLivreClassico06;
        constCategoriaMercadoLivrePremium = CategoriaMercadoLivrePremium06;
        constCategoriaOlist = CategoriaOlist06;
        constCategoriaRD = CategoriaRD06;
        constCategoriaShopee = CategoriaShopee06;
        constCategoriaWebContinental = CategoriaWebContinental06;
        constCategoriaSiteUool = CategoriaSiteUool06;
        constCategoriaSiteAtacado = CategoriaSiteAtacado06;
    } else if (categoria === "Maquinário ou eletrônico") {
        constCategoriaAmericanas = CategoriaAmericanas07;
        constCategoriaCasasBahia = CategoriaCasasBahia07;
        constCategoriaMagalu = CategoriaMagalu07;
        constCategoriaMercadoLivreClassico = CategoriaMercadoLivreClassico07;
        constCategoriaMercadoLivrePremium = CategoriaMercadoLivrePremium07;
        constCategoriaOlist = CategoriaOlist07;
        constCategoriaRD = CategoriaRD07;
        constCategoriaShopee = CategoriaShopee07;
        constCategoriaWebContinental = CategoriaWebContinental07;
        constCategoriaSiteUool = CategoriaSiteUool07;
        constCategoriaSiteAtacado = CategoriaSiteAtacado07;
    } else if (categoria === "Pele ou unha") {
        constCategoriaAmericanas = CategoriaAmericanas08;
        constCategoriaCasasBahia = CategoriaCasasBahia08;
        constCategoriaMagalu = CategoriaMagalu08;
        constCategoriaMercadoLivreClassico = CategoriaMercadoLivreClassico08;
        constCategoriaMercadoLivrePremium = CategoriaMercadoLivrePremium08;
        constCategoriaOlist = CategoriaOlist08;
        constCategoriaRD = CategoriaRD08;
        constCategoriaShopee = CategoriaShopee08;
        constCategoriaWebContinental = CategoriaWebContinental08;
        constCategoriaSiteUool = CategoriaSiteUool08;
        constCategoriaSiteAtacado = CategoriaSiteAtacado08;
    } else if (categoria === "Repelente") {
        constCategoriaAmericanas = CategoriaAmericanas09;
        constCategoriaCasasBahia = CategoriaCasasBahia09;
        constCategoriaMagalu = CategoriaMagalu09;
        constCategoriaMercadoLivreClassico = CategoriaMercadoLivreClassico09;
        constCategoriaMercadoLivrePremium = CategoriaMercadoLivrePremium09;
        constCategoriaOlist = CategoriaOlist09;
        constCategoriaRD = CategoriaRD09;
        constCategoriaShopee = CategoriaShopee09;
        constCategoriaWebContinental = CategoriaWebContinental09;
        constCategoriaSiteUool = CategoriaSiteUool09;
        constCategoriaSiteAtacado = CategoriaSiteAtacado09;
    } else if (categoria === "Sabonete") {
        constCategoriaAmericanas = CategoriaAmericanas10;
        constCategoriaCasasBahia = CategoriaCasasBahia10;
        constCategoriaMagalu = CategoriaMagalu10;
        constCategoriaMercadoLivreClassico = CategoriaMercadoLivreClassico10;
        constCategoriaMercadoLivrePremium = CategoriaMercadoLivrePremium10;
        constCategoriaOlist = CategoriaOlist10;
        constCategoriaRD = CategoriaRD10;
        constCategoriaShopee = CategoriaShopee10;
        constCategoriaWebContinental = CategoriaWebContinental10;
        constCategoriaSiteUool = CategoriaSiteUool10;
        constCategoriaSiteAtacado = CategoriaSiteAtacado10;
    } else if (categoria === "Shampoo/Cond/Masc capilar") {
        constCategoriaAmericanas = CategoriaAmericanas11;
        constCategoriaCasasBahia = CategoriaCasasBahia11;
        constCategoriaMagalu = CategoriaMagalu11;
        constCategoriaMercadoLivreClassico = CategoriaMercadoLivreClassico11;
        constCategoriaMercadoLivrePremium = CategoriaMercadoLivrePremium11;
        constCategoriaOlist = CategoriaOlist11;
        constCategoriaRD = CategoriaRD11;
        constCategoriaShopee = CategoriaShopee11;
        constCategoriaWebContinental = CategoriaWebContinental11;
        constCategoriaSiteUool = CategoriaSiteUool11;
        constCategoriaSiteAtacado = CategoriaSiteAtacado11;
    } else if (categoria === "Tinta Capilar") {
        constCategoriaAmericanas = CategoriaAmericanas12;
        constCategoriaCasasBahia = CategoriaCasasBahia12;
        constCategoriaMagalu = CategoriaMagalu12;
        constCategoriaMercadoLivreClassico = CategoriaMercadoLivreClassico12;
        constCategoriaMercadoLivrePremium = CategoriaMercadoLivrePremium12;
        constCategoriaOlist = CategoriaOlist12;
        constCategoriaRD = CategoriaRD12;
        constCategoriaShopee = CategoriaShopee12;
        constCategoriaWebContinental = CategoriaWebContinental12;
        constCategoriaSiteUool = CategoriaSiteUool12;
        constCategoriaSiteAtacado = CategoriaSiteAtacado12;
    } else if (categoria === "Utensílio ou acessório de beleza") {
        constCategoriaAmericanas = CategoriaAmericanas13;
        constCategoriaCasasBahia = CategoriaCasasBahia13;
        constCategoriaMagalu = CategoriaMagalu13;
        constCategoriaMercadoLivreClassico = CategoriaMercadoLivreClassico13;
        constCategoriaMercadoLivrePremium = CategoriaMercadoLivrePremium13;
        constCategoriaOlist = CategoriaOlist13;
        constCategoriaRD = CategoriaRD13;
        constCategoriaShopee = CategoriaShopee13;
        constCategoriaWebContinental = CategoriaWebContinental13;
        constCategoriaSiteUool = CategoriaSiteUool13;
        constCategoriaSiteAtacado = CategoriaSiteAtacado13;
    }

    // Valores constantes de peso e frete para acima de R$ 79 definidos no calc_variables.js
    if (peso === "Selecione") {
        constFreteAmericanas = 999;
        constFreteCasasBahia = 999;
        constFreteMagalu = 999;
        constFreteMercadoLivre = 999;
        constFreteOlist = 999;
        constFreteRD = 999;
        constFreteShopee = 999;
        constFreteWebContinental = 999;
        constFreteSiteUool = 999;
        constFreteSiteAtacado = 999;
    } else if (peso === "até 0.3kg") {
        constFreteAmericanas = FreteAmericanas_ACIMA79_ate300G;
        constFreteCasasBahia = FreteCasasBahia;
        constFreteMagalu = FreteMagalu_ate300G;
        constFreteMercadoLivre = FreteMercadoLivre_ate300G;
        constFreteOlist = FreteOlist;
        constFreteRD = FreteRD;
        constFreteShopee = FreteShopee;
        constFreteWebContinental = FreteWebContinental;
        constFreteSiteUool = FreteSiteUool;
        constFreteSiteAtacado = FreteSiteAtacado;
    } else if (peso === "0.3 a 0.5kg") {
        constFreteAmericanas = FreteAmericanas_ACIMA79_300a500G;
        constFreteCasasBahia = FreteCasasBahia;
        constFreteMagalu = FreteMagalu_300a500G;
        constFreteMercadoLivre = FreteMercadoLivre_300a500G;
        constFreteOlist = FreteOlist;
        constFreteRD = FreteRD;
        constFreteShopee = FreteShopee;
        constFreteWebContinental = FreteWebContinental;
        constFreteSiteUool = FreteSiteUool;
        constFreteSiteAtacado = FreteSiteAtacado;
    } else if (peso === "0.5 a 1kg") {
        constFreteAmericanas = FreteAmericanas_ACIMA79_500Ga1KG;
        constFreteCasasBahia = FreteCasasBahia;
        constFreteMagalu = FreteMagalu_500Ga1KG;
        constFreteMercadoLivre = FreteMercadoLivre_500Ga1KG;
        constFreteOlist = FreteOlist;
        constFreteRD = FreteRD;
        constFreteShopee = FreteShopee;
        constFreteWebContinental = FreteWebContinental;
        constFreteSiteUool = FreteSiteUool;
        constFreteSiteAtacado = FreteSiteAtacado;
    } else if (peso === "1 a 2kg") {
        constFreteAmericanas = FreteAmericanas_ACIMA79_1a2KG;
        constFreteCasasBahia = FreteCasasBahia;
        constFreteMagalu = FreteMagalu_1a2KG;
        constFreteMercadoLivre = FreteMercadoLivre_1a2KG;
        constFreteOlist = FreteOlist;
        constFreteRD = FreteRD;
        constFreteShopee = FreteShopee;
        constFreteWebContinental = FreteWebContinental;
        constFreteSiteUool = FreteSiteUool;
        constFreteSiteAtacado = FreteSiteAtacado;
    } else if (peso === "2 a 5kg") {
        constFreteAmericanas = FreteAmericanas_ACIMA79_2a5KG;
        constFreteCasasBahia = FreteCasasBahia;
        constFreteMagalu = FreteMagalu_2a5KG;
        constFreteMercadoLivre = FreteMercadoLivre_2a5KG;
        constFreteOlist = FreteOlist;
        constFreteRD = FreteRD;
        constFreteShopee = FreteShopee;
        constFreteWebContinental = FreteWebContinental;
        constFreteSiteUool = FreteSiteUool;
        constFreteSiteAtacado = FreteSiteAtacado;
    } else if (peso === "5 a 9kg") {
        constFreteAmericanas = FreteAmericanas_ACIMA79_5a9KG;
        constFreteCasasBahia = FreteCasasBahia;
        constFreteMagalu = FreteMagalu_5a9KG;
        constFreteMercadoLivre = FreteMercadoLivre_5a9KG;
        constFreteOlist = FreteOlist;
        constFreteRD = FreteRD;
        constFreteShopee = FreteShopee;
        constFreteWebContinental = FreteWebContinental;
        constFreteSiteUool = FreteSiteUool;
        constFreteSiteAtacado = FreteSiteAtacado;
    } else if (peso === "9 a 13kg") {
        constFreteAmericanas = FreteAmericanas_ACIMA79_9a13KG;
        constFreteCasasBahia = FreteCasasBahia;
        constFreteMagalu = FreteMagalu_9a13KG;
        constFreteMercadoLivre = FreteMercadoLivre_9a13KG;
        constFreteOlist = FreteOlist;
        constFreteRD = FreteRD;
        constFreteShopee = FreteShopee;
        constFreteWebContinental = FreteWebContinental;
        constFreteSiteUool = FreteSiteUool;
        constFreteSiteAtacado = FreteSiteAtacado;
    } else if (peso === "13 a 17kg") {
        constFreteAmericanas = FreteAmericanas_ACIMA79_13a17KG;
        constFreteCasasBahia = FreteCasasBahia;
        constFreteMagalu = FreteMagalu_13a17KG;
        constFreteMercadoLivre = FreteMercadoLivre_13a17KG;
        constFreteOlist = FreteOlist;
        constFreteRD = FreteRD;
        constFreteShopee = FreteShopee;
        constFreteWebContinental = FreteWebContinental;
        constFreteSiteUool = FreteSiteUool;
        constFreteSiteAtacado = FreteSiteAtacado;
    } else if (peso === "17 a 23kg") {
        constFreteAmericanas = FreteAmericanas_ACIMA79_17a23KG;
        constFreteCasasBahia = FreteCasasBahia;
        constFreteMagalu = FreteMagalu_17a23KG;
        constFreteMercadoLivre = FreteMercadoLivre_17a23KG;
        constFreteOlist = FreteOlist;
        constFreteRD = FreteRD;
        constFreteShopee = FreteShopee;
        constFreteWebContinental = FreteWebContinental;
        constFreteSiteUool = FreteSiteUool;
        constFreteSiteAtacado = FreteSiteAtacado;
    } else if (peso === "23 a 30kg") {
        constFreteAmericanas = FreteAmericanas_ACIMA79_23a30KG;
        constFreteCasasBahia = FreteCasasBahia;
        constFreteMagalu = FreteMagalu_23a30KG;
        constFreteMercadoLivre = FreteMercadoLivre_23a30KG;
        constFreteOlist = FreteOlist;
        constFreteRD = FreteRD;
        constFreteShopee = FreteShopee;
        constFreteWebContinental = FreteWebContinental;
        constFreteSiteUool = FreteSiteUool;
        constFreteSiteAtacado = FreteSiteAtacado;
    }

    // Valores constantes de desconto no frete baseado no nível definidos no calc_variables.js
    if (nivel === "5") {
        constNivelAmericanas = NivelAmericanas5;
        constNivelCasasBahia = NivelCasasBahia;
        constNivelMagalu = NivelMagalu5;
        constNivelMercadoLivre = NivelMercadoLivre5;
        constNivelOlist = NivelOlist1;
        constNivelRD = NivelRD;
        constNivelWebContinental = NivelWebContinental;
        constNivelShopee = NivelShopee;
        constNivelSiteUool = NivelSiteUool;
        constNivelSiteAtacado = NivelSiteAtacado;
    } else if (nivel === "4") {
        constNivelAmericanas = NivelAmericanas4;
        constNivelCasasBahia = NivelCasasBahia;
        constNivelMagalu = NivelMagalu4;
        constNivelMercadoLivre = NivelMercadoLivre4;
        constNivelOlist = NivelOlist4;
        constNivelRD = NivelRD;
        constNivelWebContinental = NivelWebContinental;
        constNivelShopee = NivelShopee;
        constNivelSiteUool = NivelSiteUool;
        constNivelSiteAtacado = NivelSiteAtacado;
    } else if (nivel === "3") {
        constNivelAmericanas = NivelAmericanas3;
        constNivelCasasBahia = NivelCasasBahia;
        constNivelMagalu = NivelMagalu3;
        constNivelMercadoLivre = NivelMercadoLivre3;
        constNivelOlist = NivelOlist3;
        constNivelRD = NivelRD;
        constNivelWebContinental = NivelWebContinental;
        constNivelShopee = NivelShopee;
        constNivelSiteUool = NivelSiteUool;
        constNivelSiteAtacado = NivelSiteAtacado;
    } else if (nivel === "2") {
        constNivelAmericanas = NivelAmericanas2;
        constNivelCasasBahia = NivelCasasBahia;
        constNivelMagalu = NivelMagalu2;
        constNivelMercadoLivre = NivelMercadoLivre2;
        constNivelOlist = NivelOlist2;
        constNivelRD = NivelRD;
        constNivelWebContinental = NivelWebContinental;
        constNivelShopee = NivelShopee;
        constNivelSiteUool = NivelSiteUool;
        constNivelSiteAtacado = NivelSiteAtacado;
    } else if (nivel === "1") {
        constNivelAmericanas = NivelAmericanas1;
        constNivelCasasBahia = NivelCasasBahia;
        constNivelMagalu = NivelMagalu1;
        constNivelMercadoLivre = NivelMercadoLivre1;
        constNivelOlist = NivelOlist1;
        constNivelRD = NivelRD;
        constNivelWebContinental = NivelWebContinental;
        constNivelShopee = NivelShopee;
        constNivelSiteUool = NivelSiteUool;
        constNivelSiteAtacado = NivelSiteAtacado;
    }

    // --------------------------------
    // --------------------------------
    // FÓRMULAS DE CÁLCULO
    // --------------------------------
    // --------------------------------



    // --------------------------------
    // AMERICANAS
    // --------------------------------

    // Americanas manual - calcAmericanasManual
    var calcAmericanasManual = VendaManual - (custo + (VendaManual * constCnpj) + (VendaManual * constCategoriaAmericanas) + TaxaAmericanas + ((VendaManual <= 39.99 ? FreteAmericanas_ATE40 : VendaManual >= 40 && VendaManual <= 78.99 ? FreteAmericanas_DE40A89 : VendaManual >= 79 ? constFreteAmericanas : 0) * constNivelAmericanas));

    // Americanas auto - calcAmericanasValorLiquido
    if (
        (((custo + VendaValorLiquido + TaxaAmericanas) + (FreteAmericanas_DE40A89 * constNivelAmericanas)) * 100) / (-(((constCnpj + constCategoriaAmericanas) * 100) - 100)) >= 78.96) {
        constResultAmeA = (((custo + VendaValorLiquido + TaxaAmericanas) + (constFreteAmericanas * constNivelAmericanas)) * 100) / (-(((constCnpj + constCategoriaAmericanas) * 100) - 100));
    } else if (
        (((custo + VendaValorLiquido + TaxaAmericanas) + (FreteAmericanas_ATE40 * constNivelAmericanas)) * 100) / (-(((constCnpj + constCategoriaAmericanas) * 100) - 100)) >= 39.94 && (((custo + VendaValorLiquido + TaxaAmericanas) + (FreteAmericanas_ATE40 * constNivelAmericanas)) * 100) / (-(((constCnpj + constCategoriaAmericanas) * 100) - 100)) <= 78.95) {
        constResultAmeA = (((custo + VendaValorLiquido + TaxaAmericanas) + (FreteAmericanas_DE40A89 * constNivelAmericanas)) * 100) / (-(((constCnpj + constCategoriaAmericanas) * 100) - 100));
    } else if (
        (((custo + VendaValorLiquido + TaxaAmericanas) + (constFreteAmericanas * constNivelAmericanas)) * 100) / (-(((constCnpj + constCategoriaAmericanas) * 100) - 100)) >= 78.96) {
        constResultAmeA = (((custo + VendaValorLiquido + TaxaAmericanas) + (constFreteAmericanas * constNivelAmericanas)) * 100) / (-(((constCnpj + constCategoriaAmericanas) * 100) - 100));
    } else if (
        (((custo + VendaValorLiquido + TaxaAmericanas) + (FreteAmericanas_ATE40 * constNivelAmericanas)) * 100) / (-(((constCnpj + constCategoriaAmericanas) * 100) - 100)) <= 39.93) {
        constResultAmeA = (((custo + VendaValorLiquido + TaxaAmericanas) + (FreteAmericanas_ATE40 * constNivelAmericanas)) * 100) / (-(((constCnpj + constCategoriaAmericanas) * 100) - 100));
    }
    var calcAmericanasValorLiquido = constResultAmeA;

    // Americanas porcentagem - calcAmericanasPorcentagemLiquida
    if (
        (((custo + (custo * VendaPorcentagemLiquida) / 100) + TaxaAmericanas + (FreteAmericanas_DE40A89 * constNivelAmericanas)) * 100) / (-(((constCnpj + constCategoriaAmericanas) * 100) - 100)) >= 78.96) {
        constResultAmeP = (((custo + (custo * VendaPorcentagemLiquida) / 100) + TaxaAmericanas + (constFreteAmericanas * constNivelAmericanas)) * 100) / (-(((constCnpj + constCategoriaAmericanas) * 100) - 100))
    } else if (
        (((custo + (custo * VendaPorcentagemLiquida) / 100) + TaxaAmericanas + (FreteAmericanas_ATE40 * constNivelAmericanas)) * 100) / (-(((constCnpj + constCategoriaAmericanas) * 100) - 100)) >= 39.94 && (((custo + (custo * VendaPorcentagemLiquida) / 100) + TaxaAmericanas + (FreteAmericanas_ATE40 * constNivelAmericanas)) * 100) / (-(((constCnpj + constCategoriaAmericanas) * 100) - 100)) <= 78.95) {
        constResultAmeP = (((custo + (custo * VendaPorcentagemLiquida) / 100) + TaxaAmericanas + (FreteAmericanas_DE40A89 * constNivelAmericanas)) * 100) / (-(((constCnpj + constCategoriaAmericanas) * 100) - 100))
    } else if (
        (((custo + (custo * VendaPorcentagemLiquida) / 100) + TaxaAmericanas + (constFreteAmericanas * constNivelAmericanas)) * 100) / (-(((constCnpj + constCategoriaAmericanas) * 100) - 100)) >= 78.96) {
        constResultAmeP = (((custo + (custo * VendaPorcentagemLiquida) / 100) + TaxaAmericanas + (constFreteAmericanas * constNivelAmericanas)) * 100) / (-(((constCnpj + constCategoriaAmericanas) * 100) - 100))
    } else if (
        (((custo + (custo * VendaPorcentagemLiquida) / 100) + TaxaAmericanas + (FreteAmericanas_ATE40 * constNivelAmericanas)) * 100) / (-(((constCnpj + constCategoriaAmericanas) * 100) - 100)) <= 39.93) {
        constResultAmeP = (((custo + (custo * VendaPorcentagemLiquida) / 100) + TaxaAmericanas + (FreteAmericanas_ATE40 * constNivelAmericanas)) * 100) / (-(((constCnpj + constCategoriaAmericanas) * 100) - 100))
    }
    var calcAmericanasPorcentagemLiquida = constResultAmeP;

    // --------------------------------
    // CASAS BAHIA
    // --------------------------------



    // --------------------------------
    // MAGALU
    // --------------------------------

    // Magalu manual - calcMagaluValorLiquidoluManual
    var calcMagaluValorLiquidoluManual = VendaManual - (custo + (VendaManual * constCnpj) + (VendaManual * constCategoriaMagalu) + (VendaManual <= 9.99 ? TaxaMagalu_ATE10 : VendaManual >= 10 && VendaManual <= 39.99 ? TaxaMagalu_10A40 : VendaManual >= 40 && VendaManual <= 78.99 ? TaxaMagalu_40A79 : VendaManual >= 79 ? TaxaMagalu_ACIMA79 : 0) + ((VendaManual <= 78.99 ? FreteMagaluGratis : VendaManual >= 79 ? constFreteMagalu : 0) * constNivelMagalu));

    // Magalu auto - calcMagaluValorLiquido
    if (
        (((custo + VendaValorLiquido + TaxaMagalu_40A79) + (FreteMagaluGratis * constNivelMagalu)) * 100) / (-(((constCnpj + constCategoriaMagalu) * 100) - 100)) >= 78.96) {
        constResultMagA = (((custo + VendaValorLiquido + TaxaMagalu_ACIMA79) + (constFreteMagalu * constNivelMagalu)) * 100) / (-(((constCnpj + constCategoriaMagalu) * 100) - 100));
    } else if (
        (((custo + VendaValorLiquido + TaxaMagalu_10A40) + (FreteMagaluGratis * constNivelMagalu)) * 100) / (-(((constCnpj + constCategoriaMagalu) * 100) - 100)) >= 39.94 && (((custo + VendaValorLiquido + TaxaMagalu_10A40) + (FreteMagaluGratis * constNivelMagalu)) * 100) / (-(((constCnpj + constCategoriaMagalu) * 100) - 100)) <= 78.95) {
        constResultMagA = (((custo + VendaValorLiquido + TaxaMagalu_40A79) + (FreteMagaluGratis * constNivelMagalu)) * 100) / (-(((constCnpj + constCategoriaMagalu) * 100) - 100));
    } else if (
        (((custo + VendaValorLiquido + TaxaMagalu_40A79) + (constFreteMagalu * constNivelMagalu)) * 100) / (-(((constCnpj + constCategoriaMagalu) * 100) - 100)) >= 78.96) {
        constResultMagA = (((custo + VendaValorLiquido + TaxaMagalu_ACIMA79) + (constFreteMagalu * constNivelMagalu)) * 100) / (-(((constCnpj + constCategoriaMagalu) * 100) - 100));
    } else if (
        (((custo + VendaValorLiquido + TaxaMagalu_ACIMA79) + (FreteMagaluGratis * constNivelMagalu)) * 100) / (-(((constCnpj + constCategoriaMagalu) * 100) - 100)) >= 9.96 && (((custo + VendaValorLiquido + TaxaMagalu_ATE10) + (FreteMagaluGratis * constNivelMagalu)) * 100) / (-(((constCnpj + constCategoriaMagalu) * 100) - 100)) <= 39.93) {
        constResultMagA = (((custo + VendaValorLiquido + TaxaMagalu_10A40) + (FreteMagaluGratis * constNivelMagalu)) * 100) / (-(((constCnpj + constCategoriaMagalu) * 100) - 100));
    } else if (
        (((custo + VendaValorLiquido + TaxaMagalu_ATE10) + (FreteMagaluGratis * constNivelMagalu)) * 100) / (-(((constCnpj + constCategoriaMagalu) * 100) - 100)) <= 9.97) {
        constResultMagA = (((custo + VendaValorLiquido + TaxaMagalu_ATE10) + (FreteMagaluGratis * constNivelMagalu)) * 100) / (-(((constCnpj + constCategoriaMagalu) * 100) - 100));
    }
    var calcMagaluValorLiquido = constResultMagA;

    // Magalu porcentagem - calcMagaluPorcentagemLiquida
    if (
        ((((custo + (custo * VendaPorcentagemLiquida) / 100) + TaxaMagalu_40A79) + (FreteMagaluGratis * constNivelMagalu)) * 100) / (-(((constCnpj + constCategoriaMagalu) * 100) - 100)) >= 78.96) {
        constResultMagP = (((custo + (custo * VendaPorcentagemLiquida) / 100) + TaxaMagalu_ACIMA79 + (constFreteMagalu * constNivelMagalu)) * 100) / (-(((constCnpj + constCategoriaMagalu) * 100) - 100))
    } else if (
        (((custo + (custo * VendaPorcentagemLiquida) / 100) + TaxaMagalu_10A40 + (FreteMagaluGratis * constNivelMagalu)) * 100) / (-(((constCnpj + constCategoriaMagalu) * 100) - 100)) >= 39.94 && (((custo + (custo * VendaPorcentagemLiquida) / 100) + TaxaMagalu_10A40 + (FreteMagaluGratis * constNivelMagalu)) * 100) / (-(((constCnpj + constCategoriaMagalu) * 100) - 100)) <= 78.95) {
        constResultMagP = (((custo + (custo * VendaPorcentagemLiquida) / 100) + TaxaMagalu_40A79 + (FreteMagaluGratis * constNivelMagalu)) * 100) / (-(((constCnpj + constCategoriaMagalu) * 100) - 100))
    } else if (
        (((custo + (custo * VendaPorcentagemLiquida) / 100) + TaxaMagalu_40A79 + (constFreteMagalu * constNivelMagalu)) * 100) / (-(((constCnpj + constCategoriaMagalu) * 100) - 100)) >= 78.96) {
        constResultMagP = (((custo + (custo * VendaPorcentagemLiquida) / 100) + TaxaMagalu_ACIMA79 + (constFreteMagalu * constNivelMagalu)) * 100) / (-(((constCnpj + constCategoriaMagalu) * 100) - 100))
    } else if (
        (((custo + (custo * VendaPorcentagemLiquida) / 100) + TaxaMagalu_ACIMA79 + (constFreteMagalu * constNivelMagalu)) * 100) / (-(((constCnpj + constCategoriaMagalu) * 100) - 100)) >= 78.96) {
        constResultMagP = (((custo + (custo * VendaPorcentagemLiquida) / 100) + TaxaMagalu_ACIMA79 + (constFreteMagalu * constNivelMagalu)) * 100) / (-(((constCnpj + constCategoriaMagalu) * 100) - 100))
    } else if (
        (((custo + (custo * VendaPorcentagemLiquida) / 100) + TaxaMagalu_ATE10 + (FreteMagaluGratis * constNivelMagalu)) * 100) / (-(((constCnpj + constCategoriaMagalu) * 100) - 100)) >= 9.97 && (((custo + (custo * VendaPorcentagemLiquida) / 100) + TaxaMagalu_ATE10 + (FreteMagaluGratis * constNivelMagalu)) * 100) / (-(((constCnpj + constCategoriaMagalu) * 100) - 100)) <= 39.93) {
        constResultMagP = (((custo + (custo * VendaPorcentagemLiquida) / 100) + TaxaMagalu_10A40 + (FreteMagaluGratis * constNivelMagalu)) * 100) / (-(((constCnpj + constCategoriaMagalu) * 100) - 100))
    } else if (
        (((custo + (custo * VendaPorcentagemLiquida) / 100) + TaxaMagalu_ATE10 + (FreteMagaluGratis * constNivelMagalu)) * 100) / (-(((constCnpj + constCategoriaMagalu) * 100) - 100)) <= 9.96) {
        constResultMagP = (((custo + (custo * VendaPorcentagemLiquida) / 100) + TaxaMagalu_ATE10 + (FreteMagaluGratis * constNivelMagalu)) * 100) / (-(((constCnpj + constCategoriaMagalu) * 100) - 100))
    }
    var calcMagaluPorcentagemLiquida = constResultMagP;

    // --------------------------------
    // MERCADO LIVRE
    // --------------------------------

    // Mercado Livre clássico manual - calcMercadoLivreClassicoManual
    var calcMercadoLivreClassicoManual = VendaManual - (custo + (VendaManual * constCnpj) + (VendaManual * constCategoriaMercadoLivreClassico) + (VendaManual <= 78.99 ? TaxaMercadoLivre_ATE79 : VendaManual >= 79 ? TaxaMercadoLivre_ACIMA79 : 0) + ((VendaManual <= 78.99 ? FreteMercadoLivreGratis : VendaManual >= 79 ? constFreteMercadoLivre : 0) * constNivelMercadoLivre));

    // Mercado Livre clássico auto - calcMercadoLivreClassicoValorLiquido
    if (
        (((custo + VendaValorLiquido) + (FreteMercadoLivreGratis * constNivelMercadoLivre)) * 100) / (-(((constCnpj + constCategoriaMercadoLivreClassico) * 100) - 100)) >= 78.98) {
        constResultMerClA = (((custo + VendaValorLiquido) + (constFreteMercadoLivre * constNivelMercadoLivre)) * 100) / (-(((constCnpj + constCategoriaMercadoLivreClassico) * 100) - 100));
    } else if (
        (((custo + VendaValorLiquido + TaxaMercadoLivre_ATE79) + (FreteMercadoLivreGratis * constNivelMercadoLivre)) * 100) / (-(((constCnpj + constCategoriaMercadoLivreClassico) * 100) - 100)) >= 78.98) {
        constResultMerClA = (((custo + VendaValorLiquido + TaxaMercadoLivre_ATE79) + (constFreteMercadoLivre * constNivelMercadoLivre)) * 100) / (-(((constCnpj + constCategoriaMercadoLivreClassico) * 100) - 100));
    } else if (
        (((custo + VendaValorLiquido + TaxaMercadoLivre_ATE79) + (FreteMercadoLivreGratis * constNivelMercadoLivre)) * 100) / (-(((constCnpj + constCategoriaMercadoLivreClassico) * 100) - 100)) <= 78.97) {
        constResultMerClA = (((custo + VendaValorLiquido + TaxaMercadoLivre_ATE79) + (FreteMercadoLivreGratis * constNivelMercadoLivre)) * 100) / (-(((constCnpj + constCategoriaMercadoLivreClassico) * 100) - 100));
    } else if (
        (((custo + VendaValorLiquido + TaxaMercadoLivre_ATE79) + (constFreteMercadoLivre * constNivelMercadoLivre)) * 100) / (-(((constCnpj + constCategoriaMercadoLivreClassico) * 100) - 100)) >= 78.98) {
        constResultMerClA = (((custo + VendaValorLiquido + TaxaMercadoLivre_ACIMA79) + (constFreteMercadoLivre * constNivelMercadoLivre)) * 100) / (-(((constCnpj + constCategoriaMercadoLivreClassico) * 100) - 100));
    }
    var calcMercadoLivreClassicoValorLiquido = constResultMerClA;

    // Mercado Livre clássico porcentagem - calcMercadoLivreClassicoPorcentagemLiquida
    if (
        (((custo + (custo * VendaPorcentagemLiquida) / 100) + (FreteMercadoLivreGratis * constNivelMercadoLivre)) * 100) / (-(((constCnpj + constCategoriaMercadoLivreClassico) * 100) - 100)) >= 78.98) {
        constResultMerClP = (((custo + (custo * VendaPorcentagemLiquida) / 100) + (constFreteMercadoLivre * constNivelMercadoLivre)) * 100) / (-(((constCnpj + constCategoriaMercadoLivreClassico) * 100) - 100));
    } else if (
        (((custo + (custo * VendaPorcentagemLiquida) / 100) + TaxaMercadoLivre_ATE79 + (FreteMercadoLivreGratis * constNivelMercadoLivre)) * 100) / (-(((constCnpj + constCategoriaMercadoLivreClassico) * 100) - 100)) >= 78.98) {
        constResultMerClP = (((custo + (custo * VendaPorcentagemLiquida) / 100) + TaxaMercadoLivre_ATE79 + (FreteMercadoLivreGratis * constNivelMercadoLivre)) * 100) / (-(((constCnpj + constCategoriaMercadoLivreClassico) * 100) - 100));
    } else if (
        (((custo + (custo * VendaPorcentagemLiquida) / 100) + TaxaMercadoLivre_ATE79 + (FreteMercadoLivreGratis * constNivelMercadoLivre)) * 100) / (-(((constCnpj + constCategoriaMercadoLivreClassico) * 100) - 100)) <= 78.97) {
        constResultMerClP = (((custo + (custo * VendaPorcentagemLiquida) / 100) + TaxaMercadoLivre_ATE79 + (FreteMercadoLivreGratis * constNivelMercadoLivre)) * 100) / (-(((constCnpj + constCategoriaMercadoLivreClassico) * 100) - 100));
    } else if (
        (((custo + (custo * VendaPorcentagemLiquida) / 100) + (constFreteMercadoLivre * constNivelMercadoLivre)) * 100) / (-(((constCnpj + constCategoriaMercadoLivreClassico) * 100) - 100)) >= 78.98) {
        constResultMerClP = (((custo + (custo * VendaPorcentagemLiquida) / 100) + (constFreteMercadoLivre * constNivelMercadoLivre)) * 100) / (-(((constCnpj + constCategoriaMercadoLivreClassico) * 100) - 100));
    }
    var calcMercadoLivreClassicoPorcentagemLiquida = constResultMerClP;

    // Mercado Livre premium manual - calcMercadoLivrePremiumManual

    var calcMercadoLivrePremiumManual = VendaManual - (custo + (VendaManual * constCnpj) + (VendaManual * constCategoriaMercadoLivrePremium) + (VendaManual <= 78.99 ? TaxaMercadoLivre_ATE79 : VendaManual >= 79 ? TaxaMercadoLivre_ACIMA79 : 0) + ((VendaManual <= 78.99 ? FreteMercadoLivreGratis : VendaManual >= 79 ? constFreteMercadoLivre : 0) * constNivelMercadoLivre));

    // Mercado Livre premium auto - calcMercadoLivrePremiumValorLiquido
    if (
        (((custo + VendaValorLiquido + TaxaMercadoLivre_ATE79) + (FreteMercadoLivreGratis * constNivelMercadoLivre)) * 100) / (-(((constCnpj + constCategoriaMercadoLivrePremium) * 100) - 100)) >= 78.98) {
        constResultMerPrA = (((custo + VendaValorLiquido + TaxaMercadoLivre_ATE79) + (constFreteMercadoLivre * constNivelMercadoLivre)) * 100) / (-(((constCnpj + constCategoriaMercadoLivrePremium) * 100) - 100));
    } else if (
        (((custo + VendaValorLiquido + TaxaMercadoLivre_ATE79) + (FreteMercadoLivreGratis * constNivelMercadoLivre)) * 100) / (-(((constCnpj + constCategoriaMercadoLivrePremium) * 100) - 100)) <= 78.97) {
        constResultMerPrA = (((custo + VendaValorLiquido + TaxaMercadoLivre_ATE79) + (FreteMercadoLivreGratis * constNivelMercadoLivre)) * 100) / (-(((constCnpj + constCategoriaMercadoLivrePremium) * 100) - 100));
    } else if (
        (((custo + VendaValorLiquido + TaxaMercadoLivre_ATE79) + (constFreteMercadoLivre * constNivelMercadoLivre)) * 100) / (-(((constCnpj + constCategoriaMercadoLivrePremium) * 100) - 100)) >= 78.98) {
        constResultMerPrA = (((custo + VendaValorLiquido + TaxaMercadoLivre_ACIMA79) + (constFreteMercadoLivre * constNivelMercadoLivre)) * 100) / (-(((constCnpj + constCategoriaMercadoLivrePremium) * 100) - 100));
    }
    var calcMercadoLivrePremiumValorLiquido = constResultMerPrA;

    // Mercado Livre premium porcentagem - calcMercadoLivrePremiumPorcentagemLiquida
    if (
        (((custo + (custo * VendaPorcentagemLiquida) / 100) + (FreteMercadoLivreGratis * constNivelMercadoLivre)) * 100) / (-(((constCnpj + constCategoriaMercadoLivrePremium) * 100) - 100)) >= 78.98) {
        constResultMerPrP = (((custo + (custo * VendaPorcentagemLiquida) / 100) + (constFreteMercadoLivre * constNivelMercadoLivre)) * 100) / (-(((constCnpj + constCategoriaMercadoLivrePremium) * 100) - 100));
    } else if (
        (((custo + (custo * VendaPorcentagemLiquida) / 100) + TaxaMercadoLivre_ATE79 + (FreteMercadoLivreGratis * constNivelMercadoLivre)) * 100) / (-(((constCnpj + constCategoriaMercadoLivrePremium) * 100) - 100)) >= 78.98) {
        constResultMerPrP = (((custo + (custo * VendaPorcentagemLiquida) / 100) + TaxaMercadoLivre_ATE79 + (FreteMercadoLivreGratis * constNivelMercadoLivre)) * 100) / (-(((constCnpj + constCategoriaMercadoLivrePremium) * 100) - 100));
    } else if (
        (((custo + (custo * VendaPorcentagemLiquida) / 100) + TaxaMercadoLivre_ATE79 + (FreteMercadoLivreGratis * constNivelMercadoLivre)) * 100) / (-(((constCnpj + constCategoriaMercadoLivrePremium) * 100) - 100)) <= 78.97) {
        constResultMerPrP = (((custo + (custo * VendaPorcentagemLiquida) / 100) + TaxaMercadoLivre_ATE79 + (FreteMercadoLivreGratis * constNivelMercadoLivre)) * 100) / (-(((constCnpj + constCategoriaMercadoLivrePremium) * 100) - 100));
    } else if (
        (((custo + (custo * VendaPorcentagemLiquida) / 100) + (constFreteMercadoLivre * constNivelMercadoLivre)) * 100) / (-(((constCnpj + constCategoriaMercadoLivrePremium) * 100) - 100)) >= 78.98) {
        constResultMerPrP = (((custo + (custo * VendaPorcentagemLiquida) / 100) + (constFreteMercadoLivre * constNivelMercadoLivre)) * 100) / (-(((constCnpj + constCategoriaMercadoLivrePremium) * 100) - 100));
    }
    var calcMercadoLivrePremiumPorcentagemLiquida = constResultMerPrP;

    // --------------------------------
    // RD
    // --------------------------------



    // --------------------------------
    // OLIST
    // --------------------------------



    // --------------------------------
    // SHOPEE
    // --------------------------------

    // Shopee manual - calcShopeeManual
    var calcShopeeManual = VendaManual - (custo + (VendaManual * constCnpj) + (VendaManual >= 500 ? 100 : VendaManual <= 499.99 ? VendaManual * constCategoriaShopee : 0) + TaxaShopee);

    // Shopee auto - calcShopeeValorLiquido
    if (
        ((VendaValorLiquido + custo + TaxaShopee) * 100) / (-(((constCnpj + constCategoriaShopee) * 100) - 100)) <= 499.97) {
        constResultShoA = ((VendaValorLiquido + custo + TaxaShopee) * 100) / (-(((constCnpj + constCategoriaShopee) * 100) - 100));
    } else if (
        ((VendaValorLiquido + custo + TaxaShopee) * 100) / (-(((constCnpj + constCategoriaShopee) * 100) - 100)) >= 499.98) {
        constResultShoA = ((VendaValorLiquido + custo + TaxaShopee + 100) * 100) / (-(((constCnpj) * 100) - 100));
    }
    var calcShopeeValorLiquido = constResultShoA;

    // Shopee porcentagem - calcShopeePorcentagemLiquida
    if (
        (((custo + (custo * VendaPorcentagemLiquida) / 100) + TaxaShopee) * 100) / (-(((constCnpj + constCategoriaShopee) * 100) - 100)) <= 499.97) {
        constResultShoP = (((custo + (custo * VendaPorcentagemLiquida) / 100) + TaxaShopee) * 100) / (-(((constCnpj + constCategoriaShopee) * 100) - 100));
    } else if (
        (((custo + (custo * VendaPorcentagemLiquida) / 100) + TaxaShopee) * 100) / (-(((constCnpj + constCategoriaShopee) * 100) - 100)) >= 499.98) {
        constResultShoP = (((custo + (custo * VendaPorcentagemLiquida) / 100) + TaxaShopee + 100) * 100) / (-(((constCnpj) * 100) - 100));
    }
    var calcShopeePorcentagemLiquida = constResultShoP;

    // --------------------------------
    // SITE UOOL
    // --------------------------------

    // Site Uool manual - calcSiteUoolManual
    var calcSiteUoolManual = VendaManual - (custo + (VendaManual * constCnpj) + (VendaManual));
    var calcSitM12x12 = VendaManual + (VendaManual * TaxaSiteUool_12x);
    var calcSitM12x1 = calcSitM12x12 / 12;

    // Site Uool auto - calcSiteUoolValorLiquido
    var calcSiteUoolValorLiquido = (custo + VendaValorLiquido) * 100 / (-(((constCnpj) * 100) - 100));
    var calcSitA12x12 = calcSiteUoolValorLiquido + (calcSiteUoolValorLiquido * TaxaSiteUool_12x);
    var calcSitA12x1 = calcSitA12x12 / 12;

    // Site Uool porcentagem - calcSiteUoolPorcentagemLiquida
    var calcSiteUoolPorcentagemLiquida = ((custo + (custo * VendaPorcentagemLiquida) / 100) * 100) / (-(((constCnpj) * 100) - 100));
    var calcSitP12x12 = calcSiteUoolPorcentagemLiquida + (calcSiteUoolPorcentagemLiquida * TaxaSiteUool_12x);
    var calcSitP12x1 = calcSitP12x12 / 12;

    // --------------------------------
    // SITE ATACADO
    // --------------------------------



    // --------------------------------

    // Valores que serão exibidos na tabela de resultados

    // Americanas
    document.getElementById("resultado-Americanas-VendaManual").textContent = "R$ " + calcAmericanasManual.toFixed(2).replace(".", ",") + " (" + ((calcAmericanasManual / custo) * 100).toFixed(2) + "%)";
    document.getElementById("resultado-Americanas-VendaValorLiquido").textContent = "R$ " + calcAmericanasValorLiquido.toFixed(2).replace(".", ",") + " (" + ((VendaValorLiquido / custo) * 100).toFixed(2) + "%)";
    document.getElementById("resultado-Americanas-VendaPorcentagemLiquida").textContent = "R$ " + calcAmericanasPorcentagemLiquida.toFixed(2).replace(".", ",") + " (" + "R$ " + ((custo * VendaPorcentagemLiquida) / 100).toFixed(2).replace(".", ",") + ")";

    // Casas Bahia
    document.getElementById("resultado-CasasBahia-VendaManual").textContent = "Em breve";
    document.getElementById("resultado-CasasBahia-VendaValorLiquido").textContent = "Em breve";
    document.getElementById("resultado-CasasBahia-VendaPorcentagemLiquida").textContent = "Em breve";

    // Magalu
    document.getElementById("resultado-Magalu-VendaManual").textContent = "R$ " + calcMagaluValorLiquidoluManual.toFixed(2).replace(".", ",") + " (" + ((calcMagaluValorLiquidoluManual / custo) * 100).toFixed(2) + "%)";
    document.getElementById("resultado-Magalu-VendaValorLiquido").textContent = "R$ " + calcMagaluValorLiquido.toFixed(2).replace(".", ",") + " (" + ((VendaValorLiquido / custo) * 100).toFixed(2) + "%)";
    document.getElementById("resultado-Magalu-VendaPorcentagemLiquida").textContent = "R$ " + calcMagaluPorcentagemLiquida.toFixed(2).replace(".", ",") + " (" + "R$ " + ((custo * VendaPorcentagemLiquida) / 100).toFixed(2).replace(".", ",") + ")";

    // Mercado Livre Clássico
    document.getElementById("resultado-MercadoLivreClassico-VendaManual").textContent = "R$ " + calcMercadoLivreClassicoManual.toFixed(2).replace(".", ",") + " (" + ((calcMercadoLivreClassicoManual / custo) * 100).toFixed(2) + "%)";
    document.getElementById("resultado-MercadoLivreClassico-VendaValorLiquido").textContent = "R$ " + calcMercadoLivreClassicoValorLiquido.toFixed(2).replace(".", ",") + " (" + ((VendaValorLiquido / custo) * 100).toFixed(2) + "%)";
    document.getElementById("resultado-MercadoLivreClassico-VendaPorcentagemLiquida").textContent = "R$ " + calcMercadoLivreClassicoPorcentagemLiquida.toFixed(2).replace(".", ",") + " (" + "R$ " + ((custo * VendaPorcentagemLiquida) / 100).toFixed(2).replace(".", ",") + ")";

    // Mercado Livre Premium
    document.getElementById("resultado-MercadoLivrePremium-VendaManual").textContent = "R$ " + calcMercadoLivrePremiumManual.toFixed(2).replace(".", ",") + " (" + ((calcMercadoLivrePremiumManual / custo) * 100).toFixed(2) + "%)";
    document.getElementById("resultado-MercadoLivrePremium-VendaValorLiquido").textContent = "R$ " + calcMercadoLivrePremiumValorLiquido.toFixed(2).replace(".", ",") + " (" + ((VendaValorLiquido / custo) * 100).toFixed(2) + "%)";
    document.getElementById("resultado-MercadoLivrePremium-VendaPorcentagemLiquida").textContent = "R$ " + calcMercadoLivrePremiumPorcentagemLiquida.toFixed(2).replace(".", ",") + " (" + "R$ " + ((custo * VendaPorcentagemLiquida) / 100).toFixed(2).replace(".", ",") + ")";

    // RD
    document.getElementById("resultado-RD-VendaManual").textContent = "Em breve";
    document.getElementById("resultado-RD-VendaValorLiquido").textContent = "Em breve";
    document.getElementById("resultado-RD-VendaPorcentagemLiquida").textContent = "Em breve";

    // Olist
    document.getElementById("resultado-Olist-VendaManual").textContent = "Em breve";
    document.getElementById("resultado-Olist-VendaValorLiquido").textContent = "Em breve";
    document.getElementById("resultado-Olist-VendaPorcentagemLiquida").textContent = "Em breve";

    // Shopee
    document.getElementById("resultado-Shopee-VendaManual").textContent = "R$ " + calcShopeeManual.toFixed(2).replace(".", ",") + " (" + ((calcShopeeManual / custo) * 100).toFixed(2) + "%)";
    document.getElementById("resultado-Shopee-VendaValorLiquido").textContent = "R$ " + calcShopeeValorLiquido.toFixed(2).replace(".", ",") + " (" + ((VendaValorLiquido / custo) * 100).toFixed(2) + "%)";
    document.getElementById("resultado-Shopee-VendaPorcentagemLiquida").textContent = "R$ " + calcShopeePorcentagemLiquida.toFixed(2).replace(".", ",") + " (" + "R$ " + ((custo * VendaPorcentagemLiquida) / 100).toFixed(2).replace(".", ",") + ")";

    // Web Continental
    document.getElementById("resultado-WebContinental-VendaManual").textContent = "Em breve";
    document.getElementById("resultado-WebContinental-VendaValorLiquido").textContent = "Em breve";
    document.getElementById("resultado-WebContinental-VendaPorcentagemLiquida").textContent = "Em breve";

    // Site Uool
    document.getElementById("resultado-SiteUool-VendaManual").textContent = "R$ " + calcSiteUoolManual.toFixed(2).replace(".", ",") + " (" + ((calcSiteUoolManual / custo) * 100).toFixed(2) + "%)";
    document.getElementById("resultado-SiteUool-VendaValorLiquido").textContent = "PIX R$ " + calcSiteUoolValorLiquido.toFixed(2).replace(".", ",") + " (" + ((VendaValorLiquido / custo) * 100).toFixed(2) + "%)";
    document.getElementById("resultado-SiteUool-VendaPorcentagemLiquida").textContent = "PIX R$ " + calcSiteUoolPorcentagemLiquida.toFixed(2).replace(".", ",") + " (" + "R$ " + ((custo * VendaPorcentagemLiquida) / 100).toFixed(2).replace(".", ",") + ")";
    document.getElementById("resultado-SiteUool-VendaManual-12x").textContent = "12x de R$ " + calcSitM12x1.toFixed(2).replace(".", ",") + " (" + (calcSitM12x12).toFixed(2).replace(".", ",") + ")";
    document.getElementById("resultado-SiteUool-VendaValorLiquido-12x").textContent = "12x de R$ " + calcSitA12x1.toFixed(2).replace(".", ",") + " (" + (calcSitA12x12).toFixed(2).replace(".", ",") + ")";
    document.getElementById("resultado-SiteUool-VendaPorcentagemLiquida-12x").textContent = "12x de R$ " + calcSitP12x1.toFixed(2).replace(".", ",") + " (" + (calcSitP12x12).toFixed(2).replace(".", ",") + ")";

    // Site Atacado
    document.getElementById("resultado-SiteAtacado-VendaManual").textContent = "Em breve";
    document.getElementById("resultado-SiteAtacado-VendaValorLiquido").textContent = "Em breve";
    document.getElementById("resultado-SiteAtacado-VendaPorcentagemLiquida").textContent = "Em breve";
    document.getElementById("resultado-SiteAtacado-VendaManual-12x").textContent = "Em breve";
    document.getElementById("resultado-SiteAtacado-VendaValorLiquido-12x").textContent = "Em breve";
    document.getElementById("resultado-SiteAtacado-VendaPorcentagemLiquida-12x").textContent = "Em breve";
}