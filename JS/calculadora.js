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
        constCnpj = x;
    }

    // Valores constantes de peso e frete para acima de R$ 79 definidos no calc_variables.js
    if (peso === "Selecione") {
        constFreteAmericanas = x;
        constFreteCasasBahia = x;
        constFreteMagalu = x;
        constFreteMercadoLivre = x;
        constFreteOlist = x;
        constFreteRD = x;
        constFreteShopee = x;
        constFreteWebContinental = x;
        constFreteSiteUool = x;
        constFreteSiteAtacado = x;
    } else if (peso === "até 0.3kg") {
        constFreteAmericanas = FreteAmericanas_ACIMA90_ate300G;
        constFreteCasasBahia = FreteCasasBahia_ACIMA79_ate300G;
        constFreteMagalu = FreteMagalu_ACIMA79_ate300G;
        constFreteMercadoLivre = FreteMercadoLivre_ACIMA79_ate300G;
        constFreteOlist = FreteOlist_ACIMA79_ate300G;
        constFreteRD = FreteRD;
        constFreteShopee = FreteShopee;
        constFreteWebContinental = FreteWebContinental;
        constFreteSiteUool = FreteSiteUool;
        constFreteSiteAtacado = FreteSiteAtacado;
    } else if (peso === "0.3 a 0.5kg") {
        constFreteAmericanas = FreteAmericanas_ACIMA90_300a500G;
        constFreteCasasBahia = FreteCasasBahia_ACIMA79_300a500G;
        constFreteMagalu = FreteMagalu_ACIMA79_300a500G;
        constFreteMercadoLivre = FreteMercadoLivre_ACIMA79_300a500G;
        constFreteOlist = FreteOlist_ACIMA79_300a500G;
        constFreteRD = FreteRD;
        constFreteShopee = FreteShopee;
        constFreteWebContinental = FreteWebContinental;
        constFreteSiteUool = FreteSiteUool;
        constFreteSiteAtacado = FreteSiteAtacado;
    } else if (peso === "0.5 a 1kg") {
        constFreteAmericanas = FreteAmericanas_ACIMA90_500Ga1KG;
        constFreteCasasBahia = FreteCasasBahia_ACIMA79_500Ga1KG;
        constFreteMagalu = FreteMagalu_ACIMA79_500Ga1KG;
        constFreteMercadoLivre = FreteMercadoLivre_ACIMA79_500Ga1KG;
        constFreteOlist = FreteOlist_ACIMA79_500Ga1KG;
        constFreteRD = FreteRD;
        constFreteShopee = FreteShopee;
        constFreteWebContinental = FreteWebContinental;
        constFreteSiteUool = FreteSiteUool;
        constFreteSiteAtacado = FreteSiteAtacado;
    } else if (peso === "1 a 2kg") {
        constFreteAmericanas = FreteAmericanas_ACIMA90_1a2KG;
        constFreteCasasBahia = FreteCasasBahia_ACIMA79_1a2KG;
        constFreteMagalu = FreteMagalu_ACIMA79_1a2KG;
        constFreteMercadoLivre = FreteMercadoLivre_ACIMA79_1a2KG;
        constFreteOlist = FreteOlist_ACIMA79_1a2KG;
        constFreteRD = FreteRD;
        constFreteShopee = FreteShopee;
        constFreteWebContinental = FreteWebContinental;
        constFreteSiteUool = FreteSiteUool;
        constFreteSiteAtacado = FreteSiteAtacado;
    } else if (peso === "2 a 5kg") {
        constFreteAmericanas = FreteAmericanas_ACIMA90_2a5KG;
        constFreteCasasBahia = FreteCasasBahia_ACIMA79_2a5KG;
        constFreteMagalu = FreteMagalu_ACIMA79_2a5KG;
        constFreteMercadoLivre = FreteMercadoLivre_ACIMA79_2a5KG;
        constFreteOlist = FreteOlist_ACIMA79_2a5KG;
        constFreteRD = FreteRD;
        constFreteShopee = FreteShopee;
        constFreteWebContinental = FreteWebContinental;
        constFreteSiteUool = FreteSiteUool;
        constFreteSiteAtacado = FreteSiteAtacado;
    } else if (peso === "5 a 9kg") {
        constFreteAmericanas = FreteAmericanas_ACIMA90_5a9KG;
        constFreteCasasBahia = FreteCasasBahia_ACIMA79_5a9KG;
        constFreteMagalu = FreteMagalu_ACIMA79_5a9KG;
        constFreteMercadoLivre = FreteMercadoLivre_ACIMA79_5a9KG;
        constFreteOlist = FreteOlist_ACIMA79_5a9KG;
        constFreteRD = FreteRD;
        constFreteShopee = FreteShopee;
        constFreteWebContinental = FreteWebContinental;
        constFreteSiteUool = FreteSiteUool;
        constFreteSiteAtacado = FreteSiteAtacado;
    } else if (peso === "9 a 13kg") {
        constFreteAmericanas = FreteAmericanas_ACIMA90_9a13KG;
        constFreteCasasBahia = FreteCasasBahia_ACIMA79_9a13KG;
        constFreteMagalu = FreteMagalu_ACIMA79_9a13KG;
        constFreteMercadoLivre = FreteMercadoLivre_ACIMA79_9a13KG;
        constFreteOlist = FreteOlist_ACIMA79_9a13KG;
        constFreteRD = FreteRD;
        constFreteShopee = FreteShopee;
        constFreteWebContinental = FreteWebContinental;
        constFreteSiteUool = FreteSiteUool;
        constFreteSiteAtacado = FreteSiteAtacado;
    } else if (peso === "13 a 17kg") {
        constFreteAmericanas = FreteAmericanas_ACIMA90_13a17KG;
        constFreteCasasBahia = FreteCasasBahia_ACIMA79_13a17KG;
        constFreteMagalu = FreteMagalu_ACIMA79_13a17KG;
        constFreteMercadoLivre = FreteMercadoLivre_ACIMA79_13a17KG;
        constFreteOlist = FreteOlist_ACIMA79_13a17KG;
        constFreteRD = FreteRD;
        constFreteShopee = FreteShopee;
        constFreteWebContinental = FreteWebContinental;
        constFreteSiteUool = FreteSiteUool;
        constFreteSiteAtacado = FreteSiteAtacado;
    } else if (peso === "17 a 23kg") {
        constFreteAmericanas = FreteAmericanas_ACIMA90_17a23KG;
        constFreteCasasBahia = FreteCasasBahia_ACIMA79_17a23KG;
        constFreteMagalu = FreteMagalu_ACIMA79_17a23KG;
        constFreteMercadoLivre = FreteMercadoLivre_ACIMA79_17a23KG;
        constFreteOlist = FreteOlist_ACIMA79_17a23KG;
        constFreteRD = FreteRD;
        constFreteShopee = FreteShopee;
        constFreteWebContinental = FreteWebContinental;
        constFreteSiteUool = FreteSiteUool;
        constFreteSiteAtacado = FreteSiteAtacado;
    } else if (peso === "23 a 30kg") {
        constFreteAmericanas = FreteAmericanas_ACIMA90_23a30KG;
        constFreteCasasBahia = FreteCasasBahia_ACIMA79_23a30KG;
        constFreteMagalu = FreteMagalu_ACIMA79_23a30KG;
        constFreteMercadoLivre = FreteMercadoLivre_ACIMA79_23a30KG;
        constFreteOlist = FreteOlist_ACIMA79_23a30KG;
        constFreteRD = FreteRD;
        constFreteShopee = FreteShopee;
        constFreteWebContinental = FreteWebContinental;
        constFreteSiteUool = FreteSiteUool;
        constFreteSiteAtacado = FreteSiteAtacado;
    }

    // Valores constantes de desconto no frete baseado no nível definidos no calc_variables.js
    if (nivel === "5") {
        constNivelAmericanas = NivelAmericanas5;
        constNivelCasasBahia = NivelCasasBahia5;
        constNivelMagalu = NivelMagalu5;
        constNivelMercadoLivre = NivelMercadoLivre5;
        constNivelOlist = NivelOlist5;
        constNivelRD = NivelRD;
        constNivelWebContinental = NivelWebContinental;
        constNivelShopee = NivelShopee;
        constNivelSiteUool = NivelSiteUool;
        constNivelSiteAtacado = NivelSiteAtacado;
    } else if (nivel === "4") {
        constNivelAmericanas = NivelAmericanas4;
        constNivelCasasBahia = NivelCasasBahia4;
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
        constNivelCasasBahia = NivelCasasBahia3;
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
        constNivelCasasBahia = NivelCasasBahia2;
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
        constNivelCasasBahia = NivelCasasBahia1;
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

    // Fórmulas de cálculo MANUAL seguem a fórmula:
    // (valor de venda) - [(custo) + (valor de venda * CNPJ) + (valor de venda * comissão do marketplace) + (frete * nível no marketplace) + (taxa fixa)]

    // Fórmulas de cálculo VALOR LÍQUIDO seguem a fórmula:
    // {[(valor líquido) + (custo) + (taxa fixa) + (frete * nível no marketplace)] * 100} / ( - {[(CNPJ + comissão do marketplace) * 100] - 100})

    // Fórmulas de cálculo PORCENTAGEM LÍQUIDA seguem a fórmula:
    // ([{(custo) + [(Porcentagem Líquida * custo) / 100]} + (taxa fixa) + (frete * nível no marketplace)] * 100) / ( - {[(CNPJ + comissão do marketplace) * 100] - 100})


    // --------------------------------
    // AMERICANAS
    // --------------------------------

    // Americanas Manual - calcAmericanasManual
    var calcAmericanasManual = VendaManual
        - (
            + (custo)
            + (VendaManual * constCnpj)
            + (VendaManual * ComissaoAmericanas)
            + (
                (
                    VendaManual <= 39.99 ? FreteAmericanas_ATE40 :
                        VendaManual >= 40 && VendaManual <= 89.99 ? FreteAmericanas_DE40A89 :
                            VendaManual >= 79 ? constFreteAmericanas : 0
                ) * constNivelAmericanas
            )
            + (TaxaAmericanas)
        );

    // Americanas Valor Líquido - calcAmericanasValorLiquido
    // Abaixo de 40
    if (
        (
            (
                (VendaValorLiquido + custo + TaxaAmericanas)
                + (FreteAmericanas_ATE40 * constNivelAmericanas)
            ) * 100)
        /
        (
            -(
                (
                    (constCnpj + ComissaoAmericanas)
                    * 100)
                - 100
            )
        ) <= 39.99) {

        calcAmericanasValorLiquido =
            (
                (
                    (VendaValorLiquido + custo + TaxaAmericanas)
                    + (FreteAmericanas_ATE40 * constNivelAmericanas)
                ) * 100)
            /
            (
                -(
                    (
                        (constCnpj + ComissaoAmericanas)
                        * 100)
                    - 100
                )
            );
    }

    // Americanas Valor Líquido - calcAmericanasValorLiquido
    // Entre 40 e 89,99
    else if (
        (
            (
                (VendaValorLiquido + custo + TaxaAmericanas)
                + (FreteAmericanas_ATE40 * constNivelAmericanas)
            ) * 100)
        /
        (
            -(
                (
                    (constCnpj + ComissaoAmericanas)
                    * 100)
                - 100
            )
        ) >= 40
        &&
        (
            (
                (VendaValorLiquido + custo + TaxaAmericanas)
                + (FreteAmericanas_DE40A89 * constNivelAmericanas)
            ) * 100)
        /
        (
            -(
                (
                    (constCnpj + ComissaoAmericanas)
                    * 100)
                - 100
            )
        ) <= 89.99) {

        calcAmericanasValorLiquido =
            (
                (
                    (VendaValorLiquido + custo + TaxaAmericanas)
                    + (FreteAmericanas_DE40A89 * constNivelAmericanas)
                ) * 100)
            /
            (
                -(
                    (
                        (constCnpj + ComissaoAmericanas)
                        * 100)
                    - 100
                )
            );
    }

    // Americanas Valor Líquido - calcAmericanasValorLiquido
    // Acima de 90
    else if (
        (
            (
                (VendaValorLiquido + custo + TaxaAmericanas)
                + (FreteAmericanas_DE40A89 * constNivelAmericanas)
            ) * 100)
        /
        (
            -(
                (
                    (constCnpj + ComissaoAmericanas)
                    * 100)
                - 100
            )
        ) >= 90) {

        calcAmericanasValorLiquido =
            (
                (
                    (VendaValorLiquido + custo + TaxaAmericanas)
                    + (constFreteAmericanas * constNivelAmericanas)
                ) * 100)
            /
            (
                -(
                    (
                        (constCnpj + ComissaoAmericanas)
                        * 100)
                    - 100
                )
            );
    }

    // Americanas Porcentagem Líquida - calcAmericanasPorcentagemLiquida
    // Abaixo de 40
    if (
        (
            (
                (
                    + (custo)
                    + ((VendaPorcentagemLiquida * custo) / 100)
                )
                + (TaxaAmericanas)
                + (FreteAmericanas_ATE40 * constNivelAmericanas)
            ) * 100)
        /
        (
            -(
                (
                    (constCnpj + ComissaoAmericanas)
                    * 100)
                - 100
            )
        ) <= 39.99) {

        calcAmericanasPorcentagemLiquida =
            (
                (
                    (
                        + (custo)
                        + ((VendaPorcentagemLiquida * custo) / 100)
                    )
                    + (TaxaAmericanas)
                    + (FreteAmericanas_ATE40 * constNivelAmericanas)
                ) * 100)
            /
            (
                -(
                    (
                        (constCnpj + ComissaoAmericanas)
                        * 100)
                    - 100
                )
            );
    }

    // Americanas Porcentagem Líquida - calcAmericanasPorcentagemLiquida
    // Entre 40 e 89,99
    else if (
        (
            (
                (
                    + (custo)
                    + ((VendaPorcentagemLiquida * custo) / 100)
                )
                + (TaxaAmericanas)
                + (FreteAmericanas_ATE40 * constNivelAmericanas)
            ) * 100)
        /
        (
            -(
                (
                    (constCnpj + ComissaoAmericanas)
                    * 100)
                - 100
            )
        ) >= 40
        &&
        (
            (
                (
                    + (custo)
                    + ((VendaPorcentagemLiquida * custo) / 100)
                )
                + (TaxaAmericanas)
                + (FreteAmericanas_DE40A89 * constNivelAmericanas)
            ) * 100)
        /
        (
            -(
                (
                    (constCnpj + ComissaoAmericanas)
                    * 100)
                - 100
            )
        ) <= 89.99) {

        calcAmericanasPorcentagemLiquida =
            (
                (
                    (
                        + (custo)
                        + ((VendaPorcentagemLiquida * custo) / 100)
                    )
                    + (TaxaAmericanas)
                    + (FreteAmericanas_DE40A89 * constNivelAmericanas)
                ) * 100)
            /
            (
                -(
                    (
                        (constCnpj + ComissaoAmericanas)
                        * 100)
                    - 100
                )
            );
    }

    // Americanas Porcentagem Líquida - calcAmericanasPorcentagemLiquida
    // Acima de 90
    else if (
        (
            (
                (
                    + (custo)
                    + ((VendaPorcentagemLiquida * custo) / 100)
                )
                + (TaxaAmericanas)
                + (FreteAmericanas_DE40A89 * constNivelAmericanas)
            ) * 100)
        /
        (
            -(
                (
                    (constCnpj + ComissaoAmericanas)
                    * 100)
                - 100
            )
        ) >= 90) {

        calcAmericanasPorcentagemLiquida =
            (
                (
                    (
                        + (custo)
                        + ((VendaPorcentagemLiquida * custo) / 100)
                    )
                    + (TaxaAmericanas)
                    + (constFreteAmericanas * constNivelAmericanas)
                ) * 100)
            /
            (
                -(
                    (
                        (constCnpj + ComissaoAmericanas)
                        * 100)
                    - 100
                )
            );
    }

    // --------------------------------
    // CASAS BAHIA
    // --------------------------------

    // CasasBahia Manual - calcCasasBahiaManual
    var calcCasasBahiaManual = VendaManual
        - (
            + (custo)
            + (VendaManual * constCnpj)
            + (VendaManual * ComissaoCasasBahia)
            + (
                (
                    VendaManual <= 69.89 ? FreteCasasBahia_ATE69 :
                        VendaManual >= 69.90 ? constFreteCasasBahia : 0
                ) * constNivelCasasBahia
            )
            + (TaxaCasasBahia)
        );

    // Casas Bahia Valor Líquido - calcCasasBahiaValorLiquido
    // Abaixo de 69,90
    if (
        (
            (
                (VendaValorLiquido + custo + TaxaCasasBahia)
                + (FreteCasasBahia_ATE69 * constNivelCasasBahia)
            ) * 100)
        /
        (
            -(
                (
                    (constCnpj + ComissaoCasasBahia)
                    * 100)
                - 100
            )
        ) <= 69.89) {

        calcCasasBahiaValorLiquido =
            (
                (
                    (VendaValorLiquido + custo + TaxaCasasBahia)
                    + (FreteCasasBahia_ATE69 * constNivelCasasBahia)
                ) * 100)
            /
            (
                -(
                    (
                        (constCnpj + ComissaoCasasBahia)
                        * 100)
                    - 100
                )
            );
    }

    // Casas Bahia Valor Líquido - calcCasasBahiaValorLiquido
    // Acima de 69,90
    else if (
        (
            (
                (VendaValorLiquido + custo + TaxaCasasBahia)
                + (FreteCasasBahia_ATE69 * constNivelCasasBahia)
            ) * 100)
        /
        (
            -(
                (
                    (constCnpj + ComissaoCasasBahia)
                    * 100)
                - 100
            )
        ) >= 69.90) {

        calcCasasBahiaValorLiquido =
            (
                (
                    (VendaValorLiquido + custo + TaxaCasasBahia)
                    + (constFreteCasasBahia * constNivelCasasBahia)
                ) * 100)
            /
            (
                -(
                    (
                        (constCnpj + ComissaoCasasBahia)
                        * 100)
                    - 100
                )
            );
    }

    // Casas Bahia Porcentagem Líquida - calcCasasBahiaPorcentagemLiquida
    // Abaixo de 69,90
    if (
        (
            (
                (
                    + (custo)
                    + ((VendaPorcentagemLiquida * custo) / 100)
                )
                + (TaxaCasasBahia)
                + (FreteCasasBahia_ATE69 * constNivelCasasBahia)
            ) * 100)
        /
        (
            -(
                (
                    (constCnpj + ComissaoCasasBahia)
                    * 100)
                - 100
            )
        ) <= 69.89) {

        calcCasasBahiaPorcentagemLiquida =
            (
                (
                    (
                        + (custo)
                        + ((VendaPorcentagemLiquida * custo) / 100)
                    )
                    + (TaxaCasasBahia)
                    + (FreteCasasBahia_ATE69 * constNivelCasasBahia)
                ) * 100)
            /
            (
                -(
                    (
                        (constCnpj + ComissaoCasasBahia)
                        * 100)
                    - 100
                )
            );
    }
    // Casas Bahia Porcentagem Líquida - calcCasasBahiaPorcentagemLiquida
    // Acima de 69,90
    else if (
        (
            (
                (
                    + (custo)
                    + ((VendaPorcentagemLiquida * custo) / 100)
                )
                + (TaxaCasasBahia)
                + (FreteCasasBahia_ATE69 * constNivelCasasBahia)
            ) * 100)
        /
        (
            -(
                (
                    (constCnpj + ComissaoCasasBahia)
                    * 100)
                - 100
            )
        ) >= 69.90) {

        calcCasasBahiaPorcentagemLiquida =
            (
                (
                    (
                        + (custo)
                        + ((VendaPorcentagemLiquida * custo) / 100)
                    )
                    + (TaxaCasasBahia)
                    + (constFreteCasasBahia * constNivelCasasBahia)
                ) * 100)
            /
            (
                -(
                    (
                        (constCnpj + ComissaoCasasBahia)
                        * 100)
                    - 100
                )
            );
    }

    // --------------------------------
    // MAGALU
    // --------------------------------

    // Magalu Manual - calcMagaluManual
    var calcMagaluManual = VendaManual
        - (
            + (custo)
            + (VendaManual * constCnpj)
            + (VendaManual * ComissaoMagalu)
            + (
                (
                    VendaManual <= 78.99 ? FreteMagalu_ATE79 :
                        VendaManual >= 79 ? constFreteMagalu : 0
                ) * constNivelMagalu
            )
            + (
                VendaManual <= 9.99 ? TaxaMagalu_ATE10 :
                    VendaManual >= 10 ? TaxaMagalu_ACIMA10 : 0
            )
        );

    // Magalu Valor Líquido - calcMagaluValorLiquido
    // Abaixo de 10
    if (
        (
            (
                (VendaValorLiquido + custo + TaxaMagalu_ATE10)
                + (FreteMagalu_ATE79 * constNivelMagalu)
            ) * 100)
        /
        (
            -(
                (
                    (constCnpj + ComissaoMagalu)
                    * 100)
                - 100
            )
        ) <= 9.99) {

        calcMagaluValorLiquido =
            (
                (
                    (VendaValorLiquido + custo + TaxaMagalu_ATE10)
                    + (FreteMagalu_ATE79 * constNivelMagalu)
                ) * 100)
            /
            (
                -(
                    (
                        (constCnpj + ComissaoMagalu)
                        * 100)
                    - 100
                )
            );
    }

    // Magalu Valor Líquido - calcMagaluValorLiquido
    // Entre 10 e 78,99
    else if (
        (
            (
                (VendaValorLiquido + custo + TaxaMagalu_ATE10)
                + (FreteMagalu_ATE79 * constNivelMagalu)
            ) * 100)
        /
        (
            -(
                (
                    (constCnpj + ComissaoMagalu)
                    * 100)
                - 100
            )
        ) >= 10
        &&
        (
            (
                (VendaValorLiquido + custo + TaxaMagalu_ACIMA10)
                + (FreteMagalu_ATE79 * constNivelMagalu)
            ) * 100)
        /
        (
            -(
                (
                    (constCnpj + ComissaoMagalu)
                    * 100)
                - 100
            )
        ) <= 78.98) {

        calcMagaluValorLiquido =
            (
                (
                    (VendaValorLiquido + custo + TaxaMagalu_ACIMA10)
                    + (FreteMagalu_ATE79 * constNivelMagalu)
                ) * 100)
            /
            (
                -(
                    (
                        (constCnpj + ComissaoMagalu)
                        * 100)
                    - 100
                )
            );
    }

    // Magalu Valor Líquido - calcMagaluValorLiquido
    // Acima de 79
    if (
        (
            (
                (VendaValorLiquido + custo + TaxaMagalu_ACIMA10)
                + (FreteMagalu_ATE79 * constNivelMagalu)
            ) * 100)
        /
        (
            -(
                (
                    (constCnpj + ComissaoMagalu)
                    * 100)
                - 100
            )
        ) >= 78.99) {

        calcMagaluValorLiquido =
            (
                (
                    (VendaValorLiquido + custo + TaxaMagalu_ACIMA10)
                    + (constFreteMagalu * constNivelMagalu)
                ) * 100)
            /
            (
                -(
                    (
                        (constCnpj + ComissaoMagalu)
                        * 100)
                    - 100
                )
            );
    }

    // Magalu Porcentagem Líquida - calcMagaluPorcentagemLiquida
    // Abaixo de 10
    if (
        (
            (
                (
                    + (custo)
                    + ((VendaPorcentagemLiquida * custo) / 100)
                )
                + (TaxaMagalu_ATE10)
                + (FreteMagalu_ATE79 * constNivelMagalu)
            ) * 100)
        /
        (
            -(
                (
                    (constCnpj + ComissaoMagalu)
                    * 100)
                - 100
            )
        ) <= 9.99) {

        calcMagaluPorcentagemLiquida =
            (
                (
                    (
                        + (custo)
                        + ((VendaPorcentagemLiquida * custo) / 100)
                    )
                    + (TaxaMagalu_ATE10)
                    + (FreteMagalu_ATE79 * constNivelMagalu)
                ) * 100)
            /
            (
                -(
                    (
                        (constCnpj + ComissaoMagalu)
                        * 100)
                    - 100
                )
            );
    }

    // Magalu Porcentagem Líquida - calcMagaluPorcentagemLiquida
    // Entre 10 e 78,99
    else if (
        (
            (
                (
                    + (custo)
                    + ((VendaPorcentagemLiquida * custo) / 100)
                )
                + (TaxaMagalu_ATE10)
                + (FreteMagalu_ATE79 * constNivelMagalu)
            ) * 100)
        /
        (
            -(
                (
                    (constCnpj + ComissaoMagalu)
                    * 100)
                - 100
            )
        ) >= 10
        &&
        (
            (
                (
                    + (custo)
                    + ((VendaPorcentagemLiquida * custo) / 100)
                )
                + (TaxaMagalu_ACIMA10)
                + (FreteMagalu_ATE79 * constNivelMagalu)
            ) * 100)
        /
        (
            -(
                (
                    (constCnpj + ComissaoMagalu)
                    * 100)
                - 100
            )
        ) <= 78.99) {

        calcMagaluPorcentagemLiquida =
            (
                (
                    (
                        + (custo)
                        + ((VendaPorcentagemLiquida * custo) / 100)
                    )
                    + (TaxaMagalu_ACIMA10)
                    + (FreteMagalu_ATE79 * constNivelMagalu)
                ) * 100)
            /
            (
                -(
                    (
                        (constCnpj + ComissaoMagalu)
                        * 100)
                    - 100
                )
            );
    }

    // Magalu Porcentagem Líquida - calcMagaluPorcentagemLiquida
    // Acima de 79
    else if (
        (
            (
                (
                    + (custo)
                    + ((VendaPorcentagemLiquida * custo) / 100)
                )
                + (TaxaMagalu_ACIMA10)
                + (FreteMagalu_ATE79 * constNivelMagalu)
            ) * 100)
        /
        (
            -(
                (
                    (constCnpj + ComissaoMagalu)
                    * 100)
                - 100
            )
        ) >= 79) {

        calcMagaluPorcentagemLiquida =
            (
                (
                    (
                        + (custo)
                        + ((VendaPorcentagemLiquida * custo) / 100)
                    )
                    + (TaxaMagalu_ACIMA10)
                    + (constFreteMagalu * constNivelMagalu)
                ) * 100)
            /
            (
                -(
                    (
                        (constCnpj + ComissaoMagalu)
                        * 100)
                    - 100
                )
            );
    }

    // --------------------------------
    // MERCADO LIVRE
    // --------------------------------

    // Mercado Livre Clássico Manual - calcMercadoLivreClassicoManual
    var calcMercadoLivreClassicoManual = VendaManual
        - (
            + (custo)
            + (VendaManual * constCnpj)
            + (VendaManual * ComissaoMercadoLivreClassico)
            + (
                (
                    VendaManual <= 78.99 ? FreteMercadoLivre_ATE79 :
                        VendaManual >= 79 ? constFreteMercadoLivre : 0
                ) * constNivelMercadoLivre
            )
            + (
                VendaManual <= 78.99 ? TaxaMercadoLivre_ATE79 :
                    VendaManual >= 79 ? TaxaMercadoLivre_ACIMA79 : 0
            )
        );

    // Mercado Livre Clássico Valor Líquido - calcMercadoLivreClassicoValorLiquido
    // Até 78,99
    if (
        (
            (
                (VendaValorLiquido + custo + TaxaMercadoLivre_ATE79)
                + (FreteMercadoLivre_ATE79 * constNivelMercadoLivre)
            ) * 100)
        /
        (
            -(
                (
                    (constCnpj + ComissaoMercadoLivreClassico)
                    * 100)
                - 100
            )
        ) <= 78.99) {

        calcMercadoLivreClassicoValorLiquido =
            (
                (
                    (VendaValorLiquido + custo + TaxaMercadoLivre_ATE79)
                    + (FreteMercadoLivre_ATE79 * constNivelMercadoLivre)
                ) * 100)
            /
            (
                -(
                    (
                        (constCnpj + ComissaoMercadoLivreClassico)
                        * 100)
                    - 100
                )
            );
    }

    // Mercado Livre Clássico Valor Líquido - calcMercadoLivreClassicoValorLiquido
    // Acima de 79
    else if (
        (
            (
                (VendaValorLiquido + custo + TaxaMercadoLivre_ATE79)
                + (FreteMercadoLivre_ATE79 * constNivelMercadoLivre)
            ) * 100)
        /
        (
            -(
                (
                    (constCnpj + ComissaoMercadoLivreClassico)
                    * 100)
                - 100
            )
        ) >= 79) {

        calcMercadoLivreClassicoValorLiquido =
            (
                (
                    (VendaValorLiquido + custo + TaxaMercadoLivre_ACIMA79)
                    + (constFreteMercadoLivre * constNivelMercadoLivre)
                ) * 100)
            /
            (
                -(
                    (
                        (constCnpj + ComissaoMercadoLivreClassico)
                        * 100)
                    - 100
                )
            );
    }

    // Mercado Livre Clássico Porcentagem Líquida - calcMercadoLivreClassicoPorcentagemLiquida
    // Até 78,99
    if (
        (
            (
                (
                    + (custo)
                    + ((VendaPorcentagemLiquida * custo) / 100)
                )
                + (TaxaMercadoLivre_ATE79)
                + (FreteMercadoLivre_ATE79 * constNivelMercadoLivre)
            ) * 100)
        /
        (
            -(
                (
                    (constCnpj + ComissaoMercadoLivreClassico)
                    * 100)
                - 100
            )
        ) <= 78.99) {

        calcMercadoLivreClassicoPorcentagemLiquida =
            (
                (
                    (
                        + (custo)
                        + ((VendaPorcentagemLiquida * custo) / 100)
                    )
                    + (TaxaMercadoLivre_ATE79)
                    + (FreteMercadoLivre_ATE79 * constNivelMercadoLivre)
                ) * 100)
            /
            (
                -(
                    (
                        (constCnpj + ComissaoMercadoLivreClassico)
                        * 100)
                    - 100
                )
            );
    }

    // Mercado Livre Clássico Porcentagem Líquida - calcMercadoLivreClassicoPorcentagemLiquida
    // Acima de 79
    else if (
        (
            (
                (
                    + (custo)
                    + ((VendaPorcentagemLiquida * custo) / 100)
                )
                + (TaxaMercadoLivre_ATE79)
                + (FreteMercadoLivre_ATE79 * constNivelMercadoLivre)
            ) * 100)
        /
        (
            -(
                (
                    (constCnpj + ComissaoMercadoLivreClassico)
                    * 100)
                - 100
            )
        ) >= 79) {

        calcMercadoLivreClassicoPorcentagemLiquida =
            (
                (
                    (
                        + (custo)
                        + ((VendaPorcentagemLiquida * custo) / 100)
                    )
                    + (TaxaMercadoLivre_ACIMA79)
                    + (constFreteMercadoLivre * constNivelMercadoLivre)
                ) * 100)
            /
            (
                -(
                    (
                        (constCnpj + ComissaoMercadoLivreClassico)
                        * 100)
                    - 100
                )
            );
    }

    // Mercado Livre Premium Manual - calcMercadoLivrePremiumManual
    var calcMercadoLivrePremiumManual = VendaManual
        - (
            + (custo)
            + (VendaManual * constCnpj)
            + (VendaManual * ComissaoMercadoLivrePremium)
            + (
                VendaManual <= 78.99 ? TaxaMercadoLivre_ATE79 :
                    VendaManual >= 79 ? TaxaMercadoLivre_ACIMA79 : 0)
            + (
                (
                    VendaManual <= 78.99 ? FreteMercadoLivre_ATE79 :
                        VendaManual >= 79 ? constFreteMercadoLivre : 0
                ) * constNivelMercadoLivre
            )
        );

    // Mercado Livre Premium Valor Líquido - calcMercadoLivrePremiumValorLiquido
    // Até 78,99
    if (
        (
            (
                (VendaValorLiquido + custo + TaxaMercadoLivre_ATE79)
                + (FreteMercadoLivre_ATE79 * constNivelMercadoLivre)
            ) * 100)
        /
        (
            -(
                (
                    (constCnpj + ComissaoMercadoLivrePremium)
                    * 100)
                - 100
            )
        ) <= 78.99) {

        calcMercadoLivrePremiumValorLiquido =
            (
                (
                    (VendaValorLiquido + custo + TaxaMercadoLivre_ATE79)
                    + (FreteMercadoLivre_ATE79 * constNivelMercadoLivre)
                ) * 100)
            /
            (
                -(
                    (
                        (constCnpj + ComissaoMercadoLivrePremium)
                        * 100)
                    - 100
                )
            );
    }

    // Mercado Livre Premium Valor Líquido - calcMercadoLivrePremiumValorLiquido
    // Acima de 79
    else if (
        (
            (
                (VendaValorLiquido + custo + TaxaMercadoLivre_ATE79)
                + (FreteMercadoLivre_ATE79 * constNivelMercadoLivre)
            ) * 100)
        /
        (
            -(
                (
                    (constCnpj + ComissaoMercadoLivrePremium)
                    * 100)
                - 100
            )
        ) >= 79) {

        calcMercadoLivrePremiumValorLiquido =
            (
                (
                    (VendaValorLiquido + custo + TaxaMercadoLivre_ACIMA79)
                    + (constFreteMercadoLivre * constNivelMercadoLivre)
                ) * 100)
            /
            (
                -(
                    (
                        (constCnpj + ComissaoMercadoLivrePremium)
                        * 100)
                    - 100
                )
            );
    }

    // Mercado Livre Premium Porcentagem Líquida - calcMercadoLivrePremiumPorcentagemLiquida
    // Até 78,99
    if (
        (
            (
                (
                    + (custo)
                    + ((VendaPorcentagemLiquida * custo) / 100)
                )
                + (TaxaMercadoLivre_ATE79)
                + (FreteMercadoLivre_ATE79 * constNivelMercadoLivre)
            ) * 100)
        /
        (
            -(
                (
                    (constCnpj + ComissaoMercadoLivrePremium)
                    * 100)
                - 100
            )
        ) <= 78.99) {

        calcMercadoLivrePremiumPorcentagemLiquida =
            (
                (
                    (
                        + (custo)
                        + ((VendaPorcentagemLiquida * custo) / 100)
                    )
                    + (TaxaMercadoLivre_ATE79)
                    + (FreteMercadoLivre_ATE79 * constNivelMercadoLivre)
                ) * 100)
            /
            (
                -(
                    (
                        (constCnpj + ComissaoMercadoLivrePremium)
                        * 100)
                    - 100
                )
            );
    }

    // Mercado Livre Premium Porcentagem Líquida - calcMercadoLivrePremiumPorcentagemLiquida
    // Acima de 79
    else if (
        (
            (
                (
                    + (custo)
                    + ((VendaPorcentagemLiquida * custo) / 100)
                )
                + (TaxaMercadoLivre_ATE79)
                + (FreteMercadoLivre_ATE79 * constNivelMercadoLivre)
            ) * 100)
        /
        (
            -(
                (
                    (constCnpj + ComissaoMercadoLivrePremium)
                    * 100)
                - 100
            )
        ) >= 79) {

        calcMercadoLivrePremiumPorcentagemLiquida =
            (
                (
                    (
                        + (custo)
                        + ((VendaPorcentagemLiquida * custo) / 100)
                    )
                    + (TaxaMercadoLivre_ACIMA79)
                    + (constFreteMercadoLivre * constNivelMercadoLivre)
                ) * 100)
            /
            (
                -(
                    (
                        (constCnpj + ComissaoMercadoLivrePremium)
                        * 100)
                    - 100
                )
            );
    }

    // --------------------------------
    // RD
    // --------------------------------


    // --------------------------------
    // OLIST
    // --------------------------------

    // Olist Manual - calcOlistManual
    var calcOlistManual = VendaManual
        - (
            + (custo)
            + (VendaManual * constCnpj)
            + (VendaManual * ComissaoOlist)
            + (
                VendaManual <= 78.99 ? TaxaOlist_ATE79 :
                    VendaManual >= 79 ? TaxaOlist_ACIMA79 : 0
            )
            + (
                (
                    VendaManual <= 78.99 ? FreteOlist_ATE79 :
                        VendaManual >= 79 ? constFreteOlist : 0
                ) * constNivelOlist
            )
        );

    // Olist Valor Líquido - calcOlistValorLiquido
    // Abaixo de 78,99
    if (
        (
            (
                (VendaValorLiquido + custo + TaxaOlist_ATE79)
                + (FreteOlist_ATE79 * constNivelOlist)
            ) * 100)
        /
        (
            -(
                (
                    (constCnpj + ComissaoOlist)
                    * 100)
                - 100
            )
        ) <= 78.99) {

        calcOlistValorLiquido =
            (
                (
                    (VendaValorLiquido + custo + TaxaOlist_ATE79)
                    + (FreteOlist_ATE79 * constNivelOlist)
                ) * 100)
            /
            (
                -(
                    (
                        (constCnpj + ComissaoOlist)
                        * 100)
                    - 100
                )
            );
    }

    // Olist Valor Líquido - calcOlistValorLiquido
    // Acima de 79

    else if (
        (
            (
                (VendaValorLiquido + custo + TaxaOlist_ATE79)
                + (FreteOlist_ATE79 * constNivelOlist)
            ) * 100)
        /
        (
            -(
                (
                    (constCnpj + ComissaoOlist)
                    * 100)
                - 100
            )
        ) >= 79) {

        calcOlistValorLiquido =
            (
                (
                    (VendaValorLiquido + custo + TaxaOlist_ACIMA79)
                    + (constFreteOlist * constNivelOlist)
                ) * 100)
            /
            (
                -(
                    (
                        (constCnpj + ComissaoOlist)
                        * 100)
                    - 100
                )
            );
    }

    // Olist Porcentagem Líquida - calcOlistPorcentagemLiquida
    // Abaixo de 78,99
    if (
        (
            (
                (
                    + (custo)
                    + ((VendaPorcentagemLiquida * custo) / 100)
                )
                + (TaxaOlist_ATE79)
                + (FreteOlist_ATE79 * constNivelOlist)
            ) * 100)
        /
        (
            -(
                (
                    (constCnpj + ComissaoOlist)
                    * 100)
                - 100
            )
        ) <= 78.99) {

        calcOlistPorcentagemLiquida =
            (
                (
                    (
                        + (custo)
                        + ((VendaPorcentagemLiquida * custo) / 100)
                    )
                    + (TaxaOlist_ATE79)
                    + (FreteOlist_ATE79 * constNivelOlist)
                ) * 100)
            /
            (
                -(
                    (
                        (constCnpj + ComissaoOlist)
                        * 100)
                    - 100
                )
            );
    }

    // Olist Porcentagem Líquida - calcOlistPorcentagemLiquida
    // Acima de 79

    else if (
        (
            (
                (
                    + (custo)
                    + ((VendaPorcentagemLiquida * custo) / 100)
                )
                + (TaxaOlist_ATE79)
                + (FreteOlist_ATE79 * constNivelOlist)
            ) * 100)
        /
        (
            -(
                (
                    (constCnpj + ComissaoOlist)
                    * 100)
                - 100
            )
        ) >= 79) {

        calcOlistPorcentagemLiquida =
            (
                (
                    (
                        + (custo)
                        + ((VendaPorcentagemLiquida * custo) / 100)
                    )
                    + (TaxaOlist_ACIMA79)
                    + (constFreteOlist * constNivelOlist)
                ) * 100)
            /
            (
                -(
                    (
                        (constCnpj + ComissaoOlist)
                        * 100)
                    - 100
                )
            );
    }

    // --------------------------------
    // SHOPEE
    // --------------------------------

    // Shopee Manual - calcShopeeManual
    var calcShopeeManual = VendaManual
        - (
            + (custo)
            + (VendaManual * constCnpj)
            + (
                VendaManual >= 500 ? 100 :
                    VendaManual <= 499.99 ? VendaManual * ComissaoShopee : 0)
            + (TaxaShopee)
            + (
                (FreteShopee) * constNivelShopee
            )
        );

    // Shopee Valor Líquido - calcShopeeValorLiquido
    // Comissão até 100 + 3
    if (
        (
            (
                + (VendaValorLiquido + custo + TaxaShopee)
                + (FreteShopee * constNivelShopee)
            ) * 100)
        /
        (
            -(
                (
                    (constCnpj + ComissaoShopee)
                    * 100)
                - 100
            )
        ) <= 499.99) {

        calcShopeeValorLiquido =
            (
                (
                    + (VendaValorLiquido + custo + TaxaShopee)
                    + (FreteShopee * constNivelShopee)
                ) * 100)
            /
            (
                -(
                    (
                        (constCnpj + ComissaoShopee)
                        * 100)
                    - 100
                )
            );
    }

    // Shopee Valor Líquido - calcShopeeValorLiquido
    // Comissão acima de 100 + 3
    else if (
        (
            (
                + (VendaValorLiquido + custo + TaxaShopee)
                + (FreteShopee * constNivelShopee)
            ) * 100)
        /
        (
            -(
                (
                    (constCnpj + ComissaoShopee)
                    * 100)
                - 100
            )
        ) >= 500) {

        calcShopeeValorLiquido =
            (
                (
                    + (VendaValorLiquido + custo + TaxaShopee + 100)
                    + (FreteShopee * constNivelShopee)
                ) * 100)
            /
            (
                -(
                    (constCnpj * 100)
                    - 100
                )
            );
    }

    // Shopee Porcentagem Líquida - calcShopeePorcentagemLiquida
    // Comissão até 100 + 3
    if (
        (
            (
                (
                    + (custo)
                    + ((custo * VendaPorcentagemLiquida) / 100))
                + (TaxaShopee)
                + (constFreteShopee * constNivelShopee)
            ) * 100)
        /
        (
            -(
                (
                    (constCnpj + ComissaoShopee)
                    * 100)
                - 100
            )
        ) <= 499.99) {

        calcShopeePorcentagemLiquida =
            (
                (
                    (
                        + (custo)
                        + ((custo * VendaPorcentagemLiquida) / 100))
                    + (TaxaShopee)
                    + (constFreteShopee * constNivelShopee)
                ) * 100)
            /
            (
                -(
                    (
                        (constCnpj + ComissaoShopee)
                        * 100)
                    - 100
                )
            )
    }

    // Shopee Porcentagem Líquida - calcShopeePorcentagemLiquida
    // Comissão acima de 100 + 3
    else if (
        (
            (
                (
                    + (custo)
                    + ((custo * VendaPorcentagemLiquida) / 100))
                + (TaxaShopee)
                + (constFreteShopee * constNivelShopee)
            ) * 100)
        /
        (
            -(
                (
                    (constCnpj + ComissaoShopee)
                    * 100)
                - 100
            )
        ) >= 500) {

        calcShopeePorcentagemLiquida =
            (
                (
                    (
                        + (custo)
                        + ((custo * VendaPorcentagemLiquida) / 100))
                    + (TaxaShopee + 100)
                    + (constFreteShopee * constNivelShopee)
                ) * 100)
            /
            (
                -(
                    (constCnpj * 100)
                    - 100
                )
            )
    }

    // --------------------------------
    // WEB CONTINENTAL
    // --------------------------------

    // Web Continental Manual - calcWebContinentalManual
    var calcWebContinentalManual = VendaManual
        - (
            + (custo)
            + (VendaManual * constCnpj)
            + (VendaManual * ComissaoWebContinental)
            + (TaxaWebContinental)
            + (
                (FreteWebContinental) * constNivelWebContinental
            )
        );

    // --------------------------------
    // SITE UOOL
    // --------------------------------

    // Site Uool Manual - calcSiteUoolManual
    var calcSiteUoolManual = VendaManual
    - (
        + (custo)
        + (VendaManual * constCnpj)
        + (VendaManual * ComissaoSiteUool1x)
        + (FreteSiteUool * constNivelSiteUool)
        + (TaxaSiteUool)
    );

    var calcSiteUoolManual12x12 = VendaManual + (VendaManual * ComissaoSiteUool12x);
    var calcSiteUoolManual12x1 = calcSiteUoolManual12x12 / 12;

    // Site Uool Valor Líquido - calcSiteUoolValorLiquido
    var calcSiteUoolValorLiquido = (
        (
            + (VendaValorLiquido)
            + (custo)
            + (TaxaSiteUool)
            + (constFreteSiteUool * constNivelSiteUool)
        ) * 100)
    /
    (
        -(
            (
                (constCnpj + ComissaoSiteUool1x)
                * 100)
            - 100
        )
    );

    var calcSiteUoolValorLiquido12x12 = calcSiteUoolValorLiquido + (calcSiteUoolValorLiquido * ComissaoSiteUool12x);
    var calcSiteUoolValorLiquido12x1 = calcSiteUoolValorLiquido12x12 / 12;

    // Site Uool Porcentagem Líquida- calcSiteUoolPorcentagemLiquida
    var calcSiteUoolPorcentagemLiquida = (
        (
            (
                + (custo)
                + ((VendaPorcentagemLiquida * custo) / 100)
            )
            + (TaxaSiteUool)
            + (constFreteSiteUool * constNivelSiteUool)
        ) * 100)
    /
    (
        -(
            (
                (constCnpj + ComissaoSiteUool1x)
                * 100)
            - 100
        )
    );

    var calcSiteUoolPorcentagemLiquida12x12 = calcSiteUoolPorcentagemLiquida + (calcSiteUoolPorcentagemLiquida * ComissaoSiteUool12x);
    var calcSiteUoolPorcentagemLiquida12x1 = calcSiteUoolPorcentagemLiquida12x12 / 12;

    // --------------------------------
    // SITE ATACADO
    // --------------------------------

    // Site Atacado Manual - calcSiteUoolManual
    var calcSiteAtacadoManual = VendaManual
        - (
            + (custo)
            + (VendaManual * constCnpj)
            + (VendaManual * ComissaoSiteAtacado1x)
            + (FreteSiteAtacado)
            + (TaxaSiteAtacado)
        );

    var calcSiteAtacadoManual12x12 = VendaManual + (VendaManual * ComissaoSiteAtacado12x);
    var calcSiteAtacadoManual12x1 = calcSiteAtacadoManual12x12 / 12;

    // Site Atacado Valor Líquido - calcSiteAtacadoValorLiquido
    var calcSiteAtacadoValorLiquido = (
        (
            + (VendaValorLiquido)
            + (custo)
            + (TaxaSiteAtacado)
            + (constFreteSiteAtacado * constNivelSiteAtacado)
        ) * 100)
    /
    (
        -(
            (
                (constCnpj + ComissaoSiteAtacado1x)
                * 100)
            - 100
        )
    );

    var calcSiteAtacadoValorLiquido12x12 = calcSiteAtacadoValorLiquido + (calcSiteAtacadoValorLiquido * ComissaoSiteAtacado12x);
    var calcSiteAtacadoValorLiquido12x1 = calcSiteAtacadoValorLiquido12x12 / 12;

    // Site Atacado Porcentagem Líquida- calcSiteAtacadoPorcentagemLiquida
    var calcSiteAtacadoPorcentagemLiquida = (
        (
            (
                + (custo)
                + ((VendaPorcentagemLiquida * custo) / 100)
            )
            + (TaxaSiteAtacado)
            + (constFreteSiteAtacado * constNivelSiteAtacado)
        ) * 100)
    /
    (
        -(
            (
                (constCnpj + ComissaoSiteAtacado1x)
                * 100)
            - 100
        )
    );

    var calcSiteAtacadoPorcentagemLiquida12x12 = calcSiteAtacadoPorcentagemLiquida + (calcSiteAtacadoPorcentagemLiquida * ComissaoSiteAtacado12x);
    var calcSiteAtacadoPorcentagemLiquida12x1 = calcSiteAtacadoPorcentagemLiquida12x12 / 12;



    // --------------------------------

    // Valores que serão exibidos na tabela de resultados

    // Americanas
    document.getElementById("resultado-Americanas-VendaManual").textContent = "R$ " + calcAmericanasManual.toFixed(2).replace(".", ",") + " (" + ((calcAmericanasManual / custo) * 100).toFixed(2) + "%)";
    document.getElementById("resultado-Americanas-VendaValorLiquido").textContent = "R$ " + calcAmericanasValorLiquido.toFixed(2).replace(".", ",") + " (" + ((VendaValorLiquido / custo) * 100).toFixed(2) + "%)";
    document.getElementById("resultado-Americanas-VendaPorcentagemLiquida").textContent = "R$ " + calcAmericanasPorcentagemLiquida.toFixed(2).replace(".", ",") + " (" + "R$ " + ((custo * VendaPorcentagemLiquida) / 100).toFixed(2).replace(".", ",") + ")";

    // Casas Bahia
    document.getElementById("resultado-CasasBahia-VendaManual").textContent = "R$ " + calcCasasBahiaManual.toFixed(2).replace(".", ",") + " (" + ((calcCasasBahiaManual / custo) * 100).toFixed(2) + "%)";
    document.getElementById("resultado-CasasBahia-VendaValorLiquido").textContent = "R$ " + calcCasasBahiaValorLiquido.toFixed(2).replace(".", ",") + " (" + ((VendaValorLiquido / custo) * 100).toFixed(2) + "%)";
    document.getElementById("resultado-CasasBahia-VendaPorcentagemLiquida").textContent = "R$ " + calcCasasBahiaPorcentagemLiquida.toFixed(2).replace(".", ",") + " (" + "R$ " + ((custo * VendaPorcentagemLiquida) / 100).toFixed(2).replace(".", ",") + ")";

    // Magalu
    document.getElementById("resultado-Magalu-VendaManual").textContent = "R$ " + calcMagaluManual.toFixed(2).replace(".", ",") + " (" + ((calcMagaluManual / custo) * 100).toFixed(2) + "%)";
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
    document.getElementById("resultado-Olist-VendaManual").textContent = "R$ " + calcOlistManual.toFixed(2).replace(".", ",") + " (" + ((calcOlistManual / custo) * 100).toFixed(2) + "%)";
    document.getElementById("resultado-Olist-VendaValorLiquido").textContent = "R$ " + calcOlistValorLiquido.toFixed(2).replace(".", ",") + " (" + ((VendaValorLiquido / custo) * 100).toFixed(2) + "%)";
    document.getElementById("resultado-Olist-VendaPorcentagemLiquida").textContent = "R$ " + calcOlistPorcentagemLiquida.toFixed(2).replace(".", ",") + " (" + "R$ " + ((custo * VendaPorcentagemLiquida) / 100).toFixed(2).replace(".", ",") + ")";

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
    document.getElementById("resultado-SiteUool-VendaValorLiquido").textContent = "1x R$ " + calcSiteUoolValorLiquido.toFixed(2).replace(".", ",") + " (" + ((VendaValorLiquido / custo) * 100).toFixed(2) + "%)";
    document.getElementById("resultado-SiteUool-VendaPorcentagemLiquida").textContent = "1x R$ " + calcSiteUoolPorcentagemLiquida.toFixed(2).replace(".", ",") + " (" + "R$ " + ((custo * VendaPorcentagemLiquida) / 100).toFixed(2).replace(".", ",") + ")";
    document.getElementById("resultado-SiteUool-VendaManual-12x").textContent = "12x de R$ " + calcSiteUoolManual12x1.toFixed(2).replace(".", ",") + " (" + (calcSiteUoolManual12x12).toFixed(2).replace(".", ",") + ")";
    document.getElementById("resultado-SiteUool-VendaValorLiquido-12x").textContent = "12x de R$ " + calcSiteUoolValorLiquido12x1.toFixed(2).replace(".", ",") + " (" + (calcSiteUoolValorLiquido12x12).toFixed(2).replace(".", ",") + ")";
    document.getElementById("resultado-SiteUool-VendaPorcentagemLiquida-12x").textContent = "12x de R$ " + calcSiteUoolPorcentagemLiquida12x1.toFixed(2).replace(".", ",") + " (" + (calcSiteUoolPorcentagemLiquida12x12).toFixed(2).replace(".", ",") + ")";

    // Site Atacado
    document.getElementById("resultado-SiteAtacado-VendaManual").textContent = "R$ " + calcSiteAtacadoManual.toFixed(2).replace(".", ",") + " (" + ((calcSiteAtacadoManual / custo) * 100).toFixed(2) + "%)";
    document.getElementById("resultado-SiteAtacado-VendaValorLiquido").textContent = "1x R$ " + calcSiteAtacadoValorLiquido.toFixed(2).replace(".", ",") + " (" + ((VendaValorLiquido / custo) * 100).toFixed(2) + "%)";
    document.getElementById("resultado-SiteAtacado-VendaPorcentagemLiquida").textContent = "1x R$ " + calcSiteAtacadoPorcentagemLiquida.toFixed(2).replace(".", ",") + " (" + "R$ " + ((custo * VendaPorcentagemLiquida) / 100).toFixed(2).replace(".", ",") + ")";
    document.getElementById("resultado-SiteAtacado-VendaManual-12x").textContent = "12x de R$ " + calcSiteAtacadoManual12x1.toFixed(2).replace(".", ",") + " (" + (calcSiteAtacadoManual12x12).toFixed(2).replace(".", ",") + ")";
    document.getElementById("resultado-SiteAtacado-VendaValorLiquido-12x").textContent = "12x de R$ " + calcSiteAtacadoValorLiquido12x1.toFixed(2).replace(".", ",") + " (" + (calcSiteAtacadoValorLiquido12x12).toFixed(2).replace(".", ",") + ")";
    document.getElementById("resultado-SiteAtacado-VendaPorcentagemLiquida-12x").textContent = "12x de R$ " + calcSiteAtacadoPorcentagemLiquida12x1.toFixed(2).replace(".", ",") + " (" + (calcSiteAtacadoPorcentagemLiquida12x12).toFixed(2).replace(".", ",") + ")";
}