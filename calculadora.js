// Obter valores dos campos
function calcular(inputElement) {
    var cnpj = document.getElementById("cnpj").value;
    var nivel = document.getElementById("nivel").value;
    var peso = document.getElementById("peso").value;
    var categoria = document.getElementById("categoria").value;
    var custo = parseFloat(document.getElementById("custo").value.replace(",", "."));
    var v_m = parseFloat(document.getElementById("v_m").value.replace(",", "."));
    var v_a = parseFloat(document.getElementById("v_a").value.replace(",", "."));
    var v_p = parseFloat(document.getElementById("v_p").value.replace(",", "."));

    // Valores constantes de CNPJ
    if (cnpj === "ESTEFANO") {
        constanteCnpj = cnpj_svltda;
    } else if (cnpj === "FERRY") {
        constanteCnpj = cnpj_ltda;
    } else if (cnpj === "SITE") {
        constanteCnpj = cnpj_online_imps;
    }

    // Valores constantes de categorias
    if (categoria === "Bronzeador ou protetor") {
        constanteCtAme = CtAme01;
        constanteCtMag = CtMag01;
        constanteCtMerCl = CtMerCl01;
        constanteCtMerPr = CtMerPr01;
        constanteCtSho = CtSho01;
        constanteCtSit = CtSit01;
    } else if (categoria === "Creme depilatório") {
        constanteCtAme = CtAme02;
        constanteCtMag = CtMag02;
        constanteCtMerCl = CtMerCl02;
        constanteCtMerPr = CtMerPr02;
        constanteCtSho = CtSho02;
        constanteCtSit = CtSit02;
    } else if (categoria === "Desodorante") {
        constanteCtAme = CtAme03;
        constanteCtMag = CtMag03;
        constanteCtMerCl = CtMerCl03;
        constanteCtMerPr = CtMerPr03;
        constanteCtSho = CtSho03;
        constanteCtSit = CtSit03;
    } else if (categoria === "Escova ou pente de cabelo") {
        constanteCtAme = CtAme04;
        constanteCtMag = CtMag04;
        constanteCtMerCl = CtMerCl04;
        constanteCtMerPr = CtMerPr04;
        constanteCtSho = CtSho04;
        constanteCtSit = CtSit04;
    } else if (categoria === "Espuma de barbear") {
        constanteCtAme = CtAme05;
        constanteCtMag = CtMag05;
        constanteCtMerCl = CtMerCl05;
        constanteCtMerPr = CtMerPr05;
        constanteCtSho = CtSho05;
        constanteCtSit = CtSit05;
    } else if (categoria === "Fixador de cabelo") {
        constanteCtAme = CtAme06;
        constanteCtMag = CtMag06;
        constanteCtMerCl = CtMerCl06;
        constanteCtMerPr = CtMerPr06;
        constanteCtSho = CtSho06;
        constanteCtSit = CtSit06;
    } else if (categoria === "Maquinário ou eletrônico") {
        constanteCtAme = CtAme07;
        constanteCtMag = CtMag07;
        constanteCtMerCl = CtMerCl07;
        constanteCtMerPr = CtMerPr07;
        constanteCtSho = CtSho07;
        constanteCtSit = CtSit07;
    } else if (categoria === "Pele ou unha") {
        constanteCtAme = CtAme08;
        constanteCtMag = CtMag08;
        constanteCtMerCl = CtMerCl08;
        constanteCtMerPr = CtMerPr08;
        constanteCtSho = CtSho08;
        constanteCtSit = CtSit08;
    } else if (categoria === "Repelente") {
        constanteCtAme = CtAme09;
        constanteCtMag = CtMag09;
        constanteCtMerCl = CtMerCl09;
        constanteCtMerPr = CtMerPr09;
        constanteCtSho = CtSho09;
        constanteCtSit = CtSit09;
    } else if (categoria === "Sabonete") {
        constanteCtAme = CtAme10;
        constanteCtMag = CtMag10;
        constanteCtMerCl = CtMerCl10;
        constanteCtMerPr = CtMerPr10;
        constanteCtSho = CtSho10;
        constanteCtSit = CtSit10;
    } else if (categoria === "Shampoo/Cond/Masc capilar") {
        constanteCtAme = CtAme11;
        constanteCtMag = CtMag11;
        constanteCtMerCl = CtMerCl11;
        constanteCtMerPr = CtMerPr11;
        constanteCtSho = CtSho11;
        constanteCtSit = CtSit11;
    } else if (categoria === "Tinta Capilar") {
        constanteCtAme = CtAme12;
        constanteCtMag = CtMag12;
        constanteCtMerCl = CtMerCl12;
        constanteCtMerPr = CtMerPr12;
        constanteCtSho = CtSho12;
        constanteCtSit = CtSit12;
    } else if (categoria === "Utensílio ou acessório de beleza") {
        constanteCtAme = CtAme13;
        constanteCtMag = CtMag13;
        constanteCtMerCl = CtMerCl13;
        constanteCtMerPr = CtMerPr13;
        constanteCtSho = CtSho13;
        constanteCtSit = CtSit13;
    }

    // Valores constantes de peso e frete para acima de R$ 79
    if (peso === "até 0.3kg") {
        constanteFrAme = FrAmeMai79_300g;
        constanteFrMag = FrMagMai79_300g;
        constanteFrMer = FrMerMai79_300g;
        constanteFrSho = FrSho;
        constanteFrSit = FrSit;
    } else if (peso === "0.3 a 0.5kg") {
        constanteFrAme = FrAmeMai79_300gA500g;
        constanteFrMag = FrMagMai79_300gA500g;
        constanteFrMer = FrMerMai79_300gA500g;
        constanteFrSho = FrSho;
        constanteFrSit = FrSit;
    } else if (peso === "0.5 a 1kg") {
        constanteFrAme = FrAmeMai79_500gA1kg;
        constanteFrMag = FrMagMai79_500gA1kg;
        constanteFrMer = FrMerMai79_500gA1kg;
        constanteFrSho = FrSho;
        constanteFrSit = FrSit;
    } else if (peso === "1 a 2kg") {
        constanteFrAme = FrAmeMai79_1A2kg;
        constanteFrMag = FrMagMai79_1A2kg;
        constanteFrMer = FrMerMai79_1A2kg;
        constanteFrSho = FrSho;
        constanteFrSit = FrSit;
    } else if (peso === "2 a 5kg") {
        constanteFrAme = FrAmeMai79_2A5kg;
        constanteFrMag = FrMagMai79_2A5kg;
        constanteFrMer = FrMerMai79_2A5kg;
        constanteFrSho = FrSho;
        constanteFrSit = FrSit;
    } else if (peso === "5 a 9kg") {
        constanteFrAme = FrAmeMai79_5A9kg;
        constanteFrMag = FrMagMai79_5A9kg;
        constanteFrMer = FrMerMai79_5A9kg;
        constanteFrSho = FrSho;
        constanteFrSit = FrSit;
    } else if (peso === "9 a 13kg") {
        constanteFrAme = FrAmeMai79_9A13kg;
        constanteFrMag = FrMagMai79_9A13kg;
        constanteFrMer = FrMerMai79_9A13kg;
        constanteFrSho = FrSho;
        constanteFrSit = FrSit;
    } else if (peso === "13 a 17kg") {
        constanteFrAme = FrAmeMai79_13A17kg;
        constanteFrMag = FrMagMai79_13A17kg;
        constanteFrMer = FrMerMai79_13A17kg;
        constanteFrSho = FrSho;
        constanteFrSit = FrSit;
    } else if (peso === "17 a 23kg") {
        constanteFrAme = FrAmeMai79_17A23kg;
        constanteFrMag = FrMagMai79_17A23kg;
        constanteFrMer = FrMerMai79_17A23kg;
        constanteFrSho = FrSho;
        constanteFrSit = FrSit;
    } else if (peso === "23 a 30kg") {
        constanteFrAme = FrAmeMai79_23A30kg;
        constanteFrMag = FrMagMai79_23A30kg;
        constanteFrMer = FrMerMai79_23A30kg;
        constanteFrSho = FrSho;
        constanteFrSit = FrSit;
    }

    // Valores constantes de desconto no frete baseado no nível
    if (nivel === "5") {
        constanteNvAme = NvAme5;
        constanteNvMag = NvMag5;
        constanteNvMer = NvMer5;
        constanteNvSho = NvSho;
        cosntanteNvSit = NvSit;
    } else if (nivel === "4") {
        constanteNvAme = NvAme4;
        constanteNvMag = NvMag4;
        constanteNvMer = NvMer4;
        constanteNvSho = NvSho;
        cosntanteNvSit = NvSit;
    } else if (nivel === "3") {
        constanteNvAme = NvAme3;
        constanteNvMag = NvMag3;
        constanteNvMer = NvMer3;
        constanteNvSho = NvSho;
        cosntanteNvSit = NvSit;
    } else if (nivel === "2") {
        constanteNvAme = NvAme2;
        constanteNvMag = NvMag2;
        constanteNvMer = NvMer2;
        constanteNvSho = NvSho;
        cosntanteNvSit = NvSit;
    } else if (nivel === "1") {
        constanteNvAme = NvAme1;
        constanteNvMag = NvMag1;
        constanteNvMer = NvMer1;
        constanteNvSho = NvSho;
        cosntanteNvSit = NvSit;
    }

    // --------------------------------

    // FÓRMULAS DE CÁLCULO
    var endcomm_ame = (-(((constanteCnpj + constanteCtAme) * 100) - 100));
    var endcomm_mag = (-(((constanteCnpj + constanteCtMag) * 100) - 100));
    var endcomm_mercl = (-(((constanteCnpj + constanteCtMerCl) * 100) - 100));
    var endcomm_merpr = (-(((constanteCnpj + constanteCtMerPr) * 100) - 100));
    var endcomm_sho = (-(((constanteCnpj + constanteCtSho) * 100) - 100));

    // Americanas manual - calcAmeM
    var calcAmeM = v_m - (custo + (v_m * constanteCnpj) + (v_m * constanteCtAme) + TxAme + ((v_m <= 39.99 ? FrAmeMen40 : v_m >= 40 && v_m <= 78.99 ? FrAmeMen79 : v_m >= 79 ? constanteFrAme : 0) * constanteNvAme));

    // Americanas auto - calcAmeA
    if (
        (((custo + v_a + TxAme) + (FrAmeMen79 * constanteNvAme)) * 100) / endcomm_ame >= 78.96) {
        constanteResultAmeA = (((custo + v_a + TxAme) + (constanteFrAme * constanteNvAme)) * 100) / endcomm_ame;
    } else if (
        (((custo + v_a + TxAme) + (FrAmeMen40 * constanteNvAme)) * 100) / endcomm_ame >= 39.94 && (((custo + v_a + TxAme) + (FrAmeMen40 * constanteNvAme)) * 100) / endcomm_ame <= 78.95) {
        constanteResultAmeA = (((custo + v_a + TxAme) + (FrAmeMen79 * constanteNvAme)) * 100) / endcomm_ame;
    } else if (
        (((custo + v_a + TxAme) + (constanteFrAme * constanteNvAme)) * 100) / endcomm_ame >= 78.96) {
        constanteResultAmeA = (((custo + v_a + TxAme) + (constanteFrAme * constanteNvAme)) * 100) / endcomm_ame;
    } else if (
        (((custo + v_a + TxAme) + (FrAmeMen40 * constanteNvAme)) * 100) / endcomm_ame <= 39.93) {
        constanteResultAmeA = (((custo + v_a + TxAme) + (FrAmeMen40 * constanteNvAme)) * 100) / endcomm_ame;
    }
    var calcAmeA = constanteResultAmeA;

    // Americanas porcentagem - calcAmeP
    if (
        (((custo + (custo * v_p) / 100) + TxAme + (FrAmeMen79 * constanteNvAme)) * 100) / endcomm_ame >= 78.96) {
        constanteResultAmeP = (((custo + (custo * v_p) / 100) + TxAme + (constanteFrAme * constanteNvAme)) * 100) / endcomm_ame
    } else if (
        (((custo + (custo * v_p) / 100) + TxAme + (FrAmeMen40 * constanteNvAme)) * 100) / endcomm_ame >= 39.94 && (((custo + (custo * v_p) / 100) + TxAme + (FrAmeMen40 * constanteNvAme)) * 100) / endcomm_ame <= 78.95) {
        constanteResultAmeP = (((custo + (custo * v_p) / 100) + TxAme + (FrAmeMen79 * constanteNvAme)) * 100) / endcomm_ame
    } else if (
        (((custo + (custo * v_p) / 100) + TxAme + (constanteFrAme * constanteNvAme)) * 100) / endcomm_ame >= 78.96) {
        constanteResultAmeP = (((custo + (custo * v_p) / 100) + TxAme + (constanteFrAme * constanteNvAme)) * 100) / endcomm_ame
    } else if (
        (((custo + (custo * v_p) / 100) + TxAme + (FrAmeMen40 * constanteNvAme)) * 100) / endcomm_ame <= 39.93) {
        constanteResultAmeP = (((custo + (custo * v_p) / 100) + TxAme + (FrAmeMen40 * constanteNvAme)) * 100) / endcomm_ame
    }
    var calcAmeP = constanteResultAmeP;

    // Magalu manual - calcMagM
    var calcMagM = v_m - (custo + (v_m * constanteCnpj) + (v_m * constanteCtMag) + (v_m <= 9.99 ? TxMag_10 : v_m >= 10 && v_m <= 39.99 ? TxMag_10A40 : v_m >= 40 && v_m <= 78.99 ? TxMag_40A79 : v_m >= 79 ? TxMag_79 : 0) + ((v_m <= 78.99 ? FrMagMen79 : v_m >= 79 ? constanteFrMag : 0) * constanteNvMag));

    // Magalu auto - calcMagA
    if (
        (((custo + v_a + TxMag_40A79) + (FrMagMen79 * constanteNvMag)) * 100) / endcomm_mag >= 78.96) {
        constanteResultMagA = (((custo + v_a + TxMag_79) + (constanteFrMag * constanteNvMag)) * 100) / endcomm_mag;
    } else if (
        (((custo + v_a + TxMag_10A40) + (FrMagMen79 * constanteNvMag)) * 100) / endcomm_mag >= 39.94 && (((custo + v_a + TxMag_10A40) + (FrMagMen79 * constanteNvMag)) * 100) / endcomm_mag <= 78.95) {
        constanteResultMagA = (((custo + v_a + TxMag_40A79) + (FrMagMen79 * constanteNvMag)) * 100) / endcomm_mag;
    } else if (
        (((custo + v_a + TxMag_40A79) + (constanteFrMag * constanteNvMag)) * 100) / endcomm_mag >= 78.96) {
        constanteResultMagA = (((custo + v_a + TxMag_79) + (constanteFrMag * constanteNvMag)) * 100) / endcomm_mag;
    } else if (
        (((custo + v_a + TxMag_79) + (FrMagMen79 * constanteNvMag)) * 100) / endcomm_mag >= 9.96 && (((custo + v_a + TxMag_10) + (FrMagMen79 * constanteNvMag)) * 100) / endcomm_mag <= 39.93) {
        constanteResultMagA = (((custo + v_a + TxMag_10A40) + (FrMagMen79 * constanteNvMag)) * 100) / endcomm_mag;
    } else if (
        (((custo + v_a + TxMag_10) + (FrMagMen79 * constanteNvMag)) * 100) / endcomm_mag <= 9.97) {
        constanteResultMagA = (((custo + v_a + TxMag_10) + (FrMagMen79 * constanteNvMag)) * 100) / endcomm_mag;
    }
    var calcMagA = constanteResultMagA;


    // Magalu porcentagem - calcMagP
    if (
        ((((custo + (custo * v_p) / 100) + TxMag_40A79) + (FrMagMen79 * constanteNvMag)) * 100) / endcomm_mag >= 78.96) {
        constanteResultMagP = (((custo + (custo * v_p) / 100) + TxMag_79 + (constanteFrMag * constanteNvMag)) * 100) / endcomm_mag
    } else if (
        (((custo + (custo * v_p) / 100) + TxMag_10A40 + (FrMagMen79 * constanteNvMag)) * 100) / endcomm_mag >= 39.94 && (((custo + (custo * v_p) / 100) + TxMag_10A40 + (FrMagMen79 * constanteNvMag)) * 100) / endcomm_mag <= 78.95) {
        constanteResultMagP = (((custo + (custo * v_p) / 100) + TxMag_40A79 + (FrMagMen79 * constanteNvMag)) * 100) / endcomm_mag
    } else if (
        (((custo + (custo * v_p) / 100) + TxMag_40A79 + (constanteFrMag * constanteNvMag)) * 100) / endcomm_mag >= 78.96) {
        constanteResultMagP = (((custo + (custo * v_p) / 100) + TxMag_79 + (constanteFrMag * constanteNvMag)) * 100) / endcomm_mag
    } else if (
        (((custo + (custo * v_p) / 100) + TxMag_79 + (constanteFrMag * constanteNvMag)) * 100) / endcomm_mag >= 78.96) {
        constanteResultMagP = (((custo + (custo * v_p) / 100) + TxMag_79 + (constanteFrMag * constanteNvMag)) * 100) / endcomm_mag
    } else if (
        (((custo + (custo * v_p) / 100) + TxMag_10 + (FrMagMen79 * constanteNvMag)) * 100) / endcomm_mag >= 9.97 && (((custo + (custo * v_p) / 100) + TxMag_10 + (FrMagMen79 * constanteNvMag)) * 100) / endcomm_mag <= 39.93) {
        constanteResultMagP = (((custo + (custo * v_p) / 100) + TxMag_10A40 + (FrMagMen79 * constanteNvMag)) * 100) / endcomm_mag
    } else if (
        (((custo + (custo * v_p) / 100) + TxMag_10 + (FrMagMen79 * constanteNvMag)) * 100) / endcomm_mag <= 9.96) {
        constanteResultMagP = (((custo + (custo * v_p) / 100) + TxMag_10 + (FrMagMen79 * constanteNvMag)) * 100) / endcomm_mag
    }
    var calcMagP = constanteResultMagP;

    // Mercado Livre clássico manual - calcMerClM
    var calcMerClM = v_m - (custo + (v_m * constanteCnpj) + (v_m * constanteCtMerCl) + (v_m <= 78.99 ? TxMerMen79 : v_m >= 79 ? TxMerMai79 : 0) + ((v_m <= 78.99 ? FrMerMen79 : v_m >= 79 ? constanteFrMer : 0) * constanteNvMer));

    // Mercado Livre clássico auto - calcMerClA
    if (
        (((custo + v_a + TxMerMen79) + (FrMerMen79 * constanteNvMer)) * 100) / endcomm_mercl >= 78.96) {
        constanteResultMerClA = (((custo + v_a + TxMerMen79) + (constanteFrMer * constanteNvMer)) * 100) / endcomm_mercl;
    } else if (
        (((custo + v_a + TxMerMen79) + (FrMerMen79 * constanteNvMer)) * 100) / endcomm_mercl <= 78.95) {
        constanteResultMerClA = (((custo + v_a + TxMerMen79) + (FrMerMen79 * constanteNvMer)) * 100) / endcomm_mercl;
    } else if (
        (((custo + v_a + TxMerMen79) + (constanteFrMer * constanteNvMer)) * 100) / endcomm_mercl >= 78.96) {
        constanteResultMerClA = (((custo + v_a + TxMerMai79) + (constanteFrMer * constanteNvMer)) * 100) / endcomm_mercl;
    }
    var calcMerClA = constanteResultMerClA;

    // Mercado Livre clássico porcentagem - calcMerClP
    if (
        (((custo + (custo * v_p) / 100) + (FrMerMen79 * constanteNvMer)) * 100) / endcomm_mercl >= 78.96) {
        constanteResultMerClP = (((custo + (custo * v_p) / 100) + (constanteFrMer * constanteNvMer)) * 100) / endcomm_mercl;
    } else if (
        (((custo + (custo * v_p) / 100) + (FrMerMen79 * constanteNvMer)) * 100) / endcomm_mercl <= 78.95) {
        constanteResultMerClP = (((custo + (custo * v_p) / 100) + (FrMerMen79 * constanteNvMer)) * 100) / endcomm_mercl;
    } else if (
        (((custo + (custo * v_p) / 100) + (constanteFrMer * constanteNvMer)) * 100) / endcomm_mercl >= 78.96) {
        constanteResultMerClP = (((custo + v_a + TxMerMai79) + (constanteFrMer * constanteNvMer)) * 100) / endcomm_mercl;
    }
    var calcMerClP = constanteResultMerClP;

    // Mercado Livre premium manual - calcMerPrM

    var calcMerPrM = v_m - (custo + (v_m * constanteCnpj) + (v_m * constanteCtMerPr) + (v_m <= 78.99 ? TxMerMen79 : v_m >= 79 ? TxMerMai79 : 0) + ((v_m <= 78.99 ? FrMerMen79 : v_m >= 79 ? constanteFrMer : 0) * constanteNvMer));

    // Mercado Livre premium auto - calcMerPrA
    if (
        (((custo + v_a + TxMerMen79) + (FrMerMen79 * constanteNvMer)) * 100) / endcomm_merpr >= 78.96) {
        constanteResultMerPrA = (((custo + v_a + TxMerMen79) + (constanteFrMer * constanteNvMer)) * 100) / endcomm_merpr;
    } else if (
        (((custo + v_a + TxMerMen79) + (FrMerMen79 * constanteNvMer)) * 100) / endcomm_merpr <= 78.95) {
        constanteResultMerPrA = (((custo + v_a + TxMerMen79) + (FrMerMen79 * constanteNvMer)) * 100) / endcomm_merpr;
    } else if (
        (((custo + v_a + TxMerMen79) + (constanteFrMer * constanteNvMer)) * 100) / endcomm_merpr >= 78.96) {
        constanteResultMerPrA = (((custo + v_a + TxMerMai79) + (constanteFrMer * constanteNvMer)) * 100) / endcomm_merpr;
    }
    var calcMerPrA = constanteResultMerPrA;

    // Mercado Livre premium porcentagem - calcMerPrP
    if (
        (((custo + (custo * v_p) / 100) + (FrMerMen79 * constanteNvMer)) * 100) / endcomm_merpr >= 78.96) {
        constanteResultMerPrP = (((custo + (custo * v_p) / 100) + (constanteFrMer * constanteNvMer)) * 100) / endcomm_merpr;
    } else if (
        (((custo + (custo * v_p) / 100) + (FrMerMen79 * constanteNvMer)) * 100) / endcomm_merpr <= 78.95) {
        constanteResultMerPrP = (((custo + (custo * v_p) / 100) + (FrMerMen79 * constanteNvMer)) * 100) / endcomm_merpr;
    } else if (
        (((custo + (custo * v_p) / 100) + (constanteFrMer * constanteNvMer)) * 100) / endcomm_merpr >= 78.96) {
        constanteResultMerPrP = (((custo + v_a + TxMerMai79) + (constanteFrMer * constanteNvMer)) * 100) / endcomm_merpr;
    }
    var calcMerPrP = constanteResultMerPrP;

    // Shopee manual - calcShoM
    var calcShoM = v_m - (custo + (v_m * constanteCnpj) + (v_m >= 500 ? 100 : v_m <= 499.99 ? custo * constanteCtSho : 0) + TxSho);

    // Shopee auto - calcShoA
    if (
        ((v_a + custo + TxSho) * 100) / endcomm_sho <= 499.97) {
        constanteResultShoA = ((v_a + custo + TxSho) * 100) / endcomm_sho;
    } else if (
        ((v_a + custo + TxSho) * 100) / endcomm_sho >= 499.98) {
        constanteResultShoA = ((v_a + custo + TxSho + 100) * 100) / (-(((constanteCnpj) * 100) - 100));
    }
    var calcShoA = constanteResultShoA;

    // Shopee porcentagem - calcShoP
    if (
        ((((custo + (custo * v_p)) / 100) + TxSho) * 100) / endcomm_sho <= 499.97) {
        constanteResultShoP = (((custo + (custo * v_p) / 100) + TxSho) * 100) / endcomm_sho;
    } else if (
        ((((custo + (custo * v_p)) / 100) + TxSho) * 100) / endcomm_sho >= 499.98) {
        constanteResultShoP = (((custo + (custo * v_p) / 100) + TxSho + 100) * 100) / (-(((constanteCnpj) * 100) - 100));
    }
    var calcShoP = constanteResultShoP;

    // Site manual - calcSitM
    var calcSitM = v_m - (custo + (v_m * constanteCnpj) + (v_m * cnpj_online_cmss));

    // Site auto - calcSitA
    var calcSitA = (custo + v_a) * 100 / (-(((constanteCnpj + cnpj_online_cmss) * 100) - 100));

    // Site porcentagem - calcSitP
    var calcSitP = (((v_p * custo) + custo) * 10) / (-(((constanteCnpj + cnpj_online_cmss) * 100) - 100));

    // --------------------------------

    // Valores que serão exibidos na tabela de resultados

    // Americanas
    document.getElementById("result-ame-v_m").textContent = "R$ " + calcAmeM.toFixed(2).replace(".", ",") + " (" + ((calcAmeM / custo) * 100).toFixed(2) + "%)";
    document.getElementById("result-ame-v_a").textContent = "R$ " + calcAmeA.toFixed(2).replace(".", ",") + " (" + ((v_a / custo) * 100).toFixed(2) + "%)";
    document.getElementById("result-ame-v_p").textContent = "R$ " + calcAmeP.toFixed(2).replace(".", ",") + " (" + "R$ " + ((custo * v_p) / 100).toFixed(2).replace(".", ",") + ")";

    // Magalu
    document.getElementById("result-mag-v_m").textContent = "R$ " + calcMagM.toFixed(2).replace(".", ",") + " (" + ((calcMagM / custo) * 100).toFixed(2) + "%)";
    document.getElementById("result-mag-v_a").textContent = "R$ " + calcMagA.toFixed(2).replace(".", ",") + " (" + ((v_a / custo) * 100).toFixed(2) + "%)";
    document.getElementById("result-mag-v_p").textContent = "R$ " + calcMagP.toFixed(2).replace(".", ",") + " (" + "R$ " + ((custo * v_p) / 100).toFixed(2).replace(".", ",") + ")";

    // Mercado Livre Clássico
    document.getElementById("result-mercl-v_m").textContent = "R$ " + calcMerClM.toFixed(2).replace(".", ",") + " (" + ((calcMerClM / custo) * 100).toFixed(2) + "%)";
    document.getElementById("result-mercl-v_a").textContent = "R$ " + calcMerClA.toFixed(2).replace(".", ",") + " (" + ((v_a / custo) * 100).toFixed(2) + "%)";
    // document.getElementById("result-mercl-v_p").textContent = "R$ " + calcMerClP.toFixed(2).replace(".", ",") + " (" + "R$ " + ((custo * v_p) / 100).toFixed(2).replace(".", ",") + ")";
    document.getElementById("result-mercl-v_p").textContent = "EM MANUTENÇÃO"

    // Mercado Livre Premium
    document.getElementById("result-merpr-v_m").textContent = "R$ " + calcMerPrM.toFixed(2).replace(".", ",") + " (" + ((calcMerPrM / custo) * 100).toFixed(2) + "%)";
    document.getElementById("result-merpr-v_a").textContent = "R$ " + calcMerPrA.toFixed(2).replace(".", ",") + " (" + ((v_a / custo) * 100).toFixed(2) + "%)";
    // document.getElementById("result-merpr-v_p").textContent = "R$ " + calcMerPrP.toFixed(2).replace(".", ",") + " (" + "R$ " + ((custo * v_p) / 100).toFixed(2).replace(".", ",") + ")";
    document.getElementById("result-merpr-v_p").textContent = "EM MANUTENÇÃO"

    // Shopee
    document.getElementById("result-sho-v_m").textContent = "R$ " + calcShoM.toFixed(2).replace(".", ",") + " (" + ((calcShoM / custo) * 100).toFixed(2) + "%)";
    document.getElementById("result-sho-v_a").textContent = "R$ " + calcShoA.toFixed(2).replace(".", ",") + " (" + ((v_a / custo) * 100).toFixed(2) + "%)";
    document.getElementById("result-sho-v_p").textContent = "R$ " + calcShoP.toFixed(2).replace(".", ",") + " (" + "R$ " + ((custo * v_p) / 100).toFixed(2).replace(".", ",") + ")";

    // Site
    document.getElementById("result-sit-v_m").textContent = "R$ " + calcSitM.toFixed(2).replace(".", ",") + " (" + ((calcSitM / custo) * 100).toFixed(2) + "%)";
    document.getElementById("result-sit-v_a").textContent = "R$ " + calcSitA.toFixed(2).replace(".", ",") + " (" + ((v_a / custo) * 100).toFixed(2) + "%)";
    // document.getElementById("result-sit-v_p").textContent = "R$ " + calcSitP.toFixed(2).replace(".", ",") + " (" + "R$ " + ((custo * v_p) / 100).toFixed(2).replace(".", ",") + ")";
    document.getElementById("result-sit-v_p").textContent = "EM MANUTENÇÃO"
}