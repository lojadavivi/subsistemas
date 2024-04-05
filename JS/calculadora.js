// Início da função
function calcular(inputElement) {

    // Obtém os valores de cada campo
    var cnpj = document.getElementById("cnpj").value;
    var nivel = document.getElementById("nivel").value;
    var peso = document.getElementById("peso").value;
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
        constFreteMagalu = FreteMagalu_ACIMA79_ate300G;
        constFreteMercadoLivre = FreteMercadoLivre_ACIMA79_ate300G;
        constFreteOlist = FreteOlist;
        constFreteRD = FreteRD;
        constFreteShopee = FreteShopee;
        constFreteWebContinental = FreteWebContinental;
        constFreteSiteUool = FreteSiteUool;
        constFreteSiteAtacado = FreteSiteAtacado;
    } else if (peso === "0.3 a 0.5kg") {
        constFreteAmericanas = FreteAmericanas_ACIMA79_300a500G;
        constFreteCasasBahia = FreteCasasBahia;
        constFreteMagalu = FreteMagalu_ACIMA79_300a500G;
        constFreteMercadoLivre = FreteMercadoLivre_ACIMA79_300a500G;
        constFreteOlist = FreteOlist;
        constFreteRD = FreteRD;
        constFreteShopee = FreteShopee;
        constFreteWebContinental = FreteWebContinental;
        constFreteSiteUool = FreteSiteUool;
        constFreteSiteAtacado = FreteSiteAtacado;
    } else if (peso === "0.5 a 1kg") {
        constFreteAmericanas = FreteAmericanas_ACIMA79_500Ga1KG;
        constFreteCasasBahia = FreteCasasBahia;
        constFreteMagalu = FreteMagalu_ACIMA79_500Ga1KG;
        constFreteMercadoLivre = FreteMercadoLivre_ACIMA79_500Ga1KG;
        constFreteOlist = FreteOlist;
        constFreteRD = FreteRD;
        constFreteShopee = FreteShopee;
        constFreteWebContinental = FreteWebContinental;
        constFreteSiteUool = FreteSiteUool;
        constFreteSiteAtacado = FreteSiteAtacado;
    } else if (peso === "1 a 2kg") {
        constFreteAmericanas = FreteAmericanas_ACIMA79_1a2KG;
        constFreteCasasBahia = FreteCasasBahia;
        constFreteMagalu = FreteMagalu_ACIMA79_1a2KG;
        constFreteMercadoLivre = FreteMercadoLivre_ACIMA79_1a2KG;
        constFreteOlist = FreteOlist;
        constFreteRD = FreteRD;
        constFreteShopee = FreteShopee;
        constFreteWebContinental = FreteWebContinental;
        constFreteSiteUool = FreteSiteUool;
        constFreteSiteAtacado = FreteSiteAtacado;
    } else if (peso === "2 a 5kg") {
        constFreteAmericanas = FreteAmericanas_ACIMA79_2a5KG;
        constFreteCasasBahia = FreteCasasBahia;
        constFreteMagalu = FreteMagalu_ACIMA79_2a5KG;
        constFreteMercadoLivre = FreteMercadoLivre_ACIMA79_2a5KG;
        constFreteOlist = FreteOlist;
        constFreteRD = FreteRD;
        constFreteShopee = FreteShopee;
        constFreteWebContinental = FreteWebContinental;
        constFreteSiteUool = FreteSiteUool;
        constFreteSiteAtacado = FreteSiteAtacado;
    } else if (peso === "5 a 9kg") {
        constFreteAmericanas = FreteAmericanas_ACIMA79_5a9KG;
        constFreteCasasBahia = FreteCasasBahia;
        constFreteMagalu = FreteMagalu_ACIMA79_5a9KG;
        constFreteMercadoLivre = FreteMercadoLivre_ACIMA79_5a9KG;
        constFreteOlist = FreteOlist;
        constFreteRD = FreteRD;
        constFreteShopee = FreteShopee;
        constFreteWebContinental = FreteWebContinental;
        constFreteSiteUool = FreteSiteUool;
        constFreteSiteAtacado = FreteSiteAtacado;
    } else if (peso === "9 a 13kg") {
        constFreteAmericanas = FreteAmericanas_ACIMA79_9a13KG;
        constFreteCasasBahia = FreteCasasBahia;
        constFreteMagalu = FreteMagalu_ACIMA79_9a13KG;
        constFreteMercadoLivre = FreteMercadoLivre_ACIMA79_9a13KG;
        constFreteOlist = FreteOlist;
        constFreteRD = FreteRD;
        constFreteShopee = FreteShopee;
        constFreteWebContinental = FreteWebContinental;
        constFreteSiteUool = FreteSiteUool;
        constFreteSiteAtacado = FreteSiteAtacado;
    } else if (peso === "13 a 17kg") {
        constFreteAmericanas = FreteAmericanas_ACIMA79_13a17KG;
        constFreteCasasBahia = FreteCasasBahia;
        constFreteMagalu = FreteMagalu_ACIMA79_13a17KG;
        constFreteMercadoLivre = FreteMercadoLivre_ACIMA79_13a17KG;
        constFreteOlist = FreteOlist;
        constFreteRD = FreteRD;
        constFreteShopee = FreteShopee;
        constFreteWebContinental = FreteWebContinental;
        constFreteSiteUool = FreteSiteUool;
        constFreteSiteAtacado = FreteSiteAtacado;
    } else if (peso === "17 a 23kg") {
        constFreteAmericanas = FreteAmericanas_ACIMA79_17a23KG;
        constFreteCasasBahia = FreteCasasBahia;
        constFreteMagalu = FreteMagalu_ACIMA79_17a23KG;
        constFreteMercadoLivre = FreteMercadoLivre_ACIMA79_17a23KG;
        constFreteOlist = FreteOlist;
        constFreteRD = FreteRD;
        constFreteShopee = FreteShopee;
        constFreteWebContinental = FreteWebContinental;
        constFreteSiteUool = FreteSiteUool;
        constFreteSiteAtacado = FreteSiteAtacado;
    } else if (peso === "23 a 30kg") {
        constFreteAmericanas = FreteAmericanas_ACIMA79_23a30KG;
        constFreteCasasBahia = FreteCasasBahia;
        constFreteMagalu = FreteMagalu_ACIMA79_23a30KG;
        constFreteMercadoLivre = FreteMercadoLivre_ACIMA79_23a30KG;
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
    var calcAmericanasManual = VendaManual - (custo + (VendaManual * constCnpj) + (VendaManual * ComissaoAmericanas) + TaxaAmericanas + ((VendaManual <= 39.99 ? FreteAmericanas_ATE40 : VendaManual >= 40 && VendaManual <= 78.99 ? FreteAmericanas_DE40A89 : VendaManual >= 79 ? constFreteAmericanas : 0) * constNivelAmericanas));

    // Americanas auto - calcAmericanasValorLiquido
    if (
        (((custo + VendaValorLiquido + TaxaAmericanas) + (FreteAmericanas_DE40A89 * constNivelAmericanas)) * 100) / (-(((constCnpj + ComissaoAmericanas) * 100) - 100)) >= 78.96) {
        constResultAmeA = (((custo + VendaValorLiquido + TaxaAmericanas) + (constFreteAmericanas * constNivelAmericanas)) * 100) / (-(((constCnpj + ComissaoAmericanas) * 100) - 100));
    } else if (
        (((custo + VendaValorLiquido + TaxaAmericanas) + (FreteAmericanas_ATE40 * constNivelAmericanas)) * 100) / (-(((constCnpj + ComissaoAmericanas) * 100) - 100)) >= 39.94 && (((custo + VendaValorLiquido + TaxaAmericanas) + (FreteAmericanas_ATE40 * constNivelAmericanas)) * 100) / (-(((constCnpj + ComissaoAmericanas) * 100) - 100)) <= 78.95) {
        constResultAmeA = (((custo + VendaValorLiquido + TaxaAmericanas) + (FreteAmericanas_DE40A89 * constNivelAmericanas)) * 100) / (-(((constCnpj + ComissaoAmericanas) * 100) - 100));
    } else if (
        (((custo + VendaValorLiquido + TaxaAmericanas) + (constFreteAmericanas * constNivelAmericanas)) * 100) / (-(((constCnpj + ComissaoAmericanas) * 100) - 100)) >= 78.96) {
        constResultAmeA = (((custo + VendaValorLiquido + TaxaAmericanas) + (constFreteAmericanas * constNivelAmericanas)) * 100) / (-(((constCnpj + ComissaoAmericanas) * 100) - 100));
    } else if (
        (((custo + VendaValorLiquido + TaxaAmericanas) + (FreteAmericanas_ATE40 * constNivelAmericanas)) * 100) / (-(((constCnpj + ComissaoAmericanas) * 100) - 100)) <= 39.93) {
        constResultAmeA = (((custo + VendaValorLiquido + TaxaAmericanas) + (FreteAmericanas_ATE40 * constNivelAmericanas)) * 100) / (-(((constCnpj + ComissaoAmericanas) * 100) - 100));
    }
    var calcAmericanasValorLiquido = constResultAmeA;

    // Americanas porcentagem - calcAmericanasPorcentagemLiquida
    if (
        (((custo + (custo * VendaPorcentagemLiquida) / 100) + TaxaAmericanas + (FreteAmericanas_DE40A89 * constNivelAmericanas)) * 100) / (-(((constCnpj + ComissaoAmericanas) * 100) - 100)) >= 78.96) {
        constResultAmeP = (((custo + (custo * VendaPorcentagemLiquida) / 100) + TaxaAmericanas + (constFreteAmericanas * constNivelAmericanas)) * 100) / (-(((constCnpj + ComissaoAmericanas) * 100) - 100))
    } else if (
        (((custo + (custo * VendaPorcentagemLiquida) / 100) + TaxaAmericanas + (FreteAmericanas_ATE40 * constNivelAmericanas)) * 100) / (-(((constCnpj + ComissaoAmericanas) * 100) - 100)) >= 39.94 && (((custo + (custo * VendaPorcentagemLiquida) / 100) + TaxaAmericanas + (FreteAmericanas_ATE40 * constNivelAmericanas)) * 100) / (-(((constCnpj + ComissaoAmericanas) * 100) - 100)) <= 78.95) {
        constResultAmeP = (((custo + (custo * VendaPorcentagemLiquida) / 100) + TaxaAmericanas + (FreteAmericanas_DE40A89 * constNivelAmericanas)) * 100) / (-(((constCnpj + ComissaoAmericanas) * 100) - 100))
    } else if (
        (((custo + (custo * VendaPorcentagemLiquida) / 100) + TaxaAmericanas + (constFreteAmericanas * constNivelAmericanas)) * 100) / (-(((constCnpj + ComissaoAmericanas) * 100) - 100)) >= 78.96) {
        constResultAmeP = (((custo + (custo * VendaPorcentagemLiquida) / 100) + TaxaAmericanas + (constFreteAmericanas * constNivelAmericanas)) * 100) / (-(((constCnpj + ComissaoAmericanas) * 100) - 100))
    } else if (
        (((custo + (custo * VendaPorcentagemLiquida) / 100) + TaxaAmericanas + (FreteAmericanas_ATE40 * constNivelAmericanas)) * 100) / (-(((constCnpj + ComissaoAmericanas) * 100) - 100)) <= 39.93) {
        constResultAmeP = (((custo + (custo * VendaPorcentagemLiquida) / 100) + TaxaAmericanas + (FreteAmericanas_ATE40 * constNivelAmericanas)) * 100) / (-(((constCnpj + ComissaoAmericanas) * 100) - 100))
    }
    var calcAmericanasPorcentagemLiquida = constResultAmeP;

    // --------------------------------
    // CASAS BAHIA
    // --------------------------------



    // --------------------------------
    // MAGALU
    // --------------------------------

    // Magalu manual - calcMagaluValorLiquidoluManual
    var calcMagaluValorLiquidoluManual = VendaManual - (custo + (VendaManual * constCnpj) + (VendaManual * constComissaoMagalu) + (VendaManual <= 9.99 ? TaxaMagalu_ATE10 : VendaManual >= 10 && VendaManual <= 39.99 ? TaxaMagalu_10A40 : VendaManual >= 40 && VendaManual <= 78.99 ? TaxaMagalu_ACIMA10 : VendaManual >= 79 ? TaxaMagalu_ACIMA79 : 0) + ((VendaManual <= 78.99 ? FreteMagalu_ATE79 : VendaManual >= 79 ? constFreteMagalu : 0) * constNivelMagalu));

    // Magalu auto - calcMagaluValorLiquido
    if (
        (((custo + VendaValorLiquido + TaxaMagalu_ACIMA10) + (FreteMagalu_ATE79 * constNivelMagalu)) * 100) / (-(((constCnpj + constComissaoMagalu) * 100) - 100)) >= 78.96) {
        constResultMagA = (((custo + VendaValorLiquido + TaxaMagalu_ACIMA79) + (constFreteMagalu * constNivelMagalu)) * 100) / (-(((constCnpj + constComissaoMagalu) * 100) - 100));
    } else if (
        (((custo + VendaValorLiquido + TaxaMagalu_10A40) + (FreteMagalu_ATE79 * constNivelMagalu)) * 100) / (-(((constCnpj + constComissaoMagalu) * 100) - 100)) >= 39.94 && (((custo + VendaValorLiquido + TaxaMagalu_10A40) + (FreteMagalu_ATE79 * constNivelMagalu)) * 100) / (-(((constCnpj + constComissaoMagalu) * 100) - 100)) <= 78.95) {
        constResultMagA = (((custo + VendaValorLiquido + TaxaMagalu_ACIMA10) + (FreteMagalu_ATE79 * constNivelMagalu)) * 100) / (-(((constCnpj + constComissaoMagalu) * 100) - 100));
    } else if (
        (((custo + VendaValorLiquido + TaxaMagalu_ACIMA10) + (constFreteMagalu * constNivelMagalu)) * 100) / (-(((constCnpj + constComissaoMagalu) * 100) - 100)) >= 78.96) {
        constResultMagA = (((custo + VendaValorLiquido + TaxaMagalu_ACIMA79) + (constFreteMagalu * constNivelMagalu)) * 100) / (-(((constCnpj + constComissaoMagalu) * 100) - 100));
    } else if (
        (((custo + VendaValorLiquido + TaxaMagalu_ACIMA79) + (FreteMagalu_ATE79 * constNivelMagalu)) * 100) / (-(((constCnpj + constComissaoMagalu) * 100) - 100)) >= 9.96 && (((custo + VendaValorLiquido + TaxaMagalu_ATE10) + (FreteMagalu_ATE79 * constNivelMagalu)) * 100) / (-(((constCnpj + constComissaoMagalu) * 100) - 100)) <= 39.93) {
        constResultMagA = (((custo + VendaValorLiquido + TaxaMagalu_10A40) + (FreteMagalu_ATE79 * constNivelMagalu)) * 100) / (-(((constCnpj + constComissaoMagalu) * 100) - 100));
    } else if (
        (((custo + VendaValorLiquido + TaxaMagalu_ATE10) + (FreteMagalu_ATE79 * constNivelMagalu)) * 100) / (-(((constCnpj + constComissaoMagalu) * 100) - 100)) <= 9.97) {
        constResultMagA = (((custo + VendaValorLiquido + TaxaMagalu_ATE10) + (FreteMagalu_ATE79 * constNivelMagalu)) * 100) / (-(((constCnpj + constComissaoMagalu) * 100) - 100));
    }
    var calcMagaluValorLiquido = constResultMagA;

    // Magalu porcentagem - calcMagaluPorcentagemLiquida
    if (
        ((((custo + (custo * VendaPorcentagemLiquida) / 100) + TaxaMagalu_ACIMA10) + (FreteMagalu_ATE79 * constNivelMagalu)) * 100) / (-(((constCnpj + constComissaoMagalu) * 100) - 100)) >= 78.96) {
        constResultMagP = (((custo + (custo * VendaPorcentagemLiquida) / 100) + TaxaMagalu_ACIMA79 + (constFreteMagalu * constNivelMagalu)) * 100) / (-(((constCnpj + constComissaoMagalu) * 100) - 100))
    } else if (
        (((custo + (custo * VendaPorcentagemLiquida) / 100) + TaxaMagalu_10A40 + (FreteMagalu_ATE79 * constNivelMagalu)) * 100) / (-(((constCnpj + constComissaoMagalu) * 100) - 100)) >= 39.94 && (((custo + (custo * VendaPorcentagemLiquida) / 100) + TaxaMagalu_10A40 + (FreteMagalu_ATE79 * constNivelMagalu)) * 100) / (-(((constCnpj + constComissaoMagalu) * 100) - 100)) <= 78.95) {
        constResultMagP = (((custo + (custo * VendaPorcentagemLiquida) / 100) + TaxaMagalu_ACIMA10 + (FreteMagalu_ATE79 * constNivelMagalu)) * 100) / (-(((constCnpj + constComissaoMagalu) * 100) - 100))
    } else if (
        (((custo + (custo * VendaPorcentagemLiquida) / 100) + TaxaMagalu_ACIMA10 + (constFreteMagalu * constNivelMagalu)) * 100) / (-(((constCnpj + constComissaoMagalu) * 100) - 100)) >= 78.96) {
        constResultMagP = (((custo + (custo * VendaPorcentagemLiquida) / 100) + TaxaMagalu_ACIMA79 + (constFreteMagalu * constNivelMagalu)) * 100) / (-(((constCnpj + constComissaoMagalu) * 100) - 100))
    } else if (
        (((custo + (custo * VendaPorcentagemLiquida) / 100) + TaxaMagalu_ACIMA79 + (constFreteMagalu * constNivelMagalu)) * 100) / (-(((constCnpj + constComissaoMagalu) * 100) - 100)) >= 78.96) {
        constResultMagP = (((custo + (custo * VendaPorcentagemLiquida) / 100) + TaxaMagalu_ACIMA79 + (constFreteMagalu * constNivelMagalu)) * 100) / (-(((constCnpj + constComissaoMagalu) * 100) - 100))
    } else if (
        (((custo + (custo * VendaPorcentagemLiquida) / 100) + TaxaMagalu_ATE10 + (FreteMagalu_ATE79 * constNivelMagalu)) * 100) / (-(((constCnpj + constComissaoMagalu) * 100) - 100)) >= 9.97 && (((custo + (custo * VendaPorcentagemLiquida) / 100) + TaxaMagalu_ATE10 + (FreteMagalu_ATE79 * constNivelMagalu)) * 100) / (-(((constCnpj + constComissaoMagalu) * 100) - 100)) <= 39.93) {
        constResultMagP = (((custo + (custo * VendaPorcentagemLiquida) / 100) + TaxaMagalu_10A40 + (FreteMagalu_ATE79 * constNivelMagalu)) * 100) / (-(((constCnpj + constComissaoMagalu) * 100) - 100))
    } else if (
        (((custo + (custo * VendaPorcentagemLiquida) / 100) + TaxaMagalu_ATE10 + (FreteMagalu_ATE79 * constNivelMagalu)) * 100) / (-(((constCnpj + constComissaoMagalu) * 100) - 100)) <= 9.96) {
        constResultMagP = (((custo + (custo * VendaPorcentagemLiquida) / 100) + TaxaMagalu_ATE10 + (FreteMagalu_ATE79 * constNivelMagalu)) * 100) / (-(((constCnpj + constComissaoMagalu) * 100) - 100))
    }
    var calcMagaluPorcentagemLiquida = constResultMagP;

    // --------------------------------
    // MERCADO LIVRE
    // --------------------------------

    // Mercado Livre clássico manual - calcMercadoLivreClassicoManual
    var calcMercadoLivreClassicoManual = VendaManual - (custo + (VendaManual * constCnpj) + (VendaManual * ComissaoMercadoLivreClassico) + (VendaManual <= 78.99 ? TaxaMercadoLivre_DE100A199 : VendaManual >= 79 ? TaxaMercadoLivre_ACIMA199 : 0) + ((VendaManual <= 78.99 ? FreteMercadoLivre_ATE79 : VendaManual >= 79 ? constFreteMercadoLivre : 0) * constNivelMercadoLivre));

    // Mercado Livre clássico auto - calcMercadoLivreClassicoValorLiquido
    if (
        (((custo + VendaValorLiquido) + (FreteMercadoLivre_ATE79 * constNivelMercadoLivre)) * 100) / (-(((constCnpj + ComissaoMercadoLivreClassico) * 100) - 100)) >= 78.98) {
        constResultMerClA = (((custo + VendaValorLiquido) + (constFreteMercadoLivre * constNivelMercadoLivre)) * 100) / (-(((constCnpj + ComissaoMercadoLivreClassico) * 100) - 100));
    } else if (
        (((custo + VendaValorLiquido + TaxaMercadoLivre_DE100A199) + (FreteMercadoLivre_ATE79 * constNivelMercadoLivre)) * 100) / (-(((constCnpj + ComissaoMercadoLivreClassico) * 100) - 100)) >= 78.98) {
        constResultMerClA = (((custo + VendaValorLiquido + TaxaMercadoLivre_DE100A199) + (constFreteMercadoLivre * constNivelMercadoLivre)) * 100) / (-(((constCnpj + ComissaoMercadoLivreClassico) * 100) - 100));
    } else if (
        (((custo + VendaValorLiquido + TaxaMercadoLivre_DE100A199) + (FreteMercadoLivre_ATE79 * constNivelMercadoLivre)) * 100) / (-(((constCnpj + ComissaoMercadoLivreClassico) * 100) - 100)) <= 78.97) {
        constResultMerClA = (((custo + VendaValorLiquido + TaxaMercadoLivre_DE100A199) + (FreteMercadoLivre_ATE79 * constNivelMercadoLivre)) * 100) / (-(((constCnpj + ComissaoMercadoLivreClassico) * 100) - 100));
    } else if (
        (((custo + VendaValorLiquido + TaxaMercadoLivre_DE100A199) + (constFreteMercadoLivre * constNivelMercadoLivre)) * 100) / (-(((constCnpj + ComissaoMercadoLivreClassico) * 100) - 100)) >= 78.98) {
        constResultMerClA = (((custo + VendaValorLiquido + TaxaMercadoLivre_ACIMA199) + (constFreteMercadoLivre * constNivelMercadoLivre)) * 100) / (-(((constCnpj + ComissaoMercadoLivreClassico) * 100) - 100));
    }
    var calcMercadoLivreClassicoValorLiquido = constResultMerClA;

    // Mercado Livre clássico porcentagem - calcMercadoLivreClassicoPorcentagemLiquida
    if (
        (((custo + (custo * VendaPorcentagemLiquida) / 100) + (FreteMercadoLivre_ATE79 * constNivelMercadoLivre)) * 100) / (-(((constCnpj + ComissaoMercadoLivreClassico) * 100) - 100)) >= 78.98) {
        constResultMerClP = (((custo + (custo * VendaPorcentagemLiquida) / 100) + (constFreteMercadoLivre * constNivelMercadoLivre)) * 100) / (-(((constCnpj + ComissaoMercadoLivreClassico) * 100) - 100));
    } else if (
        (((custo + (custo * VendaPorcentagemLiquida) / 100) + TaxaMercadoLivre_DE100A199 + (FreteMercadoLivre_ATE79 * constNivelMercadoLivre)) * 100) / (-(((constCnpj + ComissaoMercadoLivreClassico) * 100) - 100)) >= 78.98) {
        constResultMerClP = (((custo + (custo * VendaPorcentagemLiquida) / 100) + TaxaMercadoLivre_DE100A199 + (FreteMercadoLivre_ATE79 * constNivelMercadoLivre)) * 100) / (-(((constCnpj + ComissaoMercadoLivreClassico) * 100) - 100));
    } else if (
        (((custo + (custo * VendaPorcentagemLiquida) / 100) + TaxaMercadoLivre_DE100A199 + (FreteMercadoLivre_ATE79 * constNivelMercadoLivre)) * 100) / (-(((constCnpj + ComissaoMercadoLivreClassico) * 100) - 100)) <= 78.97) {
        constResultMerClP = (((custo + (custo * VendaPorcentagemLiquida) / 100) + TaxaMercadoLivre_DE100A199 + (FreteMercadoLivre_ATE79 * constNivelMercadoLivre)) * 100) / (-(((constCnpj + ComissaoMercadoLivreClassico) * 100) - 100));
    } else if (
        (((custo + (custo * VendaPorcentagemLiquida) / 100) + (constFreteMercadoLivre * constNivelMercadoLivre)) * 100) / (-(((constCnpj + ComissaoMercadoLivreClassico) * 100) - 100)) >= 78.98) {
        constResultMerClP = (((custo + (custo * VendaPorcentagemLiquida) / 100) + (constFreteMercadoLivre * constNivelMercadoLivre)) * 100) / (-(((constCnpj + ComissaoMercadoLivreClassico) * 100) - 100));
    }
    var calcMercadoLivreClassicoPorcentagemLiquida = constResultMerClP;

    // Mercado Livre premium manual - calcMercadoLivrePremiumManual

    var calcMercadoLivrePremiumManual = VendaManual - (custo + (VendaManual * constCnpj) + (VendaManual * ComissaoMercadoLivrePremium) + (VendaManual <= 78.99 ? TaxaMercadoLivre_DE100A199 : VendaManual >= 79 ? TaxaMercadoLivre_ACIMA199 : 0) + ((VendaManual <= 78.99 ? FreteMercadoLivre_ATE79 : VendaManual >= 79 ? constFreteMercadoLivre : 0) * constNivelMercadoLivre));

    // Mercado Livre premium auto - calcMercadoLivrePremiumValorLiquido
    if (
        (((custo + VendaValorLiquido + TaxaMercadoLivre_DE100A199) + (FreteMercadoLivre_ATE79 * constNivelMercadoLivre)) * 100) / (-(((constCnpj + ComissaoMercadoLivrePremium) * 100) - 100)) >= 78.98) {
        constResultMerPrA = (((custo + VendaValorLiquido + TaxaMercadoLivre_DE100A199) + (constFreteMercadoLivre * constNivelMercadoLivre)) * 100) / (-(((constCnpj + ComissaoMercadoLivrePremium) * 100) - 100));
    } else if (
        (((custo + VendaValorLiquido + TaxaMercadoLivre_DE100A199) + (FreteMercadoLivre_ATE79 * constNivelMercadoLivre)) * 100) / (-(((constCnpj + ComissaoMercadoLivrePremium) * 100) - 100)) <= 78.97) {
        constResultMerPrA = (((custo + VendaValorLiquido + TaxaMercadoLivre_DE100A199) + (FreteMercadoLivre_ATE79 * constNivelMercadoLivre)) * 100) / (-(((constCnpj + ComissaoMercadoLivrePremium) * 100) - 100));
    } else if (
        (((custo + VendaValorLiquido + TaxaMercadoLivre_DE100A199) + (constFreteMercadoLivre * constNivelMercadoLivre)) * 100) / (-(((constCnpj + ComissaoMercadoLivrePremium) * 100) - 100)) >= 78.98) {
        constResultMerPrA = (((custo + VendaValorLiquido + TaxaMercadoLivre_ACIMA199) + (constFreteMercadoLivre * constNivelMercadoLivre)) * 100) / (-(((constCnpj + ComissaoMercadoLivrePremium) * 100) - 100));
    }
    var calcMercadoLivrePremiumValorLiquido = constResultMerPrA;

    // Mercado Livre premium porcentagem - calcMercadoLivrePremiumPorcentagemLiquida
    if (
        (((custo + (custo * VendaPorcentagemLiquida) / 100) + (FreteMercadoLivre_ATE79 * constNivelMercadoLivre)) * 100) / (-(((constCnpj + ComissaoMercadoLivrePremium) * 100) - 100)) >= 78.98) {
        constResultMerPrP = (((custo + (custo * VendaPorcentagemLiquida) / 100) + (constFreteMercadoLivre * constNivelMercadoLivre)) * 100) / (-(((constCnpj + ComissaoMercadoLivrePremium) * 100) - 100));
    } else if (
        (((custo + (custo * VendaPorcentagemLiquida) / 100) + TaxaMercadoLivre_DE100A199 + (FreteMercadoLivre_ATE79 * constNivelMercadoLivre)) * 100) / (-(((constCnpj + ComissaoMercadoLivrePremium) * 100) - 100)) >= 78.98) {
        constResultMerPrP = (((custo + (custo * VendaPorcentagemLiquida) / 100) + TaxaMercadoLivre_DE100A199 + (FreteMercadoLivre_ATE79 * constNivelMercadoLivre)) * 100) / (-(((constCnpj + ComissaoMercadoLivrePremium) * 100) - 100));
    } else if (
        (((custo + (custo * VendaPorcentagemLiquida) / 100) + TaxaMercadoLivre_DE100A199 + (FreteMercadoLivre_ATE79 * constNivelMercadoLivre)) * 100) / (-(((constCnpj + ComissaoMercadoLivrePremium) * 100) - 100)) <= 78.97) {
        constResultMerPrP = (((custo + (custo * VendaPorcentagemLiquida) / 100) + TaxaMercadoLivre_DE100A199 + (FreteMercadoLivre_ATE79 * constNivelMercadoLivre)) * 100) / (-(((constCnpj + ComissaoMercadoLivrePremium) * 100) - 100));
    } else if (
        (((custo + (custo * VendaPorcentagemLiquida) / 100) + (constFreteMercadoLivre * constNivelMercadoLivre)) * 100) / (-(((constCnpj + ComissaoMercadoLivrePremium) * 100) - 100)) >= 78.98) {
        constResultMerPrP = (((custo + (custo * VendaPorcentagemLiquida) / 100) + (constFreteMercadoLivre * constNivelMercadoLivre)) * 100) / (-(((constCnpj + ComissaoMercadoLivrePremium) * 100) - 100));
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

    // Comissão não pode passar de 100 + 3

    // Shopee manual - calcShopeeManual
    var calcShopeeManual = VendaManual - (custo + (VendaManual * constCnpj) + (VendaManual >= 500 ? 100 : VendaManual <= 499.99 ? VendaManual * ComissaoShopee : 0) + TaxaShopee);

    // Shopee auto - calcShopeeValorLiquido
    if (
        ((VendaValorLiquido + custo + TaxaShopee) * 100) / (-(((constCnpj + ComissaoShopee) * 100) - 100)) <= 499.97) {
        constResultShoA = ((VendaValorLiquido + custo + TaxaShopee) * 100) / (-(((constCnpj + ComissaoShopee) * 100) - 100));
    } else if (
        ((VendaValorLiquido + custo + TaxaShopee) * 100) / (-(((constCnpj + ComissaoShopee) * 100) - 100)) >= 499.98) {
        constResultShoA = ((VendaValorLiquido + custo + TaxaShopee + 100) * 100) / (-(((constCnpj) * 100) - 100));
    }
    var calcShopeeValorLiquido = constResultShoA;

    // Shopee porcentagem - calcShopeePorcentagemLiquida
    if (
        (((custo + (custo * VendaPorcentagemLiquida) / 100) + TaxaShopee) * 100) / (-(((constCnpj + ComissaoShopee) * 100) - 100)) <= 499.97) {
        constResultShoP = (((custo + (custo * VendaPorcentagemLiquida) / 100) + TaxaShopee) * 100) / (-(((constCnpj + ComissaoShopee) * 100) - 100));
    } else if (
        (((custo + (custo * VendaPorcentagemLiquida) / 100) + TaxaShopee) * 100) / (-(((constCnpj + ComissaoShopee) * 100) - 100)) >= 499.98) {
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