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
    } else if (cnpj === "FERREIRA PROSPERITA COSMETICOS LTDA") {
        constCnpj = cnpjFERREIRA;
    } else if (cnpj === "RAV SHEFA DISTRIBUIDORA DE COSMETICOS LTDA") {
        constCnpj = cnpjRAV;
    } else if (cnpj === "VIVIANE CHRISTINA FERREIRA") {
        constCnpj = cnpjVIVI;
    } else if (cnpj === "Selecione") {
        constCnpj = x;
    }

    // Valores constantes de peso e frete para acima de R$ 79 definidos no calc_variables.js
    if (peso === "Selecione") {
        constFretePresencial = x;
        constFreteAmericanas = x;
        constFreteCasasBahia = x;
        constFreteMagalu = x;
        constFreteMercadoLivre = x;
        constFreteOlist = x;
        constFreteRD = x;
        constFreteShein = x;
        constFreteShopee = x;
        constFreteWebContinental = x;
        constFreteSiteUool = x;
        constFreteSiteAtacado = x;
    } else if (peso === "até 0.3kg") {
        constFretePresencial = FretePresencial;
        constFreteAmericanas = FreteAmericanas_ACIMA90_ate300G;
        constFreteCasasBahia = FreteCasasBahia_ACIMA79_ate300G;
        constFreteMagalu = FreteMagalu_ACIMA79_ate300G;
        constFreteMercadoLivre = FreteMercadoLivre_ACIMA79_ate300G;
        constFreteOlist = FreteOlist_ACIMA79_ate300G;
        constFreteRD = FreteRD;
        constFreteShein = FreteShein_ACIMA49_ate300G;
        constFreteShopee = FreteShopee;
        constFreteWebContinental = FreteWebContinental;
        constFreteSiteUool = FreteSiteUool;
        constFreteSiteAtacado = FreteSiteAtacado;
    } else if (peso === "0.3 a 0.5kg") {
        constFretePresencial = FretePresencial;
        constFreteAmericanas = FreteAmericanas_ACIMA90_300a500G;
        constFreteCasasBahia = FreteCasasBahia_ACIMA79_300a500G;
        constFreteMagalu = FreteMagalu_ACIMA79_300a500G;
        constFreteMercadoLivre = FreteMercadoLivre_ACIMA79_300a500G;
        constFreteOlist = FreteOlist_ACIMA79_300a500G;
        constFreteRD = FreteRD;
        constFreteShein = FreteShein_ACIMA49_300a500G;
        constFreteShopee = FreteShopee;
        constFreteWebContinental = FreteWebContinental;
        constFreteSiteUool = FreteSiteUool;
        constFreteSiteAtacado = FreteSiteAtacado;
    } else if (peso === "0.5 a 1kg") {
        constFretePresencial = FretePresencial;
        constFreteAmericanas = FreteAmericanas_ACIMA90_500Ga1KG;
        constFreteCasasBahia = FreteCasasBahia_ACIMA79_500Ga1KG;
        constFreteMagalu = FreteMagalu_ACIMA79_500Ga1KG;
        constFreteMercadoLivre = FreteMercadoLivre_ACIMA79_500Ga1KG;
        constFreteOlist = FreteOlist_ACIMA79_500Ga1KG;
        constFreteRD = FreteRD;
        constFreteShein = FreteShein_ACIMA49_500Ga1KG;
        constFreteShopee = FreteShopee;
        constFreteWebContinental = FreteWebContinental;
        constFreteSiteUool = FreteSiteUool;
        constFreteSiteAtacado = FreteSiteAtacado;
    } else if (peso === "1 a 2kg") {
        constFretePresencial = FretePresencial;
        constFreteAmericanas = FreteAmericanas_ACIMA90_1a2KG;
        constFreteCasasBahia = FreteCasasBahia_ACIMA79_1a2KG;
        constFreteMagalu = FreteMagalu_ACIMA79_1a2KG;
        constFreteMercadoLivre = FreteMercadoLivre_ACIMA79_1a2KG;
        constFreteOlist = FreteOlist_ACIMA79_1a2KG;
        constFreteRD = FreteRD;
        constFreteShein = FreteShein_ACIMA49_1a2KG;
        constFreteShopee = FreteShopee;
        constFreteWebContinental = FreteWebContinental;
        constFreteSiteUool = FreteSiteUool;
        constFreteSiteAtacado = FreteSiteAtacado;
    } else if (peso === "2 a 5kg") {
        constFretePresencial = FretePresencial;
        constFreteAmericanas = FreteAmericanas_ACIMA90_2a5KG;
        constFreteCasasBahia = FreteCasasBahia_ACIMA79_2a5KG;
        constFreteMagalu = FreteMagalu_ACIMA79_2a5KG;
        constFreteMercadoLivre = FreteMercadoLivre_ACIMA79_2a5KG;
        constFreteOlist = FreteOlist_ACIMA79_2a5KG;
        constFreteRD = FreteRD;
        constFreteShein = FreteShein_ACIMA49_2a5KG;
        constFreteShopee = FreteShopee;
        constFreteWebContinental = FreteWebContinental;
        constFreteSiteUool = FreteSiteUool;
        constFreteSiteAtacado = FreteSiteAtacado;
    } else if (peso === "5 a 9kg") {
        constFretePresencial = FretePresencial;
        constFreteAmericanas = FreteAmericanas_ACIMA90_5a9KG;
        constFreteCasasBahia = FreteCasasBahia_ACIMA79_5a9KG;
        constFreteMagalu = FreteMagalu_ACIMA79_5a9KG;
        constFreteMercadoLivre = FreteMercadoLivre_ACIMA79_5a9KG;
        constFreteOlist = FreteOlist_ACIMA79_5a9KG;
        constFreteRD = FreteRD;
        constFreteShein = FreteShein_ACIMA49_5a9KG;
        constFreteShopee = FreteShopee;
        constFreteWebContinental = FreteWebContinental;
        constFreteSiteUool = FreteSiteUool;
        constFreteSiteAtacado = FreteSiteAtacado;
    } else if (peso === "9 a 13kg") {
        constFretePresencial = FretePresencial;
        constFreteAmericanas = FreteAmericanas_ACIMA90_9a13KG;
        constFreteCasasBahia = FreteCasasBahia_ACIMA79_9a13KG;
        constFreteMagalu = FreteMagalu_ACIMA79_9a13KG;
        constFreteMercadoLivre = FreteMercadoLivre_ACIMA79_9a13KG;
        constFreteOlist = FreteOlist_ACIMA79_9a13KG;
        constFreteRD = FreteRD;
        constFreteShein = FreteShein_ACIMA49_9a13KG;
        constFreteShopee = FreteShopee;
        constFreteWebContinental = FreteWebContinental;
        constFreteSiteUool = FreteSiteUool;
        constFreteSiteAtacado = FreteSiteAtacado;
    } else if (peso === "13 a 17kg") {
        constFretePresencial = FretePresencial;
        constFreteAmericanas = FreteAmericanas_ACIMA90_13a17KG;
        constFreteCasasBahia = FreteCasasBahia_ACIMA79_13a17KG;
        constFreteMagalu = FreteMagalu_ACIMA79_13a17KG;
        constFreteMercadoLivre = FreteMercadoLivre_ACIMA79_13a17KG;
        constFreteOlist = FreteOlist_ACIMA79_13a17KG;
        constFreteRD = FreteRD;
        constFreteShein = FreteShein_ACIMA49_13a17KG;
        constFreteShopee = FreteShopee;
        constFreteWebContinental = FreteWebContinental;
        constFreteSiteUool = FreteSiteUool;
        constFreteSiteAtacado = FreteSiteAtacado;
    } else if (peso === "17 a 23kg") {
        constFretePresencial = FretePresencial;
        constFreteAmericanas = FreteAmericanas_ACIMA90_17a23KG;
        constFreteCasasBahia = FreteCasasBahia_ACIMA79_17a23KG;
        constFreteMagalu = FreteMagalu_ACIMA79_17a23KG;
        constFreteMercadoLivre = FreteMercadoLivre_ACIMA79_17a23KG;
        constFreteOlist = FreteOlist_ACIMA79_17a23KG;
        constFreteRD = FreteRD;
        constFreteShein = FreteShein_ACIMA49_17a23KG;
        constFreteShopee = FreteShopee;
        constFreteWebContinental = FreteWebContinental;
        constFreteSiteUool = FreteSiteUool;
        constFreteSiteAtacado = FreteSiteAtacado;
    } else if (peso === "23 a 30kg") {
        constFretePresencial = FretePresencial;
        constFreteAmericanas = FreteAmericanas_ACIMA90_23a30KG;
        constFreteCasasBahia = FreteCasasBahia_ACIMA79_23a30KG;
        constFreteMagalu = FreteMagalu_ACIMA79_23a30KG;
        constFreteMercadoLivre = FreteMercadoLivre_ACIMA79_23a30KG;
        constFreteOlist = FreteOlist_ACIMA79_23a30KG;
        constFreteRD = FreteRD;
        constFreteShein = FreteShein_ACIMA49_23a30KG;
        constFreteShopee = FreteShopee;
        constFreteWebContinental = FreteWebContinental;
        constFreteSiteUool = FreteSiteUool;
        constFreteSiteAtacado = FreteSiteAtacado;
    }

    // Valores constantes de desconto no frete baseado no nível definidos no calc_variables.js
    if (nivel === "5") {
        constNivelPresencial = NivelPresencial;
        constNivelAmericanas = NivelAmericanas5;
        constNivelCasasBahia = NivelCasasBahia5;
        constNivelMagalu = NivelMagalu5;
        constNivelMercadoLivre = NivelMercadoLivre5;
        constNivelOlist = NivelOlist5;
        constNivelRD = NivelRD;
        constNivelShein = NivelShein;
        constNivelShopee = NivelShopee;
        constNivelWebContinental = NivelWebContinental;
        constNivelSiteUool = NivelSiteUool;
        constNivelSiteAtacado = NivelSiteAtacado;
    } else if (nivel === "4") {
        constNivelPresencial = NivelPresencial;
        constNivelAmericanas = NivelAmericanas4;
        constNivelCasasBahia = NivelCasasBahia4;
        constNivelMagalu = NivelMagalu4;
        constNivelMercadoLivre = NivelMercadoLivre4;
        constNivelOlist = NivelOlist4;
        constNivelRD = NivelRD;
        constNivelShein = NivelShein;
        constNivelShopee = NivelShopee;
        constNivelWebContinental = NivelWebContinental;
        constNivelSiteUool = NivelSiteUool;
        constNivelSiteAtacado = NivelSiteAtacado;
    } else if (nivel === "3") {
        constNivelPresencial = NivelPresencial;
        constNivelAmericanas = NivelAmericanas3;
        constNivelCasasBahia = NivelCasasBahia3;
        constNivelMagalu = NivelMagalu3;
        constNivelMercadoLivre = NivelMercadoLivre3;
        constNivelOlist = NivelOlist3;
        constNivelRD = NivelRD;
        constNivelShein = NivelShein;
        constNivelShopee = NivelShopee;
        constNivelWebContinental = NivelWebContinental;
        constNivelSiteUool = NivelSiteUool;
        constNivelSiteAtacado = NivelSiteAtacado;
    } else if (nivel === "2") {
        constNivelPresencial = NivelPresencial;
        constNivelAmericanas = NivelAmericanas2;
        constNivelCasasBahia = NivelCasasBahia2;
        constNivelMagalu = NivelMagalu2;
        constNivelMercadoLivre = NivelMercadoLivre2;
        constNivelOlist = NivelOlist2;
        constNivelRD = NivelRD;
        constNivelShein = NivelShein;
        constNivelShopee = NivelShopee;
        constNivelWebContinental = NivelWebContinental;
        constNivelSiteUool = NivelSiteUool;
        constNivelSiteAtacado = NivelSiteAtacado;
    } else if (nivel === "1") {
        constNivelPresencial = NivelPresencial;
        constNivelAmericanas = NivelAmericanas1;
        constNivelCasasBahia = NivelCasasBahia1;
        constNivelMagalu = NivelMagalu1;
        constNivelMercadoLivre = NivelMercadoLivre1;
        constNivelOlist = NivelOlist1;
        constNivelRD = NivelRD;
        constNivelShein = NivelShein;
        constNivelShopee = NivelShopee;
        constNivelWebContinental = NivelWebContinental;
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
    // PRESENCIAL
    // --------------------------------

    // Presencial Manual - calcPresencialManual
    if (cnpj === "RAV SHEFA DISTRIBUIDORA DE COSMETICOS LTDA") {
        var calcPresencialManual = VendaManual
            - (
                + (custo)
                + (VendaManual * constCnpj)
                + (VendaManual * MaquininhaRAV)
                + (VendaManual * PresuncaoRAV)
            );
    }
    else {
        var calcPresencialManual = VendaManual
            - (
                + (custo)
                + (VendaManual * (constCnpj + ComissaoPresencial))
            );
    }
    // Presencial Valor Líquido - calcPresencialValorLiquido
    if (cnpj === "RAV SHEFA DISTRIBUIDORA DE COSMETICOS LTDA") {
        var calcPresencialValorLiquido =
            ((VendaValorLiquido + custo) * 100)
            /
            (- (((constCnpj + MaquininhaRAV + PresuncaoRAV) * 100) - 100));
    }
    else {
        var calcPresencialValorLiquido =
            ((VendaValorLiquido + custo) * 100)
            /
            (- (((constCnpj + ComissaoPresencial) * 100) - 100));
    }
    // Presencial Porcentagem Líquida - calcPresencialPorcentagemLiquida
    if (cnpj === "RAV SHEFA DISTRIBUIDORA DE COSMETICOS LTDA") {
        var calcPresencialPorcentagemLiquida =
            (
                (((custo) + ((VendaPorcentagemLiquida * custo) / 100))) * 100)
            /
            (- (((constCnpj + MaquininhaRAV + PresuncaoRAV) * 100) - 100));
    }
    else {
        var calcPresencialPorcentagemLiquida =
            (
                (((custo) + ((VendaPorcentagemLiquida * custo) / 100))) * 100)
            /
            (- (((constCnpj + ComissaoPresencial) * 100) - 100));
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
                VendaManual <= 28.99 ? TaxaMercadoLivre_ATE29 :
                    VendaManual >= 29 && VendaManual <= 49.99 ? TaxaMercadoLivre_ATE50 :
                        VendaManual >= 50 && VendaManual <= 78.99 ? TaxaMercadoLivre_ATE79 :
                            VendaManual >= 79 ? TaxaMercadoLivre_ACIMA79 : 0
            )
        );

    // Mercado Livre Clássico Valor Líquido - calcMercadoLivreClassicoValorLiquido
    // Até 28,99
    if (
        (
            (
                (VendaValorLiquido + custo + TaxaMercadoLivre_ATE29)
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
        ) <= 28.99) {

        calcMercadoLivreClassicoValorLiquido =
            (
                (
                    (VendaValorLiquido + custo + TaxaMercadoLivre_ATE29)
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

    // Entre 29 e 49,99
    else if (
        (
            (
                (VendaValorLiquido + custo + TaxaMercadoLivre_ATE29)
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
        ) >= 29
        &&
        (
            (
                (VendaValorLiquido + custo + TaxaMercadoLivre_ATE50)
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
        ) >= 29
        &&
        (
            (
                (VendaValorLiquido + custo + TaxaMercadoLivre_ATE50)
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
        ) <= 49.99) {

        calcMercadoLivreClassicoValorLiquido =
            (
                (
                    (VendaValorLiquido + custo + TaxaMercadoLivre_ATE50)
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

    // Entre 50 e 78,99
    else if (
        (
            (
                (VendaValorLiquido + custo + TaxaMercadoLivre_ATE50)
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
        ) >= 50
        &&
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
        ) >= 50
        &&
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
    // Até 28,99
    if (
        (
            (
                (
                    + (custo)
                    + ((VendaPorcentagemLiquida * custo) / 100)
                )
                + (TaxaMercadoLivre_ATE29)
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
        ) <= 28.99) {

        calcMercadoLivreClassicoPorcentagemLiquida =
            (
                (
                    (
                        + (custo)
                        + ((VendaPorcentagemLiquida * custo) / 100)
                    )
                    + (TaxaMercadoLivre_ATE29)
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

    // Entre 29 e 49,99
    else if (
        (
            (
                (
                    + (custo)
                    + ((VendaPorcentagemLiquida * custo) / 100)
                )
                + (TaxaMercadoLivre_ATE29)
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
        ) >= 29
        &&
        (
            (
                (
                    + (custo)
                    + ((VendaPorcentagemLiquida * custo) / 100)
                )
                + (TaxaMercadoLivre_ATE50)
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
        ) >= 29
        &&
        (
            (
                (
                    + (custo)
                    + ((VendaPorcentagemLiquida * custo) / 100)
                )
                + (TaxaMercadoLivre_ATE50)
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
        ) <= 49.99) {

        calcMercadoLivreClassicoPorcentagemLiquida =
            (
                (
                    (
                        + (custo)
                        + ((VendaPorcentagemLiquida * custo) / 100)
                    )
                    + (TaxaMercadoLivre_ATE50)
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

    // Entre 50 e 78,99
    else if (
        (
            (
                (
                    + (custo)
                    + ((VendaPorcentagemLiquida * custo) / 100)
                )
                + (TaxaMercadoLivre_ATE50)
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
        ) >= 50
        &&
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
        ) >= 50
        &&
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
                (
                    VendaManual <= 78.99 ? FreteMercadoLivre_ATE79 :
                        VendaManual >= 79 ? constFreteMercadoLivre : 0
                ) * constNivelMercadoLivre
            )
            + (
                VendaManual <= 28.99 ? TaxaMercadoLivre_ATE29 :
                    VendaManual >= 29 && VendaManual <= 49.99 ? TaxaMercadoLivre_ATE50 :
                        VendaManual >= 50 && VendaManual <= 78.99 ? TaxaMercadoLivre_ATE79 :
                            VendaManual >= 79 ? TaxaMercadoLivre_ACIMA79 : 0
            )
        );

    // Mercado Livre Premium Valor Líquido - calcMercadoLivrePremiumValorLiquido
    // Até 28,99
    if (
        (
            (
                (VendaValorLiquido + custo + TaxaMercadoLivre_ATE29)
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
        ) <= 28.99) {

        calcMercadoLivrePremiumValorLiquido =
            (
                (
                    (VendaValorLiquido + custo + TaxaMercadoLivre_ATE29)
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

    // Entre 29 e 49,99
    else if (
        (
            (
                (VendaValorLiquido + custo + TaxaMercadoLivre_ATE29)
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
        ) >= 29
        &&
        (
            (
                (VendaValorLiquido + custo + TaxaMercadoLivre_ATE50)
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
        ) >= 29
        &&
        (
            (
                (VendaValorLiquido + custo + TaxaMercadoLivre_ATE50)
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
        ) <= 49.99) {

        calcMercadoLivrePremiumValorLiquido =
            (
                (
                    (VendaValorLiquido + custo + TaxaMercadoLivre_ATE50)
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

    // Entre 50 e 78,99
    else if (
        (
            (
                (VendaValorLiquido + custo + TaxaMercadoLivre_ATE50)
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
        ) >= 50
        &&
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
        ) >= 50
        &&
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
    // Até 28,99
    if (
        (
            (
                (
                    + (custo)
                    + ((VendaPorcentagemLiquida * custo) / 100)
                )
                + (TaxaMercadoLivre_ATE29)
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
        ) <= 28.99) {

        calcMercadoLivrePremiumPorcentagemLiquida =
            (
                (
                    (
                        + (custo)
                        + ((VendaPorcentagemLiquida * custo) / 100)
                    )
                    + (TaxaMercadoLivre_ATE29)
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

    // Entre 29 e 49,99
    else if (
        (
            (
                (
                    + (custo)
                    + ((VendaPorcentagemLiquida * custo) / 100)
                )
                + (TaxaMercadoLivre_ATE29)
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
        ) >= 29
        &&
        (
            (
                (
                    + (custo)
                    + ((VendaPorcentagemLiquida * custo) / 100)
                )
                + (TaxaMercadoLivre_ATE50)
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
        ) >= 29
        &&
        (
            (
                (
                    + (custo)
                    + ((VendaPorcentagemLiquida * custo) / 100)
                )
                + (TaxaMercadoLivre_ATE50)
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
        ) <= 49.99) {

        calcMercadoLivrePremiumPorcentagemLiquida =
            (
                (
                    (
                        + (custo)
                        + ((VendaPorcentagemLiquida * custo) / 100)
                    )
                    + (TaxaMercadoLivre_ATE50)
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

    // Entre 50 e 78,99
    else if (
        (
            (
                (
                    + (custo)
                    + ((VendaPorcentagemLiquida * custo) / 100)
                )
                + (TaxaMercadoLivre_ATE50)
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
        ) >= 50
        &&
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
        ) >= 50
        &&
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
    // SHEIN
    // --------------------------------

    // Shein Manual - calcSheinManual
    var calcSheinManual = VendaManual
        - (
            + (custo)
            + (VendaManual * constCnpj)
            + (VendaManual * ComissaoShein)
            + (
                VendaManual <= 49.89 ? TaxaShein :
                    VendaManual >= 49.9 ? TaxaShein : 0
            )
            + (
                (
                    VendaManual <= 49.89 ? FreteShein_ATE49 :
                        VendaManual >= 49.9 ? constFreteShein : 0
                ) * constNivelShein
            )
        );

    // Shein Valor Líquido - calcSheinValorLiquido
    // Abaixo de 49,89
    if (
        (
            (
                (VendaValorLiquido + custo + TaxaShein)
                + (FreteShein_ATE49 * constNivelShein)
            ) * 100)
        /
        (
            -(
                (
                    (constCnpj + ComissaoShein)
                    * 100)
                - 100
            )
        ) <= 49.89) {

        calcSheinValorLiquido =
            (
                (
                    (VendaValorLiquido + custo + TaxaShein)
                    + (FreteShein_ATE49 * constNivelShein)
                ) * 100)
            /
            (
                -(
                    (
                        (constCnpj + ComissaoShein)
                        * 100)
                    - 100
                )
            );
    }

    // Shein Valor Líquido - calcSheinValorLiquido
    // Acima de 49,90

    else if (
        (
            (
                (VendaValorLiquido + custo + TaxaShein)
                + (FreteShein_ATE49 * constNivelShein)
            ) * 100)
        /
        (
            -(
                (
                    (constCnpj + ComissaoShein)
                    * 100)
                - 100
            )
        ) >= 49.9) {

        calcSheinValorLiquido =
            (
                (
                    (VendaValorLiquido + custo + TaxaShein)
                    + (constFreteShein * constNivelShein)
                ) * 100)
            /
            (
                -(
                    (
                        (constCnpj + ComissaoShein)
                        * 100)
                    - 100
                )
            );
    }

    // Shein Porcentagem Líquida - calcSheinPorcentagemLiquida
    // Abaixo de 49,89
    if (
        (
            (
                (
                    + (custo)
                    + ((VendaPorcentagemLiquida * custo) / 100)
                )
                + (TaxaShein)
                + (FreteShein_ATE49 * constNivelShein)
            ) * 100)
        /
        (
            -(
                (
                    (constCnpj + ComissaoShein)
                    * 100)
                - 100
            )
        ) <= 49.89) {

        calcSheinPorcentagemLiquida =
            (
                (
                    (
                        + (custo)
                        + ((VendaPorcentagemLiquida * custo) / 100)
                    )
                    + (TaxaShein)
                    + (FreteShein_ATE49 * constNivelShein)
                ) * 100)
            /
            (
                -(
                    (
                        (constCnpj + ComissaoShein)
                        * 100)
                    - 100
                )
            );
    }

    // Shein Porcentagem Líquida - calcSheinPorcentagemLiquida
    // Acima de 49,90

    else if (
        (
            (
                (
                    + (custo)
                    + ((VendaPorcentagemLiquida * custo) / 100)
                )
                + (TaxaShein)
                + (FreteShein_ATE49 * constNivelShein)
            ) * 100)
        /
        (
            -(
                (
                    (constCnpj + ComissaoShein)
                    * 100)
                - 100
            )
        ) >= 49.9) {

        calcSheinPorcentagemLiquida =
            (
                (
                    (
                        + (custo)
                        + ((VendaPorcentagemLiquida * custo) / 100)
                    )
                    + (TaxaShein)
                    + (constFreteShein * constNivelShein)
                ) * 100)
            /
            (
                -(
                    (
                        (constCnpj + ComissaoShein)
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
                VendaManual >= 500 ? 110 :
                    VendaManual <= 499.99 ? VendaManual * ComissaoShopee : 0)
            + (
                VendaManual <= 7.99 ? VendaManual / 2 :
                    VendaManual >= 8 ? TaxaShopee_ACIMA8 : 0)
            + (
                (FreteShopee) * constNivelShopee
            )
        );

    // Shopee Valor Líquido - calcShopeeValorLiquido
    // Comissão até 110 + 4
    if (
        (
            (
                + (VendaValorLiquido + custo + TaxaShopee_ACIMA8)
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
                    + (VendaValorLiquido + custo + TaxaShopee_ACIMA8)
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
    // Comissão acima de 110 + 4
    else if (
        (
            (
                + (VendaValorLiquido + custo + TaxaShopee_ACIMA8)
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
                    + (VendaValorLiquido + custo + TaxaShopee_ACIMA8 + 110)
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
    // Comissão até 110 + 4
    if (
        (
            (
                (
                    + (custo)
                    + ((custo * VendaPorcentagemLiquida) / 100))
                + (TaxaShopee_ACIMA8)
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
                    + (TaxaShopee_ACIMA8)
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
    // Comissão acima de 100 + 4
    else if (
        (
            (
                (
                    + (custo)
                    + ((custo * VendaPorcentagemLiquida) / 100))
                + (TaxaShopee_ACIMA8)
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
                    + (TaxaShopee_ACIMA8 + 110)
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

    // Valores que serão exibidos na tabela de resultados

    // Presencial
    document.getElementById("resultado-Presencial-VendaManual").textContent = "R$ " + calcPresencialManual.toFixed(2).replace(".", ",") + " (" + ((calcPresencialManual / custo) * 100).toFixed(2).replace(".", ",") + "%)";
    document.getElementById("resultado-Presencial-VendaValorLiquido").textContent = "R$ " + calcPresencialValorLiquido.toFixed(2).replace(".", ",") + " (" + ((VendaValorLiquido / custo) * 100).toFixed(2).replace(".", ",") + "%)";
    document.getElementById("resultado-Presencial-VendaPorcentagemLiquida").textContent = "R$ " + calcPresencialPorcentagemLiquida.toFixed(2).replace(".", ",") + " (" + "R$ " + ((custo * VendaPorcentagemLiquida) / 100).toFixed(2).replace(".", ",") + ")";

    if (cnpj === "RAV SHEFA DISTRIBUIDORA DE COSMETICOS LTDA") {
        document.getElementById("resultado-CasasBahia-VendaManual").textContent = "";
        document.getElementById("resultado-CasasBahia-VendaValorLiquido").textContent = "";
        document.getElementById("resultado-CasasBahia-VendaPorcentagemLiquida").textContent = "";
        document.getElementById("resultado-Magalu-VendaManual").textContent = "";
        document.getElementById("resultado-Magalu-VendaValorLiquido").textContent = "";
        document.getElementById("resultado-Magalu-VendaPorcentagemLiquida").textContent = "";
        document.getElementById("resultado-MercadoLivreClassico-VendaManual").textContent = "";
        document.getElementById("resultado-MercadoLivreClassico-VendaValorLiquido").textContent = "";
        document.getElementById("resultado-MercadoLivreClassico-VendaPorcentagemLiquida").textContent = "";
        document.getElementById("resultado-MercadoLivrePremium-VendaManual").textContent = "";
        document.getElementById("resultado-MercadoLivrePremium-VendaValorLiquido").textContent = "";
        document.getElementById("resultado-MercadoLivrePremium-VendaPorcentagemLiquida").textContent = "";
        document.getElementById("resultado-Shein-VendaManual").textContent = "";
        document.getElementById("resultado-Shein-VendaValorLiquido").textContent = "";
        document.getElementById("resultado-Shein-VendaPorcentagemLiquida").textContent = "";
        document.getElementById("resultado-Shopee-VendaManual").textContent = "";
        document.getElementById("resultado-Shopee-VendaValorLiquido").textContent = "";
        document.getElementById("resultado-Shopee-VendaPorcentagemLiquida").textContent = "";
    } else {

        // Casas Bahia
        document.getElementById("resultado-CasasBahia-VendaManual").textContent = "R$ " + calcCasasBahiaManual.toFixed(2).replace(".", ",") + " (" + ((calcCasasBahiaManual / custo) * 100).toFixed(2).replace(".", ",") + "%)";
        document.getElementById("resultado-CasasBahia-VendaValorLiquido").textContent = "R$ " + calcCasasBahiaValorLiquido.toFixed(2).replace(".", ",") + " (" + ((VendaValorLiquido / custo) * 100).toFixed(2).replace(".", ",") + "%)";
        document.getElementById("resultado-CasasBahia-VendaPorcentagemLiquida").textContent = "R$ " + calcCasasBahiaPorcentagemLiquida.toFixed(2).replace(".", ",") + " (" + "R$ " + ((custo * VendaPorcentagemLiquida) / 100).toFixed(2).replace(".", ",") + ")";

        // Magalu
        document.getElementById("resultado-Magalu-VendaManual").textContent = "R$ " + calcMagaluManual.toFixed(2).replace(".", ",") + " (" + ((calcMagaluManual / custo) * 100).toFixed(2).replace(".", ",") + "%)";
        document.getElementById("resultado-Magalu-VendaValorLiquido").textContent = "R$ " + calcMagaluValorLiquido.toFixed(2).replace(".", ",") + " (" + ((VendaValorLiquido / custo) * 100).toFixed(2).replace(".", ",") + "%)";
        document.getElementById("resultado-Magalu-VendaPorcentagemLiquida").textContent = "R$ " + calcMagaluPorcentagemLiquida.toFixed(2).replace(".", ",") + " (" + "R$ " + ((custo * VendaPorcentagemLiquida) / 100).toFixed(2).replace(".", ",") + ")";

        // Mercado Livre Clássico
        document.getElementById("resultado-MercadoLivreClassico-VendaManual").textContent = "R$ " + calcMercadoLivreClassicoManual.toFixed(2).replace(".", ",") + " (" + ((calcMercadoLivreClassicoManual / custo) * 100).toFixed(2).replace(".", ",") + "%)";
        document.getElementById("resultado-MercadoLivreClassico-VendaValorLiquido").textContent = "R$ " + calcMercadoLivreClassicoValorLiquido.toFixed(2).replace(".", ",") + " (" + ((VendaValorLiquido / custo) * 100).toFixed(2).replace(".", ",") + "%)";
        document.getElementById("resultado-MercadoLivreClassico-VendaPorcentagemLiquida").textContent = "R$ " + calcMercadoLivreClassicoPorcentagemLiquida.toFixed(2).replace(".", ",") + " (" + "R$ " + ((custo * VendaPorcentagemLiquida) / 100).toFixed(2).replace(".", ",") + ")";

        // Mercado Livre Premium
        document.getElementById("resultado-MercadoLivrePremium-VendaManual").textContent = "R$ " + calcMercadoLivrePremiumManual.toFixed(2).replace(".", ",") + " (" + ((calcMercadoLivrePremiumManual / custo) * 100).toFixed(2).replace(".", ",") + "%)";
        document.getElementById("resultado-MercadoLivrePremium-VendaValorLiquido").textContent = "R$ " + calcMercadoLivrePremiumValorLiquido.toFixed(2).replace(".", ",") + " (" + ((VendaValorLiquido / custo) * 100).toFixed(2).replace(".", ",") + "%)";
        document.getElementById("resultado-MercadoLivrePremium-VendaPorcentagemLiquida").textContent = "R$ " + calcMercadoLivrePremiumPorcentagemLiquida.toFixed(2).replace(".", ",") + " (" + "R$ " + ((custo * VendaPorcentagemLiquida) / 100).toFixed(2).replace(".", ",") + ")";

        // Shein
        document.getElementById("resultado-Shein-VendaManual").textContent = "R$ " + calcSheinManual.toFixed(2).replace(".", ",") + " (" + ((calcSheinManual / custo) * 100).toFixed(2).replace(".", ",") + "%)";
        document.getElementById("resultado-Shein-VendaValorLiquido").textContent = "R$ " + calcSheinValorLiquido.toFixed(2).replace(".", ",") + " (" + ((VendaValorLiquido / custo) * 100).toFixed(2).replace(".", ",") + "%)";
        document.getElementById("resultado-Shein-VendaPorcentagemLiquida").textContent = "R$ " + calcSheinPorcentagemLiquida.toFixed(2).replace(".", ",") + " (" + "R$ " + ((custo * VendaPorcentagemLiquida) / 100).toFixed(2).replace(".", ",") + ")";

        // Shopee
        // Valores de venda abaixo de R$ 8 não podem ser calculados pelas fórmulas ValorLiquido e PorcentagemLiquida
        document.getElementById("resultado-Shopee-VendaManual").textContent = "R$ " + calcShopeeManual.toFixed(2).replace(".", ",") + " (" + ((calcShopeeManual / custo) * 100).toFixed(2).replace(".", ",") + "%)";
        if (calcShopeeValorLiquido <= 7.99) {
            document.getElementById("resultado-Shopee-VendaValorLiquido").textContent = "Este valor é muito baixo para ser calculado nesta fórmula. Use a primeira coluna.";
        } else {
            document.getElementById("resultado-Shopee-VendaValorLiquido").textContent = "R$ " + calcShopeeValorLiquido.toFixed(2).replace(".", ",") + " (" + ((VendaValorLiquido / custo) * 100).toFixed(2).replace(".", ",") + "%)";
        }
        if (calcShopeePorcentagemLiquida <= 7.99) {
            document.getElementById("resultado-Shopee-VendaPorcentagemLiquida").textContent = "Este valor é muito baixo para ser calculado nesta fórmula. Use a primeira coluna";
        } else {
            document.getElementById("resultado-Shopee-VendaPorcentagemLiquida").textContent = "R$ " + calcShopeePorcentagemLiquida.toFixed(2).replace(".", ",") + " (" + "R$ " + ((custo * VendaPorcentagemLiquida) / 100).toFixed(2).replace(".", ",") + ")";
        }
    }
}