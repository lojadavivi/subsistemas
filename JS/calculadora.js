// Inicio da funcao
function calcular(inputElement) {

    // Obtem os valores de cada campo
    var cnpj = document.getElementById("cnpj").value;
    var nivel = document.getElementById("nivel").value;
    var peso = document.getElementById("peso").value;
    var custo = parseFloat(document.getElementById("custo").value.replace(",", "."));
    var Manual = parseFloat(document.getElementById("Manual").value.replace(",", "."));
    var ValorLiq = parseFloat(document.getElementById("ValorLiq").value.replace(",", "."));
    var PctLiq = parseFloat(document.getElementById("PctLiq").value.replace(",", "."));

    // Valores constantes de CNPJ definidos no calc_variables.js
    if (cnpj === "LOJA DA VIVI LTDA") {
        constCnpj = cnpj_LTDA;
    } else if (cnpj === "FERREIRA PROSPERITA COSMETICOS LTDA") {
        constCnpj = cnpj_FERREIRA;
    } else if (cnpj === "RAV SHEFA DISTRIBUIDORA DE COSMETICOS LTDA") {
        constCnpj = cnpj_RAV;
    } else if (cnpj === "VIVIANE CHRISTINA FERREIRA") {
        constCnpj = cnpj_VIVI;
    } else if (cnpj === "Selecione") {
        constCnpj = x;
    }

    // Valores constantes de peso e frete para acima de R$ 79 definidos no calc_variables.js
    if (peso === "Selecione") {
        constFrete_Presencial = x;
        constFrete_CasasBahia = x;
        constFrete_Magalu = x;
        constFrete_MercadoLivre = x;
        constFrete_RD = x;
        constFrete_Shein = x;
        constFrete_Shopee = x;
    } else if (peso === "até 0.3kg") {
        constFrete_Presencial = Frete_Presencial;
        constFrete_CasasBahia = Frete_CasasBahia_ACIMA79_ate300G;
        constFrete_Magalu = Frete_Magalu_ACIMA79_ate300G;
        constFrete_MercadoLivre = Frete_ML_ACIMA79_ate300G;
        constFrete_RD = Frete_RD;
        constFrete_Shein = Frete_Shein_ACIMA49_ate300G;
        constFrete_Shopee = Frete_Shopee;
    } else if (peso === "0.3 a 0.5kg") {
        constFrete_Presencial = Frete_Presencial;
        constFrete_CasasBahia = Frete_CasasBahia_ACIMA79_300a500G;
        constFrete_Magalu = Frete_Magalu_ACIMA79_300a500G;
        constFrete_MercadoLivre = Frete_ML_ACIMA79_300a500G;
        constFrete_RD = Frete_RD;
        constFrete_Shein = Frete_Shein_ACIMA49_300a500G;
        constFrete_Shopee = Frete_Shopee;
    } else if (peso === "0.5 a 1kg") {
        constFrete_Presencial = Frete_Presencial;
        constFrete_CasasBahia = Frete_CasasBahia_ACIMA79_500Ga1KG;
        constFrete_Magalu = Frete_Magalu_ACIMA79_500Ga1KG;
        constFrete_MercadoLivre = Frete_ML_ACIMA79_500Ga1KG;
        constFrete_RD = Frete_RD;
        constFrete_Shein = Frete_Shein_ACIMA49_500Ga1KG;
        constFrete_Shopee = Frete_Shopee;
    } else if (peso === "1 a 2kg") {
        constFrete_Presencial = Frete_Presencial;
        constFrete_CasasBahia = Frete_CasasBahia_ACIMA79_1a2KG;
        constFrete_Magalu = Frete_Magalu_ACIMA79_1a2KG;
        constFrete_MercadoLivre = Frete_ML_ACIMA79_1a2KG;
        constFrete_RD = Frete_RD;
        constFrete_Shein = Frete_Shein_ACIMA49_1a2KG;
        constFrete_Shopee = Frete_Shopee;
    } else if (peso === "2 a 5kg") {
        constFrete_Presencial = Frete_Presencial;
        constFrete_CasasBahia = Frete_CasasBahia_ACIMA79_2a5KG;
        constFrete_Magalu = Frete_Magalu_ACIMA79_2a5KG;
        constFrete_MercadoLivre = Frete_ML_ACIMA79_2a5KG;
        constFrete_RD = Frete_RD;
        constFrete_Shein = Frete_Shein_ACIMA49_2a5KG;
        constFrete_Shopee = Frete_Shopee;
    } else if (peso === "5 a 9kg") {
        constFrete_Presencial = Frete_Presencial;
        constFrete_CasasBahia = Frete_CasasBahia_ACIMA79_5a9KG;
        constFrete_Magalu = Frete_Magalu_ACIMA79_5a9KG;
        constFrete_MercadoLivre = Frete_ML_ACIMA79_5a9KG;
        constFrete_RD = Frete_RD;
        constFrete_Shein = Frete_Shein_ACIMA49_5a9KG;
        constFrete_Shopee = Frete_Shopee;
    } else if (peso === "9 a 13kg") {
        constFrete_Presencial = Frete_Presencial;
        constFrete_CasasBahia = Frete_CasasBahia_ACIMA79_9a13KG;
        constFrete_Magalu = Frete_Magalu_ACIMA79_9a13KG;
        constFrete_MercadoLivre = Frete_ML_ACIMA79_9a13KG;
        constFrete_RD = Frete_RD;
        constFrete_Shein = Frete_Shein_ACIMA49_9a13KG;
        constFrete_Shopee = Frete_Shopee;
    } else if (peso === "13 a 17kg") {
        constFrete_Presencial = Frete_Presencial;
        constFrete_CasasBahia = Frete_CasasBahia_ACIMA79_13a17KG;
        constFrete_Magalu = Frete_Magalu_ACIMA79_13a17KG;
        constFrete_MercadoLivre = Frete_ML_ACIMA79_13a17KG;
        constFrete_RD = Frete_RD;
        constFrete_Shein = Frete_Shein_ACIMA49_13a17KG;
        constFrete_Shopee = Frete_Shopee;;
    } else if (peso === "17 a 23kg") {
        constFrete_Presencial = Frete_Presencial;
        constFrete_CasasBahia = Frete_CasasBahia_ACIMA79_17a23KG;
        constFrete_Magalu = Frete_Magalu_ACIMA79_17a23KG;
        constFrete_MercadoLivre = Frete_ML_ACIMA79_17a23KG;
        constFrete_RD = Frete_RD;
        constFrete_Shein = Frete_Shein_ACIMA49_17a23KG;
        constFrete_Shopee = Frete_Shopee;
    } else if (peso === "23 a 30kg") {
        constFrete_Presencial = Frete_Presencial;
        constFrete_CasasBahia = Frete_CasasBahia_ACIMA79_23a30KG;
        constFrete_Magalu = Frete_Magalu_ACIMA79_23a30KG;
        constFrete_MercadoLivre = Frete_ML_ACIMA79_23a30KG;
        constFrete_RD = Frete_RD;
        constFrete_Shein = Frete_Shein_ACIMA49_23a30KG;
        constFrete_Shopee = Frete_Shopee;
    }

    // Valores constantes de desconto no frete baseado no nivel definidos no calc_variables.js
    if (nivel === "5") {
        constNivel_Presencial = Nivel_Presencial;
        constNivel_CasasBahia_ = Nivel_CasasBahia_5;
        constNivel_Magalu_ = Nivel_Magalu_5;
        constNivel_ML_ = Nivel_ML_5;
        constNivel_RD = Nivel_RD;
        constNivel_Shein = Nivel_Shein;
        constNivel_Shopee = Nivel_Shopee;
    } else if (nivel === "4") {
        constNivel_Presencial = Nivel_Presencial;
        constNivel_CasasBahia_ = Nivel_CasasBahia_4;
        constNivel_Magalu_ = Nivel_Magalu_4;
        constNivel_ML_ = Nivel_ML_4;
        constNivel_RD = Nivel_RD;
        constNivel_Shein = Nivel_Shein;
        constNivel_Shopee = Nivel_Shopee;
    } else if (nivel === "3") {
        constNivel_Presencial = Nivel_Presencial;
        constNivel_CasasBahia_ = Nivel_CasasBahia_3;
        constNivel_Magalu_ = Nivel_Magalu_3;
        constNivel_ML_ = Nivel_ML_3;
        constNivel_RD = Nivel_RD;
        constNivel_Shein = Nivel_Shein;
        constNivel_Shopee = Nivel_Shopee;
    } else if (nivel === "2") {
        constNivel_Presencial = Nivel_Presencial;
        constNivel_CasasBahia_ = Nivel_CasasBahia_2;
        constNivel_Magalu_ = Nivel_Magalu_2;
        constNivel_ML_ = Nivel_ML_2;
        constNivel_RD = Nivel_RD;
        constNivel_Shein = Nivel_Shein;
        constNivel_Shopee = Nivel_Shopee;
    } else if (nivel === "1") {
        constNivel_Presencial = Nivel_Presencial;
        constNivel_CasasBahia_ = Nivel_CasasBahia_1;
        constNivel_Magalu_ = Nivel_Magalu_1;
        constNivel_ML_ = Nivel_ML_1;
        constNivel_RD = Nivel_RD;
        constNivel_Shein = Nivel_Shein;
        constNivel_Shopee = Nivel_Shopee;
    }

    // --------------------------------
    // --------------------------------
    // FORMULAS DE CALCULO
    // --------------------------------
    // --------------------------------


    // --------------------------------
    // PRESENCIAL
    // --------------------------------

    // Presencial Manual - calcPresencialManual
    if (cnpj === "RAV SHEFA DISTRIBUIDORA DE COSMETICOS LTDA") {
        var calcPresencialManual = Manual
            - (custo
                + (Manual * constCnpj)
            );
    }
    else {
        var calcPresencialManual = Manual
            - (custo
                + (Manual * (constCnpj + Comissao_Presencial))
            );
    }
    // Presencial Valor Liquido - calcPresencialValorLiq
    if (cnpj === "RAV SHEFA DISTRIBUIDORA DE COSMETICOS LTDA") {
        var calcPresencialValorLiq =
            (ValorLiq + custo)
            /
            (1 - constCnpj);
    }
    else {
        var calcPresencialValorLiq =
            (ValorLiq + custo)
            /
            (1 - (constCnpj + Comissao_Presencial));
    }
    // Presencial Porcentagem Liquida - calcPresencialPctLiq
    if (cnpj === "RAV SHEFA DISTRIBUIDORA DE COSMETICOS LTDA") {
        var calcPresencialPctLiq =
            (custo * (1 + PctLiq / 100))
            /
            (1 - constCnpj);
    }
    else {
        var calcPresencialPctLiq =
            (custo * (1 + PctLiq / 100))
            /
            (1 - (constCnpj + Comissao_Presencial));
    }

    // --------------------------------
    // CASAS BAHIA
    // --------------------------------

    // CasasBahia Manual - calcCasasBahiaManual

    var calcCasasBahiaManual =
        Manual
        - (
            + custo
            + Taxa_CasasBahia
            + (Manual * (constCnpj + Comissao_CasasBahia))
            + ((Manual <= 69.89 ? Frete_CasasBahia_ATE69 :
                Manual >= 69.90 ? constFrete_CasasBahia : 0
            ) * constNivel_CasasBahia_)
        );

    // Casas Bahia Valor Liquido - calcCasasBahiaValorLiq
    // Abaixo de 69,90
    if (
        (ValorLiq
            + custo
            + Taxa_CasasBahia
            + Frete_CasasBahia_ATE69 * constNivel_CasasBahia_)
        /
        (1 - (constCnpj + Comissao_CasasBahia)) <= 69.89) {
        calcCasasBahiaValorLiq =
            (ValorLiq
                + custo
                + Taxa_CasasBahia
                + Frete_CasasBahia_ATE69 * constNivel_CasasBahia_)
            /
            (1 - (constCnpj + Comissao_CasasBahia));
    }

    // Casas Bahia Valor Liquido - calcCasasBahiaValorLiq
    // Acima de 69,90
    else if (
        (ValorLiq
            + custo
            + Taxa_CasasBahia
            + Frete_CasasBahia_ATE69 * constNivel_CasasBahia_)
        /
        (1 - (constCnpj + Comissao_CasasBahia)) >= 69.89) {
        calcCasasBahiaValorLiq =
            (ValorLiq
                + custo
                + Taxa_CasasBahia
                + constFrete_CasasBahia * constNivel_CasasBahia_)
            /
            (1 - (constCnpj + Comissao_CasasBahia));
    }

    // Casas Bahia Porcentagem Liquida - calcCasasBahiaPctLiq
    // Abaixo de 69,90
    if (
        (custo
            + (PctLiq * custo) / 100
            + Taxa_CasasBahia
            + Frete_CasasBahia_ATE69 * constNivel_CasasBahia_)
        /
        (1 - (constCnpj + Comissao_CasasBahia)) <= 69.89) {
        calcCasasBahiaPctLiq =
            (custo
                + (PctLiq * custo) / 100
                + Taxa_CasasBahia
                + Frete_CasasBahia_ATE69 * constNivel_CasasBahia_)
            /
            (1 - (constCnpj + Comissao_CasasBahia));
    }
    // Casas Bahia Porcentagem Liquida - calcCasasBahiaPctLiq
    // Acima de 69,90
    else if (
        (custo
            + (PctLiq * custo) / 100
            + Taxa_CasasBahia
            + Frete_CasasBahia_ATE69 * constNivel_CasasBahia_)
        /
        (1 - (constCnpj + Comissao_CasasBahia)) >= 69.89) {
        calcCasasBahiaPctLiq =
            (custo
                + (PctLiq * custo) / 100
                + Taxa_CasasBahia
                + constFrete_CasasBahia * constNivel_CasasBahia_)
            /
            (1 - (constCnpj + Comissao_CasasBahia));
    }

    // --------------------------------
    // MAGALU
    // --------------------------------

    // Magalu Manual - calcMagaluManual
    var calcMagaluManual = Manual
        - (
            + custo
            + (Manual * (constCnpj + Comissao_Magalu))
            + ((Manual <= 78.99 ? Frete_Magalu_ATE79 :
                Manual >= 79 ? constFrete_Magalu : 0
            ) * constNivel_Magalu_)
            + (Manual <= 9.99 ? Taxa_Magalu_ATE10 :
                Manual >= 10 ? Taxa_Magalu_ACIMA10 : 0)
        );

    // Magalu Valor Liquido - calcMagaluValorLiq
    // Abaixo de 10
    if (
        (ValorLiq
            + custo
            + Taxa_Magalu_ATE10
            + (Frete_Magalu_ATE79 * constNivel_Magalu_)
        )
        /
        (1 - (constCnpj + Comissao_Magalu)) <= 9.99) {
        calcMagaluValorLiq =
            (ValorLiq
                + custo
                + Taxa_Magalu_ATE10
                + (Frete_Magalu_ATE79 * constNivel_Magalu_)
            )
            /
            (1 - (constCnpj + Comissao_Magalu));
    }

    // Magalu Valor Liquido - calcMagaluValorLiq
    // Entre 10 e 78,99
    else if (
        (ValorLiq
            + custo
            + Taxa_Magalu_ATE10
            + (Frete_Magalu_ATE79 * constNivel_Magalu_)
        )
        /
        (1 - (constCnpj + Comissao_Magalu)) >= 10
        &&
        (ValorLiq
            + custo
            + Taxa_Magalu_ACIMA10
            + (Frete_Magalu_ATE79 * constNivel_Magalu_)
        )
        /
        (1 - (constCnpj + Comissao_Magalu)) <= 78.98) {
        calcMagaluValorLiq =
            (ValorLiq
                + custo
                + Taxa_Magalu_ACIMA10
                + (Frete_Magalu_ATE79 * constNivel_Magalu_)
            )
            /
            (1 - (constCnpj + Comissao_Magalu));
    }

    // Magalu Valor Liquido - calcMagaluValorLiq
    // Acima de 79
    if (
        (ValorLiq
            + custo
            + Taxa_Magalu_ACIMA10
            + (Frete_Magalu_ATE79 * constNivel_Magalu_)
        )
        /
        (1 - (constCnpj + Comissao_Magalu)) >= 78.99) {
        calcMagaluValorLiq =
            (ValorLiq
                + custo
                + Taxa_Magalu_ACIMA10
                + (constFrete_Magalu * constNivel_Magalu_)
            )
            /
            (1 - (constCnpj + Comissao_Magalu));
    }

    // Magalu Porcentagem Liquida - calcMagaluPctLiq
    // Abaixo de 10
    if (
        (custo
            + (PctLiq * custo) / 100
            + Taxa_Magalu_ATE10
            + Frete_Magalu_ATE79 * constNivel_Magalu_
        )
        /
        (1 - (constCnpj + Comissao_Magalu)) <= 9.99) {
        calcMagaluPctLiq =
            (custo
                + (PctLiq * custo) / 100
                + Taxa_Magalu_ATE10
                + Frete_Magalu_ATE79 * constNivel_Magalu_
            )
            /
            (1 - (constCnpj + Comissao_Magalu));
    }

    // Magalu Porcentagem Liquida - calcMagaluPctLiq
    // Entre 10 e 78,99
    else if (
        (custo
            + (PctLiq * custo) / 100
            + Taxa_Magalu_ATE10
            + Frete_Magalu_ATE79 * constNivel_Magalu_
        )
        /
        (1 - (constCnpj + Comissao_Magalu)) >= 10
        &&
        (custo
            + (PctLiq * custo) / 100
            + Taxa_Magalu_ACIMA10
            + Frete_Magalu_ATE79 * constNivel_Magalu_
        )
        /
        (1 - (constCnpj + Comissao_Magalu)) <= 78.99) {
        calcMagaluPctLiq =
            (custo
                + (PctLiq * custo) / 100
                + Taxa_Magalu_ACIMA10
                + Frete_Magalu_ATE79 * constNivel_Magalu_
            )
            /
            (1 - (constCnpj + Comissao_Magalu));
    }

    // Magalu Porcentagem Liquida - calcMagaluPctLiq
    // Acima de 79
    else if (
        (custo
            + (PctLiq * custo) / 100
            + Taxa_Magalu_ACIMA10
            + Frete_Magalu_ATE79 * constNivel_Magalu_
        )
        /
        (1 - (constCnpj + Comissao_Magalu)) >= 78.99) {
        calcMagaluPctLiq =
            (custo
                + (PctLiq * custo) / 100
                + Taxa_Magalu_ACIMA10
                + constFrete_Magalu * constNivel_Magalu_
            )
            /
            (1 - (constCnpj + Comissao_Magalu));
    }

    // --------------------------------
    // MERCADO LIVRE
    // --------------------------------

    // Mercado Livre Classico Manual - calcMercadoLivreClassicoManual
    var calcMercadoLivreClassicoManual = Manual
        - (
            custo
            + (Manual * (constCnpj + Comissao_MLC))
            + (
                (Manual <= 78.99
                    ? Frete_ML_ATE79
                    : constFrete_MercadoLivre)
                * constNivel_ML_
            )
            + (
                Manual <= 28.99
                    ? Taxa_ML_ATE29
                    : Manual <= 49.99
                        ? Taxa_ML_ATE50
                        : Manual <= 78.99
                            ? Taxa_ML_ATE79
                            : Taxa_ML_ACIMA79
            )
        );

    // Mercado Livre Classico Valor Liquido - calcMercadoLivreClassicoValorLiq
    // Ate 28,99
    if (
        (ValorLiq
            + custo
            + Taxa_ML_ATE29
            + Frete_ML_ATE79 * constNivel_ML_
        )
        /
        (1 - (constCnpj + Comissao_MLC)) <= 28.99) {
        calcMercadoLivreClassicoValorLiq =
            (ValorLiq
                + custo
                + Taxa_ML_ATE29
                + Frete_ML_ATE79 * constNivel_ML_
            )
            /
            (1 - (constCnpj + Comissao_MLC));
    }

    // Entre 29 e 49,99
    else if (
        (ValorLiq
            + custo
            + Taxa_ML_ATE29
            + Frete_ML_ATE79 * constNivel_ML_
        )
        /
        (1 - (constCnpj + Comissao_MLC)) >= 29
        &&
        (ValorLiq
            + custo
            + Taxa_ML_ATE50
            + Frete_ML_ATE79 * constNivel_ML_
        )
        /
        (1 - (constCnpj + Comissao_MLC)) >= 29
        &&
        (ValorLiq
            + custo
            + Taxa_ML_ATE50
            + Frete_ML_ATE79 * constNivel_ML_
        )
        /
        (1 - (constCnpj + Comissao_MLC)) <= 49.99) {
        calcMercadoLivreClassicoValorLiq =
            (ValorLiq
                + custo
                + Taxa_ML_ATE50
                + Frete_ML_ATE79 * constNivel_ML_
            )
            /
            (1 - (constCnpj + Comissao_MLC));
    }

    // Entre 50 e 78,99
    else if (
        (ValorLiq
            + custo
            + Taxa_ML_ATE50
            + Frete_ML_ATE79 * constNivel_ML_
        )
        /
        (1 - (constCnpj + Comissao_MLC)) >= 50
        &&
        (ValorLiq
            + custo
            + Taxa_ML_ATE79
            + Frete_ML_ATE79 * constNivel_ML_
        )
        /
        (1 - (constCnpj + Comissao_MLC)) >= 50
        &&
        (ValorLiq
            + custo
            + Taxa_ML_ATE79
            + Frete_ML_ATE79 * constNivel_ML_
        )
        /
        (1 - (constCnpj + Comissao_MLC)) <= 78.99) {
        calcMercadoLivreClassicoValorLiq =
            (ValorLiq
                + custo
                + Taxa_ML_ATE79
                + Frete_ML_ATE79 * constNivel_ML_
            )
            /
            (1 - (constCnpj + Comissao_MLC));
    }

    // Acima de 79
    else if (
        (ValorLiq
            + custo
            + Taxa_ML_ATE79
            + Frete_ML_ATE79 * constNivel_ML_
        )
        /
        (1 - (constCnpj + Comissao_MLC)) >= 78.99
        &&
        (ValorLiq
            + custo
            + constFrete_MercadoLivre * constNivel_ML_
        )
        /
        (1 - (constCnpj + Comissao_MLC)) >= 78.99) {
        calcMercadoLivreClassicoValorLiq =
            (ValorLiq
                + custo
                + constFrete_MercadoLivre * constNivel_ML_
            )
            /
            (1 - (constCnpj + Comissao_MLC));
    }

    // Mercado Livre Classico Porcentagem Liquida - calcMercadoLivreClassicoPctLiq
    // Ate 28,99
    if (
        (custo
            + (PctLiq * custo) / 100
            + Taxa_ML_ATE29
            + Frete_ML_ATE79 * constNivel_ML_
        )
        /
        (1 - (constCnpj + Comissao_MLC)) <= 28.99) {
        calcMercadoLivreClassicoPctLiq =
            (custo
                + (PctLiq * custo) / 100
                + Taxa_ML_ATE29
                + Frete_ML_ATE79 * constNivel_ML_
            )
            /
            (1 - (constCnpj + Comissao_MLC));
    }

    // Entre 29 e 49,99
    else if (
        (custo
            + (PctLiq * custo) / 100
            + Taxa_ML_ATE29
            + Frete_ML_ATE79 * constNivel_ML_
        )
        /
        (1 - (constCnpj + Comissao_MLC)) >= 29
        &&
        (custo
            + (PctLiq * custo) / 100
            + Taxa_ML_ATE50
            + Frete_ML_ATE79 * constNivel_ML_
        )
        /
        (1 - (constCnpj + Comissao_MLC)) >= 29
        &&
        (custo
            + (PctLiq * custo) / 100
            + Taxa_ML_ATE50
            + Frete_ML_ATE79 * constNivel_ML_
        )
        /
        (1 - (constCnpj + Comissao_MLC)) <= 49.99) {
        calcMercadoLivreClassicoPctLiq =
            (custo
                + (PctLiq * custo) / 100
                + Taxa_ML_ATE50
                + Frete_ML_ATE79 * constNivel_ML_
            )
            /
            (1 - (constCnpj + Comissao_MLC));
    }

    // Entre 50 e 78,99
    else if (
        (custo
            + (PctLiq * custo) / 100
            + Taxa_ML_ATE50
            + Frete_ML_ATE79 * constNivel_ML_
        )
        /
        (1 - (constCnpj + Comissao_MLC)) >= 50
        &&
        (custo
            + (PctLiq * custo) / 100
            + Taxa_ML_ATE79
            + Frete_ML_ATE79 * constNivel_ML_
        )
        /
        (1 - (constCnpj + Comissao_MLC)) >= 50
        &&
        (custo
            + (PctLiq * custo) / 100
            + Taxa_ML_ATE79
            + Frete_ML_ATE79 * constNivel_ML_
        )
        /
        (1 - (constCnpj + Comissao_MLC)) <= 78.99) {
        calcMercadoLivreClassicoPctLiq =
            (custo
                + (PctLiq * custo) / 100
                + Taxa_ML_ATE79
                + Frete_ML_ATE79 * constNivel_ML_
            )
            /
            (1 - (constCnpj + Comissao_MLC));
    }

    // Acima de 79
    else if (
        (custo
            + (PctLiq * custo) / 100
            + Taxa_ML_ATE79
            + Frete_ML_ATE79 * constNivel_ML_
        )
        /
        (1 - (constCnpj + Comissao_MLC)) >= 78.99
        &&
        (custo
            + (PctLiq * custo) / 100
            + constFrete_MercadoLivre * constNivel_ML_
        )
        /
        (1 - (constCnpj + Comissao_MLC)) >= 78.99) {
        calcMercadoLivreClassicoPctLiq = (custo
            + (PctLiq * custo) / 100
            + constFrete_MercadoLivre * constNivel_ML_
        )
            /
            (1 - (constCnpj + Comissao_MLC));
    }

    // Mercado Livre Premium Manual - calcMercadoLivrePremiumManual
    var calcMercadoLivrePremiumManual = Manual
        - (
            custo
            + (Manual * (constCnpj + Comissao_MLP))
            + (
                (Manual <= 78.99
                    ? Frete_ML_ATE79
                    : constFrete_MercadoLivre)
                * constNivel_ML_
            )
            + (
                Manual <= 28.99
                    ? Taxa_ML_ATE29
                    : Manual <= 49.99
                        ? Taxa_ML_ATE50
                        : Manual <= 78.99
                            ? Taxa_ML_ATE79
                            : Taxa_ML_ACIMA79
            )
        );

    // Mercado Livre Premium Valor Liquido - calcMercadoLivrePremiumValorLiq
    // Ate 28,99
    if (
        (ValorLiq
            + custo
            + Taxa_ML_ATE29
            + Frete_ML_ATE79 * constNivel_ML_
        )
        /
        (1 - (constCnpj + Comissao_MLP)) <= 28.99) {
        calcMercadoLivrePremiumValorLiq =
            (ValorLiq
                + custo
                + Taxa_ML_ATE29
                + Frete_ML_ATE79 * constNivel_ML_
            )
            /
            (1 - (constCnpj + Comissao_MLP));
    }

    // Entre 29 e 49,99
    else if (
        (ValorLiq
            + custo
            + Taxa_ML_ATE29
            + Frete_ML_ATE79 * constNivel_ML_
        )
        /
        (1 - (constCnpj + Comissao_MLP)) >= 29
        &&
        (ValorLiq
            + custo
            + Taxa_ML_ATE50
            + Frete_ML_ATE79 * constNivel_ML_
        )
        /
        (1 - (constCnpj + Comissao_MLP)) >= 29
        &&
        (ValorLiq
            + custo
            + Taxa_ML_ATE50
            + Frete_ML_ATE79 * constNivel_ML_
        )
        /
        (1 - (constCnpj + Comissao_MLP)) <= 49.99) {
        calcMercadoLivrePremiumValorLiq =
            (ValorLiq
                + custo
                + Taxa_ML_ATE50
                + Frete_ML_ATE79 * constNivel_ML_
            )
            /
            (1 - (constCnpj + Comissao_MLP));
    }

    // Entre 50 e 78,99
    else if (
        (ValorLiq
            + custo
            + Taxa_ML_ATE50
            + Frete_ML_ATE79 * constNivel_ML_
        )
        /
        (1 - (constCnpj + Comissao_MLP)) >= 50
        &&
        (ValorLiq
            + custo
            + Taxa_ML_ATE79
            + Frete_ML_ATE79 * constNivel_ML_
        )
        /
        (1 - (constCnpj + Comissao_MLP)) >= 50
        &&
        (ValorLiq
            + custo
            + Taxa_ML_ATE79
            + Frete_ML_ATE79 * constNivel_ML_
        )
        /
        (1 - (constCnpj + Comissao_MLP)) <= 78.99) {
        calcMercadoLivrePremiumValorLiq =
            (ValorLiq
                + custo
                + Taxa_ML_ATE79
                + Frete_ML_ATE79 * constNivel_ML_
            )
            /
            (1 - (constCnpj + Comissao_MLP));
    }

    // Acima de 79
    else if (
        (ValorLiq
            + custo
            + Taxa_ML_ATE79
            + Frete_ML_ATE79 * constNivel_ML_
        )
        /
        (1 - (constCnpj + Comissao_MLP)) >= 78.99
        &&
        (ValorLiq
            + custo
            + constFrete_MercadoLivre * constNivel_ML_
        )
        /
        (1 - (constCnpj + Comissao_MLP)) >= 78.99) {
        calcMercadoLivrePremiumValorLiq =
            (ValorLiq
                + custo
                + constFrete_MercadoLivre * constNivel_ML_
            )
            /
            (1 - (constCnpj + Comissao_MLP));
    }

    // Mercado Livre Premium Porcentagem Liquida - calcMercadoLivrePremiumPctLiq
    // Ate 28,99
    if (
        (custo
            + (PctLiq * custo) / 100
            + Taxa_ML_ATE29
            + Frete_ML_ATE79 * constNivel_ML_
        )
        /
        (1 - (constCnpj + Comissao_MLP)) <= 28.99) {
        calcMercadoLivrePremiumPctLiq =
            (custo
                + (PctLiq * custo) / 100
                + Taxa_ML_ATE29
                + Frete_ML_ATE79 * constNivel_ML_
            )
            /
            (1 - (constCnpj + Comissao_MLP));
    }

    // Entre 29 e 49,99
    else if (
        (custo
            + (PctLiq * custo) / 100
            + Taxa_ML_ATE29
            + Frete_ML_ATE79 * constNivel_ML_
        )
        /
        (1 - (constCnpj + Comissao_MLP)) >= 29
        &&
        (custo
            + (PctLiq * custo) / 100
            + Taxa_ML_ATE50
            + Frete_ML_ATE79 * constNivel_ML_
        )
        /
        (1 - (constCnpj + Comissao_MLP)) >= 29
        &&
        (custo
            + (PctLiq * custo) / 100
            + Taxa_ML_ATE50
            + Frete_ML_ATE79 * constNivel_ML_
        )
        /
        (1 - (constCnpj + Comissao_MLP)) <= 49.99) {
        calcMercadoLivrePremiumPctLiq =
            (custo
                + (PctLiq * custo) / 100
                + Taxa_ML_ATE50
                + Frete_ML_ATE79 * constNivel_ML_
            )
            /
            (1 - (constCnpj + Comissao_MLP));
    }

    // Entre 50 e 78,99
    else if (
        (custo
            + (PctLiq * custo) / 100
            + Taxa_ML_ATE50
            + Frete_ML_ATE79 * constNivel_ML_
        )
        /
        (1 - (constCnpj + Comissao_MLP)) >= 50
        &&
        (custo
            + (PctLiq * custo) / 100
            + Taxa_ML_ATE79
            + Frete_ML_ATE79 * constNivel_ML_
        )
        /
        (1 - (constCnpj + Comissao_MLP)) >= 50
        &&
        (custo
            + (PctLiq * custo) / 100
            + Taxa_ML_ATE79
            + Frete_ML_ATE79 * constNivel_ML_
        )
        /
        (1 - (constCnpj + Comissao_MLP)) <= 78.99) {
        calcMercadoLivrePremiumPctLiq =
            (custo
                + (PctLiq * custo) / 100
                + Taxa_ML_ATE79
                + Frete_ML_ATE79 * constNivel_ML_
            )
            /
            (1 - (constCnpj + Comissao_MLP));
    }

    // Acima de 79
    else if (
        (custo
            + (PctLiq * custo) / 100
            + Taxa_ML_ATE79
            + Frete_ML_ATE79 * constNivel_ML_
        )
        /
        (1 - (constCnpj + Comissao_MLP)) >= 78.99
        &&
        (custo
            + (PctLiq * custo) / 100
            + constFrete_MercadoLivre * constNivel_ML_
        )
        /
        (1 - (constCnpj + Comissao_MLP)) >= 78.99) {
        calcMercadoLivrePremiumPctLiq =
            (custo
                + (PctLiq * custo) / 100
                + constFrete_MercadoLivre * constNivel_ML_
            )
            /
            (1 - (constCnpj + Comissao_MLP));
    }

    // --------------------------------
    // RD
    // --------------------------------


    // --------------------------------
    // SHEIN
    // --------------------------------

    // Shein Manual - calcSheinManual
    var calcSheinManual = Manual
        - (
            + (custo)
            + (Manual * constCnpj)
            + (Manual * Comissao_Shein)
            + (
                Manual <= 49.89 ? Taxa_Shein :
                    Manual >= 49.9 ? Taxa_Shein : 0
            )
            + (
                (
                    Manual <= 49.89 ? Frete_Shein_ATE49 :
                        Manual >= 49.9 ? constFrete_Shein : 0
                ) * constNivel_Shein
            )
        );

    // Shein Valor Liquido - calcSheinValorLiq
    // Abaixo de 49,89
    if (
        (ValorLiq
            + custo
            + Taxa_Shein
            + (Frete_Shein_ATE49 * constNivel_Shein)
        )
        / (1 - (constCnpj + Comissao_Shein)) <= 49.89) {
        calcSheinValorLiq =
            (ValorLiq
                + custo
                + Taxa_Shein
                + (Frete_Shein_ATE49 * constNivel_Shein)
            )
            / (1 - (constCnpj + Comissao_Shein));
    }

    // Shein Valor Liquido - calcSheinValorLiq
    // Acima de 49,90

    else if (
        (ValorLiq
            + custo
            + Taxa_Shein
            + (Frete_Shein_ATE49 * constNivel_Shein)
        )
        / (1 - (constCnpj + Comissao_Shein)) >= 49.89) {
        calcSheinValorLiq =
            (ValorLiq
                + custo
                + Taxa_Shein
                + (constFrete_Shein * constNivel_Shein)
            )
            / (1 - (constCnpj + Comissao_Shein));
    }

    // Shein Porcentagem Liquida - calcSheinPctLiq
    // Abaixo de 49,89
    if (
        (custo
            + (PctLiq * custo) / 100
            + Taxa_Shein
            + (Frete_Shein_ATE49 * constNivel_Shein)
        )
        / (1 - (constCnpj + Comissao_Shein)) <= 49.89) {
        calcSheinPctLiq =
            (custo
                + (PctLiq * custo) / 100
                + Taxa_Shein
                + (Frete_Shein_ATE49 * constNivel_Shein)
            )
            / (1 - (constCnpj + Comissao_Shein));
    }

    // Shein Porcentagem Liquida - calcSheinPctLiq
    // Acima de 49,90
    else if (
        (custo
            + (PctLiq * custo) / 100
            + Taxa_Shein
            + (Frete_Shein_ATE49 * constNivel_Shein)
        )
        / (1 - (constCnpj + Comissao_Shein)) >= 49.89) {
        calcSheinPctLiq =
            (custo
                + (PctLiq * custo) / 100
                + Taxa_Shein
                + (constFrete_Shein * constNivel_Shein)
            )
            / (1 - (constCnpj + Comissao_Shein));
    }

    // --------------------------------
    // SHOPEE
    // --------------------------------

    // Shopee Manual - calcShopeeManual
    var calcShopeeManual = Manual
        - (custo
            + (Manual * constCnpj)
            + (Manual >= 500 ? 110 : Manual * Comissao_Shopee)
            + (Manual <= 7.99 ? Manual / 2 : Taxa_Shopee_ACIMA8)
            + (Frete_Shopee * constNivel_Shopee)
        );

    // Shopee Valor Liquido - calcShopeeValorLiq
    // Comissao ate 110 + 4
    if (
        (ValorLiq
            + custo
            + Taxa_Shopee_ACIMA8
            + (Frete_Shopee * constNivel_Shopee))
        / (1 - (constCnpj + Comissao_Shopee)) <= 499.99) {
        calcShopeeValorLiq =
            (ValorLiq
                + custo
                + Taxa_Shopee_ACIMA8
                + (Frete_Shopee * constNivel_Shopee))
            / (1 - (constCnpj + Comissao_Shopee));
    }

    // Shopee Valor Liquido - calcShopeeValorLiq
    // Comissao acima de 110 + 4
    else if (
        (ValorLiq
            + custo
            + Taxa_Shopee_ACIMA8
            + (Frete_Shopee * constNivel_Shopee))
        / (1 - (constCnpj + Comissao_Shopee)) >= 499.99) {
        calcShopeeValorLiq =
            (ValorLiq
                + custo
                + Taxa_Shopee_ACIMA8
                + 110
                + (Frete_Shopee * constNivel_Shopee))
            / (1 - constCnpj);
    }

    // Shopee Porcentagem Liquida - calcShopeePctLiq
    // Comissao ate 110 + 4
    if (
        (custo * (1 + PctLiq / 100)
            + Taxa_Shopee_ACIMA8
            + constFrete_Shopee * constNivel_Shopee
        )
        / (1 - (constCnpj + Comissao_Shopee)) <= 499.99) {
        calcShopeePctLiq =
            (custo * (1 + PctLiq / 100)
                + Taxa_Shopee_ACIMA8
                + constFrete_Shopee * constNivel_Shopee
            )
            / (1 - (constCnpj + Comissao_Shopee));
    }

    // Shopee Porcentagem Liquida - calcShopeePctLiq
    // Comissao acima de 100 + 4
    else if (
        (custo * (1 + PctLiq / 100)
            + Taxa_Shopee_ACIMA8
            + constFrete_Shopee * constNivel_Shopee
        )
        / (1 - (constCnpj + Comissao_Shopee)) >= 499.99) {
        calcShopeePctLiq =
            (custo * (1 + PctLiq / 100)
                + Taxa_Shopee_ACIMA8
                + 110
                + constFrete_Shopee * constNivel_Shopee
            )
            / (1 - (constCnpj));
    }

    // --------------------------------

    // Valores que serao exibidos na tabela de resultados

    // Presencial
    document.getElementById("resultado_Presencial_Manual").textContent = "R$ " + calcPresencialManual.toFixed(2).replace(".", ",") + " (" + ((calcPresencialManual / custo) * 100).toFixed(2).replace(".", ",") + "%)";
    document.getElementById("resultado_Presencial_ValorLiq").textContent = "R$ " + calcPresencialValorLiq.toFixed(2).replace(".", ",") + " (" + ((ValorLiq / custo) * 100).toFixed(2).replace(".", ",") + "%)";
    document.getElementById("resultado_Presencial_PctLiq").textContent = "R$ " + calcPresencialPctLiq.toFixed(2).replace(".", ",") + " (" + "R$ " + ((custo * PctLiq) / 100).toFixed(2).replace(".", ",") + ")";

    if (cnpj === "RAV SHEFA DISTRIBUIDORA DE COSMETICOS LTDA") {
        document.getElementById("resultado_CasasBahia_Manual").textContent = "";
        document.getElementById("resultado_CasasBahia_ValorLiq").textContent = "";
        document.getElementById("resultado_CasasBahia_PctLiq").textContent = "";
        document.getElementById("resultado_Magalu_Manual").textContent = "";
        document.getElementById("resultado_Magalu_ValorLiq").textContent = "";
        document.getElementById("resultado_Magalu_PctLiq").textContent = "";
        document.getElementById("resultado_MLC_Manual").textContent = "";
        document.getElementById("resultado_MLC_ValorLiq").textContent = "";
        document.getElementById("resultado_MLC_PctLiq").textContent = "";
        document.getElementById("resultado_MLP_Manual").textContent = "";
        document.getElementById("resultado_MLP_ValorLiq").textContent = "";
        document.getElementById("resultado_MLP_PctLiq").textContent = "";
        document.getElementById("resultado_Shein_Manual").textContent = "";
        document.getElementById("resultado_Shein_ValorLiq").textContent = "";
        document.getElementById("resultado_Shein_PctLiq").textContent = "";
        document.getElementById("resultado_Shopee_Manual").textContent = "";
        document.getElementById("resultado_Shopee_ValorLiq").textContent = "";
        document.getElementById("resultado_Shopee_PctLiq").textContent = "";
    } else {

        // Casas Bahia
        document.getElementById("resultado_CasasBahia_Manual").textContent = "R$ " + calcCasasBahiaManual.toFixed(2).replace(".", ",") + " (" + ((calcCasasBahiaManual / custo) * 100).toFixed(2).replace(".", ",") + "%)";
        document.getElementById("resultado_CasasBahia_ValorLiq").textContent = "R$ " + calcCasasBahiaValorLiq.toFixed(2).replace(".", ",") + " (" + ((ValorLiq / custo) * 100).toFixed(2).replace(".", ",") + "%)";
        document.getElementById("resultado_CasasBahia_PctLiq").textContent = "R$ " + calcCasasBahiaPctLiq.toFixed(2).replace(".", ",") + " (" + "R$ " + ((custo * PctLiq) / 100).toFixed(2).replace(".", ",") + ")";

        // Magalu
        document.getElementById("resultado_Magalu_Manual").textContent = "R$ " + calcMagaluManual.toFixed(2).replace(".", ",") + " (" + ((calcMagaluManual / custo) * 100).toFixed(2).replace(".", ",") + "%)";
        document.getElementById("resultado_Magalu_ValorLiq").textContent = "R$ " + calcMagaluValorLiq.toFixed(2).replace(".", ",") + " (" + ((ValorLiq / custo) * 100).toFixed(2).replace(".", ",") + "%)";
        document.getElementById("resultado_Magalu_PctLiq").textContent = "R$ " + calcMagaluPctLiq.toFixed(2).replace(".", ",") + " (" + "R$ " + ((custo * PctLiq) / 100).toFixed(2).replace(".", ",") + ")";

        // Mercado Livre Classico
        document.getElementById("resultado_MLC_Manual").textContent = "R$ " + calcMercadoLivreClassicoManual.toFixed(2).replace(".", ",") + " (" + ((calcMercadoLivreClassicoManual / custo) * 100).toFixed(2).replace(".", ",") + "%)";
        document.getElementById("resultado_MLC_ValorLiq").textContent = "R$ " + calcMercadoLivreClassicoValorLiq.toFixed(2).replace(".", ",") + " (" + ((ValorLiq / custo) * 100).toFixed(2).replace(".", ",") + "%)";
        document.getElementById("resultado_MLC_PctLiq").textContent = "R$ " + calcMercadoLivreClassicoPctLiq.toFixed(2).replace(".", ",") + " (" + "R$ " + ((custo * PctLiq) / 100).toFixed(2).replace(".", ",") + ")";


        // Mercado Livre Premium
        document.getElementById("resultado_MLP_Manual").textContent = "R$ " + calcMercadoLivrePremiumManual.toFixed(2).replace(".", ",") + " (" + ((calcMercadoLivrePremiumManual / custo) * 100).toFixed(2).replace(".", ",") + "%)";
        document.getElementById("resultado_MLP_ValorLiq").textContent = "R$ " + calcMercadoLivrePremiumValorLiq.toFixed(2).replace(".", ",") + " (" + ((ValorLiq / custo) * 100).toFixed(2).replace(".", ",") + "%)";
        document.getElementById("resultado_MLP_PctLiq").textContent = "R$ " + calcMercadoLivrePremiumPctLiq.toFixed(2).replace(".", ",") + " (" + "R$ " + ((custo * PctLiq) / 100).toFixed(2).replace(".", ",") + ")";

        // Shein
        document.getElementById("resultado_Shein_Manual").textContent = "R$ " + calcSheinManual.toFixed(2).replace(".", ",") + " (" + ((calcSheinManual / custo) * 100).toFixed(2).replace(".", ",") + "%)";
        document.getElementById("resultado_Shein_ValorLiq").textContent = "R$ " + calcSheinValorLiq.toFixed(2).replace(".", ",") + " (" + ((ValorLiq / custo) * 100).toFixed(2).replace(".", ",") + "%)";
        document.getElementById("resultado_Shein_PctLiq").textContent = "R$ " + calcSheinPctLiq.toFixed(2).replace(".", ",") + " (" + "R$ " + ((custo * PctLiq) / 100).toFixed(2).replace(".", ",") + ")";

        // Shopee
        // Valores de venda abaixo de R$ 8 nao podem ser calculados pelas formulas ValorLiq e PctLiq
        document.getElementById("resultado_Shopee_Manual").textContent = "R$ " + calcShopeeManual.toFixed(2).replace(".", ",") + " (" + ((calcShopeeManual / custo) * 100).toFixed(2).replace(".", ",") + "%)";
        if (calcShopeeValorLiq <= 7.99) {
            document.getElementById("resultado_Shopee_ValorLiq").textContent = "Este valor é muito baixo para ser calculado nesta fórmula. Use a primeira coluna.";
        } else {
            document.getElementById("resultado_Shopee_ValorLiq").textContent = "R$ " + calcShopeeValorLiq.toFixed(2).replace(".", ",") + " (" + ((ValorLiq / custo) * 100).toFixed(2).replace(".", ",") + "%)";
        }
        if (calcShopeePctLiq <= 7.99) {
            document.getElementById("resultado_Shopee_PctLiq").textContent = "Este valor e muito baixo para ser calculado nesta formula. Use a primeira coluna";
        } else {
            document.getElementById("resultado_Shopee_PctLiq").textContent = "R$ " + calcShopeePctLiq.toFixed(2).replace(".", ",") + " (" + "R$ " + ((custo * PctLiq) / 100).toFixed(2).replace(".", ",") + ")";
        }
    }
}