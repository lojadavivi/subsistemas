/**
 * CALCULADORA DE PREÇOS PARA MÚLTIPLOS CANAIS DE VENDA
 * =====================================================
 * 
 * Função que calcula preços finais de produtos para diferentes canais de distribuição,
 * considerando custos, taxas, comissões, fretes e margens de lucro específicos de cada plataforma.
 * 
 * DEPENDÊNCIAS: Este arquivo depende de 'calc_variables.js' que contém as constantes
 * de CNPJ, fretes, taxas e comissões para cada canal.
 * 
 * CANAIS SUPORTADOS:
 * - Presencial (com envio especial para RAV SHEFA)
 * - Amazon
 * - Casas Bahia
 * - Magalu
 * - Mercado Livre (Clássico e Premium)
 * - Olist
 * - RD
 * - Shein
 * - Shopee
 * 
 * @param {HTMLElement} inputElement - Elemento HTML que acionou a função (não utilizado diretamente)
 * @returns {void} - Atualiza os elementos HTML com os resultados calculados
 */
function calcular(inputElement) {

    // ============================================================================
    // ETAPA 1: OBTENÇÃO DOS VALORES DE ENTRADA DO FORMULÁRIO
    // ============================================================================
    // Estes valores vêm de campos de entrada HTML e serão usados na base dos cálculos

    var cnpj = document.getElementById("cnpj").value;              // CNPJ/Loja selecionada
    var nivel = document.getElementById("nivel").value;            // Nível de desconto (1-5)
    var peso = document.getElementById("peso").value;              // Faixa de peso do produto
    var custo_puro = parseFloat(document.getElementById("custo").value.replace(",", "."));     // Custo puro do produto (sem insumos)
    var Manual = parseFloat(document.getElementById("Manual").value.replace(",", "."));        // Preço de venda manual
    var ValorLiq = parseFloat(document.getElementById("ValorLiq").value.replace(",", "."));    // Valor líquido desejado
    var PctLiq = parseFloat(document.getElementById("PctLiq").value.replace(",", "."));        // Percentual de margem líquida desejada

    // ============================================================================
    // ETAPA 2: DEFINIÇÃO DE CONSTANTES BASEADAS NO CNPJ/LOJA SELECIONADA
    // ============================================================================
    // Cada CNPJ tem uma taxa/comissão diferente definida em calc_variables.js
    var constCnpj;  // Taxa de comissão específica do CNPJ (variável global definida em calc_variables.js)

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

    // ============================================================================
    // ETAPA 3: DEFINIÇÃO DE CONSTANTES DE FRETE POR PESO E PLATAFORMA
    // ============================================================================
    // O frete varia dependendo do peso do produto e da plataforma de vendas.
    // Produtos acima de R$ 79 geralmente têm frete reduzido ou gratuito.
    // Estas constantes são definidas em calc_variables.js

    var constFrete_Presencial;
    var constFrete_Amazon;
    var constFrete_CasasBahia;
    var constFrete_Magalu;
    var constFrete_MercadoLivre;
    var constFrete_Olist;
    var constFrete_RD;
    var constFrete_Shein;
    var constFrete_Shopee;

    if (peso === "Selecione") {
        constFrete_Presencial = x;
        constFrete_Amazon = x;
        constFrete_CasasBahia = x;
        constFrete_Magalu = x;
        constFrete_MercadoLivre = x;
        constFrete_Olist = x;
        constFrete_RD = x;
        constFrete_Shein = x;
        constFrete_Shopee = x;
    } else if (peso === "até 0.3kg") {
        constFrete_Presencial = Frete_Presencial;
        constFrete_Amazon = Frete_Amazon_ACIMA79_ate300G;
        constFrete_CasasBahia = Frete_CasasBahia_ACIMA79_ate300G;
        constFrete_Magalu = Frete_Magalu_ACIMA79_ate300G;
        constFrete_MercadoLivre = Frete_ML_ACIMA79_ate300G;
        constFrete_Olist = Frete_Olist_ACIMA79_ate300G;
        constFrete_RD = Frete_RD_ate300G;
        constFrete_Shein = Frete_Shein_ACIMA49_ate300G;
        constFrete_Shopee = Frete_Shopee;
    } else if (peso === "0.3 a 0.5kg") {
        constFrete_Presencial = Frete_Presencial;
        constFrete_Amazon = Frete_Amazon_ACIMA79_300a500G;
        constFrete_CasasBahia = Frete_CasasBahia_ACIMA79_300a500G;
        constFrete_Magalu = Frete_Magalu_ACIMA79_300a500G;
        constFrete_MercadoLivre = Frete_ML_ACIMA79_300a500G;
        constFrete_Olist = Frete_Olist_ACIMA79_300a500G;
        constFrete_RD = Frete_RD_300a500G;
        constFrete_Shein = Frete_Shein_ACIMA49_300a500G;
        constFrete_Shopee = Frete_Shopee;
    } else if (peso === "0.5 a 1kg") {
        constFrete_Presencial = Frete_Presencial;
        constFrete_Amazon = Frete_Amazon_ACIMA79_500Ga1KG;
        constFrete_CasasBahia = Frete_CasasBahia_ACIMA79_500Ga1KG;
        constFrete_Magalu = Frete_Magalu_ACIMA79_500Ga1KG;
        constFrete_MercadoLivre = Frete_ML_ACIMA79_500Ga1KG;
        constFrete_Olist = Frete_Olist_ACIMA79_300a500G;
        constFrete_RD = Frete_RD_500Ga1KG;
        constFrete_Shein = Frete_Shein_ACIMA49_500Ga1KG;
        constFrete_Shopee = Frete_Shopee;
    } else if (peso === "1 a 2kg") {
        constFrete_Presencial = Frete_Presencial;
        constFrete_Amazon = Frete_Amazon_ACIMA79_1a2KG;
        constFrete_CasasBahia = Frete_CasasBahia_ACIMA79_1a2KG;
        constFrete_Magalu = Frete_Magalu_ACIMA79_1a2KG;
        constFrete_MercadoLivre = Frete_ML_ACIMA79_1a2KG;
        constFrete_Olist = Frete_Olist_ACIMA79_1a2KG;
        constFrete_RD = Frete_RD_1a2KG;
        constFrete_Shein = Frete_Shein_ACIMA49_1a2KG;
        constFrete_Shopee = Frete_Shopee;
    } else if (peso === "2 a 5kg") {
        constFrete_Presencial = Frete_Presencial;
        constFrete_Amazon = Frete_Amazon_ACIMA79_2a5KG;
        constFrete_CasasBahia = Frete_CasasBahia_ACIMA79_2a5KG;
        constFrete_Magalu = Frete_Magalu_ACIMA79_2a5KG;
        constFrete_MercadoLivre = Frete_ML_ACIMA79_2a5KG;
        constFrete_Olist = Frete_Olist_ACIMA79_2a5KG;
        constFrete_RD = Frete_RD_2a5KG;
        constFrete_Shein = Frete_Shein_ACIMA49_2a5KG;
        constFrete_Shopee = Frete_Shopee;
    } else if (peso === "5 a 9kg") {
        constFrete_Presencial = Frete_Presencial;
        constFrete_Amazon = Frete_Amazon_ACIMA79_5a9KG;
        constFrete_CasasBahia = Frete_CasasBahia_ACIMA79_5a9KG;
        constFrete_Magalu = Frete_Magalu_ACIMA79_5a9KG;
        constFrete_MercadoLivre = Frete_ML_ACIMA79_5a9KG;
        constFrete_Olist = Frete_Olist_ACIMA79_5a9KG;
        constFrete_RD = Frete_RD_5a9KG;
        constFrete_Shein = Frete_Shein_ACIMA49_5a9KG;
        constFrete_Shopee = Frete_Shopee;
    } else if (peso === "9 a 13kg") {
        constFrete_Presencial = Frete_Presencial;
        constFrete_Amazon = Frete_Amazon_ACIMA79_9a13KG;
        constFrete_CasasBahia = Frete_CasasBahia_ACIMA79_9a13KG;
        constFrete_Magalu = Frete_Magalu_ACIMA79_9a13KG;
        constFrete_MercadoLivre = Frete_ML_ACIMA79_9a13KG;
        constFrete_Olist = Frete_Olist_ACIMA79_9a13KG;
        constFrete_RD = Frete_RD_9a13KG;
        constFrete_Shein = Frete_Shein_ACIMA49_9a13KG;
        constFrete_Shopee = Frete_Shopee;
    } else if (peso === "13 a 17kg") {
        constFrete_Presencial = Frete_Presencial;
        constFrete_Amazon = Frete_Amazon_ACIMA79_13a17KG;
        constFrete_CasasBahia = Frete_CasasBahia_ACIMA79_13a17KG;
        constFrete_Magalu = Frete_Magalu_ACIMA79_13a17KG;
        constFrete_MercadoLivre = Frete_ML_ACIMA79_13a17KG;
        constFrete_Olist = Frete_Olist_ACIMA79_13a17KG;
        constFrete_RD = Frete_RD_13a17KG;
        constFrete_Shein = Frete_Shein_ACIMA49_13a17KG;
        constFrete_Shopee = Frete_Shopee;;
    } else if (peso === "17 a 23kg") {
        constFrete_Presencial = Frete_Presencial;
        constFrete_Amazon = Frete_Amazon_ACIMA79_17a23KG;
        constFrete_CasasBahia = Frete_CasasBahia_ACIMA79_17a23KG;
        constFrete_Magalu = Frete_Magalu_ACIMA79_17a23KG;
        constFrete_MercadoLivre = Frete_ML_ACIMA79_17a23KG;
        constFrete_Olist = Frete_Olist_ACIMA79_17a23KG;
        constFrete_RD = Frete_RD_17a23KG;
        constFrete_Shein = Frete_Shein_ACIMA49_17a23KG;
        constFrete_Shopee = Frete_Shopee;
    } else if (peso === "23 a 30kg") {
        constFrete_Presencial = Frete_Presencial;
        constFrete_Amazon = Frete_Amazon_ACIMA79_23a30KG;
        constFrete_CasasBahia = Frete_CasasBahia_ACIMA79_23a30KG;
        constFrete_Magalu = Frete_Magalu_ACIMA79_23a30KG;
        constFrete_MercadoLivre = Frete_ML_ACIMA79_23a30KG;
        constFrete_Olist = Frete_Olist_ACIMA79_23a30KG;
        constFrete_RD = Frete_RD_23a30KG;
        constFrete_Shein = Frete_Shein_ACIMA49_23a30KG;
        constFrete_Shopee = Frete_Shopee;
    }

    // ============================================================================
    // ETAPA 4: DEFINIÇÃO DE CONSTANTES DE NÍVEL DE DESCONTO
    // ============================================================================
    // O nível (1-5) define descontos progressivos no frete entre as plataformas.
    // Nível 5 = maior desconto, Nível 1 = menor desconto
    // Plataformas como RAV SHEFA e RD não têm variação de nível

    var constNivel_Presencial;
    var constNivel_Amazon;
    var constNivel_CasasBahia;
    var constNivel_Magalu_;
    var constNivel_ML;
    var constNivel_Olist;
    var constNivel_RD;
    var constNivel_Shein;
    var constNivel_Shopee;

    if (nivel === "5") {
        constNivel_Presencial = Nivel_Presencial;
        constNivel_Amazon = Nivel_Amazon;
        constNivel_CasasBahia = Nivel_CasasBahia_5;
        constNivel_Magalu_ = Nivel_Magalu_5;
        constNivel_ML = Nivel_ML_5;
        constNivel_Olist = Nivel_Olist_5;
        constNivel_RD = Nivel_RD;
        constNivel_Shein = Nivel_Shein;
        constNivel_Shopee = Nivel_Shopee;
    } else if (nivel === "4") {
        constNivel_Presencial = Nivel_Presencial;
        constNivel_Amazon = Nivel_Amazon;
        constNivel_CasasBahia = Nivel_CasasBahia_4;
        constNivel_Magalu_ = Nivel_Magalu_4;
        constNivel_ML = Nivel_ML_4;
        constNivel_Olist = Nivel_Olist_4;
        constNivel_RD = Nivel_RD;
        constNivel_Shein = Nivel_Shein;
        constNivel_Shopee = Nivel_Shopee;
    } else if (nivel === "3") {
        constNivel_Presencial = Nivel_Presencial;
        constNivel_Amazon = Nivel_Amazon;
        constNivel_CasasBahia = Nivel_CasasBahia_3;
        constNivel_Magalu_ = Nivel_Magalu_3;
        constNivel_ML = Nivel_ML_3;
        constNivel_Olist = Nivel_Olist_3;
        constNivel_RD = Nivel_RD;
        constNivel_Shein = Nivel_Shein;
        constNivel_Shopee = Nivel_Shopee;
    } else if (nivel === "2") {
        constNivel_Presencial = Nivel_Presencial;
        constNivel_Amazon = Nivel_Amazon;
        constNivel_CasasBahia = Nivel_CasasBahia_2;
        constNivel_Magalu_ = Nivel_Magalu_2;
        constNivel_ML = Nivel_ML_2;
        constNivel_Olist = Nivel_Olist_2;
        constNivel_RD = Nivel_RD;
        constNivel_Shein = Nivel_Shein;
        constNivel_Shopee = Nivel_Shopee;
    } else if (nivel === "1") {
        constNivel_Presencial = Nivel_Presencial;
        constNivel_Amazon = Nivel_Amazon;
        constNivel_CasasBahia = Nivel_CasasBahia_1;
        constNivel_Magalu_ = Nivel_Magalu_1;
        constNivel_ML = Nivel_ML_1;
        constNivel_Olist = Nivel_Olist_1;
        constNivel_RD = Nivel_RD;
        constNivel_Shein = Nivel_Shein;
        constNivel_Shopee = Nivel_Shopee;
    }

    // ============================================================================
    // ETAPA 5: DEFINIÇÃO DE CUSTO DE INSUMOS POR FAIXA DE PESO
    // ============================================================================
    // Produtos com peso diferente têm custos de embalagem/insumos diferentes:
    // - Até 300g: embalagem mais simples
    // - Acima de 300g: embalagem mais robusta (maior custo)

    var constCusto_Insumos;

    if (peso === "Selecione") {
        constCusto_Insumos = x;  // Valor não definido
    } else if (peso === "até 0.3kg") {
        constCusto_Insumos = Custo_Insumos_ate300G;
    } else {
        constCusto_Insumos = Custo_Insumos_acima300G;
    }

    // Custo total = custos de produto puro + custos de insumos/embalagem
    const custo = custo_puro + constCusto_Insumos;

    // ============================================================================
    // OTIMIZAÇÃO: PRÉ-CÁLCULO DE VALORES REPETIDOS
    // ============================================================================
    // Evita recalcular os mesmos valores múltiplas vezes
    
    const margem_percentual = custo * PctLiq / 100;  // Margem em reais para PctLiq
    const custo_com_margem = custo + margem_percentual;  // Custo com margem
    
    // Pré-calcular comissões totais por canal
    const comissao_Presencial_RAV = constCnpj;
    const comissao_Presencial = constCnpj + Comissao_Presencial;
    const comissao_Amazon = constCnpj + Comissao_Amazon;
    const comissao_CasasBahia = constCnpj + Comissao_CasasBahia;
    const comissao_Magalu = constCnpj + Comissao_Magalu;
    const comissao_MLC = constCnpj + Comissao_MLC;
    const comissao_MLP = constCnpj + Comissao_MLP;
    const comissao_Olist = constCnpj + Comissao_Olist;
    const comissao_RD = constCnpj + Comissao_RD;
    const comissao_Shein = constCnpj + Comissao_Shein;
    const comissao_Shopee_ATE79 = constCnpj + Comissao_Shopee_ATE79;
    const comissao_Shopee_ACIMA79 = constCnpj + Comissao_Shopee_ACIMA79;

    // ============================================================================
    // - Comissão da plataforma (varia por CNPJ e canal)
    // - Frete (varia por peso e nível)
    // - Taxas específicas do canal (alguns cobram taxa fixa)
    // - Três métodos de cálculo: Manual, Valor Líquido (ValorLiq), Percentual (PctLiq)

    // NOTA IMPORTANTE: RAV SHEFA DISTRIBUIDORA tem um tratamento especial com
    // menor comissão/taxa no canal Presencial


    // --------------------------------
    // PRESENCIAL
    // --------------------------------

    // Presencial Manual - calcPresencialManual
    if (cnpj === "RAV SHEFA DISTRIBUIDORA DE COSMETICOS LTDA") {
        var calcPresencialManual = Manual - (custo + Manual * comissao_Presencial_RAV);
    }
    else {
        var calcPresencialManual = Manual - (custo + Manual * comissao_Presencial);
    }
    
    // Presencial Valor Liquido - calcPresencialValorLiq
    if (cnpj === "RAV SHEFA DISTRIBUIDORA DE COSMETICOS LTDA") {
        var calcPresencialValorLiq = (ValorLiq + custo) / (1 - comissao_Presencial_RAV);
    }
    else {
        var calcPresencialValorLiq = (ValorLiq + custo) / (1 - comissao_Presencial);
    }
    
    // Presencial Porcentagem Liquida - calcPresencialPctLiq
    if (cnpj === "RAV SHEFA DISTRIBUIDORA DE COSMETICOS LTDA") {
        var calcPresencialPctLiq = custo_com_margem / (1 - comissao_Presencial_RAV);
    }
    else {
        var calcPresencialPctLiq = custo_com_margem / (1 - comissao_Presencial);
    }

    // ================================ AMAZON ====================================
    // Amazon tem frete progressivo até R$ 79: frete reduzido acima desse valor
    // CalcA3 cálculos: Manual, Valor Líquido (ValorLiq), Percentual (PctLiq)
    // Comissão: padrão para Amazon (definida em calc_variables.js)

    // Pré-calcular para Amazon
    const denominador_Amazon = 1 - (constCnpj + Comissao_Amazon);
    const frete_Amazon_ATE30_n = Frete_Amazon_ATE30 * constNivel_Amazon;
    const frete_Amazon_30a50_n = Frete_Amazon_30a50 * constNivel_Amazon;
    const frete_Amazon_50a79_n = Frete_Amazon_50a79 * constNivel_Amazon;
    const frete_Amazon_ACIMA79_n = constFrete_Amazon * constNivel_Amazon;
    const frete_Amazon_manual = (Manual < 30 ? frete_Amazon_ATE30_n : Manual < 50 ? frete_Amazon_30a50_n : Manual < 79 ? frete_Amazon_50a79_n : frete_Amazon_ACIMA79_n);

    // Amazon Manual - calcAmazonManual - simplificado
    var calcAmazonManual = Manual - (custo + Manual * (constCnpj + Comissao_Amazon) + frete_Amazon_manual);

    // Amazon Valor Liquido - calcAmazonValorLiq - com cascata de ternários
    const calc_Amazon_ate30 = (ValorLiq + custo + frete_Amazon_ATE30_n) / denominador_Amazon;
    const calc_Amazon_ate50 = (ValorLiq + custo + frete_Amazon_30a50_n) / denominador_Amazon;
    const calc_Amazon_ate79 = (ValorLiq + custo + frete_Amazon_50a79_n) / denominador_Amazon;
    const calc_Amazon_acima79 = (ValorLiq + custo + frete_Amazon_ACIMA79_n) / denominador_Amazon;
    var calcAmazonValorLiq = (calc_Amazon_ate30 < 30) ? calc_Amazon_ate30 : (calc_Amazon_ate50 < 50) ? calc_Amazon_ate50 : (calc_Amazon_ate79 < 79) ? calc_Amazon_ate79 : calc_Amazon_acima79;

    // Amazon Porcentagem Liquida - calcAmazonPctLiq - com cascata de ternários
    const calc_Amazon_pct_ate30 = (custo_com_margem + frete_Amazon_ATE30_n) / denominador_Amazon;
    const calc_Amazon_pct_ate50 = (custo_com_margem + frete_Amazon_30a50_n) / denominador_Amazon;
    const calc_Amazon_pct_ate79 = (custo_com_margem + frete_Amazon_50a79_n) / denominador_Amazon;
    const calc_Amazon_pct_acima79 = (custo_com_margem + frete_Amazon_ACIMA79_n) / denominador_Amazon;
    var calcAmazonPctLiq = (calc_Amazon_pct_ate30 < 30) ? calc_Amazon_pct_ate30 : (calc_Amazon_pct_ate50 < 50) ? calc_Amazon_pct_ate50 : (calc_Amazon_pct_ate79 < 79) ? calc_Amazon_pct_ate79 : calc_Amazon_pct_acima79;


    // ========================= CASAS BAHIA ==============================
    // Casas Bahia cobra taxa fixa + frete progressivo (até R$ 69,90)
    // Três faixas de cálculo: até 69,90 / acima de 69,90 / por percentual

    // CasasBahia Manual - calcCasasBahiaManual
    // Fórmula: Preço Manual - (Custo + Taxa + Comissão + Frete)
    var calcCasasBahiaManual =
        Manual
        - (
            + custo
            + Taxa_CasasBahia
            + (Manual * (constCnpj + Comissao_CasasBahia))
            + ((Manual < 69.90 ? Frete_CasasBahia_ATE69 :
                Manual > 69.90 ? constFrete_CasasBahia : 0
            ) * constNivel_CasasBahia)
        );

    // Casas Bahia Valor Liquido - calcCasasBahiaValorLiq - simplificado
    const denominador_CasasBahia = 1 - comissao_CasasBahia;
    const frete_CB_ATE69_n = Frete_CasasBahia_ATE69 * constNivel_CasasBahia;
    const frete_CB_ACIMA69_n = constFrete_CasasBahia * constNivel_CasasBahia;
    const calc_CB_ate69 = (ValorLiq + custo + Taxa_CasasBahia + frete_CB_ATE69_n) / denominador_CasasBahia;
    calcCasasBahiaValorLiq = (calc_CB_ate69 <= 69.89) ? calc_CB_ate69 : (ValorLiq + custo + Taxa_CasasBahia + frete_CB_ACIMA69_n) / denominador_CasasBahia;

    // Casas Bahia Porcentagem Liquida - calcCasasBahiaPctLiq - simplificado
    const calc_CB_pct_ate69 = (custo_com_margem + Taxa_CasasBahia + frete_CB_ATE69_n) / denominador_CasasBahia;
    calcCasasBahiaPctLiq = (calc_CB_pct_ate69 <= 69.89) ? calc_CB_pct_ate69 : (custo_com_margem + Taxa_CasasBahia + frete_CB_ACIMA69_n) / denominador_CasasBahia;

    // ========================= MAGALU ================================
    // Magalu cobra taxa variável por faixa de preço (até 9,99 / 10+)
    // Frete progressivo até R$ 79 (taxa reduzida acima desse valor)
    // Cálculos: Manual, Valor Líquido (em 3 faixas), Percentual (em 3 faixas)

    // Pré-calcular para Magalu
    const denominador_Magalu = 1 - comissao_Magalu;
    const frete_Magalu_ATE79_n = Frete_Magalu_ATE79 * constNivel_Magalu_;
    const frete_Magalu_ACIMA79_n = constFrete_Magalu * constNivel_Magalu_;
    const frete_Magalu_manual = (Manual <= 78.99 ? frete_Magalu_ATE79_n : frete_Magalu_ACIMA79_n);
    const taxa_Magalu_manual = (Manual <= 9.99 ? Taxa_Magalu_ATE10 : Taxa_Magalu_ACIMA10);

    // Magalu Manual - calcMagaluManual - simplificado
    var calcMagaluManual = Manual - (custo + Manual * comissao_Magalu + frete_Magalu_manual + taxa_Magalu_manual);

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
        (1 - (constCnpj + Comissao_Magalu)) > 9.99
        &&
        (ValorLiq
            + custo
            + Taxa_Magalu_ACIMA10
            + (Frete_Magalu_ATE79 * constNivel_Magalu_)
        )
        /
        (1 - (constCnpj + Comissao_Magalu)) <= 78.99) {
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
    else if (
        (ValorLiq
            + custo
            + Taxa_Magalu_ACIMA10
            + (Frete_Magalu_ATE79 * constNivel_Magalu_)
        )
        /
        (1 - (constCnpj + Comissao_Magalu)) > 78.99) {
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
        (1 - (constCnpj + Comissao_Magalu)) > 9.99
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
        (1 - (constCnpj + Comissao_Magalu)) > 78.99) {
        calcMagaluPctLiq =
            (custo
                + (PctLiq * custo) / 100
                + Taxa_Magalu_ACIMA10
                + constFrete_Magalu * constNivel_Magalu_
            )
            /
            (1 - (constCnpj + Comissao_Magalu));
    }

    // ===================== MERCADO LIVRE (CLÁSSICO + PREMIUM) =====================
    // Mercado Livre tem dois tipos: Clássico (MLC) e Premium (MLP)
    // Taxa variável por faixa: até 12,50 / 12,50-29 / 29-50 / 50-79 / acima 79
    // Frete progressivo até R$ 78,99, reduzido acima
    // Comissão: MLC vs MLP diferem

    // Pré-calcular constantes para Mercado Livre
    const denominador_MLC = 1 - (constCnpj + Comissao_MLC);
    const denominador_MLP = 1 - (constCnpj + Comissao_MLP);
    const frete_ML_ATE79_n = Frete_ML_ATE79 * constNivel_ML;
    const frete_ML_ACIMA79_n = constFrete_MercadoLivre * constNivel_ML;
    const frete_Manual_ML = (Manual <= 78.99 ? frete_ML_ATE79_n : frete_ML_ACIMA79_n);
    const taxa_Manual_ML = (Manual <= 12.5 ? Taxa_ML_ATE12 : Manual <= 29 ? Taxa_ML_ATE29 : Manual <= 50 ? Taxa_ML_ATE50 : Manual <= 78.99 ? Taxa_ML_ATE79 : Taxa_ML_ACIMA79);

    // MLC Manual - calcMLCManual - simplificado
    var calcMLCManual = Manual - (custo + Manual * (constCnpj + Comissao_MLC) + taxa_Manual_ML + frete_Manual_ML);

    // MLC Valor Liquido - calcMLCValorLiq - com cascata de 5 ternários
    const calc_MLC_ate12 = (ValorLiq + custo + Taxa_ML_ATE12 + frete_ML_ATE79_n) / denominador_MLC;
    const calc_MLC_ate29 = (ValorLiq + custo + Taxa_ML_ATE29 + frete_ML_ATE79_n) / denominador_MLC;
    const calc_MLC_ate50 = (ValorLiq + custo + Taxa_ML_ATE50 + frete_ML_ATE79_n) / denominador_MLC;
    const calc_MLC_ate79 = (ValorLiq + custo + Taxa_ML_ATE79 + frete_ML_ATE79_n) / denominador_MLC;
    const calc_MLC_acima79 = (ValorLiq + custo + Taxa_ML_ACIMA79 + frete_ML_ACIMA79_n) / denominador_MLC;
    var calcMLCValorLiq = (calc_MLC_ate12 <= 12.5) ? calc_MLC_ate12 : (calc_MLC_ate29 <= 29) ? calc_MLC_ate29 : (calc_MLC_ate50 <= 50) ? calc_MLC_ate50 : (calc_MLC_ate79 <= 78.99) ? calc_MLC_ate79 : calc_MLC_acima79;

    // MLC Porcentagem Liquida - calcMLCPctLiq - com cascata de 5 ternários
    const calc_MLC_pct_ate12 = (custo_com_margem + Taxa_ML_ATE12 + frete_ML_ATE79_n) / denominador_MLC;
    const calc_MLC_pct_ate29 = (custo_com_margem + Taxa_ML_ATE29 + frete_ML_ATE79_n) / denominador_MLC;
    const calc_MLC_pct_ate50 = (custo_com_margem + Taxa_ML_ATE50 + frete_ML_ATE79_n) / denominador_MLC;
    const calc_MLC_pct_ate79 = (custo_com_margem + Taxa_ML_ATE79 + frete_ML_ATE79_n) / denominador_MLC;
    const calc_MLC_pct_acima79 = (custo_com_margem + Taxa_ML_ACIMA79 + frete_ML_ACIMA79_n) / denominador_MLC;
    var calcMLCPctLiq = (calc_MLC_pct_ate12 <= 12.5) ? calc_MLC_pct_ate12 : (calc_MLC_pct_ate29 <= 29) ? calc_MLC_pct_ate29 : (calc_MLC_pct_ate50 <= 50) ? calc_MLC_pct_ate50 : (calc_MLC_pct_ate79 <= 78.99) ? calc_MLC_pct_ate79 : calc_MLC_pct_acima79;

    // MLP Manual - calcMLPManual - simplificado
    var calcMLPManual = Manual - (custo + Manual * (constCnpj + Comissao_MLP) + taxa_Manual_ML + frete_Manual_ML);

    // MLP Valor Liquido - calcMLPValorLiq - com cascata de 5 ternários
    const calc_MLP_ate12 = (ValorLiq + custo + Taxa_ML_ATE12 + frete_ML_ATE79_n) / denominador_MLP;
    const calc_MLP_ate29 = (ValorLiq + custo + Taxa_ML_ATE29 + frete_ML_ATE79_n) / denominador_MLP;
    const calc_MLP_ate50 = (ValorLiq + custo + Taxa_ML_ATE50 + frete_ML_ATE79_n) / denominador_MLP;
    const calc_MLP_ate79 = (ValorLiq + custo + Taxa_ML_ATE79 + frete_ML_ATE79_n) / denominador_MLP;
    const calc_MLP_acima79 = (ValorLiq + custo + Taxa_ML_ACIMA79 + frete_ML_ACIMA79_n) / denominador_MLP;
    var calcMLPValorLiq = (calc_MLP_ate12 <= 12.5) ? calc_MLP_ate12 : (calc_MLP_ate29 <= 29) ? calc_MLP_ate29 : (calc_MLP_ate50 <= 50) ? calc_MLP_ate50 : (calc_MLP_ate79 <= 78.99) ? calc_MLP_ate79 : calc_MLP_acima79;

    // MLP Porcentagem Liquida - calcMLPPctLiq - com cascata de 5 ternários
    const calc_MLP_pct_ate12 = (custo_com_margem + Taxa_ML_ATE12 + frete_ML_ATE79_n) / denominador_MLP;
    const calc_MLP_pct_ate29 = (custo_com_margem + Taxa_ML_ATE29 + frete_ML_ATE79_n) / denominador_MLP;
    const calc_MLP_pct_ate50 = (custo_com_margem + Taxa_ML_ATE50 + frete_ML_ATE79_n) / denominador_MLP;
    const calc_MLP_pct_ate79 = (custo_com_margem + Taxa_ML_ATE79 + frete_ML_ATE79_n) / denominador_MLP;
    const calc_MLP_pct_acima79 = (custo_com_margem + Taxa_ML_ACIMA79 + frete_ML_ACIMA79_n) / denominador_MLP;
    var calcMLPPctLiq = (calc_MLP_pct_ate12 <= 12.5) ? calc_MLP_pct_ate12 : (calc_MLP_pct_ate29 <= 29) ? calc_MLP_pct_ate29 : (calc_MLP_pct_ate50 <= 50) ? calc_MLP_pct_ate50 : (calc_MLP_pct_ate79 <= 78.99) ? calc_MLP_pct_ate79 : calc_MLP_pct_acima79;

    // ======================== OLIST ==================================
    // Olist é um agregador de marketplace
    // Taxa fixa aplicada a todos os produtos
    // Frete progressivo até R$ 79

    // Olist Manual - calcOlistManual
    var calcOlistManual = Manual
        - (
            + custo
            + (Manual * (constCnpj + Comissao_Olist))
            + ((Manual <= 78.99 ? Frete_Olist_ATE79 :
                Manual >= 79 ? constFrete_Olist : 0
            ) * constNivel_Olist)
            + Taxa_Olist
        );

    // Olist Valor Liquido - calcOlistValorLiq
    // Abaixo de 78.99
    if (
        (ValorLiq
            + custo
            + Taxa_Olist
            + (Frete_Olist_ATE79 * constNivel_Olist)
        )
        /
        (1 - (constCnpj + Comissao_Olist)) <= 78.99) {
        calcOlistValorLiq =
            (ValorLiq
                + custo
                + Taxa_Olist
                + (Frete_Olist_ATE79 * constNivel_Olist)
            )
            /
            (1 - (constCnpj + Comissao_Olist));
    }

    // Olist Valor Liquido - calcOlistValorLiq
    // Acima de 79
    else {
        calcOlistValorLiq =
            (ValorLiq
                + custo
                + Taxa_Olist
                + (constFrete_Olist * constNivel_Olist)
            )
            /
            (1 - (constCnpj + Comissao_Olist));
    }

    // Olist Porcentagem Liquida - calcOlistPctLiq
    // Abaixo de 78.99
    if (
        (custo
            + (PctLiq * custo) / 100
            + Taxa_Olist
            + (Frete_Olist_ATE79 * constNivel_Olist)
        )
        /
        (1 - (constCnpj + Comissao_Olist)) <= 78.99) {
        calcOlistPctLiq =
            (custo
                + (PctLiq * custo) / 100
                + Taxa_Olist
                + (Frete_Olist_ATE79 * constNivel_Olist)
            )
            /
            (1 - (constCnpj + Comissao_Olist));
    }

    // Olist Porcentagem Liquida - calcOlistPctLiq
    // Acima de 79
    else {
        calcOlistPctLiq =
            (custo
                + (PctLiq * custo) / 100
                + Taxa_Olist
                + (constFrete_Olist * constNivel_Olist)
            )
            /
            (1 - (constCnpj + Comissao_Olist));
    }


    // ========================== RD ====================================
    // RD é um cliente especial com cálculo simplificado
    // Sem variação de nível ou múltiplas faixas de preço
    // Frete fixo + comissão padrão
    
    const denominador_RD = 1 - comissao_RD;
    const frete_RD_comissao = constFrete_RD * Comissao_RD;

    // RD Manual - calcRDManual - simplificado
    var calcRDManual = Manual - (custo + frete_RD_comissao + Manual * comissao_RD);

    // RD Valor Liquido - calcRDValorLiq
    var calcRDValorLiq = (ValorLiq + custo + frete_RD_comissao) / denominador_RD;

    // RD Porcentagem Liquida - calcRDPctLiq
    var calcRDPctLiq = (custo_com_margem + frete_RD_comissao) / denominador_RD;


    // ======================== SHEIN ================================
    // Shein: plataforma chinesa com taxa fixa
    // Frete progressivo até R$ 49,89
    // Duas faixas de cálculo principal: até 49,89 / acima de 49,89

    // Pré-calcular para Shein
    const denominador_Shein = 1 - comissao_Shein;
    const frete_Shein_ATE49_n = Frete_Shein_ATE49 * constNivel_Shein;
    const frete_Shein_ACIMA49_n = constFrete_Shein * constNivel_Shein;
    const frete_Shein_manual = (Manual <= 49.89 ? frete_Shein_ATE49_n : frete_Shein_ACIMA49_n);

    // Shein Manual - calcSheinManual - simplificado
    var calcSheinManual = Manual - (custo + Manual * constCnpj + Manual * Comissao_Shein + Taxa_Shein + frete_Shein_manual);

    // Shein Valor Liquido - calcSheinValorLiq - simplificado com ternário
    const calc_Shein_ate49 = (ValorLiq + custo + Taxa_Shein + frete_Shein_ATE49_n) / denominador_Shein;
    var calcSheinValorLiq = (calc_Shein_ate49 <= 49.89) ? calc_Shein_ate49 : (ValorLiq + custo + Taxa_Shein + frete_Shein_ACIMA49_n) / denominador_Shein;

    // Shein Porcentagem Liquida - calcSheinPctLiq - simplificado com ternário
    const calc_Shein_pct_ate49 = (custo_com_margem + Taxa_Shein + frete_Shein_ATE49_n) / denominador_Shein;
    var calcSheinPctLiq = (calc_Shein_pct_ate49 <= 49.89) ? calc_Shein_pct_ate49 : (custo_com_margem + Taxa_Shein + frete_Shein_ACIMA49_n) / denominador_Shein;

    // ======================== SHOPEE ==============================
    // Shopee: plataforma asiática com comissão variável por preço
    // Taxa progressiva com 4 faixas: até 79,99 / até 99,99 / até 199,99 / acima 200
    // Comissão também varia: até 79,99 vs acima de 79,99
    // Frete fixo para todos os produtos

    // Pré-calcular para Shopee
    const denominador_Shopee_ATE79 = 1 - (constCnpj + Comissao_Shopee_ATE79);
    const denominador_Shopee_ACIMA79 = 1 - (constCnpj + Comissao_Shopee_ACIMA79);
    const frete_Shopee_n = Frete_Shopee * constNivel_Shopee;
    const comissao_Shopee_manual_ATE79 = Manual * Comissao_Shopee_ATE79;
    const comissao_Shopee_manual_ACIMA79 = Manual * Comissao_Shopee_ACIMA79;

    // Shopee Manual - calcShopeeManual - simplificado com ternário
    var calcShopeeManual = Manual - (custo + Manual * constCnpj
        + (Manual <= 79.99 ? comissao_Shopee_manual_ATE79 : comissao_Shopee_manual_ACIMA79)
        + (Manual <= 79.99 ? Taxa_Shopee_ATE79 : Manual <= 99.99 ? Taxa_Shopee_ATE99 : Manual <= 199.99 ? Taxa_Shopee_ATE199 : Taxa_Shopee_ACIMA200)
        + frete_Shopee_n);

    // Shopee Valor Liquido - calcShopeeValorLiq - com cascata de ternários
    const calc_Shopee_ate79 = (ValorLiq + custo + Taxa_Shopee_ATE79 + frete_Shopee_n) / denominador_Shopee_ATE79;
    const calc_Shopee_ate99 = (ValorLiq + custo + Taxa_Shopee_ATE99 + frete_Shopee_n) / denominador_Shopee_ACIMA79;
    const calc_Shopee_ate199 = (ValorLiq + custo + Taxa_Shopee_ATE199 + frete_Shopee_n) / denominador_Shopee_ACIMA79;
    const calc_Shopee_acima200 = (ValorLiq + custo + Taxa_Shopee_ACIMA200 + frete_Shopee_n) / denominador_Shopee_ACIMA79;
    var calcShopeeValorLiq = (calc_Shopee_ate79 <= 79.99) ? calc_Shopee_ate79 : (calc_Shopee_ate99 <= 99.99) ? calc_Shopee_ate99 : (calc_Shopee_ate199 <= 199.99) ? calc_Shopee_ate199 : calc_Shopee_acima200;

    // Shopee Porcentagem Liquida - calcShopeePctLiq - com cascata de ternários
    const calc_Shopee_pct_ate79 = (custo_com_margem + Taxa_Shopee_ATE79 + frete_Shopee_n) / denominador_Shopee_ATE79;
    const calc_Shopee_pct_ate99 = (custo_com_margem + Taxa_Shopee_ATE99 + frete_Shopee_n) / denominador_Shopee_ACIMA79;
    const calc_Shopee_pct_ate199 = (custo_com_margem + Taxa_Shopee_ATE199 + frete_Shopee_n) / denominador_Shopee_ACIMA79;
    const calc_Shopee_pct_acima200 = (custo_com_margem + Taxa_Shopee_ACIMA200 + frete_Shopee_n) / denominador_Shopee_ACIMA79;
    var calcShopeePctLiq = (calc_Shopee_pct_ate79 <= 79.99) ? calc_Shopee_pct_ate79 : (calc_Shopee_pct_ate99 <= 99.99) ? calc_Shopee_pct_ate99 : (calc_Shopee_pct_ate199 <= 199.99) ? calc_Shopee_pct_ate199 : calc_Shopee_pct_acima200;

    // ============================================================================
    // ETAPA 7: EXIBIÇÃO DOS RESULTADOS NA PÁGINA HTML
    // ============================================================================
    // Os resultados calculados são formatados e exibidos em elementos HTML
    // Formato: "R$ XX,XX (YY%)" ou "R$ XX,XX (R$ YY,YY)"
    // 
    // NOTA ESPECIAL: Se o CNPJ for RAV SHEFA, apenas Presencial e Olist/RD 
    // são exibidos. Os demais canais ficam em branco para manter a interface clara.

    // Presencial - sempre exibido (todos os CNPJs)
    // Exibe 3 métodos: Manual (margem bruta), ValorLiq (valor líquido desejado), PctLiq (percentual de margem)
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

        // Amazon
        document.getElementById("resultado_Amazon_Manual").textContent = "R$ " + calcAmazonManual.toFixed(2).replace(".", ",") + " (" + ((calcAmazonManual / custo) * 100).toFixed(2).replace(".", ",") + "%)";
        document.getElementById("resultado_Amazon_ValorLiq").textContent = "R$ " + calcAmazonValorLiq.toFixed(2).replace(".", ",") + " (" + ((ValorLiq / custo) * 100).toFixed(2).replace(".", ",") + "%)";
        document.getElementById("resultado_Amazon_PctLiq").textContent = "R$ " + calcAmazonPctLiq.toFixed(2).replace(".", ",") + " (" + "R$ " + ((custo * PctLiq) / 100).toFixed(2).replace(".", ",") + ")";

        // Casas Bahia
        document.getElementById("resultado_CasasBahia_Manual").textContent = "R$ " + calcCasasBahiaManual.toFixed(2).replace(".", ",") + " (" + ((calcCasasBahiaManual / custo) * 100).toFixed(2).replace(".", ",") + "%)";
        document.getElementById("resultado_CasasBahia_ValorLiq").textContent = "R$ " + calcCasasBahiaValorLiq.toFixed(2).replace(".", ",") + " (" + ((ValorLiq / custo) * 100).toFixed(2).replace(".", ",") + "%)";
        document.getElementById("resultado_CasasBahia_PctLiq").textContent = "R$ " + calcCasasBahiaPctLiq.toFixed(2).replace(".", ",") + " (" + "R$ " + ((custo * PctLiq) / 100).toFixed(2).replace(".", ",") + ")";

        // Magalu
        document.getElementById("resultado_Magalu_Manual").textContent = "R$ " + calcMagaluManual.toFixed(2).replace(".", ",") + " (" + ((calcMagaluManual / custo) * 100).toFixed(2).replace(".", ",") + "%)";
        document.getElementById("resultado_Magalu_ValorLiq").textContent = "R$ " + calcMagaluValorLiq.toFixed(2).replace(".", ",") + " (" + ((ValorLiq / custo) * 100).toFixed(2).replace(".", ",") + "%)";
        document.getElementById("resultado_Magalu_PctLiq").textContent = "R$ " + calcMagaluPctLiq.toFixed(2).replace(".", ",") + " (" + "R$ " + ((custo * PctLiq) / 100).toFixed(2).replace(".", ",") + ")";

        // Mercado Livre Classico
        document.getElementById("resultado_MLC_Manual").textContent = "R$ " + calcMLCManual.toFixed(2).replace(".", ",") + " (" + ((calcMLCManual / custo) * 100).toFixed(2).replace(".", ",") + "%)";
        document.getElementById("resultado_MLC_ValorLiq").textContent = "R$ " + calcMLCValorLiq.toFixed(2).replace(".", ",") + " (" + ((ValorLiq / custo) * 100).toFixed(2).replace(".", ",") + "%)";
        document.getElementById("resultado_MLC_PctLiq").textContent = "R$ " + calcMLCPctLiq.toFixed(2).replace(".", ",") + " (" + "R$ " + ((custo * PctLiq) / 100).toFixed(2).replace(".", ",") + ")";


        // Mercado Livre Premium
        document.getElementById("resultado_MLP_Manual").textContent = "R$ " + calcMLPManual.toFixed(2).replace(".", ",") + " (" + ((calcMLPManual / custo) * 100).toFixed(2).replace(".", ",") + "%)";
        document.getElementById("resultado_MLP_ValorLiq").textContent = "R$ " + calcMLPValorLiq.toFixed(2).replace(".", ",") + " (" + ((ValorLiq / custo) * 100).toFixed(2).replace(".", ",") + "%)";
        document.getElementById("resultado_MLP_PctLiq").textContent = "R$ " + calcMLPPctLiq.toFixed(2).replace(".", ",") + " (" + "R$ " + ((custo * PctLiq) / 100).toFixed(2).replace(".", ",") + ")";

        // Olist
        document.getElementById("resultado_Olist_Manual").textContent = "R$ " + calcOlistManual.toFixed(2).replace(".", ",") + " (" + ((calcOlistManual / custo) * 100).toFixed(2).replace(".", ",") + "%)";
        document.getElementById("resultado_Olist_ValorLiq").textContent = "R$ " + calcOlistValorLiq.toFixed(2).replace(".", ",") + " (" + ((ValorLiq / custo) * 100).toFixed(2).replace(".", ",") + "%)";
        document.getElementById("resultado_Olist_PctLiq").textContent = "R$ " + calcOlistPctLiq.toFixed(2).replace(".", ",") + " (" + "R$ " + ((custo * PctLiq) / 100).toFixed(2).replace(".", ",") + ")";

        // RD
        document.getElementById("resultado_RD_Manual").textContent = "R$ " + calcRDManual.toFixed(2).replace(".", ",") + " (" + ((calcRDManual / custo) * 100).toFixed(2).replace(".", ",") + "%)";
        document.getElementById("resultado_RD_ValorLiq").textContent = "R$ " + calcRDValorLiq.toFixed(2).replace(".", ",") + " (" + ((ValorLiq / custo) * 100).toFixed(2).replace(".", ",") + "%)";
        document.getElementById("resultado_RD_PctLiq").textContent = "R$ " + calcRDPctLiq.toFixed(2).replace(".", ",") + " (" + "R$ " + ((custo * PctLiq) / 100).toFixed(2).replace(".", ",") + ")";

        // Shein
        document.getElementById("resultado_Shein_Manual").textContent = "R$ " + calcSheinManual.toFixed(2).replace(".", ",") + " (" + ((calcSheinManual / custo) * 100).toFixed(2).replace(".", ",") + "%)";
        document.getElementById("resultado_Shein_ValorLiq").textContent = "R$ " + calcSheinValorLiq.toFixed(2).replace(".", ",") + " (" + ((ValorLiq / custo) * 100).toFixed(2).replace(".", ",") + "%)";
        document.getElementById("resultado_Shein_PctLiq").textContent = "R$ " + calcSheinPctLiq.toFixed(2).replace(".", ",") + " (" + "R$ " + ((custo * PctLiq) / 100).toFixed(2).replace(".", ",") + ")";

        // Shopee
        document.getElementById("resultado_Shopee_Manual").textContent = "R$ " + calcShopeeManual.toFixed(2).replace(".", ",") + " (" + ((calcShopeeManual / custo) * 100).toFixed(2).replace(".", ",") + "%)";
        document.getElementById("resultado_Shopee_ValorLiq").textContent = "R$ " + calcShopeeValorLiq.toFixed(2).replace(".", ",") + " (" + ((ValorLiq / custo) * 100).toFixed(2).replace(".", ",") + "%)";
        document.getElementById("resultado_Shopee_PctLiq").textContent = "R$ " + calcShopeePctLiq.toFixed(2).replace(".", ",") + " (" + "R$ " + ((custo * PctLiq) / 100).toFixed(2).replace(".", ",") + ")";
    }

    // ============================================================================
    // FIM DA FUNÇÃO
    // ============================================================================
    // Todos os cálculos foram executados e os resultados foram exibidos na página.
    // Se precisar adicionar novos canais de vendas:
    // 1. Adicione as constantes necessárias em calc_variables.js
    // 2. Defina as constantes de CNPJ, frete, nível e insumos
    // 3. Implemente os três tipos de cálculo: Manual, ValorLiq, PctLiq
    // 4. Adicione elementos HTML para exibir os resultados
    // 5. Adicione a lógica de exibição (similarmente ao tratamento de RAV SHEFA)
}