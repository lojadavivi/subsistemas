/**
 * ============================================================================
 * SISTEMA DE CÁLCULO DE PREÇOS - VARIÁVEIS E CONSTANTES
 * ============================================================================
 * 
 * Arquivo: calc_variables.js
 * Propósito: Armazenar todas as constantes, alíquotas, comissões, fretes e taxas
 *            utilizadas pela calculadora de preços (calculadora.js)
 * 
 * Estrutura:
 * 1. Alíquotas por regime tributário (CNPJ)
 * 2. Comissões por canal de vendas
 * 3. Fretes progressivos por peso
 * 4. Descontos por nível de vendedor
 * 5. Taxas fixas por plataforma
 * 6. Custos de insumos
 * 
 * ⚠️ IMPORTANTE: Manter este arquivo SINCRONIZADO com as mudanças nas políticas 
 *    de comissão, frete e taxa das plataformas de vendas
 * 
 * ============================================================================
 */

// ============================================================================
// SEÇÃO 1: ALÍQUOTAS POR REGIME TRIBUTÁRIO
// ============================================================================

/**
 * ALÍQUOTA SIMPLES NACIONAL
 * 
 * Regime tributário com alíquota única para empresas enquadradas no Simples.
 * Varia conforme faturamento e atividade econômica.
 */
const cnpj_LTDA = 0.1; 
const cnpj_FERREIRA = 0.11;
const cnpj_VIVI = 0.04;

/**
 * LUCRO PRESUMIDO - CNPJ RAV (Rav Shefa Distribuidora de Cosméticos)
 * 
 * Regime tributário onde o lucro é presunmido pela Receita Federal.
 * Alíquota total = soma de todos os impostos e descontos abaixo.
 * 
 * Componentes:
 * - ICMS (Imposto sobre Circulação de Mercadorias): 17% (padrão cosméticos)
 * - PIS (Programa de Integração Social): 0.65%
 * - COFINS (Contribuição para Financiamento da Seguridade Social): 3%
 * - Frete (embutido nas despesas): 3%
 * - Comissão (desconto operacional): 10%
 * - Maquininha (Máquina de cartão): 3.29%
 * - IRPJ (Imposto de Renda Pessoa Jurídica): 15% sobre 8% presunção = 1.20%
 * - CSLL (Contribuição Social sobre o Lucro Líquido): 9% sobre 12% presunção = 1.08%
 * 
 * Total: 17% + 0.65% + 3% + 3% + 10% + 3.29% + 1.20% + 1.08% = 39.22%
 */
const ICMS_RAV = 0.17;                           // Imposto sobre circulação de mercadorias (cosméticos)
const PIS_RAV = 0.0065;                          // Programa de Integração Social
const COFINS_RAV = 0.03;                         // Contribuição ao Financiamento da Seguridade Social
const Frete_RAV = 0.03;                          // Frete embutido nas despesas operacionais
const Comissao_RAV = 0.1;                        // Comissão operacional geral
const Maquininha_RAV = 0.0329;                   // Taxa da máquina de cartão (débito + crédito médio)
const Presuncao_IRPJ_RAV = 0.08;                 // Presunção de lucro para IRPJ (8% do faturamento)
const Presuncao_CSLL_RAV = 0.12;                 // Presunção de lucro para CSLL (12% do faturamento)
const IRPJ_RAV = 0.15;                           // Alíquota do Imposto de Renda (15%)
const CSLL_RAV = 0.09;                           // Alíquota da Contribuição Social (9%)

/**
 * ALÍQUOTA TOTAL CNPJ RAV
 * Fórmula: Impostos + Fretes + Comissão + Maquininha + (IRPJ sobre presunção) + (CSLL sobre presunção)
 * Usado como "constCnpj" em calculadora.js para descontos no cálculo final
 */
const cnpj_RAV = (ICMS_RAV + PIS_RAV + COFINS_RAV + Frete_RAV + Comissao_RAV + Maquininha_RAV + (Presuncao_IRPJ_RAV * IRPJ_RAV) + (Presuncao_CSLL_RAV * CSLL_RAV));


// ============================================================================
// SEÇÃO 2: COMISSÕES POR CANAL DE VENDAS
// ============================================================================

/**
 * COMISSÃO: Taxa percentual cobrada pelo marketplace/plataforma em cada venda
 * 
 * Observações por canal:
 * - Presencial: 3.29% é o máximo da máquina Stone com crédito
 * - Amazon: 14.5% (inclui taxa de referência)
 * - Casas Bahia: 21% (comissão fixa + taxa)
 * - Magalu: 18% (comissão variável, valor aqui é média)
 * - Mercado Livre Clássico (MLC): 14% 
 * - Mercado Livre Premium (MLP): 19% (maior visibilidade, comissão maior)
 * - Olist: 21% (agregador, comissão mais elevada)
 * - RD (Estação): 19% (marketplace premium)
 * - Shein: 16% (e-commerce chinês)
 * - Shopee: Variável de 14-20% + taxa fixa por faixa de preço (14-26 reais)
 * 
 * Fórmula de cálculo: Preço final = (Custo + Margem) / (1 - Comissão)
 * Quanto maior a comissão, maior deve ser o preço final para manter margem
 */
const Comissao_Presencial = 0.0329;              // Máquina de cartão Stone (venda presencial)
const Comissao_Amazon = 0.145;                   // Amazon (taxa de referência + taxa de closing)
const Comissao_CasasBahia = 0.21;                // Casas Bahia (comissão + taxa)
const Comissao_Magalu = 0.18;                    // Magazine Luiza (comissão média)
const Comissao_MLC = 0.14;                       // Mercado Livre Clássico
const Comissao_MLP = 0.19;                       // Mercado Livre Premium
const Comissao_Olist = 0.21;                     // Olist (agregador de marketplace)
const Comissao_RD = 0.19;                        // RD Estação (e-commerce premium)
const Comissao_Shein = 0.16;                     // Shein (plataforma chinesa)
const Comissao_Shopee_ATE79 = 0.20;              // Shopee até R$ 79,99 (comissão maior)
const Comissao_Shopee_ACIMA79 = 0.14;            // Shopee acima de R$ 79,99 (comissão menor)

// ============================================================================
// SEÇÃO 3: FRETES PROGRESSIVOS POR PESO
// ============================================================================

/**
 * FRETE: Custo de envio progressivo conforme peso do produto
 * 
 * Padrão: Até 300g é a menor taxa, aumentando conforme peso cresce
 * 
 * Observações gerais:
 * - Fretes com valor 0 indicam que o cliente paga o frete
 * - Fretes com valores indicam que o vendedor absorve o custo
 * - Plataformas diferentes cobram valores diferentes mesmo para mesmo peso
 * - Quanto maior o preço do produto, menor é frequentemente o frete (política de incentivo)
 * 
 * O cálculo em calculadora.js multiplica o frete pelo nível_vendedor (desconto por desempenho)
 */

// ----- PRESENCIAL -----
// Não se aplica frete para vendas presenciais (retirada na loja)
const Frete_Presencial = 0;

// ----- AMAZON -----
// Frete progressivo com 4 faixas principais + tabela detalhada acima 79,00
// Até 30: baixo custo (pequenos itens)
// 30-50 e 50-79: intermediário
// Acima 79: tabela por peso (13 categorias de até 30kg)
const Frete_Amazon_ATE30 = 4.5;
const Frete_Amazon_30a50 = 6.5;
const Frete_Amazon_50a79 = 6.75;
// Tabela para acima de R$ 79 (fretes assumidos pelo vendedor)
const Frete_Amazon_ACIMA79_ate300G = 17.95;
const Frete_Amazon_ACIMA79_300a500G = 19.3;
const Frete_Amazon_ACIMA79_500Ga1KG = 20.2;
const Frete_Amazon_ACIMA79_1a2KG = 21.1;
const Frete_Amazon_ACIMA79_2a5KG = 25.6;
const Frete_Amazon_ACIMA79_5a9KG = 41;
const Frete_Amazon_ACIMA79_9a13KG = 69.5;
const Frete_Amazon_ACIMA79_13a17KG = 83.5;
const Frete_Amazon_ACIMA79_17a23KG = 104.5;
const Frete_Amazon_ACIMA79_23a30KG = 129;

// ----- CASAS BAHIA -----
// Até 69,89: Cliente paga frete (valor 0)
// Acima 69,90: Vendedor absorve frete
// Fretes acima de 69,90 são mais caros que Amazon (Casas Bahia negocia com transportadoras diferentes)
const Frete_CasasBahia_ATE69 = 0;
const Frete_CasasBahia_ACIMA79_ate300G = 29;
const Frete_CasasBahia_ACIMA79_300a500G = 29;
const Frete_CasasBahia_ACIMA79_500Ga1KG = 32;
const Frete_CasasBahia_ACIMA79_1a2KG = 34;
const Frete_CasasBahia_ACIMA79_2a5KG = 42;
const Frete_CasasBahia_ACIMA79_5a9KG = 67.9;
const Frete_CasasBahia_ACIMA79_9a13KG = 91.9;
const Frete_CasasBahia_ACIMA79_13a17KG = 104.9;
const Frete_CasasBahia_ACIMA79_17a23KG = 112.9;
const Frete_CasasBahia_ACIMA79_23a30KG = 119.9;

// ----- MAGALU (Magazine Luiza) -----
// Até 78,99: Cliente paga frete (valor 0)
// Acima 79: Vendedor absorve frete (custos reduzidos comparado a Casas Bahia)
const Frete_Magalu_ATE79 = 0;
const Frete_Magalu_ACIMA79_ate300G = 29.9;
const Frete_Magalu_ACIMA79_300a500G = 29.9;
const Frete_Magalu_ACIMA79_500Ga1KG = 35.9;
const Frete_Magalu_ACIMA79_1a2KG = 38.9;
const Frete_Magalu_ACIMA79_2a5KG = 46.9;
const Frete_Magalu_ACIMA79_5a9KG = 68.9;
const Frete_Magalu_ACIMA79_9a13KG = 89.9;
const Frete_Magalu_ACIMA79_13a17KG = 102.9;
const Frete_Magalu_ACIMA79_17a23KG = 125.9;
const Frete_Magalu_ACIMA79_23a30KG = 139.9;

// ----- MERCADO LIVRE -----
// Até 78,99: Cliente paga frete (valor 0)
// Acima 79: Vendedor absorve frete (fretes mais caros que Amazon e Magalu)
const Frete_ML_ATE79 = 0;
const Frete_ML_ACIMA79_ate300G = 40.90;
const Frete_ML_ACIMA79_300a500G = 41.9;
const Frete_ML_ACIMA79_500Ga1KG = 43.9;
const Frete_ML_ACIMA79_1a2KG = 46.9;
const Frete_ML_ACIMA79_2a5KG = 51.9;
const Frete_ML_ACIMA79_5a9KG = 83.9;
const Frete_ML_ACIMA79_9a13KG = 131.9;
const Frete_ML_ACIMA79_13a17KG = 146.9;
const Frete_ML_ACIMA79_17a23KG = 171.9;
const Frete_ML_ACIMA79_23a30KG = 197.9;

// ----- OLIST -----
// Até 78,99: Cliente paga frete (valor 0)
// Acima 79: Vendedor absorve frete (Olist usa transportadoras próprias, fretes intermediários)
const Frete_Olist_ATE79 = 0;
const Frete_Olist_ACIMA79_ate300G = 37.9;
const Frete_Olist_ACIMA79_300a500G = 38.9;
const Frete_Olist_ACIMA79_500Ga1KG = 42.9;
const Frete_Olist_ACIMA79_1a2KG = 44.9;
const Frete_Olist_ACIMA79_2a5KG = 52.9;
const Frete_Olist_ACIMA79_5a9KG = 81.9;
const Frete_Olist_ACIMA79_9a13KG = 127.9;
const Frete_Olist_ACIMA79_13a17KG = 142.9;
const Frete_Olist_ACIMA79_17a23KG = 166.9;
const Frete_Olist_ACIMA79_23a30KG = 191.9;

// ----- RD ESTAÇÃO -----
// Cliente SEMPRE paga frete (Rd não absorve custo acima de nenhuma faixa)
// Uma única faixa de fette considerada em cálculos (constFrete_RD)
const Frete_RD_ate300G = 40.90;
const Frete_RD_300a500G = 41.9;
const Frete_RD_500Ga1KG = 43.9;
const Frete_RD_1a2KG = 46.9;
const Frete_RD_2a5KG = 51.9;
const Frete_RD_5a9KG = 83.9;
const Frete_RD_9a13KG = 131.9;
const Frete_RD_13a17KG = 146.9;
const Frete_RD_17a23KG = 171.9;
const Frete_RD_23a30KG = 197.9;

// ----- SHEIN -----
// Até 49,89: Cliente paga frete (valor 0)
// Acima 49,90: Vendedor absorve frete (fretes muito baixos, incentivo para preços altos)
// Shein tem política de frete subsidiado para atrair vendedores
const Frete_Shein_ATE49 = 0;
const Frete_Shein_ACIMA49_ate300G = 4;
const Frete_Shein_ACIMA49_300a500G = 5;
const Frete_Shein_ACIMA49_500Ga1KG = 5;
const Frete_Shein_ACIMA49_1a2KG = 5;
const Frete_Shein_ACIMA49_2a5KG = 15;
const Frete_Shein_ACIMA49_5a9KG = 32;
const Frete_Shein_ACIMA49_9a13KG = 63;
const Frete_Shein_ACIMA49_13a17KG = 73;
const Frete_Shein_ACIMA49_17a23KG = 89;
const Frete_Shein_ACIMA49_23a30KG = 106;

// ----- SHOPEE -----
// Cliente SEMPRE paga frete (Shopee não absorve em nenhuma faixa)
// Frete fixo único por padrão
const Frete_Shopee = 0;

// ============================================================================
// SEÇÃO 4: DESCONTOS PROGRESSIVOS POR NÍVEL DE VENDEDOR
// ============================================================================

/**
 * NÍVEL DE VENDEDOR: Desconto (multiplicador) aplicado ao frete conforme desempenho
 * 
 * Fórmula no calculadora.js: frete_final = frete_base * Nivel_Vendedor
 * 
 * Interpretação:
 * - 1.0 (100%): Sem desconto, paga o frete integral
 * - 0.75 (75%): 25% de desconto no frete
 * - 0.6 (60%): 40% de desconto no frete
 * - 0.5 (50%): 50% de desconto no frete
 * 
 * Descontos aparecem progressivamente em vendedores que mantêm:
 * - Alta taxa de cumprimento de prazo
 * - Baixa taxa de devolução
 * - Bom atendimento ao cliente
 * - Produtos com avaliações positivas
 */

// ----- PRESENCIAL -----
// Vendas presenciais não têm nível de vendedor
const Nivel_Presencial = 1;

// ----- AMAZON -----
// Amazon não usa sistema de níveis para desconto de frete (frete fixo por faixa)
const Nivel_Amazon = 1;

// ----- CASAS BAHIA -----
// 5 níveis de vendedor (1-5)
// Nível 1-3: Sem desconto (1.0)
// Nível 4: 40% de desconto (frete com 60% = 0.6)
// Nível 5: 50% de desconto (frete com 50% = 0.5)
const Nivel_CasasBahia_1 = 1;
const Nivel_CasasBahia_2 = 1;
const Nivel_CasasBahia_3 = 1;
const Nivel_CasasBahia_4 = 0.6;
const Nivel_CasasBahia_5 = 0.5;

// ----- MAGALU -----
// 5 níveis de vendedor (1-5)
// Nível 1-2: Sem desconto (1.0)
// Nível 3: 25% de desconto (frete com 75% = 0.75)
// Nível 4-5: 50% de desconto (frete com 50% = 0.5)
const Nivel_Magalu_1 = 1;
const Nivel_Magalu_2 = 1;
const Nivel_Magalu_3 = 0.75;
const Nivel_Magalu_4 = 0.5;
const Nivel_Magalu_5 = 0.5;

// ----- MERCADO LIVRE -----
// 5 níveis de vendedor (1-5)
// Nível 1-2: Sem desconto (1.0)
// Nível 3: 40% de desconto (frete com 60% = 0.6)
// Nível 4-5: 50% de desconto (frete com 50% = 0.5)
const Nivel_ML_1 = 1;
const Nivel_ML_2 = 1;
const Nivel_ML_3 = 0.6;
const Nivel_ML_4 = 0.5;
const Nivel_ML_5 = 0.5;

// ----- OLIST -----
// 5 níveis de vendedor (1-5)
// Nível 1-2: 20% de desconto (frete com 80% = 0.8, incentivo para novos vendedores)
// Nível 3: 40% de desconto (frete com 60% = 0.6)
// Nível 4-5: 50% de desconto (frete com 50% = 0.5)
const Nivel_Olist_1 = 0.8;
const Nivel_Olist_2 = 0.8;
const Nivel_Olist_3 = 0.6;
const Nivel_Olist_4 = 0.5;
const Nivel_Olist_5 = 0.5;

// ----- RD ESTAÇÃO -----
// RD não usa sistema de níveis (frete fixo sem desconto)
const Nivel_RD = 1;

// ----- SHEIN -----
// Shein não usa sistema de níveis oficialmente
const Nivel_Shein = 1;

// ----- SHOPEE -----
// Shopee não usa sistema de níveis para desconto de frete em cosméticos
const Nivel_Shopee = 1;

// ============================================================================
// SEÇÃO 5: TAXAS FIXAS POR PLATAFORMA
// ============================================================================

/**
 * TAXA FIXA: Valor em reais cobrado por transação, independente do preço
 * 
 * Diferentes de comissões (que são percentuais), as taxas são:
 * - Somadas ao custo direto do produto
 * - Aumentam margem negativa em produtos baratos
 * - Geralmente têm faixas de preço (ex: Shopee taxa varia com preço)
 * 
 * Impacto: Maior para produtos de baixo valor, insignificante para produtos caros
 * Fórmula: Preço final = (Custo + Margem + Taxa) / (1 - Comissão)
 */

// ----- PRESENCIAL -----
// Nenhuma taxa fixa para vendas presenciais
const Taxa_Presencial = 0;

// ----- AMAZON -----
// Amazon não cobra taxa fixa (comissão é o único custo)
const Taxa_Amazon = 0;

// ----- CASAS BAHIA -----
// Casas Bahia não cobra taxa fixa (comissão é o único custo)
const Taxa_CasasBahia = 0;

// ----- MAGALU -----
// Taxa variável por preço do produto
// Até R$ 9,99: Sem taxa fixa
// De R$ 10 em diante: R$ 2.00 (produtos de beleza são enquadrados aqui)
const Taxa_Magalu_ATE10 = 0;
const Taxa_Magalu_ACIMA10 = 2;

// ----- MERCADO LIVRE -----
// Taxa por faixa de preço (para cobertura de pagamento, logística)
// Até R$ 12,50: Sem taxa (item muito barato)
// R$ 12,50 - R$ 29: R$ 6,25
// R$ 29 - R$ 50: R$ 6,50
// R$ 50 - R$ 79: R$ 6,75
// Acima de R$ 79: Sem taxa (produção é mais importante que taxa)
const Taxa_ML_ATE12 = 0;
const Taxa_ML_ATE29 = 6.25;
const Taxa_ML_ATE50 = 6.5;
const Taxa_ML_ATE79 = 6.75;
const Taxa_ML_ACIMA79 = 0;

// ----- OLIST -----
// Taxa fixa por venda (cobertura de plataforma)
const Taxa_Olist = 5;

// ----- RD ESTAÇÃO -----
// RD não cobra taxa fixa
const Taxa_RD = 0;

// ----- SHEIN -----
// Shein não cobra taxa fixa (comissão é o único custo)
const Taxa_Shein = 0;

// ----- SHOPEE -----
// Taxa progressiva conforme faixa de preço
// Até R$ 79,99: R$ 4,00 (incentivo para produtos baratos)
// R$ 80,00 - R$ 99,99: R$ 16,00 (transição)
// R$ 100,00 - R$ 199,99: R$ 20,00 (produto de valor intermediário)
// Acima de R$ 200,00: R$ 26,00 (produto premium)
const Taxa_Shopee_ATE79 = 4;
const Taxa_Shopee_ATE99 = 16;
const Taxa_Shopee_ATE199 = 20;
const Taxa_Shopee_ACIMA200 = 26;

// ============================================================================
// SEÇÃO 6: CUSTOS DE INSUMOS (EMBALAGEM E INSUMOS)
// ============================================================================

/**
 * CUSTO DE INSUMOS: Despesa com embalagem, etiqueta, proteção, etc.
 * 
 * Varia conforme peso/volume do produto:
 * - Produtos pequenos (até 300g): R$ 1,00
 *   Embalagem simples, pouco material de proteção
 * 
 * - Produtos maiores (acima 300g): R$ 2,00
 *   Embalagem reforçada, mais material de proteção para evitar danos
 * 
 * Este custo é ADICIONADO ao custo do produto e afeta todos os cálculos
 * de margem em todas as plataformas.
 * 
 * Fórmula simplificada: Preço = (Custo_Produto + Custo_Insumos + Margem) / (1 - Comissão)
 */
const Custo_Insumos_ate300G = 1;    // Embalagem simples para itens pequenos
const Custo_Insumos_acima300G = 2;  // Embalagem reforçada para itens maiores

// ============================================================================
// FIM DO ARQUIVO
// ============================================================================
